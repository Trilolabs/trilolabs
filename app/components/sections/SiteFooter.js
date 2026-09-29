import Logo from "../Logo";
import { COMPANY, FOOTER } from "../../content";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="foot__inner wrap">
        <div className="foot__brand-block">
          <a className="foot__brand" href="/" aria-label="Trilolabs home">
            <Logo />
          </a>
          <p className="foot__tag">{FOOTER.tag}</p>
          <p className="foot__legal-name">{COMPANY.legalName}</p>
          <address className="foot__legal-address">{COMPANY.address}</address>
          <p className="foot__legal-note">{COMPANY.addressNote}</p>
          <p className="foot__copy">
            © {year} {COMPANY.legalName}
          </p>
        </div>

        {FOOTER.columns.map((col) => (
          <div className="foot__col" key={col.label}>
            <p className="foot__label">{col.label}</p>
            {col.links ? (
              <ul className="foot__links">
                {col.links.map((link) => (
                  <li key={`${col.label}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </footer>
  );
}
