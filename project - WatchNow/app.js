/* ============================================
   WATCHNOW — Premium OTT Platform
   Main Application JavaScript  (v2 — Rich Genre Expansion)
   ============================================ */

// ─── TMDB base URL ──────────────────────────────────────────────────────────
const IMG = 'https://wsrv.nl/?url=image.tmdb.org/t/p/w500';

// ─── HERO SLIDES ────────────────────────────────────────────────────────────
const heroSlides = [
  {
    image: './img/f1.webp',
    title: 'F1',
    badge: 'NOW STREAMING',
    rating: 7.9, contentRating: 'PG-13', year: 2025, runtime: '2h 20min',
    genres: ['Action', 'Sport', 'Drama'],
    description: 'A Formula One racing driver comes out of retirement to mentor a fearless rookie, forging an unlikely partnership on the world\'s most dangerous circuits in a race against time.',
    trailer: 'https://www.youtube.com/watch?v=n6zSHZ7YOHA'
  },
  {
    image: './img/fight.jpg',
    title: 'Lucky Bhaskar',
    badge: 'BLOCKBUSTER HIT',
    rating: 8.1, contentRating: 'UA', year: 2024, runtime: '2h 28min',
    genres: ['Thriller', 'Drama', 'Crime'],
    description: 'A modest bank employee\'s quiet life spirals into chaos when he accidentally stumbles into a high-stakes underworld of crime, deception, and unexpected fortune.',
    trailer: 'https://www.youtube.com/watch?v=YBFoocxGgCU'
  },
  {
    image: './img/retro.webp',
    title: 'Retro',
    badge: 'CRITICALLY ACCLAIMED',
    rating: 8.4, contentRating: 'UA', year: 2024, runtime: '3h 5min',
    genres: ['Romance', 'Drama', 'Musical'],
    description: 'A timeless love story set against the vibrant backdrop of music and art, spanning decades and testing the very boundaries of love, passion, and sacrifice.',
    trailer: 'https://www.youtube.com/watch?v=Retro2024Trailer'
  }
];

