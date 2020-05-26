import {
    ADD_PRODUCT_ITEM,
    REMOVE_PRODUCT_ITEM,
} from "./type";

export default {
    [ADD_PRODUCT_ITEM]: (state, payload) => {
        state.products = [...state.products, payload]
    },
    [REMOVE_PRODUCT_ITEM]: (state, payload) => {
        state.products.splice(payload, 1);
    }
}
