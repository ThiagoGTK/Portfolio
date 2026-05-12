import { BarChart2, RefreshCw, Database, Brain, Target, GitMerge, Zap, Workflow, Link2, Bot } from 'lucide-react'

const services = [
  {
    icon: BarChart2,
    title: 'Criação de Dashboards',
    description: 'Painéis interativos e visualmente impactantes no Power BI e Zoho Analytics. Do protótipo ao deploy, com filtros, KPIs e navegação intuitiva.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: 'Automação de Relatórios',
    description: 'Relatórios que se atualizam sozinhos e chegam ao e-mail na hora certa. Elimine o trabalho manual de coleta e envio de dados.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  {
    icon: Database,
    title: 'ETL e Tratamento de Dados',
    description: 'Pipelines de dados robustos para extrair, transformar e carregar informações de múltiplas fontes com qualidade e rastreabilidade.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  },
  {
    icon: Brain,
    title: 'Análise Estratégica',
    description: 'Análises descritivas e diagnósticas que revelam padrões ocultos, oportunidades de crescimento e riscos operacionais nos seus dados.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  },
  {
    icon: Target,
    title: 'KPIs e Indicadores',
    description: 'Definição e acompanhamento de indicadores de desempenho alinhados às metas do negócio. OKRs, KPIs financeiros, operacionais e de RH.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
  },
  {
    icon: GitMerge,
    title: 'Integração de Dados',
    description: 'Conexão entre sistemas, APIs e bancos de dados para centralizar informações. Elimine silos de dados e tenha uma visão 360° do negócio.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
  },
  {
    icon: Zap,
    title: 'Automação de Processos',
    description: 'Transformo processos manuais e repetitivos em fluxos automatizados. Reduza erros, economize tempo e escale as operações com eficiência.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]',
  },
  {
    icon: Workflow,
    title: 'Fluxos com Power Automate',
    description: 'Automações dentro do ecossistema Microsoft: aprovações, notificações, gatilhos de dados e integrações com Teams, SharePoint e Dynamics.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
  },
  {
    icon: Link2,
    title: 'Integrações com Make',
    description: 'Cenários visuais no Make (Integromat) conectando CRM, ERP, e-mail, WhatsApp, planilhas e mais de 1.500 aplicativos.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
  },
  {
    icon: Bot,
    title: 'Bots de IA com Copilot Studio',
    description: 'Desenvolvimento de assistentes virtuais inteligentes com Microsoft Copilot Studio. Bots conversacionais integrados ao Teams, SharePoint e sistemas internos, com IA generativa.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">O que ofereço</span>
          </div>
          <h2 className="section-title mb-4">
            Serviços que <span className="gradient-text">transformam</span>
            <br />seu negócio
          </h2>
          <p className="section-subtitle">
            Soluções completas em dados, BI e automação para empresas que querem crescer com inteligência.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal group relative rounded-2xl p-6 border transition-all duration-300 cursor-default ${service.glow} ${
                service.highlight
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border-cyan-500/30'
                  : 'bg-white/[0.03] border-white/8 hover:border-white/15'
              }`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {service.highlight && (
                <div className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${service.bg} border ${service.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={22} className={service.color} />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-gray-600 group-hover:text-cyan-400 transition-colors duration-200">
                <span>Saiba mais</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-gray-400 mb-4">Precisa de algo personalizado?</p>
          <button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Solicitar Proposta Personalizada
          </button>
        </div>
      </div>
    </section>
  )
}
