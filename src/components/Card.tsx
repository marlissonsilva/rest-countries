import Image from "next/image"
import { useRef } from "react"
import {useRouter} from "next/router"

interface CardProps {
    data: any
}
export default function Card(props: CardProps) {
    const router = useRouter()
    const nameRef = useRef<HTMLDivElement>(null)
    const { data } = props

    function handleClick() {
        const card = nameRef.current
        const innerText = card?.innerText
        if (innerText) {
            const countryName = innerText
            router.push(`/page-detail?name=${countryName}`)
        }
    }
    return (
        <div className="w-[90%] max-w-[310px] m-auto rounded-md pb-8 custom-shadow mode-dark
        sm:h-[410px] cursor-pointer"
            onClick={handleClick}>
            <Image src={data.flags.svg} alt="" width={200} height={100} className="rounded-t-md h-[180px] w-full object-cover" loading="eager" />
            <div className="px-8">
                <h2 className="py-8 text-2xl font-extrabold" ref={nameRef}>{data.name.common}</h2>
                <div>
                    <p><span className="font-semibold">Population: </span>{data.population}</p>
                    <p><span className="font-semibold">Region: </span>{data.region}</p>
                    <p><span className="font-semibold">Capital: </span>{data.capital}</p>
                </div>
            </div>
        </div>
    )
}