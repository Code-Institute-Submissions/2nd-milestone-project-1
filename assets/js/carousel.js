// Settings image carousel
$(function() {
  var owl = $(".owl-carousel").owlCarousel({
    items: 5,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 768 up
      768: {
        items: 3
      },
      // breakpoint from 992 up
      992: {
        items: 4
      },
      // breakpoint from 1200 up
      1200: {
        items: 5
      }
    }
  });

  $.ajax({
    url: "assets/data/data-package-1.json",
    dataType: "json",
    success: function(data) {
      $.each(data, function(key, value) {
        owl.trigger("add.owl.carousel", [
          jQuery(
            `<div class="ml-2 mr-2 card-group">
            <div class="card">
              <img src="` +
              value.Images_330x220.split(",")[0] +
              `" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title card-title-carousel text-truncate">` +
              value.Location.Address.City +
              " in " +
              value.Location.Address.Country +
              " (" +
              value.MaxPersons +
              " personen)" +
              `</h5>
                <p class="card-text card-text-carousel">` +
              "Deze vakantiewoning (" +
              `<span class="lowercase">` +
              value.HouseType +
              `</span>` +
              ") huur je vanaf &euro; " +
              value.MinMaxPrice[0].MinPrice +
              " per week." +
              `
                <br><br><b>Land:</b> ` +
              value.Location.Address.Country +
              ` <br>
                <b>Regio:</b> ` +
              value.Location.Address.Region +
              ` <br>
                <b>Plaats: </b>` +
              value.Location.Address.City +
              `
                </p></div>
                <div class="card-footer">
      <small class="text-muted"><i class="fas fa-user-friends mr-2"></i>` +
              value.MaxPersons +
              `<i class="fas fa-bed mx-2"></i>` +
              value.Bedrooms +
              `<i class="fas fa-shower mx-2"></i>` +
              value.Bathrooms +
              `</small>
    </div>
                </div></div>`
          )
        ]);
      });
      owl.trigger("refresh.owl.carousel");
    }
  });
});
