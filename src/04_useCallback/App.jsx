import React, { memo, useState, useCallback, useRef } from "react";
// useCallback性能优化的点：
// 1 当需要将一个函数传递给子组件时，最好使用useCallback进行优化，将优化之后的函数传递给子组件

// props中的属性发生改变时，组件本身就会被重新渲染
const HYIncrement = memo(function (props) {
    const { inc } = props;
    console.log("hyincrement render");
    return (
        <div>
            <button onClick={inc}>+1</button>
        </div>
    );
});

const App = memo(() => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("callback message");
    // 闭包陷阱
    // const increment = useCallback(
    //     function foo() {
    //         console.log("increment");
    //         setCount(count + 1);
    //     },
    //     [count]
    // );
    // 进一步的优化:当count发生改变时,也使用同一个函数
    // 做法一：将count依赖删除掉，缺点：闭包陷阱
    // 做法二：useRef，在组件多次渲染时，返回的是同一个值
    const countRef = useRef();
    countRef.current = count;
    const increment = useCallback(function foo() {
        console.log("increment");
        setCount(countRef.current + 1);
    }, []);
    // const increment = () => {
    //     setCount(count + 1);
    // };
    return (
        <div>
            <h2>counter: {count}</h2>
            <button onClick={increment}>+1</button>
            <HYIncrement inc={increment}></HYIncrement>
            <h2>messaga:{message}</h2>
            <button onClick={(e) => setMessage(Math.random())}>
                Modifier message
            </button>
        </div>
    );
});

export default App;
