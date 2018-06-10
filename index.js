alert("This is an alert I created in index.js!");
$(".button").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).show();
});

$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
  }
});