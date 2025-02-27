import { Text } from "@components";

import { FriendTypes } from "../types";

interface EmptyItemProps {
  type: FriendTypes;
}

export const EmptyItem = ({ type }: EmptyItemProps) => {
  return (
    <Text color={"backgroundSecondConstrast"} mt={"s18"}>
      {type === "LIST_FRIENDS"
        ? "Você nāo possui nenhum amigo, que tal adicionar um ?"
        : "Você nāo possui nenhuma solicitação de amizade!"}
    </Text>
  );
};
