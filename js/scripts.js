
// Business Logic for Contacts ---------
function Destination(location, time, notes) {
  this.location = location,
  this.time = time,
  this.notes = notes
}

Destination.prototype.location = function() {
  return this.location;
}
console.log(this.location);
Destination.prototype.time = function() {
  return this.time;
}
console.log(this.time);
Destination.prototype.notes = function() {
  return this.notes;
}


$(document).ready(function(){
$("#input").submit(function(event){
  event.preventDefault();
  var location = $("#places").val();
  var time = $("#date").val();
  var notes = $("#details").val();
  var newDestination = new Destination(location, time, notes);

  $("#output").text(newDestination.location);
  $("#output").click(function(event){
    event.preventDefault();
    $("#output").append("<li>" + newDestination.time+"</li>");
    $("#output").append("<li>"+newDestination.notes+"</li>");
  });


  });
});
