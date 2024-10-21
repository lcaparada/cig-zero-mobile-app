import {
  Box,
  BoxProps,
  Divider,
  HeadingWithDescription,
  ProgressBar,
} from "@components";

export interface OMSItemProps extends BoxProps {
  title: string;
  description: string;
  percentage: number;
  current: number;
  target: number;
  lastItem: boolean;
}

export const OMSItem = ({
  title,
  current,
  target,
  percentage,
  description,
  lastItem,
  ...boxProps
}: OMSItemProps) => {
  return (
    <Box mt={"s24"} {...boxProps}>
      <Box paddingHorizontal={"s24"}>
        <HeadingWithDescription
          title={title}
          description={description}
          count={{ current, target }}
        />
        <ProgressBar percentage={percentage} mt={"s14"} />
      </Box>
      {!lastItem && <Divider mt={"s30"} />}
    </Box>
  );
};
