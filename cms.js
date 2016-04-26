/*
LICENSED UNDER THE Q PUBLIC LICENSE version 1.0;
Copyright (C) 1999-2005 Trolltech AS, Norway.
You may obtain a copy of the License at
https://opensource.org/licenses/QPL-1.0
The Software and this license document are provided
AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE
WARRANTY OF DESIGN, MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE.
This license is governed by the Laws of Norway.
Disputes shall be settled by Oslo City Court.
*/
/*global Notification*/
/*global localStorage*/
/*global Dubtrack*/
/*global $*/
var gitroot = 'https://chilloutmusica.github.io/cms';
var motd = 'Scroll on video to change volume!';
var version = '11.11.4';
var emo = [];
var men = [];
var menu = {
    main: false,
    visibility: false,
    notification: false,
    customization: false,
    contact: false,
};
var options = {
    autovote: false,
    randomvote: false,
    workmode: false,
    chatmode: false,
    videomode: false,
    roomcss: false,
    inputbg: false,
    inputcss: false,
    userjoin: false,
    userleave: false,
    userddub: false,
    userudub: false,
    usergrab: false,
    workfade: false,
    lights: false,
    cleardelmsg: false,
    autoclearchat: false,
    clearchat: false,
    cmen: false,
    afkmsg: false,
    updubhover: false,
    downdubhover: false,
    grabhover: false,
    cmentoggle: false,
    afktoggle: false,
    afkto: false,
    autojoin: false,
    boothalert: false,
    hidebackground: false,
    snoozed: false,
    currentVol: null,
    hideavatars: false,
    autocomplete: false,
    showtimestamp: false,
    splitchat: false,
    notifionmention: false,
    alertonnav: false,
    showids: false,
};

function fade() {
    if (!options.workfade) {
        $('.main_content').fadeToggle('slow');
    }
}

function append() {
    var mainmenu = [
        '<link rel="stylesheet" type="text/css" href="' + gitroot + '/assets/toast.css">',
        '<link rel="stylesheet" type="text/css" href="' + gitroot + '/assets/main.css">',
        '<div class="main_content">',
        '<div class="headerbox" onclick="fade();">',
        '<span class="main_content_ver"><center>CMS</center></span>',
        '<span class="main_content_version"><center>Version - ' + version + '<br>/help - For help about cms!</center></span>',
        '</div>',
        '<ul class="main_content_ul">',
        '<ul>',
        '<p class="cms-menu-list" onclick="md_main();" align="center">Main</p>',
        '<ul class="cms-menu-dropdown main" style="display: none;">',
        '<li onclick="autovote();" class="main_content_li main_content_feature autovote">',
        '<p class="main_content_p">Autovote</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="randomvote();" class="main_content_li main_content_feature randomvote">',
        '<p class="main_content_p">Random Autovote</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="aj();" class="main_content_li main_content_feature autojoin">',
        '<p class="main_content_p">Auto Join</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="autocomplete();" class="main_content_li main_content_feature autocomplete">',
        '<p class="main_content_p">Auto Complete</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="autoclearchat();" class="main_content_li main_content_feature clearchat">',
        '<p class="main_content_p">Auto Clear Chat</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="autocleardelmsg();" class="main_content_li main_content_feature autocleardelmsg">',
        '<p class="main_content_p">Hide Deleted Message</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '</ul>',
        '<p class="cms-menu-list" onclick="md_visibility();" align="center">Visibility</p>',
        '<ul class="cms-menu-dropdown visibility" style="display: none;">',
        '<li onclick="workmode();" class="main_content_li main_content_feature workmode">',
        '<p class="main_content_p">Work Mode</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="chatmode();" class="main_content_li main_content_feature chatmode">',
        '<p class="main_content_p">Chat Mode</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="videomode();" class="main_content_li main_content_feature videomode">',
        '<p class="main_content_p">Video Mode</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="splitchat();" class="main_content_li main_content_feature splitchat">',
        '<p class="main_content_p">Split Chat</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="showtimestamp();" class="main_content_li main_content_feature showtimestamp">',
        '<p class="main_content_p">Show Time Stamps</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="hideavatars();" class="main_content_li main_content_feature avatars">',
        '<p class="main_content_p">Hide Avatars</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="hidebackground();" class="main_content_li main_content_feature hidebackground">',
        '<p class="main_content_p">Hide Background</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="roomcss();" class="main_content_li main_content_feature roomcss">',
        '<p class="main_content_p">Community Theme</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="showids();" class="main_content_li main_content_feature showids">',
        '<p class="main_content_p">Show IDs</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '</ul>',
        '<p class="cms-menu-list" onclick="md_notification();" align="center">Notifications</p>',
        '<ul class="cms-menu-dropdown notification" style="display: none;">',
        '<li onclick="boothal();" class="main_content_li main_content_feature boothalert">',
        '<p class="main_content_p">Booth Alert</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="alertonnav();" class="main_content_li main_content_feature alertonnav">',
        '<p class="main_content_p">Warn On Navigation</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="notifionmention();" class="main_content_li main_content_feature notifionmention">',
        '<p class="main_content_p">Notification On Mention</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="userjoin();" class="main_content_li main_content_feature userjoin">',
        '<p class="main_content_p">Join Message</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="userleave();" class="main_content_li main_content_feature userleave">',
        '<p class="main_content_p">Leave Message</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="usergrab();" class="main_content_li main_content_feature usergrab">',
        '<p class="main_content_p">Grab Message</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="userudub();" class="main_content_li main_content_feature userudub">',
        '<p class="main_content_p">Updub Message</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '</ul>',
        '<p class="cms-menu-list" onclick="md_customization();" align="center">Customization</p>',
        '<ul class="cms-menu-dropdown customization" style="display: none;">',
        '<li onclick="afkmsg();" class="main_content_li main_content_feature">',
        '<p class="main_content_p">Custom AFK Message</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
        '</li>',
        '<li style="border-bottom: 2px solid #878c8e;" onclick="afktoggle();" class="main_content_li main_content_feature afktoggle">',
        '<p class="main_content_p" style="margin-bottom: 5px;">&nbsp;</p>',
        '<p class="main_content_off edt"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="cmen();" class="main_content_li main_content_feature" style="padding-top: 5px;">',
        '<p class="main_content_p">Custom Mentions</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
        '</li>',
        '<li style="margin-bottom: 5px;border-bottom: 2px solid #878c8e;" onclick="cmentoggle();" class="main_content_li main_content_feature cmentoggle">',
        '<p class="main_content_p" style="margin-bottom: 5px;">&nbsp;</p>',
        '<p class="main_content_off edt"><span class="CMSdisabled">Disabled</span></p>',
        '</li>',
        '<li onclick="bginput();" class="main_content_li main_content_feature backgroudme">',
        '<p class="main_content_p">Custom Background</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
        '</li>',
        '<li onclick="cssinput();" class="main_content_li main_content_feature mycss">',
        '<p class="main_content_p">Custom CSS</p>',
        '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
        '</li>',
        '</ul>',
        '<p class="cms-menu-list" onclick="md_contact();" align="center">Other</p>',
        '<ul class="cms-menu-dropdown contact" style="display: none;">',
        '<li onclick="bug();" class="main_content_li main_content_feature" align="center">',
        '<p class="main_content_p">Bug</p>',
        '</li>',
        '<li onclick="suggestion();" class="main_content_li main_content_feature" align="center">',
        '<p class="main_content_p">Suggestion</p>',
        '</li>',
        '<li class="main_content_li main_content_feature" align="center">',
        '<a target="_blank" href="https://github.com/ChilloutMusica/cms"><p class="main_content_p">Github</p></a>',
        '</li>',
        '<li class="main_content_li main_content_feature" align="center">',
        '<a target="_blank" href="https://chrome.google.com/webstore/detail/cms/pcmddbmdajejpddlhjkhfechjhkibpoa/reviews"><p class="main_content_p">Rate Us</p></a>',
        '</li>',
        '</ul>',
        '</ul>',
        '</ul>',
        '</div>'
    ].join('');
    setTimeout(function() {
        $('.chat-main').append('<li class="chat-welcome-message" style="text-align: center; color: #CCC;"><br><br><br><span>CMS Version - ' + version + '<br>' + motd + '<br><br><span>Owners/Co-Owners Please Note That Community Css Has Been Changed Click <a target="_blank" href="http://chilloutmusica.github.io/cms/options/">Here</a> To See How It Is Now Done.<br>Emotes Are A Work In Progress.<br>Thank You.</span><br><br><br></li>');
        $('<span class="chat-option-header">CMS</span><div class="chat-option-buttons cmsbtns"><span class="cmsbtns" onclick="fade();">Main menu</span><span class="cmsbtns" onclick="chatmode();">Chat mode</span></div>').insertAfter('.chat-option-buttons-sound');
        if (userHasPerm()) {
            $('<li onclick="userddub();" class="main_content_li main_content_feature userddub"><p class="main_content_p">Downdub Message</p><p class="main_content_off"><span class="CMSdisabled">Disabled</span></p></li>').insertAfter('.usergrab');
            $('<div class="downdublist" style="display: none;"><center><div class="downdublistheader" style="margin-top: 10px;"><h1>Downdubs</h1></div><div class="downdublistpeople" style="margin-top: 10px;margin-bottom:10px;"></div></center></div>').insertAfter('.updublist');
        }
    }, 5000);
    setTimeout(function() {
        $('body').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css">');
        $('body').append('<div id="rs-dialog-container" class="INPUT BUG is-preview is-rcs-model" style="display: none;"><div id="rs-dialog-ccc" class="rs-dialog"><div class="dialog-frame" style="background: #282c35;"><span class="title">CMS Bug</span></div><div class="dialog-body"><span class="rs-dialog-message ccc"><div class="content" align="center" style="margin-bottom: 2px;"><textarea class="input bug" style="width: 450px;margin-left: 15px;"></textarea></div></span></div><div class="dialog-frame" style="display: inherit;bottom: -5px;color: #eee;"><div onclick="bugcancel();" class="button submit" style="cursor: pointer;height: 100%;width:100% !important;background: #282c35;" id="rs-ccc-saveDialog"><span>Cancel</span></div><div onclick="bugconfirm();" class="button submit" style="cursor: pointer;height: 100%;width:100% !important;background: #5A93CC;" id="rs-ccc-saveDialog"><span style="margin-top: 55px;">Confirm And Send</span></div></div></div></div>');
        $('body').append('<div id="rs-dialog-container" class="INPUT SUGGESTION is-preview is-rcs-model" style="display: none;"><div id="rs-dialog-ccc" class="rs-dialog"><div class="dialog-frame" style="background: #282c35;"><span class="title">CMS Suggestion</span></div><div class="dialog-body"><span class="rs-dialog-message ccc"><div class="content" align="center" style="margin-bottom: 2px;"><textarea class="input suggestion" style="width: 450px;margin-left: 15px;"></textarea></div></span></div><div class="dialog-frame" style="display: inherit;bottom: -5px;color: #eee;"><div onclick="suggestioncancel();" class="button submit" style="cursor: pointer;height: 100%;width:100% !important;background: #282c35;" id="rs-ccc-saveDialog"><span>Cancel</span></div><div onclick="suggestionconfirm();" class="button submit" style="cursor: pointer;height: 100%;width:100% !important;background: #5A93CC;" id="rs-ccc-saveDialog"><span style="margin-top: 55px;">Confirm And Send</span></div></div></div></div>');
        $('body').append('<div id="rs-dialog-container" class="INPUT AFKMSG is-preview is-rcs-model" style="display: none;"><div id="rs-dialog-ccc" class="rs-dialog"><div class="dialog-frame" style="background: #282c35;"><span class="title">Custom Afk Message</span></div><div class="dialog-body"><span class="rs-dialog-message ccc"><div class="content" align="center" style="margin-bottom: 2px;"><textarea class="input afk" style="width: 450px;margin-left: 15px;" placeholder="I am currently AFK at the moment."></textarea></div></span></div><div class="dialog-frame" style="display: inherit;bottom: -5px;color: #eee;background: #5A93CC;"><div onclick="afkmsgc();" class="button submit" style="cursor: pointer;width:100% !important" id="rs-ccc-saveDialog"><span>Save and Close</span></div></div></div></div>');
        $('body').append('<div id="rs-dialog-container" class="INPUT CMEN is-preview is-rcs-model" style="display: none;"><div id="rs-dialog-ccc" class="rs-dialog"><div class="dialog-frame" style="background: #282c35;"><span class="title">Custom Mentions</span></div><div class="dialog-body"><span class="rs-dialog-message ccc"><div class="content" align="center" style="margin-bottom: 2px;"><textarea class="input cmen" style="width: 450px;margin-left: 15px;" placeholder="separate, keywords, by, commas"></textarea></div></span></div><div class="dialog-frame" style="display: inherit;bottom: -5px;color: #eee;background: #5A93CC;"><div onclick="cmenc();" class="button submit" style="cursor: pointer;width:100% !important" id="rs-ccc-saveDialog"><span>Save and Close</span></div></div></div></div>');
        $('body').append('<div id="rs-dialog-container" class="INPUT BG is-preview is-rcs-model" style="display: none;"><div id="rs-dialog-ccc" class="rs-dialog"><div class="dialog-frame" style="background: #282c35;"><span class="title">Custom Background</span></div><div class="dialog-body"><span class="rs-dialog-message ccc"><div class="content" align="center" style="margin-bottom: 2px;"><textarea class="input bg" style="width: 450px;margin-left: 15px;" placeholder="https://example.com/example.jpg / #ffffff"></textarea></div></span></div><div class="dialog-frame" style="display: inherit;bottom: -5px;color: #eee;background: #5A93CC;"><div onclick="bgconfirm();" class="button submit" style="cursor: pointer;width:100% !important" id="rs-ccc-saveDialog"><span>Save and Close</span></div></div></div></div>');
        $('body').append('<div id="rs-dialog-container" class="INPUT CSS is-preview is-rcs-model" style="display: none;"><div id="rs-dialog-ccc" class="rs-dialog"><div class="dialog-frame" style="background: #282c35;"><span class="title">Custom Css</span></div><div class="dialog-body"><span class="rs-dialog-message ccc"><div class="content" align="center" style="margin-bottom: 2px;"><textarea class="input css" style="width: 450px;margin-left: 15px;" placeholder="https://example.com/example.css / body { background-color: #fff; }"></textarea></div></span></div><div class="dialog-frame" style="display: inherit;bottom: -5px;color: #eee;background: #5A93CC;"><div onclick="cssconfirm();" class="button submit" style="cursor: pointer;width:100% !important" id="rs-ccc-saveDialog"><span>Save and Close</span></div></div></div></div>');
        $('head').append('<script src="https://mitchdev.net/dt/emoarray.js"></script>');
        $('head').append('<script src="https://mitchdev.net/dt/jquery.textcomplete.js"></script>');
        $('.player_sharing').append('<span class="icon-history eta_btn" onclick="eta();" onmouseover="eta_tooltip();" onmouseout="hide_eta_tooltip();"></span>');
        $('.player_sharing').append('<span class="icon-mute snooze_btn" onclick="snooze();" onmouseover="snooze_tooltip();" onmouseout="hide_snooze_tooltip();"></span>');
        $('<a class="dtapibtn" href="http://docs.dubtrackfmapiv11.apiary.io/" target="blank">Dubtrack API</a>').insertAfter('#main-menu-left .navigate.room-active-link');
        $('<a class="CMSEbtn" onclick="fade();">CMS</a>').insertAfter('#main-menu-left .navigate.lobby-link');
        $('<span class="CMSbtn" onclick="fade();" style="margin-left:3px;">CMS</span>').insertAfter('.player_header .room-info-display');
        $('body').prepend(mainmenu);
        $('body').append('<div class="updublist" style="display: none;"><center><div class="updublistheader" style="margin-top: 10px;"><h1>Updubs</h1></div><div class="updublistpeople" style="margin-top: 10px;margin-bottom:10px;"></div></center></div>');
        $('body').append('<div class="grablist" style="display: none;"><center><div class="grablistheader" style="margin-top: 10px;"><h1>Grabs</h1></div><div class="grablistpeople" style="margin-top: 10px;margin-bottom:10px;"></div></center></div>');
        setTimeout(function() {
            $('.INPUT').hide();
        }, 6000);
    }, 1000);
}

