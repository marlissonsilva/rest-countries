interface ContentProps {
    children: any
    className?: string
}
export default function Content(props: ContentProps) {
    return (
        <main>
            <section className={`${props.className}`}>
                {props.children}
            </section>
        </main>
    )
}