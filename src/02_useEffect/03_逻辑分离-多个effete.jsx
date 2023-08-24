import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("écouter title change");
        return () => {
            console.log("anneler event lisener");
        };
    });
    // 一个函数式组件中，可以存在多个useEffect
    useEffect(() => {
        // écouter redux
        console.log("écouter redux");
        return () => {
            // annuleré écouter
        };
    });
    useEffect(() => {
        // écouter event bus
        console.log("écouter eventbus");
        return () => {
            // annuleré écouter
        };
    });

    return (
        <div>
            <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
        </div>
    );
});

export default App;
