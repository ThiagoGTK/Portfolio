# 📊 TG Data — Portfólio Profissional

Site de portfólio profissional desenvolvido para divulgar serviços de **Análise de Dados**, **Business Intelligence**, **Automação de Processos** e **Bots de IA**.

🔗 **[Ver site ao vivo](https://tgdata.vercel.app)** *(após deploy na Vercel)*

---

## 🚀 Sobre o Projeto

Site desenvolvido com foco em captação de clientes, demonstração de autoridade técnica e exibição de projetos reais. Design dark premium inspirado em plataformas SaaS de analytics.

### Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com stats reais e CTAs |
| **Sobre** | Experiência profissional com barras de progresso |
| **Tecnologias** | Stack completa com cards interativos |
| **Serviços** | 10 serviços detalhados com ícones |
| **Portfólio** | 5 projetos reais com filtro por categoria |
| **Diferenciais** | Benefícios com métricas reais |
| **Depoimento** | Feedback real da Gestora Comercial da Philozon |
| **Contato** | Formulário + links de redes sociais |

---

## 🛠️ Stack Tecnológica

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-0.378-F56565?style=flat)

- **React 18** — Componentização e estado
- **Tailwind CSS 3** — Estilização utility-first com paleta customizada
- **Vite 5** — Build tool e dev server
- **Lucide React** — Ícones profissionais
- **IntersectionObserver** — Animações de scroll nativas

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navegação fixa com blur
│   │   ├── Hero.jsx            # Seção inicial com animações
│   │   ├── About.jsx           # Sobre com barras de experiência
│   │   ├── Technologies.jsx    # Cards de tecnologias
│   │   ├── Services.jsx        # Cards de serviços
│   │   ├── Portfolio.jsx       # Projetos com filtro por categoria
│   │   ├── Differentials.jsx   # Diferenciais com stats
│   │   ├── Testimonials.jsx    # Depoimento real
│   │   ├── Contact.jsx         # Formulário + links sociais
│   │   └── Footer.jsx          # Rodapé completo
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Animações e utilitários globais
├── tailwind.config.js          # Paleta dark + cyan customizada
├── vite.config.js
└── index.html                  # SEO configurado
```

---

## 💼 Projetos no Portfólio

### Dashboards Power BI — Philozon
Painéis de BI integrados às bases internas da empresa para gestão comercial e analítica em tempo real.
> `Power BI` `SQL` `DAX`

### Letic.IA — Bot Interno Philozon
Assistente virtual desenvolvido no Microsoft Copilot Studio para uso interno com IA generativa integrada ao Microsoft 365.
> `Copilot Studio` `Power Automate` `Microsoft 365`

### Aniversariantes RH — Philozon
Fluxo Power Automate que verifica aniversariantes e dispara e-mails personalizados automaticamente via SharePoint + Outlook.
> `Power Automate` `SharePoint` `Excel` `Outlook`

### Aviso de Oportunidades Abertas — Zoho CRM
Automação Make que consolida oportunidades do CRM por canal e envia relatório diário formatado no Microsoft Teams.
> `Make` `Zoho CRM` `Microsoft Teams`

---

## 🎨 Design System

| Token | Valor |
|---|---|
| Background | `#0a0f1e` |
| Accent Primary | `#06b6d4` (cyan-500) |
| Accent Secondary | `#3b82f6` (blue-500) |
| Surface | `rgba(255,255,255,0.05)` |
| Fonte | Inter (300–900) |

---

## ⚡ Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/ThiagoGTK/Portfolio.git
cd Portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173**

---

## 🚀 Deploy na Vercel

```bash
# Build de produção
npm run build

# Deploy via Vercel CLI
npx vercel --prod
```

Ou conecte o repositório diretamente em **[vercel.com](https://vercel.com)** para deploy automático a cada push.

---

## 📬 Contato

| Canal | Link |
|---|---|
| 💼 LinkedIn | [Thiago Gaitkoski](https://www.linkedin.com/in/thiago-gaitkoski/) |
| 🐙 GitHub | [@ThiagoGTK](https://github.com/ThiagoGTK) |
| 📸 Instagram | [@tgdata](https://www.instagram.com/tgdata) |
| 📧 E-mail | thiago.gaitkoski@gmail.com |

---

<div align="center">
  <p>Desenvolvido por <strong>Thiago Gaitkoski</strong> — TG Data</p>
  <p><em>Transformando dados em decisões estratégicas</em></p>
</div>
