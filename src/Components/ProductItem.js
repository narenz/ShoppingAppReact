import React, { PropTypes } from 'react'

class ProductItem extends React.Component {
    addToBasket(i) {
        this.props.onAddToCartClicked(i);
    }

    render() {
        return (
            <div style={{paddingLeft: 25}}>
                <span ref="metaData">
                    {this.props.product.title} => {this.props.product.price} X {this.props.product.quantity}
                </span>
                <button ref="button"
                    onClick={() => this.addToBasket(this.props.product)}
                    disabled={this.props.product.quantity > 0 ? "" : "disabled"}>
                    {this.props.product.quantity > 0 ? "Add to Basket" : "Out of stock"}
                </button>
            </div>
        )
    };
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func
}

export default ProductItem