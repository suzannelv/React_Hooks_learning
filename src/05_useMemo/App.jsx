import React, { memo, useMemo, useState } from "react";
function calcNumTotal(num) {
    console.log("calcNumTotal");
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}
const HelloWord = memo(function (props) {
    console.log("hello world");
    return <h2>Hello World</h2>;
});

const App = memo(() => {
    const [count, setCount] = useState(0);
    // useMemo对返回结果做优化，useCallback对函数做优化
    let result = useMemo(() => {
        return calcNumTotal(count * 2);
    }, [count]);

    // function fn(){}
    // const increment = useCallback(fn, [])
    // 等同于
    // const increment1 = useMemo(()=>fn, [])
    // useMemo价值：对子组件渲染进行优化
    // 直接返回一个对象要加括号
    const info = useMemo(() => ({ name: "why", age: 18 }), []);
    return (
        <div>
            <h2>counter:{result}</h2>
            <h2>couter: {count}</h2>
            <button onClick={(e) => setCount(count + 1)}>+1</button>
            <HelloWord info={info} result={result} />
        </div>
    );
});

export default App;
