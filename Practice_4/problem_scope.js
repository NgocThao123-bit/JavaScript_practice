var globalVar = "This is a global variable";
var globalVar1 = 10;

function checkScope() {
    const resultParagraph = document.getElementById("result");

    resultParagraph.textContent = globalVar;
}

function modifyGlobalVariable() {
    globalVar1++;
    const resultParagraph = document.getElementById("result2");

    resultParagraph.textContent = globalVar1;
}

modifyGlobalVariable();

function outerFunction() {
    const resultParagraph = document.getElementById("result3");
    var outerVar = "This is outerVar";

    function innerFunction() {
        resultParagraph.textContent = outerVar;
    }
    innerFunction();
}

outerFunction();

function lexicalScopeExample() {
    const resultParagraph = document.getElementById("result4");
    var outerVariable = "This is outerVariable";

    function innerFunction() {
        resultParagraph.textContent = outerVariable;
    }
    innerFunction();
}

lexicalScopeExample();


