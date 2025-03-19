import { Friend, FriendAPI, FriendRequestsAPI } from "./friendsType";

function getFriendRequestsAdapter(
  friendRequestsAPI: FriendRequestsAPI[]
): Friend[] {
  return friendRequestsAPI.map((fr) => ({
    id: fr.request_id,
    userId: fr.requesting_user_id,
    name: fr.requesting_user_name,
    photo: fr.requesting_user_avatar,
    createdAt: fr.request_created_at,
  }));
}

function getFriendsAdapter(friendsAPI: FriendAPI[]): Friend[] {
  return friendsAPI.map((friend) => ({
    userId: friend.friend_id,
    name: friend.friend_name,
    photo: friend.friend_photo,
    id: friend.friendship_id,
    createdAt: friend.created_at,
  }));
}

export const friendsAdapter = {
  getFriendsAdapter,
  getFriendRequestsAdapter,
};
