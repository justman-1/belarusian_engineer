import { Box, Text } from "@chakra-ui/react"
import st from "./Level.module.scss"
import Link from "next/link"

interface PropsType {
  level: number
  section: string
}

export default function Level(props: PropsType) {
  return (
    <Link
      href={{
        pathname: `/words/${props.section}`,
        query: { level: props.level },
      }}
    >
      <Box className={st.level}>
        <Text>Узровень {props.level}</Text>
      </Box>
    </Link>
  )
}
