import { TrendingUp, Linkedin, Github, Mail, Heart, ArrowUp, Instagram } from 'lucide-react'

const footerLinks = {
  Serviços: [
    'Dashboards Power BI',
    'Automação com Make',
    'Power Automate',
    'ETL e Pipelines',
    'Análise Estratégica',
    'KPIs e Indicadores',
  ],
  Tecnologias: [
    'SQL',
    'Python',
    'Power BI',
    'Zoho Analytics',
    'Excel Avançado',
    'Power Automate',
  ],
  Empresa: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Portfólio', href: '#projetos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/thiago-gaitkoski/?skipRedirect=true', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Github, href: 'https://github.com/ThiagoGTK', label: 'GitHub', color: 'hover:text-gray-300' },
  { icon: Instagram, href: 'https://www.instagram.com/tgdata?igsh=YW9ncnF4b2Nvd3Zn&utm_source=qr', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Mail, href: 'mailto:thiago.gaitkoski@gmail.com', label: 'E-mail', color: 'hover:text-violet-400' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#060d1f] border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <TrendingUp size={18} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                TG<span className="text-cyan-400"> Data</span>
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Transformando dados em vantagem competitiva. Especialista em BI, automação e análise estratégica para empresas que crescem com inteligência.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 ${social.color} hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-2.5">
              {footerLinks.Serviços.map((item) => (
                <li key={item}>
                  <span className="text-gray-500 hover:text-cyan-400 text-sm transition-colors cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Tecnologias</h4>
            <ul className="space-y-2.5">
              {footerLinks.Tecnologias.map((item) => (
                <li key={item}>
                  <span className="text-gray-500 hover:text-cyan-400 text-sm transition-colors cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Menu</h4>
            <ul className="space-y-2.5">
              {footerLinks.Empresa.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-gray-500 hover:text-cyan-400 text-sm transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20">
              <p className="text-xs text-gray-400 mb-3">Pronto para começar?</p>
              <button
                onClick={() => handleNav('#contato')}
                className="text-cyan-400 text-xs font-semibold hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                Fale comigo →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} TG Data. Feito com
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            e muitos dados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-xs">Todos os direitos reservados</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
