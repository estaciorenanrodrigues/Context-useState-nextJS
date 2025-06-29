'use client';
import { Context } from "@/contexts/Context"
import { useContext } from "react"
import Image from "next/image"

import ImgArgentina from '../../img/argentina.svg';

export const ScoreBoardLeft = () => {
    const { argentina } = useContext<any>(Context)
    return (
        <>
            <div className="flex">
                <Image
                    className="rounded-s-xl"
                    src={ImgArgentina}
                    width={140}
                    alt="Bandeira Argentina"
                />
                <div className="flex justify-center items-center h-[96px] w-36 text-7xl font-extrabold bg-white text-slate-600">
                    {argentina}
                </div>
            </div>
        </>
    )
}