import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
    const [count, setCount] = useState(0);
    //  负责告知react，在执行完当前组件渲染之后执行的副作用代码
    useEffect(() => {
        // 1. 监听事件
        // const unsubcribe = store.subcribe(() => {});
        console.log("écouter le changement des données");
        // useEffect里面的回调函数本身有返回值，返回值为回调函数=>回调函数组件被重新渲染挥着组件卸载的时候执行
        return () => {
            console.log("anneler event lisener");
        };
    });

    return (
        <div>
            <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
        </div>
    );
});

export default App;
