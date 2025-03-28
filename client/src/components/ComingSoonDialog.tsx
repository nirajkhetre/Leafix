import { useState, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ComingSoonDialogProps {
  title: string;
  description: string;
  buttonText?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonDialog({
  title,
  description,
  buttonText = "Close",
  isOpen,
  onClose
}: ComingSoonDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild>
              <motion.div
                className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg focus:outline-none"
                initial={{ scale: 0.95, opacity: 0, y: "60%" }}
                animate={{ scale: 1, opacity: 1, y: "-50%" }}
                exit={{ scale: 0.95, opacity: 0, y: "60%" }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <DialogPrimitive.Title className="text-xl font-semibold text-primary">
                  {title}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="mt-3 text-neutral-dark">
                  {description}
                </DialogPrimitive.Description>
                
                <div className="mt-8 flex justify-end">
                  <motion.button
                    type="button"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {buttonText}
                  </motion.button>
                </div>
                
                <DialogPrimitive.Close className="absolute right-4 top-4 opacity-70 hover:opacity-100">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      )}
    </AnimatePresence>
  );
}