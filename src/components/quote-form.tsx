"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { quoteSchema, serviceOptions, type QuoteFormValues } from "@/lib/quote-schema";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: QuoteFormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Planning request received!", {
          description: "A compassionate counselor will reach out within one business day.",
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: data.error ?? "Please try again in a moment.",
        });
      }
    } catch {
      toast.error("Network error", { description: "Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="glass-strong border-white/80 shadow-2xl shadow-[rgba(59,74,90,0.18)]">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-primary">
          Request your free consultation
        </CardTitle>
        <CardDescription>
          Tell us a little about your planning needs and a compassionate counselor will get
          back to you within one business day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2" noValidate>
          <div className="space-y-2">
            <Label htmlFor="name">Full name *</Label>
            <Input
              id="name"
              placeholder="Jordan Avery"
              autoComplete="name"
              aria-invalid={!!errors.name}
              className="min-h-11 bg-white/60"
              {...register("name")}
            />
            {errors.name && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              className="min-h-11 bg-white/60"
              {...register("email")}
            />
            {errors.email && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 000-0000"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              className="min-h-11 bg-white/60"
              {...register("phone")}
            />
            {errors.phone && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">City / State (optional)</Label>
            <Input
              id="company"
              placeholder="Austin, TX"
              autoComplete="off"
              className="min-h-11 bg-white/60"
              {...register("company")}
            />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="service">What would you like to plan? *</Label>
            <Select
              value={control._formValues.service ?? ""}
              onValueChange={(value) => setValue("service", value ?? "")}
            >
              <SelectTrigger className="min-h-11 w-full bg-white/60" id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {errors.service.message}
              </p>
            )}
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="message">Tell us more *</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="What kind of planning are you considering? Any questions or concerns…"
              aria-invalid={!!errors.message}
              className="min-h-28 resize-none bg-white/60"
              {...register("message")}
            />
            {errors.message && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <Button
              type="submit"
              disabled={submitting}
              className="btn-gradient min-h-12 w-full rounded-xl text-sm font-semibold"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden />
                  Request my consultation
                </>
              )}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No obligation, no pressure — just compassionate, honest guidance.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