// ─── MOVIE DATABASE ──────────────────────────────────────────────────────────
const movies = [

  // ══════════════════════════════════════════
  //  ORIGINAL 9 MOVIES (local assets)
  // ══════════════════════════════════════════
  {
    id: 1, title: 'Stranger Things',
    poster: './img/img1.jpg',
    type: 'TV Show', seasons: 5, year: 2016, rating: 8.7, runtime: '51 min/ep',
    genres: ['Sci-Fi', 'Horror', 'Drama'], contentRating: 'TV-14', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'When a young boy vanishes, a small Indiana town uncovers a mystery involving secret government experiments, terrifying supernatural forces, and one extraordinary girl with psychokinetic abilities.',
    director: 'The Duffer Brothers',
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder', 'David Harbour'],
    badge: 'trending', progress: 65,
    trailer: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
    sections: ['continue-watching', 'trending', 'top-rated', 'action-thriller', 'horror']
  },
  {
    id: 2, title: 'Wednesday',
    poster: './img/img2.jpeg',
    type: 'TV Show', seasons: 2, year: 2022, rating: 8.1, runtime: '50 min/ep',
    genres: ['Horror', 'Comedy', 'Mystery'], contentRating: 'TV-14', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'Wednesday Addams navigates Nevermore Academy, mastering her psychic ability, stopping a monstrous killing spree, and solving the supernatural mystery that embroiled her parents.',
    director: 'Tim Burton', cast: ['Jenna Ortega', 'Hunter Doohan', 'Emma Myers'],
    badge: 'new', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=Di310WS8zLk',
    sections: ['trending', 'new-releases', 'comedy-romance', 'horror']
  },
  {
    id: 3, title: 'Squid Game',
    poster: './img/img2.jpg',
    type: 'TV Show', seasons: 3, year: 2021, rating: 8.0, runtime: '55 min/ep',
    genres: ['Thriller', 'Drama', 'Survival'], contentRating: 'TV-MA', quality: '4K',
    languages: ['Korean', 'English', 'Hindi'],
    description: 'Hundreds of desperate cash-strapped players accept a mysterious invitation to compete in children\'s games. Inside, a deadly game awaits with a shocking prize.',
    director: 'Hwang Dong-hyuk', cast: ['Lee Jung-jae', 'Park Hae-soo', 'Wi Ha-jun'],
    badge: 'popular', progress: 30,
    trailer: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
    sections: ['continue-watching', 'popular', 'action-thriller', 'drama']
  },
  {
    id: 4, title: 'Spy Ops',
    poster: './img/img3.jpg',
    type: 'Limited Series', seasons: 1, year: 2023, rating: 7.2, runtime: '45 min/ep',
    genres: ['Spy', 'Action', 'Documentary'], contentRating: 'TV-14', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A gripping documentary series revealing the untold stories of history\'s most daring classified undercover operations, narrated by the real intelligence officers who lived them.',
    director: 'Various', cast: ['Real Intelligence Officers'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=SpyOpsTrailer',
    sections: ['trending', 'action-thriller']
  },
  {
    id: 5, title: 'Ginny & Georgia',
    poster: './img/IMG5.jpg',
    type: 'TV Show', seasons: 4, year: 2021, rating: 7.8, runtime: '55 min/ep',
    genres: ['Drama', 'Comedy', 'Family'], contentRating: 'TV-MA', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'Free-spirited Georgia moves with daughter Ginny to a New England town seeking a fresh start — only to discover their mother is hiding a dark, complicated past.',
    director: 'Debra J. Fisher', cast: ['Antonia Gentry', 'Brianne Howey', 'Diesel La Torraca'],
    badge: 'popular', progress: 80,
    trailer: 'https://www.youtube.com/watch?v=y1QCKhlhAbI',
    sections: ['continue-watching', 'popular', 'comedy-romance', 'drama']
  },
  {
    id: 6, title: 'Perusu',
    poster: './img/IMG6.jpg',
    type: 'Movie', year: 2024, rating: 7.5, runtime: '2h 15min',
    genres: ['Action', 'Thriller', 'Telugu'], contentRating: 'UA', quality: '4K',
    languages: ['Telugu', 'Hindi', 'Tamil'],
    description: 'A high-octane action thriller following a fierce warrior who must confront his past and defend those he loves in an electrifying battle of honour and revenge.',
    director: 'Sandeep Raj', cast: ['Lead Actor', 'Lead Actress'],
    badge: 'new', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=PerusuTrailer',
    sections: ['new-releases', 'action-thriller', 'popular']
  },
  {
    id: 7, title: 'Never Have I Ever',
    poster: './img/IMG7.avif',
    type: 'TV Show', seasons: 4, year: 2020, rating: 7.8, runtime: '30 min/ep',
    genres: ['Comedy', 'Romance', 'Drama'], contentRating: 'TV-14', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'An overachieving Indian American teenager navigates high school, love triangles, friendship, and grief in suburban California while juggling an eccentric family life.',
    director: 'Mindy Kaling', cast: ['Maitreyi Ramakrishnan', 'Poorna Jagannathan', 'Darren Barnet'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=V0Lz4DFQzEg',
    sections: ['top-rated', 'comedy-romance']
  },
  {
    id: 8, title: 'Rana Naidu',
    poster: './img/img 9.jpg',
    type: 'TV Show', seasons: 2, year: 2023, rating: 7.3, runtime: '45 min/ep',
    genres: ['Action', 'Crime', 'Thriller'], contentRating: 'TV-MA', quality: 'HD',
    languages: ['Hindi', 'Telugu', 'Tamil', 'English'],
    description: 'A powerful fixer for Bollywood\'s biggest stars gets pulled into a dangerous web when his estranged criminal father walks back into his life.',
    director: 'Karan Anshuman', cast: ['Rana Daggubati', 'Venkatesh Daggubati', 'Surveen Chawla'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=RanaNaiduTrailer',
    sections: ['trending', 'action-thriller', 'new-releases']
  },
  {
    id: 9, title: 'Thug Life',
    poster: './img/img8.avif',
    type: 'Movie', year: 2025, rating: 8.2, runtime: '2h 40min',
    genres: ['Action', 'Crime', 'Drama'], contentRating: 'A', quality: '4K',
    languages: ['Tamil', 'Hindi', 'Telugu', 'English'],
    description: 'A legendary gangster rises from the ashes of a shattered past, commanding unwavering loyalty while battling inner demons in Mani Ratnam\'s epic crime drama.',
    director: 'Mani Ratnam', cast: ['Kamal Haasan', 'Silambarasan', 'Trisha Krishnan', 'Ali Fazal'],
    badge: 'new', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=ThugLifeTrailer',
    sections: ['new-releases', 'top-rated', 'action-thriller', 'drama']
  },

  // ══════════════════════════════════════════
  //  🎬  ACTION & THRILLER
  // ══════════════════════════════════════════
  {
    id: 10, title: 'The Dark Knight',
    poster: `${IMG}/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,
    type: 'Movie', year: 2008, rating: 9.0, runtime: '2h 32min',
    genres: ['Action', 'Crime', 'Thriller'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan', cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    sections: ['action-thriller', 'top-rated']
  },
  {
    id: 11, title: 'John Wick: Chapter 4',
    poster: `${IMG}/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg`,
    type: 'Movie', year: 2023, rating: 7.7, runtime: '2h 49min',
    genres: ['Action', 'Thriller', 'Crime'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'John Wick uncovers a path to defeating the High Table, but before he can earn his freedom, he must face a new enemy with powerful alliances across the globe.',
    director: 'Chad Stahelski', cast: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård', 'Laurence Fishburne'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=qEVUtrk8_B4',
    sections: ['action-thriller', 'trending']
  },
  {
    id: 12, title: 'Top Gun: Maverick',
    poster: `${IMG}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`,
    type: 'Movie', year: 2022, rating: 8.3, runtime: '2h 10min',
    genres: ['Action', 'Drama', 'Adventure'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'After more than thirty years of service, Pete "Maverick" Mitchell pushes the limits as a courageous test pilot and must confront the ghosts of his past.',
    director: 'Joseph Kosinski', cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=giXco2jaZ_4',
    sections: ['action-thriller', 'top-rated']
  },
  {
    id: 13, title: 'Mad Max: Fury Road',
    poster: './img/madmaxfurryroad.webp',
    type: 'Movie', year: 2015, rating: 8.1, runtime: '2h 0min',
    genres: ['Action', 'Adventure', 'Sci-Fi'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    director: 'George Miller', cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=hEJnMQG9ev8',
    sections: ['action-thriller']
  },
  {
    id: 14, title: 'The Batman',
    poster: `${IMG}/74xTEgt7R36Fpooo50r9T25onhq.jpg`,
    type: 'Movie', year: 2022, rating: 7.8, runtime: '2h 56min',
    genres: ['Action', 'Crime', 'Mystery'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
    director: 'Matt Reeves', cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano', 'Colin Farrell'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
    sections: ['action-thriller', 'popular']
  },
  {
    id: 15, title: 'RRR',
    poster: `${IMG}/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg`,
    type: 'Movie', year: 2022, rating: 7.8, runtime: '3h 2min',
    genres: ['Action', 'Drama', 'Period'], contentRating: 'UA', quality: '4K',
    languages: ['Telugu', 'Hindi', 'Tamil', 'Malayalam'],
    description: 'A fictional story about two legendary revolutionaries and their journey away from home before they began fighting for their country in the 1920s.',
    director: 'S.S. Rajamouli', cast: ['N.T. Rama Rao Jr.', 'Ram Charan', 'Alia Bhatt', 'Ajay Devgn'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=NgVdUfSWe94',
    sections: ['action-thriller', 'trending', 'top-rated']
  },
  {
    id: 16, title: 'KGF: Chapter 2',
    poster: './img/kgf2.webp',
    type: 'Movie', year: 2022, rating: 8.4, runtime: '2h 48min',
    genres: ['Action', 'Crime', 'Drama'], contentRating: 'UA', quality: '4K',
    languages: ['Kannada', 'Hindi', 'Telugu', 'Tamil'],
    description: 'Rocky\'s fearsome and ruthless nature is revealed to the world as he becomes a notorious criminal overlord whose name spreads fear even to the powerful Inayat Khalil.',
    director: 'Prashanth Neel', cast: ['Yash', 'Sanjay Dutt', 'Raveena Tandon', 'Srinidhi Shetty'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=KoSKb8Klss4',
    sections: ['action-thriller', 'top-rated']
  },
  {
    id: 17, title: 'Mission: Impossible – Dead Reckoning',
    poster: `${IMG}/NNxYkU70HPurnNCSiCjYAmacwm.jpg`,
    type: 'Movie', year: 2023, rating: 7.7, runtime: '2h 43min',
    genres: ['Action', 'Thriller', 'Spy'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'Ethan Hunt and his IMF team must track down a dangerous new weapon before it falls into the wrong hands — a rogue AI that threatens all of humanity.',
    director: 'Christopher McQuarrie', cast: ['Tom Cruise', 'Hayley Atwell', 'Ving Rhames', 'Simon Pegg'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=avz06PDqDbM',
    sections: ['action-thriller']
  },
  {
    id: 18, title: 'Avengers: Endgame',
    poster: `${IMG}/or06FN3Dka5tukK1e9sl16pB3iy.jpg`,
    type: 'Movie', year: 2019, rating: 8.4, runtime: '3h 1min',
    genres: ['Action', 'Sci-Fi', 'Adventure'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos\'s actions and restore balance to the universe in one final stand.',
    director: 'Russo Brothers', cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Scarlett Johansson'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    sections: ['action-thriller', 'top-rated']
  },
  {
    id: 19, title: 'Pushpa: The Rise',
    poster: './img/pushpa.webp',
    type: 'Movie', year: 2021, rating: 7.6, runtime: '2h 59min',
    genres: ['Action', 'Crime', 'Telugu'], contentRating: 'UA', quality: '4K',
    languages: ['Telugu', 'Hindi', 'Tamil', 'Malayalam'],
    description: 'A lorry driver rises in the red sandalwood smuggling syndicate based in the forests of Seshachalam Hills in Andhra Pradesh, becoming a feared name in the underworld.',
    director: 'Sukumar', cast: ['Allu Arjun', 'Fahadh Faasil', 'Rashmika Mandanna', 'Jagapathi Babu'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=Q1NKMPhP8PY',
    sections: ['action-thriller', 'popular']
  },
  {
    id: 20, title: 'Jawan',
    poster: './img/jawa.webp',
    type: 'Movie', year: 2023, rating: 6.7, runtime: '2h 49min',
    genres: ['Action', 'Thriller', 'Drama'], contentRating: 'UA', quality: '4K',
    languages: ['Hindi', 'Tamil', 'Telugu', 'Malayalam'],
    description: 'A man is driven by a personal vendetta to rectify the wrongs in society while keeping a promise made years ago — he comes face to face with a ruthless warlord.',
    director: 'Atlee', cast: ['Shah Rukh Khan', 'Vijay Sethupathi', 'Nayanthara', 'Deepika Padukone'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=aMkEdmMHMnk',
    sections: ['action-thriller', 'trending', 'new-releases']
  },
  {
    id: 21, title: 'Gladiator',
    poster: `${IMG}/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg`,
    type: 'Movie', year: 2000, rating: 8.5, runtime: '2h 35min',
    genres: ['Action', 'Drama', 'Adventure'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A once-powerful Roman general is reduced to a slave, who rises through the ranks of the gladiatorial arena to seek vengeance against the corrupt emperor who murdered his family.',
    director: 'Ridley Scott', cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen', 'Oliver Reed'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=owK1qxDselE',
    sections: ['action-thriller', 'drama', 'top-rated']
  },
  {
    id: 22, title: 'Leo',
    poster: './img/leo.webp',
    type: 'Movie', year: 2023, rating: 6.8, runtime: '2h 44min',
    genres: ['Action', 'Crime', 'Tamil'], contentRating: 'UA', quality: '4K',
    languages: ['Tamil', 'Hindi', 'Telugu'],
    description: 'A mild-mannered café owner\'s peaceful life in a hill town is violently disrupted when he is mistaken for a feared underworld don, forcing him to confront his forgotten past.',
    director: 'Lokesh Kanagaraj', cast: ['Vijay', 'Trisha Krishnan', 'Sanjay Dutt', 'Arjun Sarja'],
    badge: 'new', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=aTNj3hpOHfQ',
    sections: ['action-thriller', 'new-releases']
  },
  {
    id: 23, title: 'Heat',
    poster: './img/heat.webp',
    type: 'Movie', year: 1995, rating: 8.2, runtime: '2h 50min',
    genres: ['Action', 'Crime', 'Thriller'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest robbery. A masterwork of crime cinema.',
    director: 'Michael Mann', cast: ['Al Pacino', 'Robert De Niro', 'Val Kilmer', 'Jon Voight'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=TfFPCa4bfG0',
    sections: ['action-thriller', 'top-rated']
  },
  {
    id: 24, title: 'Extraction 2',
    poster: './img/extraction.webp',
    type: 'Movie', year: 2023, rating: 7.2, runtime: '2h 2min',
    genres: ['Action', 'Thriller', 'Adventure'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'Back from the brink of death, black-market mercenary Tyler Rake takes on another deadly mission — this time to pull a ruthless Georgian gangster\'s family out of prison.',
    director: 'Sam Hargrave', cast: ['Chris Hemsworth', 'Golshifteh Farahani', 'Adam Bessa'],
    badge: 'new', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=Y274jZs5s7s',
    sections: ['action-thriller']
  },

  // ══════════════════════════════════════════
  //  😄  COMEDY & ROMANCE
  // ══════════════════════════════════════════
  {
    id: 25, title: 'Crazy Rich Asians',
    poster: './img/crazyrichasians.webp',
    type: 'Movie', year: 2018, rating: 7.0, runtime: '2h 0min',
    genres: ['Comedy', 'Romance', 'Drama'], contentRating: 'PG-13', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'This contemporary romantic comedy follows native New Yorker Rachel Chu as she travels to Singapore for her boyfriend\'s best friend\'s wedding and discovers his family is insanely wealthy.',
    director: 'Jon M. Chu', cast: ['Constance Wu', 'Henry Golding', 'Gemma Chan', 'Awkwafina'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=GRDr_UdPJiM',
    sections: ['comedy-romance', 'popular']
  },
  {
    id: 26, title: '3 Idiots',
    poster: `${IMG}/66A9MqXOyVFCssoloscw79z8Tew.jpg`,
    type: 'Movie', year: 2009, rating: 8.4, runtime: '2h 50min',
    genres: ['Comedy', 'Drama', 'Romance'], contentRating: 'PG', quality: 'HD',
    languages: ['Hindi', 'English'],
    description: 'Two friends are on a quest to find a lost buddy. On this journey, they recollect their college days and the memories of their friend who made the journey of life a fun-filled adventure.',
    director: 'Rajkumar Hirani', cast: ['Aamir Khan', 'R. Madhavan', 'Sharman Joshi', 'Kareena Kapoor'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=xvszmNXdM4w',
    sections: ['comedy-romance', 'top-rated']
  },
  {
    id: 27, title: 'Hera Pheri',
    poster: './img/herapheri.webp',
    type: 'Movie', year: 2000, rating: 8.2, runtime: '2h 25min',
    genres: ['Comedy', 'Crime', 'Hindi'], contentRating: 'PG', quality: 'HD',
    languages: ['Hindi'],
    description: 'Three men stumble upon a kidnapping, which inadvertently leads them into a world of crime and comedy. The undisputed king of Bollywood comedy.',
    director: 'Priyadarshan', cast: ['Akshay Kumar', 'Suniel Shetty', 'Paresh Rawal', 'Tabu'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=HeraPheriTrailer',
    sections: ['comedy-romance', 'popular']
  },
  {
    id: 28, title: 'Jab We Met',
    poster: './img/jabwemet.webp',
    type: 'Movie', year: 2007, rating: 7.9, runtime: '2h 18min',
    genres: ['Comedy', 'Romance', 'Drama'], contentRating: 'PG', quality: 'HD',
    languages: ['Hindi'],
    description: 'A depressed businessman meets a vivacious girl on a train who teaches him to enjoy life and take chances, while he helps her pursue her true love.',
    director: 'Imtiaz Ali', cast: ['Shahid Kapoor', 'Kareena Kapoor Khan', 'Tarun Arora'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=JabWeMet2007',
    sections: ['comedy-romance', 'top-rated']
  },
  {
    id: 29, title: 'Yeh Jawaani Hai Deewani',
    poster: './img/heyjawaniheydhiwani.webp',
    type: 'Movie', year: 2013, rating: 7.6, runtime: '2h 41min',
    genres: ['Comedy', 'Romance', 'Drama'], contentRating: 'PG', quality: 'HD',
    languages: ['Hindi'],
    description: 'A travel junkie and a studious girl meet on a trekking trip, fall in love, and reunite eight years later after going their separate ways — discovering they still have feelings.',
    director: 'Ayan Mukerji', cast: ['Ranbir Kapoor', 'Deepika Padukone', 'Kalki Koechlin', 'Aditya Roy Kapur'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=YJHDTrailer',
    sections: ['comedy-romance']
  },
  {
    id: 30, title: 'Premam',
    poster: './img/premam.webp',
    type: 'Movie', year: 2015, rating: 8.3, runtime: '2h 27min',
    genres: ['Comedy', 'Romance', 'Drama'], contentRating: 'PG', quality: 'HD',
    languages: ['Malayalam', 'Tamil', 'Telugu'],
    description: 'The love story of George, a carefree college student who falls in love three times — each encounter shaping his understanding of life and what love truly means.',
    director: 'Alphonse Puthren', cast: ['Nivin Pauly', 'Sai Pallavi', 'Madonna Sebastian', 'Anupama Parameswaran'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=PremamTrailer',
    sections: ['comedy-romance', 'top-rated']
  },
  {
    id: 31, title: 'About Time',
    poster: `${IMG}/zimBMK4KXNP9J3MhXBHqxrZgDtF.jpg`,
    type: 'Movie', year: 2013, rating: 7.8, runtime: '2h 3min',
    genres: ['Comedy', 'Romance', 'Sci-Fi'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'At the age of 21, Tim Lake discovers he can time travel. Hoping to find love, he meets the charming Mary, but must juggle love and life in the best way possible.',
    director: 'Richard Curtis', cast: ['Domhnall Gleeson', 'Rachel McAdams', 'Bill Nighy', 'Tom Hollander'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=58-6HNWB9L4',
    sections: ['comedy-romance']
  },
  {
    id: 32, title: '10 Things I Hate About You',
    poster: './img/10thingsihate.webp',
    type: 'Movie', year: 1999, rating: 7.3, runtime: '1h 37min',
    genres: ['Comedy', 'Romance', 'Drama'], contentRating: 'PG-13', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A pretty, popular teenager can\'t go out on a date until her ill-tempered older sister does. So her parents encourage the guy she likes to find somebody to take her out.',
    director: 'Gil Junger', cast: ['Heath Ledger', 'Julia Stiles', 'Joseph Gordon-Levitt'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=cMknLXMBu9k',
    sections: ['comedy-romance']
  },
  {
    id: 33, title: 'Dil Chahta Hai',
    poster: './img/dilchahtahai.webp',
    type: 'Movie', year: 2001, rating: 8.1, runtime: '3h 3min',
    genres: ['Comedy', 'Drama', 'Romance'], contentRating: 'PG', quality: 'HD',
    languages: ['Hindi'],
    description: 'Three inseparable childhood friends go through post-college life with wildly different relationships with women, discovering love, heartbreak, and the meaning of friendship.',
    director: 'Farhan Akhtar', cast: ['Aamir Khan', 'Saif Ali Khan', 'Akshaye Khanna', 'Preity Zinta'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=DilChahtaHaiTrailer',
    sections: ['comedy-romance', 'drama']
  },
  {
    id: 34, title: 'Love Actually',
    poster: './img/loveactually.webp',
    type: 'Movie', year: 2003, rating: 7.6, runtime: '2h 15min',
    genres: ['Comedy', 'Romance', 'Drama'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas.',
    director: 'Richard Curtis', cast: ['Hugh Grant', 'Liam Neeson', 'Colin Firth', 'Emma Thompson'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=S47AqMpHPKM',
    sections: ['comedy-romance']
  },
  {
    id: 35, title: 'The Proposal',
    poster: `${IMG}/k4vlDG4UYQF3eMYY1F6bNzP4EMY.jpg`,
    type: 'Movie', year: 2009, rating: 6.7, runtime: '1h 47min',
    genres: ['Comedy', 'Romance'], contentRating: 'PG-13', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.',
    director: 'Anne Fletcher', cast: ['Sandra Bullock', 'Ryan Reynolds', 'Betty White', 'Craig T. Nelson'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=jrq2vKSXE-A',
    sections: ['comedy-romance']
  },
  {
    id: 36, title: 'Hitch',
    poster: './img/hitch.webp',
    type: 'Movie', year: 2005, rating: 6.7, runtime: '1h 58min',
    genres: ['Comedy', 'Romance'], contentRating: 'PG-13', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A smooth-talking man falls for a hardened columnist while helping a friend woo a beautiful heiress in this irresistible romantic comedy.',
    director: 'Andy Tennant', cast: ['Will Smith', 'Eva Mendes', 'Kevin James', 'Amber Valletta'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=fM6JvQAfwqU',
    sections: ['comedy-romance']
  },

  // ══════════════════════════════════════════
  //  🚀  SCI-FI & FANTASY
  // ══════════════════════════════════════════
  {
    id: 37, title: 'Inception',
    poster: `${IMG}/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg`,
    type: 'Movie', year: 2010, rating: 8.8, runtime: '2h 28min',
    genres: ['Sci-Fi', 'Thriller', 'Action'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    director: 'Christopher Nolan', cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page', 'Tom Hardy'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    sections: ['scifi', 'top-rated']
  },
  {
    id: 38, title: 'Interstellar',
    poster: `${IMG}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`,
    type: 'Movie', year: 2014, rating: 8.7, runtime: '2h 49min',
    genres: ['Sci-Fi', 'Drama', 'Adventure'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival. A visually stunning masterpiece of space exploration.',
    director: 'Christopher Nolan', cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    sections: ['scifi', 'top-rated']
  },
  {
    id: 39, title: 'The Matrix',
    poster: `${IMG}/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`,
    type: 'Movie', year: 1999, rating: 8.7, runtime: '2h 16min',
    genres: ['Sci-Fi', 'Action', 'Thriller'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. A landmark in sci-fi cinema.',
    director: 'The Wachowskis', cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
    sections: ['scifi', 'top-rated', 'action-thriller']
  },
  {
    id: 40, title: 'Dune: Part Two',
    poster: `${IMG}/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg`,
    type: 'Movie', year: 2024, rating: 8.5, runtime: '2h 46min',
    genres: ['Sci-Fi', 'Adventure', 'Drama'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Timothée Chalamet\'s career-defining performance.',
    director: 'Denis Villeneuve', cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Austin Butler'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=Way9Dexny3w',
    sections: ['scifi', 'top-rated', 'new-releases']
  },
  {
    id: 41, title: 'Blade Runner 2049',
    poster: `${IMG}/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg`,
    type: 'Movie', year: 2017, rating: 8.0, runtime: '2h 44min',
    genres: ['Sci-Fi', 'Drama', 'Thriller'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'A young blade runner discovers a long-buried secret that has the potential to plunge what\'s left of society into chaos. He sets out to find Rick Deckard, missing for 30 years.',
    director: 'Denis Villeneuve', cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas', 'Jared Leto'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=gCcx85zbxz4',
    sections: ['scifi', 'top-rated']
  },
  {
    id: 42, title: 'Arrival',
    poster: `${IMG}/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg`,
    type: 'Movie', year: 2016, rating: 7.9, runtime: '1h 56min',
    genres: ['Sci-Fi', 'Drama', 'Mystery'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
    director: 'Denis Villeneuve', cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=tFMo3UJ4B4g',
    sections: ['scifi']
  },
  {
    id: 43, title: 'Everything Everywhere All at Once',
    poster: `${IMG}/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg`,
    type: 'Movie', year: 2022, rating: 7.8, runtime: '2h 19min',
    genres: ['Sci-Fi', 'Comedy', 'Action'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'A middle-aged Chinese immigrant is swept up in an insane adventure in which she alone can save existence by exploring other universes connecting with the lives she could have led.',
    director: 'Daniels', cast: ['Michelle Yeoh', 'Ke Huy Quan', 'Jamie Lee Curtis', 'Stephanie Hsu'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=wxN1T1uxQ2g',
    sections: ['scifi', 'comedy-romance']
  },
  {
    id: 44, title: 'Dune',
    poster: `${IMG}/d5NXSklXo0qyIYkgV94XAgMIckC.jpg`,
    type: 'Movie', year: 2021, rating: 8.0, runtime: '2h 35min',
    genres: ['Sci-Fi', 'Adventure', 'Drama'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'Feature film adaptation of Frank Herbert\'s science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
    director: 'Denis Villeneuve', cast: ['Timothée Chalamet', 'Oscar Isaac', 'Rebecca Ferguson', 'Zendaya'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=8g18jFHCLXk',
    sections: ['scifi']
  },
  {
    id: 45, title: 'Ex Machina',
    poster: './img/exmachina.webp',
    type: 'Movie', year: 2014, rating: 7.7, runtime: '1h 48min',
    genres: ['Sci-Fi', 'Drama', 'Thriller'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.',
    director: 'Alex Garland', cast: ['Domhnall Gleeson', 'Oscar Isaac', 'Alicia Vikander'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=EoQuVnKhxaM',
    sections: ['scifi']
  },
  {
    id: 46, title: 'Avatar: The Way of Water',
    poster: './img/avatar.webp',
    type: 'Movie', year: 2022, rating: 7.6, runtime: '3h 12min',
    genres: ['Sci-Fi', 'Action', 'Adventure'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
    description: 'Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri to protect his family.',
    director: 'James Cameron', cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Kate Winslet'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=d9MyW72ELq0',
    sections: ['scifi', 'popular']
  },
  {
    id: 47, title: 'The Martian',
    poster: `${IMG}/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg`,
    type: 'Movie', year: 2015, rating: 8.0, runtime: '2h 24min',
    genres: ['Sci-Fi', 'Drama', 'Adventure'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
    director: 'Ridley Scott', cast: ['Matt Damon', 'Jessica Chastain', 'Kristen Wiig', 'Jeff Daniels'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=ej3ioOneTy8',
    sections: ['scifi']
  },
  {
    id: 48, title: 'Her',
    poster: './img/her.webp',
    type: 'Movie', year: 2013, rating: 8.0, runtime: '2h 6min',
    genres: ['Sci-Fi', 'Drama', 'Romance'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A lonely writer develops an unlikely relationship with an operating system designed to meet his every need. A poignant and visually beautiful exploration of love and technology.',
    director: 'Spike Jonze', cast: ['Joaquin Phoenix', 'Scarlett Johansson', 'Amy Adams', 'Rooney Mara'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=WzV6mXIOVl4',
    sections: ['scifi', 'drama', 'comedy-romance']
  },

  // ══════════════════════════════════════════
  //  🔥  HORROR
  // ══════════════════════════════════════════
  {
    id: 49, title: 'The Shining',
    poster: './img/theshining.webp',
    type: 'Movie', year: 1980, rating: 8.4, runtime: '2h 26min',
    genres: ['Horror', 'Thriller', 'Drama'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both the past and future.',
    director: 'Stanley Kubrick', cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd', 'Scatman Crothers'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=S014oGZiSdI',
    sections: ['horror', 'top-rated']
  },
  {
    id: 50, title: 'The Silence of the Lambs',
    poster: `${IMG}/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg`,
    type: 'Movie', year: 1991, rating: 8.6, runtime: '1h 58min',
    genres: ['Horror', 'Thriller', 'Crime'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
    director: 'Jonathan Demme', cast: ['Jodie Foster', 'Anthony Hopkins', 'Scott Glenn', 'Ted Levine'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o',
    sections: ['horror', 'top-rated', 'drama']
  },
  {
    id: 51, title: 'Get Out',
    poster: `${IMG}/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg`,
    type: 'Movie', year: 2017, rating: 7.7, runtime: '1h 44min',
    genres: ['Horror', 'Thriller', 'Mystery'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A young African-American man visits his white girlfriend\'s parents for the weekend, where his discomfort mounts as he discovers a deeply unsettling secret.',
    director: 'Jordan Peele', cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford', 'Catherine Keener'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=sRfnevzQBNo',
    sections: ['horror', 'top-rated']
  },
  {
    id: 52, title: 'A Quiet Place',
    poster: './img/quiteplace.webp',
    type: 'Movie', year: 2018, rating: 7.5, runtime: '1h 30min',
    genres: ['Horror', 'Sci-Fi', 'Drama'], contentRating: 'PG-13', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'In a post-apocalyptic world, a family is forced to live in near silence while hiding from creatures that hunt by sound. A masterclass in tension and dread.',
    director: 'John Krasinski', cast: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=WR7cc5t7tv8',
    sections: ['horror', 'popular']
  },
  {
    id: 53, title: 'Hereditary',
    poster: './img/heridetary.webp',
    type: 'Movie', year: 2018, rating: 7.3, runtime: '2h 7min',
    genres: ['Horror', 'Drama', 'Mystery'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'When the matriarch of the Graham family passes away, her daughter\'s family begins to unravel cryptic and terrifying secrets about their ancestry, descending into a nightmare.',
    director: 'Ari Aster', cast: ['Toni Collette', 'Milly Shapiro', 'Gabriel Byrne', 'Alex Wolff'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=V6wWKNij_1M',
    sections: ['horror']
  },
  {
    id: 54, title: 'Midsommar',
    poster: `${IMG}/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg`,
    type: 'Movie', year: 2019, rating: 7.1, runtime: '2h 28min',
    genres: ['Horror', 'Drama', 'Mystery'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A couple travels to Sweden to visit a rural hometown\'s fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition.',
    director: 'Ari Aster', cast: ['Florence Pugh', 'Jack Reynor', 'William Jackson Harper'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
    sections: ['horror']
  },
  {
    id: 55, title: 'Tumbbad',
    poster: './img/tumbbad.webp',
    type: 'Movie', year: 2018, rating: 8.5, runtime: '1h 44min',
    genres: ['Horror', 'Fantasy', 'Drama'], contentRating: 'A', quality: 'HD',
    languages: ['Hindi', 'Marathi'],
    description: 'A period piece about the consequences of greed, set in the backdrop of a fabled village in Maharashtra. A visually stunning and uniquely Indian horror masterpiece.',
    director: 'Rahi Anil Barve', cast: ['Sohum Shah', 'Anita Date', 'Jyoti Malshe'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=T3TSJY79iRo',
    sections: ['horror', 'top-rated']
  },
  {
    id: 56, title: 'Stree 2',
    poster: './img/stree.webp',
    type: 'Movie', year: 2024, rating: 8.2, runtime: '2h 15min',
    genres: ['Horror', 'Comedy', 'Hindi'], contentRating: 'UA', quality: '4K',
    languages: ['Hindi'],
    description: 'The beloved horror-comedy franchise returns as the town of Chanderi faces a new supernatural threat, and Stree must be summoned once again to protect the innocent.',
    director: 'Amar Kaushik', cast: ['Shraddha Kapoor', 'Rajkummar Rao', 'Aparshakti Khurana', 'Tamannaah'],
    badge: 'new', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=Stree2Trailer',
    sections: ['horror', 'new-releases', 'comedy-romance']
  },
  {
    id: 57, title: 'Train to Busan',
    poster: './img/traintobusan.webp',
    type: 'Movie', year: 2016, rating: 7.6, runtime: '1h 58min',
    genres: ['Horror', 'Action', 'Thriller'], contentRating: 'R', quality: 'HD',
    languages: ['Korean', 'English', 'Hindi'],
    description: 'While a zombie pandemic sweeps across South Korea, passengers on a train from Seoul to Busan struggle to survive as the infected storm through each car.',
    director: 'Yeon Sang-ho', cast: ['Gong Yoo', 'Jung Yu-mi', 'Ma Dong-seok', 'Kim Su-an'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=HbtuH0GFp1g',
    sections: ['horror', 'action-thriller']
  },
  {
    id: 58, title: 'It',
    poster: './img/IT.webp',
    type: 'Movie', year: 2017, rating: 7.3, runtime: '2h 15min',
    genres: ['Horror', 'Thriller', 'Drama'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry.',
    director: 'Andy Muschietti', cast: ['Jaeden Martell', 'Bill Skarsgård', 'Jeremy Ray Taylor'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=FnCdOQsX5kc',
    sections: ['horror']
  },
  {
    id: 59, title: 'Annihilation',
    poster: './img/annihilatio.webp',
    type: 'Movie', year: 2018, rating: 6.9, runtime: '1h 55min',
    genres: ['Horror', 'Sci-Fi', 'Adventure'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A biologist signs up for a dangerous, secret expedition where the laws of nature don\'t apply. What they discover on the other side challenges everything they know.',
    director: 'Alex Garland', cast: ['Natalie Portman', 'Jennifer Jason Leigh', 'Gina Rodriguez', 'Oscar Isaac'],
    badge: 'trending', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=89OP78l9oF0',
    sections: ['horror', 'scifi']
  },
  {
    id: 60, title: 'Talk to Me',
    poster: './img/talk to me.webp',
    type: 'Movie', year: 2022, rating: 7.2, runtime: '1h 35min',
    genres: ['Horror', 'Thriller', 'Mystery'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'A group of friends discover how to conjure spirits using an embalmed hand, but they accidentally open a portal to the demonic world.',
    director: 'Danny & Michael Philippou', cast: ['Sophie Wilde', 'Alexandra Jensen', 'Joe Bird'],
    badge: 'new', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=ggoFNknFsNY',
    sections: ['horror']
  },
  {
    id: 61, title: 'Bird Box',
    poster: './img/birdbox.webp',
    type: 'Movie', year: 2018, rating: 6.6, runtime: '2h 4min',
    genres: ['Horror', 'Thriller', 'Sci-Fi'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate journey to find safe haven.',
    director: 'Susanne Bier', cast: ['Sandra Bullock', 'Trevante Rhodes', 'John Malkovich', 'Colson Baker'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=MtMwiFnkZus',
    sections: ['horror', 'popular']
  },
  {
    id: 62, title: 'The Conjuring',
    poster: `${IMG}/wVYREutTvI2tmxr6ujrHT704wGF.jpg`,
    type: 'Movie', year: 2013, rating: 7.5, runtime: '1h 52min',
    genres: ['Horror', 'Thriller', 'Mystery'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Based on a true story.',
    director: 'James Wan', cast: ['Patrick Wilson', 'Vera Farmiga', 'Ron Livingston', 'Lili Taylor'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=k10ETZ41q5o',
    sections: ['horror']
  },

  // ══════════════════════════════════════════
  //  🌟  DRAMA
  // ══════════════════════════════════════════
  {
    id: 63, title: 'The Shawshank Redemption',
    poster: `${IMG}/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg`,
    type: 'Movie', year: 1994, rating: 9.3, runtime: '2h 22min',
    genres: ['Drama', 'Crime'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. The greatest film ever made according to IMDb.',
    director: 'Frank Darabont', cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
    sections: ['drama', 'top-rated']
  },
  {
    id: 64, title: 'The Godfather',
    poster: './img/godfather.webp',
    type: 'Movie', year: 1972, rating: 9.2, runtime: '2h 55min',
    genres: ['Drama', 'Crime'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. A cinematic masterpiece of power, family, and loyalty.',
    director: 'Francis Ford Coppola', cast: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Diane Keaton'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=sY1S34973zA',
    sections: ['drama', 'top-rated']
  },
  {
    id: 65, title: 'Forrest Gump',
    poster: `${IMG}/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg`,
    type: 'Movie', year: 1994, rating: 8.8, runtime: '2h 22min',
    genres: ['Drama', 'Romance', 'Comedy'], contentRating: 'PG-13', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, and Watergate are seen through the eyes of an Alabama man with an IQ of 75, whose only desire is to be reunited with Jenny.',
    director: 'Robert Zemeckis', cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise', 'Sally Field'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
    sections: ['drama', 'top-rated', 'comedy-romance']
  },
  {
    id: 66, title: 'Schindler\'s List',
    poster: `${IMG}/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg`,
    type: 'Movie', year: 1993, rating: 9.0, runtime: '3h 15min',
    genres: ['Drama', 'History', 'Biography'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    director: 'Steven Spielberg', cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=gG22XNhtnoY',
    sections: ['drama', 'top-rated']
  },
  {
    id: 67, title: 'Oppenheimer',
    poster: `${IMG}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`,
    type: 'Movie', year: 2023, rating: 8.5, runtime: '3h 0min',
    genres: ['Drama', 'Biography', 'History'], contentRating: 'R', quality: '4K',
    languages: ['English', 'Hindi'],
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. Christopher Nolan\'s magnum opus.',
    director: 'Christopher Nolan', cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=uYPbbksJxIg',
    sections: ['drama', 'top-rated', 'new-releases']
  },
  {
    id: 68, title: 'Parasite',
    poster: `${IMG}/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`,
    type: 'Movie', year: 2019, rating: 8.5, runtime: '2h 12min',
    genres: ['Drama', 'Thriller', 'Comedy'], contentRating: 'R', quality: '4K',
    languages: ['Korean', 'English', 'Hindi'],
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Palme d\'Or winner.',
    director: 'Bong Joon-ho', cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong', 'Choi Woo-shik'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=5xH0HfJHsaY',
    sections: ['drama', 'top-rated']
  },
  {
    id: 69, title: 'Dangal',
    poster: './img/dangal.webp',
    type: 'Movie', year: 2016, rating: 8.3, runtime: '2h 41min',
    genres: ['Drama', 'Biography', 'Sport'], contentRating: 'PG', quality: 'HD',
    languages: ['Hindi', 'English'],
    description: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters Geeta Phogat and Babita Kumari struggle to achieve their dreams and make India proud.',
    director: 'Nitesh Tiwari', cast: ['Aamir Khan', 'Fatima Sana Shaikh', 'Sanya Malhotra'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=x_7yuMrOT1c',
    sections: ['drama', 'top-rated']
  },
  {
    id: 70, title: 'The Pursuit of Happyness',
    poster: './img/pursuitofhapiness.webp',
    type: 'Movie', year: 2006, rating: 8.0, runtime: '1h 57min',
    genres: ['Drama', 'Biography', 'Family'], contentRating: 'PG-13', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'Based on the true story of Chris Gardner, a struggling salesman who takes custody of his son as he\'s poised to begin a life-changing professional endeavour.',
    director: 'Gabriele Muccino', cast: ['Will Smith', 'Jaden Smith', 'Thandie Newton'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=89Kq8SDyvfg',
    sections: ['drama', 'popular']
  },
  {
    id: 71, title: 'Good Will Hunting',
    poster: './img/goodwillhunting.webp',
    type: 'Movie', year: 1997, rating: 8.3, runtime: '2h 6min',
    genres: ['Drama', 'Romance'], contentRating: 'R', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'Will Hunting, a janitor at MIT, has a gift for mathematics but needs help from a psychologist to find direction in his life and realize his full potential.',
    director: 'Gus Van Sant', cast: ['Matt Damon', 'Robin Williams', 'Ben Affleck', 'Minnie Driver'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=PtDMGXFpSCw',
    sections: ['drama', 'top-rated']
  },
  {
    id: 72, title: '12 Angry Men',
    poster: './img/12angrymen.webp',
    type: 'Movie', year: 1957, rating: 9.0, runtime: '1h 36min',
    genres: ['Drama', 'Crime'], contentRating: 'PG', quality: 'HD',
    languages: ['English', 'Hindi'],
    description: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before delivering a verdict.',
    director: 'Sidney Lumet', cast: ['Henry Fonda', 'Martin Balsam', 'John Fiedler'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=_13J_9B5jEk',
    sections: ['drama', 'top-rated']
  },
  {
    id: 73, title: 'Lagaan',
    poster: './img/lagaan.webp',
    type: 'Movie', year: 2001, rating: 8.1, runtime: '3h 44min',
    genres: ['Drama', 'Sport', 'Period'], contentRating: 'PG', quality: 'HD',
    languages: ['Hindi', 'English'],
    description: 'In Victorian India, a village challenges British officials to a cricket match with a high-stakes wager — if they win, they are exempted from taxes for three years.',
    director: 'Ashutosh Gowariker', cast: ['Aamir Khan', 'Gracy Singh', 'Paul Blackthorne', 'Rachel Shelley'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=LagaanTrailer',
    sections: ['drama']
  },
  {
    id: 74, title: 'Drishyam',
    poster: './img/dhrishyam.webp',
    type: 'Movie', year: 2013, rating: 8.3, runtime: '2h 45min',
    genres: ['Drama', 'Thriller', 'Mystery'], contentRating: 'UA', quality: 'HD',
    languages: ['Malayalam', 'Hindi', 'Tamil', 'Telugu'],
    description: 'A man goes to extreme lengths to save his family from the repercussions of an unintentional crime they commit. A gripping cat-and-mouse thriller.',
    director: 'Jeethu Joseph', cast: ['Mohanlal', 'Meena', 'Ansiba Hassan', 'Esther Anil'],
    badge: 'toprated', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=DrishyamTrailer',
    sections: ['drama', 'top-rated']
  },
  {
    id: 75, title: 'Baahubali: The Beginning',
    poster: './img/bahubali.webp',
    type: 'Movie', year: 2015, rating: 8.0, runtime: '2h 39min',
    genres: ['Drama', 'Action', 'Period'], contentRating: 'UA', quality: '4K',
    languages: ['Telugu', 'Tamil', 'Hindi', 'Malayalam'],
    description: 'A young man with superhuman strength and ability, raised by a tribal village, sets out on an epic journey that spans two worlds to uncover his true destiny.',
    director: 'S.S. Rajamouli', cast: ['Prabhas', 'Rana Daggubati', 'Anushka Shetty', 'Tamannaah'],
    badge: 'popular', progress: 0,
    trailer: 'https://www.youtube.com/watch?v=LMtQ-FkP_fg',
    sections: ['drama', 'action-thriller']
  }
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let currentHeroSlide = 0;
let heroTimer = null;
let watchlist = JSON.parse(localStorage.getItem('wn_watchlist') || '[]');
let searchTimer = null;

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initHero();
  showSkeletons();

  setTimeout(() => {
    populateAllSections();
    initCarousels();
    initScrollReveal();
    updateMyListSection();
  }, 1350);

  initSearch();
  initModal();
  initMobileMenu();
  initProfileDropdown();
  initRipple();
});

// ─── PARTICLES ───────────────────────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);
  const particles = Array.from({ length: 55 }, () => ({
    x: Math.random() * canvas.width, y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.3,
    dx: (Math.random() - 0.5) * 0.25, dy: -(Math.random() * 0.35 + 0.08),
    a: Math.random() * 0.45 + 0.08,
    color: Math.random() > 0.5 ? '229,9,20' : '0,180,216'
  }));
  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.a})`; ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
      if (p.x < -5) p.x = canvas.width + 5;
      if (p.x > canvas.width + 5) p.x = -5;
    });
    requestAnimationFrame(animate);
  })();
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 70), { passive: true });
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function initHero() {
  const slides  = document.querySelectorAll('.hero-slide');
  const dots    = document.querySelectorAll('.hero-dot');
  const progBar = document.querySelector('.hero-progress-bar');
  const DURATION = 7000;

  function animateProgress() {
    if (!progBar) return;
    progBar.style.transition = 'none'; progBar.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      progBar.style.transition = `width ${DURATION}ms linear`; progBar.style.width = '100%';
    }));
  }
  function goTo(idx) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentHeroSlide = idx;
    slides[idx].classList.add('active');
    dots[idx].classList.add('active');
    renderHeroContent(idx); animateProgress();
  }
  function next() { goTo((currentHeroSlide + 1) % heroSlides.length); }
  function prev() { goTo((currentHeroSlide - 1 + heroSlides.length) % heroSlides.length); }
  function resetTimer() { clearInterval(heroTimer); heroTimer = setInterval(next, DURATION); }

  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetTimer(); }));
  document.getElementById('hero-prev')?.addEventListener('click', () => { prev(); resetTimer(); });
  document.getElementById('hero-next')?.addEventListener('click', () => { next(); resetTimer(); });

  goTo(0); resetTimer();
}

