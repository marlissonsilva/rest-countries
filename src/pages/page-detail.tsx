import CardDetail from "@/components/CardDetail";
import Layout from "@/components/Layout";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { baseUrl } from "@/data/url";
import Router from "next/router";
import Load from "@/components/Load";

export default function PageDetail(props: any) {
    const router = Router
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(true)
    const { name } = router.query
    useEffect(() => {
        fetch(`${baseUrl}name/${name}`)
            .then(res => res.json())
            .then((data) => {
                setCountry(data)
                setLoading(false)
            })
    }, [name])

    return (
        <Layout className="flex flex-col px-4 text-base gap-20">
            <Link href={'/'} className="w-fit h-10">
                <button className="btn flex items-center gap-2 custom-shadow mode-dark px-6 mb-10">
                    <IconArrowNarrowLeft />
                    <span>Back</span>
                </button>
            </Link>
            {loading ? <Load /> : (
                <CardDetail data={country} />)}
        </Layout>
    )
}