import { createContext, useState } from "react";

import { Toast, ToastService } from "../toastType";

export const ToastContext = createContext<ToastService>({
  toast: null,
  shouldHideToast: true,
  hideToast: () => {},
  showToast: () => {},
});

export const ToastProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [toast, setToast] = useState<Toast | null>(null);
  const [shouldHideToast, setShouldHideToast] = useState(true);

  const showToast = (toast: Toast) => {
    setShouldHideToast(false);
    setToast(toast);
  };

  const hideToast = (time: number) => {
    setShouldHideToast(true);
    setTimeout(() => {
      setToast(null);
    }, time);
  };

  return (
    <ToastContext.Provider
      value={{ toast, shouldHideToast, showToast, hideToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};
