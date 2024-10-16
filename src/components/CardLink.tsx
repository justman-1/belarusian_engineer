import Link from "next/link"
import st from "./Sections.module.scss"

interface PropsType {
  name: string
  path: string
  makeOpacity0: () => void
  isFull?: true
}

export default function CardLink(props: PropsType) {
  return (
    <>
      <Link
        href={props.path}
        style={{ textDecoration: "none" }}
        onClick={(e) => {
          e.preventDefault()
          console.log(props)
          props.makeOpacity0()
          setTimeout(() => {
            const scrollTop: number =
              document.documentElement.scrollTop || document.body.scrollTop
            const headerTop: number = window.innerWidth * 0.15
            if (scrollTop > headerTop) {
              window.scroll({
                top: window.innerWidth * 0.15,
              })
            }
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
            setTimeout(() => {
              window.location.href = props.path
            }, 200)
          }, 300)
        }}
      >
        <div
          className={st.block}
          style={{
            background: `conic-gradient(from 37deg, ${
              props.isFull ? "#2f68e3" : "#43b0f1"
            } 25%, white)`,
          }}
        >
          {props.name}
        </div>
      </Link>
    </>
  )
}
