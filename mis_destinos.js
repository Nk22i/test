/*
 * JS for mis_destinos generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '363c2cb1-4b4e-48f1-9c3d-1f8e2d3efea5';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "mis_destinos",
    "location": "mis_destinos.html"
}, {
    "name": "nuevo_destino",
    "location": "nuevo_destino.html"
}];

mis_destinos_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_29': 'mis_destinos_mobilelabel_29',
        'mobilesearchbar_14': 'mis_destinos_mobilesearchbar_14',
        'mobilelist_30': 'mis_destinos_mobilelist_30',
        'mobilelistitem_31': 'mis_destinos_mobilelistitem_31',
        'mobilelistitembutton_32': 'mis_destinos_mobilelistitembutton_32',
        'mobilelistitem_33': 'mis_destinos_mobilelistitem_33',
        'mobilelistitembutton_34': 'mis_destinos_mobilelistitembutton_34',
        'mobilelistitem_35': 'mis_destinos_mobilelistitem_35',
        'mobilelistitembutton_36': 'mis_destinos_mobilelistitembutton_36'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=footer]").css("bottom", "-36px");
    }

    Appery.CurrentScreen = 'mis_destinos';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    mis_destinos_beforeshow = function() {
        Appery.CurrentScreen = "mis_destinos";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_67F8_onLoad = mis_destinos_onLoad = function() {
        screen_67F8_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        mis_destinos_deviceEvents();
        mis_destinos_windowEvents();
        screen_67F8_elementsEvents();
    }

    // screen window events
    screen_67F8_windowEvents = mis_destinos_windowEvents = function() {
        $('#mis_destinos').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    mis_destinos_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_67F8_elementsExtraJS = mis_destinos_elementsExtraJS = function() {
        // screen (mis_destinos) extra code

        /* mobilelist_30 */

        listView = $("#mis_destinos_mobilelist_30");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#mis_destinos_mobilelist_30 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_31 */

        /* mobilelistitem_33 */

        /* mobilelistitem_35 */

    }

    // screen elements handler
    screen_67F8_elementsEvents = mis_destinos_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

    }

    $("#mis_destinos").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        mis_destinos_beforeshow();
    });

    if (runBeforeShow) {
        mis_destinos_beforeshow();
    } else {
        mis_destinos_onLoad();
    }

}

$("#mis_destinos").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    mis_destinos_js();
});