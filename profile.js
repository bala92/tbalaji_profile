$(document).ready(function() {

$("a").on("click" ,function(){
//var hs= this.hash.substr("1");
if(this.hash=="#balaji")
$("html body").animate({"scrollTop":0},1800);
else
$("html body").animate({"scrollTop":$(this.hash).offset().top},1800);

return false;


});



});
