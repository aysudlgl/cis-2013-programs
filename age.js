    var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     var floatDays = floatAge*365.25;
     var intWeeks = floatDays/7;
     var floatMonths = floatAge*12 ;
     var intFortnights = floatDays/14;
     alert("Age in years = " + floatAge + "\n" + "Age in months=" + floatMonths + "\n" + "Age in days=" + floatDays + "\n" + "Age in weeks=" + intWeeks + "\n" + "Age in fortnights=" + intFortnights + "\n");
