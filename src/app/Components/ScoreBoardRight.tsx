'use client';

import { Context } from "@/contexts/Context";
import { useContext } from "react";
import Image from "next/image";

import ImgBrasil from '../../img/brasil.png';

export const ScoreBoardRight = () => {
    const { brasil } = useContext<any>(Context)
    return (
        <>
            <div className="flex">
                <div className="flex justify-center items-center h-[96px] w-36 text-7xl font-extrabold bg-white text-slate-600">
                    {brasil}
                </div>
                <Image
                    className="rounded-e-xl"
                    src={ImgBrasil}
                    width={140}
                    alt="Bandeira Brasil"
                />
            </div>
        </>
    )
}