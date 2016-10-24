import React from 'react';

class Discount extends React.Component {
    constructor() {
        super();
        this.state = {
            used: false
        }
    }

    offerTaken() {
        this.props.offerCallback((this.props.discountPercentage/100*this.props.totalAmountinCart));
        this.setState({
            used: true
        });
    }

    render() {
        return (
            <button
                onClick={() => this.offerTaken()}
                disabled={(this.props.totalQuantity >= this.props.minProducts && !this.state.used) ? '' : 'disabled'}>
                {this.props.children}
            </button>
        )
    }
}

export default Discount;