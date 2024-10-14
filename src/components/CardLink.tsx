import Link from "next/link"
import st from "./Sections.module.scss"

interface PropsType {
  name: string
  path: string
  allDiv: HTMLDivElement | null
}

export default function CardLink(props: PropsType) {
  return (
    <Link
      href={props.path}
      style={{ textDecoration: "none" }}
      onClick={(e) => {
        e.preventDefault()
        console.log(props)
        if (props.allDiv) props.allDiv.style.opacity = "0"
        window.scroll({
          top: -5000,
          behavior: "smooth",
        })
        setTimeout(() => {
          window.location.href = props.path
        }, 500)
      }}
    >
      <div className={st.block}>{props.name}</div>
    </Link>
  )
}
