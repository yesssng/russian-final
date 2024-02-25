document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.style.backgroundColor = "darkblue";

    const foundWord = words.find(wordObj => wordObj.word.toLowerCase() === searchInput.toLowerCase());

    if (foundWord) {
      resultDiv.innerHTML = `<p><strong>${foundWord.word}</strong>${foundWord.value}</p><img id="soundButton" src="images/speaker-filled-audio-tool.png" alt=""><img id="xButton" src="images/close.png" alt="">`;

      document.getElementById('soundButton').addEventListener('click', function () {
        const textInput = document.getElementById('searchInput').value;
        speak(textInput);
      });
    } else {
      resultDiv.innerHTML = `<p>Слово "${searchInput}" не найдено.</p><img id="xButton" src="images/close.png" alt="">`;
    }

    document.getElementById('xButton').addEventListener('click', function () {
      const form = document.getElementById('result');
      form.innerHTML = '';
      form.style.backgroundColor = "transparent";
    });
  });

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    speechSynthesis.speak(utterance);
  }

  const words = [
    { word: 'Тимлид', value: '(от англ. team leader) – лидер команды, ведущий разработчик, который принимает технически грамотные решения, следит за всеми качественными процессами разработки' },
    { word: 'Синиор', value: '(от англ. senior) – старший опытный программист' },
    { word: 'Мидл', value: '(от англ. middle) – программист со средним уровнем знаний и навыков, часто с опытом от 2 лет' },
    { word: 'Джун', value: '(от англ. junior) – младший программист начального уровня с минимальным опытом и навыками' },
    { word: 'Свитчер', value: '(от англ. to switch) – тот, кто сменил свою специальность, переучившись в пост-студенческом возрасте' },
    { word: 'Трейни', value: '(от англ. trainee) – стажер, выпускник технической специальности или IT-курсов, только начинающий работу' },
    { word: 'Багрепорт', value: '(от англ. bug report) – сообщение или отчет об ошибке с ее описанием' },
    { word: 'Софт', value: '(от англ. software) – программное обеспечение, программа' },
    { word: 'Снипет', value: '(от англ. snippet) – фрагмент, кусочек текста/ кода/ чего-либо' },
    { word: 'Бекап', value: '(от англ. backup) – резервное копирование' },
    { word: 'Фича', value: '(от англ. feature) – особенность, уникальная возможность, свойство' },
    { word: 'Демка', value: '(от англ. demo) – демонстрационная версия чего-то, как правило, с ограниченным функционалом' },
    { word: 'Рисерч', value: '(от англ. research) – исследование, изучение какой-то темы' },
    { word: 'Апдейт', value: '(от англ. update) - обновление, модернизация программного обеспечения' },
    { word: 'Апгрейд', value: '(от англ. upgrade) - обновление, модернизация программного обеспечения' },
    { word: 'Бенч', value: '(от англ. bench) – лавка. Употребляется в выражении «программист на бенче» и означает, что программист находится в режиме ожидания нового проекта/задания' },
    { word: 'Фронтенд', value: '(от англ. front-end) – дословно "передняя часть", напр. дизайна, отображение внешнего вида сайта (в пределах окна браузера). То есть то, что мы видим извне' },
    { word: 'Бекенд', value: '(от англ. back-end) – дословно "задняя часть", "начинка" сайта; логика его работы, взаимодействие веб-сервера и контента' },
    { word: 'Митинг', value: '(от англ. meeting) – встреча (в том числе онлайн)' },
    { word: 'Митап', value: '(от англ. meet up) – собрание специалистов определенной сферы для обмена опытом, нередко – это встреча в неформальной обстановке' },
    { word: 'Айди', value: '(от англ. identificator) – идентификатор, уникальный признак объекта' },
    { word: 'Скоуп', value: '(от англ. scope) – область/объем функций и частей продукта, предназначенных под определенный запрос/команду' },
    { word: 'Кодер', value: '(от англ. coder) – программист' },
    { word: 'Бенефит', value: '(от англ. benefit) – бонус/ косвенное вознаграждение для мотивации работника' },
    { word: 'Юзабилити', value: '(от англ. usability) — показатель удобства продукта для пользователя' },
    { word: 'Лог', value: '(от англ. log) – упорядоченный по степени важности командный список задач' },
    { word: 'Аутсорс', value: '(от англ. outsource) – передача выполнения определенных обязанностей специалистам вне штата (напр. фрилансерам)' },
    { word: 'Нуб', value: '(от англ. «newbie») – новичок или неопытный' },
    { word: 'Геймдев', value: '(от англ. game development) – создание игр/ компания-разработчик игр' },
    { word: 'Стори', value: '(от англ. user story) – краткое описание функции программного обеспечения' },
    { word: 'Ака', value: '(от англ. also known as) – псевдоним, никнейм' },
    { word: 'Оупенсорс', value: '(от англ. open source software) – софт с открытым исходным кодом в общем доступе' },
    { word: 'Патч', value: '(от англ. patch) – обновление (приложения), которое исправляет баги' },
    { word: 'Скрипт', value: '(от англ. script) – кусок кода, автоматизирующий определенную задачу (вместо ручного исполнения)' },
    { word: 'Фреймворк', value: '(от англ. framework) – программный каркас для реализации веб-продуктов' },
    { word: 'Деплой', value: '(от англ. deploy) – процесс развертывания обновленной версии сайта на сервере' },
    { word: 'Спринт', value: '(от англ. sprint) – период, в течение которого команда выполняет задачи разработки' },
    { word: 'Нетворк', value: '(від англ. network) - сеть' },
    { word: 'Девопс', value: '(от англ. developer operations) – специалист, занимающийся интеграцией разработки/продукта и отвечающий за оптимизацию всех ее/его жизненных процессов' },
    { word: 'Соцсети', value: '(Social Media): Используется для обозначения платформ и сервисов для общения и обмена контентом в интернете, таких как Facebook, Instagram, Twitter и другие.' },
    { word: 'Чат', value: '(Chat): Означает текстовую коммуникацию в реальном времени через интернет, например, в мессенджерах или внутри бизнес-приложений.' },
    { word: 'Интернет', value: '(Internet): Глобальная компьютерная сеть, объединяющая миллиарды устройств по всему миру.' },
    { word: 'Электронная почта', value: '(Email): Система электронной переписки, широко используемая для обмена сообщениями и файлами.' },
    { word: 'Веб-сайт', value: '(Website): Электронная страница или набор страниц, доступных в интернете, содержащих информацию, мультимедийный контент и другие элементы.' },
    { word: 'Вебсайт', value: '(Website): Электронная страница или набор страниц, доступных в интернете, содержащих информацию, мультимедийный контент и другие элементы.' },
    { word: 'Онлайн', value: '(Online): Означает подключение к интернету или активность в виртуальной среде.' },
    { word: 'Вирус', value: '(Virus): В контексте компьютерной безопасности, это вредоносное программное обеспечение, способное распространяться и повреждать системы.' },
    { word: 'Браузер', value: '(Browser): Программа для просмотра веб-сайтов, такая как Google Chrome, Mozilla Firefox или Safari.' },
    { word: 'Планшет', value: '(Tablet): Переносное устройство с сенсорным экраном, как iPad или Android-планшет.' },
    { word: 'Облако', value: '(Cloud): Сервисы и хранилища данных в интернете, позволяющие хранить, обрабатывать и обмениваться информацией.' },
    { word: 'Гаджет', value: '(Gadget): Маленькое устройство с ограниченными функциями, как правило, электронное.' },
    { word: 'Смартфон', value: '(Smartphone): Мобильное устройство с функциями телефона, интернета и другими приложениями.' },
    { word: 'Блог', value: '(Blog): Веб-сайт, содержащий регулярные публикации (посты) о различных темах.' },
  ];

