var Loader = function() {

    var self = this;
    this.Init = function() {
        console.log("init");

        $("#uc_menu").click(function() {

            window.location.href = "admin.html";
        })

        var oldtext = "";
        var oldimg = ""
        $("#uc_menu").hover(function() {
            $(".footer-icone").prop("src", "admin.png");
            $("#uc_footer > span").text(" Cliquez sur l'icone pour accéder à la configuration des comptes utilisateurs et du partage de données.");
        }, function() {
            $(".footer-icone").prop("src", "cursor-gif-6.gif");
            $("#uc_footer > span").text(" Passez sur le curseur sur les différents élements de la page pour obtenir les explications correspondantes.");

        })
        setTimeout(function() {
            $("#cars_loadingtext").text("Chargement des véhicules...");
        }, 2000);

        setTimeout(function() {
            $("#cars_loadingtext").text("Récupération des positions...");
        }, 4000);
        setTimeout(function() {
            $('body').addClass("loaded");
        }, 6000)
    };
}