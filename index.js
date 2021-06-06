// alert("Hello");
var h1 = $("h1").text();
console.log(h1);


// Code for slider based display ---------------------------------
var slider = document.getElementById("myRange");
var viewsText = document.getElementById("noOfViews");
var costText = document.getElementById("costOfViews");
let discount = document.getElementById("discount-toggle");
// console.log(discount.);
 // Display the default slider value

 // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = displayValues;

// Function that returns 0 if toggle is unchecked and 1 if checked
function yearly(){
  if(discount.checked == true)
  return 1;
  else return 0;
}

discount.oninput = displayValues;

function displayValues(){
  if(slider.value==='1'){
    // console.log("Hi");
    viewsText.innerHTML = "10K";
    // console.log(viewsText.innerHTML);
    costText.innerHTML = "$" +8.00 * (1-(yearly()*0.25)) + ".00 ";
  }
  if(slider.value==='2'){
    viewsText.innerHTML = "50K";
    costText.innerHTML = "$" +12.00 * (1-(yearly()*0.25)) + ".00 ";
  }
  if(slider.value==='3'){
    viewsText.innerHTML = "100K";
    costText.innerHTML = "$" +16.00 * (1-(yearly()*0.25)) + ".00 ";
  }
  if(slider.value==='4'){
    viewsText.innerHTML = "500K";
    costText.innerHTML = "$" +24.00 * (1-(yearly()*0.25)) + ".00 ";
  }
  if(slider.value==='5'){
    viewsText.innerHTML = "1M";
    costText.innerHTML = "$" +36.00 * (1-(yearly()*0.25)) + ".00 ";
  }
}
