export const cinemas = [
  {
    id: 'cin-001',
    name: 'Grand Central Cinema',
    location: 'Downtown',
    rating: 4.6,
    description: 'Large screens · Dolby Atmos · Café',
    lat: 53.3478,
    lng: -6.2597,
    movies: [
      {
        id: 'mov-101',
        title: 'Skyline Pursuit',
        duration: '120m',
        genre: 'Action',
        poster: 'https://via.placeholder.com/400x220?text=Skyline+Pursuit',
        screenings: [
          { time: '11:15', taken: ['A1','A2','B3'] },
          { time: '14:30', taken: ['C5','D4'] },
          { time: '18:00', taken: [] },
          { time: '21:15', taken: ['A6','A7','B1'] }
        ]
      },
      {
        id: 'mov-102',
        title: 'Moonlight Sonata',
        duration: '105m',
        genre: 'Drama',
        poster: 'https://via.placeholder.com/400x220?text=Moonlight+Sonata',
        screenings: [
          { time: '12:45', taken: ['A1'] },
          { time: '16:20', taken: ['B2','B3'] },
          { time: '19:40', taken: [] }
        ]
      }
    ]
  },
  {
    id: 'cin-002',
    name: 'Riverside Multiplex',
    location: 'Riverside Mall',
    rating: 4.2,
    description: 'Multiple screens · Family friendly',
    lat: 53.3505,
    lng: -6.2700,
    movies: [
      {
        id: 'mov-201',
        title: 'Ocean Secret',
        duration: '130m',
        genre: 'Adventure',
        poster: 'https://via.placeholder.com/400x220?text=Ocean+Secret',
        screenings: [
          { time: '12:00', taken: ['A1','B1'] },
          { time: '15:45', taken: [] },
          { time: '19:30', taken: ['C3'] }
        ]
      }
    ]
  },
  {
    id: 'cin-003',
    name: 'Parkside Picture House',
    location: 'Parkside',
    rating: 4.4,
    description: 'Indie selections · Cozy seating',
    lat: 53.3447,
    lng: -6.2583,
    movies: [
      {
        id: 'mov-301',
        title: 'Animated Dreams',
        duration: '85m',
        genre: 'Animation',
        poster: 'https://via.placeholder.com/400x220?text=Animated+Dreams',
        screenings: [
          { time: '09:45', taken: [] },
          { time: '11:50', taken: ['A3'] }
        ]
      }
    ]
  },
  {
    id: 'cin-004',
    name: 'Westside Screens',
    location: 'Westside Plaza',
    rating: 4.0,
    description: 'Late shows · Street parking',
    lat: 53.3601,
    lng: -6.2912,
    movies: [
      {
        id: 'mov-401',
        title: 'Thrill Runner',
        duration: '115m',
        genre: 'Thriller',
        poster: 'https://via.placeholder.com/400x220?text=Thrill+Runner',
        screenings: [{ time: '17:30', taken: [] }, { time: '21:00', taken: ['C1'] }]
      }
    ]
  },
  {
    id: 'cin-005',
    name: 'Majestic Cinemas',
    location: 'Old Town',
    rating: 4.7,
    description: 'Historic theatre · Premium seating',
    lat: 53.3472,
    lng: -6.2639,
    movies: [
      {
        id: 'mov-501',
        title: 'Classical Nights',
        duration: '125m',
        genre: 'Music',
        poster: 'https://via.placeholder.com/400x220?text=Classical+Nights',
        screenings: [{ time: '19:00', taken: ['A1','A2','A3'] }]
      }
    ]
  }
];