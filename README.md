# 🧠 NeuroPulse — Plataforma de Avaliação Psicológica e Acompanhamento Terapêutico

NeuroPulse é uma aplicação fullstack moderna que permite psicólogos aplicarem escalas clínicas e de bem-estar, acompanharem a evolução dos pacientes, e gerarem relatórios analíticos com gráficos, percentis, e cálculos estatísticos como RCI (Reliable Change Index).

---

## 🚀 Funcionalidades principais

- 📝 Aplicação de escalas baseadas em SurveyJS
- 📈 Cálculo automático de escore total, RCI, z-score e percentis
- 📊 Visualização gráfica da evolução do paciente
- 🔐 Autenticação com JWT (Terapeuta)
- 📎 Exportação de relatórios em PDF
- 📚 Escalas baseadas em instrumentos validados (PHQ-9, DASS-21, GAD-7, PsyFlex, MPFI, WHOQOL, etc.)

---

## 🛠️ Tecnologias utilizadas

| Camada        | Tecnologias                      |
|---------------|----------------------------------|
| Frontend      | React + Vite + SurveyJS          |
| Backend       | Node.js + Express + Prisma ORM   |
| Banco de Dados| PostgreSQL                       |
| Autenticação  | JWT (JSON Web Token)             |
| Relatórios    | PDFKit                           |

---

## 📦 Estrutura de diretórios

```txt
NeuroPulse/
├── backend/
│   ├── src/
│   │   ├── routes/             # Rotas da API (auth, dashboard, resultados)
│   │   ├── middleware/         # JWT middleware
│   │   ├── lib/prisma.js       # Prisma Client
│   │   └── index.js            # App Express principal
│   ├── prisma/                 # Esquema do banco
│   └── .env                    # Variáveis de ambiente do backend
├── frontend/
│   ├── src/
│   │   ├── components/         # Login, Dashboard, SessionDetail
│   │   ├── data/               # Arquivos de escalas e psicometria
│   │   └── App.jsx             # Definição de rotas
│   └── .env                    # VITE_API_URL
└── README.md


🧪 Como rodar localmente
🔧 Pré-requisitos
Node.js v18+

PostgreSQL

Git

⚙️ 1. Clone o projeto
bash
Copiar
Editar
git clone https://github.com/seu-usuario/neuro-pulse.git
cd neuro-pulse
⚙️ 2. Configure o backend
bash
Copiar
Editar
cd backend
cp .env.example .env  # ou crie seu próprio .env

# Edite o .env e configure o DB_URL
# Exemplo: DB_URL=postgresql://usuario:senha@localhost:5432/neuropulse

npm install
npx prisma migrate dev --name init
node prisma/seed.js  # (opcional: cria terapeuta e cliente)
npm run dev
⚙️ 3. Configure o frontend
bash
Copiar
Editar
cd ../frontend
cp .env.example .env  # ou crie
# VITE_API_URL=http://localhost:3333

npm install
npm run dev
🧪 Testar login
Login de teste:

Email: neuro@pulse.com

Senha: senha123

📐 Escalas disponíveis
PHQ-9, GAD-7

DASS-21 (Depressão, Ansiedade, Estresse)

PsyFlex, Flourishing Scale

MPFI-24 (Processos Flexíveis e Inflexíveis)

WHOQOL-BREF

WAI-C / WAI-T (Aliança terapêutica)

ORS / SRS

📊 Análises automáticas
Cada aplicação gera:

Score total

Classificação qualitativa

RCI (Índice de mudança confiável)

Z-score e percentil (baseado em dados normativos)

Gráficos de evolução

Exportação PDF com resumo completo