const text = ['Русский язык, особенно в области информационных технологий (IT), активно поглощает англицизмы. Некоторые из них становятся стандартными терминами в русском языке. Например, слово "сайт" (от англ. "site") теперь широко используется для обозначения веб-страницы или веб-сайта.',
'Термин "софт" стал более широким и включает в себя разнообразные виды программного обеспечения, начиная от операционных систем и заканчивая приложениями для мобильных устройств.',
'С появлением различных браузеров, таких как Google Chrome, Mozilla Firefox, и Safari, термин "браузер" стал более разнообразным, охватывая различные технологии и возможности.',
'Понятие "Интернет" сегодня связано не только с веб-страницами, но и с облачными технологиями, потоковым вещанием, интернетом вещей и другими инновациями.',
'В современном мире серверы играют ключевую роль в обеспечении функционирования интернета, облачных сервисов, социальных сетей и других технологических решений.',
'Термин "хакер" в русском языке претерпел изменения и может обозначать как специалиста по безопасности, так и злоумышленника, в зависимости от контекста.',
'Понятие "апгрейд" не ограничивается только программным обеспечением, оно также используется в контексте обновления аппаратного обеспечения, например, смартфонов и компьютеров.',
'С развитием технологий безопасности, таких как биометрическая идентификация, термины "логин" и "пароль" остаются актуальными, но также сопровождаются новыми методами аутентификации.',
'Кибербезопасность становится все более актуальной, и термин "вирус" расширяется на вредоносное программное обеспечение, такое как троянские кони, рансомвары и другие угрозы.',
'В современном мире алгоритмы применяются в широком спектре областей, начиная от искусственного интеллекта и машинного обучения до анализа данных и криптографии.'];

const factText = document.querySelector('.about_desc');
let i = 0;

function fadeIn() {
  factText.style.opacity = 1;
}

function fadeOut() {
  factText.style.opacity = 0;
}

function changeText() {
  fadeOut();
  setTimeout(() => {
    i = (i + 1) % text.length;
    factText.innerHTML = text[i];
    fadeIn();
  }, 1000);
}

factText.innerHTML = text[i];
fadeIn();

setInterval(changeText, 6000);