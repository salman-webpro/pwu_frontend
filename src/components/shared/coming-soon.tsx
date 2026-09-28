"use client";

import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Arbitrary placeholder launch date — there's no real ship date yet, this
// just keeps the countdown ticking down instead of frozen at fixed numbers.
const LAUNCH_DATE = new Date("2026-12-01T00:00:00");

function getTimeRemaining() {
  const totalMs = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

function CountdownUnit({ value, unit }: { value: number; unit: string }) {
  return (
    <div className="flex items-baseline">
      <span
        className="text-7xl font-bold sm:text-8xl lg:text-9xl"
        style={{ WebkitTextStroke: "2px currentColor", color: "transparent" }}
      >
        {value}
      </span>
      <span className="ml-1 text-lg font-medium text-muted-foreground">
        {unit}
      </span>
    </div>
  );
}

export function ComingSoon() {
  const [remaining, setRemaining] = useState(getTimeRemaining);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setRemaining(getTimeRemaining()), 60_000);
    return () => clearInterval(interval);
  }, []);

  function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    toast.success("You're on the list — we'll email you when this launches.");
    setEmail("");
  }

  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:px-16">
      <div className="flex flex-wrap gap-x-12 gap-y-4 text-muted-foreground/40">
        <CountdownUnit value={remaining.days} unit="d" />
        <CountdownUnit value={remaining.hours} unit="h" />
        <CountdownUnit value={remaining.minutes} unit="m" />
      </div>

      <h1 className="mt-10 text-5xl leading-tight font-extrabold text-brand-pink sm:text-6xl">
        We are
        <br />
        Coming Soon.
      </h1>

      <form
        onSubmit={handleSubscribe}
        className="mt-10 max-w-md"
      >
        <p className="font-semibold">Get notified when we launch</p>
        <div className="mt-3 flex gap-2">
          <Input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-10"
          />
          <Button
            type="submit"
            className="h-10 shrink-0 bg-brand-pink text-white hover:bg-brand-pink/90"
          >
            Subscribe
          </Button>
        </div>
      </form>

      <p className="mt-16 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Print Wave USA. All rights reserved.
      </p>
    </div>
  );
}
