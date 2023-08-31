/*
$(".quick-light-dark").on("click", function () {
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }
})
*/

// jQuery(document).ready(function () {
if(is_dash_main) {
    let spr = site_url + '/crypto_rate_api.php';
    $.getJSON(spr, function (json) {
        $("[id=eth_price]").html(json['ETHUSDT']);
        $("[id=btc_price]").html(json['BTCUSDT']);
        $("[id=xrp_price]").html(json['XRPUSDT']);
        $("[id=neo_price]").html(json['NEOUSDT']);
        $("[id=xlm_price]").html(json['XLMUSDT']);
        $("[id=ltc_price]").html(json['LTCUSDT']);
        $("[id=qtum_price]").html(json['QTUMUSDT']);
    });
// });
}
