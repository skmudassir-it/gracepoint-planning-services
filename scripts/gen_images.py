#!/usr/bin/env python3
"""Batch generate + download AI images via FAL queue API for GracePoint Planning Services."""
import json, os, time, urllib.request, concurrent.futures

KEY = open("/tmp/fal_key.txt").read().strip()
AUTH = {"Authorization": f"Key {KEY}", "Content-Type": "application/json"}
OUT = "/root/sites/gracepoint-planning-services/src/app/images"
os.makedirs(OUT, exist_ok=True)

STYLE = ("Soft natural lighting, serene and dignified mood, muted slate-blue (#3b4a5a) and warm bronze "
         "(#b08d57) color palette, photorealistic, high detail, gentle soft focus, no text, no words, "
         "no letters, no placeholders, no logos, no signage.")

IMAGES = [
    ("hero", "landscape_16_9",
     "Wide serene view of a calm sunlit consultation sitting room, soft armchairs, delicate muted flowers on "
     "a low table, sheer curtains glowing with warm morning light, muted slate-blue and warm bronze palette, "
     "peaceful dignified atmosphere, empty room"),
    ("service-preneed", "landscape_16_9",
     "Elegant desk scene with blank planning documents and a fountain pen, soft linen textures, warm bronze "
     "details, muted slate-blue tones, soft window light, calm dignified funeral pre-planning consultation mood"),
    ("service-cremation", "landscape_16_9",
     "Peaceful garden memorial setting with smooth pale stone, soft greenery and gentle light, subtle warm "
     "bronze accents, muted slate-blue tones, serene dignified atmosphere, no people"),
    ("service-burial", "landscape_16_9",
     "Serene cemetery grounds with gentle rolling lawns and a calm winding path, soft golden light, muted "
     "slate-blue and warm bronze palette, peaceful dignified mood"),
    ("service-memorial", "landscape_16_9",
     "Intimate memorial gathering room with warm candlelight, soft muted floral arrangements, comfortable "
     "chairs, gentle light through tall windows, dignified calm atmosphere, no people"),
    ("service-veterans", "landscape_16_9",
     "American flag draped softly in warm gentle light, muted tones, bronze and slate-blue palette, dignified "
     "patriotic atmosphere, soft blurred background, no text"),
    ("service-prepaid", "landscape_16_9",
     "Neatly organized financial folders and blank documents on an elegant desk with a brass pen and a small "
     "bronze lockbox, soft window light, slate-blue and warm bronze palette, calm assured mood"),
    ("service-grief", "landscape_16_9",
     "Comforting scene of a soft sunlit window with gentle green plants and a cozy armchair with a folded "
     "blanket, warm neutral tones with bronze and slate-blue accents, peaceful healing atmosphere, no people"),
    ("about", "landscape_16_9",
     "Warm professional consultation room with two upholstered armchairs and a small wooden table with tea "
     "and flowers, soft natural light, muted slate-blue and warm bronze tones, welcoming dignified atmosphere, "
     "no people"),
    ("project-1", "landscape_16_9",
     "Estate planning documents arranged neatly on a wooden table with a bronze pen holder and soft flowers, "
     "warm natural light, slate-blue and warm bronze palette, reassuring atmosphere, no people"),
    ("project-2", "landscape_16_9",
     "Elegant desk with a blank planning portfolio, fountain pen and a bronze lamp glowing warmly, slate-blue "
     "wall softly blurred behind, dignified professional mood, no people"),
    ("project-3", "landscape_16_9",
     "Community gathering hall softly lit with rows of chairs and gentle floral arrangements, warm light, "
     "muted slate-blue and bronze palette, supportive dignified atmosphere, no visible faces"),
    ("cta", "landscape_16_9",
     "Wide elegant reception area with soft armchairs and a wooden reception desk, warm lamp light, muted "
     "slate-blue wall with warm bronze accents, inviting calm mood, no people"),
    ("og", "landscape_16_9",
     "Clean wide banner composition, calm abstract soft gradient waves in muted slate-blue and warm bronze "
     "with gentle light, elegant minimal serene design, no text"),
]


def extract_images(st):
    if isinstance(st, dict):
        for key in ("images", "output", "data", "result"):
            v = st.get(key)
            if isinstance(v, dict) and isinstance(v.get("images"), list):
                return v["images"]
            if isinstance(v, list):
                return v
        if isinstance(st.get("images"), list):
            return st["images"]
    return []


def gen(name, size, prompt):
    body = json.dumps({"prompt": prompt + " " + STYLE, "image_size": size}).encode()
    req = urllib.request.Request("https://queue.fal.run/fal-ai/flux/dev", data=body, headers=AUTH, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            data = json.loads(r.read().decode())
    except Exception as e:
        print(f"[{name}] submit err {e}", flush=True)
        return False
    status_url = data.get("status_url") or data.get("url")
    if not status_url:
        print(f"[{name}] NO status_url: {json.dumps(data)[:300]}", flush=True)
        return False
    for attempt in range(120):
        time.sleep(3)
        req = urllib.request.Request(status_url, headers=AUTH)
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                st = json.loads(r.read().decode())
        except Exception as e:
            print(f"[{name}] poll err {e}", flush=True)
            continue
        status = st.get("status") if isinstance(st, dict) else None
        if status == "COMPLETED":
            imgs = extract_images(st)
            if not imgs:
                resp_url = st.get("response_url")
                if resp_url:
                    try:
                        req = urllib.request.Request(resp_url, headers=AUTH)
                        with urllib.request.urlopen(req, timeout=60) as r:
                            st = json.loads(r.read().decode())
                        imgs = extract_images(st)
                    except Exception as e:
                        print(f"[{name}] response fetch err {e}", flush=True)
            if not imgs:
                print(f"[{name}] COMPLETED but no images. dump={json.dumps(st)[:400]}", flush=True)
                return False
            url = imgs[0].get("url") or imgs[0].get("asset_url")
            if not url:
                print(f"[{name}] image missing url: {json.dumps(imgs[0])[:300]}", flush=True)
                return False
            out = os.path.join(OUT, f"{name}.jpg")
            urllib.request.urlretrieve(url, out)
            print(f"[{name}] OK -> {out} ({os.path.getsize(out)} bytes)", flush=True)
            return True
        if status in ("FAILED", "CANCELLED"):
            print(f"[{name}] {status}: {json.dumps(st)[:400]}", flush=True)
            return False
        if attempt % 10 == 9:
            print(f"[{name}] still {status} after {(attempt+1)*3}s", flush=True)
    print(f"[{name}] TIMEOUT", flush=True)
    return False


def main():
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(gen, n, s, p): n for n, s, p in IMAGES}
        ok = 0
        for f in concurrent.futures.as_completed(futs):
            if f.result():
                ok += 1
    print(f"DONE {ok}/{len(IMAGES)} images", flush=True)


if __name__ == "__main__":
    main()
