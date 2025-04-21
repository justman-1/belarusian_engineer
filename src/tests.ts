import sectors, { Translation } from "./words"
import randomString from "randomstring"
import { AES, enc } from "crypto-js"

const testBaseSize = 10

export interface TestWord {
  word: string
  checked: boolean
}
interface TestWordResult extends TestWord {
  answer: string
}

export type Test = TestWord[]
export type ResultTest = TestWordResult[]
export interface PassingTestResult {
  section_name: string
  level: number
  isLastLevel: boolean
  test: ResultTest
}

export interface Db {
  [key: string]: Test[]
  "prog-web": Test[]
  "prog-mobile": Test[]
  "prog-micro": Test[]
  algo: Test[]
  ai: Test[]
  "internet-things": Test[]
  internet: Test[]
  "electro-fundamentals": Test[]
  "control-systems": Test[]
  schemes: Test[]
}
const dbBaseObj: Db = {
  "prog-web": [],
  "prog-mobile": [],
  "prog-micro": [],
  algo: [],
  ai: [],
  "internet-things": [],
  internet: [],
  "electro-fundamentals": [],
  "control-systems": [],
  schemes: [],
}

class TestsClass {
  initTests(): Db {
    let db: Db = dbBaseObj
    let successDecrypt = false
    if (localStorage.getItem("technikDb")) {
      const gettingDb: Db | null = this.#tryDecryptDb(
        localStorage.getItem("technikDb") || ""
      )
      successDecrypt = db ? true : false
      if (gettingDb) db = gettingDb
    }
    if (!successDecrypt) {
      const newDb = this.#createNewDb()
      db = newDb
    }
    return this.#integrateUpdatesToDb(db)
  }
  encryptTestResult(result: string): string {
    return AES.encrypt(result, "RANDOMKEYSFDKJSDHBLSVDKLSG8s3HBHSGFGH34277e").toString()
  }
  tryDecryptTestResult(encryptedResult: string): string | null {
    let decryptedBytes
    try {
      decryptedBytes = AES.decrypt(
        encryptedResult,
        "RANDOMKEYSFDKJSDHBLSVDKLSG8s3HBHSGFGH34277e"
      )
      return decryptedBytes.toString(enc.Utf8)
    } catch {
      return null
    }
  }
  saveTestResult(section_name: string, level: number, test: Test) {
    const db = this.initTests()
    let qWas: number = 0
    for (let i = 0; i < db[section_name][level - 1].length; ++i)
      qWas += db[section_name][level - 1][i].checked ? 1 : 0
    let qNew: number = 0
    for (let i = 0; i < test.length; ++i) qNew += test[i].checked ? 1 : 0
    if (qNew > qWas) db[section_name][level - 1] = test
    this.#saveNewDb(db)
  }
  isLastLevel(section_name: string, level: number) {
    const db = this.initTests()
    return !(
      level < db[section_name].length - 1 ||
      (level == db[section_name].length - 1 &&
        db[section_name][db[section_name].length - 1].length >= 4)
    )
  }
  getTestLevelsMarks(section_name: string): number[] {
    const db = this.initTests()
    const marks: number[] = []
    for (let i = 0; i < db[section_name].length; ++i) {
      if (db[section_name][i].length >= 4) {
        let correctAnswers: number = 0
        for (let j = 0; j < db[section_name][i].length; ++j)
          correctAnswers += db[section_name][i][j].checked ? 1 : 0
        marks.push(Math.round((correctAnswers / db[section_name][i].length) * 100))
      }
    }
    return marks
  }

  #saveNewDb(db: Db): void {
    localStorage.setItem("technikDb", this.#encryptDb(db))
  }
  #integrateUpdatesToDb(db: Db): Db {
    for (const sectorKey in sectors) {
      let found: boolean = false;
      for (const themeKey in sectors[sectorKey]) {
        const words: Translation[] = sectors[sectorKey][themeKey]
        const testsWordsLength = db[themeKey].reduce((currSum, test)=>currSum + test.length, 0)
        if (words.length != testsWordsLength) {
          db = this.#createNewDb()
          found = true
          console.log(sectorKey, themeKey, "CREATE NEW DB")
          console.log("tests: ", db)
          console.log("words: ", sectors)
          break;
          /* for (let i = 0; i < words.length; ++i) {
            let found: boolean = false
            for (const test of db[themeKey]) {
              for (let j = 0; j < test.length; ++j) {
                if (test[j].word == words[i].word) {
                  found = true
                  break
                }
              }
              if (found) break
            }
            if (!found) {
              db[themeKey][db[themeKey].length - 1].push({
                word: words[i].word,
                checked: false,
              })
            }
          } */
        }
      }
      if(found)
        break;
    }
    this.#saveNewDb(db)
    return db
  }
  #createNewDb(): Db {
    const newDb: Db = dbBaseObj
    for (const sectorKey in sectors) {
      for (const themeKey in sectors[sectorKey]) {
        const words: Translation[] = sectors[sectorKey][themeKey]
        const tests: Test[] = [[]]
        for (let i = 0; i < words.length; ++i) {
          const testWord: TestWord = {
            word: words[i].word,
            checked: false,
          }
          if (tests[tests.length - 1].length < testBaseSize)
            tests[tests.length - 1].push(testWord)
          else tests.push([testWord])
        }
        newDb[themeKey] = tests
      }
    }
    return newDb
  }
  #encryptDb(db: Db): string {
    const startSymbols = randomString.generate({
      length: Math.floor(Math.random() * 20),
      charset: "alphabetic",
    })
    const hashSize = 30 + Math.floor(Math.random() * 40)
    const hash = randomString.generate({
      length: hashSize,
      charset: "alphanumeric",
    })
    const encryptedDb = AES.encrypt(JSON.stringify(db), hash).toString()
    const encrypted = startSymbols + hashSize + hash + encryptedDb
    //console.log("hash size and hash: " + hashSize + " " + hash)
    //console.log("enctrypted db: " + encryptedDb)
    return encrypted
  }
  #tryDecryptDb(hash: string): Db | null {
    let i = 0
    while (i < hash.length && Number.isNaN(parseInt(hash[i]))) ++i
    if (i + 2 >= hash.length) return null
    const hashingStringSize: number = parseInt(hash.slice(i, i + 2))
    //console.log("dectypting hash size: " + hashingStringSize)
    if (i + 2 + hashingStringSize >= hash.length) return null
    const hashingString: string = hash.slice(i + 2, i + 2 + hashingStringSize)
    //console.log("decr hashing string: " + hashingString)
    const hashedDb: string = hash.slice(i + 2 + hashingStringSize, hash.length)
    //console.log("decr hashed db: " + hashedDb)
    let decryptedBytes
    try {
      decryptedBytes = AES.decrypt(hashedDb, hashingString)
      const decrypted: string = decryptedBytes.toString(enc.Utf8)
      //console.log("decr string: " + decrypted)
      return JSON.parse(decrypted)
    } catch {
      return null
    }
  }
}

export const Tests = new TestsClass()
