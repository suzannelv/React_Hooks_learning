import React, { memo, useCallback, useRef, useState } from "react";

let obj = null;
const App = memo(() => {
    const [count, setCount] = useState(0);
    const nameRef = useRef();
    console.log(obj === nameRef);
    obj = nameRef;
    // 使用useRef解决闭包陷阱问题
    const countRef = useRef();
    countRef.current = count;

    const increment = useCallback(() => {
        // countRef.current 确保每次取到的count都是最新值
        setCount(countRef.current + 1);
    }, []);
    return (
        <div>
            <h2>counter: {count}</h2>
            <button onClick={(e) => setCount(count + 1)}>+1</button>
            <button onClick={increment}>+1</button>
        </div>
    );
});

export default App;
