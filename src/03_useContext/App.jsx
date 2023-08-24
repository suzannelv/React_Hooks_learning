import React, { memo, useContext } from "react";
import { ThemeContext, UserContext } from "./context";

const App = memo(() => {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h2>
                user: {user.name}-{user.age}
            </h2>
            <h2 style={{ color: theme.color, fontSize: theme.size }}>theme</h2>
        </div>
    );
});

export default App;
