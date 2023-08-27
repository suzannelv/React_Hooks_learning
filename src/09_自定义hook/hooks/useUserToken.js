import { useContext } from "react";
import { UserContext, TokenContext } from "../context/index";

function useUserTokenContext() {
    const user = useContext(UserContext);
    const token = useContext(TokenContext);
    return [user, token];
}
export default useUserTokenContext;
