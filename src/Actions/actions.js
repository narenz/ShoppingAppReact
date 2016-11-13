export const getProducts = () => {
    return{ type: 'FETCH_PRODCTS' }
}
export const resetApp = () => {
    return{ type: 'RESET_APP' }
}
export const checkout = () => {
    return{ type: 'CHECKOUT' }
}
export const addItem = (item) => {
    return{
        type: 'ADD_ITEM',
        payload: item
    }
}