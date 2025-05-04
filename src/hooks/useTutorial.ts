import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

import { useAuth, useSplash } from "@services";

export const useTutorial = () => {
  const { session, updateUserShowTutorial } = useAuth();

  const { splashComplete } = useSplash();

  const [showStartTutorialPopup, setShowStartTutorialPopup] = useState(true);

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const checkFirstTime = async () => {
      if (!session?.user.user_metadata?.showTutorial) {
        return;
      } else if (splashComplete) {
        setShowStartTutorialPopup(true);
        updateUserShowTutorial(false);
      }
    };

    checkFirstTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [splashComplete]);

  return { scrollRef, showStartTutorialPopup, setShowStartTutorialPopup };
};
