document.addEventListener("DOMContentLoaded", function () {
  
    // ------------------------------------------------------
    // 1. DETECCIÓN DE BÚSQUEDA (Muestra resultados si hay ?q=)
    // ------------------------------------------------------
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    // IDs que deben existir en tu HTML
    const mainContent = document.getElementById('main-content');
    const searchResults = document.getElementById('search-results-container');
  
    // Solo ejecutamos esto si los elementos existen en el HTML
    if (mainContent && searchResults) {
      if (query) {
        // SI HAY BÚSQUEDA: Ocultamos el producto y mostramos resultados
        mainContent.classList.add('hidden');
        searchResults.classList.remove('hidden');
      } else {
        // SI NO HAY BÚSQUEDA: Mostramos el producto normalmente
        mainContent.classList.remove('hidden');
        searchResults.classList.add('hidden');
      }
    }
  
    // ------------------------------------------------------
    // 2. LÓGICA DE LA LUPA (BUSCADOR MODAL)
    // ------------------------------------------------------
    const searchButton = document.getElementById("search-button");
    const mobileSearchButton = document.getElementById("mobile-search-button");
    const closeSearchButton = document.getElementById("close-search");
    const searchModal = document.getElementById("search-modal");
  
    function toggleSearch() {
      if (!searchModal) return;
  
      searchModal.classList.toggle("hidden");
  
      // Si se abre, poner foco en el input
      if (!searchModal.classList.contains("hidden")) {
        document.body.style.overflow = "hidden"; // Bloquea scroll
        setTimeout(() => {
          const input = searchModal.querySelector("input[name='q']");
          if (input) input.focus();
        }, 100);
      } else {
        document.body.style.overflow = ""; // Reactiva scroll
      }
    }
  
    if (searchButton) searchButton.addEventListener("click", toggleSearch);
    if (mobileSearchButton) mobileSearchButton.addEventListener("click", toggleSearch);
    if (closeSearchButton) closeSearchButton.addEventListener("click", toggleSearch);
  
    // Cerrar al hacer clic fuera del recuadro blanco
    if (searchModal) {
      searchModal.addEventListener("click", function(e) {
        if (e.target === searchModal) toggleSearch();
      });
    }
  
    // ------------------------------------------------------
    // 3. LÓGICA DEL MENÚ MÓVIL
    // ------------------------------------------------------
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const closeMenuButton = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuOverlay = document.getElementById("menu-overlay");
  
    function toggleMenu() {
      if (!mobileMenu || !menuOverlay) return;
      const isHidden = mobileMenu.classList.contains("-translate-x-full");
  
      if (isHidden) {
        mobileMenu.classList.remove("-translate-x-full");
        menuOverlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      } else {
        mobileMenu.classList.add("-translate-x-full");
        menuOverlay.classList.add("hidden");
        document.body.style.overflow = "";
      }
    }
  
    if (mobileMenuButton) mobileMenuButton.addEventListener("click", toggleMenu);
    if (closeMenuButton) closeMenuButton.addEventListener("click", toggleMenu);
    if (menuOverlay) menuOverlay.addEventListener("click", toggleMenu);
  
    // ------------------------------------------------------
    // 4. TECLA ESCAPE (Cierra todo)
    // ------------------------------------------------------
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (searchModal && !searchModal.classList.contains("hidden")) toggleSearch();
        if (mobileMenu && !mobileMenu.classList.contains("-translate-x-full")) toggleMenu();
      }
    });
  
  });
  
  // ------------------------------------------------------
  // 5. FUNCIONES DE GALERÍA (GLOBALES)
  // ------------------------------------------------------
  // Se mantienen fuera para que el HTML onclick="viewImage()" las encuentre
  function viewImage(src) { 
    const imgMain = document.getElementById('img_main');
    if(imgMain) imgMain.src = src; 
  }
  
  function toExchangeImage(el) { 
    const imgMain = document.getElementById('img_main');
    const newSrc = el.querySelector('img').src;
    if(imgMain) imgMain.src = newSrc; 
  }