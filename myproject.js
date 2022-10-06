var $ = function (id) 
{
    return document.getElementById(id);
}


 var calculate = function()
 { 
    var floatTicketFee, intTicketQuantity, floatTotalCost;
    floatTicketFee = parseFloat($("ticket_fee").value);
    intTicketQuantity = ($("ticket_quantity").value );
    floatTotalCost = floatTicketFee * intTicketQuantity;
    $("total_cost").value = floatTotalCost;
 }
 
 window.onload = function () 
{
    $("ticket_quantity").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("ticket_fee").focus();
}
