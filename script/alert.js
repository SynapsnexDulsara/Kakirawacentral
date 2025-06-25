document.addEventListener('DOMContentLoaded', function () {
    const alertBox = document.querySelector('.alert');
    const closeButton = document.querySelector('.close');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            alertBox.style.display = 'none';
        });
    } else {
        console.error("Close button not found");
    }
});
