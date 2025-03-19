export type Friend = {
  id: string;
  photo: string;
  name: string;
  userId: string;
  createdAt: string;
};

export type FriendRequestsAPI = {
  request_id: string;
  requesting_user_id: string;
  requesting_user_name: string;
  requesting_user_avatar: string;
  request_created_at: string;
};

export type FriendAPI = {
  friend_id: string;
  friend_name: string;
  friend_photo: string;
  friendship_id: string;
  created_at: string;
};

export namespace RejectFriendRequest {
  export type Params = {
    friendRequestId: string;
  };
  export type Result = void;
}

export namespace AcceptFriendRequest {
  export type Params = {
    friendRequestId: string;
  };
  export type Result = void;
}

export namespace GetFriends {
  export type Params = void;
  export type Result = Friend[];
}

export namespace DeleteFriend {
  export type Params = {
    id: string;
  };
  export type Result = void;
}
