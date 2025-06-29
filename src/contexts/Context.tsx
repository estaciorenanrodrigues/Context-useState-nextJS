import { createContext } from "react";
import { StatesContext } from "./StatesContexts";

const Context = createContext({})

const StatesProvider = ({ children }: any) => {
    const {
        brasil,
        setBrasil,
        argentina,
        setArgentina
    } = StatesContext()

    return (
        <Context.Provider value={{
            brasil,
            setBrasil,
            argentina,
            setArgentina
        }}>
            {children}
        </Context.Provider>
    )
}
export { Context, StatesProvider } 