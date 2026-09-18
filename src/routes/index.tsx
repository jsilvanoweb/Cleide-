import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Instagram, MessageCircle, Sparkles, Star, Mail, MapPin, Ruler, Flower2, Crown, Lock, Leaf, Activity, Wind, Sun, Hand, Footprints, PhoneCall, Flame, Menu, X, ChevronDown, Clock, Heart } from "lucide-react";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import heroRosto from "@/assets/hero-rosto-2.png";
import sobreImg from "@/assets/hero-cleide.jpg";
import massagemImg from "@/assets/massagemfoto1.png";
import rostoJpg from "@/assets/hero-rosto.jpg";
import model1 from "@/assets/model-1.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";
import cleide1 from "@/assets/5b192776-5528-4cc6-9823-ccc31a3f7742.jpg";
import cleide2 from "@/assets/63248efb-49ea-4d40-b9ba-ae9cfbd4ad6d.jpg";
import cleide3 from "@/assets/6856173e-ccd1-44b9-ab65-6944a48b4c91.jpg";
import cleide4 from "@/assets/8490ca91-5094-4537-bc2c-bdeda8ce1c89.jpg";
import cleide5 from "@/assets/9da98a3d-5631-4f2d-8b1b-6a3f9ec41dc9 (1).jpg";
import cleide6 from "@/assets/e2e9cb9c-883b-4a24-82bb-4b92c404eb07.jpg";
import ventosaterapiaImg from "@/assets/ventosaterapia.png";
import coneHinduImg from "@/assets/cone-hindu-vortex.jpg";
import massagemMixImg from "@/assets/massagem_mix_1780024743588.png";
import alinhamentoImg from "@/assets/alinhamento_artic_1780024756650.png";
import tantricaImg from "@/assets/massagem_tantrica_1780024771395.png";
import nuruImg from "@/assets/massagem_nuru_1780024785750.png";
import massagemPesImg from "@/assets/massagem_pes_1780025767083.png";
import coneHinduNewImg from "@/assets/cone_hindu_1780024799809.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mônica Silva — Modelo Profissional | Portfólio Exclusivo" },
      { name: "description", content: "Portfólio oficial de Mônica Silva. Presença, atitude e elegância em campanhas, editoriais e produções profissionais." },
    ],
  }),
  component: Index,
});

const heroPhotos = [
  { img: foto1, title: "Beleza que Hipnotiza", sub: "Olhar, presença e atitude em cada frame." },
];



const coneHinduData = [
  {
    title: "Um pouco de história",
    content: "A terapia do Cone Hindu é uma sabedoria milenar passada de geração em geração. Originária de antigos povos curandeiros e tradições orientais, ela era usada como uma ferramenta poderosa para limpar os canais energéticos e físicos da cabeça, restabelecendo a clareza mental e a harmonia espiritual."
  },
  {
    title: "Como é feito?",
    content: "O cone é fabricado artesanalmente, utilizando materiais 100% naturais como cera de abelha, algodão puro e, muitas vezes, enriquecido com óleos essenciais e própolis. Esse formato de funil permite que a fumaça e o calor circulem suavemente."
  },
  {
    title: "Como funciona?",
    content: "A queima do cone cria um leve vácuo no interior do funil e um calor ameno. Esse efeito térmico suave e a leve sucção ajudam a amolecer mucos e cerúmen, além de estimular a circulação de energia e desobstruir os canais do ouvido, nariz e garganta."
  },
  {
    title: "Como aplicar?",
    content: "A aplicação é indolor e extremamente relaxante. O paciente deita-se confortavelmente de lado. A base menor do cone é suavemente posicionada na entrada do canal auditivo (sem penetrar profundamente) e a extremidade superior é acesa. O terapeuta acompanha todo o processo garantindo segurança e conforto."
  },
  {
    title: "Indicações",
    content: "É amplamente indicado para excesso de cerúmen, zumbidos no ouvido, dores de cabeça, enxaquecas, sinusite, rinite, gripes e resfriados recorrentes, insônia, e para quem busca alívio de tensões mentais."
  },
  {
    title: "Outros usos",
    content: "Além do ouvido, a técnica do cone pode ser adaptada para aplicação em pontos específicos do corpo (como chácaras ou pontos de dor) para promover aquecimento local, liberação de energia estagnada e relaxamento muscular."
  },
  {
    title: "Benefícios Terapêuticos",
    content: "Promove uma profunda desintoxicação respiratória, melhora a audição e o olfato, reduz a pressão na região da cabeça, alivia alergias respiratórias e proporciona um estado de relaxamento profundo e paz interior."
  }
];

