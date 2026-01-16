document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isLiked = this.getAttribute('data-liked') === 'true';
            const likesSpan = this.closest('.post').querySelector('.likes');
            let likesCount = parseInt(likesSpan.textContent.split(' ')[0]);

            if (isLiked) {
                // Unlike
                this.setAttribute('data-liked', 'false');
                this.classList.remove('liked');
                likesCount--;
            } else {
                // Like
                this.setAttribute('data-liked', 'true');
                this.classList.add('liked');
                likesCount++;
            }

            likesSpan.textContent = `${likesCount} likes`;
        });
    });
});
