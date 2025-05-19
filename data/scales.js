export const scales = {
  "PHQ-9": {
    title: "PHQ-9 - Questionário de Saúde do Paciente",
    pages: [
      {
        name: "phq9",
        elements: [
          {
            type: "radiogroup",
            name: "phq9_q1",
            title: "Pouco interesse ou prazer em fazer as coisas",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q2",
            title: "Sentiu-se para baixo, deprimido ou sem esperança",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q3",
            title: "Dificuldade para adormecer ou permanecer dormindo, ou dormir em excesso",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q4",
            title: "Sentiu-se cansado ou com pouca energia",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q5",
            title: "Falta de apetite ou comer em excesso",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q6",
            title: "Sentiu-se mal consigo mesmo — ou que você é um fracasso ou que decepcionou sua família",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q7",
            title: "Dificuldade de concentração nas coisas, como ler o jornal ou ver televisão",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q8",
            title: "Movimento ou fala tão lenta que outras pessoas poderiam ter notado? Ou o oposto — estar agitado ou inquieto mais que o normal",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "phq9_q9",
            title: "Pensou que seria melhor estar morto ou se ferir de alguma forma",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          }
        ]
      }
    ]
  },

  "GAD-7": {
    title: "GAD-7 - Escala de Ansiedade Generalizada",
    pages: [
      {
        name: "gad7",
        elements: [
          {
            type: "radiogroup",
            name: "gad7_q1",
            title: "Sentiu-se nervoso, ansioso ou no limite",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "gad7_q2",
            title: "Não conseguiu parar ou controlar as preocupações",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "gad7_q3",
            title: "Preocupou-se demais com diferentes coisas",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "gad7_q4",
            title: "Teve dificuldade em relaxar",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "gad7_q5",
            title: "Sentiu-se tão inquieto que foi difícil ficar parado",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "gad7_q6",
            title: "Ficou facilmente irritado ou incomodado",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          },
          {
            type: "radiogroup",
            name: "gad7_q7",
            title: "Sentiu medo como se algo terrível pudesse acontecer",
            isRequired: true,
            choices: ["0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"]
          }
        ]
      }
    ]
  },
  "DASS-21": {
    title: "DASS-21 - Escala de Depressão, Ansiedade e Estresse",
    pages: [
      {
        name: "dass21",
        elements: [
          {
            type: "radiogroup",
            name: "dass21_q1",
            title: "Achar difícil relaxar",
            isRequired: true,
            choices: [
              "0 = Não se aplicou de forma alguma",
              "1 = Aplicou-se em algum grau",
              "2 = Aplicou-se em grau considerável",
              "3 = Aplicou-se muito ou na maior parte do tempo"
            ]
          },
          {
            type: "radiogroup",
            name: "dass21_q2",
            title: "Sentiu boca seca",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q3",
            title: "Não conseguia, aparentemente, sentir qualquer entusiasmo",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q4",
            title: "Sentiu-se com alguma dificuldade para respirar (por ex.: respiração excessivamente rápida, falta de ar mesmo sem esforço físico)",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q5",
            title: "Achou difícil acalmar-se após algo que o aborreceu",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q6",
            title: "Tendeu a reagir de forma exagerada às situações",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q7",
            title: "Sentiu tremores (por ex.: nas mãos)",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q8",
            title: "Achou difícil se animar com alguma coisa",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q9",
            title: "Sentiu-se agitado",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q10",
            title: "Sentiu-se consumido pela tristeza",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q11",
            title: "Sentiu dificuldade de iniciativa para fazer as coisas",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q12",
            title: "Sentiu-se irritado",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q13",
            title: "Dificuldade para suportar a interrupção do que estava fazendo",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q14",
            title: "Sentiu que estava gastando muita energia",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q15",
            title: "Sentiu-se triste e abatido",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q16",
            title: "Dificuldade de tolerar interferências externas em suas tarefas",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q17",
            title: "Sentiu que não tinha nada para esperar",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q18",
            title: "Sentiu-se muito sensível",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q19",
            title: "Sentiu-se mentalmente tenso (por ex.: pensamentos rápidos)",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q20",
            title: "Sentiu-se encurralado",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          },
          {
            type: "radiogroup",
            name: "dass21_q21",
            title: "Dificuldade em manter o entusiasmo nas tarefas",
            isRequired: true,
            choices: ["0", "1", "2", "3"]
          }
        ]
      }
    ]
  },
  "MPFI-24": {
    title: "MPFI-24 - Medida Multidimensional de Flexibilidade Psicológica",
    pages: [
      {
        name: "mpfi24",
        elements: [
          {
            type: "radiogroup",
            name: "mpfi24_q1",
            title: "Aceito os pensamentos e sentimentos negativos que tenho.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q2",
            title: "Luto contra sentimentos negativos.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q3",
            title: "Sigo meus valores mesmo quando é difícil.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q4",
            title: "Evito sentir emoções negativas.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q5",
            title: "Consigo me concentrar no que é importante mesmo quando estou estressado.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q6",
            title: "Me preocupo tanto com os meus sentimentos negativos que não consigo me concentrar.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q7",
            title: "Tento evitar pensamentos negativos.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q8",
            title: "Sou capaz de aceitar os meus sentimentos sem julgamento.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q9",
            title: "Eu deixo meus pensamentos me controlarem.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q10",
            title: "Atuo de acordo com meus valores independentemente das emoções que estou sentindo.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q11",
            title: "Julgo meus sentimentos como bons ou ruins.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q12",
            title: "Meus pensamentos negativos impedem que eu viva a vida que quero.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q13",
            title: "Tenho compaixão por mim mesmo mesmo quando estou sofrendo.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q14",
            title: "Fico preso em pensamentos negativos.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q15",
            title: "Posso estar presente e focado mesmo com desconforto emocional.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q16",
            title: "Julgo duramente meus sentimentos negativos.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q17",
            title: "Sou capaz de agir de forma consistente com meus valores.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q18",
            title: "Evito sensações desagradáveis no meu corpo.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q19",
            title: "Deixo de fazer coisas importantes para mim por causa de pensamentos negativos.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q20",
            title: "Permito-me sentir emoções difíceis como parte da experiência humana.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q21",
            title: "Sou dominado por emoções difíceis.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q22",
            title: "Me conecto com o momento presente com curiosidade e abertura.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q23",
            title: "Reprimo sentimentos dolorosos em vez de aceitá-los.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "mpfi24_q24",
            title: "Posso manter o foco em meus valores mesmo sob estresse.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5 = Sempre"]
          }
        ]
      }
    ]
  },
  "PsyFlex": {
    title: "PsyFlex - Medida de Flexibilidade Psicológica",
    pages: [
      {
        name: "psyflex",
        elements: [
          {
            type: "radiogroup",
            name: "psyflex_q1",
            title: "Eu aceito os sentimentos desagradáveis que surgem.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5", "6", "7 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "psyflex_q2",
            title: "Luto contra sentimentos desagradáveis.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5", "6", "7 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "psyflex_q3",
            title: "Estou atento ao momento presente mesmo quando estou desconfortável.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5", "6", "7 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "psyflex_q4",
            title: "Ajo de forma coerente com meus valores, mesmo em situações difíceis.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5", "6", "7 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "psyflex_q5",
            title: "Julgo meus sentimentos como ruins ou inaceitáveis.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5", "6", "7 = Sempre"]
          },
          {
            type: "radiogroup",
            name: "psyflex_q6",
            title: "Fico preso em pensamentos e sentimentos negativos.",
            isRequired: true,
            choices: ["1 = Nunca", "2", "3", "4", "5", "6", "7 = Sempre"]
          }
        ]
      }
    ]
  },

  "Flourishing": {
    title: "Flourishing - Escala de Florescimento Humano",
    pages: [
      {
        name: "flourishing",
        elements: [
          {
            type: "radiogroup",
            name: "flourish_q1",
            title: "Levo uma vida com um propósito claro.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "flourish_q2",
            title: "Meus relacionamentos sociais são solidários e gratificantes.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "flourish_q3",
            title: "Sou competente e capaz nas atividades que considero importantes.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "flourish_q4",
            title: "Sou uma pessoa boa e viva uma vida boa.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "flourish_q5",
            title: "Sou otimista em relação ao meu futuro.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "flourish_q6",
            title: "As pessoas me respeitam.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "flourish_q7",
            title: "Contribuo ativamente para a felicidade dos outros.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "flourish_q8",
            title: "Sou engajado e interessado na vida.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5", "6", "7 = Concordo totalmente"]
          }
        ]
      }
    ]
  },
  "ORS": {
    title: "ORS - Escala de Resultado da Sessão",
    pages: [
      {
        name: "ors",
        elements: [
          {
            type: "rating",
            name: "ors_q1",
            title: "Indique como você se sentiu pessoalmente esta semana (bem-estar pessoal)",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Mal",
            maxRateDescription: "Bem"
          },
          {
            type: "rating",
            name: "ors_q2",
            title: "Indique como estão seus relacionamentos esta semana (familiar, amoroso, amigos)",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Mal",
            maxRateDescription: "Bem"
          },
          {
            type: "rating",
            name: "ors_q3",
            title: "Indique como está indo no trabalho, escola ou em casa",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Mal",
            maxRateDescription: "Bem"
          },
          {
            type: "rating",
            name: "ors_q4",
            title: "Indique como você está de forma geral (bem-estar geral)",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Mal",
            maxRateDescription: "Bem"
          }
        ]
      }
    ]
  },

  "SRS": {
    title: "SRS - Escala de Avaliação da Sessão",
    pages: [
      {
        name: "srs",
        elements: [
          {
            type: "rating",
            name: "srs_q1",
            title: "A relação: senti que fomos compreendidos, respeitados e aceitos",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Ruim",
            maxRateDescription: "Ótimo"
          },
          {
            type: "rating",
            name: "srs_q2",
            title: "Metas e tópicos: falamos sobre o que é importante para mim",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Não",
            maxRateDescription: "Totalmente"
          },
          {
            type: "rating",
            name: "srs_q3",
            title: "Abordagem ou método: a forma como trabalhamos fez sentido para mim",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Nada útil",
            maxRateDescription: "Muito útil"
          },
          {
            type: "rating",
            name: "srs_q4",
            title: "Geral: algo ficou fora da sessão de hoje que você considera importante?",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            step: 0.1,
            minRateDescription: "Sim, ficou",
            maxRateDescription: "Nada ficou"
          }
        ]
      }
    ]
  },
  "WAI-C": {
    title: "WAI - Aliança Terapêutica (Cliente)",
    pages: [
      {
        name: "wai_c",
        elements: [
          {
            type: "radiogroup",
            name: "wai_c_q1",
            title: "Sinto que meu terapeuta e eu trabalhamos em direção a objetivos comuns.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "wai_c_q2",
            title: "O que estamos fazendo na terapia é útil.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_c_q3",
            title: "Sinto que meu terapeuta aprecia meu ponto de vista.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_c_q4",
            title: "Estamos de acordo sobre os objetivos da terapia.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_c_q5",
            title: "Estou confiante de que posso realizar as mudanças que estamos trabalhando.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_c_q6",
            title: "O terapeuta e eu temos entendimento mútuo sobre os objetivos.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_c_q7",
            title: "A forma como estamos trabalhando é apropriada para mim.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          }
        ]
      }
    ]
  },

  "WAI-T": {
    title: "WAI - Aliança Terapêutica (Terapeuta)",
    pages: [
      {
        name: "wai_t",
        elements: [
          {
            type: "radiogroup",
            name: "wai_t_q1",
            title: "Sinto que meu cliente e eu trabalhamos em direção a objetivos comuns.",
            isRequired: true,
            choices: ["1 = Discordo totalmente", "2", "3", "4", "5 = Concordo totalmente"]
          },
          {
            type: "radiogroup",
            name: "wai_t_q2",
            title: "O que estamos fazendo na terapia é útil.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_t_q3",
            title: "Sinto que meu cliente aprecia minha perspectiva como terapeuta.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_t_q4",
            title: "Estamos de acordo sobre os objetivos da terapia.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_t_q5",
            title: "Estou confiante de que o cliente pode realizar as mudanças.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_t_q6",
            title: "O cliente e eu temos entendimento mútuo sobre os objetivos.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "radiogroup",
            name: "wai_t_q7",
            title: "A forma como estamos trabalhando é apropriada para este cliente.",
            isRequired: true,
            choices: ["1", "2", "3", "4", "5"]
          }
        ]
      }
    ]
  }
};

