import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GiftCard = ({ gift, index }) => {
  const markAsPurchased = useMutation(api.gifts.markAsPurchased);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);

  const handleMarkAsPurchased = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmPurchase = () => {
    markAsPurchased({ id: gift._id, purchased: true });
    setIsDialogOpen(false);
  };

  const handleUndoMarkAsPurchased = () => {
    markAsPurchased({ id: gift._id, purchased: false });
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (!gift.purchased) {
      setIsLinkDialogOpen(true);
    } else {
      window.open(gift.url, "_blank");
    }
  };

  const handleContinueToLink = () => {
    window.open(gift.url, "_blank");
    setIsLinkDialogOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 lg:gap-4">
        {gift.purchasable && (
          <a
            href={gift.url}
            target="_blank"
            onClick={handleLinkClick}
            className={`text-xl lg:text-2xl col-span-4 cursor-pointer ${
              gift.purchased ? "line-through" : ""
            }`}
          >
            {gift.name}
          </a>
        )}
        {!gift.purchasable && (
          <h2 className="text-xl lg:text-2xl col-span-4">{gift.name}</h2>
        )}
        {gift.purchasable && (
          <div className="flex gap-2 col-span-2 lg:justify-end">
            {!gift.purchased && (
              <button
                onClick={handleMarkAsPurchased}
                className="underline text-xs"
              >
                Mark as purchased
              </button>
            )}
            {gift.purchased && (
              <button
                onClick={handleUndoMarkAsPurchased}
                className="underline text-xs"
              >
                Undo
              </button>
            )}
          </div>
        )}
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogDescription>
              Are you sure you want to mark "{gift.name}" as purchased?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirmPurchase}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Don't Forget!</DialogTitle>
            <DialogDescription>
              Remember to come back and mark "{gift.name}" as purchased if you decide to buy it!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsLinkDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleContinueToLink}>
              Continue to Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GiftCard;
