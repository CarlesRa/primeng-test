import { ToastKey, ToastSeverity } from "../types/toast.types";

export interface IToast {
    key?: ToastKey;
    severity: ToastSeverity
    detail: string;
}