
let basePrice = 0;
let taxAmount =0;
let totalDue =0;
function sumitorder(
    scoopCount,
     containertyp,
      hasSprinkles,
       hasFudge, 
       hasWhip, 
       hasCherry
       ){
          basePrice +=2.25
          basePrice += 1.25 * scoopCount; //SAME
        if(containertype === "cup"){
          basePrice += 0.5
        }
        if(hasFudge){
            baseprice += 0.25
        }
        if(hasWhip){
            baseprice += 0.25   
        }
        if(hasCherry){
            baseprice += 0.25
        }
     
     taxAmount =  TAX_RATE * baseprice;
     totalDue = baseprice + taxeAmount;
    }
    //TESTS!!!
       submitOder(4, "cup", true, true, true, true)
       console.log(basePrice, taxAmuont, totalDue),