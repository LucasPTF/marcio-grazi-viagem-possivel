export function BrandMark() {
  return (
    <div className="brand" aria-label="Viagem Possível">
      <svg className="brand-symbol" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="19" />
        <path d="M10 27c5-1 8-4 11-9 2 5 6 8 13 9" />
        <path d="M22 9v8" />
        <path d="m18 13 4-4 4 4" />
      </svg>
      <span>
        <strong>Viagem</strong>
        <em>Possível</em>
      </span>
    </div>
  );
}
