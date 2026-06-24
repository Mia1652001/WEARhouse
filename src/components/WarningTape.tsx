/* Reusable yellow/black hazard-stripe divider used between page sections */
export default function WarningTape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full h-6 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #FFD700 0px, #FFD700 15px, #1A1A1A 15px, #1A1A1A 30px)",
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
