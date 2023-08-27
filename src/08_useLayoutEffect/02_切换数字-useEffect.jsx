import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
    const [count, setCount] = useState(100);

    useEffect(() => {
        console.log("useEffect");
        // 当对修改的数值不满意时，想要重新赋值，但是使用useEffect切换时有闪烁现象
        if (count === 0) {
            setCount(Math.random() + 99);
        }
    });
    // useLayoutEffect(() => {
    //     console.log("useLayoutEffect");
    // });
    console.log("app render");
    return (
        <div>
            <h2>counter: {count}</h2>
            <button onClick={(e) => setCount(0)}>+1</button>
        </div>
    );
});

export default App;