function md_contact() {
    if (!menu.contact) {
        $('.cms-menu-dropdown.contact').slideToggle('slow');
        storage('menu_contact', 'true');
        menu.contact = true;
    }
    else {
        $('.cms-menu-dropdown.contact').slideToggle('slow');
        storage('menu_contact', 'false');
        menu.contact = false;
    }
}

function md_main() {
    if (!menu.main) {
        $('.cms-menu-dropdown.main').slideToggle('slow');
        storage('menu_main', 'true');
        menu.main = true;
    }
    else {
        $('.cms-menu-dropdown.main').slideToggle('slow');
        storage('menu_main', 'false');
        menu.main = false;
    }
}

function md_visibility() {
    if (!menu.visibility) {
        $('.cms-menu-dropdown.visibility').slideToggle('slow');
        storage('menu_visibility', 'true');
        menu.visibility = true;
    }
    else {
        $('.cms-menu-dropdown.visibility').slideToggle('slow');
        storage('menu_visibility', 'false');
        menu.visibility = false;
    }
}

function md_notification() {
    if (!menu.notification) {
        $('.cms-menu-dropdown.notification').slideToggle('slow');
        storage('menu_notification', 'true');
        menu.notification = true;
    }
    else {
        $('.cms-menu-dropdown.notification').slideToggle('slow');
        storage('menu_notification', 'false');
        menu.notification = false;
    }
}

function md_customization() {
    if (!menu.customization) {
        $('.cms-menu-dropdown.customization').slideToggle('slow');
        storage('menu_customization', 'true');
        menu.customization = true;
    }
    else {
        $('.cms-menu-dropdown.customization').slideToggle('slow');
        storage('menu_customization', 'false');
        menu.customization = false;
    }
}

