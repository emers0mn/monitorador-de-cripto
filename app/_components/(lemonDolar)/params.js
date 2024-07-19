'use client'
import { useSearchParams } from "next/navigation";
import { LemonDolar, ReaisPeso1, ReaisPeso2 } from "./lemonDolar";

export function ParamsCashL() {
    const searchParams = useSearchParams()
    const exchange = searchParams.get('exchange')
    return (
        <LemonDolar
            ex={exchange ? exchange : "lemoncash"}
        />
    )
}

export function ParamsCash1() {
    const searchParams = useSearchParams()
    const exchange = searchParams.get('exchange')
    return (
        <ReaisPeso1
            ex={exchange ? exchange : "lemoncash"}
        />
    )
}

export function ParamsCash2() {
    const searchParams = useSearchParams()
    const exchange = searchParams.get('exchange')
    return (
        <ReaisPeso2
            ex={exchange ? exchange : "lemoncash"}
        />
    )
}