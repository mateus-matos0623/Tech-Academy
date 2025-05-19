'use client'

import CountUp from "react-countup";

interface CountUpProps {
    end: number
}

export function CountUP({ end }: CountUpProps) {
    return <CountUp end={end} separator="." />
}