import { useEffect } from "react";

import { supabase } from "@api";

import { useAuth } from "../../services/authProvider/authProvider";

type UseAchievementsListener<T> = {
  userId?: string | null;
  onInsert: (newItem: T) => void;
};

const useAchievementsListener = <T>({
  userId,
  onInsert,
}: UseAchievementsListener<T>) => {
  const { session } = useAuth();

  useEffect(() => {
    if (userId) {
      supabase.realtime.accessToken = session?.access_token ?? "";
      const channel = supabase
        .channel("achievements-changes")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "achievements_on_users",
            filter: `user_id=eq.${userId}`,
          },
          (payload) => onInsert(payload.new as T)
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
};

export { useAchievementsListener };
