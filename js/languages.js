    i18next
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextHttpBackend)
    .init({
        backend: {
            loadPath: '../json/{{lng}}.json'
        },
        fallbackLng: "ru",
        detection: {
            order: ['cookie', 'localStorage', 'navigator'],
            caches: ['cookie']
        }
    }, () => {
        // Функция для обновления текста на странице по атрибуту data-i18n
        function updateContent() {
            document.querySelectorAll("[data-i18n]").forEach((element) => {
                const key = element.getAttribute("data-i18n");
                if (element.tagName === "INPUT") {
                    // Если это input, меняем placeholder
                    element.setAttribute("placeholder", i18next.t(key));
                } else {
                    // Иначе просто заменяем текстовое содержимое
                    element.textContent = i18next.t(key);
                }
            });
        }

        // Обновляем содержимое при первой загрузке
        updateContent();

        // Следим за сменой языка
        i18next.on('languageChanged', updateContent);
    });