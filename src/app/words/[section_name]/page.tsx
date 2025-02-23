"use client"
import { useEffect, useState, useRef } from "react"
import { Russo_One } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Button } from "@/components/ui/button"
import { Center, Stack, Text } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"
import st from "./words_section.module.scss"
import Header from "@/components/Header"
import allData, { Translation } from "../../../words"
import ProgressBar from "@/components/ProgressBar"
import { PassingTestResult, ResultTest, Test, Tests } from "@/tests"
import RotateCardDialog from "@/components/RotateCardDialog"
import useDialogStore from "@/stores/useDialogOpen"
import { useRouter } from "next/navigation"
import firstLetterUpperCase from "@/utils/firstLetterUpperCase"

const font = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

function randomizeArray(arr: Translation[]): Translation[] {
  const notUsed: number[] = new Array(arr.length).fill(0).map((e, i) => i)
  const newArr: Translation[] = []
  while (notUsed.length) {
    const notUsedI: number = Math.floor(Math.random() * notUsed.length)
    const i: number = notUsed[notUsedI]
    newArr.push(arr[i])
    notUsed.splice(notUsedI, 1)
  }
  return newArr
}

export default function Words_Section({ params }: { params: { section_name: string } }) {
  const loaded = useRef<boolean>(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const level = parseInt(searchParams.get("level") || "-1")
  const [words, setWords] = useState<Translation[]>([])
  const [answers, setAnswers] = useState<number[]>([])
  const [thisTest, setThisTest] = useState<Test>([])
  const [wordsI, setWordsI] = useState<number>(0)
  const [isTranslate, setIsTranslate] = useState<boolean>(false)
  const [currWord, setCurrWord] = useState<string>(" ")
  const [correctAnsI, setCorrectAnsI] = useState<number[]>([])
  const cardRef = useRef<HTMLDivElement>(null)
  const dialogStore = useDialogStore((state) => state)

  function rotateCard(rotateAnyway: boolean) {
    if (!isTranslate) {
      if (!rotateAnyway && answers[wordsI] > -1) {
        dialogStore.openDialog(wordsI)
        return
      }
      answers[wordsI] = -2
      setAnswers([...answers])
    }
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(90deg) rotateZ(${
        Math.random() > 0.5 ? 10 : -10
      }deg)`
    }
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(0deg) rotateZ(0deg)`
      }
      setCurrWord(!isTranslate ? words[wordsI].translation : words[wordsI].word)
    }, 250)
    setIsTranslate(!isTranslate)
  }

  function toggleWord(isContinue: boolean) {
    setIsTranslate(false)
    if (isContinue) setWordsI((wordsI + 1) % words.length)
    else setWordsI(wordsI ? wordsI - 1 : words.length - 1)
  }

  function changeAnswer(answerIndex: number) {
    //console.log(answerIndex)
    answers[wordsI] = answerIndex
    setAnswers([...answers])
    //console.log("was: " + answers)
  }

  function finishTest() {
    let notAnsweredWords: number = 0
    for (let i = 0; i < answers.length; ++i) if (answers[i] == -1) notAnsweredWords++
    if (notAnsweredWords)
      return toaster.create({
        title: `Вы не далі адказ для ${notAnsweredWords} ${
          notAnsweredWords == 1 ? "слова" : "слоў"
        }`,
        description:
          "Каб скончыць тэст, трэба перавярнуць картку або даць адказ для кожнага слова.",
        type: "error",
      })
    const testResult: ResultTest = thisTest.map((e) => {
      e.checked = false
      return { answer: "-1", ...e }
    })
    for (let i = 0; i < words.length; ++i) {
      for (let realI = 0; realI < thisTest.length; ++realI) {
        if (words[i].word == thisTest[realI].word) {
          if (correctAnsI[i] == answers[i]) {
            testResult[realI].checked = true
            testResult[realI].answer = words[i].translation
          } else if (answers[i] == -2) {
            testResult[realI].answer = "Без адказу"
          } else {
            testResult[realI].answer =
              words[i].options[answers[i] < correctAnsI[i] ? answers[i] : answers[i] - 1]
          }
          break
        }
      }
    }
    const testSave: Test = testResult.map((e) => {
      return { checked: e.checked, word: e.word }
    })
    Tests.saveTestResult(params.section_name, level, testSave)
    //console.log("Test: ")
    //console.log(testSave)
    const passingResult: PassingTestResult = {
      section_name: params.section_name,
      level: level,
      test: testResult,
      isLastLevel: Tests.isLastLevel(params.section_name, level),
    }
    const encResult = Tests.encryptTestResult(JSON.stringify(passingResult))
    //console.log(encResult)
    localStorage.setItem("lt", encResult)
    router.push(`/result`)
  }

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true
    if (!level || level < 0) return router.replace("/")
    //console.log("level " + level)
    const section_name: string = params.section_name
    for (const sectionKey in allData) {
      if (allData[sectionKey].hasOwnProperty(section_name)) {
        const willWords: Translation[] = allData[sectionKey][section_name]
        if ((willWords.length - 1) / 10 < level - 1)
          return router.replace(`/pretest/${section_name}`)
        setWords(randomizeArray(willWords.slice((level - 1) * 10, level * 10)))
        const db = Tests.initTests()
        setThisTest(db[params.section_name][level - 1])
        setAnswers(Array(db[params.section_name][level - 1].length).fill(-1))
        setCorrectAnsI(
          Array(db[params.section_name][level - 1].length)
            .fill(0)
            .map(() => {
              return Math.floor(Math.random() * 4)
            })
        )
        //console.log("1: ")
        //console.log(randomizeArray(willWords.slice((level - 1) * 10, level * 10)))
        //console.log("2: ")
        //console.log(db[params.section_name][level - 1])
        //console.log("3: ")
        //console.log(Array(db[params.section_name][level - 1].length).fill(-1))
        //console.log("4: ")
        /* console.log(
          Array(db[params.section_name][level - 1].length)
            .fill(0)
            .map(() => {
              return Math.floor(Math.random() * 4)
            })
        ) */
        //console.log("5(db):")
        //console.log(db)
        return
      }
    }
    router.replace("/")
  }, [])

  useEffect(() => {
    //console.log("answers:")
    //console.log(answers)
    if (words.length) {
      setCurrWord(words[wordsI].word)
    }
    //console.log("allData:")
    //console.log(allData)
    //console.log("words:")
    //console.log(words)
  }, [words, wordsI])

  useEffect(() => {
    if (!dialogStore.on && dialogStore.response == 1) {
      rotateCard(true)
      dialogStore.setResponse(-1)
    }
  }, [dialogStore.on])

  return (
    <div className={font.className}>
      <Header />
      <RotateCardDialog />
      <Toaster />
      <main className="container" style={{ display: thisTest.length ? "block" : "none" }}>
        <Link href={"/pretest/" + params.section_name} style={{ textDecoration: "none" }}>
          <div className={st.back}>
            <Image
              className={st.backImg}
              src="/arrow_left.svg"
              width={15}
              height={15}
              alt=""
            />
            <Text fontSize="xs">Назад</Text>
          </div>
        </Link>
        <ProgressBar progress={(wordsI * 100) / words.length} />
        <div>
          <div
            className={st.card}
            onClick={() => {
              rotateCard(false)
            }}
            ref={cardRef}
          >
            <div className={st.cardText}>{firstLetterUpperCase(currWord)}</div>
          </div>
          <RadioGroup
            size="lg"
            marginBottom={150}
            value={answers.length ? answers[wordsI].toString() : "-1"}
          >
            <Stack style={{ marginLeft: "10%" }}>
              {!words.length
                ? ""
                : words[wordsI].options
                    .toSpliced(correctAnsI[wordsI], 0, words[wordsI].translation)
                    .map((option, i) => (
                      <Radio
                        value={`${i}`}
                        colorScheme="blue"
                        disabled={answers[wordsI] == -2}
                        key={i}
                        onChange={() => {
                          changeAnswer(i)
                        }}
                      >
                        <Text fontSize="2xl">
                          <span
                            className={st.optionsText}
                            style={{ color: answers[wordsI] == -2 ? "gray" : "black" }}
                          >
                            {firstLetterUpperCase(option)}
                          </span>
                        </Text>
                      </Radio>
                    ))}
            </Stack>
          </RadioGroup>
          <Center marginTop="30px">
            <Button
              onClick={finishTest}
              size="lg"
              colorPalette="green"
              letterSpacing="0.15em"
              width="50%"
              marginBottom={"50px"}
              display={wordsI == words.length - 1 ? "inline-block" : "none"}
            >
              Скончыць
            </Button>
          </Center>
          <div className={st.arrows}>
            <div style={{ display: wordsI == 0 ? "inline-block" : "none" }}></div>
            <Image
              src="/arrow.png"
              width={100}
              height={100}
              alt=""
              className={st.arrow}
              onClick={() => {
                toggleWord(false)
              }}
              style={{
                display: wordsI != 0 ? "inline" : "none",
                transform: "rotateY(180deg)",
                left: "10%",
              }}
            />
            <Image
              src="/arrow.png"
              width={100}
              height={100}
              alt=""
              className={st.arrow}
              onClick={() => {
                toggleWord(true)
              }}
              style={{
                display: wordsI != words.length - 1 ? "inline" : "none",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
