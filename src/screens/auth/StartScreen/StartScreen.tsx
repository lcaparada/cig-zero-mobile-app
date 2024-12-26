import { useRef, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { Box, Button } from "@components";
import { useAppSafeAreaContext } from "@hooks";

import { DirectionControls, Step } from "./components";

export const StartScreen = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [steps] = useState([
    {
      primaryTitle: "Monitoramento de Consumo",
      secondaryTitle:
        "Registre diariamente o consumo de cigarros e marque os dias sem fumar.",
      description:
        "Com o CigZero, você pode acompanhar seu progresso e se manter motivado na jornada para parar de fumar.",
    },
    {
      primaryTitle: "Dicas e Benefícios da OMS",
      secondaryTitle: "Saúde em primeiro lugar",
      description:
        "Descubra os impactos positivos de parar de fumar, com dicas e benefícios baseados na OMS.",
    },
    {
      primaryTitle: "Sistema de Conquistas",
      secondaryTitle: "Incentivo para cada passo",
      description:
        "Atinga metas e desbloqueie conquistas, como redução de consumo, economia financeira e tempo sem fumar.",
    },
    {
      primaryTitle: "Notificações Motivadoras",
      secondaryTitle: "Seu progresso importa",
      description:
        "Receba lembretes diários para registrar seu consumo e se inspire com mensagens motivadoras.",
    },
    {
      primaryTitle: "Estatísticas Detalhadas",
      secondaryTitle: "Visualize seu impacto",
      description:
        "Veja como parar de fumar muda sua vida com estatísticas como dinheiro economizado e dias sem fumar.",
    },
  ]);

  const scrollRef = useRef<ScrollView>(null);
  const { bottom } = useAppSafeAreaContext();
  const { width: WIDTH_SCREEN } = useWindowDimensions();

  const handleLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    setPageHeight(height);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const page = Math.round(yOffset / pageHeight);
    setCurrentPage(page);
  };

  const scrollToPage = (page: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: page * pageHeight, animated: true });
    }
  };

  return (
    <Box
      flex={1}
      flexDirection={"row"}
      alignItems={"center"}
      paddingRight={"s24"}
    >
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        onScroll={handleScroll}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        onLayout={handleLayout}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 24 }}
      >
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </ScrollView>
      <DirectionControls
        length={steps.length}
        onDownPress={() => scrollToPage(currentPage + 1)}
        onUpPress={() => scrollToPage(currentPage - 1)}
        currentPage={currentPage}
      />
      {currentPage === steps.length - 1 && (
        <Box
          left={24}
          bottom={bottom}
          position={"absolute"}
          width={WIDTH_SCREEN - 24 * 2}
        >
          <Button text="Começar agora" />
        </Box>
      )}
    </Box>
  );
};
