document.addEventListener('DOMContentLoaded', () => {

    // --- Real-Time Clock ---
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: false });
        const dateString = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        const timeElement = document.getElementById('live-time');
        const dateElement = document.getElementById('live-date');

        if (timeElement) timeElement.textContent = timeString;
        if (dateElement) dateElement.textContent = dateString;
    }

    // Update clock immediately and then every second
    updateClock();
    setInterval(updateClock, 1000);

    // --- Draggable Logic ---
    const draggables = document.querySelectorAll('.draggable');
    let draggedItem = null;

    draggables.forEach(item => {
        item.setAttribute('draggable', true);

        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            setTimeout(() => {
                item.style.opacity = '0.5';
            }, 0);
        });

        item.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedItem.style.opacity = '1';
                draggedItem = null;
            }, 0);
        });
    });

    const columns = document.querySelectorAll('.col-left, .col-center, .col-right');

    columns.forEach(col => {
        col.addEventListener('dragover', (e) => {
            e.preventDefault(); // Allow dropping
            const afterElement = getDragAfterElement(col, e.clientY);
            if (afterElement == null) {
                col.appendChild(draggedItem);
            } else {
                col.insertBefore(draggedItem, afterElement);
            }
        });
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    // --- Modal Logic ---
    window.openModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // --- Keyboard Navigation (Arrow keys page flip feel) ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            window.scrollBy({ top: 300, behavior: 'smooth' });
        }
        if (e.key === 'ArrowUp') {
            window.scrollBy({ top: -300, behavior: 'smooth' });
        }
    });

});
