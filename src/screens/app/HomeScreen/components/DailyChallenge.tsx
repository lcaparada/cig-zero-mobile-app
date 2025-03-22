import { useNavigation } from "@react-navigation/native";

import {
  Box,
  BoxProps,
  HeadingWithDescription,
  Icon,
  IconName,
  Text,
  TouchableOpacityBox,
} from "@components";
import { shadow } from "@theme";

interface DailyChallengesData {
  icon: IconName;
  text: string;
  xp: number;
  description: string;
}

export const DailyChallenge = () => {
  const dailyChallenges: DailyChallengesData[] = [
    {
      icon: "goal",
      text: "Dê uma caminhada de 5 minutos em vez de fumar",
      xp: 30,
      description:
        "Sempre que sentir vontade de fumar, levante-se e caminhe por 5 minutos. Além de distrair sua mente, isso ajuda a reduzir o estresse e melhorar sua respiração. Pequenos passos levam a grandes conquistas! 💪🔥",
    },
    {
      icon: "fire",
      text: "Beba um copo de água quando sentir vontade de fumar",
      xp: 25,
      description:
        "Quando o desejo aparecer, pare por um momento e beba um copo de água. Isso ajuda a aliviar o impulso, hidratar seu corpo e refrescar a mente. Cada escolha saudável fortalece sua jornada rumo à liberdade! 🚀🌿",
    },
    {
      icon: "star2",
      text: "Espere 10 minutos antes de acender um cigarro",
      xp: 10,
      description:
        "Quando sentir vontade de fumar, respire fundo e aguarde 10 minutos. Esse pequeno atraso pode ajudar a reduzir a ansiedade e a enfraquecer o impulso. Cada minuto que você resiste é uma vitória no caminho para a sua liberdade! 🕊️🔥",
    },
  ];

  return (
    <Box paddingHorizontal={"s24"} rowGap={"s20"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Desafios diários"
        description="Complete os desafios e conquiste mais experiência."
      />
      <Box rowGap={"s12"}>
        {dailyChallenges.map((challenge, index) => (
          <DailyChallengeCard key={index} {...challenge} />
        ))}
      </Box>
    </Box>
  );
};

export const DailyChallengeCard = (params: DailyChallengesData) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacityBox
      onPress={() => navigation.navigate("DailyChallengeScreen", params)}
      {...shadow}
      {...$dailyChallengeCardBox}
    >
      <Icon name={params.icon} size="s40" />
      <Box flex={1}>
        <Text preset="paragraphsBig" weight="semiBold" color={"neutralLighest"}>
          {params.text}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
};

const $dailyChallengeCardBox: BoxProps = {
  height: 95,
  width: "100%",
  borderRadius: "s16",
  alignItems: "center",
  paddingHorizontal: "s16",
  flexDirection: "row",
  columnGap: "s12",
  backgroundColor: "primary",
};
