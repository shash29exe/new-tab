document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
  
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const searchQuery = searchInput.value.trim();
        if (isUrl(searchQuery)) {
          window.location.href = searchQuery;
        } else {
          window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        }
      }
    });
  
    function isUrl(str) {
      try {
        new URL(str);
        return true;
      } catch {
        return false;
      }
    }
  });
  