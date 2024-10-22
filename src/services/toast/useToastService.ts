import { useContext } from "react";

import { ToastContext } from "./Provider/ToastProvider";

export const useToastService = () => {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error("Toast context must be pass within ToastProvider");

  return context;
};
