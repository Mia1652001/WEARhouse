"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-stone-300 text-sm">Thanks for subscribing! We&apos;ll be in touch.</p>
    );
  }

  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 px-4 py-3 bg-stone-800 text-white placeholder-stone-500 border border-stone-700 text-sm focus:outline-none focus:border-stone-400 transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-white text-stone-900 text-xs font-semibold tracking-widest uppercase hover:bg-stone-100 transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