function renderHeroContent(idx) {
  const s = heroSlides[idx];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('hero-badge', s.badge); set('hero-rating', s.rating); set('hero-cr', s.contentRating);
  set('hero-year', s.year); set('hero-runtime', s.runtime); set('hero-desc', s.description);
  const titleEl = document.getElementById('hero-title');
  if (titleEl) {
    titleEl.classList.remove('hero-title-anim'); void titleEl.offsetWidth;
    titleEl.textContent = s.title; titleEl.classList.add('hero-title-anim');
  }
  const genresEl = document.getElementById('hero-genres');
  if (genresEl) genresEl.innerHTML = s.genres.map(g => `<span class="hero-genre-pill">${g}</span>`).join('');
  const playBtn = document.getElementById('hero-play-btn');
  const infoBtn = document.getElementById('hero-info-btn');
  if (playBtn) playBtn.onclick = () => s.trailer ? window.open(s.trailer, '_blank') : showToast(`Playing — ${s.title}`);
  if (infoBtn) infoBtn.onclick = () => showToast(`More info for ${s.title}`);
}

// ─── SKELETONS ───────────────────────────────────────────────────────────────
function showSkeletons() {
  const ids = ['continue-watching','trending','popular','top-rated','new-releases',
                'action-thriller','comedy-romance','scifi','horror','drama'];
  ids.forEach(id => {
    const track = document.querySelector(`#${id} .carousel-track`);
    if (!track) return;
    track.innerHTML = Array.from({ length: 8 }, () => `
      <div class="skeleton-card">
        <div class="skeleton-poster skeleton"></div>
        <div class="skeleton-text skeleton"></div>
        <div class="skeleton-text-short skeleton"></div>
      </div>`).join('');
  });
}

