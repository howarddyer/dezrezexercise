var store = (() => {

    var priceA = 50;
    var priceB = 30;
    var priceC = 20;
    var priceD = 15;

    var quantityA;
    var quantityB;
    var quantityC;
    var quantityD;
    var total;
    
    function initialise() {
        quantityA = document.querySelector("[data-a-quantity]");
        quantityB = document.querySelector("[data-b-quantity]");
        quantityC = document.querySelector("[data-c-quantity]");
        quantityD = document.querySelector("[data-d-quantity]");
        allQuantities = document.querySelectorAll("input[type='number']");
        
        checkboxA = document.querySelector("[data-a-checkbox]");
        checkboxB = document.querySelector("[data-b-checkbox]");
        checkboxC = document.querySelector("[data-c-checkbox]");
        checkboxD = document.querySelector("[data-d-checkbox]");
        checkboxA.disabled = true;
        checkboxB.disabled = true;
        checkboxC.disabled = true;
        checkboxD.disabled = true;
        allCheckboxes = document.querySelectorAll("input[type='checkbox']");

        total = document.querySelector("[data-total]");

        _bindEvents();
    }

    function _bindEvents() {
        quantityA.addEventListener("blur", function() {
            if (quantityA.value >= 1) {
                checkboxA.disabled = false;
                checkboxA.checked = true;
                _injectValuesA(); 
            } else {
                checkboxA.disabled = true;
                checkboxA.checked = false;
                total.innerText = "";
            }
        });

        checkboxA.addEventListener("click", function() {
            if (checkboxA.checked === false) {
                quantityA.value = "0";
            }
        });

        quantityB.addEventListener("blur", function() {
            if (quantityB.value >= 1) {
                checkboxB.disabled = false;
                checkboxB.checked = true;
                _injectValuesB(); 
            } else {
                checkboxB.disabled = true;
                checkboxB.checked = false;
                total.innerText = "";
            }
        });

        quantityC.addEventListener("blur", function() {
            if (quantityC.value >= 1) {
                checkboxC.disabled = false;
                checkboxC.checked = true;
            } else {
                checkboxC.disabled = true;
                checkboxC.checked = false;
                total.innerText = "";
            }

            total.innerText = " " + priceC
        });

        quantityD.addEventListener("blur", function() {
            if (quantityD.value >= 1) {
                checkboxD.disabled = false;
                checkboxD.checked = true;
            } else {
                checkboxD.disabled = true;
                checkboxD.checked = false;
                total.innerText = "";
            }

            total.innerText = " " + priceD
        });
    };

    function _injectValuesA() {
        if (quantityA.value > 2) {
            total.innerText = " " + 130
        } else {
            total.innerText = " " + priceA
        }
    };

    function _injectValuesB() {
        if (quantityB.value > 1) {
            total.innerText = " " + 45
        } else {
            total.innerText = " " + priceB
        }
    };

    return {
        initialise: initialise,
    };
    
})();