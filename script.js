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

const userText = document.querySelector('.user-text');
const analyzeTextBtn = document.querySelector('.analyze-text');
const wordQuantity = document.querySelector('.word-quantity');
const tenWord = document.querySelector('.ten-word');
const firstSentence = document.querySelector('.first-sentence');

analyzeTextBtn.addEventListener('click', analyzeText);
function analyzeText(event) {
    event.preventDefault();
    const clearUserWord = userText.value
        .split((/\.|\ |\,|\-|\!|\?/))
        .filter(value => value != '');
    wordQuantity.textContent = clearUserWord.length;
    tenWord.textContent = clearUserWord.slice(0, 10);
    const lengthFirstSentense = userText.value.split((/\?|\.|\!/))[0].length;
    firstSentence.textContent = userText.value.slice(0, lengthFirstSentense + 1);
}

