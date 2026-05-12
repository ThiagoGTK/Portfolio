const technologies = [
  {
    name: 'SQL',
    description: 'Consultas avançadas, procedures, otimização de queries e modelagem de banco de dados relacionais.',
    icon: '🗄️',
    color: 'from-orange-500 to-red-500',
    glow: 'rgba(249, 115, 22, 0.3)',
    tags: ['Queries', 'Procedures', 'Otimização'],
  },
  {
    name: 'Power BI',
    description: 'Dashboards interativos, relatórios gerenciais, DAX avançado e publicação em ambientes corporativos.',
    icon: '📊',
    color: 'from-yellow-400 to-orange-500',
    glow: 'rgba(234, 179, 8, 0.3)',
    tags: ['DAX', 'Dashboards', 'Reports'],
  },
  {
    name: 'Python',
    description: 'Automação de processos, ETL, análise estatística, tratamento de dados com Pandas e NumPy.',
    icon: '🐍',
    color: 'from-blue-400 to-cyan-500',
    glow: 'rgba(6, 182, 212, 0.3)',
    tags: ['Pandas', 'ETL', 'Automação'],
  },
  {
    name: 'Excel',
    description: 'Planilhas avançadas, VBA, Power Query, tabelas dinâmicas e modelos de análise financeira.',
    icon: '📗',
    color: 'from-emerald-500 to-green-600',
    glow: 'rgba(16, 185, 129, 0.3)',
    tags: ['VBA', 'Power Query', 'Pivot'],
  },
  {
    name: 'Zoho Analytics',
    description: 'Criação de relatórios analíticos, integrações com CRM, dashboards e análise self-service.',
    icon: '📈',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.3)',
    tags: ['Reports', 'BI', 'Analytics'],
  },
  {
    name: 'Power Automate',
    description: 'Fluxos automatizados, aprovações, notificações, integrações com Office 365 e APIs externas.',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.3)',
    tags: ['Flows', 'Aprovações', 'RPA'],
  },
  {
    name: 'Make',
    description: 'Automações visuais complexas, integrações entre centenas de plataformas e orquestração de dados.',
    icon: '🔗',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.3)',
    tags: ['Integromat', 'APIs', 'Webhooks'],
  },
  {
    name: 'Copilot Studio',
    description: 'Criação de bots de IA conversacionais integrados ao ecossistema Microsoft, com IA generativa e automações.',
    icon: '🤖',
    color: 'from-blue-400 to-violet-600',
    glow: 'rgba(99, 102, 241, 0.3)',
    tags: ['Bots de IA', 'Copilot', 'Microsoft'],
  },
]

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#060d1f] to-[#0a0f1e]" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Stack Tecnológica</span>
          </div>
          <h2 className="section-title mb-4">
            Ferramentas que eu{' '}
            <span className="gradient-text">domino</span>
          </h2>
          <p className="section-subtitle">
            Combinação poderosa de tecnologias para análise, visualização e automação de ponta a ponta.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className="reveal card-glass card-hover p-6 group cursor-default"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <div className="relative mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 8px 25px ${tech.glow}` }}
                >
                  {tech.icon}
                </div>
                <div
                  className="absolute inset-0 w-14 h-14 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle, ${tech.glow.replace('0.3', '1')} 0%, transparent 70%)` }}
                />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {tech.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {tech.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tech.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* More tech placeholder */}
          <div className="reveal card-glass card-hover p-6 flex flex-col items-center justify-center text-center group cursor-default border-dashed">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-4 group-hover:border-cyan-500/30 transition-colors">
              +
            </div>
            <p className="text-gray-400 text-sm font-medium">E muito mais...</p>
            <p className="text-gray-600 text-xs mt-1">APIs, REST, Git, Figma</p>
          </div>
        </div>
      </div>
    </section>
  )
}
