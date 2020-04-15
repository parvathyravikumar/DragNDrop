// JavaScript Document
$(document).ready(function(){
	//Reset function to reload page
	$("#reset").click(function(){
		window.location.href = "dragndrop.html";
		});
   //Displaying first option on page load with animation
	$("#reason_1").animate({left: '100px'}, "slow");
	$("#reason_1").show();
	//click function on 5 options with tick marks
	$("#group_1").click(function(){
		toHideImage();
		showTick(1);
	});
	$("#group_2").click(function(){
		toHideImage();
		showTick(2);
		});
	$("#group_3").click(function(){
		toHideImage();
		showTick(3);
		});
	$("#group_4").click(function(){
		toHideImage();
		showTick(4);
		});
	$("#group_5").click(function(){
		toHideImage();    
		showTick(5);
		});			
	//setting options droppable	
	$(".group").droppable({
		accept: '#topSubWrap div',
        drop: handleOptionDrop,
		tolerance : "touch",
		greedy: true
		});
	//Setting statements draggable
	$(".reason").draggable({
      containment: '#content',
      cursor: 'pointer',
	  start: function(event, ui) { $(this).css("opacity",0.2); },
      stop: function(event, ui) { $(this).css("opacity",1); }, 
	  revert: 'invalid'
	});
//Function to show tick on option click
function showTick(tickIndex){
		$("#tick"+tickIndex).show();
        setTimeout(function() { $("#tick"+tickIndex).hide(); }, 50);
		}
//Function to hide current statement and show next statements with animation.
function toHideImage(){
	       if(document.getElementById("reason_1").style.display == "block"){
			   $("#reason_1").hide();
			   $("#reason_2").animate({left: '100px'}, "slow");
			   $("#reason_2").show();
			}
			else if(document.getElementById("reason_2").style.display == "block"){
			   $("#reason_2").hide();
			    $("#reason_3").animate({left: '100px'}, "slow");
			   $("#reason_3").show();
			}
			else if(document.getElementById("reason_3").style.display == "block"){
			   $("#reason_3").hide();
			    $("#reason_4").animate({left: '100px'}, "slow");
			   $("#reason_4").show();
			}
			else if(document.getElementById("reason_4").style.display == "block"){
			   $("#reason_4").hide();
			    $("#reason_5").animate({left: '100px'}, "slow");
			   $("#reason_5").show();
			}
			else if(document.getElementById("reason_5").style.display == "block" ){
			  document.getElementById("reason_5").style.visibility="hidden";
			}
	}
//Function to handle drop event
function handleOptionDrop( event, ui ) {  
     if (ui.draggable.element !== undefined) {
        ui.draggable.element.droppable('enable');
      }  
		var dragId = $(ui.draggable).attr("id");
		document.getElementById(dragId).style.visibility = "hidden";
		toHideImage();
}			
});