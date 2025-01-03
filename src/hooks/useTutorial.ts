import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

import { useAuth, useSplash } from "@services";

export const useTutorial = () => {
  const { session, updateNewUserStatus } = useAuth();

  const { splashComplete } = useSplash();

  const [showStartTutorialPopup, setShowStartTutorialPopup] = useState(false);

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const checkFirstTime = async () => {
      if (!session?.user.user_metadata?.isNewUser) {
        return;
      } else if (splashComplete) {
        setShowStartTutorialPopup(true);

        updateNewUserStatus(false);
      }
    };

    checkFirstTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [splashComplete]);

  return { scrollRef, showStartTutorialPopup, setShowStartTutorialPopup };
};
