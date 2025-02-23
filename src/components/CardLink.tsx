import Link from "next/link"
import st from "./Sections.module.scss"
import { Text } from "@chakra-ui/react"

interface PropsType {
  name: string
  path: string
}

export default function CardLink(props: PropsType) {
  return (
    <Link className={st.card} href={props.path} style={{ textDecoration: "none" }}>
      <Text className={st.cardText} fontSize={"2xl"}>
        {props.name}
      </Text>
    </Link>
  )
}
