function switchPages(event) {
    try {
        const currentUrl = window.location.href;
        let history = sessionStorage.getItem('pageHistory');

        if (history === null) history = [];
        else history = JSON.parse(history);

        history.push(currentUrl);
        sessionStorage.setItem('pageHistory', JSON.stringify(history));
        window.Telegram.WebApp.BackButton.show();

        window.location.href = event.currentTarget.href;

    } catch (error) {
        window.location.href = event.currentTarget.href;
    }

}

function markLinksAsTelegram() {
    let settings = document.getElementsByClassName('settings');
    if (settings.length > 0) {
        settings = settings[0];
        if (window.Telegram.WebApp.initData !== '') {
            settings.href = '/auth/login/?telegram=true';
        }
    }
}

function redirectNotAuthorized(response) {
    if (response.status === 403) {
        window.location.href = '/auth/login/';
    }

    else {
        return response.json()
    }
}

const notificationMessages = {
  buy: "Покупка",
  sc: "Успешный вывод",
  cn: "Отказ в выводе",
  cr: "Заявка на вывод создана",
  rf: "Пополнение счета",
  bn: "Реферальный бонус",
};

function markNoticesAsRead() {
    let bellIcon = document.getElementById('bell-icon');
    bellIcon.src = '/icons/material-symbols-light_notifications-unread-outline-rounded.svg';

    const initData = btoa(window.Telegram.WebApp.initData);
    fetch('https://test0123481.ru/api/user/notice/read/', {
        'method': 'POST',
        headers: {'X-Telegram-Init-Data': initData},
    })
}

function displayNotifications(notices) {
    const notificationText = document.getElementById('notification-text');
    notificationText.innerHTML = '';

    let readAllMessages = true;
    for (let i = 0; i < notices.length; i++) {
        const p = document.createElement('p');
        const noticeType = notices[i].text;
        const message = notificationMessages[noticeType];

        if (message !== undefined) {
            p.textContent = message;
            notificationText.appendChild(p);

            if (!notices[i].read) readAllMessages = false;
        }
    }

    if (!readAllMessages) {
        let bellIcon = document.getElementById('bell-icon');
        bellIcon.src = '/icons/material_symbols_light_notifications_unread_outline_rounded_1.svg';
    }
}

function updateLanguageContent() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (element.tagName === "INPUT") {
            element.setAttribute("placeholder", i18next.t(key));
        } else {
            element.textContent = i18next.t(key);
        }
    });
}

function initLanguages(after) {
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
        updateLanguageContent();

        i18next.on('languageChanged', updateLanguageContent());
    })
    .then(() => after());
}

window.Telegram.WebApp.BackButton.onClick(() => {
    let backHistory = sessionStorage.getItem('pageHistory');

    if (backHistory !== null) {
        backHistory = JSON.parse(backHistory);
        let backUrl = backHistory.pop();

        if (backHistory.length === 0) window.Telegram.WebApp.BackButton.hide();
        sessionStorage.setItem('pageHistory', JSON.stringify(backHistory));
        window.location.href = backUrl;
    }

    else window.Telegram.WebApp.BackButton.hide();

});


document.addEventListener("DOMContentLoaded", function () {
    markLinksAsTelegram();
});