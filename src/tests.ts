import sectors from "./words"

export interface testWord{
    word: string
    checked: boolean
}

export type Test = testWord[]

export interface Db{
    [key: string]: Test[]
    "prog-web": Test[],
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

export function initTests(): Db{
    let db: Db = {
        "prog-web": [],
        "prog-mobile": [],
        "prog-micro": [],
        algo: [],
        ai: [],
        "internet-things": [],
        internet: [],
        "electro-fundamentals": [],
        "control-systems": [],
        schemes: []
    };
    if(localStorage.getItem("technikDb")){

    }
    else{
        for(const sector in sectors){
            console.log(sector)
            console.log(sectors[sector])
            db["algo"] = [[]]
        }
        //localStorage.setItem("technikDb", )
    }
    return db
}