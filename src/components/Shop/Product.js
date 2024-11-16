import React, { Component } from 'react';

export default class Product extends Component {

    clickHandler(id) {
        this.props.anAddProducts(id)
    }

    render() {
        const { id, title, price, img } = this.props

        return (
            <div className="shop-item">
                <span className="shop-item-title">{title}</span>
                <img className="shop-item-image" src={img} alt={title} />
                <div className="shop-item-details">
                    <span className="shop-item-price">${price}</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button"
                        onClick={() => this.clickHandler(id)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        );
    }
}
