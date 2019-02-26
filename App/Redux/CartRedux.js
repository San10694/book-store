import { types } from "./types";
import React from 'react';

export function addToCart(product) {
    // console.log("add-action----");
    return { type: types.ADD_CART_ITEM, product: product };
};

export function removeCartItem(product) {
    //  console.log("remove action-----");
    return { type: types.REMOVE_CART_ITEM, product: product };
};

export function clearCartItem(product) {
    //  console.log("remove action-----");
    return { type: types.CLEAR_CART_ITEM, product: product };
};

export function deleteCartItem(product) {
    //  console.log("delete action-----");
    return { type: types.DELETE_CART_ITEM, product: product };
};


const INITIAL_STATE = {
    cart: [],
    user: '',
    // coupon: [],
    grandTotal: 0.0,
    subTotal: 0.0,
    tax: 0.0,
    payMoney: 0.0,
    // couponDiscountPercentage: 0.0,
    // deductedAmountByCoupon: 0.0,
    paymentOption: 'COD',
    createdAt: '',
};

export default function CartReducer(state = INITIAL_STATE, action) {
    console.log('action-------', JSON.stringify(state));
    switch (action.type) {

        case types.ADD_CART_ITEM: {

            const isExisted = state.cart.some(cartItem => compareCartItem(cartItem, action.product));
            return Object.assign(
                {},
                state,
                isExisted
                    ? {
                        cart: state.cart.map(item => cartItem(item, action)),
                    }
                    : {
                        cart: [...state.cart, cartItem(undefined, action)],
                    },
                {
                    subTotalAmount: calculatePrice(state),
                    subTotal: state.subTotal, // state.cart.map( item => calculatePrice( item )).toString(),
                    grandTotal: Number(state.grandTotal),
                }
            );
        }

        case types.CLEAR_CART_ITEMS: {
            return { cart: [] };
        }

        case types.REMOVE_CART_ITEM: {
            const index = state.cart.findIndex(cartItem => compareCartItem(cartItem, action.product)); // check if existed
            return index == -1
                ? state //This should not happen, but catch anyway
                : Object.assign(
                    {},
                    state,
                    state.cart[index].Quantity == 0
                        ? {
                            cart: state.cart.filter(cartItem => !compareCartItem(cartItem, action.product)),
                        }
                        : {
                            cart: state.cart.map(item => cartItem(item, action)),
                        },
                    {
                        subTotalAmount: calculatePrice1(state, action.product),
                        subTotal: state.subTotal, // state.cart.map( item => calculatePrice( item )).toString(),
                        grandTotal: Number(state.grandTotal),
                    }
                );
        }

        case types.DELETE_CART_ITEM: {
            const index1 = state.cart.findIndex(cartItem => compareCartItem(cartItem, action.product)); // check if existed
            return index1 == -1
                ? state //This should not happen, but catch anyway
                : Object.assign({}, state, {
                    cart: state.cart.filter(cartItem => !compareCartItem(cartItem, action.product)),
                    subTotalAmount: calculatePrice(state),
                    subTotal: state.subTotal, // state.cart.map( item => calculatePrice( item )).toString(),
                    grandTotal: Number(state.grandTotal),
                });
        }

        default:
            return state;
    }
};

const calculatePrice = state => {
    var subTotal = 0.0;
    var grandTotal = 0.0;
    var payMoney = 0.0;
    var tax = 0.0;
    console.log('state.cart.length', state.cart.length);
    state.cart.map(item => {
        subTotal = subTotal + item.totalPrice;
        grandTotal = subTotal;
        console.log('subTotal-' + subTotal);
        state.subTotal = subTotal;
        state.grandTotal = grandTotal;
        state.payMoney = grandTotal;
        state.tax = tax;
        console.log('state.grandTotal', grandTotal);
        return subTotal, grandTotal, payMoney, tax;
    });

};

const calculatePrice1 = (state, action) => {
    var subTotal = 0.0;
    var grandTotal = 0.0;
    var payMoney = 0.0;
    var tax = 0.0;
    console.log('ca	llllll');

    state.cart.map(item => {
        item.totalPrice = item.sale_price;
        subTotal = subTotal + item.totalPrice;
        // tax = (subTotal * item.tax) / 100;
        grandTotal = subTotal;
        console.log('subTotal-' + subTotal);
        state.subTotal = subTotal;
        state.grandTotal = grandTotal;
        state.payMoney = grandTotal;
        state.tax = tax;
        return subTotal, grandTotal, payMoney, tax;
    });
};


const compareCartItem = (cartItem, product) => {
    if (cartItem.productId === product.productId) {
        console.log('compare_cartItems is  TRUE!!');
    }
    return cartItem.productId === product.productId;
};

const cartItem = (
    state = {
        productId: undefined,
        totalPrice: 0,
    },
    action
) => {

    switch (action.type) {
        case types.ADD_CART_ITEM: {

            return state.productId === undefined
                ? Object.assign({}, state, action.product, {
                    totalPrice: Number(action.product.sale_price),
                    price: Number(action.product.sale_price),
                })
                : !compareCartItem(state, action.product)
                    ? state
                    : Object.assign({}, state, {
                        totalPrice: Number(action.product.sale_price),
                    });
        }

        case types.REMOVE_CART_ITEM:

            return !compareCartItem(state, action.product)
                ? state
                : Object.assign({}, state, {
                    totalPrice: Number(action.product.sale_price),
                });

        default:
            return state;
    }
};
