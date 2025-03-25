import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export interface FeatureDetails {
  title: string;
  description: string;
  icon: ReactNode;
  detailedDescription: string;
  imageUrl?: string;
  benefits?: string[];
}

interface FeatureDialogProps {
  feature: FeatureDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeatureDialog({ feature, isOpen, onClose }: FeatureDialogProps) {
  if (!feature) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-md md:max-w-xl">
            <DialogHeader>
              <DialogTitle className="flex items-center text-xl">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-3">
                  {feature.icon}
                </div>
                {feature.title}
              </DialogTitle>
              <DialogDescription className="pt-2 text-neutral-dark opacity-80">
                {feature.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="text-sm text-neutral-dark">
                {feature.detailedDescription}
              </div>
              
              {feature.imageUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden"
                >
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
              )}
              
              {feature.benefits && feature.benefits.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Key Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {feature.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                        className="text-sm text-neutral-dark"
                      >
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}