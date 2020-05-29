var store = (() => {

    var totalItems = 4;
    var quantity;
    
    function initialise() {
        _bindEvents();
    }

    function _bindEvents() {
        quantity = document.querySelectorAll("input[type='text']");

        Array.prototype.forEach.call(quantity, function(qty) {
            qty.addEventListener("blur", function() {
                _runningTotal();
            })
        })
    };

    function _runningTotal() {
        var total = 0;
        itemID = document.getElementById("qty_" + i);

        for (i = 1; i <= totalItems; i ++) {
            if (typeof itemID === "undefined" || itemID === null) {
                console.log("value not found");
            } else {
                total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
            }
         
        }

        document.getElementById("ItemsTotal").innerHTML = total;
    }

    return {
        initialise: initialise,
    };
    
})();