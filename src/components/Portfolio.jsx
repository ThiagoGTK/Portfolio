import { useState } from 'react'
import { ExternalLink, TrendingUp, Users, Zap, Bot, Clock } from 'lucide-react'

const categories = ['Todos', 'Dashboards', 'Automação', 'Bots de IA', 'ETL & Dados']

const projects = [
  {
    id: 1,
    category: 'Dashboards',
    title: 'Dashboard Comercial — Pet Shop',
    description: 'Painel de inteligência comercial para rede de pet shops com visão de vendas por loja, ticket médio, produtos mais vendidos e metas por equipe. Construído com Power BI e integrado às bases internas da empresa.',
    technologies: ['Power BI', 'SQL', 'DAX'],
    result: 'Gestão comercial com dados em tempo real, eliminando relatórios manuais e acelerando decisões estratégicas',
    metric: { icon: TrendingUp, value: 'Real-time', label: 'Dados ao vivo' },
    color: 'from-cyan-500 to-blue-600',
    preview: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/10',
    chartType: 'bar',
    badge: 'Projeto Real',
  },
  {
    id: 2,
    category: 'Dashboards',
    title: 'Dashboard Analítico — Philozon',
    description: 'Dashboard analítico multidimensional desenvolvido para a Philozon, com visões estratégicas por área, KPIs consolidados e filtros dinâmicos por período e segmento.',
    technologies: ['Power BI', 'SQL', 'DAX'],
    result: 'Visão unificada de múltiplas áreas da empresa em um único painel acessível à liderança',
    metric: { icon: Users, value: '360°', label: 'Visão total' },
    color: 'from-blue-500 to-indigo-600',
    preview: 'bg-gradient-to-br from-blue-500/20 to-indigo-600/10',
    chartType: 'line',
    link: 'https://app.powerbi.com/reportEmbed?reportId=63d67093-f294-4b13-b200-cef7d1eee9be&autoAuth=true&ctid=1b2c5f2a-129c-417f-86b2-833b41b701a1',
    badge: 'Projeto Real',
  },
  {
    id: 3,
    category: 'Bots de IA',
    title: 'Letic.IA — Bot Interno Philozon',
    description: 'Assistente virtual inteligente desenvolvido no Microsoft Copilot Studio para uso interno na Philozon. A Letic.IA responde dúvidas, automatiza consultas e está integrada ao ambiente Microsoft 365.',
    technologies: ['Copilot Studio', 'Power Automate', 'Microsoft 365'],
    result: 'Colaboradores passaram a ter respostas instantâneas a dúvidas internas, reduzindo acionamentos ao time de suporte',
    metric: { icon: Bot, value: 'IA', label: 'Generativa' },
    color: 'from-violet-500 to-purple-600',
    preview: 'bg-gradient-to-br from-violet-500/20 to-purple-600/10',
    chartType: 'bot',
    badge: 'Projeto Real',
  },
  {
    id: 4,
    category: 'Automação',
    title: 'Aniversariantes RH — Philozon',
    description: 'Fluxo Power Automate que verifica diariamente os aniversariantes do mês consultando tabela Excel no SharePoint, calcula os dias até o próximo aniversário e dispara e-mails personalizados com cartão de parabéns automaticamente.',
    technologies: ['Power Automate', 'SharePoint', 'Excel', 'Outlook'],
    result: 'Reconhecimento automático de 100% dos aniversariantes sem nenhuma intervenção manual do time de RH',
    metric: { icon: Clock, value: '0h', label: 'Manual' },
    color: 'from-pink-500 to-rose-600',
    preview: 'bg-gradient-to-br from-pink-500/20 to-rose-600/10',
    chartType: 'flow',
    badge: 'Projeto Real',
  },
  {
    id: 5,
    category: 'Automação',
    title: 'Aviso de Oportunidades Abertas — Zoho CRM',
    description: 'Automação no Make que consulta diariamente o Zoho CRM, lista todas as oportunidades abertas por canal (Venda Direta, Inside Sales, Prescritor, Revenda Digital, Outside Sales), agrega os dados por consultor e montante, e envia mensagem formatada automaticamente no Microsoft Teams.',
    technologies: ['Make', 'Zoho CRM', 'Microsoft Teams'],
    result: 'Time comercial recebe diariamente no Teams um relatório completo de oportunidades abertas por canal e consultor, sem nenhuma ação manual',
    metric: { icon: Zap, value: 'Diário', label: 'Automático' },
    color: 'from-rose-500 to-pink-600',
    preview: 'bg-gradient-to-br from-rose-500/20 to-pink-600/10',
    chartType: 'flow',
    badge: 'Projeto Real',
  },
]

