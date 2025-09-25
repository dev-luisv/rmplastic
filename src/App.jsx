import React, { useState } from "react";
import {
  Factory,
  Wrench,
  PackageCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Boxes,
  Car,
  Refrigerator,
  Puzzle,
  Home,
  Play,
  X,
} from "lucide-react";

/**
 * RM Plastic Transformation — Landing Page
 * Paleta:
 *  - Navy:  #0B2A3C
 *  - Steel: #0E3952
 *  - Accent:#1B5A7D
 *  - Whats: #25D366
 */

const LOGO_SRC = "/rm-logo.png"; // desde /public

// 🔧 QUICK EDIT
const CONFIG = {
  tagline: "PLASTIC TRANSFORMATION",
  heroTitle: "Transformación de plástico por inyección",
  heroSubtitle:
    "Fabricamos piezas de alta precisión con maquinaria de última generación, control de calidad integral y tiempos de entrega competitivos.",
  phone: "+52 1 442 187 9365",
  email: "jorgeluisru86@gmail.com",
  location: "Corregidora, Querétaro, México",
  whatsNumber: "5214421879365", // para wa.me
  images: {
    hero: "/prensa550.png",
    empresa1: "/empresa1.png",
    empresa2: "/empresa2.png",
    empresa3: "/empresa3.png",
    empresa4: "/empresa4.png",
    gallery: [
      "/g1.jpg",
      "/g2.jpg",
      "/g3.jpg",
      "/g4.jpg",
      "/g5.jpg",
      "/g6.jpg",
      "/g7.jpg",
      "/g8.jpg",
      "/g9.jpg",
      "/g10.jpg",
      "/g11.jpg",
      "/g12.jpg",
    ],
  },
  brand: { navy: "#0B2A3C", steel: "#0E3952", accent: "#1B5A7D", whats: "#25D366" },
};

// WhatsApp
const WHATSAPP_NUMBER = CONFIG.whatsNumber;
const WHATSAPP_MESSAGE = "Hola, me interesa una cotización. Vengo del sitio web.";

/**
 * NAV: Inicio • Empresa • Mercado • Productos • Galería • Contacto
 * (Productos va antes que Galería)
 */
const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#empresa", label: "Empresa" },
  { href: "#mercado", label: "Mercado" },
  { href: "#productos", label: "Productos" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

/* ===================== Header ===================== */
function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/90 border-b border-slate-200 overflow-visible">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* Logo circular que sobresale */}
        <a href="#inicio" className="relative block">
          <div className="relative h-[80px] w-[80px] md:h-[88px] md:w-[88px] rounded-full overflow-hidden bg-white ring-2 ring-white shadow-xl translate-y-3">
            <img src={LOGO_SRC} alt="RM" className="h-full w-full object-contain p-2 bg-[#0B2A3C]" />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-[#0B2A3C] transition font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: CONFIG.brand.navy }}
          >
            Cotizar ahora <ArrowRight size={16} />
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center rounded-xl border px-3 py-2"
          onClick={() => {
            const m = document.getElementById("mobile-menu");
            if (m) m.classList.toggle("hidden");
          }}
        >
          Menú
        </button>
      </div>

      <div id="mobile-menu" className="hidden md:hidden border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-[#0B2A3C] transition font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: CONFIG.brand.navy }}
          >
            Cotizar ahora <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ===================== Hero (overlay debajo del contenido) ===================== */
/* ===================== Hero (arreglo: fondo visible + botones sin oscurecer) ===================== */
function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden scroll-mt-28 md:scroll-mt-32">
      {/* Fondo base (gradiente) */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: `linear-gradient(135deg, ${CONFIG.brand.navy}, ${CONFIG.brand.steel})` }}
      />
      {/* Velo oscuro hacia la izquierda (no toca botones porque está debajo del contenido) */}
      <div className="absolute left-0 top-0 h-full w-[92%] md:w-[78%] z-0 bg-gradient-to-r from-black/35 to-transparent" />

      {/* Contenido por encima */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className="inline-block rounded-full px-3 py-1 text-xs tracking-wider text-white"
              style={{ backgroundColor: CONFIG.brand.accent }}
            >
              {CONFIG.tagline}
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
              {CONFIG.heroTitle}
            </h1>

            <p className="mt-4 text-white/90 text-lg drop-shadow">{CONFIG.heroSubtitle}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white font-semibold"
                style={{ backgroundColor: CONFIG.brand.accent }}
              >
                Solicitar cotización
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20"
                href="#productos"
              >
                Ver productos
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-4 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <ShieldCheck size={18} /> Calidad reconocida a nivel nacional
              </li>
              <li className="flex items-center gap-2">
                <Factory size={18} /> Transformación por inyección
              </li>
              <li className="flex items-center gap-2">
                <Wrench size={18} /> Enfoque en eficiencia y funcionalidad
              </li>
              <li className="flex items-center gap-2">
                <PackageCheck size={18} /> Compromiso con el medio ambiente
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
              <img
                src={CONFIG.images.hero}
                alt="Línea de inyección de plásticos"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-2xl bg-white shadow-xl p-4 flex items-center gap-3">
                <Boxes className="shrink-0" />
                <div>
                  <p className="text-sm font-semibold">+120,000 pzas/mes</p>
                  <p className="text-xs text-slate-600">Capacidad instalada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ===================== Video Modal ===================== */
function VideoModal({ open, onClose, src }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl">
        <button
          className="absolute -top-10 right-0 text-white/90 hover:text-white"
          onClick={onClose}
          aria-label="Cerrar video"
        >
          <X size={28} />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
          <video src={src} controls autoPlay className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

/* ===================== Empresa ===================== */
function Empresa() {
  const [open, setOpen] = useState(false);
  const videoSrc = "/video.mp4";
  const videoCover = "/video-cover.jpg";

  const img1 =
    CONFIG.images.empresa1 ||
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop";
  const img2 =
    CONFIG.images.empresa2 ||
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop";
  const img3 =
    CONFIG.images.empresa3 ||
    "https://images.unsplash.com/photo-1610908958829-559b0b8c2c2c?q=80&w=1600&auto=format&fit=crop";
  const img4 =
    CONFIG.images.empresa4 ||
    "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1600&auto=format&fit=crop";

  const images = [img1, img2, img3, img4];

  return (
    <section id="empresa" className="py-16 md:py-20 bg-white scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Nuestra empresa</h2>
          <p className="mt-3 text-slate-700">
            Somos una empresa orgullosamente mexicana dedicada a la fabricación de productos de
            plástico, enfocada en la satisfacción de los clientes y comprometida con el medio
            ambiente. En la medida que nuestros procesos lo permiten usamos materiales reciclados
            para reincorporar desechos plásticos a una nueva vida útil.
          </p>
          <p className="mt-3 text-slate-700">
            Fabricamos productos basados en la funcionalidad y la comodidad, garantizando que sean
            altamente competitivos. Avanzar día con día en nuestros propósitos constituye nuestra
            razón de ser.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 border border-slate-200">
              <p className="text-xs uppercase tracking-wider text-slate-500">Visión</p>
              <p className="mt-1 text-slate-800">
                Ser líder reconocido en la industria de inyección de plástico, mediante la
                fabricación de piezas de calidad que genere orgullo en nuestros clientes, con
                proveedores sobresalientes y sentido de pertenencia en nuestros empleados.
              </p>
            </div>
            <div className="rounded-2xl p-5 border border-slate-200">
              <p className="text-xs uppercase tracking-wider text-slate-500">Misión</p>
              <p className="mt-1 text-slate-800">
                Fabricar piezas de plástico moldeado por inyección de calidad reconocida nacional e
                internacionalmente, buscando exceder el nivel de satisfacción de los clientes.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl p-5 border border-slate-200">
            <p className="text-xs uppercase tracking-wider text-slate-500">Historia</p>
            <p className="mt-1 text-slate-800">
              Empresa fundada en 2024, situada en el municipio de Corregidora, Querétaro.
              Actualmente prestamos servicios a la industria y a terceros.
            </p>
          </div>
        </div>

        {/* 4 imágenes + video ancho */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="aspect-[4/3]">
                <img src={src} alt={`Planta ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group col-span-2 relative overflow-hidden rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E3952]"
            aria-label="Abrir video de proceso"
          >
            <div className="aspect-[32/9] w-full relative">
              <img
                src={videoCover || images[3]}
                alt="Video cover"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <Play
                className="absolute inset-0 m-auto drop-shadow"
                size={56}
                color="#fff"
                fill="white"
                strokeWidth={1}
              />
            </div>
          </button>

          <VideoModal open={open} onClose={() => setOpen(false)} src={videoSrc} />
        </div>
      </div>
    </section>
  );
}

/* ===================== Mercado ===================== */
function Mercado() {
  const items = [
    { icon: <Car className="h-6 w-6" />, title: "Automotriz" },
    { icon: <Refrigerator className="h-6 w-6" />, title: "Electrodomésticos" },
    { icon: <Puzzle className="h-6 w-6" />, title: "Juguete" },
    { icon: <Home className="h-6 w-6" />, title: "Artículos del hogar" },
  ];

  return (
    <section id="mercado" className="py-16 md:py-24 scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Nuestro mercado</h2>
          <p className="mt-2 text-slate-600">
            Sectores donde participamos con piezas de inyección de plástico
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: CONFIG.brand.accent }}
              >
                {it.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Productos ===================== */
const productos = [
  {
    title: "Tapas y cubiertas",
    desc: "Piezas de alta resistencia y ajuste fino.",
    icon: <Boxes className="h-6 w-6" />,
  },
  {
    title: "Carcasas y gabinetes",
    desc: "Componentes para electrónica y electrodomésticos.",
    icon: <Factory className="h-6 w-6" />,
  },
  {
    title: "Accesorios plásticos",
    desc: "Insertos, separadores, sujetadores y más.",
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: "Artículos para el hogar",
    desc: "Diseños ergonómicos y durables.",
    icon: <PackageCheck className="h-6 w-6" />,
  },
];

function Productos() {
  return (
    <section id="productos" className="py-16 md:py-24 scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Productos</h2>
          <p className="mt-2 text-slate-600">Algunos ejemplos de líneas que podemos fabricar</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: CONFIG.brand.accent }}
              >
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
              <a
                href="#contacto"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: CONFIG.brand.accent }}
              >
                Solicitar cotización <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Galería ===================== */
function Galeria() {
  const g = CONFIG.images.gallery || [];
  return (
    <section id="galeria" className="py-16 md:py-24 bg-slate-50 scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Galería</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {g.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="aspect-[12/11]">
                <img
                  src={src}
                  alt={`gal-${i + 1}`}
                  className="h-full w-full object-cover"
                  style={{ transform: "scale(1.0)", transformOrigin: "center" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Contacto ===================== */
function Contacto() {
  return (
    <section
      id="contacto"
      className="py-16 md:py-24 text-white scroll-mt-28 md:scroll-mt-32"
      style={{ background: `linear-gradient(135deg, ${CONFIG.brand.navy}, ${CONFIG.brand.steel})` }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">¿Listos para cotizar?</h2>
            <p className="mt-3 text-white/90">
              Cuéntanos sobre tu proyecto: material, volumen, dimensiones y plazo ideal.
            </p>
            <div className="mt-6 space-y-3 text-white/90">
              <p className="flex items-center gap-2">
                <Phone size={18} /> {CONFIG.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} /> {CONFIG.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} /> {CONFIG.location}
              </p>
            </div>
          </div>

          <form className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow min-h-[420px] flex flex-col">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nombre</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="text-sm font-medium">Empresa</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Tu empresa" />
              </div>
              <div>
                <label className="text-sm font-medium">Correo</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="tucorreo@dominio.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Teléfono</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="+52 ..." />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Mensaje</label>
              <textarea
                className="mt-1 w-full rounded-xl border px-3 py-2 h-28"
                placeholder="Cuéntanos sobre el tipo de pieza, material, volumen y tiempos"
              />
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-xl text-white px-5 py-3 font-semibold hover:opacity-95"
              style={{ backgroundColor: CONFIG.brand.accent }}
            >
              Enviar
            </button>
            <p className="mt-2 text-xs text-slate-500">*Formulario de demostración.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ===================== Footer / WhatsApp ===================== */
function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="RM Plastic Transformation" className="h-8 w-auto rounded-full bg-[#0B2A3C] p-1" />
          <span className="text-slate-600 text-sm">
            © {new Date().getFullYear()} RM Plastic Transformation. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">
            Aviso de privacidad
          </a>
          <a href="#contacto" className="hover:text-slate-900">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 shadow-xl text-white font-semibold"
      style={{ backgroundColor: CONFIG.brand.whats }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

/* ===================== App ===================== */
export default function App() {
  return (
    <main className="min-h-dvh bg-white text-slate-900 scroll-smooth">
      <Header />
      <Hero />
      <Empresa />
      <Mercado />
      <Productos />
      <Galeria />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
