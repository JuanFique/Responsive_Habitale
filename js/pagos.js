function selectCard(card) {
    document.querySelectorAll('.card-type').forEach(el => el.classList.remove('active'));
    card.classList.add('active');
}
