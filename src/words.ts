export type Translation = {
  word: string
  translation: string
  options: [string, string, string]
}

interface ProgFullType {
  [key: string]: Translation[]
  "prog-web": Translation[]
  "prog-mobile": Translation[]
  "prog-micro": Translation[]
  algo: Translation[]
  ai: Translation[]
  "internet-things": Translation[]
  internet: Translation[]
}

interface ElectronicsFullType {
  [key: string]: Translation[]
  "electro-fundamentals": Translation[]
  "control-systems": Translation[]
  schemes: Translation[]
}

type DataType = {
  [key: string]: ProgFullType | ElectronicsFullType
  "prog-full": ProgFullType
  "electronics-full": ElectronicsFullType
}

interface SectionNamesType {
  [key: string]: string
  "prog-web": string
  "prog-mobile": string
  "prog-micro": string
  algo: string
  ai: string
  "internet-things": string
  internet: string
  "electro-fundamentals": string
  "control-systems": string
  schemes: string
}

//const Budze: Translation[] = []

export const SectionNames: SectionNamesType = {
  "prog-web": "Вэб-праграмаванне",
  "prog-mobile": "Праграмаванне мабільных дадаткаў",
  "prog-micro": "Праграмаванне мікракантролераў і ўбудавальных сістэм",
  algo: "Алгарытмы і структуры даных",
  ai: "Машыннае навучанне і штучны інтэлект",
  "internet-things": "Інтэрнэт рэчаў",
  internet: "Інтэрнэт",
  "electro-fundamentals": "Асновы аналагавай і лічбавай электронікі",
  "control-systems": "Сістэмы кіравання і аўтаматызацыя",
  schemes: "Электрамантаж і схемы",
}

//Вэб-праграмаванне//
const progWeb: Translation[] = [
  {
    word: "запыт",
    translation: "запрос",
    options: ["попытка", "реклама", "документ"],
  },
  {
    word: "адказ",
    translation: "ответ",
    options: ["протокол", "код", "вопрос"],
  },
  /* {
    word: "серверны рэндэрынг",
    translation: "серверный рендеринг",
    options: ["серверная обработка", "облачное хранение", "бэкенд-передача"],
  }, */
  {
    word: "вэб-старонка",
    translation: "веб-страница",
    options: ["интерфейс", "сеть", "облачная платформа"],
  },
  /* {
    word: "аўтаматычна",
    translation: "автоматически",
    options: ["программно", "вручную", "одновременно"],
  },
  {
    word: "анлайн",
    translation: "онлайн",
    options: ["вне сети", "аналог", "передача"],
  }, */
  {
    word: "пошукавы радок браўзера",
    translation: "поисковая строка",
    options: ["окно настроек", "панель инструментов", "строка заголовка"],
  },
  {
    word: "вэб-дадатак",
    translation: "веб-приложение",
    options: ["веб-сервер", "онлайн-платформа", "цифровое пространство"],
  },
  {
    word: "Інтэрнэт-асяроддзе",
    translation: "интернет-среда",
    options: ["интернет-сервис", "интернет-ресурс", "цифровая сеть"],
  },
  {
    word: "Спасылка",
    translation: "ссылка",
    options: ["кодировка", "исходник", "страница"],
  },
  {
    word: "Пстрык",
    translation: "клик",
    options: ["запрос", "ответ", "переход"],
  },
  {
    word: "Упадабаныя",
    translation: "избранные",
    options: ["медиа", "подписки", "друзья"],
  },
  {
    word: "Падабайка",
    translation: "лайк",
    options: ["подписка", "комментарий", "перепост"],
  },
  {
    word: "адладжванне праграмы",
    translation: "отладка программы",
    options: ["исполнение программы", "сборка программы", "подготовка к запуску"],
  },
  {
    word: "інтэграванае асяроддзе распрацоўкі",
    translation: "интегрированная среда разработки",
    options: ["кодировщик", "компилятор", "блокнот"],
  },
  {
    word: "cістэма кіравання версіямi",
    translation: "система управления версиями",
    options: ["система мониторинга", "хранилище данных", "система обновления версий"],
  },
  {
    word: "ліставанне",
    translation: "переписка",
    options: ["публикация", "веб-конференция", "озеленение"],
  },
  /* {
    word: "вэб-камера",
    translation: "веб-камера",
    options: ["фотоаппарат", "зеркалка", "объектив"],
  },
  {
    word: "вэбінар",
    translation: "вебинар",
    options: ["семинар", "конференция", "лекция"],
  },
  {
    word: "дамен",
    translation: "домен",
    options: ["сервер", "субдомен", "хостинг"],
  },
  {
    word: "кантэнт",
    translation: "контент",
    options: ["материал", "дизайн", "ресурс"],
  },
  {
    word: "вэб-рыдар",
    translation: "веб-ридер",
    options: ["читалка", "браузер", "сайт"],
  },
  {
    word: "відэахостынг",
    translation: "видеохостинг",
    options: ["удаленный сервер", "сервер", "хранилище"],
  },
  {
    word: "відэаблог",
    translation: "видеоблог",
    options: ["аудиоканал", "журнал", "текстовый влог"],
  },
  {
    word: "відэафайл",
    translation: "видео-файл",
    options: ["документ", "медиа", "фильм"],
  },
  {
    word: "відэачат",
    translation: "видеочат",
    options: ["соцсеть", "чат", "видеоконференция"],
  },
  {
    word: "блог",
    translation: "блог",
    options: ["блоха", "запись", "страница"],
  }, */
  {
    word: "фрэнд-ліст",
    translation: "список друзей",
    options: ["черный список", "подписки", "пользователи"],
  },
  {
    word: "Шпалеры",
    translation: "Обои",
    options: ["галерея", "фотография", "иконки приложений"],
  },
  {
    word: "укладанне",
    translation: "вложение",
    options: ["ответ", "отзыв", "клик"],
  },
]

