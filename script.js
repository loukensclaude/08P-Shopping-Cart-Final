var products=[];
var prices=[];
var itemsNumber=[];

$(".newItem").click(function(){
var newItem=$(".itemName").val();
var newPrices=$(".itemPrice").val();
var newPrice= parseInt(newPrices);
itemsNumber.push(products.length);
products.push(newItem);
prices.push(newPrice);
$(".price").append("<li>"+"$"  + newPrice +  "</li>");
$(".product").append("<li>" + newItem + "</li>");
$(".val").html("<p>" + products.length + "</p>");
});

$(".purchase").click(function(){
var newPrices=$(".itemPrice").val();
var newPrice= parseInt(newPrices);
newPrice = 0;
prices.forEach(function(item){
    newPrice = newPrice + item;
});
$(".vol").html("<p>" + "Your Total is " + newPrice + "$" + "</p>");
alert("Thank You For Your Purchase. Your Total is " + newPrice + "$");
});

