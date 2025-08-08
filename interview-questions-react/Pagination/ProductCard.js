const ProductCard = ({ image, title }) => {
  return (
    <div width="100px" height="100px">
      <img src={image} />
      <h3>{title}</h3>
    </div>
  );
};
export default ProductCard;
