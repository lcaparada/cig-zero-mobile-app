import { format } from "date-fns";

export const formatDate = (date: Date) => {
  const day = format(date, "d");
  const month = format(date, "MMMM");
  const year = format(date, "y");

  return `${day} de ${month} de ${year}`;
};
