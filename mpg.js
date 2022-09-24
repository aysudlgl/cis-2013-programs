<script src="mpg.js">
floatMiles, floatGallons,floatMpg;
var floatMiles = prompt("Enter miles driven");
floatMiles = parseFloat(floatMiles);
var floatGallons = prompt("Enter gallons of gas used");
var floatMpg = floatMiles/floatGallons;
alert("Miles per gallon = " + floatMpg);
</script>