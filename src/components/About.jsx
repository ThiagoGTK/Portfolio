import { CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Target, text: 'Foco em resultados mensuráveis e ROI claro' },
  { icon: Lightbulb, text: 'Transformação de dados brutos em insights acionáveis' },
  { icon: TrendingUp, text: 'Automações que economizam horas de trabalho manual' },
  { icon: CheckCircle2, text: 'Entregas rápidas com qualidade profissional' },
]

const experience = [
  { area: 'Business Intelligence', years: '2 anos', color: 'bg-cyan-500' },
  { area: 'Automação de Processos', years: '2 anos', color: 'bg-blue-500' },
  { area: 'ETL e Tratamento de Dados', years: '4 anos', color: 'bg-violet-500' },
  { area: 'Visualização de Dados', years: '2 anos', color: 'bg-emerald-500' },
]

export default function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative pt-5 pb-8 pl-5 pr-5">
              {/* Main card */}
              <div className="animated-border bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                {/* Profile avatar */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-black text-white shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                      AD
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#0a0f1e] shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Analista de Dados</h3>
                    <p className="text-cyan-400 text-sm">& Desenvolvedor de BI</p>
                  </div>
                </div>

                {/* Experience bars */}
                <div className="space-y-4">
                  {experience.map((item) => (
                    <div key={item.area}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-300 font-medium">{item.area}</span>
                        <span className="text-xs text-gray-500">{item.years}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: item.area === 'ETL e Tratamento de Dados' ? '90%' : '50%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl px-4 py-2 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <p className="text-white text-xs font-bold">10+ Projetos</p>
                <p className="text-cyan-100 text-xs">Concluídos</p>
              </div>

              {/* Bottom badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#111827] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
                <div className="flex -space-x-2">
                  {['bg-cyan-400', 'bg-blue-400', 'bg-violet-400'].map((c, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-[#111827]`} />
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">3+ Anos</p>
                  <p className="text-gray-400 text-xs">de Experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="reveal order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Sobre Mim</span>
            </div>

            <h2 className="section-title mb-6">
              Dados que geram{' '}
              <span className="gradient-text">impacto real</span>{' '}
              nos negócios
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sou especialista em transformar dados complexos em informações claras e decisões estratégicas. Com anos de experiência em <span className="text-white font-medium">Business Intelligence</span> e <span className="text-white font-medium">Automação de Processos</span>, ajudo empresas a extrair o máximo valor dos seus dados.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Meu trabalho vai além de criar dashboards bonitos: identifico gargalos operacionais, automatizo processos repetitivos e estruturo pipelines de dados que sustentam o crescimento do negócio. Cada projeto é desenvolvido com foco em <span className="text-cyan-400 font-medium">resultado mensurável</span>.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-500/20 transition-colors duration-200">
                  <item.icon size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
