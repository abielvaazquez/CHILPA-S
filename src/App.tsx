/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  Heart, 
  ChevronRight, 
  Star, 
  Gift, 
  Instagram, 
  Twitter, 
  Facebook,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const AnnouncementBar = () => (
  <div className="bg-chilpa-accent text-white py-1.5 text-center text-[10px] sm:text-xs font-bold tracking-widest uppercase">
    ¡Envío gratis en kits de más de 20 bolsitas! • Personaliza tu fiesta hoy
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300 border-b-2 border-black",
      isScrolled ? "bg-white/90 backdrop-blur-md py-2" : "bg-white py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-3xl tracking-tighter">CHILPA'S</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="font-bold text-[11px] uppercase tracking-wider hover:text-chilpa-accent transition-colors">Nuevos Diseños</a>
            <a href="#" className="font-bold text-[11px] uppercase tracking-wider hover:text-chilpa-accent transition-colors">Personalizar</a>
            <a href="#" className="font-bold text-[11px] uppercase tracking-wider hover:text-chilpa-accent transition-colors">Kits Cumple</a>
            <a href="#" className="font-bold text-[11px] uppercase tracking-wider hover:text-chilpa-accent transition-colors">Sustentabilidad</a>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 bg-black text-white rounded-full flex items-center gap-2 px-4 hover:bg-gray-800 transition-colors">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-xs font-bold">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold text-2xl tracking-tighter">Chilpa's</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <a href="#" className="text-2xl font-bold tracking-tight">Bolsas</a>
                <a href="#" className="text-2xl font-bold tracking-tight">Temáticas</a>
                <a href="#" className="text-2xl font-bold tracking-tight">Personalizar</a>
                <a href="#" className="text-2xl font-bold tracking-tight">Sets Regalables</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[70vh] flex items-center py-12 px-4 sm:px-8">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-8 bg-chilpa-green border-2 border-black rounded-[40px] p-8 sm:p-16 flex flex-col justify-center relative overflow-hidden neo-shadow"
      >
        <div className="absolute top-8 right-8 bg-white border-2 border-black px-4 py-2 rounded-full text-[10px] font-bold rotate-12 hidden sm:block">
          100% RECICLABLE
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
          BOLSITAS QUE<br />HACEN MAGIA.
        </h1>
        <p className="text-xl font-medium mb-10 max-w-md">
          Diseños vibrantes para los invitados más exigentes. Personaliza con nombre y edad.
        </p>
        <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-sm self-start hover:scale-105 transition-transform uppercase tracking-widest">
          COMIENZA TU DISEÑO
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-4 bg-chilpa-pink border-2 border-black rounded-[40px] p-8 flex flex-col items-center justify-center relative neo-shadow"
      >
        <div className="w-48 h-64 bg-white border-4 border-black rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform">
          <div className="h-16 bg-chilpa-accent flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white animate-pulse"></div>
          </div>
          <div className="flex-1 flex items-center justify-center text-6xl">
            🦖
          </div>
          <div className="p-4 text-xs font-black border-t-2 border-black uppercase text-center">
            DINO PARTY
          </div>
        </div>
        <div className="absolute bottom-8 right-8 bg-chilpa-yellow border-2 border-black px-4 py-2 rounded-xl text-[10px] font-bold -rotate-6 shadow-md">
          NUEVA COLECCIÓN
        </div>
      </motion.div>
    </div>
  </section>
);

