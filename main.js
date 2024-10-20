let currentSlide = [0, 0, 0, 0, 0]; // Текущий слайд для каждой комнаты
const totalSlides = [3, 3, 3, 3, 3]; // Общее количество слайдов для каждой комнаты

function changeSlide(direction, roomIndex) {
    currentSlide[roomIndex - 1] += direction;

    // Защита от выхода за границы
    if (currentSlide[roomIndex - 1] < 0) {
        currentSlide[roomIndex - 1] = totalSlides[roomIndex - 1] - 1; // Перейти на последний слайд
    }
    if (currentSlide[roomIndex - 1] >= totalSlides[roomIndex - 1]) {
        currentSlide[roomIndex - 1] = 0; // Перейти на первый слайд
    }

    // Обновляем отображаемый слайд
    updateSlides(roomIndex);
}

function updateSlides(roomIndex) {
    const slides = document.querySelectorAll(`.room:nth-of-type(${roomIndex}) .slides`)[0];
    slides.style.transform = `translateX(-${currentSlide[roomIndex - 1] * 100}%)`;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function bookRoom(url) {
    window.location.href = url; // Перенаправление на страницу бронирования
}
  // Извлекаем параметр ref из URL
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get('ref');

  if (ref) {
    // Отправляем информацию на ваш сервер (например, через fetch)
    fetch('https://your-server.com/track-referral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: ref }),
    });
  }
}
