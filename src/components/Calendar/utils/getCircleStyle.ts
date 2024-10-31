import {
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
} from "date-fns";

import {
  $currentDayNotAnswerStyle,
  $daysBeforeStartStyle,
  $dayThatUserNotSmokedStyle,
  $dayThatUserSmokedStyle,
  $futureDaysAndNotAnswerStyle,
  $otherMonthStyle,
  $selectedDayStyle,
} from "./circleStyles";

export const getCircleStyle = (
  d: Date,
  date: Date,
  userCreatedAt: string,
  hasSmokeRecord: boolean
) => {
  switch (true) {
    case isSameDay(d, date):
      return $selectedDayStyle;
    case !isSameMonth(d, date):
      return $otherMonthStyle;
    case isBefore(d, startOfDay(userCreatedAt)):
      return $daysBeforeStartStyle;
    case isAfter(d, new Date()):
      return $futureDaysAndNotAnswerStyle;
    case isToday(d) && !hasSmokeRecord:
      return $currentDayNotAnswerStyle;
    case hasSmokeRecord:
      return $dayThatUserNotSmokedStyle;
    case !hasSmokeRecord:
      return $dayThatUserSmokedStyle;
    default:
      return $otherMonthStyle;
  }
};
