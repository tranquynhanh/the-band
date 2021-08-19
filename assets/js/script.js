const buyBtns = document.querySelectorAll('.buy-ticket');
        const form = document.querySelector('.form-pay-ticket');
        const close = document.querySelector('.close');
        const closeTab = document.querySelector('.close-tab');
        const payForm = document.querySelector('.pay-form');
        function showBuyTickets(){
            form.classList.add('open');
        }

        function hiddenFormBuyTickets() {
            form.classList.remove('open');
        }

        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets);
        }
        closeTab.addEventListener('click', hiddenFormBuyTickets);
        close.addEventListener('click', hiddenFormBuyTickets);
        form.addEventListener('click', hiddenFormBuyTickets);
        payForm.addEventListener('click', function(event){
            event.stopPropagation();
        })

        var header = document.getElementById('header');
        var mobileMenu = document.querySelector('.mobile-menu-btn');
        var headerHeight = header.clientHeight;
        var isClosed = header.clientHeight === headerHeight;

        mobileMenu.onclick = function(){
            var isClosed = header.clientHeight === headerHeight;
            if (isClosed){
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }

        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i=0; i < menuItems.length; i++){
            var menuItem = menuItems[i];

            menuItem.onclick = function(event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if (!isParentMenu) header.style.height = null;
                else event.preventDefault();
            }
        }