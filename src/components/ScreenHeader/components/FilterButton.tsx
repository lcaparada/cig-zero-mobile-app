import { useRecipeFilter } from "@services";
import { Box, TouchableOpacityBox } from "src/components/Box/Box";
import { FilterModalScreen } from "src/components/FilterModal/filterModalTypes";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

interface FilterButtonProps {
  action: () => void;
  screenFilter: FilterModalScreen;
}

export const FilterButton = ({ screenFilter, action }: FilterButtonProps) => {
  const { feedFilter, collectionFilter } = useRecipeFilter();

  const length = Object.values(
    screenFilter === "collection" ? collectionFilter : feedFilter
  ).filter((value) => {
    if (Array.isArray(value)) {
      return value.length !== 0;
    }
    return value !== 0 && value !== "" && value !== null;
  }).length;
  return (
    <TouchableOpacityBox
      width={40}
      height={40}
      borderRadius="s10"
      alignItems={"center"}
      justifyContent={"center"}
      onPress={action}
    >
      {length > 0 && (
        <Box
          top={0}
          right={0}
          width={20}
          zIndex={1}
          height={20}
          borderRadius={"s48"}
          alignItems={"center"}
          position={"absolute"}
          justifyContent={"center"}
          backgroundColor={"primary"}
        >
          <Text preset="notes" weight="semiBold" color={"neutralLighest"}>
            {length}
          </Text>
        </Box>
      )}
      <Icon
        size={"s26"}
        name={"filter"}
        strokeWidth={2}
        color={"backgroundConstrast"}
        fill={length > 0 ? "backgroundConstrast" : "none"}
      />
    </TouchableOpacityBox>
  );
};
