export default function Logo({
  variant = "lockup",
  className = "",
  title = "Trilolabs",
}) {
  if (variant === "mark") {
    const labelled = Boolean(title);
    return (
      <svg
        className={`logo logo--mark ${className}`.trim()}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={labelled ? undefined : true}
        role={labelled ? "img" : undefined}
      >
        {labelled ? <title>{title}</title> : null}
        <rect x="4" y="8" width="24" height="2.5" fill="currentColor" />
        <rect x="6" y="14.75" width="20" height="2.5" fill="currentColor" />
        <rect x="8" y="21.5" width="16" height="2.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <span className={`logo logo--lockup ${className}`.trim()}>
      <svg
        className="logo__mark"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="8" width="24" height="2.5" fill="currentColor" />
        <rect x="6" y="14.75" width="20" height="2.5" fill="currentColor" />
        <rect x="8" y="21.5" width="16" height="2.5" fill="currentColor" />
      </svg>
      <span className="logo__word">{title}</span>
    </span>
  );
}
