import ContactForm from "./contact_form";
import { sendContactEmail } from "@/emails";
import { Phone, Mail, Instagram } from "lucide-react";

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

  await sendContactEmail({
    name,
    email,
    phone,
    subject,
    message,
  });
};

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-16">
      <div className="w-full max-w-3xl rounded-2xl border shadow-lg bg-white/80 backdrop-blur p-6 md:p-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-2">
          Tell us what you need and we will get back within one business day.
        </p>

        <ContactForm action={submitContact} />
      </div>

      <div className="text-center mb-8 mt-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Kavin Krisnawongsakul
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mt-2 font-medium">
          "Andy"
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <span className="text-sm text-muted-foreground">Our Locations</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Cambodia</h2>
          <p>ANDYOUD (CAMBODIA) CO .LTD, TOUL SNGKE OFFICE</p>
          <p>Phone: +66 819 270 997</p>
          <p>Email: andyoudinternational@gmail.com</p>
        </div> */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Dubai, UAE</h2>
          <p className="text-sm">GLOBAL VILLAGE, ASIAN ROAD, SHOP #9</p>
          <p className="text-sm">Phone: +971 58-234-4997</p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Bahrain</h2>
          <p className="text-sm">Soug AI Baraha Shop 1112</p>
          <p className="text-sm">Phone: +973 321-77-888</p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Bangkok, THAILAND</h2>
          <p className="text-sm">4/13 SUKHUMVIT 5 WATTANA, Bangkok</p>
          <p className="text-sm">Phone: +66 819-270-997 | +66 860-37-1105</p>
        </div>
      </div>
      <div className="border rounded-lg shadow-lg bg-white/80 backdrop-blur w-full max-w-6xl mt-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Column - Contact Information */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Sharjah, UAE</h2>
            <p className="text-sm mb-4 font-medium">
              Sharjah Hoshy Ali Bin Mesmar Building 155, Shop 05
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium mb-1">Phone</span>
                  <a
                    href="tel:+971582344997"
                    className="hover:text-primary transition-colors"
                  >
                    +971 58-234-4997
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium mb-1">Email</span>
                  <a
                    href="mailto:andyoudinternational@gmail.com"
                    className="hover:text-primary transition-colors break-all"
                  >
                    andyoudinternational@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium mb-1">Instagram</span>
                  <a
                    href="https://instagram.com/andy_oud_cambodia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @andy_oud_cambodia
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative h-[300px] md:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8944893082665!2d55.3876!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ2LjciTiA1NcKwMjMnMTUuNCJF!5e0!3m2!1sen!2s!4v1234567890"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharjah Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
