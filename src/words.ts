export type Translation = {
  word: string
  translation: string
  options: [string, string, string]
}

type DataType = {
  "prog-full": {
    "prog-web": Translation[]
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

//const Budze: Translation[] = []

//Вэб-праграммаванне
const progWeb: Translation[] = [
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
  {
    word: "анлайн",
    translation: "онлайн",
    options: ["вне сети", "аналог", "передача"],
  },
  {
    word: "пошукавы радок браўзера",
    translation: "поисковая строка",
    options: ["окно настроек", "панель инструментов", "строка заголовка"],
  },
  {
    word: "веб-дадатак",
    translation: "веб-приложение",
    options: ["веб-сервер", "онлайн-платформа", "цифровое пространство"],
  },
  {
    word: "Інтэрнэт-асяроддзе",
    translation: "интернет-среда",
    options: ["интернет-сервис", "интернет-ресурс", "цифровая сеть"],
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
  {
    word: "высокаўзроўневая мова праграмавання",
    translation: "высокоуровневый язык программирования",
    options: [
      "низкоуровневая операционная система",
      "бинарный код",
      "цифровая платформа",
    ],
  },
  {
    word: "кіраванне галасавое",
    translation: "голосовое управление",
    options: [
      "сенсорное управление",
      "командное управление",
      "голосовой интерфейс",
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
  {
    word: "лічбавая вылічальная машына",
    translation: "цифровая вычислительная машина",
    options: [
      "аналоговая машина",
      "интерактивный дисплей",
      "цифровой терминал",
    ],
  },
  {
    word: "абсталяванне інтэрфейснае",
    translation: "интерфейсное оборудование",
    options: [
      "коммутационное оборудование",
      "сигнальный кабель",
      "цифровая техника",
    ],
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
    word: "масіў",
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
  {
    word: "кэш",
    translation: "кэш",
    options: ["память", "накопитель", "драйвер"],
  },
  {
    word: "апрацоўка даных",
    translation: "обработка данных",
    options: ["хранение данных", "анализ информации", "запись данных"],
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
    word: "даныя",
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
  {
    word: "віртуальная машына",
    translation: "виртуальная машина",
    options: ["виртуальная сеть", "цифровой сервер", "облачная платформа"],
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
  {
    word: "радыёэлектроніка",
    translation: "радиоэлектроника",
    options: ["радиосвязь", "электротехника", "передача данных"],
  },
  {
    word: "лічбавая апрацоўка сігналаў",
    translation: "цифровая обработка сигналов",
    options: ["анализ сигналов", "звуковая обработка", "обработка данных"],
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
    word: "лічбавае кіраванне",
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
  {
    word: "кіраванне галасавое",
    translation: "голосовое управление",
    options: [
      "автоматизация системы",
      "управление жестами",
      "командное управление",
    ],
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
    word: "дрот",
    translation: "провод",
    options: ["платформа", "веревка", "изолятор"],
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
    word: "пераключальнік",
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
  {
    word: "электраабсталяванне",
    translation: "электрооборудование",
    options: ["электросеть", "энергосистема", "инструменты"],
  },
]

const data: DataType = {
  "prog-full": {
    "prog-web": progWeb, //Вэб-праграммаванне
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

/* {
  "Вэб-праграммаванне": [
    { "word": "Спасылка", "translation": "ссылка", "options": ["кодировка", "исходник", "страница"] },
    { "word": "Пстрык", "translation": "клик", "options": ["запрос", "ответ", "переход"] },
    { "word": "Упадабаныя", "translation": "избранные", "options": ["медиа", "подписки", "друзья"] },
    { "word": "Спадабайка", "translation": "лайк", "options": ["подписка", "комментарий", "перепост"] }
  ],
  "Праграммаванне мабільных дадаткаў": [
    { "word": "Распрацоўка", "translation": "разработка", "options": ["загрузка", "редактирование", "оптимизация"] },
    { "word": "Праграмнае забеспячэнне", "translation": "программное обеспечение", "options": ["проект", "исходный код", "сервис"] }
  ],
  "Праграммаванне мікракантролераў і ўбудавальных сістэм": [],
  "Алгарытмы і структуры даных": [],
  "Машыннае навучанне і штучны інтэлект": [],
  "Інтэрнэт рэчаў": [
    { "word": "Сталае злучэнне", "translation": "постоянное соединение", "options": ["динамическое соединение", "разрыв связи", "интерфейс"] }
  ],
  "Асновы аналагавай і лічбавай электронікі": [],
  "Сістэмы кіравання і аўтаматызацыя": [],
  "Электрамантаж і схемы": [],
  "Іншыя": [
    { "word": "Зыходны код", "translation": "исходный код", "options": ["файл", "исходник", "контент"] },
    { "word": "Адмова ад адказнасці", "translation": "дисклеймер", "options": ["лицензия", "исключение", "примечание"] },
    { "word": "Адладжванне праграмы", "translation": "отладка программы", "options": ["исполнение программы", "сборка программы", "подготовка к запуску"] },
    { "word": "Інтэграванае асяроддзе распрацоўкі", "translation": "интегрированная среда разработки", "options": ["кодировщик", "компилятор", "редактор кода"] },
    { "word": "Сістэма кіравання версіями", "translation": "система управления версиями", "options": ["система мониторинга", "хранилище данных", "система контроля"] },
    { "word": "ліставанне", "translation": "переписка", "options": ["публикация", "веб-конференция", "чат"] }
  ]
}
 */

/* Спасылка - ссылка
Пстрык - клик
Упадабаныя - избранные
Спадабайка - лайк
Распрацоўка - разработка
Праграмнае забеспячэнне - программное обеспечение
Зыходны код - исходный код 
Адмова ад адказнасці - дисклеймер
Сталае злучэнне - постоянное соединение
Адладжванне праграмы - отладка программы 
Інтэграванае асяроддзе распрацоўкі - интегрированная среда разработки
Сістэма кіравання версіями - система управления версиями 
ліставанне - переписка*/

