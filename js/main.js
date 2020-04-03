year= new Date().getFullYear();
copy= '&copy '+ `${year}`+ ' confide'; 
$(document).ready(function(){
$(".copy").html(copy);
$("img.me-nu").click(function(){
    $("div#menu-tray").toggle();
});
});