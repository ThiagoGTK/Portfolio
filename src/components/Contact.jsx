import { useState } from 'react'
import { MessageCircle, Linkedin, Github, Mail, Send, CheckCircle, MapPin, Clock, Instagram } from 'lucide-react'

const contactLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Thiago Gaitkoski',
    href: 'https://www.linkedin.com/in/thiago-gaitkoski/?skipRedirect=true',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.3)',
    bg: 'hover:bg-blue-500/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'ThiagoGTK',
    href: 'https://github.com/ThiagoGTK',
    color: 'from-gray-400 to-gray-600',
    glow: 'rgba(156,163,175,0.3)',
    bg: 'hover:bg-gray-500/10',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@tgdata',
    href: 'https://www.instagram.com/tgdata?igsh=YW9ncnF4b2Nvd3Zn&utm_source=qr',
    color: 'from-pink-500 to-orange-500',
    glow: 'rgba(236,72,153,0.3)',
    bg: 'hover:bg-pink-500/10',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'thiago.gaitkoski@gmail.com',
    href: 'mailto:thiago.gaitkoski@gmail.com',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
    bg: 'hover:bg-violet-500/10',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Contato</span>
          </div>
          <h2 className="section-title mb-4">
            Vamos <span className="gradient-text">trabalhar juntos</span>?
          </h2>
          <p className="section-subtitle">
            Pronto para transformar dados em decisões estratégicas? Fale comigo agora.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="reveal space-y-6">
            {/* Info card */}
            <div className="card-glass rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Informações de Contato</h3>

              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-xl border border-white/5 ${link.bg} transition-all duration-200 group`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      style={{ boxShadow: `0 4px 15px ${link.glow}` }}
                    >
                      <link.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{link.label}</p>
                      <p className="text-white text-sm font-medium">{link.value}</p>
                    </div>
                    <div className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors text-sm">→</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="card-glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-white font-bold">Disponibilidade</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock size={16} className="text-cyan-400" />
                  <span>Resposta em até <span className="text-white font-medium">24 horas</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>Remoto para todo o <span className="text-white font-medium">Brasil</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={16} className="text-emerald-400" />
                  <span>Aceitando novos projetos em <span className="text-white font-medium">2026</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <div className="card-glass rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-400">Entrarei em contato em até 24 horas. Obrigado!</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}
                    className="mt-6 btn-secondary text-sm"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white font-bold text-lg mb-6">Envie uma mensagem</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">Serviço de Interesse</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-[#0d1117]">Selecione um serviço...</option>
                      <option value="dashboard" className="bg-[#0d1117]">Criação de Dashboards</option>
                      <option value="automation" className="bg-[#0d1117]">Automação de Processos</option>
                      <option value="etl" className="bg-[#0d1117]">ETL e Tratamento de Dados</option>
                      <option value="analysis" className="bg-[#0d1117]">Análise Estratégica</option>
                      <option value="make" className="bg-[#0d1117]">Integrações com Make</option>
                      <option value="power-automate" className="bg-[#0d1117]">Fluxos Power Automate</option>
                      <option value="other" className="bg-[#0d1117]">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 font-medium mb-1.5 uppercase tracking-wider">Mensagem *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Descreva seu projeto ou necessidade..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