function listhover() {
    $('.dubup').hover(function() {
        options.updubhover = true;
        if (options.updubhover) {
            $('.updublist').slideToggle("slow");
        }
    });
    $('.dubup').mouseout(function() {
        options.updubhover = false;
    });
    $('.dubdown').hover(function() {
        options.downdubhover = true;
        if (options.downdubhover) {
            $('.downdublist').slideToggle("slow");
        }
    });
    $('.dubdown').mouseout(function() {
        options.downdubhover = false;
    });
    $('.add-to-playlist-button').hover(function() {
        options.grabhover = true;
        if (options.grabhover) {
            $('.grablist').slideToggle("slow");
        }
    });
    $('.add-to-playlist-button').mouseout(function() {
        options.grabhover = false;
    });
}

function dublist(e) {
    var user = e.user.username;
    setTimeout(function() {
        if (e.dubtype === "updub") {
            $('.ud-user-' + user + '').remove();
            $('.dd-user-' + user + '').remove();
            $('.updublistpeople').append('<p id="user-updub" class="ud-user-' + user + '">@' + user + '</p>');
        }
        else if (e.dubtype === "downdub") {
            $('.dd-user-' + user + '').remove();
            $('.ud-user-' + user + '').remove();
            $('.downdublistpeople').append('<p id="user-downdub" class="dd-user-' + user + '">@' + user + '</p>');
        }
    }, 1000);
}

function grablist(e) {
    var user = e.user.username;
    setTimeout(function() {
        $('.g-user-' + user + '').remove();
        $('.grablistpeople').append('<p id="user-grab" class="g-user-' + user + '">@' + user + '</p>');
    }, 1000);
}

function updatelist(e) {
    if (e.startTime < 2) {
        $('.updublist').find('p').remove();
        $('.downdublist').find('p').remove();
        $('.grablist').find('p').remove();
    }
}

function alertonnav() {
    if (!options.alertonnav) {
        enable('.alertonnav');
        options.alertonnav = true;
        storage('alertonnav', 'true');
        alertonnavigation();
    }
    else {
        disable('.alertonnav');
        storage('alertonnav', 'false');
        options.alertonnav = false;
    }
}

function alertonnavigation() {
    window.onbeforeunload = function() {
        if (options.alertonnav) {
            return "CMS Warn On Navigation, Are you sure you want to refresh or leave this page?";
        }
    };
}

function autocomplete() {
    if (!options.autocomplete) {
        enable('.autocomplete');
        storage('autocomplete', 'true');
        options.autocomplete = true;
        autocompleteue();
        $('.textcomplete-dropdown').removeClass('disabled');
    }
    else {
        disable('.autocomplete');
        storage('autocomplete', 'false');
        options.autocomplete = false;
        $('.textcomplete-dropdown').addClass('disabled');
    }
}

function splitchat() {
    if (!options.splitchat) {
        enable('.splitchat');
        storage('splitchat', 'true');
        options.splitchat = true;
        $('head').append('<link class="split-chat" href="' + gitroot + '/assets/settings/split_chat.css" rel="stylesheet" type="text/css">');
    }
    else {
        disable('.splitchat');
        storage('splitchat', 'false');
        options.splitchat = false;
        $('.split-chat').remove();
    }
}

function showtimestamp() {
    if (!options.showtimestamp) {
        enable('.showtimestamp');
        storage('showtimestamp', 'true');
        options.showtimestamp = true;
        $('head').append('<link class="show-time-stamps" href="' + gitroot + '/assets/settings/show_timestamp.css" rel="stylesheet" type="text/css">');
    }
    else {
        disable('.showtimestamp');
        storage('showtimestamp', 'false');
        options.showtimestamp = false;
        $('.show-time-stamps').remove();
    }
}

function autocleardelmsg() {
    if (!options.cleardelmsg) {
        enable('.autocleardelmsg');
        options.cleardelmsg = true;
        Dubtrack.Events.bind('realtime:delete-chat-message', cleardelmsg);
        storage('cleardelmsg', 'true');
    }
    else {
        disable('.autocleardelmsg');
        storage('cleardelmsg', 'false');
        options.cleardelmsg = false;
        Dubtrack.Events.unbind('realtime:delete-chat-message', cleardelmsg);
    }
}

function cleardelmsg() {
    $('.deleted-message').hide();
    $('.deleted').hide();
}

function msgdata(e) {
    var message = e.message;
    var chatid = e.chatid;
    if ($('li').hasClass('chat-id-' + chatid + '')) {
        $('.chat-id-' + chatid + '').attr('data-message', '' + message + '');
    }
}

function msgdatadel(e) {
    var chatid = e.chatid;
    var deleter = e.user.username;
    var username = $('.chat-id-' + chatid + '').find('.username').text().replace(" ", "");
    var message = $('.chat-id-' + chatid + '').attr('data-message');
    $('.chat-id-' + chatid + '').find('.deleted').remove();
    $('.chat-id-' + chatid + '').find('.text').append('<a class="username">@' + username + '\'s message was deleted by @' + deleter + '</a><p class="deleted">' + message + '</p>');
}

function cssconfirm() {
    var text = $('.input.css').val();
    if (text.length !== 0) {
        storage('ccss', text);
        $('.CMSccss').remove();
        if (text.indexOf('http')) {
            $('head').append('<style class="CMSccss" type="text/css">' + text + '</style>');
        } else {
            $('head').append('<link class="CMSccss" href="' + text + '" rel="stylesheet" type="text/css">');
        }
        $('.INPUT.CSS').hide();
        if (text.indexOf('http')) {
            notification('info', 'Custom CSS set');
        } else {
            if (text.length < 50 && text.length !== 0 || text.length === 50) {
                notification('info', 'Custom CSS set:<br>' + text + '');
            } else {
                var shorttext = $('.input.css').val().slice(0, 50);
                notification('info', 'Custom CSS set:<br>' + shorttext + '...');
            }
        }
    } else {
        $('.CMSccss').remove();
        $('.INPUT.CSS').hide();
        localStorage.removeItem('ccss');
    }
}
function cssinput() {
    if (!options.inputcss) {
        $('.INPUT.CMEN').hide();
        $('.INPUT.CSS').show();
        $('.INPUT.BG').hide();
        $('.INPUT.AFKMSG').hide();
        options.inputcss = true;
    }
    else {
        $('.INPUT.CSS').hide();
        options.inputcss = false;
    }
}

function bgconfirm() {
    var text = '' + $('.input.bg').val() + '';
    if (text.length !== 0) {
        storage('bg', text);
        $('.CMSbg').remove();
        if (text.indexOf('http')) {
            $('body').append('<div class="CMSbg" style="background: ' + text + ';"></div>');
        } else {
            $('body').append('<div class="CMSbg" style="background: url(' + text + ');"></div>');
        }
        $('.INPUT.BG').hide();
        if (text.length < 50 && text.length !== 0 || text.length === 50) {
            notification('info', 'Custom background set:<br>' + text + '');
        } else {
            var shorttext = $('.input.bg').val().slice(0, 50);
            notification('info', 'Custom background set<br>' + shorttext + '...');
        }
    } else {
        $('.CMSbg').remove();
        $('.INPUT.BG').hide();
        localStorage.removeItem('bg');
    }
}

function bginput() {
    if (!options.inputbg) {
        $('.INPUT.CMEN').hide();
        $('.INPUT.BG').show();
        $('.INPUT.AFKMSG').hide();
        $('.INPUT.CSS').hide();
        options.inputbg = true;
    }
    else {
        $('.INPUT.BG').hide();
        options.inputbg = false;
    }
}

function enable(theclass) {
    $(theclass + ' .main_content_off').html('<span class="CMSenabled">Enabled</span>');
}

function disable(theclass) {
    $(theclass + ' .main_content_off').html('<span class="CMSdisabled">Disabled</span>');
}

function updateuserdata() {
    var id = Dubtrack.session.id;
    var username = Dubtrack.session.get('username');
    $.ajax({
        type: 'POST',
        beforeSend: function() {this.xhrFields.withCredentials = false;},
        url: 'https://mitchdev.net/cms/user/'+id+'?pass=113e79cafdda073208f79682d1e2a8127cfaa62c0d67817f1a1919ca38655cfe',
        dataType: "json",
        data: {
            data: {
                'username': username,
                'userid': id,
                features: {
                    'autovote': options.autovote,
                    'randomvote': options.randomvote,
                    'autojoin': options.autojoin,
                    'autocomplete': options.autocomplete,
                    'autoclearchat': options.autoclearchat,
                    'hidedeletedmessages': options.cleardelmsg,
                    'workmode': options.workmode,
                    'chatmode': options.chatmode,
                    'videomode': options.videomode,
                    'splitchat': options.splitchat,
                    'showtimestamp': options.showtimestamp,
                    'hideavatars': options.hideavatars,
                    'hidebackground': options.hidebackground,
                    'communitytheme': options.roomcss,
                    'showids': options.showids,
                    'boothalert': options.boothalert,
                    'warnonnavigation': options.alertonnav,
                    'notificationonmention': options.notifionmention,
                    'joinmessage': options.userjoin,
                    'leavemessage': options.userleave,
                    'grabmessage': options.usergrab,
                    'downdubmessage': options.userddub,
                    'updubmessage': options.userudub
                },
                custom: {
                    'afkmessage': localStorage.getItem('afkmsg'),
                    'mentions': localStorage.getItem('cmen'),
                    'background': localStorage.getItem('bg'),
                    'css': localStorage.getItem('ccss')
                }
            }
        }
    });
}