// ─── SECTION DEFINITIONS ─────────────────────────────────────────────────────
const sectionDef = {
  'continue-watching': { filter: m => m.sections.includes('continue-watching'), progress: true  },
  'trending':          { filter: m => m.sections.includes('trending'),           progress: false },
  'popular':           { filter: m => m.sections.includes('popular'),            progress: false },
  'top-rated':         { filter: m => m.sections.includes('top-rated'),          progress: false },
  'new-releases':      { filter: m => m.sections.includes('new-releases'),       progress: false },
  'action-thriller':   { filter: m => m.sections.includes('action-thriller'),    progress: false },
  'comedy-romance':    { filter: m => m.sections.includes('comedy-romance'),     progress: false },
  'scifi':             { filter: m => m.sections.includes('scifi'),              progress: false },
  'horror':            { filter: m => m.sections.includes('horror'),             progress: false },
  'drama':             { filter: m => m.sections.includes('drama'),              progress: false }
};

// ─── POPULATE SECTIONS ───────────────────────────────────────────────────────
function populateAllSections() {
  Object.entries(sectionDef).forEach(([id, def]) => {
    const track = document.querySelector(`#${id} .carousel-track`);
    if (!track) return;
    let list = movies.filter(def.filter);
    // Pad short lists
    if (list.length < 5) {
      const extra = movies.filter(m => !list.includes(m));
      list = [...list, ...extra].slice(0, 8);
    }
    track.innerHTML = '';
    list.forEach(m => track.appendChild(createCard(m, def.progress)));
    track.style.opacity = '0';
    requestAnimationFrame(() => {
      track.style.transition = 'opacity 0.5s ease';
      track.style.opacity = '1';
    });
  });
}

