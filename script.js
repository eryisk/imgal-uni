// Change Flex Direction from row to column on function call
// Used for centering navbar items
function myFunction() {
  var y = document.getElementById("myTopnav")
  console.log(y.style.flexDirection);
  if(y.style.flexDirection === "row") {
    y.style.flexDirection = "column";
    console.log(y.style.flexDirection);
  } else {
    y.style.flexDirection = "row";
    console.log(y.style.flexDirection);
  }

  //Applying "responsive" class name to elements that should be
  //responsive
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}