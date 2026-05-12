import { ArrowRight, MessageCircle, TrendingUp, Database, Zap, ChevronDown } from 'lucide-react'

const floatingCards = [
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    value: '+127%',
    color: 'from-cyan-500 to-blue-600',
    delay: '0s',
    position: 'top-20 right-8 md:right-16',
  },
  {
    icon: Database,
    title: 'Data Processed',
    value: '2.4M rows',
    color: 'from-violet-500 to-purple-600',
    delay: '1s',
    position: 'bottom-32 left-4 md:left-16',
  },
  {
    icon: Zap,
    title: 'Automation',
    value: '98% faster',
    color: 'from-emerald-500 to-teal-600',
    delay: '2s',
    position: 'top-48 left-4 md:left-24',
  },
]

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute inset-0 cyber-grid opacity-60" />
      <div className="absolute inset-0 bg-mesh" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/4 rounded-full blur-[150px]" />

      {/* Floating metric cards */}
      {floatingCards.map((card) => (
        <div
          key={card.title}
          className={`absolute ${card.position} hidden lg:flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 animate-float z-10`}
          style={{ animationDelay: card.delay }}
        >
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
            <card.icon size={16} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-400">{card.title}</p>
            <p className="text-sm font-bold text-white">{card.value}</p>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium">Disponível para novos projetos</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-slide-up">
          Transformo{' '}
          <span className="gradient-text text-shadow-glow">Dados</span>
          <br className="hidden sm:block" />
          {' '}em{' '}
          <span className="relative">
            <span className="gradient-text">Decisões Estratégicas</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9C60 3 120 1 150 1C180 1 240 3 299 9" stroke="url(#gradient)" strokeWidth="2.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06b6d4"/>
                  <stop offset="1" stopColor="#3b82f6"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Especialista em <span className="text-cyan-400 font-medium">Análise de Dados</span>, <span className="text-cyan-400 font-medium">Business Intelligence</span> e <span className="text-cyan-400 font-medium">Automação de Processos</span>. Dashboards que revelam oportunidades. Automações que eliminam o trabalho manual.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button onClick={scrollToProjects} className="btn-primary text-base px-8 py-4 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            Ver Projetos
            <ArrowRight size={18} />
          </button>
          <button onClick={scrollToContact} className="btn-secondary text-base px-8 py-4">
            <MessageCircle size={18} />
            Entrar em Contato
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '10+', label: 'Projetos Entregues' },
            { value: '3+', label: 'Anos de Experiência' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors animate-bounce z-10"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
