import { Box } from "@components";

import { NotificationSettingsData } from "@domain";

import { ItemBox } from "./ItemBox";

type SectionProps = {
  items: {
    title: string;
    isActive: boolean;
    description: string;
    notificationKey: keyof NotificationSettingsData;
  }[];
};

export const Section = ({ items }: SectionProps) => {
  return (
    <Box rowGap="s4">
      {items.map((item, index) => (
        <ItemBox
          index={index}
          title={item.title}
          length={items.length}
          isActive={item.isActive}
          key={item.notificationKey}
          description={item.description}
          notificationKey={item.notificationKey}
        />
      ))}
    </Box>
  );
};
