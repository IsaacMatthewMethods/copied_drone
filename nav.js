$(document).ready(function(){
setTimeout(function(){$("form").removeClass("loading");},2000);
});


function booking(){
	$("#contact-page").hide();
	$("#billing-page").hide();
	$("#confirmdetails-page").hide();
	$("#booking-page").fadeIn("slow");
	return false;
}
function contact(){
	$("#contactbtn").removeClass("disabled");
	$("#booking-page").hide();
	$("#billing-page").hide();
	$("#confirmdetails-page").hide();
	$("#contact-page").fadeIn("slow");
return false;
}

function billing(){

	$("#booking-page").hide();
	$("#confirmdetails-page").hide();
	$("#contact-page").hide();
	$("#billing-page").fadeIn("slow");

return false;


}

function confirmdetails(){

$("#billing-page").hide();
$("#booking-page").hide();
$("#contact-page").hide();
//getting details
pickup_location=$("#pickup_location").val();
fullname=$("#fullname").val();
recipient_address=$("#contact").val();
//

$("#details").html("<ul><li>RECIPIENT NAME: "+fullname+"</li><li>PICKUP LOCATION: "+pickup_location+"</li><li>RECIPIENT ADDRESS: "+recipient_address+"</li></ul>");

$("#confirmdetails-page").fadeIn("slow");
return false;

}
