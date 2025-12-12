document.addEventListener('DOMContentLoaded', () => {

    const profileCard = document.querySelector('.profile-card');

    setTimeout(() => {
        profileCard.classList.remove('hidden');
        profileCard.classList.add('visible');
    }, 300);

});