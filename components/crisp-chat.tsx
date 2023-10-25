"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {

        // key below is crips website id
        Crisp.configure("f03db7a4-1fca-46f0-b309-1e467bebf4a7")
    }, [])

    return null
}