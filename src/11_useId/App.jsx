import React, { memo, useId, useState } from "react";

const App = memo(() => {
    const [count, setCount] = useState(0);
    // useId()生成唯一id，避免出现mismatch服务端和客户端生成的id不匹配
    const id = useId();
    console.log(id);
    return (
        <div>
            <button onClick={(e) => setCount(count + 1)}>
                count+1: {count}
            </button>
            <label htmlFor={id}>
                <input id={id} type="text" />
            </label>
        </div>
    );
});

export default App;