function storage(theclass, state) {
    localStorage.setItem(theclass, state);
}

function vote(e) {
    if (e.startTime < 2) {
        if (options.randomvote) {
            var min = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text());
            var sec = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.sec').text());
            var seconds = 60 * min + sec;
            var random = Math.floor(Math.random() * seconds) - 1;
            var timeout = '' + random + '000';
            var rounded = Math.round(random / 60 * 10);
            var intomin = rounded / 10;
            if (intomin % 1 !== 0) {
                var str = '' + intomin + '';
                var substr = str.split('.');
                var minute = '' + substr[0] + '';
                var second = '' + substr[1] + '0';
                if (second > 60) {
                    var minu = Number(substr[0]) + 1;
                    var seco = second - 60;
                    if (substr[0] === 0) {
                        notification('info', 'Updub in ' + seco + ' seconds');
                    }
                    else {
                        notification('info', 'Updub in ' + minu + ' minutes and ' + seco + ' seconds');
                    }
                }
                else if (substr[0] === 0) {
                    notification('info', 'Updub in ' + second + ' seconds');
                }
                else {
                    notification('info', 'Updub in ' + minute + ' minutes and ' + second + ' seconds');
                }
            }
            else {
                notification('info', 'Updub in ' + intomin + ' minutes');
            }
            setTimeout(function() {
                Dubtrack.playerController.voteUpAction();
            }, timeout);
        }
        else if (options.autovote) {
            Dubtrack.playerController.voteUpAction();
        }
    }
}

function randomvote() {
    if (!options.randomvote) {
        options.randomvote = true;
        storage('randomvote', 'true');
        enable('.randomvote');
        if (options.autovote) {
            options.autovote = false;
            storage('vote', 'false');
            disable('.autovote');
        }
    }
    else {
        options.randomvote = false;
        storage('randomvote', 'false');
        disable('.randomvote');
    }
}

function autovote() {
    if (!options.autovote) {
        options.autovote = true;
        storage('vote', 'true');
        enable('.autovote');
        if (options.randomvote) {
            options.randomvote = false;
            storage('randomvote', 'false');
            disable('.randomvote');
        }
    }
    else {
        options.autovote = false;
        storage('vote', 'false');
        disable('.autovote');
    }
}

function workmode() {
    if (!options.workmode) {
        options.workfade = true;
        options.workmode = true;
        $('#main-room').fadeToggle('slow');
        enable('.workmode');
    }
    else {
        options.workfade = false;
        options.workmode = false;
        $('#main-room').fadeToggle('slow');
        disable('.workmode');
    }
}

function chatmode() {
    if (!options.chatmode) {
        options.chatmode = true;
        $('#main_player').fadeToggle('slow');
        $('head').append('<link class="chatmodecss" rel="stylesheet" href="' + gitroot + '/assets/chatmode.css">');
        enable('.chatmode');
    }
    else {
        options.chatmode = false;
        $('#main_player').fadeToggle('slow');
        $('.chatmodecss').remove();
        disable('.chatmode');
    }
}

function videomode() {
    if (!options.videomode) {
        options.videomode = true;
        $('.right_section').fadeToggle('slow');
        $('.left_section').css('marginLeft', '16rem');
        enable('.videomode');
    }
    else {
        options.videomode = false;
        $('.right_section').fadeToggle('slow');
        $('.left_section').css('marginLeft', '0rem');
        disable('.videomode');
    }
}

function roomcss() {
    if (!options.roomcss) {
        options.roomcss = true;
        $('head').append('<link class="CMScss" href="' + localStorage.getItem('room_css') + '" rel="stylesheet" type="text/css">');
        storage('css', 'true');
        enable('.roomcss');
    }
    else {
        options.roomcss = false;
        $('.CMScss').remove();
        storage('css', 'false');
        disable('.roomcss');
    }
}

function userjoin() {
    if (!options.userjoin) {
        options.userjoin = true;
        enable('.userjoin');
        storage('userjoin', 'true');
        Dubtrack.Events.bind('realtime:user-join', Euserjoin);
    }
    else {
        options.userjoin = false;
        disable('.userjoin');
        storage('userjoin', 'false');
        Dubtrack.Events.unbind('realtime:user-join', Euserjoin);
    }
}

function Euserjoin(e) {
    addToChat('<span class="system-userjoin">@' + e.user.username + ' just joined</span>');
}

function userleave() {
    if (!options.userleave) {
        options.userleave = true;
        enable('.userleave');
        storage('userleave', 'true');
        Dubtrack.Events.bind('realtime:user-leave', Euserleave);
    }
    else {
        options.userleave = false;
        disable('.userleave');
        storage('userleave', 'false');
        Dubtrack.Events.unbind('realtime:user-leave', Euserleave);
    }
}

function Euserleave(e) {
    addToChat('<span class="system-userleave">@' + e.user.username + ' just left</span>');
}

function usergrab() {
    if (!options.usergrab) {
        options.usergrab = true;
        enable('.usergrab');
        storage('usergrab', 'true');
        Dubtrack.Events.bind('realtime:room_playlist-queue-update-grabs', Eusergrab);
    }
    else {
        options.usergrab = false;
        disable('.usergrab');
        storage('usergrab', 'false');
        Dubtrack.Events.unbind('realtime:room_playlist-queue-update-grabs', Eusergrab);
    }
}

function Eusergrab(e) {
    addToChat('<span class="system-usergrab">@' + e.user.username + ' grabbed this song</span>');
}

function notifionmention() {
    if (!options.notifionmention) {
        options.notifionmention = true;
        enable('.notifionmention');
        storage('notifionmention', 'true');
    }
    else {
        options.notifionmention = false;
        disable('.notifionmention');
        storage('notifionmention', 'false');
    }
}

function userudub() {
    if (!options.userudub) {
        options.userudub = true;
        enable('.userudub');
        storage('userudub', 'true');
        Dubtrack.Events.bind('realtime:room_playlist-dub', Euserudub);
    }
    else {
        options.userudub = false;
        disable('.userudub');
        storage('userudub', 'false');
        Dubtrack.Events.unbind('realtime:room_playlist-dub', Euserudub);
    }
}

function Euserudub(e) {
    if (e.dubtype === "updub") {
        addToChat('<span class="system-userudub">@' + e.user.username + ' updubbed this song</span>');
    }
}

function userddub() {
    if (userHasPerm()) {
        if (!options.userddub) {
            options.userddub = true;
            enable('.userddub');
            storage('userddub', 'true');
            Dubtrack.Events.bind('realtime:room_playlist-dub', Euserddub);
        }
        else {
            options.userddub = false;
            disable('.userddub');
            storage('userddub', 'false');
            Dubtrack.Events.unbind('realtime:room_playlist-dub', Euserddub);
        }
    }
    else {
        options.userddub = false;
        disable('.userddub');
        Dubtrack.Events.unbind('realtime:room_playlist-dub', Euserddub);
    }
}

function Euserddub(e) {
    if (userHasPerm()) {
        if (e.dubtype === "downdub") {
            addToChat('<span class="system-userddub">@' + e.user.username + ' downdubbed this song</span>');
        }
    }
}

function Muted(e) {
    if (userHasPerm()) {
        var username = e.user.username;
        var muted = e.mutedUser.username;
        addToChat('<span class="system-mute">@' + muted + ' was muted by @' + username + '</span>');
    }
}

function Unmuted(e) {
    if (userHasPerm()) {
        var username = e.user.username;
        var muted = e.mutedUser.username;
        addToChat('<span class="system-mute">@' + muted + ' was unmuted by @' + username + '</span>');
    }
}

function autoclearchat() {
    if (!options.autoclearchat) {
        options.autoclearchat = true;
        enable('.clearchat');
        storage('autoclearchat', 'true');
        options.clearchat = true;
        clearchat();
    }
    else {
        options.autoclearchat = false;
        disable('.clearchat');
        storage('autoclearchat', 'false');
        options.clearchat = false;
    }
}

function clearchat() {
    if (options.clearchat) {
        setInterval(function() {
            if (options.clearchat) {
                $('.clearChatToggle').click();
                setTimeout(function() {
                    notification('info', 'Chat cleared automatically by CMS');
                }, 1000);
            }
        }, 1800000);
    }
}

function chatdel(e) {
    $(e).parent('li')[0].remove();
}

function scrolltobottom() {
    $('#new-messages-counter').click();
}

