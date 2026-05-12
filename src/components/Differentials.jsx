import { Clock, Shield, TrendingUp, Eye, Lightbulb, BarChart3, Layers, ArrowUpRight } from 'lucide-react'

const differentials = [
  {
    icon: Clock,
    title: 'Economia de Tempo',
    description: 'Processos que levavam horas são executados em minutos. Sua equipe foca no que realmente importa.',
    stat: '97%',
    statLabel: 'redução de tempo em tarefas manuais',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    icon: Shield,
    title: 'Redução de Erros',
    description: 'Automações eliminam inconsistências humanas em relatórios, consolidações e transferências de dados.',
    stat: '99%',
    statLabel: 'de precisão nos dados automatizados',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.2)',
  },
  {
    icon: Eye,
    title: 'Visibilidade Total',
    description: 'Dashboards que mostram o negócio em tempo real. Sem esperar relatórios manuais ou planilhas desatualizadas.',
    stat: '360°',
    statLabel: 'visão do negócio em tempo real',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    icon: Lightbulb,
    title: 'Insights Estratégicos',
    description: 'Análises que transformam números em conclusões acionáveis para o time de liderança e gestores.',
    stat: '3x',
    statLabel: 'mais velocidade nas decisões',
    color: 'from-yellow-500 to-orange-500',
    glow: 'rgba(234,179,8,0.2)',
  },
  {
    icon: BarChart3,
    title: 'Visual Profissional',
    description: 'Interfaces de alta qualidade que transmitem credibilidade nas apresentações para clientes e board.',
    stat: '100%',
    statLabel: 'dashboards responsivos e modernos',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.2)',
  },
  {
    icon: TrendingUp,
    title: 'Orientação a Resultados',
    description: 'Cada projeto é desenhado com KPIs claros. Não entrego apenas código, entrego impacto mensurável.',
    stat: '10+',
    statLabel: 'projetos com resultados documentados',
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Layers,
    title: 'Escalabilidade',
    description: 'Soluções preparadas para crescer junto com o negócio. Arquitetura que suporta volume e complexidade.',
    stat: '10x',
    statLabel: 'capacidade de escala sem retrabalho',
    color: 'from-teal-500 to-cyan-600',
    glow: 'rgba(20,184,166,0.2)',
  },
  {
    icon: ArrowUpRight,
    title: 'ROI Comprovado',
    description: 'Investimento com retorno claro. Clientes relatam recuperar o valor do projeto em menos de 60 dias.',
    stat: '60d',
    statLabel: 'tempo médio de retorno do investimento',
    color: 'from-orange-500 to-red-500',
    glow: 'rgba(249,115,22,0.2)',
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Por que me escolher</span>
          </div>
          <h2 className="section-title mb-4">
            Diferenciais que <span className="gradient-text">fazem a diferença</span>
          </h2>
          <p className="section-subtitle">
            Mais do que tecnologia: soluções que geram valor real e sustentável para o seu negócio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className="reveal card-glass card-hover p-6 group"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: `0 8px 20px ${item.glow}` }}
              >
                <item.icon size={20} className="text-white" />
              </div>

              {/* Stat */}
              <div className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                {item.stat}
              </div>
              <p className="text-xs text-gray-500 mb-4">{item.statLabel}</p>

              {/* Content */}
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
