import { useQueryClient } from "@tanstack/react-query";

import { Avatar, Box, Icon, Text, TouchableOpacityBox } from "@components";

import {
  Friend,
  useAcceptFriendRequest,
  useDeleteFriend,
  useRejectFriendRequest,
} from "@domain";
import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { FriendTypes } from "../types";

interface FriendItemProps {
  type: FriendTypes;
  friend: Pick<Friend, "id" | "name" | "photo">;
}

export const FriendItem = ({ type, friend }: FriendItemProps) => {
  const queryClient = useQueryClient();
  const { showToast } = useToastService();
  const { handleAcceptFriendRequest, acceptingFriendRequest } =
    useAcceptFriendRequest();
  const { handleRejectFriendRequest, rejectingFriendRequest } =
    useRejectFriendRequest();
  const { handleDeleteFriend, deletingFriend } = useDeleteFriend();

  function refetchQueries() {
    queryClient.refetchQueries({ queryKey: [QueryKeys.GetFriends] });
    queryClient.refetchQueries({ queryKey: [QueryKeys.GetFriendRequests] });
  }

  async function acceptFriendRequest() {
    try {
      await handleAcceptFriendRequest({ friendRequestId: friend.id });
      refetchQueries();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      showToast({
        duration: 7000,
        type: "error",
        message: "Ocorreu um erro ao aceitar a solicitação de amizade",
      });
    }
  }

  async function rejectFriendRequest() {
    try {
      await handleRejectFriendRequest({ friendRequestId: friend.id });
      refetchQueries();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      showToast({
        duration: 7000,
        type: "error",
        message: "Ocorreu um erro ao rejeitar a solicitação de amizade",
      });
    }
  }

  async function deleteFriend() {
    try {
      await handleDeleteFriend({ id: friend.id });
      refetchQueries();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast({
        duration: 7000,
        type: "error",
        message: "Ocorreu um erro ao deletar a amizade",
      });
    }
  }

  return (
    <Box
      mt={"s18"}
      columnGap={"s12"}
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <TouchableOpacityBox
        columnGap={"s12"}
        alignItems={"center"}
        activeOpacity={1}
        flexDirection={"row"}
      >
        <Avatar
          name={friend.name}
          photo={friend.photo}
          textSize="paragraphsLarge"
          size={40}
        />
        <Text
          weight="medium"
          preset="paragraphsXL"
          color={"backgroundConstrast"}
        >
          {friend.name}
        </Text>
      </TouchableOpacityBox>
      <Box flexDirection={"row"} columnGap={"s12"}>
        {type === "FRIEND_REQUEST" && (
          <Icon
            name={"check"}
            size="s24"
            color={"success"}
            disabled={acceptingFriendRequest}
            onPress={acceptFriendRequest}
          />
        )}
        <Icon
          name="x"
          size="s24"
          color="deleteButton"
          disabled={rejectingFriendRequest || deletingFriend}
          onPress={() =>
            type === "FRIEND_REQUEST" ? rejectFriendRequest() : deleteFriend()
          }
        />
      </Box>
    </Box>
  );
};
