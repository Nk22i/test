/*
 * JS for startScreen generated by Appery.io
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

startScreen_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_3': 'startScreen_mobileimage_3',
        'mobilelist_4': 'startScreen_mobilelist_4',
        'mobilelistitem_5': 'startScreen_mobilelistitem_5',
        'mobilelistitembutton_6': 'startScreen_mobilelistitembutton_6',
        'mobilelistitem_7': 'startScreen_mobilelistitem_7',
        'mobilelistitembutton_8': 'startScreen_mobilelistitembutton_8',
        'mobilelistitem_9': 'startScreen_mobilelistitem_9',
        'mobilelistitembutton_10': 'startScreen_mobilelistitembutton_10'
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

    Appery.CurrentScreen = 'startScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    startScreen_beforeshow = function() {
        Appery.CurrentScreen = "startScreen";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_3671_onLoad = startScreen_onLoad = function() {
        screen_3671_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        startScreen_deviceEvents();
        startScreen_windowEvents();
        screen_3671_elementsEvents();
    }

    // screen window events
    screen_3671_windowEvents = startScreen_windowEvents = function() {
        $('#startScreen').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    startScreen_deviceEvents = function() {

        document.addEventListener("deviceready", function() {
			alert("hsa");
        });
    }

    // screen elements extra js
    screen_3671_elementsExtraJS = startScreen_elementsExtraJS = function() {
        // screen (startScreen) extra code

        /* mobilelist_4 */

        listView = $("#startScreen_mobilelist_4");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#startScreen_mobilelist_4 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_5 */

        /* mobilelistitem_7 */

        /* mobilelistitem_9 */

    }

    // screen elements handler
    screen_3671_elementsEvents = startScreen_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#startScreen_mobilecontainer1 [name="mobilelistitem_5"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('nuevo_destino', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        });

        $('#startScreen_mobilecontainer1 [name="mobilelistitem_7"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('mis_destinos', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        });

    }

    $("#startScreen").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        startScreen_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_beforeshow();
    } else {
        startScreen_onLoad();
    }

}

$("#startScreen").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    startScreen_js();
});