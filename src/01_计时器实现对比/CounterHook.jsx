import { memo, useState } from "react";

function CounterHook() {
    // 定义初始状态，它返回的是一个数组
    // const arr = useState(0);
    // 所以可以对数组进行解构，第一个索引值是初始化值，第二个就是上一个最新状态值; useState(0)只有第一次时会使用。
    const [counter, setCounter] = useState(0);

    return (
        <div>
            {/* <h2>hooks counter:{arr[0]}</h2>
            <button onClick={(e) => arr[1](100)}>+1</button>
            <button onClick={(e) => arr[1](-100)}>-1</button> */}

            <h2>Hooks Counter : {counter}</h2>
            <button onClick={(e) => setCounter(counter + 1)}>+1</button>
            <button onClick={(e) => setCounter(counter - 1)}>-1</button>
        </div>
    );
}
export default memo(CounterHook);
