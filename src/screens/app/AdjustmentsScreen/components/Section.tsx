import {
  Box,
  Icon,
  Text,
  BoxProps,
  IconName,
  TouchableOpacityBox,
} from "@components";

export type SectionItemData = {
  icon: IconName;
  label: string;
  action: () => void;
};

type SectionProps = {
  title: string;
  items: SectionItemData[];
};

export const Section = ({ title, items }: SectionProps) => {
  return (
    <Box rowGap="s10">
      <Text weight="medium" color={"primary"} preset="paragraphsBig">
        {title}
      </Text>
      <Box rowGap="s4">
        {items.map((item, index) => (
          <ItemBox
            index={index}
            key={item.label}
            icon={item.icon}
            label={item.label}
            action={item.action}
            length={items.length}
          />
        ))}
      </Box>
    </Box>
  );
};

type ItemBoxProps = SectionItemData & {
  index: number;
  length: number;
};

const ItemBox = ({ index, length, label, icon, action }: ItemBoxProps) => {
  const borderRadiusStyles: BoxProps = {
    borderTopLeftRadius: index === 0 ? "s10" : undefined,
    borderTopRightRadius: index === 0 ? "s10" : undefined,
    borderBottomLeftRadius: index === length - 1 ? "s10" : undefined,
    borderBottomRightRadius: index === length - 1 ? "s10" : undefined,
  };

  return (
    <TouchableOpacityBox
      {...borderRadiusStyles}
      padding="s18"
      onPress={action}
      backgroundColor="mutedAquaWith20PercentOpacity"
    >
      <Box flexDirection={"row"} alignItems={"center"} columnGap={"s10"}>
        <Icon size={"s20"} color="primary" name={icon} strokeWidth={2} />
        <Text weight="medium" color={"primary"}>
          {label}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
};
