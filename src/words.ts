export type Translation = {
  word: string
  translation: string
}

type DataType = {
  "prog-full": {
    "prog-internet": Translation[]
    "prog-mobile": Translation[]
    "prog-micro": Translation[]
    algo: Translation[]
    ai: Translation[]
    internet: Translation[]
  }
  "electronics-full": {
    "electro-fundamentals": Translation[]
    "control-systems": Translation[]
    schemes: Translation[]
  }
}
const data: DataType = {
  "prog-full": {
    "prog-internet": [
      { word: "запыт", translation: "запрос" },
      { word: "адказ", translation: "ответ" },
      { word: "серверны рэндэрынг", translation: "серверный рендеринг" },
      { word: "вэб-старонка", translation: "веб-страница" },
    ],
    "prog-mobile": [
      { word: "мабільны дадатак", translation: "мобильное приложение" },
      { word: "тэставанне", translation: "тестирование" },
    ],
    "prog-micro": [
      { word: "лічбавы", translation: "цифровой" },
      {
        word: "запамінальная прылада",
        translation: "Запоминающее устройство",
      },
    ],
    algo: [
      { word: "спіс", translation: "список" },
      { word: "узвядзенне ў ступень", translation: "Возведение в степень" },
      { word: "чарада", translation: "массив" },
      { word: "паказальнік", translation: "указатель" },
      { word: "сартаванне", translation: "сортировка" },
      { word: "пошук", translation: "поиск" },
      { word: "чарга", translation: "очередь" },
    ],
    ai: [
      { word: "нейронная сетка", translation: "нейронная сеть" },
      { word: "вектар", translation: "вектор" },
      { word: "кластар", translation: "кластер" },
      { word: "дадзеныя", translation: "данные" },
      { word: "трэнінг", translation: "обучение" },
      { word: "класыфікацыя", translation: "классификация" },
      { word: "рэгрэсія", translation: "регрессия" },
      {
        word: "вылічальная магӯтнасць",
        translation: "Вычислительная мощность",
      },
    ],
    internet: [
      { word: "Інтэрнэт рэчаў", translation: "Интернет вещей" },
      { word: "смарт-прылада", translation: "умное устройство" },
      { word: "сетка", translation: "сеть" },
      { word: "пратакол", translation: "протокол" },
      { word: "сэрвіс", translation: "сервис" },
      { word: "лакальная сетка", translation: "локальная сеть" },
      {
        word: "дыстанцыйнае кіраванне",
        translation: "удалённое управление",
      },
      { word: "злучэнне", translation: "соединение" },
      {
        word: "праграмнае забеспячэнне",
        translation: "программное обеспечение",
      },
      { word: "датчык", translation: "датчик" },
      { word: "кібербяспека", translation: "кибербезопасность" },
    ],
  },
  "electronics-full": {
    "electro-fundamentals": [
      { word: "рэзістар", translation: "резистор" },
      { word: "кандэнсатар", translation: "конденсатор" },
      { word: "транзістар", translation: "транзистор" },
      { word: "дыёд", translation: "диод" },
      { word: "асцылограф", translation: "осциллограф" },
      { word: "сігнал", translation: "сигнал" },
      { word: "супраціўленне", translation: "сопротивление" },
      { word: "напружанне", translation: "напряжение" },
      { word: "лічбавы сігнал", translation: "цифровой сигнал" },
    ],
    "control-systems": [
      { word: "аўтаматызацыя", translation: "автоматизация" },
      { word: "праграма кіравання", translation: "программа управления" },
      { word: "лічбавы кантроль", translation: "цифровое управление" },
      { word: "прывад", translation: "привод" },
      { word: "сістэма маніторынгу", translation: "система мониторинга" },
    ],
    schemes: [
      { word: "мантаж", translation: "монтаж" },
      { word: "паяльнік", translation: "паяльник" },
      { word: "драты", translation: "провода" },
      { word: "зазямленне", translation: "заземление" },
      { word: "электрычная схема", translation: "электрическая схема" },
      { word: "рэле", translation: "реле" },
      { word: "кантакт", translation: "контакт" },
      { word: "перамыкач", translation: "переключатель" },
      { word: "аўтамат", translation: "автомат" },
      { word: "ізаляцыя", translation: "изоляция" },
    ],
  },
}
export default data
