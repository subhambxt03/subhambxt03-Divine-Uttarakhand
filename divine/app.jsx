// React Components

// Navbar Component
function Navbar({ onSearch, onHomeClick, onAboutClick, onContactClick }) {
    const [searchTerm, setSearchTerm] = React.useState('');
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
            setSearchTerm('');
        }
    };
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <i className="fas fa-om"></i>
                    <h1>Divine Uttarakhand</h1>
                </div>
                
                <div className="navbar-search">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search temple or district..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
                
                <div className="navbar-links">
                    <button onClick={onHomeClick} className="nav-link">
                        <i className="fas fa-home"></i> Home
                    </button>
                    <button onClick={onAboutClick} className="nav-link">
                        <i className="fas fa-info-circle"></i> About
                    </button>
                    <button onClick={onContactClick} className="nav-link">
                        <i className="fas fa-envelope"></i> Contact
                    </button>
                </div>
                
                <button className="mobile-menu-btn">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    );
}

// District Buttons Component
function DistrictButtons({ activeDistrict, onDistrictClick }) {
    const districts = [
        "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun",
        "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh",
        "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"
    ];
    
    return (
        <div className="district-buttons">
            <div className="container">
                <h2>Explore by District</h2>
                <div className="district-scroll-container">
                    <div className="district-grid">
                        {districts.map((district) => (
                            <button
                                key={district}
                                className={`district-btn ${activeDistrict === district ? 'active' : ''}`}
                                onClick={() => onDistrictClick(district)}
                            >
                                {district}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Header Buttons Component
function HeaderButtons({ categories, activeCategory, onCategoryClick }) {
    return (
        <div className="header-buttons">
            <div className="container">
                <h2>Explore Temple Categories</h2>
                <div className="category-buttons">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => onCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Temple Card Component with Compact Buttons
function TempleCard({ temple, onDirectionClick, onAboutTempleClick }) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(1);
    
    const getImageSrc = (index) => {
        const baseName = temple.name.toLowerCase()
            .replace(/\s*temple\s*/gi, '')
            .replace(/\s*dham\s*/gi, '')
            .replace(/\s*mahadev\s*/gi, '')
            .replace(/\s*devi\s*/gi, '')
            .replace(/\s*mandir\s*/gi, '')
            .replace(/[^a-z0-9]/g, '');
        return `images/${baseName}-${index}.jpg`;
    };
    
    const handleGetDirection = () => {
        onDirectionClick(temple);
    };
    
    const handleAboutTemple = () => {
        onAboutTempleClick(temple);
    };
    
    const nextImage = () => {
        setCurrentImageIndex(prev => prev === 5 ? 1 : prev + 1);
    };
    
    const prevImage = () => {
        setCurrentImageIndex(prev => prev === 1 ? 5 : prev - 1);
    };
    
    return (
        <div className="temple-card">
            <div className="temple-image">
                <img 
                    src={getImageSrc(currentImageIndex)} 
                    alt={temple.name} 
                    onError={(e) => {
                        console.error(`Failed to load image: ${e.target.src}`);
                        e.target.onerror = null;
                        e.target.src = 'images/default-temple.jpg';
                    }} 
                />
                <div className="temple-image-nav">
                    <button className="image-nav-btn" onClick={prevImage}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="image-nav-btn" onClick={nextImage}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div className="temple-district">{temple.district}</div>
            </div>
            
            <div className="temple-content">
                <h3>{temple.name}</h3>
                <p className="temple-description">{temple.description}</p>
                
                <div className="temple-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{temple.location}</span>
                </div>
                
                <div className="temple-button-row">
                    <button className="about-temple-btn-compact" onClick={handleAboutTemple}>
                        <i className="fas fa-info-circle"></i> About
                    </button>
                    <button className="direction-btn-compact" onClick={handleGetDirection}>
                        <i className="fas fa-directions"></i> Direction
                    </button>
                </div>
            </div>
        </div>
    );
}

// Temple Details Modal Component
function TempleDetailsModal({ temple, isOpen, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(1);
    
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    
    if (!isOpen) return null;
    
    const getImageSrc = (index) => {
        const baseName = temple.name.toLowerCase()
            .replace(/\s*temple\s*/gi, '')
            .replace(/\s*dham\s*/gi, '')
            .replace(/\s*mahadev\s*/gi, '')
            .replace(/\s*devi\s*/gi, '')
            .replace(/\s*mandir\s*/gi, '')
            .replace(/[^a-z0-9]/g, '');
        return `images/${baseName}-${index}.jpg`;
    };
    
    const nextImage = () => {
        setCurrentImageIndex(prev => prev === 5 ? 1 : prev + 1);
    };
    
    const prevImage = () => {
        setCurrentImageIndex(prev => prev === 1 ? 5 : prev - 1);
    };
    
    return (
        <div className="temple-details-modal" onClick={onClose}>
            <div className="temple-details-content" onClick={(e) => e.stopPropagation()}>
                <div className="temple-details-header">
                    <h3>{temple.name} - Complete Details</h3>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="temple-details-image">
                    <img 
                        src={getImageSrc(currentImageIndex)} 
                        alt={temple.name}
                        onError={(e) => {
                            console.error(`Failed to load image: ${e.target.src}`);
                            e.target.onerror = null;
                            e.target.src = 'images/default-temple.jpg';
                        }}
                    />
                    <div className="temple-image-nav">
                        <button className="image-nav-btn" onClick={prevImage}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="image-nav-btn" onClick={nextImage}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                
                <div className="temple-details-info">
                    <h4>Location</h4>
                    <p><strong>District:</strong> {temple.district}</p>
                    <p><strong>Exact Location:</strong> {temple.location}</p>
                    
                    <h4>Description</h4>
                    <p>{temple.longDescription}</p>
                    
                    <h4>Significance</h4>
                    <p>This temple holds great religious and historical significance in Hindu mythology and is an important pilgrimage site in Uttarakhand.</p>
                    
                    <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                        <button className="direction-btn-compact" onClick={() => window.open(`https://www.google.com/maps?q=${temple.lat},${temple.lng}`, '_blank')}>
                            <i className="fas fa-map-marker-alt"></i> View on Google Maps
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Map Modal Component
function MapModal({ temple, isOpen, onClose }) {
    const mapRef = React.useRef(null);
    const mapInstanceRef = React.useRef(null);
    
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                if (mapRef.current && !mapInstanceRef.current) {
                    mapInstanceRef.current = L.map(mapRef.current).setView([temple.lat, temple.lng], 13);
                    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors'
                    }).addTo(mapInstanceRef.current);
                    
                    L.marker([temple.lat, temple.lng])
                        .addTo(mapInstanceRef.current)
                        .bindPopup(`<b>${temple.name}</b><br>${temple.location}`)
                        .openPopup();
                }
            }, 100);
        } else {
            document.body.style.overflow = 'unset';
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, temple]);
    
    if (!isOpen) return null;
    
    const googleMapsUrl = `https://www.google.com/maps?q=${temple.lat},${temple.lng}&z=15`;
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{temple.name} - Location</h3>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="map-container">
                    <div id="map" ref={mapRef}></div>
                </div>
                
                <div className="modal-info">
                    <p><strong>Location:</strong> {temple.location}</p>
                    <p><strong>District:</strong> {temple.district}</p>
                    <p><strong>Coordinates:</strong> {temple.lat.toFixed(4)}, {temple.lng.toFixed(4)}</p>
                    
                    <div className="modal-actions">
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-btn"
                        >
                            <i className="fas fa-map"></i> View Map
                        </a>
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${temple.lat},${temple.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-btn"
                        >
                            <i className="fas fa-route"></i> Directions
                        </a>
                        <button className="close-modal-btn" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Home Section Component
function HomeSection({ temples, onDirectionClick, onAboutTempleClick, viewMode, activeCategory }) {
    const getGridClass = () => {
        if (viewMode === 'search') {
            return 'search-results-grid';
        }
        
        if (viewMode === 'category' && activeCategory) {
            switch(activeCategory) {
                case 'Char Dham':
                    return 'temple-grid char-dham-grid';
                case 'Panch Kedar':
                    return 'temple-grid panch-kedar-grid';
                case 'Panch Badri':
                    return 'temple-grid panch-badri-grid';
                case 'Panch Prayag':
                    return 'temple-grid panch-prayag-grid';
                case 'Panch Kailash':
                    return 'temple-grid panch-kailash-grid';
                default:
                    return 'temple-grid';
            }
        }
        
        if (viewMode === 'district') {
            return 'temple-grid district-grid';
        }
        
        if (viewMode === 'home') {
            return 'temple-grid home-grid';
        }
        
        return 'temple-grid';
    };
    
    let title = "Sacred Temples of Uttarakhand";
    let subtitle = "Explore the divine abodes in the Land of Gods";
    
    if (viewMode === 'category' && activeCategory) {
        title = `${activeCategory} Temples`;
        subtitle = `Explore all temples in ${activeCategory} category`;
    } else if (viewMode === 'district') {
        title = "District Temples";
        subtitle = "Explore temples by district";
    } else if (viewMode === 'search') {
        title = "Search Results";
        subtitle = `Found ${temples.length} temples`;
    }
    
    return (
        <div className="home-section">
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                
                {temples.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '50px', color: '#aaa' }}>
                        <i className="fas fa-search" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
                        <h3>No Temples Found</h3>
                        <p>Try searching with different keywords</p>
                    </div>
                ) : (
                    <div className={getGridClass()}>
                        {temples.map((temple) => (
                            <div key={temple.id} className="temple-grid-item">
                                <TempleCard 
                                    temple={temple} 
                                    onDirectionClick={onDirectionClick}
                                    onAboutTempleClick={onAboutTempleClick}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// About Section Component
function AboutSection() {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-content">
                    <h2>About Divine Uttarakhand</h2>
                    
                    <p>
                        Welcome to Divine Uttarakhand - Temple Explorer, your comprehensive digital guide to the sacred temples 
                        of Uttarakhand, reverently known as "Devbhoomi" (Land of Gods). Nestled in the majestic Himalayas, 
                        Uttarakhand is a spiritual paradise that has been the epicenter of Hindu pilgrimage for centuries.
                    </p>
                    
                    <p>
                        Our platform is dedicated to preserving and sharing the rich spiritual heritage of this sacred land. 
                        We provide detailed information, accurate maps, historical context, and practical guidance for every 
                        major temple in Uttarakhand. From the majestic Char Dham to ancient Himalayan shrines, we cover it all.
                    </p>
                    
                    <div className="about-features">
                        <div className="feature-card">
                            <i className="fas fa-mountain"></i>
                            <h3>Himalayan Heritage</h3>
                            <p>Explore temples nestled in the majestic Himalayas, each with unique spiritual significance and breathtaking views.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-history"></i>
                            <h3>Ancient History</h3>
                            <p>Discover temples dating back thousands of years, mentioned in ancient Hindu scriptures and epics.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-map-marked-alt"></i>
                            <h3>Easy Navigation</h3>
                            <p>Get precise directions, maps, and travel information to help you reach every temple easily and safely.</p>
                        </div>
                    </div>
                    
                    <p>
                        Uttarakhand is not just about temples; it's about experiencing divinity in nature. The state 
                        is home to sacred rivers, mystical forests, medicinal herbs, and holy peaks that have been 
                        worshipped for centuries. Every valley echoes with spiritual energy, and every mountain peak 
                        tells a story from Hindu mythology.
                    </p>
                    
                    <p>
                        Our mission is to bridge the gap between ancient spirituality and modern technology, making 
                        spiritual exploration accessible to everyone. Whether you're planning a pilgrimage, researching 
                        religious history, exploring spiritual destinations, or simply seeking inner peace, Divine 
                        Uttarakhand is your perfect companion on this sacred journey through the Land of Gods.
                    </p>
                    
                    <p style={{ textAlign: 'center', marginTop: '30px', fontStyle: 'italic', color: '#8B4513' }}>
                        "In the mountains of Uttarakhand, every step is a prayer, every view is a blessing, 
                        and every temple is a doorway to the divine."
                    </p>
                </div>
            </div>
        </div>
    );
}

// Contact Section Component
function ContactSection() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    
    return (
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <h2>Contact Us</h2>
                    
                    <div className="social-buttons-top">
                        <a href="https://www.facebook.com/bisht.subham.5" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/subham_bxt" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/919639502481" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="mailto:shubhambxt25@gmail.com" className="social-btn email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your email"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Subject"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="submit-btn">
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>Divine Uttarakhand - Temple Explorer</p>
                <p>Explore the spiritual heritage of Uttarakhand, the Land of Gods</p>
                
                <div className="social-links">
                    <a href="https://facebook.com/bisht.subham.5" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/subham_bxt" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/9196395022481" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="mailto:shubhambxt25@gmail.com" className="social-icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                
                <div className="copyright">
                    <p>© 2024 Divine Uttarakhand. All rights reserved.</p>
                    <p>Devbhoomi Uttarakhand - Where every temple tells a story</p>
                </div>
            </div>
        </footer>
    );
}

// Main App Component
function App() {
    const [viewMode, setViewMode] = React.useState('home');
    const [activeCategory, setActiveCategory] = React.useState('');
    const [activeDistrict, setActiveDistrict] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [currentTemples, setCurrentTemples] = React.useState(homeTemples);
    const [selectedTemple, setSelectedTemple] = React.useState(null);
    const [templeForDetails, setTempleForDetails] = React.useState(null);
    const [isMapModalOpen, setIsMapModalOpen] = React.useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = React.useState(false);
    
    const categories = ["Char Dham", "Panch Kedar", "Panch Badri", "Panch Prayag", "Panch Kailash"];
    
    React.useEffect(() => {
        if (viewMode === 'home') {
            setCurrentTemples(homeTemples);
        } else if (viewMode === 'category' && activeCategory) {
            setCurrentTemples(templeCategories[activeCategory] || []);
        } else if (viewMode === 'district' && activeDistrict) {
            setCurrentTemples(districtTemples[activeDistrict] || []);
        } else if (viewMode === 'search') {
            setCurrentTemples(searchResults);
        }
    }, [viewMode, activeCategory, activeDistrict, searchResults]);
    
    const handleCategoryClick = (category) => {
        setViewMode('category');
        setActiveCategory(category);
        setActiveDistrict('');
    };
    
    const handleDistrictClick = (district) => {
        setViewMode('district');
        setActiveDistrict(district);
        setActiveCategory('');
    };
    
    const handleSearch = (searchTerm) => {
        const term = searchTerm.toLowerCase().trim();
        
        // First check if search matches a district
        const matchingDistrict = Object.keys(districtTemples).find(district => 
            district.toLowerCase().includes(term)
        );
        
        if (matchingDistrict) {
            // Show district temples if district name matches
            setCurrentTemples(districtTemples[matchingDistrict] || []);
            setViewMode('district');
            setActiveDistrict(matchingDistrict);
            setActiveCategory('');
            setSearchResults(districtTemples[matchingDistrict] || []);
        } else {
            // Search in all temples
            const allTemples = [
                ...homeTemples,
                ...Object.values(templeCategories).flat(),
                ...Object.values(districtTemples).flat()
            ];
            
            const uniqueTemples = Array.from(new Map(allTemples.map(t => [t.id, t])).values());
            
            const results = uniqueTemples.filter(temple => 
                temple.name.toLowerCase().includes(term) ||
                temple.district.toLowerCase().includes(term) ||
                temple.location.toLowerCase().includes(term)
            );
            
            setSearchResults(results);
            setViewMode('search');
            setActiveCategory('');
            setActiveDistrict('');
        }
    };
    
    const handleHomeClick = () => {
        setViewMode('home');
        setActiveCategory('');
        setActiveDistrict('');
        setSearchResults([]);
    };
    
    const handleAboutClick = () => {
        setViewMode('about');
    };
    
    const handleContactClick = () => {
        setViewMode('contact');
    };
    
    const handleDirectionClick = (temple) => {
        setSelectedTemple(temple);
        setIsMapModalOpen(true);
    };
    
    const handleAboutTempleClick = (temple) => {
        setTempleForDetails(temple);
        setIsDetailsModalOpen(true);
    };
    
    const handleCloseMapModal = () => {
        setIsMapModalOpen(false);
        setSelectedTemple(null);
    };
    
    const handleCloseDetailsModal = () => {
        setIsDetailsModalOpen(false);
        setTempleForDetails(null);
    };
    
    return (
        <div className="App">
            <Navbar 
                onSearch={handleSearch}
                onHomeClick={handleHomeClick}
                onAboutClick={handleAboutClick}
                onContactClick={handleContactClick}
            />
            
            {viewMode === 'home' || viewMode === 'category' || viewMode === 'district' || viewMode === 'search' ? (
                <>
                    <DistrictButtons 
                        activeDistrict={activeDistrict}
                        onDistrictClick={handleDistrictClick}
                    />
                    
                    <HeaderButtons 
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryClick={handleCategoryClick}
                    />
                    
                    <HomeSection 
                        temples={currentTemples}
                        onDirectionClick={handleDirectionClick}
                        onAboutTempleClick={handleAboutTempleClick}
                        viewMode={viewMode}
                        activeCategory={activeCategory}
                    />
                    
                    <Footer />
                </>
            ) : null}
            
            {viewMode === 'about' && <AboutSection />}
            {viewMode === 'contact' && <ContactSection />}
            
            {selectedTemple && (
                <MapModal 
                    temple={selectedTemple}
                    isOpen={isMapModalOpen}
                    onClose={handleCloseMapModal}
                />
            )}
            
            {templeForDetails && (
                <TempleDetailsModal 
                    temple={templeForDetails}
                    isOpen={isDetailsModalOpen}
                    onClose={handleCloseDetailsModal}
                />
            )}
        </div>
    );
}