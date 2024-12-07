import sectors from "./words"
import randomString from "randomstring"
import { AES, enc } from "crypto-js"

export interface testWord {
  word: string
  checked: boolean
}

export type Test = testWord[]

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

class TestsClass{
  initTests(): Db {
    const db: Db = {
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
    let successDecrypt = false
    if (localStorage.getItem("technikDb")) {
      const db: Db | null = this.#tryDecryptDb(localStorage.getItem("technikDb") || "")
      if (db) {
        successDecrypt = true

      }
    }
    if(!successDecrypt){
      for (const sectorKey in sectors) {
        for (const themeKey in sectors[sectorKey]) {
          
          if(sectors[sectorKey][themeKey] )
        }
      }
      //localStorage.setItem("technikDb", )
    }
    return db
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