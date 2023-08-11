"use client";

import { useModalStore } from "@/hooks/use-modal-store";

import { Modal } from "@/components/ui/modal";
import { Icons } from "@/components/icons";

export const SuccessModal = () => {
    const modalStore = useModalStore();

    return (
        <Modal
            title=""
            description=""
            isOpen={modalStore.isOpen}
            onClose={modalStore.onClose}
        >
            <div className="flex flex-col justify-center items-center gap-3 md:flex-row pb-2">
                <Icons.successAnimated />
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h1 className="font-heading text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                        Thankyou!
                    </h1>
                    <p className="text-center mt-1 md:text-left">
                        Your message has been received! I appreciate your
                        contact and will get back to you shortly.
                    </p>
                </div>
            </div>
        </Modal>
    );
};
