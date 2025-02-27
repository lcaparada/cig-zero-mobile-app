import { FlatList, ListRenderItem } from "react-native";

import { Box, Text } from "@components";

import { Friend } from "@domain";

import { FriendTypes } from "../types";

import { EmptyItem } from "./EmptyItem";
import { FriendItem } from "./FriendItem";

interface FriendFlatlistProps {
  data: Friend[] | undefined;
  type: FriendTypes;
  title: string;
}

export const FriendFlatlist = ({ data, type, title }: FriendFlatlistProps) => {
  const renderItem: ListRenderItem<Friend> = ({ item, index }) => {
    return <FriendItem friend={item} type={type} key={index} />;
  };

  return (
    <Box>
      <Text color={"backgroundConstrast"} weight="semiBold" preset="titleSmall">
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyItem type={type} />}
        keyExtractor={({ id }) => id}
      />
    </Box>
  );
};
