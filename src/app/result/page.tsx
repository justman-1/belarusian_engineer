"use client"
import { useEffect, useState } from "react"
import { PassingTestResult, ResultTest, Tests } from "@/tests"
import { Russo_One } from "next/font/google"
import Header from "@/components/Header"
import { useRouter } from "next/navigation"
import { Text, Card, Stack, Button, Center } from "@chakra-ui/react"
import firstLetterUpperCase from "@/utils/firstLetterUpperCase"
import Link from "next/link"
import Confetti from "react-confetti"

const font = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export default function Result() {
  const [qAnswers, setQAnswers] = useState<[number, number]>([-1, -1]) //[q of correct ans, q of all answers]
  const [isLastTest, setIsLastTest] = useState<boolean>(true)
  const [sectionName, setSectionName] = useState<string>("")
  const [level, setLevel] = useState<number>(-1)
  const [test, setTest] = useState<ResultTest>([])
  const router = useRouter()
  const [confettiRunning, setConfettiRunning] = useState<boolean>(false)
  useEffect(() => {
    const res = Tests.tryDecryptTestResult(localStorage.getItem("lt") || "")
    if (!res) return router.replace("/")
    //console.log(res)
    let qCorrect: number = 0
    const result: PassingTestResult = JSON.parse(res)
    const thisTest: ResultTest = result.test
    for (let i = 0; i < thisTest.length; ++i) if (thisTest[i].checked) qCorrect++
    setQAnswers([qCorrect, thisTest.length])
    setIsLastTest(result.isLastLevel)
    setSectionName(result.section_name)
    setLevel(result.level)
    setTest(thisTest)
  }, [])
  useEffect(() => {
    if (qAnswers[0] != -1 && qAnswers[0] == qAnswers[1]) {
      setConfettiRunning(true)
      setTimeout(() => {
        setConfettiRunning(false)
      }, 3000)
    }
  }, [qAnswers])
  return (
    <div className={font.className}>
      <Header />
      {qAnswers[0] == -1 ? (
        ""
      ) : (
        <main className="container" style={{ marginBottom: "50px" }}>
          <Confetti
            width={document.body.clientWidth}
            height={document.documentElement.scrollHeight}
            numberOfPieces={confettiRunning ? 300 : 0}
          />
          <Text textStyle="4xl" textAlign="center" marginTop="4">
            Ваш вынік:
          </Text>
          <Text textStyle="3xl" textAlign="center" marginTop="4">
            {qAnswers[0]}{" "}
            {qAnswers[0] == 1
              ? "правільны адказ"
              : qAnswers[0] && qAnswers[0] < 5
              ? "правільныя адказы"
              : "правільных адказаў"}{" "}
            з {qAnswers[1]}
          </Text>
          <Stack marginTop="4">
            {test.map((e, i) => {
              return (
                <Card.Root size="sm" bgColor={e.checked ? "#bfffbe" : "#ffc9c9"} key={i}>
                  <Card.Body>
                    <Text color="fg.muted">{firstLetterUpperCase(e.word)}</Text>
                    <Text color="black">{firstLetterUpperCase(e.answer)}</Text>
                  </Card.Body>
                </Card.Root>
              )
            })}
          </Stack>
          <Stack>
            <Link href="/">
              <Center>
                <Button
                  variant="outline"
                  colorPalette="blue"
                  marginTop="3"
                  size={isLastTest ? "2xl" : "xl"}
                >
                  На галоўную
                </Button>
              </Center>
            </Link>
            <Link
              href={{
                pathname: `/words/${sectionName}`,
                query: { level: level + 1 },
              }}
            >
              <Center>
                <Button
                  variant="solid"
                  colorPalette="blue"
                  marginTop="1"
                  size="2xl"
                  display={isLastTest ? "none" : "block"}
                >
                  Наступны тэст
                </Button>
              </Center>
            </Link>
          </Stack>
        </main>
      )}
    </div>
  )
}
