const imageFiles = import.meta.glob('../assets/images/*.webp', { eager: true });

const productImages = {};

Object.entries(imageFiles).forEach(([path, module]) => {
  const filename = path.split('/').pop().replace('.webp', '');
  productImages[filename] = module.default;
});

export { productImages };