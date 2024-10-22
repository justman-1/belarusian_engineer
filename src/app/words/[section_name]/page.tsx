"use client"
import Header from "@/components/Header"
import { Russo_One } from "next/font/google"
import st from "./words_section.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react"
import allData, { Translation } from "../../../words"
import { useEffect, useState, useRef } from "react"

const font = Russo_One({ subsets: ["latin"], weight: "400", display: "swap" })

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
  const [words, setWords] = useState<Translation[]>([])
  const [wordsI, setWordsI] = useState<number>(0)
  const [isTranslate, setIsTranslate] = useState<boolean>(false)
  const [currWord, setCurrWord] = useState<string>(" ")
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
    const section_name: string = params.section_name
    for (const section in allData) {
      if (section_name == section) {
        let willWords: Translation[] = []
        if (allData.hasOwnProperty(section)) {
          const sectionObj = allData[section as keyof typeof allData]
          for (const part in sectionObj) {
            if (sectionObj.hasOwnProperty(part)) {
              const partObj = sectionObj[part as keyof typeof sectionObj]
              willWords = willWords.concat(partObj)
            }
          }
        }
        setWords(randomizeArray(willWords))
        return
      }
      if (allData.hasOwnProperty(section)) {
        const sectionObj = allData[section as keyof typeof allData]
        for (const part in sectionObj) {
          if (section_name == part && sectionObj.hasOwnProperty(part)) {
            const partObj = sectionObj[part as keyof typeof sectionObj]
            setWords(randomizeArray(partObj))
            return
          }
        }
      }
    }
    window.location.href = "/"
  }, [])
  useEffect(() => {
    if (words.length) setCurrWord(words[wordsI].word)
    console.log("allData:")
    console.log(allData)
    console.log("words:")
    console.log(words)
  }, [words, wordsI])
  return (
    <div className={font.className}>
      <Header />
      <main>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className={st.back}>
            <Image
              className={st.backImg}
              src="/arrow_left.svg"
              width={15}
              height={15}
              alt=""
            />
            <Text fontSize="xs">Да галоўнай старонцы</Text>
          </div>
        </Link>
        <div>
          <div className={st.card} onClick={rotateCard} ref={cardRef}>
            <div className={st.cardText}>
              {currWord[0].toUpperCase() + currWord.slice(1)}
            </div>
          </div>
          <RadioGroup style={{ marginTop: "10vw" }}>
            <Stack style={{ marginLeft: "10%" }}>
              <Radio
                size="lg"
                value="0"
                colorScheme="blue"
                isDisabled={isChecked}
              >
                Нейкі адказ
              </Radio>
              <Radio
                size="lg"
                value="1"
                colorScheme="blue"
                isDisabled={isChecked}
              >
                Другі адказ
              </Radio>
              <Radio
                size="lg"
                value="2"
                colorScheme="blue"
                isDisabled={isChecked}
              >
                Яшчэ адказ
              </Radio>
              <Radio
                size="lg"
                value="3"
                colorScheme="blue"
                isDisabled={isChecked}
              >
                Мабыць правільны адказ
              </Radio>
            </Stack>
          </RadioGroup>
          <div className={st.arrows}>
            <Image
              src="/arrow.png"
              width={100}
              height={100}
              alt=""
              className={st.arrow}
              onClick={() => {
                toggleWord(false)
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
            />
          </div>
        </div>
      </main>
    </div>
  )
}
