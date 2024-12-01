import React, { useState } from 'react';
import Carousel from './Carousel';
import ColorPicker from './ColorPicker';

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const colors = [
    { label: 'Yellow Gold', className: 'yellow', index: 0 },
    { label: 'White Gold', className: 'white', index: 1 },
    { label: 'Rose Gold', className: 'rose', index: 2 },
  ];

  return (
    <div className="product-card">
      <h3 className="product-title">{product.name}</h3>
      <Carousel images={product.images} />
      <p className="product-price">{product.price} TL</p>
      <p>Popularity: {((product.popularityScore / 100) * 5).toFixed(1)}/5</p>
      <ColorPicker
        colors={colors}
        setCurrentImage={setCurrentImage}
        images={product.images}
      />
    </div>
  );
};

export default ProductCard;
