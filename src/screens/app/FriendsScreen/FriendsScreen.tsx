import { Box } from "@components";
import { useAppSafeAreaContext } from "@hooks";

import { useGetFriendRequests, useGetFriends } from "@domain";

import { FriendFlatlist, FriendsScreenHeader } from "./components";

export const FriendsScreen = () => {
  const { top, bottom } = useAppSafeAreaContext();

  const { friendRequests } = useGetFriendRequests();

  const { friends } = useGetFriends();

  return (
    <Box
      flex={1}
      rowGap={"s4"}
      backgroundColor={"primary"}
      style={{ paddingTop: top }}
    >
      <FriendsScreenHeader />
      <Box
        flex={1}
        style={{ paddingBottom: bottom }}
        backgroundColor={"background"}
        paddingHorizontal={"s24"}
        paddingVertical={"s30"}
        rowGap={"s30"}
      >
        <FriendFlatlist
          data={friends}
          title="Lista de amigos"
          type="LIST_FRIENDS"
        />
        <FriendFlatlist
          data={friendRequests}
          title="Solicitações de amizade"
          type="FRIEND_REQUEST"
        />
      </Box>
    </Box>
  );
};
