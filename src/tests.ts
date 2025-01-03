import sectors, { Translation } from "./words"
import randomString from "randomstring"
import { AES, enc } from "crypto-js"

const testBaseSize = 10

export interface TestWord {
  word: string
  checked: boolean
}

export type Test = TestWord[]

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
    const db: Db = dbBaseObj
    let successDecrypt = false
    if (localStorage.getItem("technikDb")) {
      const db: Db | null = this.#tryDecryptDb(localStorage.getItem("technikDb") || "")
      successDecrypt = db ? true : false
    }
    if (!successDecrypt) {
      //create new db
      const newDb = this.#createNewDb()
      localStorage.setItem("technikDb", this.#encryptDb(newDb))
    }
    return this.#integrateUpdatesToDb(db)
  }

  #integrateUpdatesToDb(db: Db): Db {
    for (const sectorKey in sectors) {
      for (const themeKey in sectors[sectorKey]) {
        const words: Translation[] = sectors[sectorKey][themeKey]
        if (words.length != db[themeKey].length) {
          for (let i = 0; i < words.length; ++i) {
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
          }
        }
      }
    }
    localStorage.setItem("technikDb", this.#encryptDb(db))
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
    } catch {
      return null
    }
    const decrypted: string = decryptedBytes.toString(enc.Utf8)
    //console.log("decr string: " + decrypted)
    return JSON.parse(decrypted)
  }
}

export const Tests = new TestsClass()
