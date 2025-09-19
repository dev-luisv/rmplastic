import React from "react";
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
} from "lucide-react";

/**
 * Paleta de marca:
 *  - Navy:  #0B2A3C
 *  - Steel: #0E3952
 *  - Accent:#1B5A7D
 *  - Whats: #25D366
 */
const LOGO_SRC = "/rm-logo.png";

/*  🔧 CONTROLES DEL LOGO CIRCULAR (SOLO IMAGEN Y SALIDA)
    - diameterPx  → diámetro del círculo en píxeles (cambia el tamaño del círculo completo)
    - popOutPx    → cuánto “sale” hacia abajo del header (px). 0 = dentro de la barra
    - paddingPct  → padding interno de la IMAGEN (no del círculo). Baja para agrandar la imagen
    - scale       → escala de la imagen (1.00 normal; >1 más grande; <1 más chica)
    - offsetX/Y   → ajuste fino de la imagen en px
*/
const LOGO_CIRCLE = {
  diameterPx: 84, // ej. 72 / 84 / 96
  popOutPx: 1,    // ej. 0..14 (sale del header)
  paddingPct: 5,  // ej. 4 (más grande) | 8 (más chica)
  scale: 1.1,     // ej. 1.06 más grande | 0.94 más chica
  offsetX: 0,
  offsetY: 0,
};

const CONFIG = {
  tagline: "PLASTIC TRANSFORMATION",
  heroTitle: "Transformación de plástico por inyección",
  heroSubtitle:
    "Fabricamos piezas de alta precisión con maquinaria de última generación, control de calidad integral y tiempos de entrega competitivos.",
  phone: "+52 1 442 187 9365",
  email: "jorgeluisru86@gmail.com",
  location: "Corregidora, Querétaro, México",
  whatsNumber: "5214421879365",
  images: {
    hero: "/prensa550.png",
    empresa1: "/Maquina1.png",
    empresa2: "/Plastico.png",
  },
  empresaLeftFocus: "65% 50%",
  empresaLeftZoom: 1.06,
  brand: { navy: "#0B2A3C", steel: "#0E3952", accent: "#1B5A7D", whats: "#25D366" },
};

