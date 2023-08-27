import React from "react";
import ReactDOM from "react-dom/client";
// import { UserContext, ThemeContext } from "./03_useContext/context";
import { TokenContext, UserContext } from "./09_自定义hook/context/index";
import { Provider } from "react-redux";
import store from "./10_redux中的hooks/store";
// import App from "./01_计时器实现对比/App";
// import App from "./02_useEffect/App";
// import App from "./03_useContext/App";
// import App from "./04_useCallback/App";
// import App from "./05_useMemo/App.jsx";
// import App from "./06_useRef/App.jsx";
// import App from "./07_useImperativeHandle/App";
// import App from "./08_useLayoutEffect/03_切换数字-useLayoutEffect";
// import App from "./09_自定义hook/App";
// import App from "./10_redux中的hooks/App";
// import App from "./11_useId/App";
import App from "./12_useTransition/02_useDeferedValue";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <UserContext.Provider value={{ name: "coder", age: 19 }}>
//         <ThemeContext.Provider value={{ color: "red", size: 30 }}>
//             <App />
//         </ThemeContext.Provider>
//     </UserContext.Provider>
// );
root.render(
    <UserContext.Provider value={{ name: "coder", age: 19 }}>
        <TokenContext.Provider value={"coderToken"}>
            <Provider store={store}>
                <App />
            </Provider>
        </TokenContext.Provider>
    </UserContext.Provider>
);
