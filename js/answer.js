const initData = btoa(window.Telegram.WebApp.initData);

function loadApiData() {
    let url = window.location.href;
    url = new URL(url);
    let seriesId = url.searchParams.get('series_id');
    seriesId = parseInt(seriesId);

    const params = new URLSearchParams({
        lang: i18next.language,
    }).toString();

    fetch(`https://test0123481.ru/api/series/history/?${params}`, {
        headers: { "X-Telegram-Init-Data": initData },
        method: "GET",
    })
        .then((response) => redirectNotAuthorized(response))
        .then((data) => {
        const answersArray = data.answers;
        let seriesElement;
        answersArray.forEach((answerObj) => {
            const series = answerObj.series;
            const answer = answerObj.answer;

            let seriesWord;
            if (['ru-RU', 'ru-BY', 'ru-KZ', 'ru-UA', 'ru', undefined].includes(i18next.language)) {
                seriesWord = 'СЕРИЯ';
            }

            else {
                seriesWord = 'SERIES';
            }

            if (series.id === seriesId) {
                document.getElementById('answer-text').innerHTML = answer;
                document.getElementById('modalNumber').innerHTML = `${seriesWord} ${series.number}`;
                document.getElementById('modalName').innerHTML = `«${series.name}»`;
            }

        });
        })
        .catch((error) => console.error("Ошибка:", error));
}


document.addEventListener("DOMContentLoaded", () => initLanguages(loadApiData));

document.querySelectorAll('a').forEach(link => {
    if (link.classList.contains('no-confirm')) {
        return;
    }

    link.addEventListener('click', switchPages);
});
