import { ToastPosition, ToastType } from "../types/toast.types";

export interface IToast {
    position?: ToastPosition;
    message: string;
    type: ToastType
}