//Праграмаванне мабільных дадаткаў
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
    word: "усталяваць праграму",
    translation: "установить программу",
    options: ["удалить программу", "обновить драйвер", "запустить систему"],
  },
  {
    word: "скід да завадскіх налад",
    translation: "сброс к заводским настройкам",
    options: ["перезагрузка системы", "архивирование данных", "восстановление системы"],
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
    word: "галасавое кіраванне",
    translation: "голосовое управление",
    options: ["сенсорное управление", "командное управление", "голосовой интерфейс"],
  },
  {
    word: "Распрацоўка",
    translation: "разработка",
    options: ["загрузка", "редактирование", "оптимизация"],
  },
  {
    word: "Праграмнае забеспячэнне",
    translation: "программное обеспечение",
    options: ["проект", "исходный код", "сервис"],
  },
  /* {
    word: "адмова ад адказнасці",
    translation: "дисклеймер",
    options: ["лицензия", "исключение", "примечание"],
  }, */
  {
    word: "зыходны код",
    translation: "исходный код",
    options: ["файл", "исходник", "контент"],
  },
  /* {
    word: "айфон",
    translation: "айфон",
    options: ["смартфон", "планшет", "телефон"],
  },
  {
    word: "андроід",
    translation: "андроид",
    options: ["платформа", "смартфон", "гаджет"],
  },
  {
    word: "вай-фай",
    translation: "вай-фай",
    options: ["интернет", "сетевой адаптер", "точка доступа"],
  },
  {
    word: "пін-код",
    translation: "пин-код",
    options: ["пароль", "ключ", "шифр"],
  },
  {
    word: "мегабайт",
    translation: "мегабайт",
    options: ["гигабайт", "килобайт", "терабайт"],
  },
  {
    word: "іконка",
    translation: "иконка",
    options: ["значок", "пиктограмма", "элемент"],
  },
  {
    word: "сэлфі",
    translation: "селфи",
    options: ["фото", "автопортрет", "изображение"],
  }, */
  /* {
    word: "гейміцца",
    translation: "играть в компьютерные игры",
    options: ["управлять", "смотреть", "устанавливать"],
  }, */
  /* {
    word: "клікнуць",
    translation: "кликнуть",
    options: ["кушать", "перетащить", "удалить"],
  },
  {
    word: "лайкаць",
    translation: "лайкать",
    options: ["комментировать", "репостить", "игнорировать"],
  }, */
  {
    word: "Шпалеры",
    translation: "Обои",
    options: ["галерея", "фотография", "иконки приложений"],
  },
]

