import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumberAction, subNumberAction } from "./store/modules/counter";

const Apps = memo(() => {
    // 1.使用useSelector将redux中store的数据映射到组件内
    const { count } = useSelector((state) => ({
        count: state.counter.count,
    }));
    // 2.使用dispatch直接派发action
    const dispatch = useDispatch();
    function addNumberHandle(num, isAdd = true) {
        if (isAdd) {
            dispatch(addNumberAction(num));
        } else {
            dispatch(subNumberAction(num));
        }
    }
    return (
        <div>
            <h2>counter: {count}</h2>
            <button onClick={(e) => addNumberHandle(1)}>+1</button>
            <button onClick={(e) => addNumberHandle(6)}>+6</button>
            <button onClick={(e) => addNumberHandle(6, false)}>-6</button>
        </div>
    );
});

export default Apps;
