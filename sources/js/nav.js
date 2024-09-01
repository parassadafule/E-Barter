const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/logo.jpg" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
            <ul class="links-container">
               <li class="link-item"><a href="#home" class="link">home</a></li>
               <li class="link-item"><a href="#service" class="link">buy</a></li>
               <li class="link-item"><a href="#service" class="link">sell</a></li>
               <li class="link-item"><a href="#about" class="link">about</a></li>
               <li class="link-item"><a href="#contact" class="link">contact</a></li>
           </ul>
        </div>
    </div>
</div>
    `;
}

createNav();