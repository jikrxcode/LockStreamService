let isMenuOpen = false;

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    
    isMenuOpen = !isMenuOpen;
    sidebar.classList.toggle('active', isMenuOpen);
    menuBtn.classList.toggle('active', isMenuOpen);
}

function showSection(sectionId) {
    const content = document.getElementById('content');
    toggleMenu(); // Закрываем меню после выбора
    
    // Очищаем контент
    content.innerHTML = '';

    // Генерация контента для разных разделов
    switch(sectionId) {
        case 'services':
            content.innerHTML = `
                <h2>Мои услуги</h2>
                <div class="plan-card">
                    <h3>Активная подписка: Pro</h3>
                    <p>Дата окончания: 01.01.2025</p>
                </div>
            `;
            break;

        case 'locations':
            content.innerHTML = `
                <h2>Наши локации</h2>
                <!-- Добавьте кнопки локаций из предыдущей версии -->
            `;
            break;

        case 'profile':
            content.innerHTML = `
                <div class="user-header">
                    <div class="user-info">
                        <span id="username">Иван Иванов</span>
                        <div class="balance">
                            ₽<span id="balance">1500.00</span>
                        </div>
                    </div>
                    <button class="top-up-btn" onclick="showTopUpModal()">Пополнить</button>
                </div>
            `;
            break;
    }
}

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if(!e.target.closest('.menu-container') && isMenuOpen) {
        toggleMenu();
    }
});

// Инициализация
window.onload = function() {
    showSection('services'); // Показываем раздел по умолчанию
};