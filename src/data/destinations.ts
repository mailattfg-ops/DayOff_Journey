import { Destination } from '../components/DestinationDetailModal';

export const allDestinations: Destination[] = [
    // --- South India (Tamil Nadu South & Kerala South) ---
    {
        id: 'kanyakumari-devi',
        title: 'Kanyakumari Bhagavathy Temple',
        location: 'Tamil Nadu',
        description: 'A 3000-year-old temple dedicated to Goddess Kanyakumari, standing at the confluence of three oceans.',
        image: '/images/kanayakumari_bhagavathy_11zon.webp',
        tags: ['Temple', 'Tamil Nadu', 'Shakti'],
        highlights: ['Devi Kanyakumari', 'Vivekananda Rock', 'Sunrise View'],
        bestTime: 'October to March'
    },
    {
        id: 'thiruvithamcode',
        title: 'St. Mary\'s Church (Thiruvithamcode)',
        location: 'Tamil Nadu',
        description: 'Believed to be established by St. Thomas the Apostle in 63 AD, possibly the oldest church structure in India (Arapally).',
        image: '/images/mary_church_11zon.webp',
        tags: ['Church', 'Heritage', 'Ancient'],
        highlights: ['Arapally', 'Stone Architecture', 'Pilgrimage'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'dhanushkodi',
        title: 'Dhanushkodi',
        location: 'Tamil Nadu',
        description: 'An abandoned town at the south-eastern tip of Pamban Island, known for its haunting ruins and pristine beach.',
        image: '/images/Dhanushkodi.webp',
        tags: ['Heritage', 'Beach', 'Ruins'],
        highlights: ['Ghost Town', 'Dhanushkodi Beach', 'Adam\'s Bridge'],
        bestTime: 'October to March'
    },
    {
        id: 'rameswaram',
        title: 'Ramanathaswamy Temple',
        location: 'Rameswaram (Tamil Nadu)',
        description: 'A major Hindu pilgrimage site, one of the Char Dham shrines, known for its long corridors.',
        fullDescription: 'Rameswaram, located on Pamban Island, is a town of immense spiritual significance. It is home to the Ramanathaswamy Temple, known for its elaborate corridors and sacred water tanks.',
        image: '/images/Ramanathaswamy-Temple.webp',
        tags: ['Temple', 'Tamil Nadu', 'Pilgrimage'],
        highlights: ['Ramanathaswamy Temple', 'Dhanushkodi Beach', 'Pamban Bridge', 'Agni Theertham'],
        bestTime: 'October to April'
    },
    {
        id: 'pamban',
        title: 'Pamban Bridge',
        location: 'Tamil Nadu',
        description: 'India\'s first sea bridge connecting Rameswaram on Pamban Island to the mainland.',
        image: '/images/Pamban Bridge_11zon.webp',
        tags: ['Heritage', 'Bridge', 'Scenic'],
        highlights: ['Railway Bridge', 'Sea View', 'Engineering Marvel'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'ervadi',
        title: 'Ervadi Dargah',
        location: 'Tamil Nadu',
        description: 'The shrine of Qutbus Sultan Syed Ibrahim Shaheed Badusha, famous for its spiritual healing powers.',
        image: '/images/ervadi_dargah_11zon.webp',
        tags: ['Dargah', 'Tamil Nadu', 'Healing'],
        highlights: ['Dargah Shareef', 'Healing Powers', 'Ramanathapuram'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'beemapally',
        title: 'Beemapalli Dargah Shareef',
        location: 'Kerala',
        description: 'Famous for the annual Uroos festival, a significant pilgrim centre in Trivandrum.',
        image: '/images/beemapallimosque.webp',
        tags: ['Dargah', 'Kerala', 'Pilgrimage'],
        highlights: ['Beemapally Mosque', 'Uroos Festival', 'Beach'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'alleppey',
        title: 'Alleppey (Alappuzha)',
        location: 'Kerala',
        description: 'Known as the “Venice of the East”, popular for serene backwaters and houseboat cruises.',
        image: '/images/alleppey.webp',
        tags: ['Backwaters', 'Houseboat', 'Relaxation'],
        highlights: ['Backwater Cruise', 'Alappuzha Beach', 'Marari Beach'],
        bestTime: 'November to February',
        tagline: 'Venice of the East'
    },
    {
        id: 'edathua',
        title: 'Edathua Church',
        location: 'Kerala',
        description: 'St. George Forane Church on the banks of the Pamba River, famous for its grand feast.',
        image: '/images/Edathua_11zon.webp',
        tags: ['Church', 'Kerala', 'Backwaters'],
        highlights: ['St. George Feast', 'Architecture', 'Pamba River'],
        bestTime: 'May (Feast)'
    },
    {
        id: 'sabarimala',
        title: 'Sabarimala Temple',
        location: 'Kerala',
        description: 'A renowned Hindu pilgrimage centre located in the Periyar Tiger Reserve, dedicated to Lord Ayyappa.',
        image: '/images/sabarimala_11zon.webp',
        tags: ['Temple', 'Kerala', 'Ayyappa'],
        highlights: ['Ayyappa Temple', 'Makara Vilakku', 'Pathinettam Padi'],
        bestTime: 'November to January'
    },
    {
        id: 'bharananganam',
        title: 'St. Mary\'s Forane Church',
        location: 'Bharananganam',
        description: 'Famous as the burial place of Saint Alphonsa, the first woman of Indian origin to be canonized as a saint.',
        image: '/images/mary_forene.webp',
        tags: ['Church', 'Kerala', 'Saint Alphonsa'],
        highlights: ['St. Alphonsa Tomb', 'Pilgrimage', 'Festival'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'thangal-para',
        title: 'Thangal Para',
        location: 'Kerala',
        description: 'A sacred scenic spot on a hill near Vagamon, resting place of Sufi saint Hazrat Sheikh Fariduddin.',
        image: '/images/thangal_para.webp',
        tags: ['Dargah', 'Kerala', 'Nature'],
        highlights: ['Spherical Rock', 'Viewpoint', 'Tomb'],
        bestTime: 'September to March'
    },

    // --- Central Kerala to North Kerala ---
    {
        id: 'kochi',
        title: 'Kochi (Cochin)',
        location: 'Kerala',
        description: 'Known as the "Queen of the Arabian Sea", famous for its Chinese fishing nets, colonial history, and vibrant culture.',
        image: '/images/kochi.webp',
        tags: ['Heritage', 'Coastal', 'Culture'],
        highlights: ['Fort Kochi', 'Chinese Fishing Nets', 'Mattancherry Palace', 'Jew Town'],
        bestTime: 'October to March',
        tagline: 'Queen of Arabian Sea'
    },
    {
        id: 'malayattoor',
        title: 'Malayattoor Church',
        location: 'Kerala',
        description: 'A prominent Christian pilgrimage site located on top of the Kurisumudy hill, dedicated to St. Thomas.',
        image: '/images/malayattoor.webp',
        tags: ['Church', 'Kerala', 'Hill'],
        highlights: ['St. Thomas Shrine', 'Kurisumudy', 'Periyar River'],
        bestTime: 'March to April'
    },
    {
        id: 'munnar',
        title: 'Munnar',
        location: 'Kerala',
        description: 'A popular hill station known for its lush tea plantations, misty mountains, and beautiful waterfalls.',
        fullDescription: 'Munnar is a breathtaking hill station nestled in the Idukki district of Kerala. Known for its rolling hills covered in emerald-green tea plantations, Munnar is a haven for nature lovers. The town is situated at the confluence of three mountain streams - Mudrapuzha, Nallathanni, and Kundala.',
        image: '/images/munnar.webp',
        tags: ['Hill Station', 'Tea', 'Nature'],
        highlights: ['Eravikulam National Park', 'Mattupetty Dam', 'Tea Museum', 'Anamudi Peak'],
        bestTime: 'September to March',
        gallery: [
            '/images/Tea Gardens.webp',
            '/images/Eravikulam National Park.webp',
            '/images/Mattupetty Dam.webp',
            '/images/Waterfalls.webp'
        ],
        tagline: 'Tea Garden Paradise'
    },
    {
        id: 'koratty',
        title: 'Koratty Muthy',
        location: 'Kerala',
        description: 'St. Mary\'s Forane Church, Koratty, popularly known as the Lourdes of Kerala.',
        image: '/images/koratty-church_11zon.webp',
        tags: ['Church', 'Kerala', 'Pilgrimage'],
        highlights: ['Koratty Muthy Feast', 'Poovan Kula Offering', 'Architecture'],
        bestTime: 'October (Feast)'
    },
    {
        id: 'cheraman',
        title: 'Cheraman Juma Mosque',
        location: 'Kerala',
        description: 'Built in 629 AD, it is considered the first mosque in India and a symbol of heritage.',
        image: '/images/cheraman-juma-masjid.webp',
        tags: ['Mosque', 'Kerala', 'Heritage'],
        highlights: ['Ancient Lamps', 'Museum', 'History'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'guruvayur',
        title: 'Guruvayur Temple',
        location: 'Kerala',
        description: 'A dedicated temple to Lord Guruvayurappan (Krishna), distinct for its strict traditions and elephants.',
        image: '/images/Guruvayur_temple,_Kerala_11zon.webp',
        tags: ['Temple', 'Kerala', 'Krishna'],
        highlights: ['Guruvayur Temple', 'Punnathur Kotta (Elephant Camp)', 'Mammiyoor Temple'],
        bestTime: 'Throughout the year'
    },

    // --- Tamil Nadu (Central/North) ---
    {
        id: 'madurai',
        title: 'Meenakshi Amman Temple',
        location: 'Madurai (Tamil Nadu)',
        description: 'Home to the iconic Meenakshi Amman Temple, a masterpiece of Dravidian architecture.',
        image: '/images/madurai.webp',
        tags: ['Temple', 'Tamil Nadu', 'Architecture'],
        highlights: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Mahal', 'Gandhi Memorial Museum'],
        bestTime: 'October to March'
    },
    {
        id: 'kodaikanal',
        title: 'Kodaikanal',
        location: 'Tamil Nadu',
        description: 'A charming hill station with scenic lakes, dense forests, and refreshing waterfalls.',
        image: '/images/kodaikanal.webp',
        tags: ['Hills', 'Lake', 'Forest'],
        highlights: ['Kodaikanal Lake', 'Coaker\'s Walk', 'Pine Forest', 'Pillar Rocks'],
        bestTime: 'September to May',
        gallery: ['/images/Kodaikanal Lake.webp', '/images/Pine Forest.webp', '/images/Coaker’s Walk.webp'],
        tagline: 'Princess of Hill Stations'
    },
    {
        id: 'muthupet',
        title: 'Muthupet Dargah',
        location: 'Tamil Nadu',
        description: 'A 700-year-old dargah situated amidst a mangrove forest, shrine of Sheikh Dawood.',
        image: '/images/muthupeta_dargah_11zon.webp',
        tags: ['Dargah', 'Tamil Nadu', 'Mangrove'],
        highlights: ['Muthupet Lagoon', 'Dargah', 'Boating'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'nagore',
        title: 'Nagore Dargah',
        location: 'Tamil Nadu',
        description: 'A prime pilgrimage centre for Muslims, dedicated to Sufi Saint Shahul Hamid.',
        image: '/images/nagore-dargah_11zon.webp',
        tags: ['Dargah', 'Tamil Nadu', 'Sufi'],
        highlights: ['Minarets', 'Kanduri Festival', 'Beach'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'velankanni',
        title: 'Velankanni Church',
        location: 'Tamil Nadu',
        description: 'Known as the “Lourdes of the East”, home to the Basilica of Our Lady of Good Health.',
        image: '/images/VELANKANNI.webp',
        tags: ['Church', 'Tamil Nadu', 'Coastal'],
        highlights: ['Basilica of Our Lady of Good Health', 'Velankanni Beach', 'Museum'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'ooty',
        title: 'Ooty',
        location: 'Tamil Nadu',
        description: 'Immerse yourself in the colonial charm and rolling tea gardens of the Queen of Hills.',
        fullDescription: 'Ooty, also known as Udhagamandalam, is a resort town in the Western Ghats mountains. It was founded as the summer capital of the Madras Presidency. The town is famous for its tea gardens, colonial architecture, and the Nilgiri Mountain Railway.',
        image: '/images/Ooty_Card.webp',
        tags: ['Nature', 'Tea', 'Boating'],
        highlights: ['Ooty Lake', 'Botanical Gardens', 'Doddabetta Peak', 'Rose Garden'],
        bestTime: 'October to June',
        gallery: [
            '/images/Ooty-lake.webp',
            '/images/Ooty-Botanical_Gardens.webp',
            '/images/Ooty-Doddabeta.webp',
            '/images/Ooty-Tea.webp'
        ],
        tagline: 'Queen of Hill Stations'
    },
    {
        id: 'st-thomas-mount',
        title: 'St. Thomas Mount',
        location: 'Chennai',
        description: 'A small hillock in Chennai where St. Thomas, the Apostle of Jesus, is believed to have been martyred.',
        image: '/images/thomas_mount.webp',
        tags: ['Church', 'Chennai', 'History'],
        highlights: ['National Shrine', 'City View', 'Relics'],
        bestTime: 'October to March'
    },

    // --- North Kerala / Karnataka ---
    {
        id: 'malik-dinar',
        title: 'Malik Deenar Mosque',
        location: 'Kerala',
        description: 'One of the oldest mosques in India, located in Kasaragod, believed to be founded by Malik Deenar.',
        image: '/images/malik-bin-dinar_11zon.webp',
        tags: ['Mosque', 'Kerala', 'History'],
        highlights: ['Ancient Architecture', 'Kasaragod', 'History'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'ullal',
        title: 'Ullal Dargah',
        location: 'Karnataka',
        description: 'Sayyid Madani Dargah in Ullal, a famous pilgrimage centre near Mangalore.',
        image: '/images/Ullalo_Dargah_11zon.webp',
        tags: ['Dargah', 'Karnataka', 'Pilgrimage'],
        highlights: ['Ullal Beach', 'Dargah', 'Uroos'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'coorg',
        title: 'Coorg (Kodagu)',
        location: 'Karnataka',
        description: 'Known as the “Scotland of India”, famous for its coffee plantations, scenic landscapes, and pleasant climate.',
        image: '/images/coorg.webp',
        tags: ['Coffee', 'Hills', 'Nature'],
        highlights: ['Abbey Falls', 'Raja\'s Seat', 'Dubare Elephant Camp', 'Coffee Plantations'],
        bestTime: 'October to March'
    },
    {
        id: 'mysuru',
        title: 'Mysuru (Mysore)',
        location: 'Karnataka',
        description: 'Famous for the grand Mysore Palace, showcasing a blend of Indo-Saracenic architecture.',
        image: '/images/mysore.webp',
        tags: ['Palace', 'Royalty', 'History'],
        highlights: ['Mysore Palace', 'Chamundi Hill', 'Brindavan Gardens'],
        bestTime: 'Throughout the year',
        tagline: 'City of Palaces'
    },
    {
        id: 'hampi',
        title: 'Hampi',
        location: 'Karnataka',
        description: 'A UNESCO World Heritage Site featuring ruins of the ancient Vijayanagara Empire.',
        image: '/images/hampi.webp',
        tags: ['Heritage', 'Ruins', 'Architecture'],
        highlights: ['Virupaksha Temple', 'Stone Chariot', 'Vittala Temple'],
        bestTime: 'October to March'
    },
    {
        id: 'kodungallur',
        title: 'Kodungallur',
        location: 'Kerala',
        description: 'A historic port city known for its ancient temples, mosques, and churches.',
        image: '/images/Kodungallur_11zon.webp',
        tags: ['History', 'Pilgrimage', 'Heritage'],
        highlights: ['Cheraman Juma Masjid', 'Kodungallur Bhagavathy Temple', 'Muziris Heritage'],
        bestTime: 'Throughout the year',
        gallery: [
            '/images/cheraman-juma-masjid.webp',
            '/images/Kodungallur_11zon.webp'
        ],
        tagline: 'Historic Port City'
    },

    // --- Andhra, Goa, Maharashtra, Telangana ---
    {
        id: 'tirupati',
        title: 'Sri Venkateswara Temple',
        location: 'Tirupati',
        description: 'A landmark Vaishnavite temple dedicated to Lord Venkateswara, one of the richest and most visited in the world.',
        image: '/images/venkateswara_temple.webp',
        tags: ['Temple', 'Andhra Pradesh', 'Vishnu'],
        highlights: ['Tirumala Hills', 'Laddu Prasadam', 'Akasaganga Teertham'],
        bestTime: 'Throughout the year'
    },
    {
        id: 'bom-jesus',
        title: 'Basilica of Bom Jesus',
        location: 'Goa',
        description: 'A UNESCO World Heritage Site holding the mortal remains of St. Francis Xavier.',
        image: '/images/basilica-of-bom-jesus.webp',
        tags: ['Church', 'Goa', 'Heritage'],
        highlights: ['St. Francis Xavier Tomb', 'Baroque Architecture', 'Old Goa'],
        bestTime: 'November to February'
    },
    {
        id: 'charminar',
        title: 'Charminar',
        location: 'Telangana',
        description: 'A monument and mosque located in Hyderabad, iconic for its four minarets and rich history.',
        image: '/images/charminar.webp',
        tags: ['Mosque', 'Hyderabad', 'Monument'],
        highlights: ['Charminar', 'Laad Bazaar', 'Mecca Masjid'],
        bestTime: 'October to March'
    },
    {
        id: 'haji-ali',
        title: 'Haji Ali Dargah',
        location: 'Mumbai',
        description: 'A mosque and dargah located on an islet off the coast of Worli in southern Mumbai.',
        image: '/images/haji_ali_dargah.webp',
        tags: ['Dargah', 'Mumbai', 'Coastal'],
        highlights: ['Indo-Islamic Architecture', 'Sea Walkway', 'Qawwali'],
        bestTime: 'October to March'
    },
    {
        id: 'shirdi',
        title: 'Shirdi Sai Baba Temple',
        location: 'Maharashtra',
        description: 'The final resting place of the revered 19th-century saint, Shirdi Sai Baba.',
        image: '/images/Shirdi-Sai-Baba-Temple.webp',
        tags: ['Temple', 'Maharashtra', 'Sai Baba'],
        highlights: ['Samadhi Mandir', 'Dwarkamai', 'Chavadi'],
        bestTime: 'Throughout the year'
    },

    // --- North India ---
    {
        id: 'kashi',
        title: 'Kashi Vishwanath Temple',
        location: 'Varanasi',
        description: 'One of the most famous Hindu temples dedicated to Lord Shiva, located on the banks of the Ganges.',
        image: '/images/kashi.webp',
        tags: ['Temple', 'Uttar Pradesh', 'Shiva'],
        highlights: ['Ganga Aarti', 'Kashi Vishwanath Corridor', 'Ghats'],
        bestTime: 'October to March'
    },
    {
        id: 'jama-masjid',
        title: 'Jama Masjid',
        location: 'Delhi',
        description: 'One of the largest mosques in India, an architectural masterpiece built by Mughal Emperor Shah Jahan.',
        image: '/images/jama_masjid.webp',
        tags: ['Mosque', 'Delhi', 'Mughal'],
        highlights: ['Red Sandstone Courtyard', 'Minarets', 'Old Delhi View'],
        bestTime: 'October to March'
    },
    {
        id: 'ajmer',
        title: 'Ajmer Sharif Dargah',
        location: 'Rajasthan',
        description: 'The shrine of Sufi saint Moinuddin Chishti, a place of immense devotion for people of all faiths.',
        image: '/images/ajmer_11zon (1).webp',
        tags: ['Dargah', 'Rajasthan', 'Sufi'],
        highlights: ['Moinuddin Chishti Tomb', 'Qawwali', 'Architecture'],
        bestTime: 'October to March'
    },
    {
        id: 'badrinath',
        title: 'Badrinath Temple',
        location: 'Uttarakhand',
        description: 'A holy temple dedicated to Lord Vishnu, nestled between the Nar and Narayana mountains.',
        image: '/images/badrinath-temple.webp',
        tags: ['Temple', 'Uttarakhand', 'Vishnu'],
        highlights: ['Badrinath Temple', 'Tapt Kund', 'Mana Village'],
        bestTime: 'May to June, September to October'
    },
    {
        id: 'kedarnath',
        title: 'Kedarnath Temple',
        location: 'Uttarakhand',
        description: 'A revered Shiva temple located in the Himalayas, part of the Chota Char Dham yatra.',
        image: '/images/Kedarnath.webp',
        tags: ['Temple', 'Himalayas', 'Shiva'],
        highlights: ['Kedarnath Trek', 'Bhairavnath Temple', 'Gandhi Sarovar'],
        bestTime: 'May to June, September to October'
    },
    {
        id: 'vaishno-devi',
        title: 'Vaishno Devi Temple',
        location: 'Jammu',
        description: 'A holy cave shrine dedicated to Mata Vaishno Devi, located in the Trikuta Mountains.',
        image: '/images/vaishno.webp',
        tags: ['Temple', 'Jammu', 'Shakti'],
        highlights: ['Holy Cave', 'Bhairon Baba Temple', 'Ardhkuwari Cave'],
        bestTime: 'March to October'
    },

    // --- East & North East India ---
    {
        id: 'sikkim',
        title: 'Sikkim',
        location: 'Sikkim',
        description: 'A Himalayan wonderland known for its dramatic landscapes, monasteries, and stunning views of Kanchenjunga.',
        image: '/images/sikkim.webp',
        tags: ['Hills', 'Monastery', 'Nature'],
        highlights: ['Gangtok', 'Nathula Pass', 'Tsomgo Lake', 'Rumtek Monastery'],
        bestTime: 'March to June, October to December'
    },
    {
        id: 'meghalaya',
        title: 'Meghalaya',
        location: 'Meghalaya',
        description: 'The "Abode of Clouds", famous for its living root bridges, waterfalls, and rainiest places on Earth.',
        image: '/images/Meghalaya.webp',
        tags: ['Nature', 'Waterfalls', 'Adventure'],
        highlights: ['Cherrapunji', 'Living Root Bridges', 'Mawlynnong', 'Dawki River'],
        bestTime: 'October to April'
    },
    {
        id: 'assam',
        title: 'Assam',
        location: 'Assam',
        description: 'The gateway to Northeast India, known for its sprawling tea gardens, wildlife, and the mighty Brahmaputra river.',
        image: '/images/assam_11zon.webp',
        tags: ['Wildlife', 'Tea', 'River'],
        highlights: ['Kaziranga National Park', 'Kamakhya Temple', 'Majuli Island'],
        bestTime: 'November to April'
    }
];
