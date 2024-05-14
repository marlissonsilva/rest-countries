import { Nunito_Sans } from "next/font/google"
import Head from "next/head";
import Content from "./Content";
import Header from "./Header";
import { useState } from "react";

interface LayoutProps {
    children: any
    className?: string
}

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export default function Layout(props: LayoutProps) {
    const [theme, setTheme] = useState('dark')

    function handleTheme() {
        theme === 'dark' ? setTheme('') : setTheme('dark')
    }
    return (
        <>
            <Head>
                <title>Rest Countries</title>
            </Head>
            <div className={`${theme} ${nunito_sans.className}`}>
                <div className="dark:bg-gray-900 dark:text-zinc-200 text-sm">
                    <Header onClick={handleTheme} />
                    <Content className={`container m-auto min-h-screen ${props.className}`}>
                        {props.children}
                    </Content>
                </div>
            </div>
        </>
    )
}