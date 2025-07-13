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
  const subscribe = document.getElementById('subscribeConsent')

  if(!subscribe){
    alert("You must agree to subscribe")
    return;
  }
  const subscriber ={
    firstName,
    lastName,
    eamil,
  }
  const existing = JSON.parse(localStorage.getItem("subscriber")) || [];
  existing.push(subscribe)

  localStorage.setItem("subscriber") , JSON.stringify(existing)

   alert(`Thanks for subscribing, ${firstName}!`);
  document.getElementById("newsletter-form").reset();



  }
  