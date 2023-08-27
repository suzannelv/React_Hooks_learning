import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    addNumberAction,
    changeMessageAction,
    subNumberAction,
} from "./store/modules/counter";

// memo高阶组件包裹起来的组件有对应的特点：只有props发生改变时，才会重新渲染
const Home = memo((props) => {
    const { message } = useSelector(
        (state) => ({
            message: state.counter.message,
        }),
        // shallowEqual用于比较两个对象是否在浅层次上相等的函数，避免不必要的组件重新渲染。
        // 浅相等是指比较两个对象的引用，而不是它们的内容。如果两个对象的引用相同，它们被认为是浅相等的；否则，它们被认为是不相等的。
        shallowEqual
    );

    const dispatch = useDispatch();
    function changeMessageHandle() {
        dispatch(changeMessageAction("useSelector"));
    }

    console.log("home render");

    return (
        <div>
            <h2>home:{message}</h2>
            <button onClick={(e) => changeMessageHandle()}>
                changer message
            </button>
        </div>
    );
});

const App = memo((props) => {
    // 1.使用useSelector将redux中store的数据映射到组件内
    const { count } = useSelector(
        (state) => ({
            count: state.counter.count,
        }),
        shallowEqual
    );
    // 2.使用dispatch直接派发action
    const dispatch = useDispatch();
    function addNumberHandle(num, isAdd = true) {
        if (isAdd) {
            dispatch(addNumberAction(num));
        } else {
            dispatch(subNumberAction(num));
        }
    }

    console.log("app render");

    return (
        <div>
            <h2>counter: {count}</h2>
            <button onClick={(e) => addNumberHandle(1)}>+1</button>
            <button onClick={(e) => addNumberHandle(6)}>+6</button>
            <button onClick={(e) => addNumberHandle(6, false)}>-6</button>
            <Home />
        </div>
    );
});

export default App;