function commands(e) {
    var chatid = e.chatid;
    var message = e.message;
    var id = Dubtrack.session.id;
    var user = e.user.userInfo.userid;
    if (message.indexOf('/help') > -1 && id === user) {
        var help = [
            '<li class="system">',
            '<div class="chatDelete" onclick="chatdel(this)"><span class="icon-close"></span></div>',
            '<br>',
            '<span>CMS HELP</span>',
            '<br>',
            '<br>',
            '<span>/commands - Displays a list of CMS chat commands</span>',
            '<br>',
            '</li>'
        ].join('');
        $('.chat-main').append(help);
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
    if (message.indexOf('/commands') > -1 && id === user) {
        var commands = [
            '<li class="system">',
            '<div class="chatDelete" onclick="chatdel(this)"><span class="icon-close"></span></div>',
            '<br>',
            '<span>CMS COMMANDS</span>',
            '<br>',
            '<br>',
            '<span>/help - Displays help message</span>',
            '<br>',
            '<span>/whois [username/userid] - Displays info about a user</span>',
            '<br>',
            '<span>/whoami - Displays your info</span>',
            '<br>',
            '<span>/volume [number] - Set Volume</span>',
            '<br>',
            '</li>'
        ].join('');
        $('.chat-main').append(commands);
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
    if (message.indexOf("/whois ") === 0 && id === user) {
        message.replace(/( [A-Za-z0-9_.]+)/g, function(str) {
            var name = '' + str + '';
            var username = name.substr(1);
            whois(username);
        });
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
    if (message.indexOf("/whois @") === 0 && id === user) {
        message.replace(/(@[A-Za-z0-9_.]+)/g, function(str) {
            var name = '' + str + ''.replace("@", "");
            var username = name.substr(1);
            whois(username);
        });
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
    if (message.indexOf("/volume ") === 0 && id === user) {
        message.replace(/( [A-Za-z0-9_.]+)/g, function(number) {
            Dubtrack.room.player.setVolume(number);
            $('.ui-slider-handle').css('left', '' + number + 'px');
            $('.ui-slider-range').css('width', '' + number + '%');
        });
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
    if (message.indexOf("/whoami") > -1 && id === user) {
        var username = Dubtrack.session.get('username');
        whois(username);
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
    if (message.indexOf("/eta") > -1 && id === user) {
        eta();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
    if (message.indexOf("/snooze") > -1 && id === user) {
        snooze();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'block');
        $('.chat-id-' + chatid + '').find('.chatDelete').click();
        $('.chat-id-' + chatid + '').find('.chatDelete').css('display', 'none');
    }
}

function eta() {
    var average = 4;
    var mins = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text());
    var sec = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.sec').text());
    var position = Number($('.queue-position').text());
    var eta = position * average - average + mins;
    if (eta >= 0 && eta !== 0) {
        notification('info', 'ETA: Less than ' + eta + ' minutes');
    }
    else if (eta === 0) {
        notification('info', 'ETA: ' + sec + ' seconds');
    }
    else {
        notification('info', 'ETA: You\'re not in the queue');
    }
}

function eta_tooltip() {
    $('.snooze_btn').append('<div class="eta_tooltip" style="position: absolute;font: 1rem/1.5 proxima-nova,sans-serif;display: block;left: -33px;cursor: pointer;border-radius: 1.5rem;padding: 8px 16px;background: rgba(47,47,47,0.85);font-weight: 700;font-size: 13.6px;color: #fff;text-align: center;z-index: 9;">Show ETA</div>');
}

function hide_eta_tooltip() {
    $('.eta_tooltip').remove();
}

function whois(username) {
    console.log(username);
    $.ajax({
        type: 'GET',
        url: 'https://api.dubtrack.fm/user/' + username + '/',
    }).done(function(e) {
        var id = e.data._id;
        var locale = e.data.userInfo.locale;
        var grole = 'User';
        if (Dubtrack.helpers.isDubtrackAdmin('' + id + '')) {
            grole = 'Admin';
        }
        var cr = '' + e.data.created + '';
        var created = cr.substr(0, cr.length - 3);
        var d = new Date(created * 1000);
        var yyyy = d.getFullYear();
        var mm = ('0' + (d.getMonth() + 1)).slice(-2);
        var dd = ('0' + d.getDate()).slice(-2);
        var hh = d.getHours();
        var h = hh;
        var ampm = 'AM';
        var min = ('0' + d.getMinutes()).slice(-2);
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        }
        else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        }
        else if (hh === 0) {
            h = 12;
        }
        var time = yyyy + '/' + mm + '/' + dd + ' - ' + hh + ':' + min + ampm;
        $.ajax({
            type: 'GET',
            url: 'https://api.dubtrack.fm/room/' + Dubtrack.room.model.get('_id') + '/users/' + id + '/',
        }).done(function(e) {
            var songsinqueue = e.data.songsInQueue;
            var active = e.data.active;
            var dubs = e.data.dubs;
            var role = 'User';
            if (Dubtrack.room.users.getIfOwner('' + id + '')) {
                role = 'Co-Owner';
            }
            else if (Dubtrack.room.users.getIfManager('' + id + '')) {
                role = 'Manager';
            }
            else if (Dubtrack.room.users.getIfMod('' + id + '')) {
                role = 'Mod';
            }
            else if (Dubtrack.room.users.getIfVIP('' + id + '')) {
                role = 'Vip';
            }
            else if (Dubtrack.room.users.getIfResidentDJ('' + id + '')) {
                role = 'Rdj';
            }
            if (dubs === undefined && active === undefined) {
                addToChat('<span>whois - ' + username + '</span><br><br><span>GLOBAL INFO</span><br><span>Username: ' + username + '</span><br><span>Uuid: ' + id + '</span><br><span>Created: ' + time + '</span><br><span>Locale: ' + locale + '</span><br><span>Role: ' + grole + '</span><br><br><span>ROOM INFO</span><br><span>User Has Never Been In This Room</span>');
            }
            else {
                addToChat('<span>whois - ' + username + '</span><br><br><span>GLOBAL INFO</span><br><span>Username: ' + username + '</span><br><span>Uuid: ' + id + '</span><br><span>Created: ' + time + '</span><br><span>Locale: ' + locale + '</span><br><span>Role: ' + grole + '</span><br><br><span>ROOM INFO</span><br><span>In Room: ' + active + '</span><br><span>Dubs: ' + dubs + '</span><br><span>Songs Queued: ' + songsinqueue + '</span><br><span>Role: ' + role + '</span>');
            }
        });
    });
}

function cmen() {
    if (!options.cmen) {
        $('.INPUT.CMEN').show();
        $('.INPUT.BG').hide();
        $('.INPUT.AFKMSG').hide();
        $('.INPUT.CSS').hide();
        $('.INPUT.AFK').hide();
        options.cmen = true;
    }
    else {
        $('.INPUT.CMEN').hide();
        options.cmen = false;
    }
}

function cmenc() {
    var text = $('.input.cmen').val();
    if (text !== null) {
        storage('cmen', text);
        $('.INPUT.CMEN').hide();
        notification('info', 'Custom mentions set:<br>' + text + '');
    }
}

function cmench(e) {
    var chatid = e.chatid;
    var message = e.message;
    var content = e.message.toLowerCase();
    var user = Dubtrack.session.id;
    var id = e.user.userInfo.userid;
    if (options.cmen) {
        if (options.cmentoggle && user !== id && localStorage.getItem('cmen')) {
            var customMentions = localStorage.getItem('cmen').toLowerCase().split(',');
            if (customMentions.some(function(f) {
                    return content.indexOf(f.trim(' ')) >= 0;
                })) {
                Dubtrack.room.chat.mentionChatSound.play();
                customMentions.forEach(function(a) {
                    var b = $.trim('' + a + '');
                    if (content.indexOf(b)) {
                        var newmsg = message.replace('' + b + '', '<span class="username-handle">' + b + '</span>');
                        var username = $('.chat-id-' + chatid + '').find('.meta-info').find('.username').text();
                        $('.chat-id-' + chatid + '').find('.text').find('p').remove();
                        $('.chat-id-' + chatid + '').find('.text').append('<p><a class="username">' + username + '</a>' + newmsg + '</p>');
                    }
                });
            }
        }
    }
}

function afkmsg() {
    if (!options.afkmsg) {
        $('.INPUT.AFKMSG').show();
        $('.INPUT.CMEN').hide();
        $('.INPUT.BG').hide();
        $('.INPUT.CSS').hide();
        options.afkmsg = true;
    }
    else {
        $('.INPUT.AFKMSG').hide();
        options.afkmsg = false;
    }
}

function afkmsgc() {
    var text = $('.input.afk').val();
    if (text !== null) {
        storage('afkmsg', text);
        $('.INPUT.AFKMSG').hide();
        notification('info', 'AFK message set:<br>' + text + '');
    }
}

function afkch(e) {
    var message = e.message;
    var username = Dubtrack.session.get('username');
    var user = Dubtrack.session.id;
    var id = e.user.userInfo.userid;
    if (message.indexOf('@' + username) > -1 && user !== id) {
        if (options.afktoggle) {
            if (!options.afkto) {
                if (localStorage.getItem('afkmsg')) {
                    var msg = localStorage.getItem('afkmsg');
                    $('#chat-txt-message').val(msg);
                    setTimeout(function() {
                        options.afkto = true;
                        Dubtrack.room.chat.sendMessage();
                    }, 1000);
                }
                setTimeout(function() {
                    options.afkto = false;
                }, 120000);
            }
        }
    }
}

function updatecmen() {
    var cmen = localStorage.getItem('cmen');
    if (cmen !== 'null') {
        $('.input.cmen').val(cmen);
    }
}

function updateafkmsg() {
    var afk = localStorage.getItem('afkmsg');
    if (afk !== 'null') {
        $('.input.afk').val(afk);
    }
}

function updatebg() {
    var bg = localStorage.getItem('bg');
    $('.input.bg').val(bg);
    bgconfirm();
}

function updatecss() {
    var css = localStorage.getItem('ccss');
    $('.input.css').val(css);
    cssconfirm();
}

function afktoggle() {
    if (!options.afktoggle) {
        options.afktoggle = true;
        storage('afktoggle', 'true');
        enable('.afktoggle');
        $('.pusher-chat-widget-input').remove();
        $('.chat-container').append('<div align="center" class="pusher-chat-widget-input" style="display: block;"><div id="new-messages-counter" style="display: none;"><span class="messages-display"></span><i class="icon-arrow-down2"></i></div><div class="chatLogin">Turn Of Afk Message To Chat</div></div>');
    }
    else {
        options.afktoggle = false;
        disable('.afktoggle');
        storage('afktoggle', 'false');
        $('.pusher-chat-widget-input').remove();
        $('.chat-container').append('<div class="pusher-chat-widget-input"><div id="new-messages-counter" style="display: none;"><span class="messages-display"></span> <i class="icon-arrow-down2"></i></div><input id="chat-txt-message" name="message" type="text" placeholder="Join the conversation" autocomplete="off" maxlength="255"><span class="icon-camera"></span><button class="pusher-chat-widget-send-btn"><span class="icon-arrow-right2"></span></button></div>');
    }
}

function cmentoggle() {
    if (!options.cmentoggle) {
        options.cmentoggle = true;
        storage('cmentoggle', 'true');
        enable('.cmentoggle');
    }
    else {
        options.cmentoggle = false;
        storage('cmentoggle', 'false');
        disable('.cmentoggle');
    }
}

function snooze() {
    if (!options.snoozed && Dubtrack.room.player.player_volume_level > 2) {
        options.currentVol = Number(Dubtrack.room.player.player_volume_level);
        Dubtrack.room.player.setVolume(0);
        options.snoozed = true;
        notification('info', 'Snooze enabled<br>Sound muted until next song');
    }
    else if (options.snoozed) {
        Dubtrack.room.player.setVolume(options.currentVol);
        options.snoozed = false;
        notification('info', 'Snooze disabled');
    }
}

function snooze_tooltip() {
    $('.snooze_btn').append('<div class="snooze_tooltip" style="position: absolute;font: 1rem/1.5 proxima-nova,sans-serif;display: block;left: -33px;cursor: pointer;border-radius: 1.5rem;padding: 8px 16px;background: rgba(47,47,47,0.85);font-weight: 700;font-size: 13.6px;color: #fff;text-align: center;z-index: 9;">Mute current song</div>');
}

function hide_snooze_tooltip() {
    $('.snooze_tooltip').remove();
}

// Returns true when song advances
function songadvance(e) {
    if (e.startTime < 2) {
        if (options.snoozed) {
            Dubtrack.room.player.setVolume(options.currentVol);
            options.snoozed = false;
        }
        return true;
    }
}

function volumeScroll() {
    var volume = 0;
    $(".volume, .player_container").bind("mousewheel", function(e){
        var increment = 5;
        if (e.originalEvent.wheelDelta /120 > 0) setVolume(getVolume() + increment);
        else setVolume(getVolume() - increment);
    });
    function setVolume(vol) {
        if (vol <= 0) vol = 0;
        else if (vol >= 100) vol = 100;
        $("#volume-div").slider({value: vol});
    }
    function getVolume() {
        return $("#volume-div").slider("option","value");
    }
}

function notification(type, message) {
    var id = Math.floor(Math.random() * 100);
    var a = [
        '<div align="right" onclick="ntfr(' + id + ');" id="' + id + '" class="toast-top-right" style="display: none;" aria-live="polite" role="alert">',
        '<div class="toast toast-' + type + '" style="display: block;">',
        '<div class="toast-progress" style="width: 100%;"></div>',
        '<button onclick="ntfr(' + id + ');" type="button" class="toast-close-button" role="button">×</button>',
        '<div class="toast-message">' + message + '</div>',
        '</div>',
        '</div>'
    ].join('');
    $('body').append(a);
    $('#' + id + '').fadeToggle('slow');
    setTimeout(function() {
        ntfr(id);
    }, 3500);
}

function ntfr(id) {
    $('#' + id + '').fadeToggle('slow');
    setTimeout(function() {
        $('#' + id + '').remove();
    }, 500);
}

function aj() {
    if (!options.autojoin) {
        enable('.autojoin');
        storage('autojoin', 'true');
        options.autojoin = true;
    }
    else {
        disable('.autojoin');
        storage('autojoin', 'false');
        options.autojoin = false;
    }
}

function autojoin(e) {
    if (options.autojoin && e.startTime < 2) {
        $.ajax({
            type: 'GET',
            url: 'https://api.dubtrack.fm/room/' + Dubtrack.room.model.get('_id') + '/',
        }).done(function(e) {
            if (e.data.recycleDJ === false && $('.queue-position').text() !== "") {
                Dubtrack.room.joinQueue();
                Dubtrack.app.browserView.hideBrowser();
            }
        });
    }
}

function addToChat(e) {
    $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="chatdel(this)"><span class="icon-close"></span></div><div class="text">' + e + '</div></li>');

}

function userHasPerm() {
    return Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id);
}

function hidebackground() {
    if (!options.hidebackground) {
        enable('.hidebackground');
        storage('hidebackground', 'true');
        options.hidebackground = true;
        $('head').append('<link class="hide_background" rel="stylesheet" type="text/css" href="' + gitroot + '/assets/settings/hide_background.css">');
    }
    else {
        disable('.hidebackground');
        storage('hidebackground', 'false');
        options.hidebackground = false;
        $('.hide_background').remove();
    }
}

function boothal() {
    if (!options.boothalert) {
        enable('.boothalert');
        storage('boothalert', 'true');
        options.boothalert = true;
    }
    else {
        disable('.boothalert');
        storage('boothalert', 'false');
        options.boothalert = false;
    }
}

function boothalert(e) {
    if (e.startTime < 2) {
        var position = Number($('.queue-position').text());
        if (position === 2 && options.boothalert) {
            setTimeout(function() {
                notification('info', 'It\'s almost your turn to DJ');
                addToChat('<span>It\'s almost your turn to DJ</span>');
                Dubtrack.room.chat.mentionChatSound.play();
            }, 5500);
        }
    }
}

function hideavatars() {
    if (!options.hideavatars) {
        enable('.avatars');
        options.hideavatars = true;
        storage('avatars', 'true');
        $('head').append('<link class="hideavatars" rel="stylesheet" href="' + gitroot + '/assets/avatars.css">');
    }
    else {
        disable('.avatars');
        storage('avatars', 'false');
        options.hideavatars = false;
        $('.hideavatars').remove();
    }
}

function updateuserarray(e) {
    var user = e.user.username;
    if (e.type === "user-join") {
        men.push('' + user + '');
    }
    else {
        men.splice($.inArray('' + user + '', men), 1);
    }
}

function autocompleteue() {
    if (options.autocomplete) {
        var emoarray = localStorage.getItem('emoarray').toLowerCase().split(',');
        emoarray.forEach(function(e) {
            emo.push('' + e + '');
        });
        Dubtrack.room.users.collection.models.forEach(function(e) {
            var user = e.attributes._user.username;
            men.push('' + user + '');
        });
        $('#chat-txt-message').textcomplete([{
            mentions: men,
            match: /\B@([\-+\w]*)$/,
            search: function(term, callback) {
                callback($.map(this.mentions, function(mention) {
                    return mention.toLowerCase().indexOf(term.toLowerCase()) === 0 ? mention : null;
                }));
            },
            index: 1,
            template: function(value) {
                var id;
                Dubtrack.cache.users.getByUsername('' + value + '', function(err, user) {
                    if (err) {
                        console.log("user not found");
                    }
                    else {
                        id = user.id;
                    }
                });
                return '<img src="https://api.dubtrack.fm/user/' + id + '/image"></img>@' + value + '<span class="a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;press enter to select</span>';
            },
            replace: function(mention) {
                return '@' + mention + ' ';
            }
        }, {
            emojies: emo,
            match: /\B:([\-+\w]*)$/,
            search: function(term, callback) {
                callback($.map(this.emojies, function(emoji) {
                    return emoji.indexOf(term) === 0 ? emoji : null;
                }));
            },
            index: 1,
            template: function(value) {
                return '<img src="https://cdn.dubtrack.fm/assets/emoji/images/emoji/' + value + '.png"></img>:' + value + ':<span class="a">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;press enter to select</span>';
            },
            replace: function(value) {
                return ':' + value + ': ';
            }
        }, ]);
        setInterval(function() {
            if ($(".textcomplete-dropdown").css('display') == 'block') {
                $('.pusher-chat-widget-input').find('input').attr('id', 'disabled-for-autocomplete');
            }
            else if ($(".textcomplete-dropdown").css('display') == 'none') {
                $('.pusher-chat-widget-input').find('input').attr('id', 'chat-txt-message');
            }
        }, 500);
    }
}

function notifyonmention(e) {
    if (options.notifionmention) {
        var chatid = e.chatid;
        var username = $('.chat-id-' + chatid + '').find('.meta-info').find('.username').text();
        var message = e.message;
        var user = Dubtrack.session.get('username').toLowerCase();
        var mentionTriggers = ['@' + user];
        if (options.cmen && localStorage.getItem('cmen')) {
            mentionTriggers = mentionTriggers.concat(localStorage.getItem('cmen').toLowerCase().split(','));
        }
        if (mentionTriggers.some(function(v) {
                return message.toLowerCase().indexOf(v.trim(' ')) >= 0;
            }) && Dubtrack.session.id !== e.user.userInfo.userid) {
            desktopnotif('You were mentioned by ' + username + '', '' + message + '');
        }
    }
}

function desktopnotif(title, body) {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
        var options = {
            body: "" + body + "",
            icon: "https://res.cloudinary.com/hhberclba/image/upload/c_lpad,h_100,w_100/v1400351432/dubtrack_new_logo_fvpxa6.png",
            dir: "ltr"
        };
        var notification = new Notification("" + title + "", options);
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            if (!('permission' in Notification)) {
                Notification.permission = permission;
            }
            if (permission === "granted") {
                var options = {
                    body: "" + body + "",
                    icon: "https://res.cloudinary.com/hhberclba/image/upload/c_lpad,h_100,w_100/v1400351432/dubtrack_new_logo_fvpxa6.png",
                    dir: "ltr"
                };
                var notification = new Notification("" + title + "", options);
            }
        });
    }
}

