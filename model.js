var Weight = {
KG: 
     {    
     Grams: function(amount){return amount*1000},
     Pounds: function(amount){return amount*2.2046},
     Ounces: function(amount){return amount*35.274},
     Stones: function(amount){return amount*0.1574}
         },
Grams: 
     {    
     KG: function(amount){return amount/1000},
     Pounds: function(amount){return amount*0.0022046},
     Ounces: function(amount){return amount*0.035274},
     Stones: function(amount){return amount*0.00015747}
         },
Pounds:
     {    
     KG: function(amount){return amount/2.2046},
     Grams: function(amount){return amount/0.0022046},
     Ounces: function(amount){return amount*16},
     Stones: function(amount){return amount*0.071429}
         },
Ounces:
     {    
     KG: function(amount){return amount/35.274},
     Grams: function(amount){return amount/0.035274},
     Pounds: function(amount){return amount*0.0625},
     Stones: function(amount){return amount*0.0044643}
         },
Stones:
     {    
     KG: function(amount){return amount/0.15747},
     Grams: function(amount){return amount/0.00015747},
     Pounds: function(amount){return amount*14},
     Ounces: function(amount){return amount*224}
         }
}; 

var Length = {
Kilometer: 
     {    
     Foot: function(amount){return amount*3280.8},
     Inch: function(amount){return amount*39370},
     Yard: function(amount){return amount*1093.6},
     Mile: function(amount){return amount*0.62137},
     Meter: function(amount){return amount*1000}
         },
Meter: 
     {    
     Foot: function(amount){return amount*3.2808},
     Inch: function(amount){return amount*39.370},
     Yard: function(amount){return amount*1.0936},
     Mile: function(amount){return amount*0.00062137},
     Kilometer: function(amount){return amount/1000}
         },
Foot: 
     {    
     Meter: function(amount){return amount/3.2808},
     Inch: function(amount){return amount*12},
     Yard: function(amount){return amount*0.33333},
     Mile: function(amount){return amount*0.00018939},
     Kilometer: function(amount){return amount/3280.8}
         }, 
Inch: 
     {    
     Meter: function(amount){return amount/39.370},
     Foot: function(amount){return amount*0.083333},
     Yard: function(amount){return amount*0.027778},
     Mile: function(amount){return amount*0.000015783},
     Kilometer: function(amount){return amount/39370}
         },
Yard: 
     {    
     Meter: function(amount){return amount/1.0936},
     Foot: function(amount){return amount*3},
     Inch: function(amount){return amount*36},
     Mile: function(amount){return amount*0.00056818},
     Kilometer: function(amount){return amount/1093.6}
         },
Mile: 
     {    
     Meter: function(amount){return amount/0.00062137},
     Foot: function(amount){return amount*5280},
     Inch: function(amount){return amount*63360},
     Yard: function(amount){return amount*1760},
     Kilometer: function(amount){return amount/0.62137}
         },         
}         