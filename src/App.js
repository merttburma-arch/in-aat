import React, {useState} from 'react';
import {
    Menu,
    X,
    Hammer,
    Building2,
    Ruler,
    Truck,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    ArrowRight, CheckCircle
} from 'lucide-react';
import logoImg from './img/png3.png';
import demir from './img/demir.jpg';
import kentselDönüşüm from './img/kentselDönüşüm.jpg'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {name: 'Ana Sayfa', href: '#home'},
        {name: 'Hakkımızda', href: '#about'},
        {name: 'Hizmetler', href: '#services'},
        {name: 'Projeler', href: '#projects'},
        {name: 'İletişim', href: '#contact'},
    ];

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                  <div className="flex items-center">
                    <img
                        src={logoImg}
                        alt="Eyüboğulları Logo"
                        className="h-24 w-auto object-contain"
                    />
                    <span className="ml-3 text-2xl font-bold text-gray-900">
    EYÜB<span className="text-orange-600">OĞULLARI</span>
  </span>
                  </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a key={item.name} href={item.href}
                               className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                                {item.name}
                            </a>
                        ))}
                        <a href="#contact"
                           className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700 transition">
                            Teklif Al
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

// Bu kodu App.jsx içindeki diğer bileşenlerin (Navbar, Hero vb.) yanına ekle

