  const blogs = [

     {
                date: 'May 1, 2023',
                 readTime: "1 min read",
                title: "The one thing I would tell to my 16 year old self",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1539741642672-b3fada926d3a?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              
                views: 15420,
                comments: 0
            },
            {
                date: 'April 28, 2023',
                 readTime: "2 min read",
                title: "Can’t stop scrolling through your friends’ feed?",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1704018453307-d563498b585b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              
                views: 8750,

                comments: 0
            },
            {
                date: 'April 25, 2023',
                 readTime: "1 min read",
                title: "How I stopped being afraid of being weak",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1664142315029-c1db5ca1e181?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              
                views: 12300,
                comments: 0
                
            },
            {
                date: 'April 22, 2023',
                 readTime: "2 min read",
                title: "5 great side effects of running with music",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.....",
                image: "https://images.unsplash.com/photo-1650667685760-bbf3da6db3ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
               
                views: 9870,
                comments: 0
            },
            {
                date: 'April 20, 2023',
                 readTime: "2 min read",
                title: "5 things that would make you sleep better",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1517912158475-fb0ab8c8eed1?q=80&w=758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              
                views: 7650,
                comments:0
            }
    ];
 
   function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            } else if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'K';
            }
            return num.toString();
        }

   

    const container = document.getElementById("blog-container");

    function createBlogHTML(blog) {
      return `
       <a href="blog.html?title=${encodeURIComponent(blog.title)}" class="blog-link">
        <div class="blog-post">
          <img src="${blog.image}" alt="${blog.title}" />
           <div class="blog-content">
          <h2>${blog.title}</h2>
          <div class="meta">${blog.date} • ${blog.readTime}</div>
           <p class="blog-description">${blog.description}</p>
           
            
           <div class="views">
            <hr>
            👁️ ${formatNumber(blog.views)} views
                            </div>
          <div class="comments">💬 ${blog.comments} Comments</div>
          
              </div>
        </div>
         </a>
      
      `;
    
    };
function renderBlogs(blogs) {
  const container = document.getElementById("blog-container");
  const blogsHTML = blogs.map(blog => createBlogHTML(blog)).join('');
  container.innerHTML = blogsHTML;
}

localStorage.setItem("blogs", JSON.stringify(blogs));
document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        renderBlogs(blogs);
      }, 1000);
    });



  
 
 const menuIcon = document.getElementById('menuIcon');
        const menuList = document.getElementById('menuList');

       
        menuIcon.addEventListener('click', () => {
           
            menuList.classList.toggle('open');
        });

        menuList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (menuList.classList.contains('open')) {
                    menuList.classList.remove('open');
                }
            });
        });
function toggleShare() {
  const shareIcons = document.getElementById("share-icons");
  shareIcons.classList.toggle("hidden");
}
let likes = 0;
let liked = false;

function toggleLike() {
  liked = !liked;
  likes += liked ? 1 : -1;
  const likeBtn = document.getElementById("like-btn");
  const icon = likeBtn.querySelector("i");
  document.getElementById("like-count").textContent = likes;

  if (liked) {
    icon.classList.remove("far");
    icon.classList.add("fas");
  } else {
    icon.classList.remove("fas");
    icon.classList.add("far");
  }
}

function addComment() {
  const input = document.getElementById("comment-input");
  const commentText = input.value.trim();

  if (commentText !== "") {
    const commentList = document.getElementById("comment-list");
    const newComment = document.createElement("li");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
    input.value = "";

     const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️"; 
    deleteBtn.classList.add("delete-comment");
    deleteBtn.onclick = () => newComment.remove();

     newComment.appendChild(deleteBtn);
     commentList.appendChild(newComment);
  }
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Post link copied to clipboard!");
  });
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Link copied to clipboard!");
  });
}

  function handlesubribe(event) {
    event.preventDefault()

    const user = []

  const firstName = document.getElementById ('fristName')
  const lastName = document.getElementById('lastName')
  const eamil = document.getElementById('email')
   const message = document.getElementById("message")
  const subscribe = document.getElementById('subscribeConsent')

  if(!subscribe){
    alert("You must agree to subscribe")
    return;
  }
  const subscriber ={
    firstName,
    lastName,
    eamil,
    message,
  }
  const existing = JSON.parse(localStorage.getItem("subscriber")) || [];
  existing.push(subscribe)

  localStorage.setItem("subscriber") , JSON.stringify(existing)

   alert(`Thanks for subscribing, ${firstName}!`);
  document.getElementById("newsletter-form").reset();



  }
  