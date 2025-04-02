import { Box } from "../Box/Box";
import { TimeCard } from "../TimeCard/TimeCard";

interface CounterProps {
  counter: {
    days: number;
    hours: number;
    minutes: number;
  };
}

export const Counter = ({ counter }: CounterProps) => {
  const timeUnits = [
    { label: "dias", value: counter.days },
    { label: "horas", value: counter.hours },
    { label: "minutos", value: counter.minutes },
  ];

  return (
    <Box
      flexDirection="row"
      columnGap="s10"
      alignItems="center"
      justifyContent="center"
      mt="s30"
    >
      {timeUnits.map((unit) => (
        <TimeCard
          key={unit.label}
          label={unit.label}
          time={unit.value.toString()}
        />
      ))}
    </Box>
  );
};
