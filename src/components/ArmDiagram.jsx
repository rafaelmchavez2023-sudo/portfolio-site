export default function ArmDiagram() {
  return (
    <div className="arm-diagram" aria-hidden="true">
      <svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="140" r="5" fill="currentColor" />
        <line x1="40" y1="140" x2="150" y2="60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="150" cy="60" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="150" y1="60" x2="270" y2="95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="270" cy="95" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="270" y1="95" x2="345" y2="55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 333 55 L 333 30 M 357 55 L 357 30 M 333 55 L 357 55" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="140" x2="80" y2="140" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    </div>
  );
}
