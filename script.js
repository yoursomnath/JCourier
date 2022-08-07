		const menu = document.querySelector('.nav-items');
		const closeMenu = document.querySelector('.fa-xmark');
		const openMenu = document.querySelector('.fa-bars');
		const llt = document.querySelector('.lallantop')



		openMenu.addEventListener('click',show);
		closeMenu.addEventListener('click',close);
		// llt.addEventListener('click',gotop)

		function show(){
			menu.style.display = 'flex';
			menu.style.right = '0';
			closeMenu.style.display = 'block';
		}
		function close(){
			menu.style.right = '-100%';
			closeMenu.style.display = 'none'
		}
		function gotop(){
			llt.style.bottom = '100%';

		}

		function scrollValue() {
    	var navbar = document.getElementById('nbar');
    	var scroll = window.scrollY;
    	if (scroll < 200) {
        navbar.style.display = 'flex';
        llt.style.bottom = '100%'
   		} else {
        navbar.style.display = 'none';	
        llt.style.bottom = '5%';
        llt.style.display = 'flex'
    	}
	}

	window.addEventListener('scroll', scrollValue);

