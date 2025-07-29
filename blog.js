const blogs = JSON.parse(localStorage.getItem("blogs")) || [


      {
         author: "Admin",
         date: 'May 1, 2023',
                 readTime: "1 min read",
                title: "The one thing I would tell to my 16 year old self",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1539741642672-b3fada926d3a?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content: "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.  ",
                likes: 120,
                 hasMedia: true
      },
      {
          author: "Admin",
        date: 'April 28, 2023',
                 readTime: "2 min read",
                title: "Can’t stop scrolling through your friends’ feed?",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1704018453307-d563498b585b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content: "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.",
      },
       {
          author: "Admin",
        date: 'April 28, 2023',
                 readTime: "2 min read",
                title: "Can’t stop scrolling through your friends’ feed?",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1704018453307-d563498b585b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content: "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.",
      },
        {
          author: "Admin",
        date: 'April 28, 2023',
                 readTime: "2 min read",
                title: "Can’t stop scrolling through your friends’ feed?",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1704018453307-d563498b585b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content: "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.",
      },
       {
          author: "Admin",
        date: 'April 28, 2023',
                 readTime: "2 min read",
                title: "Can’t stop scrolling through your friends’ feed?",
                description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
                image: "https://images.unsplash.com/photo-1704018453307-d563498b585b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                content: "Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.",
      },
    
    ];

  

  const urlParams = new URLSearchParams(window.location.search);
const titleParam = urlParams.get("title");

console.log("title params", titleParam);


const blog = blogs.find(b => b.title === titleParam);
if (blog) {
  console.log(blog);
  const singleBlog = document.getElementById("single-blog")

  singleBlog.innerHTML = renderFullBlog(blog)
  
  blog = applyFallbacks(blog); 
  
}
function applyFallbacks(blog) {
  return {
     ...blog,
    author: blog.author || "Admin",
    content: blog.content|| "content",
    likes: blog.likes || Math.floor(Math.random() * 100) + 20,
    hasMedia: blog.hasMedia !== undefined ? blog.hasMedia : false,
   
    
  };
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num?.toString() || '0';
}
 
function renderFullBlog(blog) {
  return `
    <div class="blog-container">
      <img src="${blog.image}" alt="${blog.title}" />
        <div class="meta">
          👤 ${blog.author || "Admin"} • ${blog.date} • ${blog.readTime}
          
          <div class="blog-content">
        <h1>${blog.title}</h1>
         <p class="blog-description">${blog.description} </p>
        <hr>
           <div class="extras">
          📺 ${blog.hasMedia ? "Media Included" : "Text Only"} • 
          ❤️ ${formatNumber(blog.likes)} Likes • 
        </div>
      </div>
     </div>
    </div>
  `;
}

function addComment(blogTitle) {
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
     newComment.remove();
      deleteComment(blogTitle, commentText);
    deleteBtn.onclick = () => newComment.remove();

     newComment.appendChild(deleteBtn);
     commentList.appendChild(newComment);

     saveComment(blogTitle, commentText); 
    input.value = "";
  }
}

function saveComment(title, comment) {
  const allComments = JSON.parse(localStorage.getItem("comments")) || {};
  if (!allComments[title]) {
    allComments[title] = [];
  }
  allComments[title].push(comment);
  localStorage.setItem("comments", JSON.stringify(allComments));
}

function deleteComment(title, commentText) {
  const allComments = JSON.parse(localStorage.getItem("comments")) || {};
  if (!allComments[title]) return;

  
  allComments[title] = allComments[title].filter(c => c !== commentText);
  localStorage.setItem("comments", JSON.stringify(allComments));
}

document.addEventListener("DOMContentLoaded", () => {
  
   const container = document.getElementById("single-blog");
  if (!container) return;

  if (blog) {
    container.innerHTML = renderFullBlog(blog);
  } else {
    container.innerHTML = `<p>Blog post not found.</p>`;
  }

  submitBtn.addEventListener("click", () => {
  addComment(blog.title); 
});

renderComments(blog.title); 


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

  