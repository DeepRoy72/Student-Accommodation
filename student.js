const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});


function init(){
  document.getElementById("tablerows1").innerHTML="";
  if (localStorage.roomData){
    roomDetails = JSON.parse(localStorage.roomData);
    for (var i=0; i<roomDetails.length; i++){
      if(roomDetails[i].roomstatus=="Available"){
      prepareTableCell(i,roomDetails[i].roomid,roomDetails[i].roomtype,roomDetails[i].roomlocation,roomDetails[i].roomcharge,roomDetails[i].checkInCell);
    }
  }
}
}
function prepareTableCell(index,roomId,roomType,roomLocation,roomCharge,checkInCell){
  var table = document.getElementById("student-table");
  var row = table.insertRow();
  var roomIdCell = row.insertCell(0);
  var roomTypeCell = row.insertCell(1);
  var roomLocationCell = row.insertCell(2);
  var roomChargeCell = row.insertCell(3);
  var checkInCell = row.insertCell(4);


  roomIdCell.innerHTML = roomId;
  roomTypeCell.innerHTML = roomType;
  roomLocationCell.innerHTML = roomLocation;
  roomChargeCell.innerHTML = roomCharge;
  checkInCell.innerHTML = "<button class='btn btn-outline-warning checkin-btn' onclick='checkInTable("+index+")'>Check In</button>";

}


function checkInTable(index){
  document.getElementById("tablerows2").innerHTML="";
  if (localStorage.roomData){
    roomDetails = JSON.parse(localStorage.roomData);
    for (var i=0; i<roomDetails.length; i++){
      if(roomDetails[i].roomid==index){
        roomDetails[i+1].roomstatus="Not Available";
        prepareCheckInTable(i+1,roomDetails[i+1].roomid,roomDetails[i+1].roomtype,roomDetails[i+1].roomlocation,roomDetails[i+1].roomcharge,roomDetails[i+1].checkOutCell);
        localStorage.roomData = JSON.stringify(roomDetails);
      }
    }
    $(".available-table").hide();
    $(".head-bottom").hide();
    $(".checkin-table").show();
    $(".head-bottom1").show();
}
}
function prepareCheckInTable(index,roomId,roomType,roomLocation,roomCharge,checkOutCell){
  var table = document.getElementById("check-in-table");
  var row = table.insertRow();
  var roomIdCell = row.insertCell(0);
  var roomTypeCell = row.insertCell(1);
  var roomLocationCell = row.insertCell(2);
  var roomChargeCell = row.insertCell(3);
  var checkOutCell = row.insertCell(4);

  roomIdCell.innerHTML = roomId;
  roomTypeCell.innerHTML = roomType;
  roomLocationCell.innerHTML = roomLocation;
  roomChargeCell.innerHTML = roomCharge;
  checkOutCell.innerHTML = "<button class='btn btn-outline-warning checkout-btn' onclick='checkout("+index+")'>Check Out</button>";


}
function checkout(index){
  if (localStorage.roomData){
    roomDetails = JSON.parse(localStorage.roomData);
    for (var i=0; i<roomDetails.length; i++){
      if(roomDetails[i].roomid==index){
        roomDetails[i+1].roomstatus="Available";
        localStorage.roomData = JSON.stringify(roomDetails);
      }
    }
    $(".available-table").show();
    $(".head-bottom").show();
    $(".checkin-table").hide();
      $(".head-bottom1").hide();
}

}
$(".checkoutt-btn").click(function(){
  $(".available-table").hide();
  $(".head-bottom").hide();
  $(".checkin-table").show();
  $(".head-bottom1").show();
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});
$(".checkinn-btn").click(function(){
  $(".available-table").show();
  $(".head-bottom").show();
  $(".checkin-table").hide();
    $(".head-bottom1").hide();
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});
