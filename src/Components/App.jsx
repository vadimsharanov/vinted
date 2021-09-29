import axios from "axios"
import { useEffect, useState } from "react"
import Header from "./Header.jsx"
import Product from "./Product.jsx"
import ProductAll from "./ProductAll.jsx"


function App(props) {
    return (
        <>
        <Header></Header>
        <ProductAll></ProductAll>
        </>
    )
}
      

export default App