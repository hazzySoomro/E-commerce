"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/productDetail";

interface setColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImgType) => void;
}

const SetColor: React.FC<setColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
      </div>
    </div>
  );
};

export default SetColor;
