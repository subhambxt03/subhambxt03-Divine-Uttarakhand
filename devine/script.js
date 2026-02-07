// Temple Data with Long Descriptions
const templeCategories = {
    "Char Dham": [
        { id: 1, name: "Badrinath Temple", district: "Chamoli", description: "One of the four Char Dham pilgrimage sites, dedicated to Lord Vishnu.", longDescription: "Badrinath Temple is one of the four Char Dham pilgrimage sites and one of the 108 Divya Desams dedicated to Lord Vishnu. Located in the town of Badrinath in Uttarakhand, it is situated at an altitude of 3,133 meters above sea level, on the banks of the Alaknanda River.", location: "Badrinath, Chamoli", lat: 30.7448, lng: 79.4932 },
        { id: 2, name: "Kedarnath Temple", district: "Rudraprayag", description: "Sacred Jyotirlinga of Lord Shiva in the Himalayas.", longDescription: "Kedarnath Temple is a Hindu temple dedicated to Lord Shiva, located on the Garhwal Himalayan range near the Mandakini river. It is one of the twelve Jyotirlingas, the holiest Hindu shrines of Shiva.", location: "Kedarnath, Rudraprayag", lat: 30.7352, lng: 79.0669 },
        { id: 3, name: "Gangotri Temple", district: "Uttarkashi", description: "Origin temple of the holy River Ganga.", longDescription: "Gangotri Temple is a Hindu temple dedicated to Goddess Ganga, located in the Uttarkashi district. It is one of the four sites in the Char Dham pilgrimage circuit.", location: "Gangotri, Uttarkashi", lat: 30.9945, lng: 78.9397 },
        { id: 4, name: "Yamunotri Temple", district: "Uttarkashi", description: "Source temple of the sacred River Yamuna.", longDescription: "Yamunotri Temple is dedicated to Goddess Yamuna and is the source of the Yamuna River, the second most sacred river in India after the Ganges.", location: "Yamunotri, Uttarkashi", lat: 31.0150, lng: 78.4630 }
    ],
    
    "Panch Kedar": [
        { id: 5, name: "Kedarnath Temple", district: "Rudraprayag", description: "First among Panch Kedar temples.", longDescription: "Kedarnath is the first and most important among the Panch Kedar temples dedicated to Lord Shiva. According to legend, Lord Shiva appeared here as a bull.", location: "Rudraprayag", lat: 30.7352, lng: 79.0669 },
        { id: 6, name: "Tungnath Temple", district: "Rudraprayag", description: "Highest Shiva temple in the world.", longDescription: "Tungnath Temple is the highest Shiva temple in the world, located at an altitude of 3,680 meters in the Rudraprayag district.", location: "Rudraprayag", lat: 30.4900, lng: 79.2160 },
        { id: 7, name: "Rudranath Temple", district: "Chamoli", description: "Natural rock temple of Lord Shiva.", longDescription: "Rudranath Temple is situated in the Chamoli district and is believed to be the place where the face of Lord Shiva appeared.", location: "Chamoli", lat: 30.5557, lng: 79.3199 },
        { id: 8, name: "Madhyamaheshwar Temple", district: "Rudraprayag", description: "Middle Kedar with navel-shaped lingam.", longDescription: "Madhyamaheshwar Temple is located in Rudraprayag where the navel of Lord Shiva is worshipped as a natural stone lingam.", location: "Rudraprayag", lat: 30.6187, lng: 79.1915 },
        { id: 9, name: "Kalpeshwar Temple", district: "Chamoli", description: "Last among Panch Kedar temples.", longDescription: "Kalpeshwar Temple is the fifth temple where the matted hair of Lord Shiva appeared. It is situated inside a cave.", location: "Chamoli", lat: 30.4650, lng: 79.2730 }
    ],
    
    "Panch Badri": [
        { id: 10, name: "Badrinath Temple", district: "Chamoli", description: "Main Badri among Panch Badri.", longDescription: "Badrinath is the main temple among the Panch Badri group of temples dedicated to Lord Vishnu.", location: "Chamoli", lat: 30.7448, lng: 79.4932 },
        { id: 11, name: "Adi Badri", district: "Chamoli", description: "Ancient Vishnu temple complex.", longDescription: "Adi Badri is part of a complex of 16 small temples built during the Gupta period between 5th to 8th century AD.", location: "Chamoli", lat: 29.7553, lng: 80.1024 },
        { id: 12, name: "Bhavishya Badri", district: "Chamoli", description: "Future Badri pilgrimage site.", longDescription: "Bhavishya Badri is believed to be the future Badrinath when the current temple becomes inaccessible.", location: "Chamoli", lat: 30.6000, lng: 79.5000 },
        { id: 13, name: "Yogadhyan Badri", district: "Chamoli", description: "Meditation site of Pandavas.", longDescription: "Yogadhyan Badri is believed to be the place where King Pandu performed meditation and attained salvation.", location: "Chamoli", lat: 30.7333, lng: 79.6000 },
        { id: 14, name: "Vridha Badri", district: "Chamoli", description: "Old Badri worshipped by Narada.", longDescription: "Vridha Badri is believed to be the original Badrinath before the current temple was established.", location: "Chamoli", lat: 30.5500, lng: 79.5500 }
    ],
    
    "Panch Prayag": [
        { id: 101, name: "Vishnuprayag", district: "Chamoli", description: "Confluence of Alaknanda and Dhauliganga.", longDescription: "Vishnuprayag is the first of the five confluences of the Alaknanda River, where it meets the Dhauliganga River.", location: "Chamoli", lat: 30.5700, lng: 79.5700 },
        { id: 102, name: "Nandaprayag", district: "Chamoli", description: "Confluence of Alaknanda and Nandakini.", longDescription: "Nandaprayag is the second confluence where the Alaknanda River meets the Nandakini River.", location: "Chamoli", lat: 30.3300, lng: 79.3200 },
        { id: 103, name: "Karnaprayag", district: "Chamoli", description: "Confluence of Alaknanda and Pindar.", longDescription: "Karnaprayag is the third confluence where the Alaknanda River meets the Pindar River.", location: "Chamoli", lat: 30.2670, lng: 79.2500 },
        { id: 104, name: "Rudraprayag", district: "Rudraprayag", description: "Confluence of Alaknanda and Mandakini.", longDescription: "Rudraprayag is the fourth confluence where the Alaknanda River meets the Mandakini River.", location: "Rudraprayag", lat: 30.2841, lng: 78.9831 },
        { id: 105, name: "Devprayag", district: "Tehri Garhwal", description: "Confluence of Alaknanda and Bhagirathi.", longDescription: "Devprayag is the fifth and most sacred confluence where the Alaknanda and Bhagirathi rivers merge to form the Ganges.", location: "Tehri Garhwal", lat: 30.1460, lng: 78.5980 }
    ],
    
    "Panch Kailash": [
        { id: 106, name: "Adi Kailash", district: "Pithoragarh", description: "Ancient Kailash replica.", longDescription: "Adi Kailash, also known as Chhota Kailash, is considered a replica of Mount Kailash in Tibet.", location: "Pithoragarh", lat: 30.2000, lng: 80.8000 },
        { id: 107, name: "Patal Kailash", district: "Pithoragarh", description: "Associated with Lord Shiva worship.", longDescription: "Remote sacred mountain connected to mythical “Patal” lore; considered a mini Kailash in Kumaon region..", location: "Pithoragarh", lat: 30.1000, lng: 80.1500 },
        { id: 108, name: "Shikhar Kailash", district: "Pithoragarh", description: "Peak abode of Shiva.", longDescription: "Shikhar Kailash is a sacred peak believed to be an abode of Lord Shiva.", location: "Pithoragarh", lat: 30.3000, lng: 80.2000 },
        { id: 109, name: "Mana Kailash", district: "Chamoli", description: "Near Badrinath temple.", longDescription: "Mana Kailash is located near Badrinath and is considered a sacred peak in the region.", location: "Chamoli", lat: 30.7500, lng: 79.5000 },
        { id: 110, name: "Shiva Kailash", district: "Pithoragarh", description: "Sacred Shiva mountain.", longDescription: "Shiva Kailash is another sacred peak dedicated to Lord Shiva in the Himalayan range.", location: "Pithoragarh", lat: 30.1500, lng: 80.7500 }
    ]
};