// ─── CREATE CARD ─────────────────────────────────────────────────────────────
function createCard(movie, showProgress = false) {
  const card = document.createElement('div');
  card.className = 'movie-card'; card.dataset.id = movie.id;

  const qual      = movie.quality === '4K' ? 'uhd' : 'hd';
  const qualLabel = movie.quality === '4K' ? '4K UHD' : 'HD';
  const inList    = watchlist.includes(movie.id);
  const metaText  = movie.type === 'Movie'
    ? movie.runtime : `${movie.seasons} Season${movie.seasons > 1 ? 's' : ''}`;
  const heartFill = inList ? 'currentColor' : 'none';
  const heartPath = 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z';
  const progressBar = showProgress && movie.progress > 0
    ? `<div class="card-progress-bar"><div class="card-progress-fill" style="width:${movie.progress}%"></div></div>` : '';
  const typeBadge = movie.badge
    ? `<span class="card-type-badge ${movie.badge}">${badgeLabel(movie.badge)}</span>` : '';

  card.innerHTML = `
    <div class="card-poster-wrapper">
      <img class="card-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy"
           onerror="this.onerror=null;this.src='https://placehold.co/500x750/14141f/6B7280?text=${encodeURIComponent(movie.title.slice(0,15))}&font=poppins'">
      <span class="card-quality-badge ${qual}">${qualLabel}</span>
      <div class="card-imdb-badge">
        <span class="star">★</span>
        <span class="rating-num">${movie.rating}</span>
      </div>
      ${typeBadge}
      ${progressBar}
      <div class="card-hover-overlay">
        <button class="card-play-btn" aria-label="Play ${movie.title}">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="card-info-title">${movie.title}</div>
        <div class="card-info-meta">${movie.year} · ${metaText}</div>
        <div class="card-actions">
          <button class="card-action-btn watchlist-btn ${inList ? 'active' : ''}" data-id="${movie.id}" title="${inList ? 'Remove from My List' : 'Add to My List'}">
            <svg viewBox="0 0 24 24" fill="${heartFill}" stroke="currentColor" stroke-width="2"><path d="${heartPath}"/></svg>
          </button>
          <button class="card-action-btn like-btn" title="Like">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
            </svg>
          </button>
          <button class="card-action-btn info-btn" data-id="${movie.id}" title="More Info">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="card-info-bottom">
      <div class="card-title">${movie.title}</div>
      <div class="card-subtitle">${metaText} · ${movie.year}</div>
    </div>`;

  card.addEventListener('click', e => { if (!e.target.closest('button')) openModal(movie.id); });
  card.querySelector('.watchlist-btn').addEventListener('click', e => {
    e.stopPropagation(); toggleWatchlist(movie.id);
    const btn = e.currentTarget; const now = watchlist.includes(movie.id);
    btn.classList.toggle('active', now);
    btn.querySelector('svg').setAttribute('fill', now ? 'currentColor' : 'none');
    btn.title = now ? 'Remove from My List' : 'Add to My List';
  });
  card.querySelector('.like-btn').addEventListener('click', e => {
    e.stopPropagation(); const btn = e.currentTarget;
    btn.classList.toggle('active');
    showToast(btn.classList.contains('active') ? `Liked — ${movie.title}` : `Unliked — ${movie.title}`);
  });
  card.querySelector('.info-btn').addEventListener('click', e => { e.stopPropagation(); openModal(movie.id); });
  card.querySelector('.card-play-btn').addEventListener('click', e => {
    e.stopPropagation();
    if (movie.trailer) window.open(movie.trailer, '_blank');
    else showToast(`Playing — ${movie.title}`);
  });
  return card;
}

