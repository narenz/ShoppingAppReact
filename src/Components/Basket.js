import React from 'react'
import Discount from './Discount'

class Basket extends React.Component {
    constructor(){
        super();
        this.state = {
            discountAmount : 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.prodcutsAddedtoBasket.length===0){
            this.resetDiscount();
        }
    }

    useOffer(amount) {
        this.setState({
            discountAmount: this.state.discountAmount + amount 
        })
    }

    resetDiscount() {
        this.state = {
            discountAmount : 0
        }
    }

    render() {
        const state = this.state;
        let totalAmount = 0;
        const {prodcutsAddedtoBasket} = this.props
        return (
            (prodcutsAddedtoBasket.length) ?
                <div style={{paddingLeft: 25}}>
                    <ul>
                        {prodcutsAddedtoBasket.map((items) => {
                            totalAmount += items.price;
                             return (<li key={items.id}>{items.title}</li>)
                        })}
                    </ul>
                    <hr />
                    <div className='cartTotal'>total:{totalAmount - state.discountAmount}</div>
                    <Discount 
                        totalQuantity={prodcutsAddedtoBasket.length}
                        totalAmountinCart={totalAmount}
                        offerCallback={this.useOffer.bind(this)}
                        discountPercentage={10}
                        minProducts={2}>Buy any 2 for 10% OFF</Discount>
                </div>
                : <div style={{paddingLeft: 25}}>Empty Basket</div>
        )
    }
}

export default Basket;