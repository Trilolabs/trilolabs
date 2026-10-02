/** Canonical Trilolabs mark — Shiva blue · ash · white tripundra */
export default function BrandMark({
  size = 32,
  className = "",
  title,
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="32" height="32" rx="7" fill="#060606" />
      <rect x="4" y="8" width="24" height="2.5" fill="#f2f0e8" />
      <rect x="6" y="14.75" width="20" height="2.5" fill="#c8c4ba" />
      <rect x="8" y="21.5" width="16" height="2.5" fill="#0047ab" />
    </svg>
  );
}
