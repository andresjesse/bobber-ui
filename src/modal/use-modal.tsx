import { type ReactNode } from "react";
import { create } from "zustand";

type Options = {
  transparentBackdrop: boolean;
  closeable: boolean;
  onDismiss?: () => void;
};

const defaultOptions: Options = {
  transparentBackdrop: false,
  closeable: true,
};

type State = {
  content: ReactNode;
  options: Options;
};

type Actions = {
  showModal: (content: ReactNode, options?: Partial<Options>) => void;
  hideModal: () => void;
};

export const useModal = create<State & Actions>()((set, get) => ({
  content: undefined,
  options: defaultOptions,
  showModal: (content: ReactNode, options?: Partial<Options>) =>
    set({ content, options: { ...defaultOptions, ...options } }),
  hideModal: () => {
    get().options.onDismiss?.();
    return set({ content: undefined });
  },
}));
