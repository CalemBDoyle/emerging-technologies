// Cinema Data Management Module
class CinemaData {
    constructor() {
        this.cinemas = [];
        this.movies = [];
        this.reviews = {};
        this.promoCodes = {};
        this.initializeData();
    }

    initializeData() {
        this.initializeMovies();
        this.initializeCinemas();
        this.initializePromoCodes();
        this.loadReviews();
    }

    initializeMovies() {
        this.movies = [
            {
                id: 'dune_part_two',
                title: 'Dune: Part Two',
                genre: 'Sci-Fi/Adventure',
                rating: 8.4,
                duration: '166 minutes',
                description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.',
                director: 'Denis Villeneuve',
                cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Josh Brolin'],
                releaseDate: '2024-03-01',
                poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgVNsXKBUkr5B.jpg',
                trailer: 'https://www.youtube.com/embed/Way9Dexny3w',
                classification: 'PG-13'
            },
            {
                id: 'oppenheimer',
                title: 'Oppenheimer',
                genre: 'Biography/Drama',
                rating: 8.5,
                duration: '180 minutes',
                description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the moral complexities of scientific discovery and its consequences.',
                director: 'Christopher Nolan',
                cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
                releaseDate: '2023-07-21',
                poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2uT.jpg',
                trailer: 'https://www.youtube.com/embed/uYPbbksJxIg',
                classification: 'R'
            },
            {
                id: 'killers_flower_moon',
                title: 'Killers of the Flower Moon',
                genre: 'Drama/Crime',
                rating: 8.0,
                duration: '206 minutes',
                description: 'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.',
                director: 'Martin Scorsese',
                cast: ['Leonardo DiCaprio', 'Robert De Niro', 'Lily Gladstone'],
                releaseDate: '2023-10-20',
                poster: 'https://image.tmdb.org/t/p/w500/db3La4M5CfaDM1vMFLkjJezWpMM.jpg',
                trailer: 'https://www.youtube.com/embed/n8f8Ek5LvEo',
                classification: 'R'
            },
            {
                id: 'barbie',
                title: 'Barbie',
                genre: 'Comedy/Fantasy',
                rating: 7.9,
                duration: '114 minutes',
                description: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
                director: 'Greta Gerwig',
                cast: ['Margot Robbie', 'Ryan Gosling', 'America Ferrera', 'Kate McKinnon'],
                releaseDate: '2023-07-21',
                poster: 'https://image.tmdb.org/t/p/w500/qNB3ji1qNLW3VAhvAELUAhBtWve.jpg',
                trailer: 'https://www.youtube.com/embed/HHKwAJ9kj6U',
                classification: 'PG-13'
            },
            {
                id: 'hunger_games_songbirds',
                title: 'The Hunger Games: Ballad of Songbirds and Snakes',
                genre: 'Action/Adventure',
                rating: 7.7,
                duration: '157 minutes',
                description: 'Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games, a war that changes Panem forever.',
                director: 'Francis Lawrence',
                cast: ['Tom Blyth', 'Rachel Zegler', 'Viola Davis', 'Peter Dinklage'],
                releaseDate: '2023-11-17',
                poster: 'https://image.tmdb.org/t/p/w500/b9FkLZa6nL1DAkSNJgkCmtXl9Ca.jpg',
                trailer: 'https://www.youtube.com/embed/0X7zox0FjFM',
                classification: 'PG-13'
            },
            {
                id: 'elemental',
                title: 'Elemental',
                genre: 'Animation/Adventure',
                rating: 7.8,
                duration: '101 minutes',
                description: 'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.',
                director: 'Peter Sohn',
                cast: ['Leah Lewis', 'Mamoudou Athie'],
                releaseDate: '2023-06-16',
                poster: 'https://image.tmdb.org/t/p/w500/4JiMiXQAya5VBAin12Ijq8ZQHmB.jpg',
                trailer: 'https://www.youtube.com/embed/RrDlX4sD8r8',
                classification: 'PG'
            },
            {
                id: 'guardians_vol3',
                title: 'Guardians of the Galaxy Vol. 3',
                genre: 'Action/Sci-Fi',
                rating: 8.2,
                duration: '150 minutes',
                description: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
                director: 'James Gunn',
                cast: ['Chris Pratt', 'Zoe Saldaña', 'Dave Bautista', 'Karen Gillan'],
                releaseDate: '2023-05-05',
                poster: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1YdgiiNIJr.jpg',
                trailer: 'https://www.youtube.com/embed/u3V5KDHRQvk',
                classification: 'PG-13'
            },
            {
                id: 'spider_man_across',
                title: 'Spider-Man: Across the Spider-Verse',
                genre: 'Animation/Action',
                rating: 8.7,
                duration: '140 minutes',
                description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
                director: ['Joaquim Dos Santos', 'Kemp Powers', 'Justin K. Thompson'],
                cast: ['Shameik Moore', 'Hailee Steinfeld', 'Brian Tyree Henry'],
                releaseDate: '2023-06-02',
                poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
                trailer: 'https://www.youtube.com/embed/cqGjhVJWtEg',
                classification: 'PG'
            },
            {
                id: 'the_creator',
                title: 'The Creator',
                genre: 'Sci-Fi/Action',
                rating: 7.6,
                duration: '133 minutes',
                description: 'Against the backdrop of a war between humans and AI, a former soldier finds the ultimate weapon, an AI in the body of a young child, and discovers it\'s the one key to ending the war and finding his lost wife.',
                director: 'Gareth Edwards',
                cast: ['John David Washington', 'Madeleine Yuna Voyles', 'Gemma Chan'],
                releaseDate: '2023-09-29',
                poster: 'https://image.tmdb.org/t/p/w500/52P526z0wUK8IBlVe99iW0zR5A.jpg',
                trailer: 'https://www.youtube.com/embed/exaKlMlwe7Q',
                classification: 'PG-13'
            },
            {
                id: 'napoleon',
                title: 'Napoleon',
                genre: 'Drama/History',
                rating: 7.4,
                duration: '158 minutes',
                description: 'An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his one true love, Josephine.',
                director: 'Ridley Scott',
                cast: ['Joaquin Phoenix', 'Vanessa Kirby'],
                releaseDate: '2023-11-22',
                poster: 'https://image.tmdb.org/t/p/w500/jE5o15pSZ4xFOoXKObh3gyMzaPJ.jpg',
                trailer: 'https://www.youtube.com/embed/ROYvPGMeJvg',
                classification: 'R'
            },
            {
                id: 'wonka',
                title: 'Wonka',
                genre: 'Family/Fantasy',
                rating: 7.8,
                duration: '116 minutes',
                description: 'The story will focus on a young Willy Wonka and how he met the Oompa-Loompas and his adventures prior to opening his world famous chocolate factory.',
                director: 'Paul King',
                cast: ['Timothée Chalamet', 'Calah Lane', 'Keegan-Michael Key'],
                releaseDate: '2023-12-15',
                poster: 'https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMlXfD.jpg',
                trailer: 'https://www.youtube.com/embed/hK43R4hFz_s',
                classification: 'PG'
            },
            {
                id: 'aquaman2',
                title: 'Aquaman and the Lost Kingdom',
                genre: 'Action/Adventure',
                rating: 6.8,
                duration: '124 minutes',
                description: 'Black Manta, still driven by the need to avenge his father\'s death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all.',
                director: 'James Wan',
                cast: ['Jason Momoa', 'Patrick Wilson', 'Amber Heard', 'Yahya Abdul-Mateen II'],
                releaseDate: '2023-12-22',
                poster: 'https://image.tmdb.org/t/p/w500/9GVjTrmjLX2S4IJp42CxVOg6NhG.jpg',
                trailer: 'https://www.youtube.com/embed/TB2qp_nZ-oQ',
                classification: 'PG-13'
            },
            {
                id: 'godzilla_x_kong',
                title: 'Godzilla x Kong: The New Empire',
                genre: 'Action/Sci-Fi',
                rating: 7.2,
                duration: '115 minutes',
                description: 'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island\'s mysteries.',
                director: 'Adam Wingard',
                cast: ['Rebecca Hall', 'Brian Tyree Henry', 'Dan Stevens', 'Kaylee Hottle'],
                releaseDate: '2024-03-29',
                poster: 'https://image.tmdb.org/t/p/w500/tMefBSflR6DDQLTlFmewrNQpWJv.jpg',
                trailer: 'https://www.youtube.com/embed/pKYd_ih2n-8',
                classification: 'PG-13'
            },
            {
                id: 'beetlejuice2',
                title: 'Beetlejuice Beetlejuice',
                genre: 'Comedy/Fantasy',
                rating: 7.5,
                duration: '105 minutes',
                description: 'After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia\'s life is turned upside down when her teenage daughter discovers a mysterious portal to the afterlife.',
                director: 'Tim Burton',
                cast: ['Michael Keaton', 'Winona Ryder', 'Catherine O\'Hara', 'Jenna Ortega'],
                releaseDate: '2024-09-06',
                poster: 'https://image.tmdb.org/t/p/w500/kKgQmkycZrCljHJDORf7nR9EVaf.jpg',
                trailer: 'https://www.youtube.com/embed/MEkcy4eEBVw',
                classification: 'PG-13'
            },
            {
                id: 'deadpool3',
                title: 'Deadpool & Wolverine',
                genre: 'Action/Comedy',
                rating: 8.1,
                duration: '127 minutes',
                description: 'Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.',
                director: 'Shawn Levy',
                cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin', 'Matthew Macfadyen'],
                releaseDate: '2024-07-26',
                poster: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExU3z4hXs6h2Sj6I9i.jpg',
                trailer: 'https://www.youtube.com/embed/73B1Ad_tPrk',
                classification: 'R'
            }
        ];
    }

