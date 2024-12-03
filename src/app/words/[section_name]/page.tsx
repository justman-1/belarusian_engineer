"use client"
import Header from "@/components/Header"
import { Russo_One } from "next/font/google"
import st from "./words_section.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Button } from "@/components/ui/button"
import { Center, Stack, Text } from "@chakra-ui/react"
import allData, { Translation } from "../../../words"
import { useEffect, useState, useRef } from "react"
import ProgressBar from "@/components/ProgressBar"
import { testCrypto } from "@/tests"

const font = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

function firstLetterUpperCase(str: string): string {
  return str.length ? str[0].toUpperCase() + str.slice(1) : str
}

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

export default function Words_Section({
  params,
}: {
  params: { section_name: string }
}) {
  const searchParams = useSearchParams()
  const level = parseInt(searchParams.get("level") || "0")
  const [words, setWords] = useState<Translation[]>([])
  const [wordsI, setWordsI] = useState<number>(0)
  const [isTranslate, setIsTranslate] = useState<boolean>(false)
  const [currWord, setCurrWord] = useState<string>(" ")
  const [correctAnsI, setCorrectAnsI] = useState<number>(
    Math.floor(Math.random() * 4)
  )
  //const [currAns, setCurrAns] = useState<number>(1)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const cardRef = useRef<HTMLDivElement>(null)
  function rotateCard() {
    setIsChecked(true)
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
    setIsChecked(false)
    if (isContinue) setWordsI((wordsI + 1) % words.length)
    else setWordsI(wordsI ? wordsI - 1 : words.length - 1)
  }
  useEffect(() => {
    testCrypto()
    console.log(level)
    const section_name: string = params.section_name
    for (const sectionKey in allData) {
      if(allData[sectionKey].hasOwnProperty(section_name)){
        const willWords: Translation[] = allData[sectionKey][section_name]
        setWords(randomizeArray(willWords.slice((level - 1) * 10, level * 10)))
        return
      }
    }
    window.location.href = "/"
  }, [])
  useEffect(() => {
    if (words.length) {
      setCurrWord(words[wordsI].word)
      setCorrectAnsI(Math.floor(Math.random() * 4))
    }
    //console.log("allData:")
    //console.log(allData)
    //console.log("words:")
    //console.log(words)
  }, [words, wordsI])
  return (
    <div className={font.className}>
      <Header />
      <main className="container">
        <Link
          href={"/pretest/" + params.section_name}
          style={{ textDecoration: "none" }}
        >
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
          <div className={st.card} onClick={rotateCard} ref={cardRef}>
            <div className={st.cardText}>{firstLetterUpperCase(currWord)}</div>
          </div>
          <RadioGroup size="lg">
            <Stack style={{ marginLeft: "10%" }}>
              {!words.length
                ? ""
                : words[wordsI].options
                    .toSpliced(correctAnsI, 0, words[wordsI].translation)
                    .map((option, i) => (
                      <Radio
                        value={`${i}`}
                        colorScheme="blue"
                        disabled={isChecked}
                        key={i}
                      >
                        <Text fontSize="2xl">
                          <span className={st.optionsText}>
                            {firstLetterUpperCase(option)}
                          </span>
                        </Text>
                      </Radio>
                    ))}
            </Stack>
          </RadioGroup>
          <Center marginTop="30px">
            <Button
              size="lg"
              colorPalette="green"
              letterSpacing="0.15em"
              width="50%"
              display={wordsI == words.length - 1 ? "inline-block" : "none"}
            >
              Скончыць
            </Button>
          </Center>
          <div className={st.arrows}>
            <div
              style={{ display: wordsI == 0 ? "inline-block" : "none" }}
            ></div>
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