function MiniChart({ type, color }) {
  if (type === 'bot') {
    return (
      <div className="h-16 px-4 flex items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Bot size={14} className="text-white" />
          </div>
          <div className="flex gap-0.5 mt-1">
            {[1,2,3].map(i => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${color} opacity-${i === 2 ? '100' : '50'} animate-bounce`} style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-1.5">
          {['Pergunta recebida', 'Processando...', 'Respondido ✓'].map((t, i) => (
            <div key={i} className={`text-xs px-2 py-0.5 rounded bg-white/10 text-gray-400 ${i === 2 ? 'text-emerald-400 bg-emerald-500/10' : ''}`}>{t}</div>
          ))}
        </div>
      </div>
    )
  }
  if (type === 'bar') {
    return (
      <div className="flex items-end gap-1.5 h-16 px-2">
        {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm bg-gradient-to-t ${color} opacity-60 hover:opacity-100 transition-opacity`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    )
  }
  if (type === 'line') {
    return (
      <div className="h-16 px-2 flex items-center">
        <svg viewBox="0 0 200 60" className="w-full" fill="none">
          <path d="M0,50 C20,40 40,30 60,35 S100,15 120,20 S160,5 200,10" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M0,50 C20,40 40,30 60,35 S100,15 120,20 S160,5 200,10 L200,60 L0,60 Z" fill="url(#areaGrad)" opacity="0.2"/>
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="200" y2="0">
              <stop stopColor="#10b981"/><stop offset="1" stopColor="#0d9488"/>
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="60">
              <stop stopColor="#10b981"/><stop offset="1" stopColor="#10b981" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }
  if (type === 'flow') {
    return (
      <div className="h-16 px-3 flex items-center justify-between gap-2">
        {['Gatilho', '→', 'Processo', '→', 'Ação'].map((s, i) => (
          s === '→'
            ? <span key={i} className="text-gray-600 text-xs">→</span>
            : <div key={i} className={`flex-1 text-center py-1 rounded text-xs font-medium bg-gradient-to-r ${color} bg-opacity-20 text-white/70 border border-white/10`}>{s}</div>
        ))}
      </div>
    )
  }
  return (
    <div className="h-16 px-2 flex items-center justify-center gap-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-1.5">
          {[1, 2, 3].map((j) => (
            <div key={j} className={`w-3 h-3 rounded-sm bg-gradient-to-br ${color} opacity-${j === 2 ? '80' : '40'}`} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projetos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#060d1f] to-[#0a0f1e]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Portfólio</span>
          </div>
          <h2 className="section-title mb-4">
            Projetos que <span className="gradient-text">geraram resultados</span>
          </h2>
          <p className="section-subtitle">
            Casos reais com impacto mensurável em empresas de diferentes segmentos.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="card-glass card-hover group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 0.06}s`, animationFillMode: 'both' }}
            >
              {/* Chart preview */}
              <div className={`${project.preview} border-b border-white/5 relative overflow-hidden`}>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full border border-white/10">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30 font-medium">
                      ✓ {project.badge}
                    </span>
                  )}
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  <project.metric.icon size={14} className="text-white/70" />
                  <span className="text-white font-bold text-sm">{project.metric.value}</span>
                </div>
                <div className="pt-10 pb-2">
                  <MiniChart type={project.chartType} color={project.color} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="bg-white/3 border border-white/8 rounded-xl p-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">Resultado</p>
                  <p className="text-sm text-gray-300 leading-snug">{project.result}</p>
                </div>

                {/* Link if available */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    <ExternalLink size={12} />
                    Ver relatório (acesso interno)
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            <ExternalLink size={16} />
            Discutir Seu Projeto
          </button>
        </div>
      </div>
    </section>
  )
}
