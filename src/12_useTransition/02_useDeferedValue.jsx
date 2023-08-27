import React, { memo, useDeferredValue, useState } from "react";
import namesArray from "./namesArray";
const App = memo(() => {
    const [showName, setShowName] = useState(namesArray);
    // useDeferredValue函数的返回值是参数的一个副本
    const deferedShowNames = useDeferredValue(showName);

    function valueChangeHandle(event) {
        const keyword = event.target.value;
        const filterShowNames = namesArray.filter((item) =>
            item.includes(keyword)
        );
        setShowName(filterShowNames);
    }

    return (
        <div>
            <input type="text" onInput={valueChangeHandle} />
            <h2>user list: </h2>
            <ul>
                {deferedShowNames.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </div>
    );
});

export default App;
