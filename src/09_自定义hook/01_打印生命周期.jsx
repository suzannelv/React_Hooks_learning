import React, { memo, useEffect, useState } from "react";
// définir un hook
function useLogLife(cName) {
    useEffect(() => {
        console.log(cName + "组件被创建");
        return () => {
            console.log(cName + "组件被销毁");
        };
    }, []);
}

const Home = memo(() => {
    useLogLife("home");
    return <h1>Home Page</h1>;
});
const About = memo(() => {
    useLogLife("about");

    return <h1>About Page</h1>;
});

const App = memo(() => {
    const [isShow, setIsShow] = useState(true);
    useLogLife("app");

    return (
        <div>
            <h1>App component</h1>
            <button onClick={(e) => setIsShow(!isShow)}>toggle</button>
            {isShow && <Home />}
            {isShow && <About />}
        </div>
    );
});

export default App;
