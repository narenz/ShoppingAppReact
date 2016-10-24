import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'

class Productlist extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                {props.products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCartClicked={props.onSelected}/>
                )}
            </div>
        )
    }
}

Productlist.PropTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onSelected: PropTypes.func.isRequired
}

export default Productlist;