const Partners = () => {
    // Şirket listesi
    const partners = [
        {name: 'İÇDAŞ', color: 'text-blue-900'},
        {name: 'KAPTAN GRUP', color: 'text-red-800'},
        {name: 'İDÇ', sub: 'İzmir Demir Çelik', color: 'text-gray-800'},
        {name: 'KARDEMİR', color: 'text-blue-800'},
        {name: 'ERDEMİR', color: 'text-red-700'},
        {name: 'ÇOLAKOĞLU METALURJİ', color: 'text-blue-900'},
        {name: 'HABAŞ', color: 'text-red-900'},

    ];

    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <h3 className="text-center text-gray-500 font-semibold uppercase tracking-wider text-sm">
                    Çözüm Ortaklarımız ve Tedarikçilerimiz
                </h3>
            </div>

            <div className="relative w-full">
                {/* Kenarlardaki yumuşak geçiş (Fade) efekti */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div
                    className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Kayan Şerit */}
                <div className="flex w-max animate-scroll">
                    {duplicatedPartners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center mx-8 min-w-[150px]">
                            {/* Logo Alanı */}
                            <div
                                className="group flex flex-col items-center justify-center cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300">
                                {/* NOT: Eğer gerçek resim (logo) kullanacaksan aşağıdaki yorumu aç ve h4/span kısmını sil:
                  <img src="/logolar/icdas.png" alt={partner.name} className="h-12 w-auto object-contain" />
                */}

                                {/* Placeholder Logo Tasarımı */}
                                <h4 className={`text-2xl font-black ${partner.color}`}>{partner.name}</h4>
                                {partner.sub &&
                                    <span className="text-xs text-gray-400 font-medium">{partner.sub}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About = () => (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Sol Taraf: Görsel */}
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-600 rounded-lg z-0"></div>
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="Eyüboğulları Ofis"
                        className="relative z-10 rounded-lg shadow-xl w-full h-[500px] object-cover"
                    />
                </div>

                {/* Sağ Taraf: Metin */}
                <div>
                    <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Hakkımızda</h2>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">6 Yıllık Tecrübe ile <br/>Güven İnşa Ediyoruz</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Eyüboğulları İnşaat olarak, kurulduğumuz günden bu yana dürüstlük, kalite ve zamanında teslimat ilkelerinden ödün vermeden çalışıyoruz. Hem üst yapı projelerinde hem de demir-çelik tedarik zincirinde sektörün öncü firmalarından biri olmanın gururunu yaşıyoruz.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-orange-600 h-6 w-6" />
                            <span className="text-gray-800 font-medium">Zamanında ve Eksiksiz Teslimat</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-orange-600 h-6 w-6" />
                            <span className="text-gray-800 font-medium">Yüksek Kalite Standartları ve Sertifikalı Malzeme</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-orange-600 h-6 w-6" />
                            <span className="text-gray-800 font-medium">Müşteri Odaklı Çözüm Yaklaşımı</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Hero = () => (
    <section id="home" className="relative h-screen flex items-center">
        <div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div
                className="inline-block bg-orange-600 px-3 py-1 mb-4 text-sm font-semibold tracking-wide rounded-sm uppercase">
                İnşaat & Demir Çelik
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Yapılarınızın <br/> <span className="text-orange-500">Temelindeki</span> Güç
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-300">
                Anahtar teslim inşaat projeleri ve İÇDAŞ, Kaptan, İDÇ güvencesiyle toptan/perakende inşaat demiri
                tedariğinde çözüm ortağınız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact"
                   className="bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-700 transition flex items-center justify-center gap-2">
                    Demir Fiyatı Al <ArrowRight className="h-5 w-5"/>
                </a>
                <a href="#projects"
                   className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-gray-900 transition text-center">
                    Tamamlanan Yapılar
                </a>
            </div>
        </div>
    </section>
);

const Stats = () => (
    <div className="bg-orange-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div>
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-orange-100">Tamamlanan Bina</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">50.000+</div>
                    <div className="text-orange-100">Ton Yıllık Demir Satışı</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">6</div>
                    <div className="text-orange-100">Yıllık Tecrübe</div>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">A+</div>
                    <div className="text-orange-100">Kalite Standartları</div>
                </div>
            </div>
        </div>
    </div>
);

const Services = () => {
    const services = [
        {
            icon: <Building2 className="h-12 w-12 text-orange-600"/>,
            title: 'Müteahhitlik & İnşaat',
            desc: 'Konut ve ticari projelerinizde topraktan anahtar teslime kadar, güvenli ve yönetmeliklere uygun yapılar inşa ediyoruz.'
        },
        {
            icon: <Truck className="h-12 w-12 text-orange-600"/>,
            title: 'Demir & Çelik Satışı',
            desc: 'İÇDAŞ, Kaptan ve İDÇ bayiliklerimizle, projeleriniz için her çapta inşaat demirini şantiyenize teslim ediyoruz.'
        },
        {
            icon: <Hammer className="h-12 w-12 text-orange-600"/>,
            title: 'Kentsel Dönüşüm',
            desc: 'Eski ve riskli yapılarınızı, değerini koruyarak modern, sağlam ve depreme dayanıklı yaşam alanlarına dönüştürüyoruz.'
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Faaliyet Alanlarımız</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Sadece bina yapmıyoruz; projelerinizin en önemli hammaddesi olan demiri de en uygun koşullarda
                        tedarik ediyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index}
                             className="bg-white p-10 rounded-lg shadow-lg border-b-4 border-transparent hover:border-orange-600 hover:-translate-y-2 transition duration-300 group">
                            <div
                                className="mb-6 bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                                {/* İkon rengi hover olunca beyaza dönsün diye 'text-orange-600' sınıfını burada sildim, parent'tan yöneteceğiz */}
                                {React.cloneElement(service.icon, {className: "h-10 w-10 text-orange-600 group-hover:text-white transition-colors duration-300"})}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Demir',
            category: 'Demir',
            image: demir
        },
        {
            title: 'Merkez Plaza',
            category: 'Ticari',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Kentsel Dönüşüm',
            category: 'Konut',
            image: kentselDönüşüm
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Son Projelerimiz</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                                <span className="text-orange-400 font-medium mb-1">{project.category}</span>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => (
    <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Üst Kısım: İletişim Bilgileri ve Form */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">

                {/* Sol Taraf: Bilgiler */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Bizimle İletişime Geçin</h2>
                    <p className="text-gray-400 mb-8">
                        Projeleriniz için ücretsiz keşif ve fiyat teklifi almak istiyorsanız formu doldurun veya
                        iletişim kanallarımızdan bize ulaşın.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Phone className="text-orange-500 h-6 w-6"/>
                            <span className="text-lg">+90 (533) 048 22 57</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="text-orange-500 h-6 w-6"/>
                            <span className="text-lg">info@yapitek.com.tr</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-orange-500 h-6 w-6 flex-shrink-0"/>
                            <span className="text-lg leading-snug">
                                Nish İstanbul Çobançeşme, Sanayi Cd. No: 44,<br/>
                                PK:34196 Bahçelievler/İstanbul
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition duration-300">
                            <Facebook className="h-5 w-5"/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition duration-300">
                            <Instagram className="h-5 w-5"/>
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition duration-300">
                            <Linkedin className="h-5 w-5"/>
                        </a>
                    </div>
                </div>

                {/* Sağ Taraf: İletişim Formu */}
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Adınız"
                            className="bg-gray-800 border border-gray-700 p-4 rounded-md w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-white"
                        />
                        <input
                            type="text"
                            placeholder="Soyadınız"
                            className="bg-gray-800 border border-gray-700 p-4 rounded-md w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-white"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="E-posta Adresiniz"
                        className="bg-gray-800 border border-gray-700 p-4 rounded-md w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-white"
                    />
                    <textarea
                        rows="4"
                        placeholder="Mesajınız"
                        className="bg-gray-800 border border-gray-700 p-4 rounded-md w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-white"
                    ></textarea>
                    <button
                        className="bg-orange-600 text-white px-8 py-4 rounded-md font-bold hover:bg-orange-700 transition w-full uppercase tracking-wider shadow-lg hover:shadow-orange-600/20"
                    >
                        Gönder
                    </button>
                </form>
            </div>

            {/* Alt Kısım: Google Harita - GÜNCELLENMİŞ KISIM */}
            <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                    src="https://maps.google.com/maps?q=Çobançeşme,+Sanayi+Cd.+No:+44,+Bahçelievler/İstanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    title="Eyüboğulları Ofis Konumu"
                ></iframe>
            </div>

        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-black text-gray-500 py-8 text-center text-sm border-t border-gray-800">
        <p>&copy; 2024 Eyüboğulları İnşaat ve Yapı Malzemelleri A.Ş. Tüm hakları saklıdır.</p>
    </footer>
);

// --- Ana App Bileşeni ---

function App() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar/>
            <Hero/>
            <Stats/>
            <Partners/>
            <About />
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;