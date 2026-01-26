import { Resend } from "resend";
import { SENDER_EMAIL, APP_NAME } from "../lib/constants";
import { Order } from "../types";
import dotenv from "dotenv";
dotenv.config();

import PurchaseReceiptEmail from "./purchase-receipt";
import ContactEmail from "./contact";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  to?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  if (!resend) {
    throw new Error("RESEND_API_KEY is missing. Set it in your .env file.");
  }

  await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Order Confirmation ${order.id}`,
    react: <PurchaseReceiptEmail order={order} />,
  });
};

export const sendContactEmail = async (payload: ContactPayload) => {
  if (!resend) {
    throw new Error("RESEND_API_KEY is missing. Set it in your .env file.");
  }

  const { name, email, phone, subject, message, to = SENDER_EMAIL } = payload;

  const subjectLine = subject
    ? `Contact: ${subject}`
    : "New contact form submission";

  await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to,
    subject: subjectLine,
    react: (
      <ContactEmail
        name={name}
        email={email}
        phone={phone}
        subject={subject}
        message={message}
      />
    ),
  });
};
