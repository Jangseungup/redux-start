import { useContext } from "react";
import ReduxContext from "../contacts/ReduxContext";

export default function useReduxDispatch() {
    const store = useContext(ReduxContext);
    return store.dispatch;
}