    initializeCinemas() {
        this.cinemas = [
            {
                id: 1,
                name: 'Paramount Cineplex',
                location: 'Downtown Center, Main Street',
                rating: 4.6,
                image: 'https://images.unsplash.com/photo-1489599133689-f79740c5eba0?w=800',
                lat: 40.7128,
                lng: -74.0060,
                address: '123 Main St, New York, NY 10001',
                phone: '(212) 555-0101',
                amenities: ['IMAX', 'Dolby Atmos', 'Luxury Seating', 'Bar & Lounge'],
                movies: ['dune_part_two', 'oppenheimer', 'killers_flower_moon', 'guardians_vol3', 'spider_man_across', 'the_creator']
            },
            {
                id: 2,
                name: 'Star Theatre Plaza',
                location: 'Riverside Mall, Oak Avenue',
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800',
                lat: 40.7215,
                lng: -74.0100,
                address: '456 Oak Ave, Brooklyn, NY 11201',
                phone: '(718) 555-0202',
                amenities: ['4DX', 'VIP Screening', 'Restaurant', 'Arcade'],
                movies: ['dune_part_two', 'barbie', 'killers_flower_moon', 'hunger_games_songbirds', 'elemental', 'wonka']
            },
            {
                id: 3,
                name: 'Galaxy IMAX',
                location: 'Tech Park, Highway 5',
                rating: 4.7,
                image: 'https://images.unsplash.com/photo-1573589358943-3c4b8e0677d0?w=800',
                lat: 40.7305,
                lng: -73.9950,
                address: '789 Tech Park Dr, Queens, NY 11375',
                phone: '(718) 555-0303',
                amenities: ['IMAX Laser', 'Reclining Seats', 'Cafe', 'Free Parking'],
                movies: ['oppenheimer', 'dune_part_two', 'elemental', 'guardians_vol3', 'aquaman2', 'godzilla_x_kong']
            },
            {
                id: 4,
                name: 'Sunrise Cinema',
                location: 'Shopping District, Park Road',
                rating: 4.4,
                image: 'https://images.unsplash.com/photo-1594736797933-d0401bafe6ca?w=800',
                lat: 40.7050,
                lng: -74.0150,
                address: '321 Park Rd, Bronx, NY 10451',
                phone: '(718) 555-0404',
                amenities: ['3D', 'Digital Projection', 'Snack Bar', 'Family Friendly'],
                movies: ['hunger_games_songbirds', 'barbie', 'wonka', 'aquaman2', 'beetlejuice2']
            },
            {
                id: 5,
                name: 'Neon Lights Cinema',
                location: 'Central Business District',
                rating: 4.9,
                image: 'https://images.unsplash.com/photo-1594736797933-d0401bafe6ca?w=800',
                lat: 40.7180,
                lng: -74.0020,
                address: '555 Business Ave, Manhattan, NY 10038',
                phone: '(212) 555-0505',
                amenities: ['Premium Sound', 'Alcohol Service', 'Reserved Seating', 'Private Screenings'],
                movies: ['dune_part_two', 'oppenheimer', 'elemental', 'killers_flower_moon', 'napoleon', 'deadpool3']
            },
            {
                id: 6,
                name: 'Metro Movies 8',
                location: 'Grand Central Station',
                rating: 4.3,
                image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
                lat: 40.7527,
                lng: -73.9772,
                address: '100 E 42nd St, New York, NY 10017',
                phone: '(212) 555-0606',
                amenities: ['Digital', 'Subway Access', 'Food Court', 'Validation'],
                movies: ['spider_man_across', 'the_creator', 'hunger_games_songbirds', 'barbie', 'wonka']
            },
            {
                id: 7,
                name: 'Empire State Theater',
                location: 'Midtown Manhattan',
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1535016120720-40c6a372839b?w=800',
                lat: 40.7484,
                lng: -73.9857,
                address: '20 W 34th St, New York, NY 10001',
                phone: '(212) 555-0707',
                amenities: ['IMAX', 'Restaurant', 'Rooftop Bar', 'VIP Lounge'],
                movies: ['guardians_vol3', 'deadpool3', 'beetlejuice2', 'godzilla_x_kong', 'napoleon']
            },
            {
                id: 8,
                name: 'Brooklyn Bridge Cinemas',
                location: 'Brooklyn Heights',
                rating: 4.5,
                image: 'https://images.unsplash.com/photo-1598424413543-1a85707c3742?w=800',
                lat: 40.7061,
                lng: -73.9969,
                address: '100 Bridge Plaza, Brooklyn, NY 11201',
                phone: '(718) 555-0808',
                amenities: ['Historic Venue', 'Art House Films', 'Cafe', 'Balcony Seating'],
                movies: ['napoleon', 'the_creator', 'killers_flower_moon', 'wonka', 'aquaman2']
            },
            {
                id: 9,
                name: 'Times Square Multiplex',
                location: 'Times Square',
                rating: 4.2,
                image: 'https://images.unsplash.com/photo-1578912810215-1df52e858e8e?w=800',
                lat: 40.7580,
                lng: -73.9855,
                address: '1500 Broadway, New York, NY 10036',
                phone: '(212) 555-0909',
                amenities: ['24/7 Operation', 'Tourist Friendly', 'Merchandise Store', 'Photo Ops'],
                movies: ['spider_man_across', 'deadpool3', 'barbie', 'elemental', 'hunger_games_songbirds']
            },
            {
                id: 10,
                name: 'Queens Palace Theater',
                location: 'Astoria',
                rating: 4.6,
                image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800',
                lat: 40.7744,
                lng: -73.9317,
                address: '36-02 35th Ave, Astoria, NY 11106',
                phone: '(718) 555-1010',
                amenities: ['Restored 1920s Theater', 'Live Events', 'Concessions', 'Street Parking'],
                movies: ['godzilla_x_kong', 'beetlejuice2', 'dune_part_two', 'oppenheimer', 'guardians_vol3']
            }
        ];
    }

