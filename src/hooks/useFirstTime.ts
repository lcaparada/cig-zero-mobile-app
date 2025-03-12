import { useEffect, useState } from "react";

import { secureStorage } from "@services";

interface UseFirstTimeProps {
  key: string;
}

export const useFirstTime = ({ key }: UseFirstTimeProps) => {
  const [isFirstTime, setIsFirstTime] = useState(false);

  async function markAsNotFirstTime() {
    try {
      await secureStorage.setItem(key, true);
    } catch (error) {
      console.error(error);
    }
  }

  async function checkIfIsFirstTime() {
    try {
      const result = await secureStorage.getItem<boolean>(key);
      if (result !== null) {
        setIsFirstTime(false);
      } else {
        setIsFirstTime(true);
      }
      markAsNotFirstTime();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    checkIfIsFirstTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isFirstTime,
  };
};
