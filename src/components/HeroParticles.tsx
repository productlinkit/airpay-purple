const particles = [
  { size: 90, top: "12%", left: "8%", delay: "0s" },
  { size: 48, top: "22%", left: "38%", delay: "2s" },
  { size: 120, top: "62%", left: "18%", delay: "4s" },
  { size: 36, top: "78%", left: "44%", delay: "1s" },
  { size: 70, top: "18%", left: "68%", delay: "3s" },
  { size: 28, top: "48%", left: "82%", delay: "5s" },
  { size: 54, top: "82%", left: "72%", delay: "2.5s" },
  { size: 40, top: "38%", left: "52%", delay: "6s" },
  { size: 22, top: "8%", left: "88%", delay: "1.5s" },
];

export function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40 blur-[2px]"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            animation: `float-particle 12s ease-in-out ${p.delay} infinite, pulse-soft 6s ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
