   
        // 返回顶部功能
        const backToTopBtn = document.getElementById('backToTopBtn');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 汉堡菜单功能
        document.querySelector('.hamburger').addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
        function showPopup() {
            const popup = document.getElementById('popup');
            const overlay = document.getElementById('overlay');
            hideAllPopups();
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
        
        function showPopup1() {
            const popup = document.getElementById('popup1');
            const overlay = document.getElementById('overlay');
            hideAllPopups();
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
        
        function showPopup2() {
            const popup = document.getElementById('popup2');
            const overlay = document.getElementById('overlay');
            hideAllPopups();
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
        
        function showPopup3() {
            const popup = document.getElementById('popup3');
            const overlay = document.getElementById('overlay');
            hideAllPopups();
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
        
        function showPopup4() {
            const popup = document.getElementById('popup4');
            const overlay = document.getElementById('overlay');
            hideAllPopups();
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
        
        function hideAllPopups() {
            const popups = document.querySelectorAll('.popup-container');
            popups.forEach(popup => {
                popup.style.display = 'none';
            });
            document.getElementById('overlay').style.display = 'none';
        }
        
        document.getElementById('overlay').addEventListener('click', hideAllPopups);
        
        document.addEventListener('DOMContentLoaded', function() {
            const carouselItems = document.querySelectorAll('.carousel-item');
            const dots = document.querySelectorAll('.slider-dot');
            const prevButton = document.querySelector('.slider-prev');
            const nextButton = document.querySelector('.slider-next');
            let currentIndex = 0;
            
            function showSlide(index) {
                carouselItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                
                carouselItems[index].classList.add('active');
                dots[index].classList.add('active');
                
                currentIndex = index;
            }
            
            function autoSlide() {
                let nextIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(nextIndex);
            }
            
            function prevSlide() {
                let prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
                showSlide(prevIndex);
            }
            
            function nextSlide() {
                let nextIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(nextIndex);
            }
            
            setInterval(autoSlide, 7000);
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    showSlide(index);
                });
            });
            
            prevButton.addEventListener('click', prevSlide);
            nextButton.addEventListener('click', nextSlide);
            
            // 今日茶饮的JavaScript代码
            document.getElementById('today-tea-content').style.display = 'flex';
            document.getElementById('tea-dishes-content').style.display = 'none';
            
            document.getElementById('today-tea').classList.add('active');
            
            document.getElementById('today-tea').addEventListener('click', function() {
                document.getElementById('today-tea-content').style.display = 'flex';
                document.getElementById('tea-dishes-content').style.display = 'none';
                document.getElementById('classic-tea').classList.remove('active');
                this.classList.add('active');
            });
            
            document.getElementById('classic-tea').addEventListener('click', function() {
                document.getElementById('today-tea-content').style.display = 'none';
                document.getElementById('tea-dishes-content').style.display = 'grid';
                document.getElementById('today-tea').classList.remove('active');
                this.classList.add('active');
            });
        });
   