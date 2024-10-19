// Получаем параметр 'ref' из URL
const urlParams = new URLSearchParams(window.location.search);
const refChatId = urlParams.get('ref');

if (refChatId) {
    // Отправляем POST-запрос на ваш сервер для уведомления бота
    fetch('https://api.telegram.org/botYOUR_TELEGRAM_BOT_TOKEN/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: refChatId,
            text: "🔔 Кто-то перешёл по вашей реферальной ссылке!"
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
