import React, { memo, useState, useTransition } from "react";
import namesArray from "./namesArray";
const App = memo(() => {
    const [showName, setShowName] = useState(namesArray);
    // useTransition 没有参数，但是有两个返回值
    //第一个返回值是布尔类型，第二个参数是函数，用来设置过渡
    const [pending, startTransition] = useTransition();

    function valueChangeHandle(event) {
        //startTransition函数里面需要传一个回调函数，回调函数里面的是用来降低优先级的代码
        startTransition(() => {
            const keyword = event.target.value;
            const filterShowNames = namesArray.filter((item) =>
                item.includes(keyword)
            );
            setShowName(filterShowNames);
        });
    }
    return (
        <div>
            <input type="text" onInput={valueChangeHandle} />
            <h2>user list: {pending && <span>Data Loading</span>}</h2>
            <ul>
                {showName.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    );
});

export default App;
