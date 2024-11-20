import Image from "next/image";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";

const GiftCard = ({ gift, index }) => {
  const markAsPurchased = useMutation(api.gifts.markAsPurchased);

  const handleMarkAsPurchased = () => {
    markAsPurchased({ id: gift._id, purchased: true });
  };

  const handleUndoMarkAsPurchased = () => {
    markAsPurchased({ id: gift._id, purchased: false });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 lg:gap-4">
      {gift.purchasable && (
        <a
          href={gift.url}
          target="_blank"
          className={`text-xl lg:text-2xl col-span-4 ${
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
  );
};

export default GiftCard;
