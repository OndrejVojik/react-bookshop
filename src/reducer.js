const reducer = (oldContext, action) => {


    switch (action.type) {

        case 'currency/set':
            return {
                ...oldContext,
                currency: action.payload
            }

        case 'exchangeRate/set':
            return {
                ...oldContext,
                exchangeRate: action.payload
            }

        case 'cart/addItem':
            return {
                ...oldContext,
                // the spread operator creates a new array without modifying
                // the old one
                shoppingCart: [ ...oldContext.shoppingCart, action.payload ]
            }
    }

}

export default reducer;