const CategoryPills = () => {
  const categories = [
    { name: 'Animales', color: 'bg-chilpa-pink' },
    { name: 'Espacio', color: 'bg-chilpa-blue' },
    { name: 'Arcoíris', color: 'bg-chilpa-purple' },
    { name: 'Dinosaurios', color: 'bg-chilpa-green' },
    { name: 'Princesas', color: 'bg-chilpa-yellow' },
    { name: 'Retro', color: 'bg-chilpa-pink' },
  ];

  return (
    <div className="bg-white py-12 border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex-shrink-0 px-8 py-3 rounded-full border-2 border-black font-bold text-sm tracking-tight",
                cat.color
              )}
            >
              # {cat.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ name, price, color, image, tag }: { name: string, price: number, color: string, image: string, tag?: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative flex flex-col gap-4 bg-white border-2 border-black rounded-3xl p-4 neo-shadow-hover transition-all"
  >
    <div className={cn("aspect-square rounded-2xl overflow-hidden border-2 border-black relative", color)}>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      {tag && (
        <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
          {tag}
        </div>
      )}
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4" />
      </button>
    </div>
    <div className="flex flex-col text-center">
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{name}</p>
      <p className="text-sm font-black">${price}.00 MXN</p>
    </div>
  </motion.div>
);

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-10">
    <h2 className="font-display font-black text-3xl sm:text-4xl uppercase italic tracking-tighter leading-none">
      {children}
    </h2>
  </div>
);

const FeaturedProducts = () => (
  <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-end justify-between mb-12">
      <SectionHeading>
        Favoritos de la Semana
      </SectionHeading>
      <a href="#" className="font-black text-xs uppercase tracking-widest border-b-2 border-black pb-1 hover:text-chilpa-accent hover:border-chilpa-accent transition-colors mb-2">
        VER TODO
      </a>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
      <ProductCard 
        name="Dreamy Sky" 
        price={45} 
        color="bg-chilpa-blue" 
        image="https://i.pinimg.com/1200x/c8/a6/93/c8a693b10f62c542c558d23afb5c7c15.jpg" 
      />
      <ProductCard 
        name="Space Explorer" 
        price={42} 
        color="bg-chilpa-yellow" 
        image="https://i.pinimg.com/736x/db/ab/14/dbab14bbc3cb1d4015a15d14e79ad7bc.jpg" 
      />
      <ProductCard 
        name="Safari Kit" 
        price={48} 
        color="bg-chilpa-orange" 
        image="https://i.pinimg.com/736x/f9/52/e4/f952e46cdebcb44823a2d9a04fc27792.jpg" 
      />
      <ProductCard 
        name="Unicorn Dust" 
        price={50} 
        color="bg-chilpa-purple" 
        image="https://i.pinimg.com/736x/45/57/8c/45578c16ed8734efc151389b3ffe855f.jpg" 
      />
    </div>
  </section>
);

const CustomizationCTA = () => (
  <section className="py-24 bg-chilpa-purple/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 relative">
        <div className="w-full aspect-square bg-white rounded-[40px] border-4 border-black relative overflow-hidden shadow-2xl">
          <img 
            src="https://i.pinimg.com/1200x/b3/df/64/b3df6448c2f3cef53e706554b4cd2f56.jpg" 
            alt="Customize Bag" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl border-2 border-black shadow-xl text-center">
              <p className="font-bold text-xs uppercase mb-1">Tu diseño aquí</p>
              <p className="font-display font-bold text-2xl tracking-tighter">"FELIZ CUMPLE IKER"</p>
            </div>
          </div>
        </div>
        {/* Playful Stickers */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-chilpa-accent rounded-full text-white flex items-center justify-center font-bold text-center text-xs transform -rotate-12 border-2 border-black p-2">
          ¡PERSONALIZA TU BOLSA!
        </div>
      </div>
      
      <div className="lg:w-1/2">
        <SectionHeading subtitle="Hazlo único">
          Crea tu Propia Chilpa's Bag
        </SectionHeading>
        <p className="text-xl text-gray-700 mb-8 font-medium">
          Elige el color, agrega el nombre del festejado y selecciona entre cientos de iconos temáticos. 
          Un recuerdo que todos guardarán.
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
              </div>
            ))}
          </div>
          <p className="text-sm font-bold">+10k niños felices</p>
        </div>
        <button className="mt-10 bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
          Empieza a Diseñar <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
);

