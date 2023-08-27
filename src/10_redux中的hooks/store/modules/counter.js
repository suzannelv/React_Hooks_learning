import { createSlice } from "@reduxjs/toolkit";
// 创建代码片段，相当于模块，每个模块都有自己的slice
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 99,
        message: "hello hooks",
    },
    reducer: {
        addNumberAction(state, { payload }) {
            state.count = state.count + payload;
        },
        subNumberAction(state, { payload }) {
            state.count = state.count - payload;
        },
        changeMessageAction(state, { payload }) {
            state.message = payload;
        },
    },
});
export const { addNumberAction, subNumberAction, changeMessageAction } =
    counterSlice.actions;
export default counterSlice.reducer;
