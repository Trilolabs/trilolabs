import BrandMark from "./BrandMark";

export default function Logo({ className = "", title = "Trilolabs" }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <BrandMark className="logo__mark" size={24} />
      <span className="logo__word">{title}</span>
    </span>
  );
}
