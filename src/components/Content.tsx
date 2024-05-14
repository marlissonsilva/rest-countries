interface ContentProps {
    children: any
    className?: string
}
export default function Content(props: ContentProps) {
    return (
        <div className={`${props.className}`}>
            {props.children}
        </div>
    )
}