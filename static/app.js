  document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      let title = card.querySelector(".card-title").innerText.toLowerCase();
      let text = card.querySelector(".card-text").innerText.toLowerCase();

      if (title.includes(input) || text.includes(input)) {
        card.parentElement.style.display = "";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });