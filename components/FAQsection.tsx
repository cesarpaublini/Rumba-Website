'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does it work? Do we stop at different bars or is it just on the bus?',
    answer:
      'Our party experience is a full 2-hour ride on the bus — the party doesn’t stop! We don’t make stops at bars or clubs, but we do include one 10–15 minute bathroom break during the ride to keep everyone comfortable.',
  },
  {
    question: 'What are the routes?',
    answer:
      'Routes depend on your pickup and drop-off location. We offer rides through Downtown Miami, Brickell, Wynwood, Little Havana, and Coral Gables.',
  },
  {
    question: 'How long is the ride?',
    answer:
      'Our most popular option is our 2-hour Party Package, but you can book the bus for as long as you need.',
  },
  {
    question: 'Where can you pick us up?',
    answer:
      'We can pick you up at any house, hotel, bar, or restaurant in Downtown, Brickell, Wynwood, Little Havana, or Coral Gables. Travel fees may apply if outside these zones.',
  },
  {
    question: 'Is alcohol allowed on the bus? Can we bring our own drinks?',
    answer:
      'Yes — the experience is BYOB! You must be 21+ to drink, and we don’t allow glass containers. Please bring plastic bottles or cans only.',
  },
  {
    question: 'What’s the booking process like?',
    answer:
      'Booking is super easy — just head to our website and reserve your bus in minutes. No deposit needed when booking online.',
  },
  {
    question: 'What’s your cancellation policy?',
    answer:
      'Cancel 45+ days: Full refund. Cancel within 7 days: Deposit is non-refundable. Cancel within 48 hours: Full payment is due.',
  },
  {
    question: 'How many people can ride? Can you handle big groups?',
    answer:
      'Each of our buses can fit up to 30 passengers. We have multiple buses available for larger groups!',
  },
  {
    question: 'What about the music? Can we play our own playlist?',
    answer:
      'Each bus has a DJ/host on board. You can request songs or connect your playlist via Bluetooth.',
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg p-4 transition duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl font-bold">
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`transition-all overflow-hidden duration-500 ease-in-out ${
                  expandedIndex === index ? 'max-h-[300px] mt-2 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-white/90">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Show More/Show Less */}
        {faqs.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white text-black font-semibold px-6 py-2 rounded-md transition hover:bg-gray-200"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
