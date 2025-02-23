import { Box, Text } from "@chakra-ui/react"
import st from "./Level.module.scss"
import Link from "next/link"

interface PropsType {
  level: number
  section: string
  levelTestResult: number
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
        <Text className={st.levelText} fontSize="lg">
          Узровень {props.level}
        </Text>
        <div style={{ marginRight: "25px", marginTop: "10px", opacity: "0.7" }}>
          {props.levelTestResult}%
        </div>
        {/* <Text>Узровень {props.level}</Text> */}
      </Box>
    </Link>
  )
}
