import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import type { ReactNode } from "react";
import modelling1 from "../assets/modelling1.png";
import modelling2 from "../assets/modelling2.png";
import modelling3 from "../assets/modelling3.png";

type ServiceModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: ReactNode;
};

const ServiceModal = ({ open, onOpenChange, title, description }: ServiceModalProps) => {
    const imageByTitle: Record<string, string> = {
        "Financial Modelling and Analysis": modelling1,
        "Business Advisory": modelling2,
        "Valuations": modelling3,
    };
    const imgSrc = imageByTitle[title] ?? modelling1;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[50vw]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>More information about this service</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="w-full h-full overflow-hidden rounded-md border border-gray-200">
                        <img
                            src={imgSrc}
                            alt={`${title} image`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ServiceModal;


