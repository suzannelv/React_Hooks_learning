import React from "react";
import ReactDOM from "react-dom/client";
import { UserContext, ThemeContext } from "./03_useContext/context";

// import App from "./01_计时器实现对比/App";
// import App from "./02_useEffect/App";
// import App from "./03_useContext/App";
// import App from "./04_useCallback/App";
// import App from "./05_useMemo/App.jsx";
import App from "./06_useRef/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserContext.Provider value={{ name: "coder", age: 19 }}>
        <ThemeContext.Provider value={{ color: "red", size: 30 }}>
            <App />
        </ThemeContext.Provider>
    </UserContext.Provider>
);
