(function(){
    var oldLog = console.info;
    console.info = function (message) {
        // DO MESSAGE HERE.
        console.log("my info");
        console.log(arguments);
        oldLog.apply(console, arguments);
    };
})();
