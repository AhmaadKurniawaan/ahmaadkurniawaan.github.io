$(".content").slice(0, 3).show(),
  $("#loadMore").on("click", function (e) {
    e.preventDefault(),
      $(".content:hidden").slice(0, 3).slideDown(),
      0 == $(".content:hidden").length &&
        $("#loadMore").text("No Content").addClass("noContent");
  });       

