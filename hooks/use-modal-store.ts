import { create } from "zustand";

interface ModalDataProps {
  title: string;
  description: string;
  icon: any;
  // link?: {
  //     label: string;
  //     link: string;
  // }
}

interface ModalStoreProps {
  isOpen: boolean;
  title: string;
  description: string;
  icon: any;
  onOpen: (data: ModalDataProps) => void;
  onClose: () => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  isOpen: false,
  title: "",
  description: "",
  icon: null,
  onOpen: (data: any) =>
    set({
      isOpen: true,
      title: data.title,
      description: data.description,
      icon: data.icon,
    }),
  onClose: () => set({ isOpen: false }),
}));
