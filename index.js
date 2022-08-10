const log = (arg) => console.log(arg);

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const articlePost = document.querySelector("#article-post");

let renderPosts = () => {
  let allPost = "";

  /* // with for loop  renderPosts
    for (let i = 0; i <posts.length; i++) { 
      allPost += `

          <div class="article-post">

              <img src="posts[i].avatar alt="posts[i].name" title="posts[i].name" />

          </div>  

          ................................................................        
        `
    }       
  */

  // with map function  that render all posts in the  current page  and update  all posts in the current page            
  posts.map((element, id) => {
    allPost += `

            <div class="article-detail">

                <img src="${element.avatar}" 
                    class="avatar avatar-user" 
                    alt="User ${element.name}" 
                    title="User ${element.name}" 
                />

                <div class="article-detail-content">

                    <h3 class="article-title text-bold"> ${element.name}</h3>
                    
                    <p  class="small-text">${element.location}</p>

                </div>

            </div>

            <div class="image-content">

                <img src="${element.post}" 
                    class="post-image"  
                    alt="Post of ${element.name}" 
                    title="Post of ${element.name}"
                />

            </div>

            <footer class="article-footer">
            
                <div class="footer-options">    
                    
                    <img src="images/icon-heart.png" 
                            id="icon-heart--${id}" 
                            class="icon like-icon"  
                            alt="Icon heart" title="icon-heart" 
                            onclick="addRemoveLike(${id})"
                    />

                    <img src="images/icon-comment.png" 
                        class="icon" alt="icon comment" 
                        title="icon comment" 
                    />

                    <img src="images/icon-dm.png" 
                        class="icon" alt="Direct messege icon" 
                        title="Direct messege icon" 
                    />

                </div>

                <p class="text-bold likes " id="likes-count--${id}"> 

                    ${element.likes} likes 

                </p>

                
                <div class="username-comments">
    
                        <p class="text-bold"> ${element.username}        
                            <span class="small-text">${element.comment}</span>
                        </p>
    
                </div>

            </footer>  

            <div class="breaker"></div>   <!-- /.breaker -->
        `;
  });

  articlePost.innerHTML = allPost;
};

renderPosts();

// like/dislike posts like for every element of the posts and increment like onclick event               

function addRemoveLike(id) {

  const iconLikes = document.querySelector(`#icon-heart--${id}`);
  const likesCountEL = document.querySelector(`#likes-count--${id}`);
  let likes = posts[id].likes;
 
  iconLikes.classList.toggle("like-yes");

  
  if (iconLikes.classList.contains("like-yes")) {
        likes += 1;
        likesCountEL.textContent = likes + " likes";
        iconLikes.src = "images/heart-icon-red.png";
    } else {
        likesCountEL.textContent = likes + " likes";
        iconLikes.src = "images/icon-heart.png";
    }
}


