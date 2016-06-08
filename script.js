$(document).ready(function(){

var click=document.getElementById("submit")
var center=document.getElementById("center_column")

click.addEventListener("click", function(){
  var search=document.getElementById("search")
  console.log(search);
  event.preventDefault();
  var find = $.get("http://www.omdbapi.com/?s="+search.value, function(data, status){
    console.log(search.value);
    console.log(data);
      for (var i = 0; i < data.Search.length; i++) {
        var poster= data.Search[i].Poster
        var img = document.createElement("img")
        img.src=poster
        center.appendChild(img)
      }
  })
})
})