//Праграмаванне мікракантролераў і ўбудавальных сістэм
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
    word: "відэапаскаральнік",
    translation: "видеоускоритель",
    options: ["графический адаптер", "процессор", "разгон"],
  },
  {
    word: "лічбавая вылічальная машына",
    translation: "цифровая вычислительная машина",
    options: ["аналоговая машина", "интерактивный дисплей", "цифровой терминал"],
  },
  {
    word: "інтэрфейснае абсталяванне",
    translation: "интерфейсное оборудование",
    options: ["коммутационное оборудование", "сигнальный кабель", "цифровая техника"],
  },
  /* {
    word: "чыпсет",
    translation: "чипсет",
    options: ["процессор", "контроллер", "материнская плата"],
  },
  {
    word: "дыгітайзер",
    translation: "дигитайзер",
    options: ["сенсор", "графический планшет", "адаптер"],
  },
  {
    word: "скрэмблер",
    translation: "скремблер",
    options: ["кодировщик", "модем", "декодер"],
  }, */
  /* {
    word: "аўтасканер",
    translation: "автосканер",
    options: ["диагностический прибор", "осциллограф", "программатор"],
  }, */
  /* {
    word: "дэкодар",
    translation: "декодер",
    options: ["расшифровщик", "коммутатор", "шифратор"],
  }, */
  /* {
    word: "аўтасканер",
    translation: "автосканер",
    options: ["тестер", "датчик", "мультиметр"],
  }, */
  /* {
    word: "сідзіромны",
    translation: "связанный с сидиромом",
    options: ["дисковый", "оптический", "жесткий"],
  }, */
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
  /* {
    word: "масіў",
    translation: "массив",
    options: ["дерево", "запрос", "коллекция"],
  }, */
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
  /* {
    word: "кэш",
    translation: "кэш",
    options: ["память", "накопитель", "драйвер"],
  }, */
  {
    word: "апрацоўка даных",
    translation: "обработка данных",
    options: ["хранение данных", "анализ информации", "запись данных"],
  },
  /* {
    word: "аперанд",
    translation: "операнд",
    options: ["оператор мобильной связи", "фотограф", "массив"],
  }, */
  /* {
    word: "кампілятар",
    translation: "компилятор",
    options: ["интерпретатор", "редактор", "компаньон"],
  }, */
  /* {
    word: "лог-файл",
    translation: "лог-файл",
    options: ["логика", "ложный файл", "кэш"],
  },
  {
    word: "лістынг",
    translation: "листинг",
    options: ["код", "таблица", "отчет"],
  },
  { word: "пул", translation: "пул", options: ["пуп", "блок", "пакет"] },
  {
    word: "логер",
    translation: "логгер",
    options: ["запись", "анализатор", "компилятор"],
  }, */
  {
    word: "сцісканне",
    translation: "сжатие",
    options: ["тискать", "удаление", "передача"],
  },
]

//Машыннае навучанне і штучны інтэлект
const ai: Translation[] = [
  /* {
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
  }, */
  /* {
    word: "трэнінг",
    translation: "обучение",
    options: ["тестирование", "обработка", "перепись"],
  }, */
  /* {
    word: "класіфікацыя",
    translation: "классификация",
    options: ["сегментация", "переход", "определение"],
  },
  {
    word: "рэгрэсія",
    translation: "регрессия",
    options: ["структура", "переход", "алгоритм"],
  }, */
  {
    word: "вылічальная магутнасць",
    translation: "Вычислительная мощность",
    options: ["сетевая мощность", "вычислительная нагрузка", "графическая мощность"],
  },
  /* {
    word: "хакінг",
    translation: "хакинг",
    options: ["взлом", "программирование", "хоккей"],
  },
  {
    word: "патч",
    translation: "патч",
    options: ["поток", "паутина", "патина"],
  },
  {
    word: "мэйнфрэйм",
    translation: "мейнфрейм",
    options: ["сервер", "процессор", "узел"],
  }, */
  /* {
    word: "трэкінг",
    translation: "трекинг",
    options: ["велоспорт", "сканирование", "мониторинг"],
  }, */
  /* {
    word: "тэг",
    translation: "тег",
    options: ["телеграм", "идентификатор", "атрибут"],
  }, */
  {
    word: "Алічбоўка",
    translation: "цифровизация",
    options: ["пометка", "фотография", "рекламный баннер"],
  },
]

