document.addEventListener('DOMContentLoaded', function () {
    fetch('data/posts.json')
        .then(response => response.json())
        .then(data => displayPosts(data));
});

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postCard = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">Author: ${post.author}</p>
                    <p class="card-text"><small class="text-muted">Date: ${post.date}</small></p>
                </div>
            </div>
        `;
        postsContainer.innerHTML += postCard;
    });
}
