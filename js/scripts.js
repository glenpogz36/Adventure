
// Business Logic for Contacts ---------
function Destination(location, time, notes) {
  this.location = location,
  this.time = time,
  this.notes = notes
}

var seattle = new Destination("USA","jan 5th", "Awesome");
var portland = new Destination("USA","march 5th", "Awesome");
var palawan = new Destination("Philippines","june 5th", "Great");


$(document).ready(function(){
  $("#img3").click(function(event){
    event.preventDefault();
    $("#output3").append("<li>"+seattle.location+"</li>");
    $("#output3").append("<li>" + seattle.time+"</li>");
    $("#output3").append("<li>"+seattle.notes+"</li>");
    $("#output3").show();
    $("#output2").hide();
    $("#output1").hide();
  });
  $("#img2").click(function(event){
    event.preventDefault();
    $("#output2").append("<li>"+portland.location+"</li>");
    $("#output2").append("<li>" + portland.time+"</li>");
    $("#output2").append("<li>"+portland.notes+"</li>");
    $("#output2").show();
    $("#output3").hide();
    $("#output1").hide();
  });
  $("#img1").click(function(event){
    event.preventDefault();
    $("#output1").append("<li>"+palawan.location+"</li>");
    $("#output1").append("<li>" + palawan.time+"</li>");
    $("#output1").append("<li>"+palawan.notes+"</li>");
    $("#output1").show();
    $("#output3").hide();
    $("#output2").hide();
  });
});
