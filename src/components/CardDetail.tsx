import { useEffect, useState } from "react"
import { baseUrl } from "@/data/url"
import Image from "next/image"

interface CardDetailProps {
    data: any
}

export default function CardDetail(props: CardDetailProps) {
    const { data } = props
    const country = data[0]

    function getCurrencies() {
        const moedas = country.currencies
        return Object.entries(moedas).map((item: any) => item[1].name)
    }

    function getNativeName() {
        const r = country.name.nativeName
        const native = Object.entries(r).map((item: any) => item[1].common)
        return native[0]
    }

    function getLanguages() {
        const r = country.languages
        const names = Object.entries(r).map((item: any) => item[1])
        return names.join(', ')
    }

    return (
        <>
            {data.length > 0 ? (
                <div className="lg:flex lg:justify-between gap-10">
                    <Image src={country.flags.svg} alt="" width={200} height={100} className="w-full object-cover lg:w-[50%] lg:h-fit custom-shadow"/>
                    <div className="">
                        <h2 className="py-8 text-2xl font-extrabold lg:py-0 lg:pb-8">{country.name.common}</h2>
                        <div className="lg:flex lg:justify-between gap-56">
                            <div className="pb-8 space-y-3">
                                <p><span className="font-semibold">Native Name: </span>{getNativeName()}</p>
                                <p><span className="font-semibold">Population: </span>{country.population}</p>
                                <p><span className="font-semibold">Region: </span>{country.region}</p>
                                <p><span className="font-semibold">Sub Region: </span>{country.subregion}</p>
                                <p><span className="font-semibold">Capital: </span>{country.capital}</p>
                            </div>

                            <div className="pb-8 space-y-3">
                                <p><span className="font-semibold">Top Level Domain: </span>{country.tld}</p>
                                <p><span className="font-semibold">Currencies: </span>{getCurrencies()}</p>
                                <p><span className="font-semibold">Languages: </span>{getLanguages()}</p>
                            </div>
                        </div>
                        <div className="pb-8 space-y-3">
                            <p className="font-semibold">Border Countries:</p>
                            <div className="flex ">

                            </div>
                        </div>

                    </div>
                </div>) : (null)}
        </>
    )
}