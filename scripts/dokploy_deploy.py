#!/usr/bin/env python3
"""Create + deploy ShieldWise Insurance Group on Dokploy via REST API."""
import json, os, sys, urllib.request

API = "http://127.0.0.1:3000/api"
KEY = os.environ["DOKPLOY_API_KEY"]
HEADERS = {"X-API-Key": KEY, "Content-Type": "application/json"}

def post(path, body):
    req = urllib.request.Request(API + path, data=json.dumps(body).encode(), headers=HEADERS, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            raw = r.read().decode()
            return r.status, (json.loads(raw) if raw.strip() else {})
    except urllib.error.HTTPError as e:
        raw = e.read().decode()
        return e.code, (json.loads(raw) if raw.strip() else {"_raw": raw})

state = {}

# 1. Project
code, resp = post("/project.create", {"name": "shieldwise-insurance-group", "description": "ShieldWise Insurance Group"})
print("project.create:", code, json.dumps(resp)[:200])
if code >= 400:
    sys.exit("project.create failed")
project_id = resp.get("project", {}).get("projectId") or resp.get("projectId")
env_id = resp.get("environment", {}).get("environmentId") or resp.get("environmentId")
state["projectId"] = project_id
state["environmentId"] = env_id
print("projectId:", project_id, "environmentId:", env_id)

# 2. Application
code, resp = post("/application.create", {
    "name": "ShieldWise Insurance Group",
    "appName": "shieldwise-insurance-group",
    "environmentId": env_id,
})
print("application.create:", code, json.dumps(resp)[:200])
app_id = resp.get("applicationId")
state["applicationId"] = app_id
if not app_id:
    sys.exit("application.create failed, no applicationId")

# 3. Build type
code, resp = post("/application.saveBuildType", {
    "applicationId": app_id, "buildType": "nixpacks",
    "dockerfile": None, "dockerContextPath": None, "dockerBuildStage": None,
    "herokuVersion": None, "railpackVersion": None,
})
print("saveBuildType:", code, json.dumps(resp)[:120])

# 4. Git provider
code, resp = post("/application.saveGitProvider", {
    "applicationId": app_id,
    "customGitUrl": "https://github.com/skmudassir-it/shieldwise-insurance-group.git",
    "customGitBranch": "main",
    "customGitBuildPath": "/",
    "watchPaths": None, "enableSubmodules": False, "customGitSSHKeyId": None,
})
print("saveGitProvider:", code, json.dumps(resp)[:120])

# 5. Environment
code, resp = post("/application.saveEnvironment", {
    "applicationId": app_id, "env": "", "buildArgs": None,
    "buildSecrets": None, "createEnvFile": True,
})
print("saveEnvironment:", code, json.dumps(resp)[:120])

# 6. Domain
code, resp = post("/domain.create", {
    "host": "shieldwise-insurance-group.amsitservices.com",
    "https": True, "certificateType": "letsencrypt",
    "applicationId": app_id, "port": 3000,
    "domainType": "application", "stripPath": False,
})
print("domain.create:", code, json.dumps(resp)[:200])

# 7. Deploy (async)
code, resp = post("/application.deploy", {"applicationId": app_id})
print("application.deploy:", code, json.dumps(resp)[:120])

print(json.dumps(state, indent=2))
