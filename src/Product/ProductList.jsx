import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import ProductModal from './ProductModal';

const ProductList = () => {
    const [products, setProduct] = useState([]);
    const [searchProduct,setSearchProduct] = useState('');
    const [selectProduct, setSelectProduct] = useState(null); 
    async function fetchData() {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    let filterdProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchProduct.toLowerCase());
    })
   
    return (
        <div className="container mx-auto p-4">
            <SearchBar setSearchProduct={setSearchProduct}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filterdProducts.map(product => (
                    <ProductItem key={product.id} product={product} onClick={() =>setSelectProduct(product)} />
                ))}
            </div>
            { selectProduct && <ProductModal product={selectProduct} onClose={()=> setSelectProduct(null)}/> }
        </div>
    );
}

export default ProductList;
