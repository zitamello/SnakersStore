var plus = document.getElementById("plus-tag");
plus.style.display = 'none';

var nItem = document.getElementById('nItem');
var cost = document.getElementById('total-cost');

var product = 225.00;

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunction2() {
  document.getElementById("carDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.img-car-icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-car");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var qt = 0;

function addFunction() {
  qt = qt + 1;
  var sqt = qt.toString();
  document.getElementById('qt-itens').innerHTML = sqt;
  return qt;
}

var sqt = qt.toString();
nItem.innerHTML = sqt;

function minusFunction() {
  if (qt == 0){
    document.getElementById('qt-itens').innerHTML = '0';
  }
  else {
    qt = qt - 1;
  }
  var mqt = qt.toString();
  document.getElementById('qt-itens').innerHTML = mqt;
}

var notification = document.getElementById('notification-div');

notification.style.display = 'none';

function alertFunction() {
  if (qt == 0) {
    notification.style.display = 'block';
    plus.style.display = "none";
    product = 0;
  }
  else if (qt == 1) {
   plus.style.display = 'block';
   product = 225.00;
  } 
  else {
   plus.style.display = 'block';
  }
  nItem.innerHTML = qt.toString();
  var total = product * qt;
  cost.innerHTML = total.toString();

}

document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.style.display = 'none';
    });
  });
});


function subsImg(imgs) {
  var expandImg = document.getElementById("myImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
  img
  
}
