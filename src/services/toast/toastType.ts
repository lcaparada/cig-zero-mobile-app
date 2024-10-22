export type ToastType = "success" | "error" | "info";

export interface Toast {
  message: string;
  type: ToastType;
  duration: number;
}

export interface ToastService {
  toast: Toast | null;
  shouldHideToast: boolean;
  showToast: (toast: Toast) => void;
  hideToast: (time: number) => void;
}