const SocialSection = () => {
  const partyImages = [
    "https://i.pinimg.com/1200x/c2/81/b5/c281b591c21022a20ba2fb7357522e7a.jpg",
    "https://i.pinimg.com/736x/8b/3c/f1/8b3cf181ae61338d0c597ef091ba2d20.jpg",
    "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?q=80&w=400&h=400&auto=format&fit=crop",
    "https://i.pinimg.com/1200x/d8/15/e9/d815e912237cc4e017ac73967dac7be5.jpg",
    "https://i.pinimg.com/1200x/27/18/59/271859bb9b2395fdf64cd485f6c0a012.jpg",
    "https://i.pinimg.com/1200x/95/75/12/9575121a76f7fbb489201923bf195364.jpg"
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter mb-4">#ChilpaKids en la Vida Real</h2>
        <p className="text-gray-500 font-medium">Etiquétanos en Instagram para aparecer aquí 📸</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {partyImages.map((img, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-black group cursor-pointer relative">
            <img 
              src={img} 
              alt="Instagram feed" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t-2 border-black px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest gap-6">
    <div>© 2026 Chilpa'S Bolsas - México</div>
    <div className="flex gap-8">
      <a href="#" className="hover:text-chilpa-accent transition-colors">Privacidad</a>
      <a href="#" className="hover:text-chilpa-accent transition-colors">Términos</a>
      <a href="#" className="hover:text-chilpa-accent transition-colors">Soporte</a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-chilpa-accent selection:text-white">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <CategoryPills />
      
      <main>
        {/* Brands Ticker */}
        <div className="bg-black py-4 overflow-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {Array.from({ length: 21 }).map((_, i) => {
              const words = ["Diversión", "Calidad", "Color"];
              return (
                <span key={i} className="text-white font-display font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                  <Star className="w-3 h-3 text-chilpa-yellow fill-chilpa-yellow" /> {words[i % words.length]}
                </span>
              );
            })}
          </div>
        </div>

        <FeaturedProducts />
        
        {/* Promo Banner */}
        <section className="px-4 sm:px-8 mb-24">
          <div className="max-w-7xl mx-auto bg-chilpa-orange border-2 border-black rounded-[40px] p-12 sm:p-24 flex items-center justify-center text-center relative overflow-hidden neo-shadow">
            <div className="relative z-10">
              <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter mb-8 leading-none uppercase">
                Bolsas que aguantan <br /> <span className="text-white">TODA la fiesta</span>
              </h2>
              <p className="text-xl font-bold mb-10 max-w-2xl mx-auto">
                Material re-utilizable y ecológico que soporta hasta 2kg de dulces y sorpresas.
              </p>
              <button className="bg-black text-white px-12 py-5 rounded-full font-bold text-sm hover:scale-110 transition-transform shadow-2xl uppercase tracking-widest">
                Quiero las mías
              </button>
            </div>
          </div>
        </section>

        <CustomizationCTA />
        
        <SocialSection />

        {/* Benefits Section */}
        <section className="py-24 border-y-2 border-black bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center p-8 bg-chilpa-pink border-2 border-black rounded-3xl neo-shadow">
              <div className="w-20 h-20 bg-white rounded-2xl border-2 border-black flex items-center justify-center mb-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <Star className="w-10 h-10" />
              </div>
              <h3 className="font-display font-black text-2xl mb-4 uppercase tracking-tighter">Diseño Artisanal</h3>
              <p className="text-chilpa-black/70 font-medium">Ilustraciones únicas creadas por artistas locales para Chilpa's.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-chilpa-yellow border-2 border-black rounded-3xl neo-shadow">
              <div className="w-20 h-20 bg-white rounded-2xl border-2 border-black flex items-center justify-center mb-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <Gift className="w-10 h-10" />
              </div>
              <h3 className="font-display font-black text-2xl mb-4 uppercase tracking-tighter">Resistencia Pro</h3>
              <p className="text-chilpa-black/70 font-medium">Olvídate de bolsas rotas. Nuestras bolsas están hechas para durar.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-chilpa-purple border-2 border-black rounded-3xl neo-shadow">
              <div className="w-20 h-20 bg-white rounded-2xl border-2 border-black flex items-center justify-center mb-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <ArrowRight className="w-10 h-10 transform -rotate-45" />
              </div>
              <h3 className="font-display font-black text-2xl mb-4 uppercase tracking-tighter">Envío Express</h3>
              <p className="text-chilpa-black/70 font-medium">Tus bolsas en la puerta de tu casa en menos de 48 horas.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

