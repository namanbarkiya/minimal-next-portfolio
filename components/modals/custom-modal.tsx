"use client";

import { useModalStore } from "@/hooks/use-modal-store";
import { Modal } from "@/components/ui/modal";

export const CustomModal = () => {
    const modalStore = useModalStore();

    return (
        <Modal
            title=""
            description=""
            isOpen={modalStore.isOpen}
            onClose={modalStore.onClose}
        >
            <div className="flex flex-col justify-center items-center gap-3 md:flex-row pb-2">
                <modalStore.icon />
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h1 className="font-heading text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                        {modalStore.title}
                    </h1>
                    <p className="text-center mt-1 md:text-left">
                        {modalStore.description}
                    </p>
                </div>
            </div>
        </Modal>
    );
};
