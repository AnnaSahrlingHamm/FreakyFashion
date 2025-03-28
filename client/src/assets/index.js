// const images = import.meta.glob("../assets/Images/*.{jpg,png,webp}", { eager: true });
const productImages = import.meta.glob('/src/assets/images/*.{jpg,png,webp}', { eager: true });

export default Object.fromEntries(
  Object.entries(productImages).map(([key, value]) => {
    // Extrahera filnamnet (utan mapp och ändelse)
    const fileName = key.split('/').pop().split('.')[0];
    return [fileName, value.default];
  })
);


/* const exports = {};
for (const path in images) {
  const name = path.split("/").pop().split(".")[0]; // Tar bara filnamnet utan ändelsen
  exports[name] = images[path].default;
}

export default exports; */



/* export { default as hero500w } from './images/hero500w.jpg';
export { default as hero_large } from './images/hero_large.jpg';
export { default as FREAKYFASHIONlogo } from './images/FREAKYFASHIONlogo.png';
export { default as FREAKYFASHION500w } from './images/FREAKYFASHION500w.jpg';
export { default as eye300w } from './images/eye300w.jpg';
export { default as shoe300w } from './images/shoe300w.jpg';
export { default as cat300w } from './images/cat300w.jpg';
export { default as blacktshirt400w } from './images/blacktshirt400w.jpg';
export { default as blacktshirt500w } from './images/blacktshirt500w.jpg';
export { default as blacktshirtB200w } from './images/blacktshirtB200w.jpg';
export { default as blacktshirtB300w } from './images/blacktshirtB300w.jpg'; */