import { IconMoon, IconSun } from "@tabler/icons-react";

interface HeaderProps {
    onClick?: () => void
}

export default function Header(props: HeaderProps) {
    const exemplo = true
    return (
        <header className=" h-16 w-full shadow mode-dark mb-6 ">
            <div className="container m-auto px-6 h-full
            flex justify-between items-center text-sm sm:text-base ">
                <h1 className="font-extrabold">Where in the world?</h1>
                <button className="btn flex items-center gap-2
                hover:border"
                    onClick={props.onClick}>
                    {exemplo ? <IconMoon /> : <IconSun />}
                    {exemplo ? <span className="font-semibold">Dark Mode</span> : <span className="font-semibold">Ligth Mode</span>}
                </button>
            </div>
        </header>
    )
}