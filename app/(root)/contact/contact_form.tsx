"use client";

import { useTransition } from "react";
import { toast } from "sonner";

type ContactFormProps = {
  action: (formData: FormData) => Promise<void>;
};

const ContactForm = ({ action }: ContactFormProps) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      try {
        await action(formData);
        form.reset();
        toast.success("Your message has been sent successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message. Please try again.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-6">
      <div className="grid gap-2">
        <label className="text-sm font-semibold" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="Jane Doe"
          disabled={isPending}
        />
      </div>

      <div className="grid gap-2 md:grid-cols-2 md:gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="you@example.com"
            disabled={isPending}
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="+1 555 123 4567"
            disabled={isPending}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="How can we help?"
          disabled={isPending}
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="Share a bit more about your request."
          disabled={isPending}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-70"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
