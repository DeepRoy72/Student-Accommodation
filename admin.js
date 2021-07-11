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

$(".navbar").click(function(){
  $(".form-box").show('form-box');
  $(".form").show('table3');
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});
var roomDetails = [];
var selectedIndex = -1;
function createRoom(){
  var roomId = document.getElementById("name").value;
  var roomType = document.getElementById("type1").value;
  var roomLocation = document.getElementById("location1").value;
  var roomCharge = document.getElementById("charge").value;
  var roomStatus = "Available";
  var paymentStatus = "Not Paid";
  var updateRow = "Update";
  var deleteRow = "Delete";

  var roomItems = {roomid:roomId,roomtype: roomType, roomlocation:roomLocation, roomcharge: roomCharge, roomstatus: roomStatus,paymentstatus:paymentStatus,updaterow:updateRow,deleterow:deleteRow};

  if (selectedIndex === -1){
    roomDetails.push(roomItems);
  }else{
    roomDetails.splice(selectedIndex,1,roomItems);
  }

  localStorage.roomData = JSON.stringify(roomDetails);
  init();
  //prepareTableCell(roomId,roomType,roomLocation,roomCharge,roomStatus,paymentStatus,updateRow,deleteRow);

  document.getElementById("name").value = "";
  document.getElementById("type1").value = "";
  document.getElementById("location1").value = "";
  document.getElementById("charge").value = "";
}
function init(){
  document.getElementById("tablerows").innerHTML="";
  if (localStorage.roomData){
    roomDetails = JSON.parse(localStorage.roomData);
    for (var i=0; i<roomDetails.length; i++){
      prepareTableCell(i,roomDetails[i].roomid,roomDetails[i].roomtype,roomDetails[i].roomlocation,roomDetails[i].roomcharge,roomDetails[i].roomstatus,roomDetails[i].paymentstatus,roomDetails[i].updaterow,roomDetails[i].deleterow)
    }
  }
}
function prepareTableCell(index,roomId,roomType,roomLocation,roomCharge,roomStatus,paymentStatus,updateRow,deleteRow){

  var table = document.getElementById("tablerows");
  var row = table.insertRow();
  var roomIdCell = row.insertCell(0);
  var roomTypeCell = row.insertCell(1);
  var roomLocationCell = row.insertCell(2);
  var roomChargeCell = row.insertCell(3);
  var roomStatusCell = row.insertCell(4);
  var paymentStatusCell = row.insertCell(5);
  var updateRowCell = row.insertCell(6);
  var deleteRowCell = row.insertCell(7);

  roomIdCell.innerHTML = roomId;
  roomTypeCell.innerHTML = roomType;
  roomLocationCell.innerHTML = roomLocation;
  roomChargeCell.innerHTML = roomCharge;
  roomStatusCell.innerHTML = roomStatus;
  paymentStatusCell.innerHTML = paymentStatus;
  updateRowCell.innerHTML = '<button class="btn btn-outline-warning update-btn" onclick="rowEdit('+index+')">Update</button>';
  deleteRowCell.innerHTML = '<button class="btn btn-outline-warning delete-btn" onclick="rowDelete('+index+')">Delete</button>';
}
function rowDelete(index){
  var table=document.getElementById("room-table");
  table.deleteRow(index+1);
  roomDetails.splice(index,1);
  localStorage.roomData = JSON.stringify(roomDetails);
  init();
}
function rowEdit(index){
  selectedIndex = index;
  var roomItems = roomDetails[index];
  document.getElementById("name").value=roomItems.roomid;
  document.getElementById("type1").value=roomItems.roomtype
  document.getElementById("location1").value=roomItems.roomlocation;
  document.getElementById("charge").value=roomItems.roomcharge;

  $(".form-box").show('form-box');
  $(".form").show('table3');
}