function bug() {
    $('.INPUT.BUG').show();
}

function bugcancel() {
    $('.INPUT.BUG').hide();
}

function bugconfirm() {
    var message = $('.input.bug').val();
    var id = Dubtrack.realtime.dtPubNub.get_uuid();
    var blocked_ids = ['56cb95dface0345a000c09e2', '56942339fd1d10140015ba74'];
    var blocked;
    blocked_ids.forEach(function(e) {
        blocked = '' + e + '';
    });
    var username = Dubtrack.session.get('username');
    var room = Dubtrack.room.model.get('roomUrl');
    var height = $(window).height();
    var width = $(window).width();
    var funenabled = [];
    if (localStorage.getItem('alertonnav') === 'true') {
        funenabled.push(' Alert On Navigation');
    }
    if (localStorage.getItem('showtimestamp') === 'true') {
        funenabled.push(' Show Time Stamps');
    }
    if (localStorage.getItem('notifionmention') === 'true') {
        funenabled.push(' Desktop Notification');
    }
    if (localStorage.getItem('autoclearchat') === 'true') {
        funenabled.push(' Autoclear Chat');
    }
    if (localStorage.getItem('splitchat') === 'true') {
        funenabled.push(' Split Chat');
    }
    if (localStorage.getItem('autocomplete') === 'true') {
        funenabled.push(' Autocomplete');
    }
    if (localStorage.getItem('autojoin') === 'true') {
        funenabled.push(' Autojoin');
    }
    if (localStorage.getItem('hidebackground') === 'true') {
        funenabled.push(' Hide Background');
    }
    if (localStorage.getItem('afktoggle') === 'true') {
        funenabled.push(' Afk Message');
    }
    if (localStorage.getItem('cmentoggle') === 'true') {
        funenabled.push(' Custom Mentions');
    }
    if (localStorage.getItem('userjoin') === 'true') {
        funenabled.push(' Join Message');
    }
    if (localStorage.getItem('userleave') === 'true') {
        funenabled.push(' Leave Message');
    }
    if (localStorage.getItem('userddub') === 'true') {
        funenabled.push(' Downdub Message');
    }
    if (localStorage.getItem('usergrab') === 'true') {
        funenabled.push(' Grab Message');
    }
    if (localStorage.getItem('userudub') === 'true') {
        funenabled.push(' Updub Message');
    }
    if (localStorage.getItem('boothalert') === 'true') {
        funenabled.push(' Booth Alert');
    }
    if (localStorage.getItem('vote') === 'true') {
        funenabled.push(' Autovote');
    }
    if (localStorage.getItem('randomvote') === 'true') {
        funenabled.push(' Randomvote');
    }
    if (localStorage.getItem('css') === 'true') {
        funenabled.push(' Community Css');
    }
    if (localStorage.getItem('cleardelmsg') === 'true') {
        funenabled.push(' Hide Deleted Message');
    }
    if (localStorage.getItem('avatars') === 'true') {
        funenabled.push(' Hide Avatars');
    }
    if (message.length !== 0) {
        $.ajax({
            type: 'POST',
            url: 'https://hooks.slack.com/services/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',
            data: 'payload={"attachments": [{"fields": [{"title": "Username","value": "' + username + '","short": true},{"title": "Room","value": "' + room + '","short": true},{"title": "ID","value": "' + id + '","short": true},{"title": "Version","value": "' + version + '","short": true},{"title": "Window Size","value": "w:' + width + ', h:' + height + '","short": true},{"title": "Functions Enabled","value": "' + funenabled + '","short": true},{"title": "Message","value": "' + message + '","short": true}],"color": "danger"}], "icon_url": "https://api.dubtrack.fm/user/' + id + '/image"}',
            crossDomain: true
        });
        $('.INPUT.BUG').hide();
    }
}