function badgeLabel(b) {
  return { trending: 'Trending', new: 'New', popular: 'Popular', toprated: 'Top Rated' }[b] || b;
}

// ─── WATCHLIST ────────────────────────────────────────────────────────────────
function toggleWatchlist(movieId) {
  const idx = watchlist.indexOf(movieId);
  const movie = movies.find(m => m.id === movieId);
  if (idx === -1) { watchlist.push(movieId); showToast(`Added to My List — ${movie?.title}`); }
  else { watchlist.splice(idx, 1); showToast(`Removed from My List — ${movie?.title}`); }
  localStorage.setItem('wn_watchlist', JSON.stringify(watchlist));
  updateMyListSection();
  document.querySelectorAll(`.watchlist-btn[data-id="${movieId}"]`).forEach(btn => {
    const inList = watchlist.includes(movieId);
    btn.classList.toggle('active', inList);
    btn.querySelector('svg').setAttribute('fill', inList ? 'currentColor' : 'none');
  });
}

function updateMyListSection() {
  const section = document.getElementById('my-list-section');
  if (!section) return;
  if (watchlist.length > 0) {
    section.classList.add('has-items');
    const track = section.querySelector('.carousel-track');
    if (track) { track.innerHTML = ''; watchlist.forEach(id => { const mv = movies.find(m => m.id === id); if (mv) track.appendChild(createCard(mv, false)); }); }
  } else { section.classList.remove('has-items'); }
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
function showToast(msg) {
  document.querySelectorAll('.wn-toast').forEach(t => t.remove());
  const t = document.createElement('div'); t.className = 'wn-toast'; t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 350); }, 2600);
}

