'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Karen Sacasa',
    text: "I celebrated my 27th birthday with Rumba Tours last December, and I can't even describe how much fun we had that day! I chose their enclosed bus, which was clean, punctual, and very spacious. The entire experience was seamless, and their excellent service truly added to the celebration. My friends and I had an unforgettable time. Highly recommend Rumba Tours for any special occasion!"
  },
  {
    name: 'Betty G',
    text: 'The tour was great - thanks toour host and our driver. Fun time driving around parts of the beach and Wynwood. Definitely a great way to enjoy the city with your friends and family, while dancing and sipping on a drink!'
  },
  {
    name: 'Veronica P',
    text: 'Fun time celebrating a birthday! It was an open-air bus with plenty of room for ~20 people to hang and dance. The host and the driver are both friendly and fun, and they provide a cooler with ice.'
  },
  {
    name: 'Jackie P',
    text: 'This was our first time on an open air party bus and it was INCREDIBLE!!!!!! Our tour guide Fili took us on a ride all over Miami with the best music. Highly recommend requesting him when you book.'
  },
  {
    name: 'Linda F',
    text: 'We had our party at Rumba Tours Miami and it was a lot of fun, the staff it\'s amazing the are so organized and take care of everything!! Demetrio and Filito thanks a lot for all your help. I really liked and definitely I would contact you guys again!!'
  },
  {
    name: 'Michael Miranda',
    text: 'This is the only party bus you should be considering for your next event. From the moment you inquire for price (which in my opinion is the best in town) to all the services included. Hosted a party for 3 hours for a birthday celebration and actually enjoyed it as all the planning and set up was already ready. Already 2 people from my party have booked their next event and hoping my company plans their next outing with Rumba!'
  },
  {
    name: 'Alexis W',
    text: 'Our host is the sweetest! Love that he opens your drinks for you and is attentive to your needs. He also assisted us with a stop for a bathroom break. Highly recommend, we had a wonderful time and were able to play a personalized playlist from our phone for the entire trip.'
  },
  {
    name: 'Waleska',
    text: 'A MUSTT if you are in Miami, they definitely have the best service and staff super friendly and always on top of everything from the reservation to the tour. If you are looking for a great way too go around with your friends and have a good time do not hesitate to reach out to them!!!'
  },
  {
    name: 'Maria E',
    text: 'Really fun experience, Hector was very helpful and good at keeping the party going. Highly recommend!'
  },
  {
    name: 'Lissette',
    text: 'What a great experience! My birthday was a success because of rumba and how amazing he was to all my guests. The host was very attentive and everyone loved it. Thank you Rumba Tours'
  },
];

// Define the type for a single review
interface Review {
  name: string;
  text: string;
}

// Sub-component for the Review Card
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="min-w-[300px] md:max-w-sm flex-shrink-0 bg-gray-100 rounded-xl shadow p-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          {review.name[0]}
        </div>
        <h3 className="text-md font-semibold">{review.name}</h3>
      </div>
      <div className="flex text-yellow-400 text-sm mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-sm text-gray-800 line-clamp-6">{review.text}</p>
    </div>
  );
}

export default function RiderReviewsSection() {
  const [showAll, setShowAll] = useState(false);

  // Determine reviews to show on mobile
  const mobileReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-16 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Over <span className="text-pink-600">10,000</span> Riders and counting
        </h2>

        {/* Mobile View (Vertical List) */}
        <div className="flex flex-col md:hidden gap-6">
          {mobileReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          {/* Button is part of the mobile view */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-pink-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-pink-700 transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>

        {/* Desktop View (Horizontal Scroll) */}
        <div
          className="hidden md:flex md:flex-row gap-6 md:overflow-x-auto md:pb-4 md:pr-2 scroll-smooth"
          onWheel={(e) => {
            const container = e.currentTarget;
            if (e.deltaY !== 0) { // Simplified condition as this div is only shown >= md
              container.scrollLeft += e.deltaY;
              e.preventDefault();
            }
          }}
        >
          {reviews.map((review, index) => ( // Always map all reviews here
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
