import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {


    const onSent = async (prompt) => {
        await run(prompt)
    }

    onSent("What is react")

    const contextValue = {

    }

    return (
        <Context.provider value={contextValue}>
            {props.children}
        </Context.provider>
    )
}

export default ContextProvider