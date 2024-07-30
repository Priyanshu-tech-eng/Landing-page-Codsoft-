document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2024-08-01T00:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            document.getElementById('countdown').innerHTML = 'The deal has ended';
            clearInterval(intervalId);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `The deal ends in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();
});
