export type Translation = {
  word: string
  translation: string
  options: [string, string, string]
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

//Вэб-праграммаванне
const progInternet: Translation[] = [
  {
    word: "запыт",
    translation: "запрос",
    options: ["заказ", "реклама", "документ"],
  },
  {
    word: "адказ",
    translation: "ответ",
    options: ["протокол", "код", "вопрос"],
  },
  {
    word: "серверны рэндэрынг",
    translation: "серверный рендеринг",
    options: ["серверная обработка", "облачное хранение", "бэкенд-передача"],
  },
  {
    word: "вэб-старонка",
    translation: "веб-страница",
    options: ["интерфейс", "сеть", "облачная платформа"],
  },
  {
    word: "аўтаматычна",
    translation: "автоматически",
    options: ["программно", "вручную", "одновременно"],
  },
]

//Праграммаванне мабільных дадаткаў
const progMobile: Translation[] = [
  {
    word: "мабільны дадатак",
    translation: "мобильное приложение",
    options: ["софт", "виртуальный сервер", "интерфейс"],
  },
  {
    word: "тэставанне",
    translation: "тестирование",
    options: ["внедрение", "конверсия", "интеграция"],
  },
  {
    word: "усталяваць праграмму",
    translation: "установить программу",
    options: ["удалить программу", "обновить драйвер", "запустить систему"],
  },
  {
    word: "скід да завадскіх налад",
    translation: "сброс к заводским настройкам",
    options: [
      "перезагрузка системы",
      "архивирование данных",
      "восстановление системы",
    ],
  },
]

//Праграммаванне мікракантролераў і ўбудавальных сістэм
const progMicro: Translation[] = [
  {
    word: "лічбавы",
    translation: "цифровой",
    options: ["ручной", "традиционный", "аналоговый"],
  },
  {
    word: "запамінальная прылада",
    translation: "Запоминающее устройство",
    options: ["сетевое устройство", "устройство передачи", "трансформатор"],
  },
  {
    word: "відеапаскаральнік",
    translation: "видеоускоритель",
    options: ["графический адаптер", "процессор", "разгон"],
  },
]

//Алгарытмы і структуры даных
const algo: Translation[] = [
  {
    word: "спіс",
    translation: "список",
    options: ["программа", "граф", "контейнер"],
  },
  {
    word: "узвядзенне ў ступень",
    translation: "Возведение в степень",
    options: ["деление", "вычитание", "сложение"],
  },
  {
    word: "чарада",
    translation: "массив",
    options: ["дерево", "запрос", "коллекция"],
  },
  {
    word: "паказальнік",
    translation: "указатель",
    options: ["список", "метка", "сегмент"],
  },
  {
    word: "сартаванне",
    translation: "сортировка",
    options: ["проверка", "программа", "перестановка"],
  },
  {
    word: "пошук",
    translation: "поиск",
    options: ["переход", "запуск", "обработка"],
  },
  {
    word: "чарга",
    translation: "очередь",
    options: ["контейнер", "блок", "последовательность"],
  },
]

//Машыннае навучанне і штучны інтэлект
const ai: Translation[] = [
  {
    word: "нейронная сетка",
    translation: "нейронная сеть",
    options: ["алгоритм", "программа", "данные"],
  },
  {
    word: "вектар",
    translation: "вектор",
    options: ["сигнал", "формат", "матрица"],
  },
  {
    word: "кластар",
    translation: "кластер",
    options: ["сектор", "массив", "узел"],
  },
  {
    word: "дадзеныя",
    translation: "данные",
    options: ["сигнал", "вектор", "процесс"],
  },
  {
    word: "трэнінг",
    translation: "обучение",
    options: ["тестирование", "обработка", "перепись"],
  },
  {
    word: "класыфікацыя",
    translation: "классификация",
    options: ["сегментация", "переход", "определение"],
  },
  {
    word: "рэгрэсія",
    translation: "регрессия",
    options: ["структура", "переход", "алгоритм"],
  },
  {
    word: "вылічальная магутнасць",
    translation: "Вычислительная мощность",
    options: [
      "сетевая мощность",
      "вычислительная нагрузка",
      "графическая мощность",
    ],
  },
]

//Інтэрнэт рэчаў
const internet: Translation[] = [
  {
    word: "Інтэрнэт рэчаў",
    translation: "Интернет вещей",
    options: ["виртуальная сеть", "платформа связи", "интернет данных"],
  },
  {
    word: "смарт-прылада",
    translation: "умное устройство",
    options: ["цифровое устройство", "мобильное устройство", "сервер"],
  },
  {
    word: "сетка",
    translation: "сеть",
    options: ["контейнер", "группа", "структура"],
  },
  {
    word: "пратакол",
    translation: "протокол",
    options: ["модуль", "система", "сигнал"],
  },
  {
    word: "сэрвіс",
    translation: "сервис",
    options: ["сигнал", "модуль", "программа"],
  },
  {
    word: "лакальная сетка",
    translation: "локальная сеть",
    options: ["частная сеть", "общая сеть", "персональная сеть"],
  },
  {
    word: "дыстанцыйнае кіраванне",
    translation: "удалённое управление",
    options: [
      "дистанционное управление",
      "локальное управление",
      "программное управление",
    ],
  },
  {
    word: "злучэнне",
    translation: "соединение",
    options: ["кодировка", "настройка", "разделение"],
  },
  {
    word: "праграмнае забеспячэнне",
    translation: "программное обеспечение",
    options: ["аппаратное обеспечение", "сетевое устройство", "встроенное ПО"],
  },
  {
    word: "датчык",
    translation: "датчик",
    options: ["индикатор", "инструмент", "разъем"],
  },
  {
    word: "кібербяспека",
    translation: "кибербезопасность",
    options: ["сетевая защита", "антивирус", "цифровая безопасность"],
  },
]

//Асновы аналагавай і лічбавай электронікі
const electroFundamentals: Translation[] = [
  {
    word: "рэзістар",
    translation: "резистор",
    options: ["конденсатор", "индукция", "провод"],
  },
  {
    word: "кандэнсатар",
    translation: "конденсатор",
    options: ["резистор", "трансформатор", "разъем"],
  },
  {
    word: "транзістар",
    translation: "транзистор",
    options: ["диод", "индикатор", "резистор"],
  },
  {
    word: "дыёд",
    translation: "диод",
    options: ["контактор", "предохранитель", "резистор"],
  },
  {
    word: "асцылограф",
    translation: "осциллограф",
    options: ["вольтметр", "измеритель", "индикатор"],
  },
  {
    word: "сігнал",
    translation: "сигнал",
    options: ["код", "программа", "данные"],
  },
  {
    word: "супраціўленне",
    translation: "сопротивление",
    options: ["ёмкость", "передача", "индуктивность"],
  },
  {
    word: "напружанне",
    translation: "напряжение",
    options: ["сила", "поток", "магнитное поле"],
  },
  {
    word: "лічбавы сігнал",
    translation: "цифровой сигнал",
    options: ["аналоговый сигнал", "передача данных", "сигнальный код"],
  },
]

//Сістэмы кіравання і аўтаматызацыя
const controlSystems: Translation[] = [
  {
    word: "аўтаматызацыя",
    translation: "автоматизация",
    options: ["программирование", "управление", "калибровка"],
  },
  {
    word: "праграма кіравання",
    translation: "программа управления",
    options: ["управляющий алгоритм", "контрольная программа", "анализ данных"],
  },
  {
    word: "лічбавы кантроль",
    translation: "цифровое управление",
    options: [
      "аналоговое управление",
      "передача данных",
      "управление доступом",
    ],
  },
  {
    word: "прывад",
    translation: "привод",
    options: ["генератор", "насос", "трансформатор"],
  },
  {
    word: "сістэма маніторынгу",
    translation: "система мониторинга",
    options: ["система контроля", "инструмент контроля", "структура анализа"],
  },
]

//Электрамантаж і схемы
const schemes: Translation[] = [
  {
    word: "мантаж",
    translation: "монтаж",
    options: ["инсталляция", "установка", "проверка"],
  },
  {
    word: "паяльнік",
    translation: "паяльник",
    options: ["инструмент", "индикатор", "измеритель"],
  },
  {
    word: "драты",
    translation: "провода",
    options: ["платформа", "кабели", "изоляторы"],
  },
  {
    word: "зазямленне",
    translation: "заземление",
    options: ["изоляция", "сцепление", "разъем"],
  },
  {
    word: "электрычная схема",
    translation: "электрическая схема",
    options: ["чертеж", "структура", "карта"],
  },
  {
    word: "рэле",
    translation: "реле",
    options: ["контактор", "предохранитель", "сигнал"],
  },
  {
    word: "кантакт",
    translation: "контакт",
    options: ["разъем", "провод", "оснастка"],
  },
  {
    word: "перамыкач",
    translation: "переключатель",
    options: ["кнопка", "ручка", "тумблер"],
  },
  {
    word: "аўтамат",
    translation: "автомат",
    options: ["предохранитель", "контактор", "коммутатор"],
  },
  {
    word: "ізаляцыя",
    translation: "изоляция",
    options: ["герметизация", "защитное покрытие", "структура"],
  },
]

const data: DataType = {
  "prog-full": {
    "prog-internet": progInternet, //Вэб-праграммаванне
    "prog-mobile": progMobile, //Праграммаванне мабільных дадаткаў
    "prog-micro": progMicro, //Праграммаванне мікракантролераў і ўбудавальных сістэм
    algo: algo, //Алгарытмы і структуры даных
    ai: ai, //Машыннае навучанне і штучны інтэлект
    internet: internet, //Інтэрнэт рэчаў
  },
  "electronics-full": {
    "electro-fundamentals": electroFundamentals, //Асновы аналагавай і лічбавай электронікі
    "control-systems": controlSystems, //Сістэмы кіравання і аўтаматызацыя
    schemes: schemes, //Электрамантаж і схемы
  },
}
export default data

//скід да завадскіх налад
//усталяваць праграмму
//відеапаскаральнік
//аўтаматычна