function AccordionItem({ title, children, isOpen, onToggle }: { title: string, children: React.ReactNode, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="border-b border-red-900/30 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-white/90 text-lg font-bold tracking-wide group-hover:text-red-400 transition-colors pr-4">{title}</span>
        <ChevronDown className={`w-5 h-5 text-red-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <p className="text-base text-white/60 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

function Index() {
  const [openConeIndex, setOpenConeIndex] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroPhotos.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050000] overflow-hidden text-foreground">
      {/* BACKGROUND DARK RED GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#1a0002] via-[#080000] to-black" />
      
      {/* BEAUTIFUL SMOOTH RED-TO-BLACK GRADIENT FROM LEFT TO RIGHT */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_left,rgba(180,0,0,0.4)_0%,transparent_60%)]" />

      {/* STUDIO LIGHTS REFLECTIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Giant red glow between text and model */}
        <div className="absolute w-[80vh] h-[80vh] bg-red-900/5 blur-[130px] rounded-full translate-x-[15vw]" />
        {/* Vertical light beam / flare */}
        <div className="absolute w-[200px] h-[150vh] bg-gradient-to-b from-transparent via-red-900/10 to-transparent blur-[80px] rotate-[20deg] translate-x-[25vw]" />
      </div>

      {/* CONTENT WITH Z-INDEX */}
      <div className="relative z-10">
        {/* NAV */}
        <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4">
          <div className="w-full max-w-[1300px] px-6 flex items-center justify-between relative z-20">
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
              <a href="#top" className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-red-600 grid place-items-center shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                  <Sparkles className="h-4 w-4 text-white" />
                </span>
                <span className="font-display text-lg tracking-widest uppercase text-white/90">Ana Terapeuta</span>
              </a>
            </div>

            {/* Center: Nav Links */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium text-white/80">
              <a href="#sobre" className="hover:text-white transition">Sobre</a>
              <Link to="/massagem" className="hover:text-white transition">Massagem</Link>
              <a href="#portfolio" className="hover:text-white transition">Portfólio</a>
              <a href="#destaques" className="hover:text-white transition">Destaques</a>
              <a href="#contato" className="hover:text-white transition">Contato</a>
            </nav>

            {/* Right: WhatsApp Button & Mobile Toggle */}
            <div className="flex-1 flex justify-end items-center gap-4">
              <a
                href="https://wa.me/5511964531211"
                target="_blank" rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-black border border-red-500/30 hover:from-red-500 hover:to-black px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              
              {/* Hamburger Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white/80 hover:text-white p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-[110%] left-4 right-4 rounded-3xl bg-[#0a0000]/95 backdrop-blur-xl border border-red-900/30 p-6 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-fade-up md:hidden z-10">
              <nav className="flex flex-col gap-6 text-base font-medium text-white/80 text-center">
                <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Sobre</a>
                <Link to="/massagem" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Massagem</Link>
                <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Portfólio</a>
                <a href="#destaques" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Destaques</a>
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Contato</a>
              </nav>
              <a
                href="https://wa.me/5511964531211"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-black hover:from-red-500 hover:to-black border border-red-500/30 px-6 py-4 text-sm font-bold tracking-widest text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] transition uppercase w-full"
              >
                <MessageCircle className="h-5 w-5" /> Agendar Agora
              </a>
            </div>
          )}
        </header>

        {/* HERO */}
        <section id="top" className="relative h-[65vh] min-h-[550px] w-full overflow-hidden">
          {/* "FLORZINHA" / BOKEH PATTERN (LATERAIS) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-between items-center px-4 md:px-12 opacity-[0.06]">
            {/* Left side */}
            <div className="flex flex-col gap-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-red-600 blur-[2px] mix-blend-screen" />
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-red-600 blur-[3px] mix-blend-screen translate-x-8" />
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-red-600 blur-[2px] mix-blend-screen translate-x-2" />
            </div>
            {/* Right side */}
            <div className="flex flex-col gap-12 mt-32">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-red-600 blur-[2px] mix-blend-screen -translate-x-6" />
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-red-600 blur-[3px] mix-blend-screen" />
            </div>
          </div>

          {/* ROSTO MARCA D'ÁGUA SURGINDO DO FUNDO */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-full md:w-[90%] lg:w-[80%] z-0 pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at 75% 50%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.3) 40%, transparent 70%)',
              maskImage: 'radial-gradient(ellipse at 75% 50%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.3) 40%, transparent 70%)'
            }}
          >
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: `url(${heroRosto})`,
                backgroundPosition: 'right 20%',
                backgroundSize: '85%',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.1) contrast(1.15)',
                mixBlendMode: 'screen'
              }}
            />
          </div>

          <div className="relative z-10 h-full max-w-[1300px] mx-auto px-6 flex flex-col justify-center pt-16 md:pt-24">
            <div className="max-w-2xl mt-8 md:mt-12">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] drop-shadow-[0_0_25px_rgba(220,38,38,0.3)] animate-fade-up">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent font-light">Conheça a Terapeuta Ana</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl animate-fade-up font-light leading-relaxed">
                Olá, seja bem-vindo! Sou massoterapeuta profissional e atendo ele e ela. Meu espaço é aconchegante, discreto e tranquilo, com atendimento realizado em um confortável futon.
              </p>

              <div className="mt-8 md:mt-10 flex flex-wrap gap-2 md:gap-4 animate-fade-up">
                <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-gradient-to-r from-red-600 to-black hover:from-red-500 hover:to-black border border-red-500/30 px-4 py-2.5 md:px-8 md:py-4 text-[11px] md:text-sm font-medium text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition">
                  <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4" /> Agendar no WhatsApp
                </a>
                <Link to="/massagem" className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-gradient-to-r from-red-600 to-black hover:from-red-500 hover:to-black border border-red-500/30 px-4 py-2.5 md:px-8 md:py-4 text-[11px] md:text-sm font-medium text-white/90 shadow-[0_0_20px_rgba(220,38,38,0.4)] transition">
                  Técnica de massagem
                </Link>
              </div>

              {/* MARCA D'ÁGUA SURGINDO DO FUNDO */}
              <div className="absolute bottom-4 left-0 right-0 w-full overflow-hidden z-20 pointer-events-none">
                <div className="flex w-max animate-[marquee_30s_linear_infinite]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 px-4">
                      <span className="flex items-center gap-2 text-white/50 font-display tracking-[0.3em] uppercase text-[10px] md:text-xs whitespace-nowrap">
                        <Leaf className="w-3.5 h-3.5 text-red-500/50" /> MIX DE MASSAGEM
                      </span>
                      <span className="flex items-center gap-2 text-white/50 font-display tracking-[0.3em] uppercase text-[10px] md:text-xs whitespace-nowrap">
                        <Sparkles className="w-3.5 h-3.5 text-red-500/50" /> MASSAGISTA TÂNTRICA
                      </span>
                      <span className="flex items-center gap-2 text-white/50 font-display tracking-[0.3em] uppercase text-[10px] md:text-xs whitespace-nowrap">
                        <Sun className="w-3.5 h-3.5 text-red-500/50" /> MASSAGEM NURU
                      </span>
                      <span className="flex items-center gap-2 text-white/50 font-display tracking-[0.3em] uppercase text-[10px] md:text-xs whitespace-nowrap">
                        <Activity className="w-3.5 h-3.5 text-red-500/50" /> ALINHAMENTO ARTICULAÇÃO
                      </span>
                      <span className="flex items-center gap-2 text-white/50 font-display tracking-[0.3em] uppercase text-[10px] md:text-xs whitespace-nowrap">
                        <Flame className="w-3.5 h-3.5 text-red-500/50" /> CONE HINDU
                      </span>
                    </div>
                  ))}
                </div>
                <style>{`
                  @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                  }
                `}</style>
              </div>

            </div>
          </div>
        </section>



        {/* DESTAQUE: MASSAGEM RELAXANTE & SOBRE */}
        <section className="relative w-full py-24 md:py-32 flex items-center overflow-hidden z-20">
          {/* Fundo decorativo */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-[1300px] mx-auto px-6 w-full relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            
            {/* Esquerda: Imagem */}
            <div className="relative w-full h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] border border-red-900/30 group">
              <img 
                src={foto3} 
                alt="Massagem Relaxante no Futon" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/40 to-transparent"></div>
              
              {/* Info Flutuante sobre a imagem */}
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center border border-red-500/30">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm">Local Particular</h4>
                    <p className="text-white/60 text-xs">Bairro Ipiranga (Com Estacionamento)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center border border-red-500/30">
                    <Activity className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm">Horário de Atendimento</h4>
                    <p className="text-white/60 text-xs">Seg a Sáb • 09:00 às 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direita: Textos */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-red-950/50 border border-red-900/50 text-red-400 text-[10px] uppercase tracking-widest font-bold mb-4">
                  Especialidade
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.1] mb-6 drop-shadow-md">
                  Massagem Relaxante<br/>
                  <span className="text-red-500 italic font-light">& Realinhamento</span>
                </h2>
                <h3 className="text-xl text-white/90 font-light mb-6 leading-relaxed">
                  Ideal para quem busca livrar-se da fadiga muscular e do estresse emocional.
                </h3>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-10">
                  Toques profundos em tecido muscular e ligamentar realinham a coluna, liberam a bacia pélvica e promovem a soltura da musculatura dos glúteos, coxas e panturrilhas. Uma massagem extremamente prazerosa e de profundo relaxamento.
                </p>
              </div>

              {/* Box da Terapeuta */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-red-950/20 to-black/40 border border-red-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10"><Sparkles className="w-24 h-24 text-red-500" /></div>
                <h4 className="text-2xl font-display text-white mb-2 relative z-10">Conheça a Terapeuta Ana</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
                  "Olá, seja bem-vindo! Sou massoterapeuta profissional e atendo ele e ela. Meu espaço é aconchegante, discreto e tranquilo, com atendimento realizado em um confortável futon."
                </p>
                
                <div className="md:hidden flex flex-col gap-3 mb-6 relative z-10 text-xs text-white/60">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-500"/> Ipiranga (Com Estacionamento)</div>
                  <div className="flex items-center gap-2"><Activity className="w-4 h-4 text-red-500"/> Seg a Sáb das 09:00 às 20:00</div>
                </div>

                <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-black hover:from-red-500 hover:to-black border border-red-500/30 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all relative z-10">
                  <PhoneCall className="w-4 h-4" /> (11) 96453-1211
                </a>
              </div>

            </div>

          </div>
        </section>



        <section className="relative w-full py-24 md:py-32 flex items-center overflow-hidden z-20">
          {/* Luzes de fundo */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-800/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1300px] mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-16 lg:gap-28 items-center">
            
            {/* Esquerda: Textos e Ícones */}
            <div className="flex flex-col items-start justify-center order-2 md:order-1 relative">
              {/* Badge "Relax" */}
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="w-8 h-8 text-red-500" />
                <span className="font-display text-4xl md:text-5xl italic text-red-500">Relaxe</span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-white/60 font-bold mb-8 ml-2">
                REJUVENESÇA • RENOVE-SE
              </div>
              
              <h2 className="text-6xl md:text-[5rem] lg:text-[6rem] font-display font-medium text-white leading-none mb-4 drop-shadow-[0_0_15px_rgba(220,38,38,0.2)] tracking-tighter">
                MASSAGEM
              </h2>
              <p className="text-white/80 text-xl md:text-2xl font-light mb-12 ml-1">
                Cure seu corpo, Acalme sua mente
              </p>

              {/* 4 Icons Grid */}
              <div className="grid grid-cols-4 gap-4 w-full mb-10 border-b border-red-900/30 pb-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full border border-red-900/50 bg-black/40 flex items-center justify-center mb-3 group-hover:border-red-500 transition-colors shadow-card">
                    <Wind className="w-7 h-7 text-red-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Relaxamento</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full border border-red-900/50 bg-black/40 flex items-center justify-center mb-3 group-hover:border-red-500 transition-colors shadow-card">
                    <Activity className="w-7 h-7 text-red-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Alívio da Dor</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full border border-red-900/50 bg-black/40 flex items-center justify-center mb-3 group-hover:border-red-500 transition-colors shadow-card">
                    <Leaf className="w-7 h-7 text-red-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Alívio do Stress</span>
                </div>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full border border-red-900/50 bg-black/40 flex items-center justify-center mb-3 group-hover:border-red-500 transition-colors shadow-card">
                    <Sun className="w-7 h-7 text-red-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Bem-estar</span>
                </div>
              </div>



              <div className="flex flex-col w-full">
                <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-red-600 to-black hover:from-red-500 hover:to-black border border-red-500/30 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all">
                  <Leaf className="w-4 h-4" /> Agende sua Sessão Hoje
                </a>
                
                <div className="flex items-center gap-4 mt-6 text-white/50 text-xs uppercase tracking-widest font-medium">
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                  <span>Seu bem-estar é nossa prioridade</span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                  <div className="flex items-center gap-3 bg-red-900/20 border border-red-900/50 rounded-full px-6 py-3">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-white/90">WhatsApp / Ligar</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-full px-6 py-3">
                    <PhoneCall className="w-5 h-5 text-white/70" />
                    <span className="text-lg font-bold tracking-wider text-white">(11) 96453-1211</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Direita: Imagem Principal com Curvas e Badge */}
            <div className="relative w-full h-[600px] lg:h-[800px] flex items-center justify-center order-1 md:order-2 mt-10 md:mt-0">
              
              <div 
                className="relative w-full h-full overflow-hidden shadow-neon border-4 border-red-900/50 z-10"
                style={{
                  // Curvas arredondadas similares a uma folha/gota que combina com a curva esquerda da imagem
                  borderRadius: "15rem 15rem 15rem 3rem"
                }}
              >
                <img 
                  src={massagemImg} 
                  alt="Sessão de Massagem" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" />
              </div>

              {/* Badge Flutuante Circular */}
              <div className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 w-48 h-48 lg:w-56 lg:h-56 rounded-full glass border border-red-500/30 flex flex-col items-center justify-center text-center p-6 shadow-[0_0_40px_rgba(220,38,38,0.3)] z-20 animate-float">
                <span className="text-sm lg:text-base font-bold text-white uppercase tracking-widest mb-3">Massagem</span>
                <div className="w-8 h-[1px] bg-red-500/50 mb-3" />
                <span className="text-xs lg:text-sm italic font-display text-red-200 leading-snug">Cuidado Completo,<br/>Relaxamento Total</span>
                <Leaf className="w-4 h-4 text-red-500 mt-2" />
              </div>

              {/* Acessórios extras de luz para não ficar estático */}
              <div className="absolute top-1/4 -right-10 w-32 h-32 bg-red-600/30 blur-[60px] rounded-full" />
            </div>

          </div>
        </section>
        {/* NOVA SESSÃO: TÉCNICAS DE MASSAGEM */}
        <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden z-20 flex flex-col items-center">
          <div className="max-w-[1300px] mx-auto w-full relative z-10 flex flex-col md:flex-row gap-12 lg:gap-20">
            
            {/* Lista de Técnicas */}
            <div className="flex-1 flex flex-col">
              {/* Título */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-12">
                <Leaf className="w-6 h-6 text-red-500" />
                <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-wider">
                  NOSSAS TÉCNICAS
                </h2>
                <Leaf className="w-6 h-6 text-red-500 rotate-180" />
              </div>

              {/* Itens */}
              <div className="flex flex-col gap-6">
                
                {/* Item 1 */}
                <div className="flex w-full h-[200px] sm:h-[220px] bg-gradient-to-r from-[#0a0000] to-black rounded-3xl border border-red-900/30 border-r-2 border-r-red-500 shadow-[2px_0_10px_rgba(220,38,38,0.3)] group relative transition-transform hover:-translate-y-1">
                  {/* Left Image */}
                  <div className="w-1/3 md:w-[250px] shrink-0 relative overflow-hidden rounded-l-3xl">
                    <img src={massagemMixImg} alt="Massoterapia Mix" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0000] opacity-90 mix-blend-overlay"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-8 relative">
                    <div className="pr-12 md:pr-36">
                      <h3 className="text-base md:text-xl font-display font-medium text-white tracking-widest uppercase mb-1 md:mb-2 group-hover:text-red-400 transition-colors">Massoterapia Mix</h3>
                      <p className="text-xs md:text-sm text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed">
                        Combinação perfeita de técnicas relaxantes e terapêuticas para um equilíbrio completo do corpo e da mente.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 30 Minutos
                      </div>
                      <div className="hidden md:block w-[1px] h-4 bg-red-900/50"></div>
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 1 Hora
                      </div>
                    </div>

                    {/* Icon Right Center */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 w-12 h-12 md:w-20 md:h-20 rounded-full border border-red-500/30 flex items-center justify-center bg-[#150000] shadow-[0_0_30px_rgba(220,38,38,0.5)] z-10">
                       <Wind className="w-6 h-6 md:w-10 md:h-10 text-red-400" />
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex w-full h-[200px] sm:h-[220px] bg-gradient-to-r from-[#0a0000] to-black rounded-3xl border border-red-900/30 border-r-2 border-r-red-500 shadow-[2px_0_10px_rgba(220,38,38,0.3)] group relative transition-transform hover:-translate-y-1">
                  <div className="w-1/3 md:w-[250px] shrink-0 relative overflow-hidden rounded-l-3xl">
                    <img src={alinhamentoImg} alt="Alinhamento Articulação" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0000] opacity-90 mix-blend-overlay"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-8 relative">
                    <div className="pr-12 md:pr-36">
                      <h3 className="text-base md:text-xl font-display font-medium text-white tracking-widest uppercase mb-1 md:mb-2 group-hover:text-red-400 transition-colors">Alinhamento Articulação</h3>
                      <p className="text-xs md:text-sm text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed">
                        Foco em restaurar a mobilidade e aliviar tensões profundas através de ajustes corporais precisos.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 30 Minutos
                      </div>
                      <div className="hidden md:block w-[1px] h-4 bg-red-900/50"></div>
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 1 Hora
                      </div>
                    </div>
                    {/* Icon Right Center */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 w-12 h-12 md:w-20 md:h-20 rounded-full border border-red-500/30 flex items-center justify-center bg-[#150000] shadow-[0_0_30px_rgba(220,38,38,0.5)] z-10">
                       <Activity className="w-6 h-6 md:w-10 md:h-10 text-red-400" />
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex w-full h-[200px] sm:h-[220px] bg-gradient-to-r from-[#0a0000] to-black rounded-3xl border border-red-900/30 border-r-2 border-r-red-500 shadow-[2px_0_10px_rgba(220,38,38,0.3)] group relative transition-transform hover:-translate-y-1">
                  <div className="w-1/3 md:w-[250px] shrink-0 relative overflow-hidden rounded-l-3xl">
                    <img src={tantricaImg} alt="Tântrica Sensorial Mútua" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0000] opacity-90 mix-blend-overlay"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-8 relative">
                    <div className="pr-12 md:pr-36">
                      <h3 className="text-base md:text-xl font-display font-medium text-white tracking-widest uppercase mb-1 md:mb-2 group-hover:text-red-400 transition-colors">Tântrica Sensorial Mútua</h3>
                      <p className="text-xs md:text-sm text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed">
                        Uma experiência profunda de conexão, despertando a energia vital e todos os sentidos de forma inesquecível.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 30 Minutos
                      </div>
                      <div className="hidden md:block w-[1px] h-4 bg-red-900/50"></div>
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 1 Hora
                      </div>
                    </div>
                    {/* Icon Right Center */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 w-12 h-12 md:w-20 md:h-20 rounded-full border border-red-500/30 flex items-center justify-center bg-[#150000] shadow-[0_0_30px_rgba(220,38,38,0.5)] z-10">
                       <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-red-400" />
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex w-full h-[200px] sm:h-[220px] bg-gradient-to-r from-[#0a0000] to-black rounded-3xl border border-red-900/30 border-r-2 border-r-red-500 shadow-[2px_0_10px_rgba(220,38,38,0.3)] group relative transition-transform hover:-translate-y-1">
                  <div className="w-1/3 md:w-[250px] shrink-0 relative overflow-hidden rounded-l-3xl">
                    <img src={nuruImg} alt="Nuru" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0000] opacity-90 mix-blend-overlay"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-8 relative">
                    <div className="pr-12 md:pr-36">
                      <h3 className="text-base md:text-xl font-display font-medium text-white tracking-widest uppercase mb-1 md:mb-2 group-hover:text-red-400 transition-colors">Nuru</h3>
                      <p className="text-xs md:text-sm text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed">
                        Técnica oriental com gel especial, proporcionando deslizamento suave e relaxamento corporal absoluto.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 30 Minutos
                      </div>
                      <div className="hidden md:block w-[1px] h-4 bg-red-900/50"></div>
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 1 Hora
                      </div>
                    </div>
                    {/* Icon Right Center */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 w-12 h-12 md:w-20 md:h-20 rounded-full border border-red-500/30 flex items-center justify-center bg-[#150000] shadow-[0_0_30px_rgba(220,38,38,0.5)] z-10">
                       <Sun className="w-6 h-6 md:w-10 md:h-10 text-red-400" />
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex w-full h-[200px] sm:h-[220px] bg-gradient-to-r from-[#0a0000] to-black rounded-3xl border border-red-900/30 border-r-2 border-r-red-500 shadow-[2px_0_10px_rgba(220,38,38,0.3)] group relative transition-transform hover:-translate-y-1">
                  <div className="w-1/3 md:w-[250px] shrink-0 relative overflow-hidden rounded-l-3xl">
                    <img src={coneHinduNewImg} alt="Cone Hindu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0000] opacity-90 mix-blend-overlay"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-8 relative">
                    <div className="pr-12 md:pr-36">
                      <h3 className="text-base md:text-xl font-display font-medium text-white tracking-widest uppercase mb-1 md:mb-2 group-hover:text-red-400 transition-colors">Cone Hindu</h3>
                      <p className="text-xs md:text-sm text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed">
                        Terapia milenar de desobstrução, purificação e alinhamento energético, promovendo clareza mental e bem-estar profundo.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 30 Minutos
                      </div>
                      <div className="hidden md:block w-[1px] h-4 bg-red-900/50"></div>
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500" /> 1 Hora
                      </div>
                    </div>
                    {/* Icon Right Center */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 w-12 h-12 md:w-20 md:h-20 rounded-full border border-red-500/30 flex items-center justify-center bg-[#150000] shadow-[0_0_30px_rgba(220,38,38,0.5)] z-10">
                       <Flame className="w-6 h-6 md:w-10 md:h-10 text-red-400" />
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Botão Agendar no final da lista */}
              <div className="mt-12 flex justify-center md:justify-start">
                <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-red-500/50 hover:bg-red-950/40 px-8 py-3.5 text-xs tracking-widest text-white font-bold transition">
                  <MessageCircle className="w-4 h-4 text-green-400" /> AGENDE SUA SESSÃO
                </a>
              </div>
            </div>

            {/* Painel Direito (Poster) */}
            <div className="w-full lg:w-[400px] shrink-0 border-t lg:border-t-0 lg:border-l border-red-900/30 pt-12 lg:pt-0 lg:pl-12 flex flex-col gap-6">
              <div className="w-full bg-gradient-to-b from-[#0a0000] to-black rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.15),_2px_0_10px_rgba(220,38,38,0.3)] flex flex-col relative group">
                
                {/* Overlay da Borda (Garante que a imagem não cubra a borda no hover) */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-red-900/50 border-r-2 border-r-red-500 pointer-events-none z-50"></div>

                {/* Imagem Superior */}
                <div className="relative h-64 w-full shrink-0 overflow-hidden">
                  <img src={massagemMixImg} alt="Motivos para Massagem" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0000]/80 to-[#0a0000]"></div>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col items-center px-8 pb-10 -mt-24">
                  
                  {/* Título Principal */}
                  <h3 className="text-[2.5rem] md:text-[3rem] font-display font-medium text-white text-center leading-[1.1] mb-8 drop-shadow-md">
                     MOTIVOS<br/>
                     <span className="text-xl md:text-2xl font-light italic text-red-400">para marcar sua</span><br/>
                     MASSAGEM
                  </h3>

                  {/* Caixas de Motivos */}
                  <div className="flex flex-col gap-4 w-full mb-10">
                     <div className="bg-gradient-to-r from-red-950/40 to-black text-white/90 py-4 px-6 rounded-2xl text-center shadow-lg border border-red-900/50 text-sm md:text-base backdrop-blur-sm transition-colors hover:border-red-500/50">
                        Ajuda a reduzir o <span className="font-bold text-white">estresse</span>
                     </div>
                     <div className="bg-gradient-to-r from-red-950/40 to-black text-white/90 py-4 px-6 rounded-2xl text-center shadow-lg border border-red-900/50 text-sm md:text-base backdrop-blur-sm transition-colors hover:border-red-500/50">
                        Fortalecer o sistema <span className="font-bold text-white">imunológico</span>
                     </div>
                     <div className="bg-gradient-to-r from-red-950/40 to-black text-white/90 py-4 px-6 rounded-2xl text-center shadow-lg border border-red-900/50 text-sm md:text-base backdrop-blur-sm transition-colors hover:border-red-500/50">
                        Melhora a <span className="font-bold text-white">flexibilidade</span> corporal
                     </div>
                  </div>

                  {/* Rodapé do Pôster (Profissional) */}
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="w-14 h-14 rounded-full border-2 border-red-500 overflow-hidden shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                        <img src={rostoJpg} alt="Cleide Silva" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-white font-bold tracking-widest text-sm uppercase">Cleide Silva</span>
                        <span className="text-red-400 text-[10px] tracking-widest uppercase font-bold">Massoterapeuta</span>
                     </div>
                  </div>

                </div>
              </div>

              {/* Segundo Pôster: Benefícios da Massagem */}
              <div className="w-full h-[600px] bg-gradient-to-b from-[#0a0000] to-black rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.15),_2px_0_10px_rgba(220,38,38,0.3)] flex flex-col relative group">
                
                {/* Overlay da Borda (Garante que a imagem não cubra a borda no hover) */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-red-900/50 border-r-2 border-r-red-500 pointer-events-none z-50"></div>

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img src={massagemPesImg} alt="Benefícios da Massagem" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0000]/80 via-transparent to-[#0a0000]/90"></div>
                  <div className="absolute inset-0 bg-red-950/30 mix-blend-overlay"></div>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 p-8 w-full h-full flex flex-col">
                  {/* Título Principal */}
                  <h3 className="text-[2.5rem] font-display font-medium text-white text-center leading-tight mb-8 drop-shadow-md">
                     <span className="text-sm font-light tracking-widest block mb-1">Benefícios da massagem de</span>
                     relaxamento
                  </h3>

                  {/* Textos Flutuantes Verticais */}
                  <div className="flex-1 relative w-full mt-4">
                     {/* Item 1 */}
                     <div className="absolute top-[0%] left-0 flex flex-col items-center">
                        <span className="text-white font-medium text-sm drop-shadow-md text-center leading-tight mb-2">traz sensação<br/>de paz</span>
                        <div className="w-[1px] h-12 bg-red-500/50"></div>
                        <Star className="w-3 h-3 text-red-500 mt-1" />
                     </div>

                     {/* Item 2 */}
                     <div className="absolute top-[20%] right-0 flex items-center gap-3">
                        <Star className="w-3 h-3 text-red-500" />
                        <div className="w-8 h-[1px] bg-red-500/50"></div>
                        <span className="text-white font-medium text-sm drop-shadow-md text-right leading-tight">reduz os níveis de stress<br/>e tensão emocional</span>
                     </div>

                     {/* Item 3 */}
                     <div className="absolute top-[50%] right-[5%] flex flex-col items-center">
                        <Star className="w-3 h-3 text-red-500 mb-1" />
                        <div className="w-[1px] h-12 bg-red-500/50"></div>
                        <span className="text-white font-medium text-sm drop-shadow-md text-center leading-tight mt-2">corpo e mente<br/>em equilíbrio</span>
                     </div>

                     {/* Item 4 */}
                     <div className="absolute bottom-[20%] left-0 flex flex-col items-center">
                        <span className="text-white font-medium text-sm drop-shadow-md text-center leading-tight mb-2">melhora a<br/>qualidade do sono</span>
                        <div className="w-[1px] h-12 bg-red-500/50"></div>
                        <Star className="w-3 h-3 text-red-500 mt-1" />
                     </div>

                     {/* Item 5 */}
                     <div className="absolute bottom-0 left-[20%] flex items-center gap-3">
                        <span className="text-white font-medium text-sm drop-shadow-md text-right leading-tight">liberta o cansaço<br/>acumulado</span>
                        <div className="w-10 h-[1px] bg-red-500/50"></div>
                        <Star className="w-3 h-3 text-red-500" />
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>




        {/* TERAPIAS ESPECIAIS (VENTOSATERAPIA INFOGRAPHIC) */}
        <section className="relative w-full py-32 px-6 overflow-hidden">
          {/* Luzes dinâmicas de fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-900/10 blur-[200px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-800/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            
            <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
              {/* Infographic Center Image (Pill Style) */}
              <div className="lg:w-[45%] relative w-full flex justify-center items-center h-[600px] md:h-[800px]">
                
                {/* Glow de fundo da pílula */}
                <div className="absolute z-0 w-[280px] md:w-[400px] h-[500px] md:h-[700px] bg-red-600/20 blur-[100px] rounded-full animate-pulse" />

                {/* Imagem Pílula */}
                <div className="relative z-10 w-[260px] md:w-[350px] h-[480px] md:h-[650px] rounded-[4rem] border border-red-500/40 overflow-hidden shadow-[0_0_80px_rgba(220,38,38,0.25)] group">
                  <div className="absolute inset-0 border-[3px] border-red-500/30 rounded-[4rem] group-hover:border-red-500/60 transition-colors duration-1000 z-20 pointer-events-none"></div>
                  <img src={ventosaterapiaImg} alt="Ventosaterapia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10000ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030000] via-transparent to-transparent opacity-80 z-10"></div>
                  <div className="absolute inset-0 bg-red-950/30 mix-blend-overlay z-10"></div>
                </div>
                
                {/* Floating Glass Tags */}
                {/* Tag 1: Top Left */}
                <div className="absolute left-0 lg:-left-12 top-[15%] md:top-[20%] flex items-center animate-fade-right z-30 group">
                  <div className="bg-[#0a0000]/60 backdrop-blur-md border border-red-500/40 px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.2)] group-hover:bg-red-950/60 group-hover:border-red-500 transition-all duration-500 flex items-center gap-3">
                    <Activity className="w-5 h-5 text-red-500" />
                    <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">Dores Musculares</p>
                  </div>
                  <div className="w-8 md:w-16 h-[2px] bg-gradient-to-r from-red-500/80 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                </div>

                {/* Tag 2: Bottom Left */}
                <div className="absolute left-0 lg:-left-12 bottom-[20%] flex items-center animate-fade-right z-30 group" style={{ animationDelay: '200ms' }}>
                  <div className="bg-[#0a0000]/60 backdrop-blur-md border border-red-500/40 px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.2)] group-hover:bg-red-950/60 group-hover:border-red-500 transition-all duration-500 flex items-center gap-3">
                    <Wind className="w-5 h-5 text-red-500" />
                    <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">Estresse & Ansiedade</p>
                  </div>
                  <div className="w-8 md:w-16 h-[2px] bg-gradient-to-r from-red-500/80 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                </div>

                {/* Tag 3: Top Right */}
                <div className="absolute right-0 lg:-right-12 top-[25%] flex items-center animate-fade-left z-30 group" style={{ animationDelay: '100ms' }}>
                  <div className="w-8 md:w-16 h-[2px] bg-gradient-to-l from-red-500/80 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                  <div className="bg-[#0a0000]/60 backdrop-blur-md border border-red-500/40 px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.2)] group-hover:bg-red-950/60 group-hover:border-red-500 transition-all duration-500 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-red-500" />
                    <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">Liberação Miofascial</p>
                  </div>
                </div>

                {/* Tag 4: Bottom Right */}
                <div className="absolute right-0 lg:-right-12 bottom-[25%] flex items-center animate-fade-left z-30 group" style={{ animationDelay: '300ms' }}>
                  <div className="w-8 md:w-16 h-[2px] bg-gradient-to-l from-red-500/80 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                  <div className="bg-[#0a0000]/60 backdrop-blur-md border border-red-500/40 px-5 py-3 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.2)] group-hover:bg-red-950/60 group-hover:border-red-500 transition-all duration-500 flex items-center gap-3">
                    <Sun className="w-5 h-5 text-red-500" />
                    <p className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">Inchaços & Celulite</p>
                  </div>
                </div>
              </div>

              {/* Textos da Direita */}
              <div className="lg:w-[50%] flex flex-col gap-10">
                {/* Título Gigante */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-[2px] bg-red-600"></div>
                    <span className="text-sm md:text-base uppercase tracking-[0.4em] text-red-500 font-bold">Terapia Integrativa</span>
                  </div>
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-red-600/30 drop-shadow-sm leading-none pb-2">
                    Ventosa<br/>terapia
                  </h2>
                </div>
                
                {/* Descrição */}
                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed border-l-2 border-red-900/50 pl-6">
                  A ventosaterapia utiliza a sucção sobre a pele para criar um vácuo curativo. Essa técnica revolucionária estimula a circulação, oxigena os tecidos, libera toxinas presas e promove um <strong className="text-red-400 font-normal">alívio profundo e imediato</strong> de dores e tensões musculares crônicas.
                </p>

                {/* Cards Interativos */}
                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                  {/* Card: Como Funciona */}
                  <div className="bg-gradient-to-br from-[#1a0002] to-black border border-red-500/30 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:border-red-500/60 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Activity className="w-24 h-24 text-red-500" /></div>
                    <h3 className="text-xl md:text-2xl font-display text-white mb-6 flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-red-950 border border-red-500/50 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                        <Sparkles className="w-5 h-5"/>
                      </div> 
                      Como Funciona
                    </h3>
                    <ul className="text-sm md:text-base text-white/60 space-y-5 relative z-10">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_5px_rgba(220,38,38,0.8)]"></div>
                        <span><strong className="text-white/90 font-medium">Sucção:</strong> A pressão negativa puxa a pele e os tecidos.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_5px_rgba(220,38,38,0.8)]"></div>
                        <span><strong className="text-white/90 font-medium">Efeito Físico:</strong> Solta a fáscia e destrói contraturas musculares.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_5px_rgba(220,38,38,0.8)]"></div>
                        <span><strong className="text-white/90 font-medium">Marcas:</strong> Manchas avermelhadas sinalizam o aumento de fluxo vital.</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Card: Contraindicações */}
                  <div className="bg-[#050000] border border-white/10 rounded-[2rem] p-8 shadow-xl hover:border-white/20 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Lock className="w-24 h-24 text-white" /></div>
                    <h3 className="text-xl md:text-2xl font-display text-white/80 mb-6 flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                        <Lock className="w-5 h-5"/>
                      </div>
                      Contraindicações
                    </h3>
                    <ul className="text-sm md:text-base text-white/50 space-y-4 relative z-10">
                      <li className="flex items-center gap-3 border-b border-white/5 pb-3">
                        <div className="w-1 h-1 bg-white/30 rounded-full"></div> Peles com feridas ou cortes
                      </li>
                      <li className="flex items-center gap-3 border-b border-white/5 pb-3">
                        <div className="w-1 h-1 bg-white/30 rounded-full"></div> Casos de trombose severa
                      </li>
                      <li className="flex items-center gap-3 border-b border-white/5 pb-3">
                        <div className="w-1 h-1 bg-white/30 rounded-full"></div> Gestantes (abdômen)
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-white/30 rounded-full"></div> Doenças crônicas severas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* CONE HINDU (SPECIAL LAYOUT) */}
        <section className="relative w-full py-24 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-[1300px] mx-auto relative z-10">
            
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Left Side: Circular Image and Info */}
              <div className="lg:w-1/2 relative w-full flex flex-col items-center justify-start lg:sticky lg:top-32 pt-4 md:pt-10">
                {/* Nome e Linha */}
                <div className="relative w-full max-w-[600px] mb-6 flex items-center justify-center lg:justify-start gap-6 z-20">
                  <h3 className="text-3xl md:text-5xl font-display text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] tracking-[0.2em] uppercase relative z-10 leading-none whitespace-nowrap">
                    CONE HINDU
                  </h3>
                  {/* Linha que se estende para a direita */}
                  <div className="hidden lg:block flex-1 h-[2px] bg-gradient-to-r from-red-600 via-red-800 to-black shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                </div>

                <div className="w-full max-w-[600px] text-center lg:text-left mb-10 z-20">
                  <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold mb-3 block">Terapia Integrativa</span>
                  <p className="text-white/60 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                    Uma técnica milenar de desobstrução, purificação e alinhamento energético. Ideal para alívio de tensões mentais, excesso de cerúmen e reequilíbrio dos chakras.
                  </p>
                </div>

                <div className="relative z-10 w-full max-w-[600px] rounded-2xl border-2 border-red-900/50 overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                  <img src={coneHinduImg} alt="Cone Hindu" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-red-950/20 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Right Side: Accordion */}
              <div className="lg:w-1/2 flex flex-col gap-6 lg:mt-[240px] relative z-30">
                {/* ACCORDION */}
                <div className="bg-[#150000]/80 backdrop-blur-sm border border-red-900/30 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(220,38,38,0.1)] w-full">
                  {coneHinduData.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      title={item.title} 
                      isOpen={openConeIndex === index} 
                      onToggle={() => setOpenConeIndex(openConeIndex === index ? null : index)}
                    >
                      {item.content}
                    </AccordionItem>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>




        {/* CONTATO */}
        <section id="contato" className="relative py-28 px-6">
          <div className="max-w-[1300px] mx-auto p-10 md:p-16 relative">
            <div className="absolute -top-32 -right-32 h-96 w-96 bg-red-600/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative grid md:grid-cols-2 gap-12">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-neon">Contato</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-display">Vamos criar algo <span className="text-gradient-red">memorável</span>.</h2>
                <p className="mt-5 text-muted-foreground">Conte sobre o seu projeto. Retornarei o contato rapidamente para discutirmos os detalhes da campanha.</p>

                <div className="mt-8 space-y-4">
                  <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-[#1a0002] border border-red-900/20 p-4 hover:bg-[#250004] hover:border-red-900/50 transition">
                    <span className="h-11 w-11 rounded-full bg-red-600 grid place-items-center shadow-[0_0_15px_rgba(220,38,38,0.4)]"><MessageCircle className="h-5 w-5 text-white" /></span>
                    <div><div className="font-medium text-white/90">WhatsApp</div><div className="text-sm text-white/50">+55 11 96453-1211</div></div>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-[#1a0002] border border-red-900/20 p-4 hover:bg-[#250004] hover:border-red-900/50 transition">
                    <span className="h-11 w-11 rounded-full bg-red-600 grid place-items-center shadow-[0_0_15px_rgba(220,38,38,0.4)]"><Instagram className="h-5 w-5 text-white" /></span>
                    <div><div className="font-medium text-white/90">Instagram</div><div className="text-sm text-white/50">@lumiere.agency</div></div>
                  </a>
                  <a href="#showroom" className="flex items-center gap-4 rounded-2xl bg-[#1a0002] border border-red-900/20 p-4 hover:bg-[#250004] hover:border-red-900/50 transition">
                    <span className="h-11 w-11 rounded-full bg-red-600 grid place-items-center shadow-[0_0_15px_rgba(220,38,38,0.4)]"><MapPin className="h-5 w-5 text-white" /></span>
                    <div><div className="font-medium text-white/90">Showroom</div><div className="text-sm text-white/50">São Paulo - Jardins</div></div>
                  </a>
                </div>
              </div>

              <form
                onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/5511964531211", "_blank"); }}
                className="space-y-4"
              >
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Nome</label>
                  <input required className="mt-2 w-full rounded-xl bg-[#1a0002] border border-red-900/30 px-4 py-3 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition text-white placeholder:text-white/20" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">E-mail</label>
                  <input required type="email" className="mt-2 w-full rounded-xl bg-[#1a0002] border border-red-900/30 px-4 py-3 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition text-white placeholder:text-white/20" placeholder="voce@empresa.com" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Projeto</label>
                  <textarea required rows={4} className="mt-2 w-full rounded-xl bg-[#1a0002] border border-red-900/30 px-4 py-3 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition resize-none text-white placeholder:text-white/20" placeholder="Conte sobre sua campanha, datas e estilo desejado..." />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition">
                  <Mail className="h-4 w-4" /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="relative mt-20 overflow-hidden">
          {/* Brilho vermelho de fundo no rodapé para combinar com o design */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-red-600/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-[1300px] mx-auto px-6 py-16 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 md:gap-8">
              <div className="md:col-span-2">
                <a href="#top" className="text-3xl font-display font-bold tracking-widest text-gradient-red inline-block mb-4 hover:opacity-80 transition">
                  Ana Terapeuta
                </a>
                <p className="text-muted-foreground max-w-xs mt-4">
                  Sofisticação, atitude e excelência em cada produção. Representando beleza profissional para marcas de luxo.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <a href="https://instagram.com" className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-red-600/20 hover:border-red-500 hover:text-red-400 transition">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="mailto:contato@lumiere.com.br" className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-red-600/20 hover:border-red-500 hover:text-red-400 transition">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-6 uppercase tracking-widest text-xs text-red-500">Mapa do Site</h4>
                <ul className="space-y-4 text-muted-foreground text-sm">
                  <li><a href="#top" className="hover:text-white transition">Início</a></li>
                  <li><a href="#sobre" className="hover:text-white transition">Sobre a Agência</a></li>
                  <li><a href="#portfolio" className="hover:text-white transition">Portfólio</a></li>
                  <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-6 uppercase tracking-widest text-xs text-red-500">Informações</h4>
                <ul className="space-y-4 text-muted-foreground text-sm">
                  <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-white transition">Imprensa</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <p>© {new Date().getFullYear()} Ana Terapeuta. Todos os direitos reservados.</p>
              <p>Projetado com excelência.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
