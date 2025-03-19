import { supabaseEdgeFunction } from "@api";

import { friendsAdapter } from "./friendsAdapter";
import {
  GetFriends,
  AcceptFriendRequest,
  RejectFriendRequest,
  DeleteFriend,
} from "./friendsType";

async function getFriendRequests() {
  try {
    const { data } = await supabaseEdgeFunction.post("get-friend-requests");
    return friendsAdapter.getFriendRequestsAdapter(data);
  } catch (error) {
    throw error;
  }
}

async function getFriends(): Promise<GetFriends.Result> {
  try {
    const { data } = await supabaseEdgeFunction.post("get-friends");
    return friendsAdapter.getFriendsAdapter(data);
  } catch (error) {
    throw error;
  }
}

async function deleteFriend(
  params: DeleteFriend.Params
): Promise<DeleteFriend.Result> {
  try {
    await supabaseEdgeFunction.post("delete-friend", params);
  } catch (error) {
    throw error;
  }
}

async function acceptFriendRequest(
  params: AcceptFriendRequest.Params
): Promise<AcceptFriendRequest.Result> {
  try {
    await supabaseEdgeFunction.post("accept-friend-request", {
      friend_request_id: params.friendRequestId,
    });
  } catch (error) {
    throw error;
  }
}

async function rejectFriendRequest(
  params: RejectFriendRequest.Params
): Promise<RejectFriendRequest.Result> {
  try {
    await supabaseEdgeFunction.post("reject-friend-request", {
      friend_request_id: params.friendRequestId,
    });
  } catch (error) {
    throw error;
  }
}

export const friendsService = {
  getFriends,
  deleteFriend,
  getFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
};
