import { Action } from '@ngrx/store'
import * as ProductActions from './../actions/product.actions'
import { Product } from '../models/product.model';


const product = {
    _id: 1,
    image: {
        src: '',
        srcOut: "./assets/elhar/product/product2.JPG",
        srcOn: "./assets/elhar/product/product1.JPG"
    },
    title: "Kurta Amar",
    subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
    amount: "Eur 400"
}

export function reducer(state: Product[] = [], action: ProductActions.Actions) {

    switch (action.type) {

        case ProductActions.ADD_TO_CART:
            return [...state, action.payload];

        case ProductActions.REMOVE_FROM_CART:
            let product = action.payload
            return state.filter((el) => el._id != product._id)

        default:
            return state;
    }
}