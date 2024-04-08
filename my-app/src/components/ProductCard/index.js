
import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {image, title, price} = productData
  return (
    <li className="product-card">
      <img src={image} alt={`Picture of ${title}`} className="product-img" />
      <h3 className="product-title">{title}</h3>
      <p className='price'>${price}</p>
    </li>
  )
}

export default ProductCard
