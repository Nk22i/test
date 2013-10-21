/*
 * JS for startScreen_clone_1 generated by Appery.io
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
    "name": "startScreen_clone_1",
    "location": "startScreen_clone_1.html"
}];

startScreen_clone_1_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_15': 'startScreen_clone_1_mobilelabel_15',
        'mobilesearchbar_14': 'startScreen_clone_1_mobilesearchbar_14',
        'mobilelabel_16': 'startScreen_clone_1_mobilelabel_16',
        'mobileselectmenu_23': 'startScreen_clone_1_mobileselectmenu_23',
        'mobileselectmenuitem_24': 'startScreen_clone_1_mobileselectmenuitem_24',
        'mobilebutton_25': 'startScreen_clone_1_mobilebutton_25'
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

    Appery.CurrentScreen = 'startScreen_clone_1';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    startScreen_clone_1_beforeshow = function() {
        Appery.CurrentScreen = "startScreen_clone_1";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_868C_onLoad = startScreen_clone_1_onLoad = function() {
        screen_868C_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        startScreen_clone_1_deviceEvents();
        startScreen_clone_1_windowEvents();
        screen_868C_elementsEvents();
    }

    // screen window events
    screen_868C_windowEvents = startScreen_clone_1_windowEvents = function() {
        $('#startScreen_clone_1').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    startScreen_clone_1_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_868C_elementsExtraJS = startScreen_clone_1_elementsExtraJS = function() {
        // screen (startScreen_clone_1) extra code

        /* mobileselectmenu_23 */

        $("#startScreen_clone_1_mobileselectmenu_23").parent().find("a.ui-btn").attr("tabindex", "9");

    }

    // screen elements handler
    screen_868C_elementsEvents = startScreen_clone_1_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

    }

    $("#startScreen_clone_1").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        startScreen_clone_1_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_clone_1_beforeshow();
    } else {
        startScreen_clone_1_onLoad();
    }

}

$("#startScreen_clone_1").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    startScreen_clone_1_js();
});