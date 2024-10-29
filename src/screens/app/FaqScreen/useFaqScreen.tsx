import { useNavigation } from "@react-navigation/native";

export const useFaqScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToReportAnIssueScreen = () => {
    navigation.navigate("ReportAnIssueScreen");
  };

  const handleGetFaqsQuestionsAndAnswers = () => {
    return [
      {
        question: "Como funciona o questionário inicial?",
        answers: [
          "O questionário nos ajuda a entender seu histórico de vício e hábitos de fumo para criar um plano personalizado.",
        ],
      },
      {
        question: "Como funciona o registro diário de fumos?",
        answers: [
          "O registro diário permite que você acompanhe seu consumo de cigarros ao longo do tempo.",
          "Ele ajuda a visualizar o progresso na redução ou no caminho para parar de fumar.",
          "Você pode registrar quantos cigarros fumou e em que horário.",
        ],
      },
      {
        question: "Como recebo mensagens motivacionais?",
        answers: [
          "As mensagens motivacionais são enviadas regularmente para ajudar a manter sua motivação.",
          "Essas mensagens são personalizadas de acordo com seu progresso e suas conquistas.",
        ],
      },
      {
        question: "Para que serve o chat global?",
        answers: [
          "O chat global permite que você converse com outros usuários que estão na jornada de parar de fumar.",
          "É um espaço de apoio e troca de experiências.",
          "Você pode compartilhar suas dificuldades e sucessos com a comunidade.",
        ],
      },
      {
        question: "Como funcionam as missões semanais?",
        answers: [
          "As missões semanais são desafios específicos para ajudá-lo a reduzir o consumo de cigarros.",
          "Cada missão tem um objetivo, como reduzir um certo número de cigarros por semana.",
          "Concluir essas missões ajuda a alcançar conquistas e a manter a motivação.",
        ],
      },
      {
        question: "Quais tipos de conquistas existem no app?",
        answers: [
          "As conquistas são baseadas em tempo, redução no consumo e economia financeira.",
          "Você ganha conquistas conforme atinge marcos importantes, como uma semana sem fumar.",
          "Essas conquistas são projetadas para incentivar e celebrar seu progresso.",
        ],
      },
      {
        question: "O aplicativo é gratuito?",
        answers: [
          "Sim, o aplicativo oferece várias funcionalidades gratuitas para ajudar você a parar de fumar.",
          "Há também opções de recursos adicionais que podem ser desbloqueados, caso deseje.",
        ],
      },
      {
        question: "Posso editar ou excluir minhas informações?",
        answers: [
          "Sim, você pode editar ou excluir suas informações na seção de configurações do aplicativo.",
          "Isso inclui dados do questionário inicial e registros diários de fumos.",
        ],
      },
      {
        question: "Como entro em contato com o suporte?",
        answers: [
          'Você pode entrar em contato com o suporte através da seção de "Reportar um problema" no menu do aplicativo.',
          "Nossa equipe está disponível para ajudar com quaisquer problemas ou dúvidas.",
        ],
      },
    ];
  };

  return {
    handleGetFaqsQuestionsAndAnswers,
    handleNavigateToReportAnIssueScreen,
  };
};
