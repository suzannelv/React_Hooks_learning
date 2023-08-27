import React, { memo } from "react";
import { userTokenContext } from "./hooks";
// user/token

const Home = memo(() => {
    const [user, token] = userTokenContext();
    return (
        <h1>
            Home Page: {user.name} -{token}
        </h1>
    );
});
const About = memo(() => {
    const [user, token] = userTokenContext();
    return (
        <h1>
            Page: {user.name} -{token}
        </h1>
    );
});

const App = memo(() => {
    return (
        <div>
            <h1>App component</h1>
            <Home />
            <About />
        </div>
    );
});

export default App;