    initializePromoCodes() {
        this.promoCodes = {
            'FIRST10': { discount: 10, type: 'percentage', description: '10% off your first booking', minAmount: 20 },
            'MOVIE20': { discount: 20, type: 'percentage', description: '20% off on movie tickets', minAmount: 30 },
            'SNACKS15': { discount: 15, type: 'percentage', description: '15% off on concessions', minAmount: 15 },
            'FLAT5': { discount: 5, type: 'fixed', description: '$5 off your order', minAmount: 25 },
            'WEEKEND': { discount: 25, type: 'percentage', description: '25% off weekend bookings', minAmount: 40 },
            'STUDENT': { discount: 15, type: 'percentage', description: '15% student discount', minAmount: 0 },
            'FAMILY': { discount: 10, type: 'percentage', description: '10% family discount (3+ tickets)', minAmount: 50 },
            'DATE50': { discount: 50, type: 'fixed', maxDiscount: 25, description: '$50 off (max $25 discount)', minAmount: 60 },
            'VIP20': { discount: 20, type: 'percentage', description: '20% VIP member discount', minAmount: 35 },
            'SUMMER': { discount: 30, type: 'percentage', description: '30% off summer blockbusters', minAmount: 45 },
            'MATINEE': { discount: 40, type: 'percentage', description: '40% off matinee shows (before 5PM)', minAmount: 20 },
            'TUESDAY': { discount: 50, type: 'percentage', description: '50% off Tuesday tickets', minAmount: 15 }
        };
    }

