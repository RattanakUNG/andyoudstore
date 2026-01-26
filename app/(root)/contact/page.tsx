import { sendContactEmail } from "@/emails";
import { toast } from "sonner";

const submitContact = async (formData: FormData) => {
  "use server";

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const subject = formData.get("subject")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !email || !subject || !message) {
    throw new Error("Missing required contact fields.");
  }

  const result = await sendContactEmail({
    name,
    email,
    phone,
    subject,
    message,
  });

  if (!result) {
    throw new Error("Failed to send contact email.");
  }

  toast.success("Your message has been sent successfully!");
};

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-16">
      <div className="w-full max-w-3xl rounded-2xl border shadow-lg bg-white/80 backdrop-blur p-6 md:p-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-2">
          Tell us what you need and we'll get back within one business day.
        </p>

        <form action={submitContact} className="mt-6 grid grid-cols-1 gap-6">
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
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Send Message
          </button>
        </form>
      </div>

      <h2 className="text-3xl font-bold mb-8 mt-8">
        Or visit us with the following address
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Cambodia</h2>
          <p>ANDYOUD (CAMBODIA) CO .LTD, TOUL SNGKE OFFICE</p>
          <p>Phone: +66-86 037 1105</p>
          <p>Email: andy_international@gmail.com || cambodia@andyoud.com</p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Dubai, United Arab Emirates
          </h2>
          <p>GLOBAL VILLAGE, ASIAN ROAD, SHOP #9</p>
          <p>Phone: +966 58-2344-997</p>
          <p>Email: andy_international@gmail.com</p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Bangkok, THAILAND</h2>
          <p>4/13 SUKHUMVIT 5 WATTANA</p>
          <p>Phone: +66-86 037 1105</p>
          <p>Email: andy_international@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Locations;
