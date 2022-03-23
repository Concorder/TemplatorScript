let ccPage = document.getElementById('page_2');
let addStyle = document.createElement('style');
ccPage.prepend(addStyle);
addStyle.innerHTML = '.cnpBillingCheckoutWrapper {position:relative;}.cnpBillingCheckoutHeader {width:100%;border-bottom: 1px solid #c0c0c0;margin-bottom:10px;}.cnpBillingCheckoutRight {width:50%;margin-left: 5px;border: 1px solid #c0c0c0;display:inline-block;vertical-align: top;padding:10px;}.cnpBillingCheckoutOrange {font-size:110%;color: rgb(255, 60, 22);font-weight:bold;}div.wpwl-wrapper, div.wpwl-label, div.wpwl-sup-wrapper { width: 100% }div.wpwl-group-expiry, div.wpwl-group-brand { width: 48%; float:left }div.wpwl-group-cvv { width: 50%; float:left; margin-left:2% }div.wpwl-group-cardHolder, div.wpwl-sup-wrapper-street1, div.wpwl-group-expiry { clear:both }div.wpwl-sup-wrapper-street1 { padding-top: 1px }div.wpwl-wrapper-brand { width: auto }div.wpwl-sup-wrapper-state, div.wpwl-sup-wrapper-city { width:32%;float:left;margin-right:2% }div.wpwl-sup-wrapper-postcode { width:32%;float:left }div.wpwl-sup-wrapper-country { width: 66% }div.wpwl-wrapper-brand, div.wpwl-label-brand, div.wpwl-brand { display: none;}div.wpwl-group-cardNumber { width:60%; float:left; font-size: 14px;  }div.wpwl-group-brand { width:35%; float:left; margin-top:10px }div.wpwl-brand-card  { width: 65px }div.wpwl-brand-custom  { margin: 0px 5px; background-image: url("https://oppwa.com/v1/paymentWidgets/img/brand.png") }.wpwl-button-pay {color: #fff;background-color: #5cb85c;border-color: #4cae4c;min-width: 170px;margin: 30px auto 0;display: block;border-radius: 4px;box-shadow: 0 5px 10px #00000036;font-weight: 600;font-size: 16px;float: none;}.wpwl-form {display: flex;flex-wrap: wrap;align-items: flex-end;}';
var wpwlOptions = {
    style: "plain",
    forceCardHolderEqualsBillingName: true,
    showCVVHint: true,
    brandDetection: true,
    onReady: function(){
        $(".wpwl-group-cardNumber").after($(".wpwl-group-brand").detach());
        $(".wpwl-group-cvv").after( $(".wpwl-group-cardHolder").detach());
        var visa = $(".wpwl-brand:first").clone().removeAttr("class").attr("class", "wpwl-brand-card wpwl-brand-custom wpwl-brand-VISA")
        var master = $(visa).clone().removeClass("wpwl-brand-VISA").addClass("wpwl-brand-MASTER");
        $(".wpwl-brand:first").after( $(master)).after( $(visa));
    },
    onChangeBrand: function(e){
        $(".wpwl-brand-custom").css("opacity", "0.3");
        $(".wpwl-brand-" + e).css("opacity", "1");
    }
}