// ─── CAROUSELS ───────────────────────────────────────────────────────────────
function initCarousels() {
  document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    if (!track) return;
    let dragging = false, startX, scrollLeft;
    track.addEventListener('mousedown', e => { dragging = true; track.classList.add('dragging'); startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; });
    document.addEventListener('mousemove', e => { if (!dragging) return; e.preventDefault(); track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX) * 1.5; });
    document.addEventListener('mouseup', () => { dragging = false; track.classList.remove('dragging'); });
    let tx, tsl;
    track.addEventListener('touchstart', e => { tx = e.touches[0].pageX; tsl = track.scrollLeft; }, { passive: true });
    track.addEventListener('touchmove',  e => { track.scrollLeft = tsl - (e.touches[0].pageX - tx) * 1.2; }, { passive: true });
    container.querySelector('.carousel-btn.prev')?.addEventListener('click', () => track.scrollBy({ left: -580, behavior: 'smooth' }));
    container.querySelector('.carousel-btn.next')?.addEventListener('click', () => track.scrollBy({ left: 580, behavior: 'smooth' }));
  });
}

// ─── SEARCH ──────────────────────────────────────────────────────────────────
function initSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-dropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      if (!q) { dropdown.classList.remove('active'); return; }
      const results = movies.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.genres.some(g => g.toLowerCase().includes(q)) ||
        m.type.toLowerCase().includes(q) ||
        m.cast.some(c => c.toLowerCase().includes(q))
      ).slice(0, 8);
      dropdown.innerHTML = results.length
        ? results.map(m => {
            const meta = m.type === 'Movie' ? m.runtime : `${m.seasons} Seasons`;
            return `<div class="search-result-item" onclick="openModal(${m.id});clearSearch()">
              <img class="search-result-poster" src="${m.poster}" alt="${m.title}" loading="lazy"
                   onerror="this.src='https://placehold.co/44x64/14141f/6B7280?text=?'">
              <div class="search-result-info">
                <div class="result-title">${highlight(m.title, q)}</div>
                <div class="result-meta">${m.type} · ${m.year} · ★ ${m.rating} · ${meta}</div>
              </div>
            </div>`;
          }).join('')
        : '<div class="search-no-results">No results found</div>';
      dropdown.classList.add('active');
    }, 180);
  });
  input.addEventListener('focus', () => { if (input.value.trim()) dropdown.classList.add('active'); });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrapper')) dropdown.classList.remove('active'); });
}

