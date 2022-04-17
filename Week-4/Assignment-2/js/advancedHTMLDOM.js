function ajax(src, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const products = JSON.parse(xhr.responseText);
      callback(products);
    };
  };
  xhr.open("GET", src);
  xhr.send();
}

function render(data){
   // document.createElement() and appendChild() methods are preferred.
  for (var i = 0; i < data.length; i++){
    var node=document.createElement("DIV");
    var textnode=document.createTextNode(`Name: ${data[i].name} Price: ${data[i].price} Description: ${data[i].description}`);
    node.appendChild(textnode)
    document.getElementById("show-products").appendChild(node);
  }
}

function btnAction(){
  ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function(response){
      render(response);
  }); // you should get product information in JSON format and render data in the page
}