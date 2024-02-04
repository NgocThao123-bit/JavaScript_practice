// Global Scope:
var globalVar = "This is global var.";

function accessGlobalVar(){
    console.log("Inside: ", globalVar);
}

accessGlobalVar();

//Local Scope with Functions:
 function localScopeFunction(){
    var LocalVar = "This is local var.";
    console.log("Inside: ", LocalVar);
 }
 localScopeFunction();

 // Nested Scope
function outerFunction(){
    var outerVar = " This is outer var.";
    console.log(outerVar);

    function innerFunction(){
        var innerVar = " This is inner var.";
        console.log("Inside: ", innerVar);
    }

    //console.log("Outside", innerVar);

    innerFunction();
}

outerFunction();

// Block Scope
function blockScope(){
    for(let i=0; i<3; i++){
        let blockVar = " This is block var.";
        console.log("Inside loop block:", blockVar);
    }
}

blockScope();