function highlight(text, q) {
  return text.replace(new RegExp(`(${q})`, 'gi'), '<mark style="background:var(--accent-red);color:#fff;border-radius:2px;padding:0 2px">$1</mark>');
}
function clearSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-dropdown');
  if (input) input.value = ''; if (dropdown) dropdown.classList.remove('active');
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
function initModal() {
  document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.querySelector('.modal-close')?.addEventListener('click', closeModal);
}

function openModal(movieId) {
  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;
  const modal = document.getElementById('movie-modal');
  if (!modal) return;
  const $ = id => document.getElementById(id);
  const metaText = movie.type === 'Movie' ? movie.runtime : `${movie.seasons} Season${movie.seasons > 1 ? 's' : ''}`;

  const bgImg = $('modal-bg');
  if (bgImg) { bgImg.src = movie.poster; bgImg.alt = movie.title; bgImg.onerror = () => bgImg.style.background = 'linear-gradient(135deg,#1a1a2e,#16213e)'; }
  const poster = $('modal-poster');
  if (poster) { poster.src = movie.poster; poster.alt = movie.title; poster.onerror = () => poster.style.background = 'linear-gradient(135deg,#1a1a2e,#16213e)'; }

  const setText = (id, val) => { const el = $(id); if (el) el.textContent = val; };
  setText('modal-title', movie.title); setText('modal-rating', movie.rating);
  setText('modal-year', movie.year); setText('modal-runtime', metaText);
  setText('modal-cr', movie.contentRating); setText('modal-desc', movie.description);
  setText('modal-cast', movie.cast.slice(0, 4).join(', ')); setText('modal-director', movie.director);
  setText('modal-quality', movie.quality); setText('modal-lang', movie.languages.join(', '));
  const qBadge = $('modal-quality-badge'); if (qBadge) qBadge.textContent = movie.quality;

  const genresEl = $('modal-genres');
  if (genresEl) genresEl.innerHTML = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');

  const wlBtn = $('modal-wl-btn');
  if (wlBtn) {
    const inList = watchlist.includes(movie.id);
    wlBtn.className = `modal-btn-secondary${inList ? ' in-list' : ''}`;
    wlBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="${inList ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
      ${inList ? 'In My List' : 'My List'}`;
    wlBtn.onclick = () => { toggleWatchlist(movie.id); openModal(movieId); };
  }

  const playBtn = $('modal-play-btn');
  if (playBtn) playBtn.onclick = () => {
    if (movie.trailer) window.open(movie.trailer, '_blank');
    else showToast(`Playing — ${movie.title}`);
  };
  const trailerBtn = $('modal-trailer-btn');
  if (trailerBtn) trailerBtn.onclick = () => {
    if (movie.trailer) window.open(movie.trailer, '_blank');
    else showToast(`Trailer coming soon for ${movie.title}`);
  };

  const relTrack = $('modal-related');
  if (relTrack) {
    const related = movies.filter(m => m.id !== movie.id && m.genres.some(g => movie.genres.includes(g))).slice(0, 8);
    relTrack.innerHTML = related.map(m => `
      <div class="related-card" onclick="openModal(${m.id})">
        <img src="${m.poster}" alt="${m.title}" loading="lazy"
             onerror="this.src='https://placehold.co/120x180/14141f/6B7280?text=?'">
        <div class="related-card-title">${m.title}</div>
      </div>`).join('');
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('movie-modal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(() => { document.body.style.overflow = ''; }, 380);
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.content-section');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.04 });
  els.forEach(el => io.observe(el));
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close');
  const open  = () => { drawer?.classList.add('open'); overlay?.classList.add('active'); document.body.style.overflow = 'hidden'; };
  const close = () => { drawer?.classList.remove('open'); overlay?.classList.remove('active'); document.body.style.overflow = ''; };
  btn?.addEventListener('click', open);
  overlay?.addEventListener('click', close);
  closeBtn?.addEventListener('click', close);
  drawer?.querySelectorAll('.drawer-link').forEach(link => link.addEventListener('click', close));
}

// ─── PROFILE DROPDOWN ────────────────────────────────────────────────────────
function initProfileDropdown() {
  const avatar = document.getElementById('profile-avatar');
  const dropdown = document.getElementById('profile-dropdown');
  avatar?.addEventListener('click', e => { e.stopPropagation(); dropdown?.classList.toggle('active'); });
  document.addEventListener('click', e => { if (!e.target.closest('.profile-wrapper')) dropdown?.classList.remove('active'); });
}

// ─── RIPPLE ──────────────────────────────────────────────────────────────────
function initRipple() {
  document.querySelectorAll('.btn-play, .btn-info, .modal-btn-primary').forEach(btn => {
    btn.classList.add('ripple-host');
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const wave = document.createElement('span'); wave.className = 'ripple-wave';
      wave.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
      btn.appendChild(wave); setTimeout(() => wave.remove(), 680);
    });
  });
}

// ─── MOBILE BOTTOM NAV ───────────────────────────────────────────────────────
document.querySelectorAll('.bottom-nav-item').forEach((item, i) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.bottom-nav-item').forEach(x => x.classList.remove('active'));
    item.classList.add('active');
    const targets = ['#hero-section', '#main-content', '#my-list-section', '#footer-section'];
    document.querySelector(targets[i])?.scrollIntoView({ behavior: 'smooth' });
  });
});

fetch("/api/movies")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });