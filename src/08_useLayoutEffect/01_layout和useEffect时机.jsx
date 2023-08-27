import React, { memo, useEffect, useLayoutEffect, useState } from "react";

const App = memo(() => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect");
    });
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    });
    console.log("app render");
    return (
        <div>
            <h2>counter: {count}</h2>
            <button onClick={(e) => setCount(count + 1)}>+1</button>
        </div>
    );
});

export default App;
