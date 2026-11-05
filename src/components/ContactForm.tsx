"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Building2,
  CheckCircle2,
  FileEdit,
  FileText,
  ListFilter,
  Mail,
  Phone,
  Send,
  User,
} from "lucide-react";

const supportEmail = "polyind2@gmail.com";
const supportPhone = "+91 98203 25905";

const divisions = [
  "Industrial water treatment",
  "Construction & surface protection",
  "V-Klin institutional & home care",
  "Product documents (TDS / SDS)",
  "Something else",
];

type FieldName = "name" | "company" | "email" | "phone" | "division" | "message";
type FieldValues = Record<FieldName, string>;

const emptyValues: FieldValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  division: divisions[0],
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function enquiryText(values: FieldValues) {
  const details = [
    ["Name", values.name],
    ["Company", values.company],
    ["Email", values.email],
    ["Phone", values.phone],
    ["Enquiry type", values.division],
  ]
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value}`);

  return [...details, "", values.message].join("\n");
}

function validate(values: FieldValues) {
  const found: Partial<Record<FieldName, string>> = {};

  if (values.name.trim().length < 2) found.name = "Please enter your name.";
  if (!emailPattern.test(values.email.trim())) found.email = "Please enter a valid email address.";
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 10) {
    found.phone = "Please enter a phone number with at least 10 digits.";
  }
  if (values.message.trim().length < 15) {
    found.message = "Please add a few lines about your requirement.";
  }

  return found;
}

export default function ContactForm() {
  const [values, setValues] = useState<FieldValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [drafted, setDrafted] = useState(false);

  function handleChange(field: FieldName) {
    return (
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value;

      setValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
      setDrafted(false);
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = `${values.division} enquiry - ${values.name}`;
    const body = enquiryText(values);

    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setDrafted(true);
  }

  return (
    <div className="contact-redesign-form-card" id="contact-form">
      {/* 1. Form Header - Vibrant Blue Gradient */}
      <div className="contact-form-header">
        <div className="contact-form-header-content">
          <div className="contact-form-header-icon" aria-hidden="true">
            <FileEdit size={22} />
          </div>
          <div className="contact-form-header-text">
            <h3 className="contact-form-header-title">
              Let&apos;s discuss your requirements.
            </h3>
            <p className="contact-form-header-subtitle">
              Share your requirement and our team will get back to you soon.
            </p>
          </div>
        </div>
        <div className="contact-form-header-wave" aria-hidden="true">
          <svg viewBox="0 0 500 24" fill="none" preserveAspectRatio="none">
            <path
              d="M0,0 C150,22 350,2 500,18 L500,24 L0,24 Z"
              fill="#ffffff"
              fillOpacity="0.12"
            />
          </svg>
        </div>
      </div>

      {/* 2. Form Body */}
      <form className="contact-form-body" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-grid">
          {/* Field 1: Name */}
          <div className="contact-form-field-group">
            <div className="contact-field-icon-box" aria-hidden="true">
              <User size={16} />
            </div>
            <div className="contact-field-control">
              <label htmlFor="contact-name">
                Name <span className="contact-req-star">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange("name")}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                required
              />
              {errors.name && (
                <p className="contact-field-error" id="contact-name-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          {/* Field 2: Company (optional) */}
          <div className="contact-form-field-group">
            <div className="contact-field-icon-box" aria-hidden="true">
              <Building2 size={16} />
            </div>
            <div className="contact-field-control">
              <label htmlFor="contact-company">
                Company <span className="contact-opt-tag">(optional)</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Enter company name"
                value={values.company}
                onChange={handleChange("company")}
              />
            </div>
          </div>

          {/* Field 3: Email */}
          <div className="contact-form-field-group">
            <div className="contact-field-icon-box" aria-hidden="true">
              <Mail size={16} />
            </div>
            <div className="contact-field-control">
              <label htmlFor="contact-email">
                Email <span className="contact-req-star">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange("email")}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                required
              />
              {errors.email && (
                <p className="contact-field-error" id="contact-email-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Field 4: Phone (optional) */}
          <div className="contact-form-field-group">
            <div className="contact-field-icon-box" aria-hidden="true">
              <Phone size={16} />
            </div>
            <div className="contact-field-control">
              <label htmlFor="contact-phone">
                Phone <span className="contact-opt-tag">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange("phone")}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
              />
              {errors.phone && (
                <p className="contact-field-error" id="contact-phone-error" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Field 5: What is your enquiry about? (Full width) */}
          <div className="contact-form-field-group contact-field-full">
            <div className="contact-field-icon-box" aria-hidden="true">
              <ListFilter size={16} />
            </div>
            <div className="contact-field-control">
              <label htmlFor="contact-division">
                What is your enquiry about? <span className="contact-req-star">*</span>
              </label>
              <div className="contact-select-wrap">
                <select
                  id="contact-division"
                  name="division"
                  value={values.division}
                  onChange={handleChange("division")}
                >
                  {divisions.map((division) => (
                    <option key={division} value={division}>
                      {division}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Field 6: Requirement Details (Full width) */}
          <div className="contact-form-field-group contact-field-full">
            <div className="contact-field-icon-box contact-field-icon-textarea" aria-hidden="true">
              <FileText size={16} />
            </div>
            <div className="contact-field-control">
              <label htmlFor="contact-message">
                Requirement Details <span className="contact-req-star">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                value={values.message}
                onChange={handleChange("message")}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                placeholder="Example: Cooling-water system; request for current product documents."
                required
              />
              {errors.message && (
                <p className="contact-field-error" id="contact-message-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="contact-form-foot">
          <button className="btn-contact-submit" type="submit">
            <Send size={16} aria-hidden="true" />
            <span>Prepare email draft</span>
          </button>

          {drafted && (
            <p className="contact-form-status" role="status">
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>
                Your email app should open with this enquiry addressed to {supportEmail}.
                Nothing is sent until you choose to send it. If no email app opens, call {supportPhone}.
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
