// app/buses/busData.ts
export const buses = [
  {
    slug: '30-passenger-party-bus',
    name: '30 Passenger Party Bus',
    capacity: 30,
    imageGallery: [
      '/images/30-passenger-party-bus-miami.jpg',
      '/images/30-passenger-party-bus-miami.jpg', // Placeholder, replace with actual gallery images
      '/images/30-passenger-party-bus-miami.jpg'  // Placeholder
    ],
    price: 285,
    unit: '/hour',
    description:
      'Our 30 Passenger Party Bus is the perfect ride for birthdays, corporate events, and nights out. It features premium lighting, sound system, and BYOB-friendly setup.',
    location: 'Miami, FL',
    amenities: ['Premium Sound', 'LED Lights', 'Open-Air Option', 'BYOB', 'Bluetooth Audio'],
    bookingLink: 'https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25'
  },
  {
    slug: 'open-air-party-bus',
    name: 'Open-Air Party Bus',
    capacity: 30,
    imageGallery: [
      '/images/miami-open-air-party-bus-bride-squad-rumbatours.jpg', // Main
      '/images/open-air-bus-gallery-2.jpg', // Placeholder
      '/images/open-air-bus-gallery-3.jpg' // Placeholder
    ],
    price: 950,
    unit: 'Flat rate for 2-hour tour',
    description:
      'Enjoy Miami in our unique open-air bus, perfect for sightseeing with music and drinks! Flat rate covers a standard 2-hour city tour.',
    location: 'Miami, FL',
    amenities: ['Open air', 'BYOB', 'Bluetooth Sound', 'Attendant'],
    bookingLink: 'https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25' // Example, replace if needed
  },
  {
    slug: 'covered-open-air-party-bus',
    name: 'Covered Open-Air Party Bus',
    capacity: 30,
    imageGallery: [
      '/images/covered-open-air-party-bus.jpg', // Main
      '/images/covered-open-air-gallery-2.jpg', // Placeholder
      '/images/covered-open-air-gallery-3.jpg' // Placeholder
    ],
    price: 950,
    unit: 'Flat rate for 2-hour tour',
    description:
      'Experience the open air with added shade! This bus offers the best of both worlds for your Miami tour. Flat rate covers a standard 2-hour city tour.',
    location: 'Miami, FL',
    amenities: ['Open-Air with Roof', 'BYOB', 'Premium Sound', 'Attendant'],
    bookingLink: 'https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25' // Example, replace if needed
  },
  {
    slug: '55-passenger-coach',
    name: '55 Passenger Coach',
    capacity: 55,
    imageGallery: [
      '/images/miami-party-bus-downtown-tour-rumbatours.jpg', // Main
      '/images/coach-bus-gallery-2.jpg', // Placeholder
      '/images/coach-bus-gallery-3.jpg' // Placeholder
    ],
    price: 600,
    unit: '/hour',
    description:
      'Ideal for large groups and comfortable travel around Miami or longer distances. Features A/C, ample space, and a professional driver.',
    location: 'Miami, FL',
    amenities: ['A/C', 'BYOB', 'Big Sound', 'Professional Driver'],
    bookingLink: 'https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25' // Example, replace if needed
  }
]; 