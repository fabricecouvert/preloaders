var Loader = function() {

    var self = this;
    this.Init = function() {
        console.log("init");
        setTimeout(function() {
            $('body').addClass("loaded");
        }, 5000)
    };
}