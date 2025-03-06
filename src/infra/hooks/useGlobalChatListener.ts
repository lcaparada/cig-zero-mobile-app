import { useEffect } from "react";

import { supabase } from "@api";
import { useAuth, useChat } from "@services";

import { conversationsService } from "../../domain/Conversation/conversationsService";
import { ConversationMessageRealtime } from "../../domain/Conversation/conversationsTypes";

export const useGlobalChatListener = () => {
  const { updateMessageOnUI, removeMessageFromUI, editMessageFromUI } =
    useChat();
  const { session } = useAuth();

  useEffect(() => {
    const channel = supabase
      .channel("global-chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "conversation_messages" },
        async (payload) => {
          const typedPayload = payload.new as ConversationMessageRealtime;
          if (typedPayload.author_id === session?.user?.id) {
            return;
          }
          const author = await conversationsService.getAuthorInfo({
            authorId: typedPayload.author_id,
          });
          updateMessageOnUI({
            author,
            createdAt: typedPayload.created_at,
            id: typedPayload.id,
            text: typedPayload.text,
            wasEdited: typedPayload.was_edited,
            repliedMessage: typedPayload.replied_conversation_message_id,
          });
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "conversation_messages" },
        async (payload) => {
          const typedPayload = payload.new as ConversationMessageRealtime;
          if (typedPayload.author_id === session?.user?.id) {
            return;
          }
          editMessageFromUI({
            date: typedPayload.created_at.split("T")[0] ?? "",
            id: typedPayload.id,
            newText: typedPayload.text,
          });
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "conversation_messages" },
        async (payload) => {
          const typedPayload = payload.old as { id: string };
          removeMessageFromUI(typedPayload.id);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
