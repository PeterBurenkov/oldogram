let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

shuffleArray(posts)
renderPosts(posts)

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderPosts(posts) {
    let mainEl = document.querySelector("main")
    let mainSection = ""
    for(let i=0; i<posts.length; i++){
        const post = posts[i]
        mainSection += getPostHtml(post)
    }
    mainEl.innerHTML = mainSection
}

function getPostHtml(post){
    return `<section>
                    <div class="post-header"> 
                        <img class="avatar--img" src="${post.avatar}">
                        <div class="post-info">
                            <div class="name">${post.name}</div>
                            <div class="location">${post.location}</div>
                        </div>
                    </div>
                    
                    <img class="post--img" src="${post.post}">
                    
                    <div class="post-footer"> 
                        <div class="actions">
                            <img class="action--img" src="images/icon-heart.png">
                            <img class="action--img" src="images/icon-comment.png">
                            <img class="action--img" src="images/icon-dm.png">
                        </div>
                        <div class="likes">
                            <span class="likes-count">${post.likes}</span>
                            likes
                        </div>
                        <div class="comments">
                            <span class="username">${post.username}</span>
                            <span class="comment">${post.comment}</span>
                        </div>
                    </div>
                </section>`
}