    loadReviews() {
        const savedReviews = localStorage.getItem('cinemaReviews');
        if (savedReviews) {
            this.reviews = JSON.parse(savedReviews);
        }
    }

    saveReviews() {
        localStorage.setItem('cinemaReviews', JSON.stringify(this.reviews));
    }

    getMovieById(id) {
        return this.movies.find(movie => movie.id === id);
    }

    getCinemaById(id) {
        return this.cinemas.find(cinema => cinema.id === id);
    }

    getMoviesByGenre(genre) {
        return this.movies.filter(movie => 
            movie.genre.toLowerCase().includes(genre.toLowerCase())
        );
    }

    getMoviesByRating(minRating) {
        return this.movies.filter(movie => movie.rating >= minRating);
    }

    searchMovies(query) {
        const lowercaseQuery = query.toLowerCase();
        return this.movies.filter(movie => 
            movie.title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            (movie.director && movie.director.toLowerCase && movie.director.toLowerCase().includes(lowercaseQuery)) ||
            (movie.cast && Array.isArray(movie.cast) && movie.cast.some(actor => actor.toLowerCase().includes(lowercaseQuery)))
        );
    }

    getMovieReviews(movieId) {
        return this.reviews[movieId] || [];
    }

    addMovieReview(movieId, review) {
        if (!this.reviews[movieId]) {
            this.reviews[movieId] = [];
        }
        this.reviews[movieId].push(review);
        this.saveReviews();
    }

    updateMovieReview(movieId, reviewIndex, review) {
        if (this.reviews[movieId] && this.reviews[movieId][reviewIndex]) {
            this.reviews[movieId][reviewIndex] = review;
            this.saveReviews();
        }
    }

    removeMovieReview(movieId, reviewIndex) {
        if (this.reviews[movieId] && this.reviews[movieId][reviewIndex]) {
            this.reviews[movieId].splice(reviewIndex, 1);
            this.saveReviews();
        }
    }

    getAverageRating(movieId) {
        const reviews = this.getMovieReviews(movieId);
        if (reviews.length === 0) return 0;
        
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (totalRating / reviews.length).toFixed(1);
    }

    validatePromoCode(code) {
        return this.promoCodes[code.toUpperCase()] || null;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CinemaData;
}