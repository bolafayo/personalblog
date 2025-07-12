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


  