// Задача: Анализатор текста с выводом статистики
// Цель задачи: создать веб-приложение, которое анализирует введенный пользователем текст и выводит статистику по этому тексту.
// Статистика должна включать количество слов, первые 10 слов текста (или все слова, если их меньше 10), а также первое предложение текста.

// Требования к функционалу:
// Пользовательский интерфейс: должен содержать текстовое поле для ввода текста пользователем и кнопку для запуска анализа текста.
// Также необходимо предусмотреть место для отображения результата анализа.

// Обработка текста: при нажатии на кнопку приложение должно обрабатывать введенный текст, используя JavaScript, и выводить следующую
// статистику:
// Общее количество слов в тексте.
// Первые 10 слов текста (или все слова, если их меньше 10)
// Первое предложение из текста.

// Технические детали реализации:
// Использование const: для хранения ссылок на DOM-элементы (например, элементы ввода и вывода) и других констант, которые не будут
// изменяться в ходе выполнения программы.
// Использование slice: для выбора первых 10 слов из массива слов, полученного из введенного текста.
// Использование split: для разделения введенного текста на массив слов по пробелам для подсчета слов и на массив предложений по точке
//  (или другим знакам препинания), чтобы вывести первое предложение.
// Использование innerHTML и textContent: для вывода результата анализа текста на страницу. innerHTML может быть использован для добавления
//  разметки (если нужно), а textContent для безопасного добавления текстовой информации.
const userText = document.querySelector('.user-text');
const analyzeTextBtn = document.querySelector('.analyze-text');
const wordQuantity = document.querySelector('.word-quantity');
const tenWord = document.querySelector('.ten-word');
const firstSentence = document.querySelector('.first-sentence');

analyzeTextBtn.addEventListener('click', analyzeText);
function analyzeText() {
    event.preventDefault();
    const valueText = userText.value;
    const userWords = userText.value.split((/\.|\ |\,|\-|\!|\?/));
    console.log(userWords);
    const clearUserWord = userWords.filter(function (value) {
        return value != '';
    });
    if (!valueText) {
        wordQuantity.textContent = 0;
    } else {
        wordQuantity.textContent = clearUserWord.length;
    };
    tenWord.textContent = clearUserWord.slice(0, 9);
    const lengthFirstSentense = valueText.split((/\?|\.|\!/))[0].length;
    firstSentence.textContent = valueText.slice(0, lengthFirstSentense + 1);
}

