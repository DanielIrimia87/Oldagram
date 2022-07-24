const log = (arg) => console.log(arg)

const posts = [
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

const containerEl = document.querySelector("#container");

function renderPosts() {
    let allPost = "";
    for ( let i = 0; i < posts.length; i++) {
        allPost += `

            <div class="user-info">
                <img src="${posts[i].avatar}" alt="Avatar user" class="avatar avatar-user"> 

                <p class="text-bold"> ${posts[i].name}
                    <span class="small-text displayBlock">
                        ${posts[i].location}
                    </span>
                 </p>  
            </div>

            <div class="image-container">
                <img src="${posts[i].post}" alt="The image of a portrait" class="post-image">
            </div>

            <div class="content">
                <div class="option">
                    <img src="images/icon-heart.png" class="icons" alt="Heart icon">
                    <img src="images/icon-comment.png" class="icons" alt="Comment icon">
                    <img src="images/icon-dm.png" class="icons" alt="Direct message icon">
                </div>

                <div class="likes-count">
                    <p class="text-bold">${posts[i].likes} likes</p>
                </div>

                <div class="username-comments">
                    <p class="text-bold"> ${posts[i].username}
                        <span class="small-text">${posts[i].comment}</span>
                    </p>
                </div>
            </div>

            <div class="breaker"></div>
        `
        
    }

    return containerEl.innerHTML = allPost
}

renderPosts();
