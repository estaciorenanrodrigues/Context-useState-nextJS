import { useState } from "react"

export const StatesContext = () => {
    const [brasil, setBrasil] = useState<number>(0)
    const [argentina, setArgentina] = useState<number>(0)

    return {
        brasil,
        setBrasil,
        argentina,
        setArgentina
    }


}