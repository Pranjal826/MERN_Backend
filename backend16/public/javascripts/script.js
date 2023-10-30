
      const searchInput = document.getElementById('search-input');
      const userCardItems = document.querySelectorAll('.user-card-item');
  
      searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
  
        userCardItems.forEach(function (card) {
          const userName = card.querySelector('.user-name').textContent.toLowerCase();
          const userEmail = card.querySelector('.user-email').textContent.toLowerCase();
  
          if (userName.includes(query) || userEmail.includes(query)) {
            card.style.display = 'block'; // Show matching cards
          } else {
            card.style.display = 'none'; // Hide non-matching cards
          }
        });
      });
    
  