function suggestion() {
    $('.INPUT.SUGGESTION').show();
}

function suggestioncancel() {
    $('.INPUT.SUGGESTION').hide();
}

function suggestionconfirm() {
    var message = $('.input.suggestion').val();
    var id = Dubtrack.realtime.dtPubNub.get_uuid();
    var blocked_ids = ['56cb95dface0345a000c09e2', '56942339fd1d10140015ba74'];
    var blocked;
    blocked_ids.forEach(function(e) {
        blocked = '' + e + '';
    });
    var username = Dubtrack.session.get('username');
    var room = Dubtrack.room.model.get('roomUrl');
    var height = $(window).height();
    var width = $(window).width();
    var funenabled = [];
    if (localStorage.getItem('alertonnav') === 'true') {
        funenabled.push(' Alert On Navigation');
    }
    if (localStorage.getItem('showtimestamp') === 'true') {
        funenabled.push(' Show Time Stamps');
    }
    if (localStorage.getItem('notifionmention') === 'true') {
        funenabled.push(' Desktop Notification');
    }
    if (localStorage.getItem('autoclearchat') === 'true') {
        funenabled.push(' Autoclear Chat');
    }
    if (localStorage.getItem('splitchat') === 'true') {
        funenabled.push(' Split Chat');
    }
    if (localStorage.getItem('autocomplete') === 'true') {
        funenabled.push(' Autocomplete');
    }
    if (localStorage.getItem('autojoin') === 'true') {
        funenabled.push(' Autojoin');
    }
    if (localStorage.getItem('hidebackground') === 'true') {
        funenabled.push(' Hide Background');
    }
    if (localStorage.getItem('afktoggle') === 'true') {
        funenabled.push(' Afk Message');
    }
    if (localStorage.getItem('cmentoggle') === 'true') {
        funenabled.push(' Custom Mentions');
    }
    if (localStorage.getItem('userjoin') === 'true') {
        funenabled.push(' Join Message');
    }
    if (localStorage.getItem('userleave') === 'true') {
        funenabled.push(' Leave Message');
    }
    if (localStorage.getItem('userddub') === 'true') {
        funenabled.push(' Downdub Message');
    }
    if (localStorage.getItem('usergrab') === 'true') {
        funenabled.push(' Grab Message');
    }
    if (localStorage.getItem('userudub') === 'true') {
        funenabled.push(' Updub Message');
    }
    if (localStorage.getItem('boothalert') === 'true') {
        funenabled.push(' Booth Alert');
    }
    if (localStorage.getItem('vote') === 'true') {
        funenabled.push(' Autovote');
    }
    if (localStorage.getItem('randomvote') === 'true') {
        funenabled.push(' Randomvote');
    }
    if (localStorage.getItem('css') === 'true') {
        funenabled.push(' Community Css');
    }
    if (localStorage.getItem('cleardelmsg') === 'true') {
        funenabled.push(' Hide Deleted Message');
    }
    if (localStorage.getItem('avatars') === 'true') {
        funenabled.push(' Hide Avatars');
    }
    if (message.length !== 0 && id !== blocked) {
        $.ajax({
            type: 'POST',
            url: 'https://hooks.slack.com/services/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',
            data: 'payload={"attachments": [{"fields": [{"title": "Username","value": "' + username + '","short": true},{"title": "Room","value": "' + room + '","short": true},{"title": "ID","value": "' + id + '","short": true},{"title": "Version","value": "' + version + '","short": true},{"title": "Window Size","value": "w:' + width + ', h:' + height + '","short": true},{"title": "Functions Enabled","value": "' + funenabled + '","short": true},{"title": "Message","value": "' + message + '","short": true}],"color": "good"}], "icon_url": "https://api.dubtrack.fm/user/' + id + '/image"}',
            crossDomain: true
        });
        $('.INPUT.SUGGESTION').hide();
    }
}

