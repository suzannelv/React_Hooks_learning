import React, { memo, useRef, forwardRef, useImperativeHandle } from "react";

const HelloWorld = memo(
    forwardRef((props, ref) => {
        const inputRef = useRef();
        //子组件对父组件传入的ref进行处理
        useImperativeHandle(ref, () => {
            return {
                focus() {
                    console.log("focus");
                    inputRef.current.focus();
                },
                setValue(value) {
                    inputRef.current.value = value;
                },
            };
        });
        return <input type="text" ref={inputRef} />;
    })
);

const App = memo(() => {
    const titleRef = useRef();
    const inputRef = useRef();
    function handleDOM() {
        // console.log(titleRef.current);
        inputRef.current.focus();
        // inputRef.current.value = "";
        inputRef.current.setValue("app value");
    }
    return (
        <div>
            <h2 ref={titleRef}>title</h2>
            <HelloWorld ref={inputRef} />
            <button onClick={handleDOM}>Dom operation</button>
        </div>
    );
});

export default App;