// District Temples (6 temples each)
const districtTemples = {
    "Almora": [
        { id: 25, name: "Kasar Devi Temple", description: "Ancient temple with cosmic energy center.", longDescription: "Kasar Devi Temple gained international fame when spiritual seekers including Swami Vivekananda visited here. The area is known for its high cosmic energy.", location: "Almora", lat: 29.6214, lng: 79.6462 },
        { id: 26, name: "Chitai Golu Devta Temple", description: "Famous temple of Lord Golu.", longDescription: "Chitai Golu Devta Temple is famous for thousands of bells hanging from the ceiling, offered by devotees whose wishes were fulfilled.", location: "Almora", lat: 29.6500, lng: 79.6500 },
        { id: 27, name: "Nanda Devi Temple", description: "Dedicated to Goddess Nanda Devi.", longDescription: "Nanda Devi Temple is an ancient temple dedicated to the patron goddess of Uttarakhand.", location: "Almora", lat: 29.6200, lng: 79.6700 },
        { id: 28, name: "Katarmal Sun Temple", description: "9th century Sun temple.", longDescription: "Katarmal Sun Temple is a 9th century temple dedicated to the Sun God, known for its intricate architecture.", location: "Almora", lat: 29.6350, lng: 79.6400 },
        { id: 29, name: "Jageshwar Dham", description: "Group of 124 ancient Shiva temples.", longDescription: "Jageshwar Dham is a group of 124 ancient Shiva temples dating from 7th to 14th century.", location: "Almora", lat: 29.6375, lng: 79.8547 },
        { id: 30, name: "Binsar Mahadev Temple", description: "Ancient Shiva temple in Binsar.", longDescription: "Binsar Mahadev Temple is located in the Binsar Wildlife Sanctuary and offers panoramic Himalayan views.", location: "Almora", lat: 29.7000, lng: 79.7500 }
    ],
    "Bageshwar": [
        { id: 31, name: "Bagnath Temple", description: "Ancient Shiva temple on Gomti river.", longDescription: "Bagnath Temple is an ancient Shiva temple located on the banks of the Gomti River.", location: "Bageshwar", lat: 29.8429, lng: 79.7702 },
        { id: 32, name: "Baijnath Temple", description: "12th century Shiva temple.", longDescription: "Baijnath Temple is a 12th century Shiva temple known for its beautiful architecture.", location: "Bageshwar", lat: 29.9200, lng: 79.6200 },
        { id: 33, name: "Chandika Temple", description: "Temple dedicated to Goddess Chandi.", longDescription: "Chandika Temple is dedicated to Goddess Chandi, an incarnation of Durga.", location: "Bageshwar", lat: 29.8500, lng: 79.8000 },
        { id: 34, name: "Kanda Kali Temple", description: "Kali temple in scenic location.", longDescription: "Kanda Kali Temple is situated in a beautiful location with panoramic views.", location: "Bageshwar", lat: 29.8800, lng: 79.8200 },
        { id: 35, name: "Gauri Udiyar", description: "Cave temple dedicated to Parvati.", longDescription: "Gauri Udiyar is a natural cave temple dedicated to Goddess Parvati.", location: "Bageshwar", lat: 29.8300, lng: 79.7800 },
        { id: 36, name: "Koteshwar Temple", description: "Ancient temple near Bageshwar.", longDescription: "Koteshwar Temple is an ancient temple located in a scenic spot near Bageshwar.", location: "Bageshwar", lat: 29.8000, lng: 79.7500 }
    ],
    "Chamoli": [
        { id: 1, name: "Badrinath Temple", description: "One of the four Char Dham.", longDescription: "Badrinath Temple is one of the most important pilgrimage sites for Hindus.", location: "Chamoli", lat: 30.7448, lng: 79.4932 },
        { id: 11, name: "Adi Badri", description: "Ancient Vishnu temple complex.", longDescription: "Adi Badri complex consists of 16 ancient temples from Gupta period.", location: "Chamoli", lat: 29.7553, lng: 80.1024 },
        { id: 37, name: "Narsingh Temple", description: "Temple of Lord Narsingh.", longDescription: "Narsingh Temple in Joshimath is dedicated to Lord Vishnu's man-lion incarnation.", location: "Chamoli", lat: 30.5550, lng: 79.5667 },
        { id: 7, name: "Rudranath Temple", description: "Natural rock temple of Shiva.", longDescription: "Rudranath Temple is a natural rock temple with Shiva's face appearing on the rock.", location: "Chamoli", lat: 30.5557, lng: 79.3199 },
        { id: 9, name: "Kalpeshwar Temple", description: "Last among Panch Kedar temples.", longDescription: "Kalpeshwar Temple is situated inside a cave and accessible throughout the year.", location: "Chamoli", lat: 30.4650, lng: 79.2730 },
        { id: 38, name: "Hemkund Sahib", description: "Sikh Gurudwara at high altitude.", longDescription: "Hemkund Sahib is a Sikh Gurudwara located at an altitude of 4,632 meters near Valley of Flowers.", location: "Chamoli", lat: 30.7000, lng: 79.6000 }
    ],
    "Champawat": [
        { id: 39, name: "Baleshwar Temple", description: "Ancient Sun temple from 8th century.", longDescription: "Baleshwar Temple is an 8th century Sun temple known for its stone carvings.", location: "Champawat", lat: 29.3370, lng: 80.0970 },
        { id: 40, name: "Kranteshwar Mahadev", description: "Shiva temple on hilltop.", longDescription: "Kranteshwar Mahadev offers panoramic views of the surrounding valleys.", location: "Champawat", lat: 29.3500, lng: 80.1000 },
        { id: 41, name: "Nagnath Temple", description: "Temple dedicated to Nag devta.", longDescription: "Nagnath Temple is dedicated to the Snake God and visited for protection from snake bites.", location: "Champawat", lat: 29.3200, lng: 80.0800 },
        { id: 42, name: "Purnagiri Temple", description: "Siddha Peetha of Shakti.", longDescription: "Purnagiri Temple is one of the 108 Siddha Peethas dedicated to Goddess Shakti.", location: "Champawat", lat: 29.4300, lng: 80.2000 },
        { id: 43, name: "Varahi Devi Temple", description: "Temple of Goddess Varahi.", longDescription: "Varahi Devi Temple is dedicated to Goddess Varahi, the boar-headed incarnation of Shakti.", location: "Champawat", lat: 29.3800, lng: 80.1500 },
        { id: 44, name: "Mayawati Ashram", description: "Spiritual center in Champawat.", longDescription: "Mayawati Ashram is a spiritual retreat center located in the peaceful surroundings of Champawat.", location: "Champawat", lat: 29.3000, lng: 80.1000 }
    ],
    "Dehradun": [
        { id: 45, name: "Tapkeshwar Mahadev", description: "Cave temple with dripping water.", longDescription: "Tapkeshwar Mahadev is a natural cave temple where water droplets continuously fall on the Shiva lingam.", location: "Dehradun", lat: 30.3480, lng: 78.0380 },
        { id: 46, name: "Santala Devi Temple", description: "Hilltop temple of Goddess Santala.", longDescription: "Santala Devi Temple is located on a hilltop offering beautiful views of Dehradun valley.", location: "Dehradun", lat: 30.4000, lng: 78.1000 },
        { id: 47, name: "Lakhamandal Temple", description: "Ancient temple from Mahabharata era.", longDescription: "Lakhamandal Temple is believed to be the place where the Lakshagriha (wax house) incident from Mahabharata occurred.", location: "Dehradun", lat: 30.6833, lng: 77.8500 },
        { id: 48, name: "Sai Darbar Temple", description: "Modern temple of Sai Baba.", longDescription: "Sai Darbar Temple is a modern temple dedicated to Sai Baba of Shirdi.", location: "Dehradun", lat: 30.3165, lng: 78.0322 },
        { id: 49, name: "Mindrolling Monastery", description: "One of six major monasteries.", longDescription: "Mindrolling Monastery is one of the six major monasteries of the Nyingma school of Tibetan Buddhism.", location: "Dehradun", lat: 30.3333, lng: 78.0500 },
        { id: 50, name: "Shiv Mandir", description: "Popular Shiva temple in Dehradun.", longDescription: "Shiv Mandir is a popular Shiva temple located in the heart of Dehradun city.", location: "Dehradun", lat: 30.3250, lng: 78.0410 }
    ],
    "Haridwar": [
        { id: 51, name: "Mansa Devi Temple", description: "Popular Shakti temple on hilltop.", longDescription: "Mansa Devi Temple is accessible by cable car and offers panoramic views of Haridwar.", location: "Haridwar", lat: 29.9500, lng: 78.1667 },
        { id: 52, name: "Chandi Devi Temple", description: "Temple of Goddess Chandi.", longDescription: "Chandi Devi Temple is situated on Neel Parvat and is one of the Siddha Peethas.", location: "Haridwar", lat: 29.9600, lng: 78.1700 },
        { id: 53, name: "Maya Devi Temple", description: "One of Shakti Peethas.", longDescription: "Maya Devi Temple is one of the Siddha Peethas where the heart and navel of Sati fell.", location: "Haridwar", lat: 29.9450, lng: 78.1650 },
        { id: 54, name: "Har Ki Pauri", description: "Sacred ghat on Ganges river.", longDescription: "Har Ki Pauri is the most sacred ghat where thousands take holy dip during Kumbh Mela.", location: "Haridwar", lat: 29.9540, lng: 78.1750 },
        { id: 55, name: "Daksh Mahadev Temple", description: "Ancient Shiva temple.", longDescription: "Daksh Mahadev Temple is believed to be the place where Daksha performed his yajna.", location: "Haridwar", lat: 29.9000, lng: 78.1300 },
        { id: 56, name: "Bharat Mata Mandir", description: "Temple dedicated to Mother India.", longDescription: "Bharat Mata Mandir is an eight-story temple dedicated to Mother India, with each floor representing different aspects of Indian culture.", location: "Haridwar", lat: 29.9400, lng: 78.1600 }
    ],
    "Nainital": [
        { id: 57, name: "Naina Devi Temple", description: "Shakti Peetha by Naini Lake.", longDescription: "Naina Devi Temple is situated on the northern shore of Naini Lake and is a Shakti Peetha.", location: "Nainital", lat: 29.3820, lng: 79.4630 },
        { id: 58, name: "Kainchi Dham", description: "Famous ashram of Neem Karoli Baba.", longDescription: "Kainchi Dham ashram was visited by Steve Jobs and Mark Zuckerberg for spiritual guidance.", location: "Nainital", lat: 29.4200, lng: 79.5200 },
        { id: 59, name: "Hanuman Garhi", description: "Sunset point with Hanuman temple.", longDescription: "Hanuman Garhi offers the most beautiful sunset views in Nainital with a Hanuman temple.", location: "Nainital", lat: 29.3800, lng: 79.4500 },
        { id: 60, name: "Ghorakhal Golu Devta", description: "Temple of Lord Golu Devta.", longDescription: "Ghorakhal temple is dedicated to Golu Devta, the god of justice in Kumaon region.", location: "Nainital", lat: 29.4000, lng: 79.5000 },
        { id: 61, name: "Pashan Devi Temple", description: "Ancient temple of Goddess Durga.", longDescription: "Pashan Devi Temple is an ancient temple dedicated to Goddess Durga located on a hill.", location: "Nainital", lat: 29.3500, lng: 79.4800 },
        { id: 62, name: "Mukteshwar Temple", description: "Ancient Shiva temple.", longDescription: "Mukteshwar Temple is an ancient Shiva temple offering panoramic views of the Himalayas.", location: "Nainital", lat: 29.4700, lng: 79.6500 }
    ],
    "Pauri Garhwal": [
        { id: 63, name: "Neelkanth Mahadev", description: "Major Shiva temple near Rishikesh.", longDescription: "Neelkanth Mahadev Temple is dedicated to Lord Shiva and is associated with Samudra Manthan.", location: "Pauri Garhwal", lat: 30.1269, lng: 78.3306 },
        { id: 64, name: "Kandoliya Devta Temple", description: "Local deity temple with scenic view.", longDescription: "Kandoliya Devta Temple offers panoramic views of the Himalayas and surrounding valleys.", location: "Pauri Garhwal", lat: 30.1500, lng: 78.7800 },
        { id: 65, name: "Kyunkaleshwar Mahadev", description: "Ancient Shiva temple.", longDescription: "Kyunkaleshwar Mahadev is an ancient temple known for its peaceful atmosphere.", location: "Pauri Garhwal", lat: 30.1700, lng: 78.8000 },
        { id: 66, name: "Tarkeshwar Mahadev", description: "Forest temple of Lord Shiva.", longDescription: "Tarkeshwar Mahadev is located in a dense deodar forest, creating a mystical atmosphere.", location: "Pauri Garhwal", lat: 30.2000, lng: 78.7500 },
        { id: 67, name: "Jwalpa Devi Temple", description: "Temple of Goddess Jwalpa.", longDescription: "Jwalpa Devi Temple is dedicated to Goddess Jwalpa, an incarnation of Shakti.", location: "Pauri Garhwal", lat: 30.1800, lng: 78.7700 },
        { id: 68, name: "Nagh Mandir", description: "Temple dedicated to Snake God.", longDescription: "Nagh Mandir is dedicated to the Snake God and is an important religious site in Pauri.", location: "Pauri Garhwal", lat: 30.1600, lng: 78.7900 }
    ],
    "Pithoragarh": [
        { id: 69, name: "Kapileshwar Mahadev", description: "Cave temple of Lord Shiva.", longDescription: "Kapileshwar Mahadev is a natural cave temple dedicated to Lord Shiva.", location: "Pithoragarh", lat: 29.5833, lng: 80.2167 },
        { id: 70, name: "Ulka Devi Temple", description: "Ancient temple of Goddess Durga.", longDescription: "Ulka Devi Temple is an ancient temple situated on a hill with scenic views.", location: "Pithoragarh", lat: 29.6000, lng: 80.2000 },
        { id: 71, name: "Mostamanu Temple", description: "Remote temple in Himalayas.", longDescription: "Mostamanu Temple is located in a remote area offering solitude and spiritual peace.", location: "Pithoragarh", lat: 29.6500, lng: 80.2500 },
        { id: 72, name: "Patal Bhuvaneshwar Cave Temple", description: "limestone cave temple dedicated mainly to Lord Shiva.", longDescription: "Patal Bhuvaneshwar Cave Temple is an ancient underground Hindu shrine dedicated to Lord Shiva, featuring naturally formed rock carvings of deities and mystic passages deep within a limestone mountain near Gangolihat, Uttarakhand.", location: "Pithoragarh", lat: 29.7680, lng: 80.1630 },
        { id: 73, name: "Dhwaj Temple", description: "Hilltop temple with panoramic view.", longDescription: "Dhwaj Temple is situated on a hilltop offering 360-degree views of the Himalayas.", location: "Pithoragarh", lat: 29.6200, lng: 80.1800 },
        { id: 74, name: "Thal Kedar Temple", description: "Ancient Shiva temple in Thal.", longDescription: "Thal Kedar Temple is an ancient Shiva temple located in the scenic Thal region of Pithoragarh.", location: "Pithoragarh", lat: 29.5000, lng: 80.2000 }
    ],
    "Rudraprayag": [
        { id: 2, name: "Kedarnath Temple", description: "Sacred Jyotirlinga of Lord Shiva.", longDescription: "Kedarnath Temple is one of the twelve Jyotirlingas and requires a trek to reach.", location: "Rudraprayag", lat: 30.7352, lng: 79.0669 },
        { id: 6, name: "Tungnath Temple", description: "Highest Shiva temple in the world.", longDescription: "Tungnath Temple is the highest Shiva temple accessible by a moderate trek.", location: "Rudraprayag", lat: 30.4900, lng: 79.2160 },
        { id: 75, name: "Madhyamaheshwar Temple", description: "Middle Kedar temple.", longDescription: "Madhyamaheshwar Temple is the fourth Panch Kedar temple requiring a trek to reach.", location: "Rudraprayag", lat: 30.6187, lng: 79.1915 },
        { id: 76, name: "Koteshwar Mahadev", description: "Cave temple of Lord Shiva.", longDescription: "Koteshwar Mahadev is a natural cave temple located near Rudraprayag town.", location: "Rudraprayag", lat: 30.2847, lng: 78.9831 },
        { id: 77, name: "Triyuginarayan Temple", description: "Wedding venue of Shiva-Parvati.", longDescription: "Triyuginarayan Temple is believed to be the wedding venue of Lord Shiva and Goddess Parvati.", location: "Rudraprayag", lat: 30.5300, lng: 79.0700 },
        { id: 78, name: "Guptkashi Temple", description: "Ancient temple in Guptkashi.", longDescription: "Guptkashi Temple is an ancient temple dedicated to Lord Shiva, located in Guptkashi town.", location: "Rudraprayag", lat: 30.5200, lng: 79.0800 }
    ],
    "Tehri Garhwal": [
        { id: 79, name: "Surkanda Devi Temple", description: "Hilltop Shakti temple near Dhanaulti.", longDescription: "Surkanda Devi Temple requires a short trek and offers breathtaking views of the Himalayas.", location: "Tehri Garhwal", lat: 30.4500, lng: 78.2000 },
        { id: 80, name: "Chandrabadni Devi Temple", description: "Shakti Peetha with panoramic view.", longDescription: "Chandrabadni Devi Temple is a Shakti Peetha offering 360-degree views of the mountains.", location: "Tehri Garhwal", lat: 30.4300, lng: 78.2200 },
        { id: 81, name: "Sem Mukhem Nag Raja", description: "Temple of Snake God.", longDescription: "Sem Mukhem Nag Raja Temple is dedicated to the Snake God and is unique in its architecture.", location: "Tehri Garhwal", lat: 30.4000, lng: 78.2500 },
        { id: 82, name: "Kunjapuri Devi Temple", description: "Sunrise point temple near Rishikesh.", longDescription: "Kunjapuri Devi Temple is famous for its spectacular sunrise views over the Himalayas.", location: "Tehri Garhwal", lat: 30.2000, lng: 78.4000 },
        { id: 83, name: "Raghunathji Mandir", description: "An incarnation of Lord Vishnu.", longDescription: "A historic temple dedicated to Lord Rama (Raghunathji), located at the holy confluence of Alaknanda and Bhagirathi rivers in Tehri Garhwal, known for its spiritual significance and scenic Himalayan setting..", location: "Tehri Garhwal", lat: 30.1412, lng: 78.5351 },
        { id: 84, name: "Budha Kedar Temple", description: "Known for its large Shivling and scenic hill setting", longDescription: "Budha Kedar Temple is a hilltop Shiva temple in Tehri Garhwal, Uttarakhand, known for its scenic views and peaceful surroundings.", location: "Tehri Garhwal", lat: 30.5777, lng: 78.6456 }
    ],
    "Udham Singh Nagar": [
        { id: 85, name: "Nanakmatta Sahib", description: "Sikh Gurudwara of Guru Nanak.", longDescription: "Nanakmatta Sahib is a historical Gurudwara where Guru Nanak Dev Ji meditated.", location: "Udham Singh Nagar", lat: 28.9711, lng: 79.9925 },
        { id: 86, name: "Atariya Temple", description: "Shiva temple with large complex.", longDescription: "Atariya Temple is a large Shiva temple complex with beautiful architecture.", location: "Udham Singh Nagar", lat: 29.2000, lng: 78.9500 },
        { id: 87, name: "Moteshwar Mahadev", description: "Ancient Shiva temple.", longDescription: "Moteshwar Mahadev is an ancient temple known for its spiritual significance.", location: "Udham Singh Nagar", lat: 29.1500, lng: 79.0000 },
        { id: 88, name: "Kali Mandir", description: "Temple of Goddess Kali.", longDescription: "Kali Mandir is dedicated to Goddess Kali and is an important religious site.", location: "Udham Singh Nagar", lat: 28.9800, lng: 79.4000 },
        { id: 89, name: "Giri Sarovar Temple", description: "Temple with sacred pond.", longDescription: "Giri Sarovar Temple has a sacred pond believed to have healing properties.", location: "Udham Singh Nagar", lat: 29.0000, lng: 79.5000 },
        { id: 90, name: "Chaiti Devi Temple", description: "a sacred hilltop temple dedicated to Goddess Chaiti.", longDescription: "A hilltop temple dedicated to Goddess Chaiti (Balasundari), famous for its scenic views and Navratri fair.", location: "Udham Singh Nagar", lat: 28.8915, lng: 78.9781 }
    ],
    "Uttarkashi": [
        { id: 3, name: "Gangotri Temple", description: "Origin temple of River Ganga.", longDescription: "Gangotri Temple marks the origin of River Ganga and is a major pilgrimage site.", location: "Uttarkashi", lat: 30.9945, lng: 78.9397 },
        { id: 4, name: "Yamunotri Temple", description: "Source temple of River Yamuna.", longDescription: "Yamunotri Temple marks the source of River Yamuna and requires a trek to reach.", location: "Uttarkashi", lat: 31.0150, lng: 78.4630 },
        { id: 91, name: "Vishwanath Temple", description: "Ancient Shiva temple in Uttarkashi.", longDescription: "Vishwanath Temple in Uttarkashi is one of the oldest Shiva temples in the region.", location: "Uttarkashi", lat: 30.7296, lng: 78.4435 },
        { id: 92, name: "Shakti Temple", description: "Temple of Goddess Shakti.", longDescription: "Shakti Temple is dedicated to Goddess Shakti and is located near Vishwanath Temple.", location: "Uttarkashi", lat: 30.7300, lng: 78.4450 },
        { id: 93, name: "Kuteti Devi Temple", description: "Hilltop temple near Uttarkashi.", longDescription: "Kuteti Devi Temple is situated on a hilltop offering views of Uttarkashi town.", location: "Uttarkashi", lat: 30.7500, lng: 78.4500 },
        { id: 94, name: "Gangnani Temple", description: "Temple with hot water springs.", longDescription: "Gangnani Temple is known for its hot water springs which are believed to have medicinal properties.", location: "Uttarkashi", lat: 30.8500, lng: 78.6000 }
    ]
};

