import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export default function Home() {
  return (
    <main className={`${playfair.variable} ${dmSans.variable} font-body max-w-2xl mx-auto px-6 py-20`}>

      {/* Nav */}
      <nav className="flex justify-between items-center mb-24 text-xs text-gray-400 uppercase tracking-widest">
        <span className="font-display italic text-gray-800 text-lg normal-case tracking-normal">Vitor Carvalho</span>
        <div className="flex gap-6">
          <a href="#sobre" className="hover:text-gray-700 transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-gray-700 transition-colors">Projetos</a>
          <a href="#contacto" className="hover:text-gray-700 transition-colors">Contacto</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-28">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <p className="text-xs text-gray-400 uppercase tracking-widest">Disponível para oportunidades</p>
        </div>
        <p className="text-base text-gray-500 max-w-sm leading-relaxed mb-10">
          Fullstack developer com raízes em telecomunicações. Faço sistemas que funcionam — da base de dados à interface — com atenção à performance e aos detalhes.
        </p>
        <div className="flex items-center gap-4">
          <a href="#projetos" className="px-6 py-3 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-700 transition-colors">
            Ver projetos
          </a>
          <a href="mailto:vitorcarvalho122005@gmail.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4">
            Enviar email
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mb-28">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Sobre</span>
          <div className="flex-1 h-px bg-gray-100"></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Sou Engenheiro de Telecomunicações e Informática com foco em desenvolvimento web e arquitetura de sistemas.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trabalho confortavelmente em qualquer camada de uma aplicação.
            </p>
          </div>
          <div className="space-y-5">
            {stack.map((item) => (
              <div key={item.area}>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.area}</p>
                <p className="text-sm text-gray-700">{item.techs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="mb-28">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Projetos</span>
          <div className="flex-1 h-px bg-gray-100"></div>
        </div>
        <div className="space-y-4">
          {projetos.map((p) => (
            <div key={p.titulo} className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-sm font-medium text-gray-900">{p.titulo}</h2>
                    {p.badge && (
                      <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                        {p.badge}
                      </span>
                    )}
                    {p.wip && (
                      <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full border border-amber-100">
                        em desenvolvimento
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {p.link && !p.wip && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="text-gray-300 group-hover:text-gray-600 transition-colors shrink-0 text-lg mt-0.5">
                    ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Contacto</span>
          <div className="flex-1 h-px bg-gray-100"></div>
        </div>
        <p className="font-display text-3xl text-gray-900 mb-2">Vamos trabalhar juntos.</p>
        <p className="text-sm text-gray-500 mb-8 max-w-sm leading-relaxed">
          Disponível para full-time, freelance ou projetos. Se tens algo interessante, fala comigo.
        </p>
        <div className="flex gap-6">
          <a href="mailto:vitorcarvalho122005@gmail.com" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors">Email ↗</a>
          <a href="https://github.com/VitorHugo20051" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors">GitHub ↗</a>
          <a href="https://linkedin.com/in/vitor-carvalho-200a70248" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors">LinkedIn ↗</a>
        </div>
      </section>

    </main>
  );
}

const stack = [
  { area: "Front-end", techs: "React, Next.js, Tailwind CSS" },
  { area: "Back-end", techs: "Node.js, Python, C, Java" },
  { area: "Bases de dados", techs: "PostgreSQL, MongoDB" },
  { area: "Ferramentas", techs: "Git, Docker, Linux" },
];

const projetos = [
  {
    titulo: "Custom C Web Engine",
    descricao: "Servidor HTTP concorrente com suporte a routing modular, thread pooling e parsing de protocolos, construído inteiramente em C para máxima eficiência de recursos.",
    tags: ["C", "Sockets", "Multithreading", "HTTP"],
    link: "https://github.com/VitorHugo20051/Http-Server",
    badge: "destaque",
    wip: false,
  },
  {
    titulo: "Projeto em breve",
    descricao: "Ainda em desenvolvimento — algo fullstack com foco em resolver um problema real. Detalhes em breve.",
    tags: ["Fullstack"],
    link: null,
    badge: null,
    wip: true,
  },
];