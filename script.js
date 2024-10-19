<script>
    // Получаем параметр реферальной ссылки из URL
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');

    if (ref) {
        // Отправляем реферальный ID на сервер или сохраняем его
        console.log("Реферальная ссылка активна, ID реферера: " + ref);

        // Отправьте запрос на сервер для уведомления о переходе по реферальной ссылке
        fetch(`https://ваш_сервер/track_referral?ref=${ref}`)
            .then(response => response.json())
            .then(data => {
                console.log("Реферальный переход зафиксирован");
            });
    }
</script>
