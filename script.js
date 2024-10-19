// Вставьте это в ваш JS-код на сайте
const urlParams = new URLSearchParams(window.location.search);
const refId = urlParams.get('ref');

if (refId) {
    // Отправьте запрос на сервер для уведомления бота
    fetch('https://api.telegram.org/bot<7039961825:AAGmyb-lFESj2INpi81JWQAV9kgZwPBtJSU>/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: refId,
            text: "👤 Кто-то перешёл по вашей реферальной ссылке!"
        }),
    });
}
