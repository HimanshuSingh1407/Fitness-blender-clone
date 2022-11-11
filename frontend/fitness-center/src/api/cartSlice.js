import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  SUCCESS: "success",
  LOADING: "loading",
  ERROR: "error",
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    status: STATUS.LOADING,
    cart: [],
    msg: "",
  },
  reducers: {
    setStatus: function (state, action) {
      state.status = action.payload;
    },
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      //console.log(action.payload)
      //return state.cart = state.cart.splice(action.payload, 1);
      return state.cart =  state.cart.filter((el, index) => {
        return index!==action.payload;
      });
      
    },
    massage: (state, action) => {
      state.msg = action.payload;
    },
    setCartArray: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setStatus, addItem, deleteItem, massage } = cartSlice.actions;
export default cartSlice.reducer;

export const addItemToCart = (obj) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUS.LOADING));
      /*const res = await axios(`url`, {
                    method: "post",
                    data: obj,
                });
                if(res.status==="ok"){
                    dispatch(setCartArray(res.data.cart));
                    dispatch(massage("Item Added Successfully"))
                    dispatch(setStatus(STATUS.SUCCESS));
                }
                else{
                    dispatch(setStatus(STATUS.ERROR));
                    dispatch(massage("Item not Added"))
                } */

      dispatch(addItem(obj));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const deleteCartItm = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUS.LOADING));

      // const res = await  axios(`url/productID`, {
      //     method:"delete",

      // })

      // if(res.status==="ok"){
      //     dispatch(setCartArray(res.data.cart));
      //     dispatch(massage("Item Removed "))
      //     dispatch(setStatus(STATUS.SUCCESS));
      // }
      // else{
      //     dispatch(setStatus(STATUS.ERROR));
      //     dispatch(massage("Item not removed"))
      // }
      // console.log(id)
      // console.log(typeof id)
      dispatch(deleteItem(id));

      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
