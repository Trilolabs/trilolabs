"use client";

import { useState } from "react";

import { BOOK_CALL } from "../content";

export default function BookCallForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(BOOK_CALL.services[0]);
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:info@trilolabs.com?subject=${encodeURIComponent(
      "Book a call — Trilolabs"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form className="book-form" onSubmit={onSubmit}>
      <label className="book-form__field">
        <span>{BOOK_CALL.fields.name}</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className="book-form__field">
        <span>{BOOK_CALL.fields.email}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <fieldset className="book-form__services">
        <legend>{BOOK_CALL.fields.service}</legend>
        <ul>
          {BOOK_CALL.services.map((option) => (
            <li key={option}>
              <label>
                <input
                  type="radio"
                  name="service"
                  value={option}
                  checked={service === option}
                  onChange={() => setService(option)}
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <label className="book-form__field">
        <span>{BOOK_CALL.fields.message}</span>
        <textarea
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <button className="btn btn--pill btn--pill-lg" type="submit">
        {BOOK_CALL.fields.submit}
      </button>
    </form>
  );
}
