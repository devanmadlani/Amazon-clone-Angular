import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


export const ADD_TO_CART         = '[PRODUCT] Add'
export const REMOVE_FROM_CART    = '[PRODUCT] Remove'

export class AddProductToCart implements Action {
    readonly type = ADD_TO_CART

    constructor(public payload) {}
}

export class RemoveProductFromCart implements Action {
    readonly type = REMOVE_FROM_CART

    constructor(public payload) {}
}

export type Actions = AddProductToCart | RemoveProductFromCart