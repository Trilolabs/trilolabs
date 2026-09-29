"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <li className="faq-item reveal" key={item.q}>
            <button
              type="button"
              id={buttonId}
              className={`faq-item__trigger${isOpen ? " is-open" : ""}`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="faq-item__icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`faq-item__panel${isOpen ? " is-open" : ""}`}
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
