"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;
    // Replace with your form backend (Formspree, server action, etc.)
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Portfolio: ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${email}`)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6"
      noValidate
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[length:var(--step--1)] font-medium text-fg">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-[length:var(--step--1)] font-medium text-fg"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@domain.com"
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-[length:var(--step--1)] font-medium text-fg"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A sentence or two about what you’re looking for"
          className={cn(inputClass, "min-h-[8rem] resize-y")}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary">
          Send message
        </Button>
        {sent ? (
          <p className="text-[length:var(--step--1)] text-fg-muted" role="status">
            Opening your email app…
          </p>
        ) : null}
      </div>
      <p className="text-[length:var(--step--1)] text-fg-muted">
        This demo uses your email client. Wire this form to Formspree or a server
        action when you deploy.
      </p>
    </form>
  );
}

const inputClass = cn(
  "w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 py-2.5 text-[length:var(--step-0)] text-fg shadow-sm placeholder:text-fg-muted",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
);
