function countingCharacters(stringToCount){
    // The length property has been mentioned in 
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " + 
              stringToCount.length + " characters.");
}

//in console enter things like
/* var portalString = "The cake is a lie";
countingCharacters(portalString); */
//or
//countingCharacter("cake");
function countingCharacters2(stringToCount, characterToFind) {
    var characterCount=0;
    for(var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++){
        if(stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}
/* countingCharacters2("xxaxxxbxx","x"); 
to count specificly the characters apperance in a string */

function countingCharacters3(str, search){    
    var count = 0;
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    
            //console.log("lastindex " + lastIndex);
    for (var index = 0; index <= lastIndex; index++){
        //console.log("this is index: " + index);
       var current = str.substring(index, index + numChars);
        if (current == search){            
            count++;
        }
    }
    return count;
}

//countingCharacters3("xxaxxxbxx","xx");