function log() {
    var username = Dubtrack.session.get('username');
    var room = Dubtrack.room.model.get('roomUrl');
    var id = Dubtrack.realtime.dtPubNub.get_uuid();
    if (username !== null) {
        $.ajax({
            type: 'POST',
            url: 'https://hooks.slack.com/services/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',
            data: 'payload={"username": "' + username + ' enabled cms", "attachments": [{"fields": [{"title": "Username","value": "' + username + '","short": true},{"title": "Room","value": "' + room + '","short": true},{"title": "ID","value": "' + id + '","short": true},{"title": "Version","value": "' + version + '","short": true}],"color": "#93CC5A"}], "icon_url": "https://api.dubtrack.fm/user/' + id + '/image"}',
            crossDomain: true
        });
        window.onbeforeunload = function() {
            localStorage.removeItem('room_css');
            localStorage.removeItem('room_social_icon');
            localStorage.removeItem('room_social_link');
            //localStorage.removeItem('room_emotes');
            $.ajax({
                type: 'POST',
                url: 'https://hooks.slack.com/services/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',
                data: 'payload={"username": "' + username + ' disabled cms", "attachments": [{"fields": [{"title": "Username","value": "' + username + '","short": true},{"title": "Room","value": "' + room + '","short": true},{"title": "ID","value": "' + id + '","short": true},{"title": "Version","value": "' + version + '","short": true}],"color": "#FF4060"}], "icon_url": "https://api.dubtrack.fm/user/' + id + '/image"}',
                crossDomain: true
            });
        };
    }
}

function newmessage() {
    if ($('#new-messages-counter').css('display') === 'block') {
        var count = $('.messages-display').text().slice(0, 2);
        $('.cms-new-message-counter').remove();
        $('.chat_tools').find('.display-chat').append('<i style="font-size: .85rem;margin-left: 5px;color: #545655;font-weight: 700;line-height: .8;font-style: normal;font-weight: 700;margin-left: .4rem;top: -.3rem;position: relative;" class="cms-new-message-counter">+' + count + '</i>');
    }
    else {
        $('.cms-new-message-counter').remove();
    }
}

function showids() {
    if (!options.showids) {
        enable('.showids');
        storage('showids', 'true');
        options.showids = true;
    }
    else {
        disable('.showids');
        storage('showids', 'false');
        options.showids = false;
    }
}

function displayidschat(e) {
    if (options.showids) {
        var chatid = e.chatid;
        var username = e.user.username;
        var id = e.user._id;
        $('.chat-main').find('.chat-id-' + chatid + '').find('.text').find('.username').text('' + username + ' - ' + id + '');
    }
}

function usercontent() {
    setInterval(function() {
        if ($('#user_popover').css('display') === 'block') {
            var username = $('.usercontent').find('h3').text();
            var id = Dubtrack.cache.users.collection.findWhere({
                username: "" + username + ""
            }).id;
            $('.cms-show_ids').remove();
            $('.usercontent header').append('<p class="cms-show_ids" style="margin: 0;font-size: 1rem;color: #ccc;">ID: ' + id + '</p>');
            if (username === 'mitch' || username === 'Kris') {
                $('.usercontent').find('h3').text('' + username + ' - CMS Developer');
            }
            else if (username === 'brcr') {
                $('.usercontent').find('h3').text('' + username + ' - CMS Contributor');
            }
        }
    }, 100);
}

function roomsocial() {
    var icon = localStorage.getItem('room_social_icon');
    var link = localStorage.getItem('room_social_link');
    var append = [
        '<a target="_blank" href="' + link + '"><div title="' + link + '" style="cursor: pointer;width: 50px;height: 50px;position: fixed;right: 20px;top: 80px;">',
        '<img style="border-radius: 15px;" src="' + icon + '">',
        '</div></a>'
    ].join('');
    $('#main-section').append(append);
}

function roomoptions() {
    var location = Dubtrack.room.model.get('roomUrl');
    $.ajax({
        type: 'GET',
        url: 'https://api.dubtrack.fm/room/' + location,
    }).done(function(e) {
        var content = e.data.description;
        var data = '' + content.match(/(@cms=)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/) + '';
        var json = data.split('@cms=')[1].replace(',', '');
        $.ajax({
            type: 'GET',
            beforeSend: function() {
                this.xhrFields.withCredentials = false;
            },
            url: json,
            dataType: "json"
        }).done(function(f) {
            localStorage.setItem('room_css', f.css);
            localStorage.setItem('room_social_icon', f.social.icon);
            localStorage.setItem('room_social_link', f.social.link);
            //localStorage.setItem('room_emotes', f.emotes);
            roomsocial();
        });
    });
}
$('.chat-main').on('DOMNodeInserted', function(e) {
    var itemEl = $(e.target);
    if (itemEl.prop('tagName').toLowerCase() !== 'li' || itemEl.attr('class').substring(0, 'user-'.length) !== 'user-') return;
    var user = Dubtrack.room.users.collection.findWhere({
        userid: itemEl.attr('class').split(/-| /)[1]
    });
    var role = !user.get('roleid') ? 'default' : Dubtrack.helpers.isDubtrackAdmin(user.get('userid')) ? 'admin' : user.get('roleid').type;
    itemEl.addClass('user-role-' + role + '');
});
$('#new-messages-counter').on('click', function() {
    $('.cms-new-message-counter').remove();
});
append();
setTimeout(function() {
    if (Dubtrack.session.get('_id') === '5609dc356c09ec03001e7748') {
        $('body').append('<div class="pizza" style="background: url(http://i.imgur.com/A0qhlG2.gif);"></div>');
    }
    if (localStorage.getItem('showids') === 'true') {
        showids();
    }
    if (localStorage.getItem('menu_main') === 'true') {
        md_main();
    }
    if (localStorage.getItem('menu_contact') === 'true') {
        md_contact();
    }
    if (localStorage.getItem('menu_visibility') === 'true') {
        md_visibility();
    }
    if (localStorage.getItem('menu_notification') === 'true') {
        md_notification();
    }
    if (localStorage.getItem('menu_customization') === 'true') {
        md_customization();
    }
    if (localStorage.getItem('alertonnav') === 'true') {
        alertonnav();
    }
    if (localStorage.getItem('showtimestamp') === 'true') {
        showtimestamp();
    }
    if (localStorage.getItem('notifionmention') === 'true') {
        notifionmention();
    }
    if (localStorage.getItem('autoclearchat') === 'true') {
        autoclearchat();
    }
    if (localStorage.getItem('splitchat') === 'true') {
        splitchat();
    }
    if (localStorage.getItem('autocomplete') === 'true') {
        autocomplete();
    }
    if (localStorage.getItem('autojoin') === 'true') {
        aj();
    }
    if (localStorage.getItem('hidebackground') === 'true') {
        hidebackground();
    }
    if (localStorage.getItem('afktoggle') === 'true') {
        afktoggle();
    }
    if (localStorage.getItem('cmentoggle') === 'true') {
        cmentoggle();
    }
    if (localStorage.getItem('userjoin') === 'true') {
        userjoin();
    }
    if (localStorage.getItem('userleave') === 'true') {
        userleave();
    }
    if (localStorage.getItem('userddub') === 'true') {
        userddub();
    }
    if (localStorage.getItem('boothalert') === 'true') {
        boothal();
    }
    if (localStorage.getItem('usergrab') === 'true') {
        usergrab();
    }
    if (localStorage.getItem('userudub') === 'true') {
        userudub();
    }
    if (localStorage.getItem('vote') === 'true') {
        autovote();
    }
    if (localStorage.getItem('randomvote') === 'true') {
        randomvote();
    }
    if (localStorage.getItem('css') === 'true') {
        setTimeout(function() {
            roomcss();
        }, 2000);
    }
    if (localStorage.getItem('cleardelmsg') === 'true') {
        autocleardelmsg();
    }
    if (localStorage.getItem('avatars') === 'true') {
        hideavatars();
    }
    Dubtrack.Events.bind("realtime:user-ban", updateuserarray);
    Dubtrack.Events.bind("realtime:user-join", updateuserarray);
    Dubtrack.Events.bind("realtime:user-kick", updateuserarray);
    Dubtrack.Events.bind("realtime:user-leave", updateuserarray);
    Dubtrack.Events.bind('realtime:delete-chat-message', msgdatadel);
    Dubtrack.Events.bind('realtime:chat-message', displayidschat);
    Dubtrack.Events.bind('realtime:chat-message', newmessage);
    Dubtrack.Events.bind('realtime:chat-message', notifyonmention);
    Dubtrack.Events.bind('realtime:chat-message', msgdata);
    Dubtrack.Events.bind('realtime:chat-message', afkch);
    Dubtrack.Events.bind('realtime:chat-message', cmench);
    Dubtrack.Events.bind('realtime:chat-message', commands);
    Dubtrack.Events.bind('realtime:user-mute', Muted);
    Dubtrack.Events.bind('realtime:user-unmute', Unmuted);
    Dubtrack.Events.bind('realtime:room_playlist-update', boothalert);
    Dubtrack.Events.bind('realtime:room_playlist-update', autojoin);
    Dubtrack.Events.bind('realtime:room_playlist-update', vote);
    Dubtrack.Events.bind('realtime:room_playlist-update', updatelist);
    Dubtrack.Events.bind('realtime:room_playlist-update', songadvance);
    Dubtrack.Events.bind('realtime:room_playlist-update', autojoin);
    Dubtrack.Events.bind('realtime:room_playlist-dub', dublist);
    Dubtrack.Events.bind('realtime:room_playlist-queue-update-grabs', grablist);
    setTimeout(function() {
        updateuserdata();
    }, 10000);
    roomoptions();
    usercontent();
    log();
    listhover();
    updatecmen();
    updatebg();
    updateafkmsg();
    updatecss();
    volumeScroll();
}, 6000);
