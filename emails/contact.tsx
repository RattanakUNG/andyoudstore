import { Body, Head, Html } from "@react-email/components";
import * as React from "react";

type ContactEmailProps = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export default function Contact({
  name = "Jane Doe",
  email = "jane@example.com",
  phone = "Not provided",
  subject = "General inquiry",
  message = "Thanks for reaching out. Please add the user message here.",
}: ContactEmailProps) {
  const rowStyle: React.CSSProperties = {
    padding: "8px 0",
    borderBottom: "1px solid #e5e7eb",
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 700,
    color: "#111827",
    width: "140px",
  };

  const valueStyle: React.CSSProperties = {
    color: "#374151",
  };

  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f9fafb", padding: "24px" }}>
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "24px",
            fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
            color: "#111827",
          }}
        >
          <h1 style={{ fontSize: "20px", margin: "0 0 8px" }}>
            New contact form submission
          </h1>
          <p style={{ margin: "0 0 16px", color: "#4b5563" }}>
            A visitor submitted the contact form. Details are below.
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr style={rowStyle}>
                <td style={labelStyle}>Name</td>
                <td style={valueStyle}>{name}</td>
              </tr>
              <tr style={rowStyle}>
                <td style={labelStyle}>Email</td>
                <td style={valueStyle}>{email}</td>
              </tr>
              <tr style={rowStyle}>
                <td style={labelStyle}>Phone</td>
                <td style={valueStyle}>{phone || "Not provided"}</td>
              </tr>
              <tr style={rowStyle}>
                <td style={labelStyle}>Subject</td>
                <td style={valueStyle}>{subject}</td>
              </tr>
              <tr style={{ padding: "12px 0" }}>
                <td style={labelStyle} valign="top">
                  Message
                </td>
                <td style={{ ...valueStyle, whiteSpace: "pre-wrap" }}>
                  {message}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Body>
    </Html>
  );
}
