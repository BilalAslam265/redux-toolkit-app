const { createSlice } = require("@reduxjs/toolkit")

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
})

const productSlice = createSlice({
    name: "product",
    initialState : {
        data: [],
        status: STATUSES.IDLE
    },

    reducers: {
        setProducts(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        },
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            state = state.filter(item => item.id !== action.payload)
        },
    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

// Thunks
export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        // getState is used to get any current state from store and use as a parameter in thunk
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data);
            dispatch((setProducts(data)))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}