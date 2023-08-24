import React, { memo, useState, useEffect } from "react";

const App = memo(() => {
    const [count, setCount] = useState(100);
    useEffect(() => {
        // 当前传入的回调函数会在组件被渲染完成之后，自动执行
        // 可以做网络请求，DOM操作，事件监听等。
        document.title = count;
    });
    return (
        <div>
            <h2>counter: {count}</h2>
            <button onClick={(e) => setCount(count + 1)}> +1</button>
        </div>
    );
});

export default App;
