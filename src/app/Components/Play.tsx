'use client';
import { Context } from "../../contexts/Context"
import { useContext } from "react"
import { ScoreBoardLeft } from "./ScoreBoardLeft";
import { ScoreBoardRight } from "./ScoreBoardRight";

export const Play = () => {
    const { brasil, setBrasil, argentina, setArgentina } = useContext<any>(Context)

    function goalBrasil(): void {
        setBrasil(brasil + 1)
    }

    function goalArgentina(): void {
        setArgentina(argentina + 1)
    }
    return (
        <>
            <main className="container
            bg-[url('https://assets.goal.com/images/v3/blt4a73783848a321c6/d4e530341d22680854e38d7014827d1c0b4d5092.jpg?auto=webp&format=pjpg&width=3840&quality=60')] bg-cover bg-center 
            flex flex-col justify-center items-center min-h-lvh min-w-[100%] bg-slate-500">
                <div className="flex justify-between w-[800px] h-24  rounded-xl ">
                    <ScoreBoardLeft />
                    <div className="text-7xl font-bold text-white">X</div>
                    <ScoreBoardRight />
                </div>
                <div className="flex justify-between w-[800px] mt-10 ">
                    <button onClick={goalArgentina} className="p-2 rounded-md bg-slate-100 hover:bg-cyan-400 ">Marcar Goool Hermanos ⚽</button>
                    <button onClick={goalBrasil} className="p-2 rounded-md bg-slate-100 hover:bg-yellow-400">⚽ Marcar Goool Canarinho</button>
                </div>
            </main>
        </>
    )
}