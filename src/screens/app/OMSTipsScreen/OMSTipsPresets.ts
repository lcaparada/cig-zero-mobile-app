import { OMSItemProps } from "./components";

export const omsTips: Pick<
  OMSItemProps,
  "title" | "description" | "target" | "current" | "percentage"
>[] = [
  {
    title: "Primeiras 24 horas",
    description:
      "A pressão arterial e a frequência cardíaca começam a cair para níveis normais.",
    current: 22,
    percentage: (22 / 24) * 100,
    target: 24,
  },
  {
    title: "Primeiras 48 horas",
    description:
      "O monóxido de carbono é eliminado do corpo, e o oxigênio no sangue aumenta para níveis saudáveis. O olfato e o paladar também começam a melhorar.",
    current: 22,
    percentage: (22 / 48) * 100,
    target: 48,
  },
  {
    title: "Primeiras 72 horas",
    description:
      "Os brônquios relaxam, facilitando a respiração, e o nível de energia começa a aumentar.",
    current: 22,
    percentage: (22 / 72) * 100,
    target: 72,
  },
  {
    title: "Primeira semana",
    description:
      "O risco de recaída é alto, mas se você ultrapassar esta semana, as chances de sucesso aumentam significativamente.",
    current: 2,
    percentage: (2 / 7) * 100,
    target: 7,
  },
  {
    title: "2 semanas a 3 meses",
    description:
      "A circulação sanguínea melhora e a função pulmonar pode aumentar em até 30%.",
    current: 2,
    percentage: (2 / 90) * 100,
    target: 90,
  },
  {
    title: "1 a 9 meses",
    description:
      "A circulação sanguínea melhora e a função pulmonar pode aumentar em até 30%.",
    current: 2,
    percentage: (2 / 270) * 100,
    target: 270,
  },
  {
    title: "1 ano",
    description:
      "O risco de doenças cardíacas é reduzido pela metade em comparação com alguém que ainda fuma.",
    current: 2,
    percentage: (2 / 365) * 100,
    target: 365,
  },
  {
    title: "5 anos",
    description:
      "O risco de câncer de boca, garganta, esôfago e bexiga é reduzido pela metade. O risco de derrame é reduzido ao nível de quem nunca fumou.",
    current: 2,
    percentage: (2 / 1826) * 100,
    target: 1826,
  },
  {
    title: "10 anos",
    description:
      "O risco de câncer de pulmão cai pela metade em comparação com um fumante. O risco de câncer de boca, garganta, esôfago, bexiga, rins e pâncreas também diminui significativamente.",
    current: 2,
    percentage: (2 / 3652) * 100,
    target: 3652,
  },
  {
    title: "15 anos",
    description:
      "O risco de doenças cardíacas é equivalente ao de alguém que nunca fumou.",
    current: 2,
    percentage: (2 / 5478) * 100,
    target: 5478,
  },
];
