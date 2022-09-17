import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

}
export const WeekDaysButton = ({ children }: Props) => {
    return (
        <button className='bg-zinc-900 text-white rounded px-[0.90em] py-2'>
            {children}
        </button>
    )
}