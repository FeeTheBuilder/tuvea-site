"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('sent');
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setError(data?.error || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setError('Server error. Please try again later.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subject" name="subject" />
      <div>
        <label className="text-sm text-white/80">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-2 w-full rounded-xl border border-brand-gold/20 bg-brand-dark px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
          placeholder="Tell us how we can help you..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-xl bg-brand-gold px-5 py-3 text-sm font-medium text-black hover:bg-brand-lightGold disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'sent' && (
        <p className="text-sm text-white/80">Your message has been sent. We’ll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-300">{error}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm text-white/80">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-brand-gold/20 bg-brand-dark px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
      />
    </div>
  );
}