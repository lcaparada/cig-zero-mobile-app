import { BoxProps } from "src/components/Box/Box";
import { TextProps } from "src/components/Text/Text";

type CircleStyle = { circle: BoxProps; text: TextProps };

export const $otherMonthStyle: CircleStyle = {
  circle: {
    borderStyle: "solid",
    backgroundColor: "background",
    borderColor: "backgroundSecondConstrast",
  },
  text: {
    color: "backgroundSecondConstrast",
  },
};

export const $selectedDayStyle: CircleStyle = {
  circle: {
    borderStyle: "solid",
    backgroundColor: "shadowBlue",
    borderColor: "shadowBlue",
  },
  text: {
    color: "neutralLighest",
  },
};

export const $daysBeforeStartStyle: CircleStyle = {
  circle: {
    borderStyle: "dashed",
    backgroundColor: "background",
    borderColor: "backgroundSecondConstrast",
  },
  text: {
    color: "backgroundSecondConstrast",
  },
};

export const $currentDayNotAnswerStyle: CircleStyle = {
  circle: {
    borderStyle: "dashed",
    backgroundColor: "background",
    borderColor: "primary",
  },
  text: {
    color: "primary",
  },
};

export const $futureDaysAndNotAnswerStyle: CircleStyle = {
  circle: {
    borderStyle: "solid",
    backgroundColor: "background",
    borderColor: "primary",
  },
  text: {
    color: "primary",
  },
};

export const $dayThatUserSmokedStyle: CircleStyle = {
  circle: {
    borderStyle: "solid",
    backgroundColor: "primary",
    borderColor: "primary",
  },
  text: {
    color: "neutralLighest",
  },
};

export const $dayThatUserNotSmokedStyle: CircleStyle = {
  circle: {
    borderStyle: "solid",
    backgroundColor: "errorDark",
    borderColor: "errorDark",
  },
  text: {
    color: "neutralLighest",
  },
};
