let pageOne = document.getElementById('page_1');
// building yolo html
let addYoloDiv = document.createElement('div');
addYoloDiv.setAttribute('id', 'yolo');
pageOne.prepend(addYoloDiv);
addYoloDiv.innerHTML = '<div class="credential_picker_container"><div data-callback="onSignIn" data-client_id="123972858330-r0hkdbg0mue272bii00lgtn52gf2cea8.apps.googleusercontent.com" id="g_id_onload"></div></div>'
// building yolo style
let addYoloStyle = document.createElement('style');
pageOne.prepend(addYoloStyle);
addYoloStyle.innerHTML = ".credential_picker_container {position: fixed;bottom: 0;z-index: 9999;}#g_a11y_announcement {height: 1px;left: -10000px;overflow: hidden;position: absolute;top: auto;width: 1px;display: none;}";
// building yolo client script link
let addYoloScript = document.createElement('script');
addYoloScript.setAttribute('src', 'https://accounts.google.com/gsi/client');
addYoloScript.setAttribute('async', '');
addYoloScript.setAttribute('defer', '');
pageOne.prepend(addYoloScript);
// yolo scripts
var google_conversion_id = 934337414;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
!function a(b, c, d) { function e(g, h) { if (!c[g]) { if (!b[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j } var k = c[g] = { exports: {} }; b[g][0].call(k.exports, function (a) { var c = b[g][1][a]; return e(c ? c : a) }, k, k.exports, a, b, c, d) } return c[g].exports } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]); return e }({ 1: [function (a, b, c) { function d(a) { this.message = a } function e(a) { var b = String(a).replace(/=+$/, ""); if (b.length % 4 == 1) throw new d("'atob' failed: The string to be decoded is not correctly encoded."); for (var c, e, g = 0, h = 0, i = ""; e = b.charAt(h++); ~e && (c = g % 4 ? 64 * c + e : e, g++ % 4) ? i += String.fromCharCode(255 & c >> (-2 * g & 6)) : 0)e = f.indexOf(e); return i } var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; d.prototype = new Error, d.prototype.name = "InvalidCharacterError", b.exports = "undefined" != typeof window && window.atob && window.atob.bind(window) || e }, {}], 2: [function (a, b, c) { function d(a) { return decodeURIComponent(e(a).replace(/(.)/g, function (a, b) { var c = b.charCodeAt(0).toString(16).toUpperCase(); return c.length < 2 && (c = "0" + c), "%" + c })) } var e = a("./atob"); b.exports = function (a) { var b = a.replace(/-/g, "+").replace(/_/g, "/"); switch (b.length % 4) { case 0: break; case 2: b += "=="; break; case 3: b += "="; break; default: throw "Illegal base64url string!" }try { return d(b) } catch (c) { return e(b) } } }, { "./atob": 1 }], 3: [function (a, b, c) { "use strict"; function d(a) { this.message = a } var e = a("./base64_url_decode"); d.prototype = new Error, d.prototype.name = "InvalidTokenError", b.exports = function (a, b) { if ("string" != typeof a) throw new d("Invalid token specified"); b = b || {}; var c = b.header === !0 ? 0 : 1; try { return JSON.parse(e(a.split(".")[c])) } catch (f) { throw new d("Invalid token specified: " + f.message) } }, b.exports.InvalidTokenError = d }, { "./base64_url_decode": 2 }], 4: [function (a, b, c) { (function (b) { var c = a("./lib/index"); "function" == typeof b.window.define && b.window.define.amd ? b.window.define("jwt_decode", function () { return c }) : b.window && (b.window.jwt_decode = c) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "./lib/index": 3 }] }, {}, [4]);
function onSignIn(token) {
    var profile = jwt_decode(token.credential);
    // name values must match the form's name! Check under https://main.onlinetrainingbox.com/c/ domain
    let emailField =  document.querySelector('[name="email"]');
    let nameField = document.querySelector('[name="name"]');
    let lnameField = document.querySelector('[name="lname"]');

    if (emailField) {
        emailField.value = profile.email;
    }
    if (nameField){
        nameField.value = profile.given_name || profile.name;
    }
    if (lnameField) {
        lnameField.value = profile.family_name;
    }
}