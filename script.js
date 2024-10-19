// Получаем параметр ref из URL
const urlParams = new URLSearchParams(window.location.search);
const ref = urlParams.get('ref');

if (ref) {
    // Если ref существует, отправляем запрос в Telegram бота
    fetch(`https://api.telegram.org/bot7039961825:AAGmyb-lFESj2INpi81JWQAV9kgZwPBtJSU/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: ref,  // Отправляем сообщение пользователю с этим chat_id
            text: "Кто-то перешел по вашей реферальной ссылке!"
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Сообщение отправлено:", data);
    })
    .catch(error => {
        console.error("Ошибка при отправке сообщения:", error);
    });
}
