import React, { memo, useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage.js";

const App = memo(() => {
    // localStorage

    // const [token, setToken] = useState(localStorage.getItem("token"));
    // useEffect(() => {
    //     localStorage.setItem("token", token);
    // }, [token]);
    const [token, setToken] = useLocalStorage("token");
    function setTokenHandle() {
        setToken("why");
        // localStorage.setItem("token", "why");
    }
    // const [avatarUrl, setAvatarUrl] = useState(
    //     localStorage.getItem("avatarUrl")
    // );
    // useEffect(() => {
    //     localStorage.setItem("avatarUrl", avatarUrl);
    // }, [avatarUrl]);
    const [avatarUrl, setAvatarUrl] = useLocalStorage("avatarUrl");
    function setAvatarUrlHandle() {
        setAvatarUrl("http://www.hooks.com");
    }
    return (
        <div className="app">
            <h1>App component:{token}</h1>
            <button onClick={setTokenHandle}>set token</button>
            <h2>avatarUrl:{avatarUrl}</h2>
            <button onClick={setAvatarUrlHandle}>set avatar</button>
        </div>
    );
});

export default App;
