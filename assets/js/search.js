// For this filter functionality I made use of a tutorial of Traversy Media: https://youtu.be/1iysNUrI3lw

const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

const searchHomes = async searchText => {
  const res = await fetch("assets/data/data-package-1.json");
  const homes = await res.json();

  let matches = homes.filter(home => {
    const regex = new RegExp(`${searchText}`, "gi");
    return home.Title.match(regex) || home.Description.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }

  outputHtml(matches);
};

const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
        <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-6">
            <img src="${
              match.Images_330x220.split(",")[0]
            }" class="card-img" alt="${match.Title}" />
          </div>
          <div class="col-md-6">
          <div class="card-footer card-details">
          <i class="fas fa-user-friends mr-2"></i>
                  ${match.MaxPersons} <i class="fas fa-bed mx-2"></i> ${
          match.Bedrooms
        } <i class="fas fa-shower mx-2"></i> ${match.Bathrooms}<br><br>
        Vanaf &euro; ${match.MinMaxPrice[0].MinPrice} / ${
          match.MinMaxPrice[0].Period
        }<br><br>
        </p>
        <a href="https://www.belvilla.nl/property-check?property_id=${
          match.PropertyId
        }" class="btn btn-danger stretched-link" target="_blank">Boeken</a>
        </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card-body">
              <h5 class="card-title card-title-search">${match.Title}</h5>
              <p class="card-text">
              ${match.Description}
            </div>
            </div>
          </div>
        </div>
      </div>`
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchHomes(search.value));