const WHATSAPP_NUMBER = CONFIG.whatsNumber;
const WHATSAPP_MESSAGE =
  "Hola, me interesa una cotización. Vengo del sitio web.";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#empresa", label: "Empresa" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/90 border-b border-slate-200 overflow-visible">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* LOGO CIRCULAR (sale un poco de la barra) */}
        <a href="#inicio" className="block">
          <div
            className="
              rounded-full overflow-hidden bg-white ring-2 ring-white shadow-xl
              flex items-center justify-center
            "
            style={{
              width: LOGO_CIRCLE.diameterPx,
              height: LOGO_CIRCLE.diameterPx,
              transform: `translateY(${LOGO_CIRCLE.popOutPx}px)`,
            }}
          >
            {/* 🔧 AJUSTA AQUÍ SOLO LA IMAGEN DEL LOGO (padding/scale/offsets) */}
            <img
              src={LOGO_SRC}
              alt="RM Plastic Transformation"
              className="block h-full w-full object-contain transition-transform"
              style={{
                padding: `${LOGO_CIRCLE.paddingPct}%`,
                transform: `translate(${LOGO_CIRCLE.offsetX}px, ${LOGO_CIRCLE.offsetY}px) scale(${LOGO_CIRCLE.scale})`,
                transformOrigin: "center",
              }}
            />
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

      <div
        id="mobile-menu"
        className="hidden md:hidden border-t border-slate-200 bg-white"
      >
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

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(135deg, ${CONFIG.brand.navy}, ${CONFIG.brand.steel})`,
        }}
      />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-2/3 -z-0 bg-gradient-to-r from-black/35 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
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
            <p className="mt-4 text-white/90 text-lg drop-shadow">
              {CONFIG.heroSubtitle}
            </p>
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
                href="#servicios"
              >
                Ver servicios
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
                className="h-full w-full object-cover object-center block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const servicios = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Diseño y fabricación de moldes",
    desc: "Desde concepto hasta validación. Ajustes, mantenimiento y mejoras continuas.",
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: "Inyección de plásticos (maquila)",
    desc: "Celdas flexibles, múltiples cavidades, cambio rápido y trazabilidad.",
  },
  {
    icon: <PackageCheck className="h-6 w-6" />,
    title: "Acabados, empaque y logística",
    desc: "Montaje, inspección visual, empaques personalizados y distribución.",
  },
];

function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Servicios
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: CONFIG.brand.accent }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Empresa() {
  const img1 =
    CONFIG.images.empresa1 ||
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop";
  const img2 =
    CONFIG.images.empresa2 ||
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop";

  return (
    <section id="empresa" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
        {/* TEXTO dentro de un panel de color (mejor contraste) */}
        <div className="text-[17px]">
          <div
            className="rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #F3F8FC 100%)",
            }}
          >
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: CONFIG.brand.navy }}
            >
              Nuestra empresa
            </h2>

            <p className="mt-3 leading-relaxed" style={{ color: CONFIG.brand.steel }}>
              Somos una empresa orgullosamente mexicana dedicada a la
              fabricación de productos de plástico, enfocada en la satisfacción
              de los clientes y comprometida con el medio ambiente. En la
              medida que nuestros procesos lo permiten usamos materiales
              reciclados para reincorporar desechos plásticos a una nueva vida
              útil.
            </p>

            <p className="mt-3 leading-relaxed" style={{ color: CONFIG.brand.steel }}>
              Fabricamos productos basados en la funcionalidad y la comodidad,
              garantizando que sean altamente competitivos. Avanzar día con día
              en nuestros propósitos constituye nuestra razón de ser.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 border border-slate-200 bg-white/80">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Visión
                </p>
                <p className="mt-1" style={{ color: CONFIG.brand.steel }}>
                  Ser líder reconocido en la industria de inyección de plástico,
                  mediante la fabricación de piezas de calidad que genere orgullo
                  en nuestros clientes, con proveedores sobresalientes y sentido
                  de pertenencia en nuestros empleados.
                </p>
              </div>

              <div className="rounded-2xl p-5 border border-slate-200 bg-white/80">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Misión
                </p>
                <p className="mt-1" style={{ color: CONFIG.brand.steel }}>
                  Fabricar piezas de plástico moldeado por inyección de calidad
                  reconocida nacional e internacionalmente, buscando exceder el
                  nivel de satisfacción de los clientes.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl p-5 border border-slate-200 bg-white/80">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Historia
              </p>
              <p className="mt-1" style={{ color: CONFIG.brand.steel }}>
                Empresa fundada en 2024, situada en el municipio de Corregidora,
                Querétaro. Actualmente prestamos servicios a la industria y a
                terceros.
              </p>
            </div>
          </div>
        </div>

        {/* IMÁGENES pegadas que llenan el recuadro */}
        <div className="rounded-3xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-2 gap-0 h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[420px]">
            <img
              src={img1}
              alt="Planta / proceso 1"
              className="block w-full h-full object-cover will-change-transform transition-transform duration-300"
              style={{
                objectPosition: CONFIG.empresaLeftFocus,
                transform: `scale(${CONFIG.empresaLeftZoom || 1.0})`,
              }}
            />
            <img
              src={img2}
              alt="Planta / proceso 2"
              className="block w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="productos" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Productos
          </h2>
          <p className="mt-2 text-slate-600">
            Algunos ejemplos de líneas que podemos fabricar
          </p>
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
              <h3 className="text-lg font-semibold text-slate-900">
                {p.title}
              </h3>
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

function Contacto() {
  return (
    <section
      id="contacto"
      className="py-16 md:py-24 text-white"
      style={{
        background: `linear-gradient(135deg, ${CONFIG.brand.navy}, ${CONFIG.brand.steel})`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              ¿Listos para cotizar?
            </h2>
            <p className="mt-3 text-white/90">
              Cuéntanos sobre tu proyecto: material, volumen, dimensiones y
              plazo ideal. Te responderemos en menos de 24 horas hábiles.
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
          <form className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nombre</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Empresa</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Tu empresa"
                />
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
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="+52 ..."
                />
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
            <p className="mt-2 text-xs text-slate-500">
              *Esto es un formulario de demostración. Integraremos el envío por
              correo o CRM que prefieras.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="RM Plastic Transformation" className="h-8 w-auto" />
          <span className="text-slate-600 text-sm">
            © {new Date().getFullYear()} RM Plastic Transformation. Todos los
            derechos reservados.
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
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
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

export default function App() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      <Header />
      <Hero />
      <Empresa />
      <Servicios />
      <Productos />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
