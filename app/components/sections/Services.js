"use client";

import { useState } from "react";

import SectionBadgeMark from "../SectionBadgeMark";
import { SERVICES } from "../../content";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="services wrap" id="services" aria-label="Services">
      <header className="block-head block-head--center reveal">
        <p className="badge">
          <SectionBadgeMark />
          {SERVICES.kicker}
        </p>
        <h2 className="display-title display-title--center">{SERVICES.title}</h2>
      </header>

      <ul className="service-acc">
        {SERVICES.items.map((item, index) => {
          const isOpen = open === index;
          const panelId = `service-panel-${item.num}`;
          const buttonId = `service-trigger-${item.num}`;

          return (
            <li className="service-acc__item reveal" key={item.num}>
              <div className="service-acc__header">
                <button
                  type="button"
                  id={buttonId}
                  className="service-acc__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="service-acc__identity">
                    <span className="service-acc__icon" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.icon} alt="" width={40} height={40} />
                    </span>
                    <span className="service-acc__title-wrap">
                      <span className="service-acc__title">{item.title}</span>
                      <span className="service-acc__num">{item.num}</span>
                    </span>
                  </span>

                  <span className="service-acc__tags">
                    {item.tags.map((tag) => (
                      <span className="pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>

                  <span
                    className="service-acc__toggle"
                    aria-hidden="true"
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
              </div>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`service-acc__panel${isOpen ? " is-open" : ""}`}
                aria-hidden={!isOpen}
                inert={!isOpen || undefined}
              >
                <div className="service-acc__body">
                  <div className="service-acc__media" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" />
                  </div>
                  <div className="service-acc__copy">
                    <p>{item.body}</p>
                    <a className="service-acc__cta" href="#process">
                      How we work
                      <span aria-hidden="true"> →</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
