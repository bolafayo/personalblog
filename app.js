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
  