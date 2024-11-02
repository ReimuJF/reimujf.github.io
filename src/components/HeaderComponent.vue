<template>
    <header class="header">
        <div class="container">
            <div class="title">
                <h1 class="header-title">Привет, я Вячеслав</h1>
                <p class="header-subtitle">Frontend-разработчик</p>
            </div>
            <img src="../assets/images/b26b1379-8ca1-4d60-bf06-8600516c56f4.jpg" alt="Моё Фото" class="profile-photo">
        </div>
    </header>
</template>

<style scoped>
.header {
    margin-top: 25vh ;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    height: 100vh;
    text-align: center;
    padding: 20px;
}

.container {
    max-width: 1200px;
    /* Увеличиваем максимальную ширину контейнера */
    display: flex;
    /* Используем flexbox для расположения текста и изображения */
    flex-direction: column;
    /* По умолчанию располагаем элементы вертикально */
    align-items: center;
    /* Центрируем элементы */
    gap: 12px 25px;
}


.header-title {
    font-size: 3rem;
    margin-bottom: 10px;
}

.header-subtitle {
    font-size: 1.5rem;
}

.profile-photo {
    width: 150px;
    /* Размер фото */
    /* height: 150px; */
    /* Размер фото */
    border-radius: 25%;
    /* Круглая форма */
    border: 4px solid white;
    /* Белая рамка */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    /* Тень */
    object-fit: cover;
    /* Сохранение пропорций */
}

/* Медиа-запрос для больших экранов */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        /* Изменяем направление на горизонтальное */
        justify-content: space-between;
        /* Распределяем пространство между текстом и изображением */
        align-items: center;
        /* Центрируем по вертикали */
    }

    .text-container {
        text-align: left;
        /* Выравниваем текст влево на больших экранах */
        margin-bottom: 0;
        /* Убираем отступ снизу */
    }

    .profile-photo {
        width: 200px;
        /* Увеличиваем размер фото на больших экранах */
        height:auto;
        /* Увеличиваем размер фото на больших экранах */
    }
}
</style>