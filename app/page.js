"use client";

import { Playfair_Display, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2, Server, Database, Terminal, ArrowRight, Layout } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className={`${playfair.variable} ${dmSans.variable} font-body max-w-4xl mx-auto px-6 py-20 relative`}>
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-center mb-32 text-xs text-zinc-400 uppercase tracking-widest gap-6 sm:gap-0"
      >
        <span className="font-display italic text-zinc-100 text-xl normal-case tracking-normal">Vitor Carvalho</span>
        <div className="flex gap-8 glass px-6 py-3 rounded-full">
          <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-emerald-400 transition-colors">Projetos</a>
          <a href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</a>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mb-40 pt-10"
      >
        <motion.div variants={fadeIn} className="inline-flex items-center gap-3 mb-8 glass px-4 py-2 rounded-full border-emerald-900/30 bg-emerald-950/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <p className="text-xs text-emerald-200 uppercase tracking-widest font-medium">Disponível para oportunidades</p>
        </motion.div>

        <motion.h1 variants={fadeIn} className="font-display text-5xl sm:text-7xl mb-8 leading-tight text-zinc-100">
          Criando sistemas que <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            funcionam perfeitamente.
          </span>
        </motion.h1>

        <motion.p variants={fadeIn} className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-12">
          Fullstack developer com raízes em telecomunicações. Faço sistemas que funcionam — da base de dados à interface — com atenção à performance e aos detalhes.
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#projetos" className="group px-8 py-4 bg-emerald-500 text-zinc-950 font-medium text-sm rounded-full hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            Ver projetos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contacto" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
            Falar comigo
          </a>
        </motion.div>
      </motion.section>

      {/* Sobre / Tech Stack */}
      <motion.section
        id="sobre"
        className="mb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs text-emerald-500 uppercase tracking-widest font-semibold">01. Sobre</span>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div variants={fadeIn} className="lg:col-span-1 glass p-8 rounded-3xl">
            <h2 className="font-display text-2xl text-zinc-100 mb-6">O meu percurso</h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Sou Engenheiro de Telecomunicações e Informática com foco em desenvolvimento web e arquitetura de sistemas.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Trabalho confortavelmente em qualquer camada de uma aplicação, focando-me sempre em entregar soluções robustas e eficientes.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {stack.map((item) => (
              <motion.div key={item.area} variants={fadeIn} className="glass glass-hover p-6 rounded-2xl flex flex-col justify-between group">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-zinc-200 font-medium mb-2">{item.area}</h3>
                  <p className="text-sm text-zinc-500">{item.techs}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projetos */}
      <motion.section
        id="projetos"
        className="mb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs text-emerald-500 uppercase tracking-widest font-semibold">02. Projetos</span>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        <div className="space-y-6">
          {projetos.map((p) => (
            <motion.div key={p.titulo} variants={fadeIn} className="group relative glass p-8 rounded-3xl hover:border-emerald-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-display text-zinc-100">{p.titulo}</h2>
                    {p.badge && (
                      <span className="text-[10px] px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 uppercase tracking-wider font-semibold">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">{p.descricao}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 bg-zinc-800/50 text-zinc-300 rounded-full border border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="p-4 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 transition-all border border-zinc-700/50 hover:border-emerald-500/30 shrink-0 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section
        id="contacto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-20 text-center"
      >
        <motion.div variants={fadeIn} className="inline-flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-zinc-800"></div>
          <span className="text-xs text-emerald-500 uppercase tracking-widest font-semibold">03. O que se segue?</span>
          <div className="w-12 h-px bg-zinc-800"></div>
        </motion.div>

        <motion.h2 variants={fadeIn} className="font-display text-5xl md:text-6xl text-zinc-100 mb-6">Vamos trabalhar juntos</motion.h2>

        <motion.p variants={fadeIn} className="text-zinc-400 mb-12 max-w-md mx-auto leading-relaxed">
          Disponível para oportunidades a full-time, freelance ou projetos interessantes. A minha caixa de entrada está sempre aberta.
        </motion.p>

        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
          <a href="mailto:vitorcarvalho122005@gmail.com" className="flex items-center gap-2 px-6 py-3 glass glass-hover text-zinc-300 rounded-full group">
            <Mail size={18} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            <span>Email</span>
          </a>
          <a href="https://github.com/VitorHugo20051" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 glass glass-hover text-zinc-300 rounded-full group">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-emerald-400 transition-colors">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/vitor-carvalho-200a70248" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 glass glass-hover text-zinc-300 rounded-full group">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-emerald-400 transition-colors">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center pb-8 text-xs text-zinc-600">
        <p>Vitor Carvalho &copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}

const stack = [
  { area: "Front-end", techs: "React, Next.js, Tailwind CSS, Framer Motion", icon: <Layout size={20} /> },
  { area: "Back-end", techs: "Node.js, Python, C, Java", icon: <Server size={20} /> },
  { area: "Bases de dados", techs: "PostgreSQL, MongoDB", icon: <Database size={20} /> },
  { area: "Ferramentas", techs: "Git, Docker, Linux", icon: <Terminal size={20} /> },
];

const projetos = [
  {
    titulo: "Custom C Web Engine",
    descricao: "Servidor HTTP concorrente com suporte a routing modular, thread pooling e parsing de protocolos, construído inteiramente em C para máxima eficiência de recursos.",
    tags: ["C", "Sockets", "Multithreading", "HTTP"],
    link: "https://github.com/VitorHugo20051/Http-Server",
    badge: "destaque",
  },
  {
    titulo: "GameDeal Web App",
    descricao: "Uma aplicação web para a pesquisa e comparação de preços de jogos em várias lojas (Steam, Epic Games, GOG). Integração com a API do IsThereAnyDeal para pesquisa de jogos e preços em tempo real por loja.",
    tags: ["Ruby", "Next.js", "Sinatra", "PostgreSQL"],
    link: "https://github.com/VitorHugo20051/GameDeal",
    badge: "destaque",
  },
];