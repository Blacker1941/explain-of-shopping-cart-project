import React, { useState } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default function Shop() {

    const [products, setProducts] = useState([
        { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
        { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
        { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
        { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
        { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
        { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
    ])

    const [shoppingCart, setShoppingCart] = useState([])

    const [socials, setSocials] = useState([
        { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
        { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
        { id: 3, href: 'https://www.facebook.com', img: 'Images/FaceBook Logo.png' },
    ])


    const addProductToCart = (productId) => {

        let mainProduct = products.find(product => {
            return product.id === productId
        })

        setShoppingCart(prevState => {
            return [...prevState, mainProduct]
        })

    }

    const emptyShoppingCart = () => {
        setShoppingCart([])
    }

    const removeProductFromCart = (productId) => {

        let newShoppingCart = shoppingCart.filter(product => {
            return product.id !== productId
        })

        setShoppingCart(newShoppingCart)

    }


    return (
        <>
            <header className="main-header">
                <nav className="main-nav nav">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">STORE</a></li>
                        <li><a href="#">ABOUT</a></li>
                    </ul>
                </nav>
                <h1 className="band-name band-name-large">SabzLearn Shop</h1>
            </header>
            <section className="container content-section">
                <div className="shop-items">

                    {products.map(product => (
                        <Product key={product.id} {...product} onAddProduct={addProductToCart} />
                    ))}
                </div>
            </section>
            <section className="container content-section">
                <h2 className="section-header">CART</h2>
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">ITEM</span>
                    <span className="cart-price cart-header cart-column">PRICE</span>
                    <span className="cart-quantity cart-header cart-column">Doing</span>
                </div>
                <div className="cart-items">

                    {shoppingCart.map(product => (
                        <CartProduct key={product.id} {...product} onRemove={removeProductFromCart} />
                    ))}


                </div>
                <button className="btn btn-primary btn-purchase" type="button" onClick={emptyShoppingCart}>
                    Empty Cart
                </button>
            </section>
            <footer className="main-footer">
                <div className="container main-footer-container">
                    <h3 className="band-name">The Generics</h3>
                    <ul className="nav footer-nav">
                        {socials.map(social => (
                            <Social key={social.id} {...social} />
                        ))}
                    </ul>
                </div>
            </footer>


        </>
    )
}
