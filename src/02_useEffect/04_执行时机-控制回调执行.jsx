import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("react");
    /**
 * useEffect实际上有两个参数：
参数一：执行的回调函数
参数二：该useEffect 在哪些 state 发生变化时，才重新执行 ；（受谁的影响
 */
    useEffect(() => {
        console.log("监听title变化:", count);
        // 比如这里我们可以指定受谁的影响，受count 影响的 Effect
    }, [count]);
    /**
     * 如果一个函数我们不希望依赖任何的内容时，也可以传入一个空的数组，
     * 指的是不依赖任何变量变化，只会执行一次
     */
    useEffect(() => {
        console.log("监听redux");
        return () => {};
    }, []);
    useEffect(() => {
        console.log("监听eventbus");
        return () => {};
    }, []);
    useEffect(() => {
        console.log("发送网络请求，从服务器获取数据");
        return () => {
            console.log("会在组件卸载时，才会执行一次");
        };
    }, []);

    return (
        <div>
            <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
            <button onClick={(e) => setMessage("hook")}>
                Modifier message:({message})
            </button>
        </div>
    );
});

export default App;
