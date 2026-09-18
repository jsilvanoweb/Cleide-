import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, MessageCircle, Leaf, Activity, Wind, Sun, Clock, PhoneCall, Flame, ArrowLeft, Heart, ShieldCheck, Gem } from "lucide-react";

import massagemImg from "@/assets/mulher-nova.jpg";
import massagemMixImg from "@/assets/massagem_mix_1780024743588.png";
import alinhamentoImg from "@/assets/alinhamento_artic_1780024756650.png";
import tantricaImg from "@/assets/massagem_tantrica_1780024771395.png";
import nuruImg from "@/assets/massagem_nuru_1780024785750.png";
import coneHinduNewImg from "@/assets/cone_hindu_1780024799809.png";
import cleide1 from "@/assets/5b192776-5528-4cc6-9823-ccc31a3f7742.jpg";
import cleide2 from "@/assets/63248efb-49ea-4d40-b9ba-ae9cfbd4ad6d.jpg";
import cleide3 from "@/assets/6856173e-ccd1-44b9-ab65-6944a48b4c91.jpg";
import cleide4 from "@/assets/8490ca91-5094-4537-bc2c-bdeda8ce1c89.jpg";
import novaFoto from "@/assets/massagemfoto1.png";
import sobreImg from "@/assets/hero-cleide.jpg";

export const Route = createFileRoute("/massagem")({
  head: () => ({
    meta: [
      { title: "Técnicas de Massagem | Ana Terapeuta" },
      { name: "description", content: "Conheça nossas técnicas exclusivas de massagem e encontre o equilíbrio perfeito entre corpo e mente." },
    ],
  }),
  component: MassagemPage,
});

function MassagemPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050000] overflow-hidden text-foreground">
      {/* BACKGROUND GRADIENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#1a0002] via-[#080000] to-black" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_left,rgba(180,0,20,0.3)_0%,transparent_60%)]" />
      
      {/* FIXED LIGHTS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[80vh] h-[80vh] bg-red-900/5 blur-[130px] rounded-full translate-x-[15vw]" />
      </div>

      <div className="relative z-10">
        {/* FULL NAV */}
        <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
          <div className="w-full max-w-[1300px] px-6 py-3 flex items-center justify-between bg-black/40 backdrop-blur-md border border-white/5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)] relative z-20">
            <div className="flex-1 flex justify-start">
              <Link to="/" className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-red-600 grid place-items-center shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                  <Sparkles className="h-4 w-4 text-white" />
                </span>
                <span className="font-display text-lg tracking-widest uppercase text-white/90">Ana Terapeuta</span>
              </Link>
            </div>
            
            {/* Center: Nav Links */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm font-medium text-white/60">
              <Link to="/" hash="sobre" className="hover:text-white transition">Sobre</Link>
              <Link to="/massagem" className="text-white transition">Massagem</Link>
              <Link to="/" hash="portfolio" className="hover:text-white transition">Portfólio</Link>
              <Link to="/" hash="destaques" className="hover:text-white transition">Destaques</Link>
              <Link to="/" hash="contato" className="hover:text-white transition">Contato</Link>
            </nav>

            <div className="flex-1 flex justify-end items-center gap-4">
              <a
                href="https://wa.me/5511964531211"
                target="_blank" rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-black border border-red-500/30 hover:from-red-500 hover:to-black px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] transition"
              >
                <MessageCircle className="h-4 w-4" /> Agendar Sessão
              </a>

              {/* Hamburger Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white/80 hover:text-white p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-[110%] left-4 right-4 rounded-3xl bg-[#0a0000]/95 backdrop-blur-xl border border-red-900/30 p-6 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-fade-up md:hidden z-10">
              <nav className="flex flex-col gap-6 text-base font-medium text-white/80 text-center">
                <Link to="/" hash="sobre" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Sobre</Link>
                <Link to="/massagem" onClick={() => setIsMobileMenuOpen(false)} className="text-red-400 transition">Massagem</Link>
                <Link to="/" hash="portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Portfólio</Link>
                <Link to="/" hash="destaques" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Destaques</Link>
                <Link to="/" hash="contato" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-400 transition">Contato</Link>
              </nav>
              <a
                href="https://wa.me/5511964531211"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-black hover:from-red-500 hover:to-black border border-red-500/30 px-6 py-4 text-sm font-bold tracking-widest text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] transition uppercase w-full"
              >
                <MessageCircle className="h-4 w-4" /> Agendar no WhatsApp
              </a>
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="relative w-full min-h-[50vh] pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center overflow-hidden z-20">
          
          {/* WATERMARK IMAGE (SEMELHANTE À HOME) */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-full md:w-[90%] lg:w-[80%] z-0 pointer-events-none"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at right center, black 40%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at right center, black 40%, transparent 100%)'
            }}
          >
            <div
              className="absolute inset-0 opacity-85"
              style={{
                backgroundImage: `url(${sobreImg})`,
                backgroundPosition: 'right center',
                backgroundSize: '85%',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.05) contrast(1.05) saturate(0.9)',
              }}
            />
          </div>

          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1300px] mx-auto w-full relative z-10 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-950/30 px-5 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-red-200 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(220,38,38,0.15)] animate-fade-up">
              <Leaf className="h-3.5 w-3.5 text-red-500" />
              Especialidades Terapêuticas
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] drop-shadow-[0_0_25px_rgba(220,38,38,0.3)] animate-fade-up">
              <span className="text-white font-light">Técnicas de</span><br />
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent italic font-medium">Massagem</span>
            </h1>
            
            <p className="mt-8 text-lg md:text-2xl text-white/70 max-w-2xl animate-fade-up font-light leading-relaxed">
              Descubra qual a melhor terapia para o seu momento. Cada técnica é desenhada para promover relaxamento profundo, alívio de tensões e renovação energética.
            </p>
          </div>
        </section>

        {/* TECHNIQUES GRID */}
        <section className="relative w-full pb-32 px-6 z-20">
          <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Technique Card 1 */}
            <div className="bg-gradient-to-br from-[#0a0000] to-black rounded-[2.5rem] border border-red-900/30 overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.05)] group hover:border-red-500/50 transition-colors duration-500 flex flex-col">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img src={massagemMixImg} alt="Massoterapia Mix" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-400">
                    <Wind className="w-6 h-6" />
                    <span className="text-xs uppercase tracking-widest font-bold">Mais Pedida</span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-display font-medium text-white mb-4">Massoterapia Mix</h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                    A combinação perfeita de movimentos relaxantes com técnicas terapêuticas profundas. Ideal para quem busca um equilíbrio completo, aliviando o estresse do dia a dia e soltando nódulos de tensão nas costas, ombros e pernas.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <Clock className="w-4 h-4 text-red-500" /> 30 Minutos
                    </div>
                    <div className="w-[1px] h-4 bg-red-900/50 hidden sm:block"></div>
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <Clock className="w-4 h-4 text-red-500" /> 1 Hora
                    </div>
                  </div>
                  <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="w-full py-4 text-center rounded-full bg-red-950/30 border border-red-500/30 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-600 hover:text-white transition-colors group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    Agendar Sessão
                  </a>
                </div>
              </div>
            </div>

            {/* Technique Card 2 */}
            <div className="bg-gradient-to-br from-[#0a0000] to-black rounded-[2.5rem] border border-red-900/30 overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.05)] group hover:border-red-500/50 transition-colors duration-500 flex flex-col">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img src={alinhamentoImg} alt="Alinhamento Articulação" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-400">
                    <Activity className="w-6 h-6" />
                    <span className="text-xs uppercase tracking-widest font-bold">Terapêutico</span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-display font-medium text-white mb-4">Alinhamento Articulação</h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                    Foco total em restaurar a sua mobilidade. Através de ajustes precisos, trações leves e alongamentos focados, ajuda a soltar a musculatura ao redor das articulações, devolvendo a leveza aos seus movimentos.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4 text-red-500" /> Alívio de Dor
                    </div>
                    <div className="w-[1px] h-4 bg-red-900/50 hidden sm:block"></div>
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <Activity className="w-4 h-4 text-red-500" /> Correção Postural
                    </div>
                  </div>
                  <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="w-full py-4 text-center rounded-full bg-red-950/30 border border-red-500/30 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-600 hover:text-white transition-colors group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    Agendar Sessão
                  </a>
                </div>
              </div>
            </div>

            {/* Technique Card 3 */}
            <div className="bg-gradient-to-br from-[#0a0000] to-black rounded-[2.5rem] border border-red-900/30 overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.05)] group hover:border-red-500/50 transition-colors duration-500 flex flex-col">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img src={tantricaImg} alt="Tântrica Sensorial" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-400">
                    <Sparkles className="w-6 h-6" />
                    <span className="text-xs uppercase tracking-widest font-bold">Experiência Única</span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-display font-medium text-white mb-4">Tântrica Sensorial</h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                    Mais que uma massagem, uma verdadeira jornada de reconexão corporal. Movimentos extremamente suaves e rítmicos que ativam a energia vital do corpo, despertando todos os sentidos e proporcionando um estado de profundo relaxamento e prazer.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <Clock className="w-4 h-4 text-red-500" /> 1 Hora
                    </div>
                    <div className="w-[1px] h-4 bg-red-900/50 hidden sm:block"></div>
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <Heart className="w-4 h-4 text-red-500" /> Energia
                    </div>
                  </div>
                  <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="w-full py-4 text-center rounded-full bg-red-950/30 border border-red-500/30 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-600 hover:text-white transition-colors group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    Agendar Sessão
                  </a>
                </div>
              </div>
            </div>

            {/* Technique Card 4 */}
            <div className="bg-gradient-to-br from-[#0a0000] to-black rounded-[2.5rem] border border-red-900/30 overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.05)] group hover:border-red-500/50 transition-colors duration-500 flex flex-col">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img src={nuruImg} alt="Massagem Nuru" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-400">
                    <Gem className="w-6 h-6" />
                    <span className="text-xs uppercase tracking-widest font-bold">Técnica Oriental</span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-display font-medium text-white mb-4">Massagem Nuru</h2>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                    Técnica japonesa autêntica realizada com um gel especial à base de algas marinhas, incolor e inodoro. O gel permite um deslizamento corporal contínuo e incrivelmente suave, resultando em um relaxamento profundo de corpo inteiro.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <Clock className="w-4 h-4 text-red-500" /> 1 Hora
                    </div>
                    <div className="w-[1px] h-4 bg-red-900/50 hidden sm:block"></div>
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                      <Sun className="w-4 h-4 text-red-500" /> Relaxamento Absoluto
                    </div>
                  </div>
                  <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="w-full py-4 text-center rounded-full bg-red-950/30 border border-red-500/30 text-white font-bold tracking-widest uppercase text-sm hover:bg-red-600 hover:text-white transition-colors group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    Agendar Sessão
                  </a>
                </div>
              </div>
            </div>

            {/* Technique Card 5 (Full Width) */}
            <div className="bg-gradient-to-br from-[#0a0000] to-black rounded-[2.5rem] border border-red-900/30 overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.05)] group hover:border-red-500/50 transition-colors duration-500 lg:col-span-2 flex flex-col md:flex-row">
              <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
                <img src={coneHinduNewImg} alt="Cone Hindu" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent opacity-90" />
              </div>
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-red-400 mb-4">
                  <Flame className="w-6 h-6" />
                  <span className="text-xs uppercase tracking-widest font-bold">Terapia Ancestral</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">Cone Hindu</h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                  Sabedoria milenar para limpar os canais energéticos e físicos da cabeça. A queima suave do cone artesanal desobstrui vias respiratórias, alivia zumbidos, rinite e promove uma profunda sensação de clareza mental e paz interior.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest sm:mr-6">
                    <Clock className="w-4 h-4 text-red-500" /> 30 Minutos
                  </div>
                  <a href="https://wa.me/5511964531211" target="_blank" rel="noreferrer" className="py-4 px-8 rounded-full bg-gradient-to-r from-red-600 to-black border border-red-500/30 text-white font-bold tracking-widest uppercase text-sm hover:from-red-500 hover:to-black transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)] inline-flex items-center justify-center">
                    Agendar Cone Hindu
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        {/* FOOTER CALL TO ACTION */}
        <section className="relative w-full py-24 px-6 border-t border-red-900/30 bg-[#050000] z-20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <Leaf className="w-12 h-12 text-red-500 mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
              Pronto para renovar suas energias?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl">
              Entre em contato agora mesmo para tirar dúvidas ou reservar o seu horário. Meu espaço é discreto, seguro e totalmente preparado para o seu bem-estar.
            </p>
            <a
              href="https://wa.me/5511964531211"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-red-600 hover:bg-red-500 px-8 py-5 text-sm md:text-base font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all"
            >
              <PhoneCall className="w-5 h-5" /> Falar com Ana no WhatsApp
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
