
import {Component} from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import './App.css'

class App extends Component {
  state = {productList: []}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const fetchedData = await response.json()
    console.log(fetchedData)
    this.setState({productList: fetchedData})
  }

  render() {
    const {productList} = this.state
    return (
    <>
        <Header />
       <div>
        <div className='product-des'>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/>
           scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
        <div className='recomanded'>
        <div className='filter'>
        <h3 className='item-filter'>3425 items</h3>
        <BsChevronLeft className='leftdrop-icon'/>
        <p className='hide'>HIDE FILTER</p>
        
        </div>
        <h4>recomanded <span><BsChevronCompactDown/></span></h4>
      
        </div>
        <div className='product-list'>
        <ul className='each-product'>

          {productList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
        </div>
        <Footer/>
      </div>
      </>
    )
  }
}

export default App