//Інтэрнэт рэчаў
const internetThings: Translation[] = [
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
  /* {
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
  }, */
  {
    word: "дыстанцыйнае кіраванне",
    translation: "удалённое управление",
    options: ["диабатический процесс", "локальное управление", "программное управление"],
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
  /* {
    word: "датчык",
    translation: "датчик",
    options: ["индикатор", "инструмент", "разъем"],
  }, */
  {
    word: "кібербяспека",
    translation: "кибербезопасность",
    options: ["сетевая защита", "антивирус", "цифровая безопасность"],
  },
  /* {
    word: "віртуальная машына",
    translation: "виртуальная машина",
    options: ["виртуальная сеть", "цифровой сервер", "облачная платформа"],
  }, */
  {
    word: "Сталае злучэнне",
    translation: "постоянное соединение",
    options: ["динамическое соединение", "разрыв связи", "интерфейс"],
  },
  /* {
    word: "гаджэт",
    translation: "гаджет",
    options: ["гадюка", "аксессуар", "модуль"],
  },
  {
    word: "інтэрнэт-сёрфінг",
    translation: "интернет-серфинг",
    options: ["дайвинг", "поиск", "путешествие"],
  },
  {
    word: "роўмінг",
    translation: "роуминг",
    options: ["комната", "связь", "сеть"],
  },
  {
    word: "хостынг",
    translation: "хостинг",
    options: ["сервер", "платформа", "облако"],
  },
  {
    word: "відэахостынг",
    translation: "видеохостинг",
    options: ["платформа", "сервис", "облако"],
  }, */
  {
    word: "Алічбоўка",
    translation: "цифровизация",
    options: ["пометка", "фотография", "рекламный баннер"],
  },
]

//Інтэрнэт
const internet: Translation[] = [
  /* {
    word: "анлайн",
    translation: "онлайн",
    options: ["офлайн", "безличные деньги", "синхронно"],
  },
  {
    word: "е-мэйл",
    translation: "электронная почта",
    options: ["Европа", "адрес", "входящее"],
  },
  {
    word: "кібербулінг",
    translation: "кибербуллинг",
    options: ["виртуальный боулинг", "виртуальный бык", "психологическая поддержка"],
  },
  {
    word: "кіберсквотынг",
    translation: "киберсквоттинг",
    options: ["доменный спор", "регистрация", "покупка"],
  },
  {
    word: "хэштэг",
    translation: "хэштег",
    options: ["хеш-таблица", "хеширование", "кэш"],
  },
  {
    word: "кіберспорт",
    translation: "киберспорт",
    options: ["кибербулинг", "кибертрак", "кибернетика"],
  }, */
  {
    word: "Спампаваць",
    translation: "скачать",
    options: ["создать", "соединить", "прокомментировать"],
  },
  {
    word: "Суполка",
    translation: "Сообщество",
    options: ["папка", "хранилище", "архив"],
  },
  {
    word: "Зваротная сумяшчальнасць",
    translation: "обратная совместимость",
    options: ["обратное смещение", "обратное обращение", "обратное сцепление"],
  },
  {
    word: "Нататкі",
    translation: "заметки",
    options: ["стрелки", "сноски", "указатели"],
  },
  {
    word: "рэдагаванне",
    translation: "редактирование",
    options: ["регистрация", "регулирование", "редуцирование"],
  },
  {
    word: "Пакрокавая распрацоўка",
    translation: "Пошаговая разработка",
    options: ["поэтапная установка", "быстрое скачивание", "долгая перезагрузка"],
  },
  {
    word: "пашырэнне",
    translation: "расширение",
    options: ["распространение", "поощрение", "программное обеспечение"],
  },
]

//Асновы аналагавай і лічбавай электронікі
const electroFundamentals: Translation[] = [
  /* {
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
  }, */
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
  /* {
    word: "радыёэлектроніка",
    translation: "радиоэлектроника",
    options: ["радиосвязь", "электротехника", "передача данных"],
  }, */
  {
    word: "лічбавая апрацоўка сігналаў",
    translation: "цифровая обработка сигналов",
    options: ["анализ сигналов", "звуковая обработка", "обработка данных"],
  },
  /* { word: "біт", translation: "бит", options: ["байт", "бить", "разряд"] },
  {
    word: "іконка",
    translation: "иконка",
    options: ["икона", "символ", "логотип"],
  }, */
  /* {
    word: "сканіраванне",
    translation: "сканирование",
    options: ["кибер-надзор", "печать", "считывание"],
  }, */
  {
    word: "usb-назапашвальнiк",
    translation: "флешка",
    options: ["файл", "плата", "карта города"],
  },
  /* {
    word: "смайлік",
    translation: "смайлик",
    options: ["лицо", "человек", "иконка"],
  },
  {
    word: "спаміць",
    translation: "спамить",
    options: ["спасать", "рекламировать", "рассылать"],
  },
  { word: "спам", translation: "спам", options: ["реклама", "мусор", "почта"] }, */
]

//Сістэмы кіравання і аўтаматызацыя
const controlSystems: Translation[] = [
  /* {
    word: "аўтаматызацыя",
    translation: "автоматизация",
    options: ["программирование", "управление", "калибровка"],
  }, */
  {
    word: "праграма кіравання",
    translation: "программа управления",
    options: ["управляющий алгоритм", "контрольная программа", "анализ данных"],
  },
  {
    word: "лічбавае кіраванне",
    translation: "цифровое управление",
    options: ["аналоговое управление", "передача данных", "управление доступом"],
  },
  /* {
    word: "прывад",
    translation: "привод",
    options: ["генератор", "насос", "трансформатор"],
  },
  {
    word: "сістэма маніторынгу",
    translation: "система мониторинга",
    options: ["система контроля", "инструмент контроля", "структура анализа"],
  }, */
  {
    word: "галасавое кіраванне",
    translation: "голосовое управление",
    options: ["автоматизация системы", "управление жестами", "командное управление"],
  },
]

//Электрамантаж і схемы
const schemes: Translation[] = [
  /* {
    word: "мантаж",
    translation: "монтаж",
    options: ["инсталляция", "установка", "проверка"],
  },
  {
    word: "паяльнік",
    translation: "паяльник",
    options: ["инструмент", "индикатор", "измеритель"],
  }, */
  {
    word: "дрот",
    translation: "провод",
    options: ["платформа", "веревка", "изолятор"],
  },
  /* {
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
  }, */
  /* {
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
  }, */
  {
    word: "электраабсталяванне",
    translation: "электрооборудование",
    options: ["электросеть", "энергосистема", "инструменты"],
  },
]

const data: DataType = {
  "prog-full": {
    "prog-web": progWeb, //Вэб-праграмаванне
    "prog-mobile": progMobile, //Праграмаванне мабільных дадаткаў
    "prog-micro": progMicro, //Праграмаванне мікракантролераў і ўбудавальных сістэм
    algo: algo, //Алгарытмы і структуры даных
    ai: ai, //Машыннае навучанне і штучны інтэлект
    "internet-things": internetThings, //Інтэрнэт рэчаў
    internet: internet,
  },
  "electronics-full": {
    "electro-fundamentals": electroFundamentals, //Асновы аналагавай і лічбавай электронікі
    "control-systems": controlSystems, //Сістэмы кіравання і аўтаматызацыя
    schemes: schemes, //Электрамантаж і схемы
  },
}
export default data
