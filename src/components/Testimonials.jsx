import { Star, Quote, Rocket } from 'lucide-react'

const testimonial = {
  name: 'Shirley Jesus',
  role: 'Gestora Comercial',
  company: 'Philozon',
  avatar: 'SJ',
  color: 'from-cyan-500 to-blue-600',
  date: '17 de abril de 2026',
  text: 'Parabéns, time! Acompanhei parte da evolução pelo link compartilhado pelo Thiago, está muito bom! Sabemos que existem visões fixas e outras que entram na esteira por demandas pontuais ou sazonais. Vamos administrando isso juntos, sempre buscando otimizar ao máximo os recursos que já temos. Seguimos evoluindo!',
  highlight: 'Está muito bom!',
  stars: 5,
}

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#060d1f] to-[#0a0f1e]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Depoimento</span>
          </div>
          <h2 className="section-title mb-4">
            O que dizem sobre <span className="gradient-text">o trabalho</span>
          </h2>
          <p className="section-subtitle">
            Feedback real de liderança após entrega de projeto de BI na Philozon.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="reveal">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/10 rounded-3xl" />
            <div className="absolute inset-[1px] bg-[#0d1117] rounded-3xl" />

            <div className="relative p-8 md:p-12">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <Quote size={48} className="text-cyan-500/10" />
              </div>

              {/* Stars */}
              <div className="mb-6">
                <StarRating count={testimonial.stars} />
              </div>

              {/* Main quote */}
              <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 max-w-2xl">
                "{testimonial.text}"
                <span className="ml-2">
                  <Rocket size={20} className="inline text-cyan-400" />
                </span>
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-cyan-500/30 via-white/10 to-transparent mb-8" />

              {/* Author */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-[0_0_25px_rgba(6,182,212,0.3)]`}>
                      {testimonial.avatar}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#0d1117] flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">✓</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full px-4 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-cyan-300 text-sm font-semibold">"{testimonial.highlight}"</span>
                  </div>
                  <span className="text-gray-600 text-xs">{testimonial.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof strip */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-violet-500/5 border border-white/8 reveal">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: '10+', label: 'Projetos Entregues' },
              { value: '3+', label: 'Anos de Experiência' },
              { value: '5★', label: 'Avaliação' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
