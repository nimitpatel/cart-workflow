import { useEffect, useState } from "react"
import Theme from "./contexts"

import { Header } from './components/common'
import { Product } from "./components/Product"
import { Cart } from "./components/Cart"

import './App.css'

import './api'

export const App = () => {
  const [theme, setTheme] = useState('red')
  const [cartItems, setCartItems] = useState([])
  const [productList, setProductList] = useState([])
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    fetch('api/list')
      .then(res => res.json())
      .then(({ list }) => setProductList(list))
  }, [refetch])

  const handleSearch = search => {
    if (search.length === 0) {
      setRefetch(!refetch)
    } else {
      const idx = productList.indexOf(search)

      setProductList([productList[idx]])
    }
  }

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <div className="wrapper">
        <Header />
        <main>
          <Product
            productList={productList}
            cartItems={cartItems}
            setCartItems={setCartItems}
            handleSearch={handleSearch} 
          />
          <Cart 
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </main>
      </div>
    </Theme.Provider>
  )
}

export default App