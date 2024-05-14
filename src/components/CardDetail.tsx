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
                    <Image src={country.flags.svg} alt="" width={200} height={100} className="w-full object-cover lg:w-[50%] lg:h-fit custom-shadow" />
                    <div className="">
                        <h3 className="py-8 text-2xl font-bold lg:py-0 lg:pb-8">{country.name.common}</h3>
                        <div className="lg:flex lg:justify-between gap-56">
                            <div className="pb-8 space-y-3">
                                <p><span className="font-bold">Native Name: </span>{getNativeName()}</p>
                                <p><span className="font-bold">Population: </span>{country.population}</p>
                                <p><span className="font-bold">Region: </span>{country.region}</p>
                                <p><span className="font-bold">Sub Region: </span>{country.subregion}</p>
                                <p><span className="font-bold">Capital: </span>{country.capital}</p>
                            </div>

                            <div className="pb-8 space-y-3">
                                <p><span className="font-bold">Top Level Domain: </span>{country.tld}</p>
                                <p><span className="font-bold">Currencies: </span>{getCurrencies()}</p>
                                <p><span className="font-bold">Languages: </span>{getLanguages()}</p>
                            </div>
                        </div>
                        <div className="pb-8 space-y-3">
                            <p className="font-bold">Border Countries:</p>
                            <div className="flex ">

                            </div>
                        </div>

                    </div>
                </div>) : (null)}
        </>
    )
}