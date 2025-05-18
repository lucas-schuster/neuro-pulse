// Exemplo de estrutura. Substituir pelo JSON real importado
export const scales = {
  "PHQ-9": {
    title: "Escala de Depressão PHQ-9",
    pages: [
      {
        name: "PHQ9",
        elements: [
          {
            type: "radiogroup",
            name: "phq9_q1",
            title: "Pouco interesse ou prazer em fazer as coisas",
            choices: [
              "0 = Nunca", "1 = Vários dias", "2 = Mais da metade dos dias", "3 = Quase todos os dias"
            ]
          }
          // ...restante dos itens
        ]
      }
    ]
  }
  // ...outras escalas
};