// Home Temples - 8 temples
const homeTemples = [
    { id: 1, name: "Badrinath Temple", district: "Chamoli", description: "One of the four Char Dham pilgrimage sites, dedicated to Lord Vishnu.", longDescription: "Badrinath Temple is one of the four Char Dham pilgrimage sites and one of the 108 Divya Desams dedicated to Lord Vishnu.", location: "Badrinath, Chamoli", lat: 30.7448, lng: 79.4932 },
    { id: 2, name: "Kedarnath Temple", district: "Rudraprayag", description: "Sacred Jyotirlinga of Lord Shiva in the Himalayas.", longDescription: "Kedarnath Temple is a Hindu temple dedicated to Lord Shiva, located on the Garhwal Himalayan range.", location: "Kedarnath, Rudraprayag", lat: 30.7352, lng: 79.0669 },
    { id: 3, name: "Gangotri Temple", district: "Uttarkashi", description: "Origin temple of the holy River Ganga.", longDescription: "Gangotri Temple is a Hindu temple dedicated to Goddess Ganga, located in the Uttarkashi district.", location: "Gangotri, Uttarkashi", lat: 30.9945, lng: 78.9397 },
    { id: 4, name: "Yamunotri Temple", district: "Uttarkashi", description: "Source temple of the sacred River Yamuna.", longDescription: "Yamunotri Temple is dedicated to Goddess Yamuna and is the source of the Yamuna River.", location: "Yamunotri, Uttarkashi", lat: 31.0150, lng: 78.4630 },
    { id: 63, name: "Neelkanth Mahadev", district: "Pauri Garhwal", description: "Major Shiva temple near Rishikesh.", longDescription: "Neelkanth Mahadev Temple is dedicated to Lord Shiva and is associated with Samudra Manthan.", location: "Near Rishikesh", lat: 30.1269, lng: 78.3306 },
    { id: 29, name: "Jageshwar Dham", district: "Almora", description: "Group of 124 ancient Shiva temples.", longDescription: "Jageshwar Dham is a group of 124 ancient Shiva temples dating from 7th to 14th century.", location: "Almora", lat: 29.6375, lng: 79.8547 },
    { id: 51, name: "Mansa Devi Temple", district: "Haridwar", description: "Popular Shakti temple accessible by cable car.", longDescription: "Mansa Devi Temple is accessible by cable car and offers panoramic views of Haridwar.", location: "Haridwar", lat: 29.9500, lng: 78.1667 },
    { id: 58, name: "Kainchi Dham", district: "Nainital", description: "Famous ashram of Neem Karoli Baba.", longDescription: "Kainchi Dham ashram was visited by Steve Jobs and Mark Zuckerberg for spiritual guidance.", location: "Nainital", lat: 29.4200, lng: 79.5200 }
];

const categories = ["Char Dham", "Panch Kedar", "Panch Badri", "Panch Prayag", "Panch Kailash"];
const districts = Object.keys(districtTemples);

// ADD THESE HELPER FUNCTIONS AT THE END
const templeImageMap = {
    "badrinathtemple": "badrinath",
    "kedarnathtemple": "kedarnath",
    "gangotritemple": "gangotri",
    "yamunotritemple": "yamunotri",
    "neelkanthmahadev": "neelkanth",
    "jageshwardham": "jageshwar",
    "mansadevitemple": "mansadevi",
    "kainchidham": "kainchi"
};

function getImageFileName(templeName) {
    const cleanName = templeName.toLowerCase()
        .replace(/\s*temple\s*/gi, '')
        .replace(/\s*dham\s*/gi, '')
        .replace(/\s*mahadev\s*/gi, '')
        .replace(/\s*devi\s*/gi, '')
        .replace(/\s*mandir\s*/gi, '')
        .replace(/[^a-z0-9]/g, '');
    
    // Return mapped name if exists, otherwise return cleaned name
    return templeImageMap[cleanName] || cleanName;
}