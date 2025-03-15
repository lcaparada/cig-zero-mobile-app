interface IOmsTips {
  title: string;
  target: number;
  description: string;
  type: "hours" | "weeks" | "months" | "years";
}

export const omsTips: IOmsTips[] = [
  {
    title: "Primeiras 24 horas",
    description:
      "A pressão arterial e a frequência cardíaca começam a cair para níveis normais.",
    target: 24,
    type: "hours",
  },
  {
    title: "Primeiras 48 horas",
    description:
      "O monóxido de carbono é eliminado do corpo, e o oxigênio no sangue aumenta para níveis saudáveis. O olfato e o paladar também começam a melhorar.",
    target: 48,
    type: "hours",
  },
  {
    title: "Primeiras 72 horas",
    description:
      "Os brônquios relaxam, facilitando a respiração, e o nível de energia começa a aumentar.",
    target: 72,
    type: "hours",
  },
  {
    title: "Primeira semana",
    description:
      "O risco de recaída é alto, mas se você ultrapassar esta semana, as chances de sucesso aumentam significativamente.",
    target: 168,
    type: "weeks",
  },
  {
    title: "2 semanas a 3 meses",
    description:
      "A circulação sanguínea melhora e a função pulmonar pode aumentar em até 30%.",
    target: 2190,
    type: "months",
  },
  {
    title: "1 a 9 meses",
    description:
      "A circulação sanguínea melhora e a função pulmonar pode aumentar em até 30%.",
    target: 6570,
    type: "months",
  },
  {
    title: "1 ano",
    description:
      "O risco de doenças cardíacas é reduzido pela metade em comparação com alguém que ainda fuma.",
    target: 8766,
    type: "years",
  },
  {
    title: "5 anos",
    description:
      "O risco de câncer de boca, garganta, esôfago e bexiga é reduzido pela metade. O risco de derrame é reduzido ao nível de quem nunca fumou.",
    target: 43830,
    type: "years",
  },
  {
    title: "10 anos",
    description:
      "O risco de câncer de pulmão cai pela metade em comparação com um fumante. O risco de câncer de boca, garganta, esôfago, bexiga, rins e pâncreas também diminui significativamente.",
    target: 87660,
    type: "years",
  },
  {
    title: "15 anos",
    description:
      "O risco de doenças cardíacas é equivalente ao de alguém que nunca fumou.",
    target: 131490,
    type: "years",
  },
];
