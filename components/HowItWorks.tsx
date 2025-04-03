export default function HowItWorks() {
    return (
      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
          How It Works
        </h2>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <Card emoji="🚌" title="2-Hour Tour" desc="Party tour through Miami’s top areas" />
          <Card emoji="🍻" title="BYOB" desc="Bring your own beverages" />
          <Card emoji="🎶" title="Premium Sound" desc="Play your own playlist onboard" />
          <Card emoji="👯‍♀️" title="Up to 30 Guests" desc="Plenty of room for your crew" />
          <Card emoji="🧊" title="Cooler + Ice" desc="Includes an cooler with ice" />
          <Card emoji="📍" title="Custom Pickup" desc="Choose your start & end points" />
        </div>
      </section>
    );
  }
  
  function Card({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
    return (
      <div className="flex items-start gap-3 bg-white border rounded-xl p-4 shadow-sm">
        <span className="text-2xl">{emoji}</span>
        <div>
          <p className="font-semibold text-black">{title}</p>
          <p className="text-sm text-black">{desc}</p>
        </div>
      </div>
    );
  }
  