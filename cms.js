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
Parts of this code has been borrowed and rewritten
with permission from the owners of the dubx project
(https://github.com/sinfulBA/DubX-Script)
*/
/*global $*/
/*global Dubtrack*/
var run;
if (!run) {
    run = true;
    var motd = 'Show Deleted Messages';
    var version = 'Version - 11.9.7';
    var username = Dubtrack.session.get('username');
    var options = {
        autovote: false,
        randomvote: false,
        workmode: false,
        chatmode: false,
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
    };

    var gitroot = 'https://chilloutmusica.github.io/cms';
    var functions = {
        fade: function() {
            $('.main_content').fadeToggle('slow');
        },
        menufade: function() {
            if (!options.workfade) {
                $('.main_content').fadeToggle('slow');
            }
        },
        mainmenu: function() {
            var grabs = [
            '<div class="grablist" style="display: none;">',
                    '<center>',
                        '<div class="grablistheader" style="margin-top: 10px;">',
                            '<h1>Grabs</h1>',
                        '</div>',
                        '<div class="grablistpeople" style="margin-top: 10px;margin-bottom:10px;">',
                        '</div>',
                    '</center>',
                '</div>'
            ].join('');
            var updubs = [
                '<div class="updublist" style="display: none;">',
                    '<center>',
                        '<div class="updublistheader" style="margin-top: 10px;">',
                            '<h1>Updubs</h1>',
                        '</div>',
                        '<div class="updublistpeople" style="margin-top: 10px;margin-bottom:10px;">',
                        '</div>',
                    '</center>',
                '</div>'
            ].join('');
            var downdubs = [
                '<div class="downdublist" style="display: none;">',
                    '<center>',
                        '<div class="downdublistheader" style="margin-top: 10px;">',
                            '<h1>Downdubs</h1>',
                        '</div>',
                        '<div class="downdublistpeople" style="margin-top: 10px;margin-bottom:10px;">',
                        '</div>',
                    '</center>',
                '</div>'
            ].join('');
            var dtapi = '<a class="dtapibtn" href="http://docs.dubtrackfmapiv11.apiary.io/" target="blank">Dubtrack API</a>';
            var ebtn = '<a class="CMSEbtn" onclick="functions.fade();">CMS</a>';
            var btn = '<span class="CMSbtn" onclick="functions.fade();" style="margin-left:3px;">CMS</span>';
            var settingbtn = [
                '<span class="chat-option-header">CMS</span>',
                '<div class="chat-option-buttons cmsbtns">',
                    '<span class="cmsbtns" onclick="functions.fade();">Main menu</span>',
                    '<span class="cmsbtns" onclick="functions.chatmode();">Chat mode</span>',
                '</div>'
            ].join('');
            var welcome = [
                '<li class="chat-welcome-message" style="text-align: center; color: #CCC;"><br><br><br>',
                    '<span>Welcome '+username+'!</span><br>',
                    '<span>CMS '+version+'</span><br>',
                    '<span>'+motd+'</span><br><br>',
                    '<span>PLEASE FILL OUT THIS FORM ABOUT THE CURRENT FUNCTIONS</span><br>',
                        '<img class="emoji" src="https://dubtrack-fm.s3.amazonaws.com/assets/emoji/images/emoji/point_right.png" title=":point_right:" alt=":point_right:" align="absmiddle"></img>',
                        '<a target="_blank" href="https://cms3.typeform.com/to/x4jIDC">Here</a>',
                        '<img class="emoji" src="https://dubtrack-fm.s3.amazonaws.com/assets/emoji/images/emoji/point_left.png" title=":point_left:" alt=":point_left:" align="absmiddle"></img>',
                    '</span><br><br><br>',
                '</li>'
            ].join('');
            var mainmenu = [
                '<link rel="stylesheet" type="text/css" href="'+gitroot+'/assets/toast.css">',
                '<link rel="stylesheet" type="text/css" href="'+gitroot+'/assets/main.css">',
                '<div class="main_content">',
                    '<div class="headerbox" onclick="functions.menufade();">',
                        '<span class="main_content_ver"><center>CMS</center></span>',
                        '<span class="main_content_version"><center>'+version+'<br>'+motd+'<br><br>/help - For help about cms!</center></span>',
                    '</div>',
                    '<ul class="main_content_ul">',
                        '<ul>',
                            '<li onclick="functions.autovote();" class="main_content_li main_content_feature autovote">',
                                '<p class="main_content_p">Autovote</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.randomvote();" class="main_content_li main_content_feature randomvote">',
                                '<p class="main_content_p">Random Autovote</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.boothal();" class="main_content_li main_content_feature boothalert">',
                                '<p class="main_content_p">Booth Alert</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.aj();" class="main_content_li main_content_feature autojoin">',
                                '<p class="main_content_p">Auto Join</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.hideavatars();" class="main_content_li main_content_feature avatars">',
                                '<p class="main_content_p">Hide Avatars</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.autoclearchat();" class="main_content_li main_content_feature clearchat">',
                                '<p class="main_content_p">Auto Clear Chat</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.workmode();" class="main_content_li main_content_feature workmode">',
                                '<p class="main_content_p">Work Mode</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.chatmode();" class="main_content_li main_content_feature chatmode">',
                                '<p class="main_content_p">Chat Mode</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.autocleardelmsg();" class="main_content_li main_content_feature autocleardelmsg">',
                                '<p class="main_content_p">Hide Deleted Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            //'<li onclick="functions.acm();" class="main_content_li main_content_feature acm">',
                            //    '<p class="main_content_p">Auto Complete Mentions</p>',
                            //    '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            //'</li>',
                            //'<li onclick="functions.ace();" class="main_content_li main_content_feature ace">',
                            //    '<p class="main_content_p">Auto Complete Emotes</p>',
                            //    '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            //'</li>',
                            '<li onclick="functions.hidebackground();" class="main_content_li main_content_feature hidebackground">',
                                '<p class="main_content_p">Hide Background</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.roomcss();" class="main_content_li main_content_feature roomcss">',
                                '<p class="main_content_p">Community Theme</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.userjoin();" class="main_content_li main_content_feature userjoin">',
                                '<p class="main_content_p">Join Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.userleave();" class="main_content_li main_content_feature userleave">',
                                '<p class="main_content_p">Leave Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.usergrab();" class="main_content_li main_content_feature usergrab">',
                                '<p class="main_content_p">Grab Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.userudub();" class="main_content_li main_content_feature userudub">',
                                '<p class="main_content_p">Updub Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                            '</li>',
                            '<li onclick="functions.afkmsg();" class="main_content_li main_content_feature afkmsg">',
                                '<p class="main_content_p">Custom AFK Message</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT AFKMSG">',
                                '<li>',
                                    '<textarea class="input afk" placeholder="I am currently AFK at the moment."></textarea>',
                                    '<center class="edit">',
                                        '<span class="CMSconfirm" onclick="functions.afkmsgc();" style="float: left;">Confirm</span>',
                                        '<li class="afktoggle"><p onclick="functions.afktoggle();" class="main_content_off edt"><span class="CMSdisabled">Disabled</span></p></li>',
                                    '</center>',
                                '</li>',
                                '<br>',
                            '</div>',
                            '<li onclick="functions.cmen();" class="main_content_li main_content_feature cmen">',
                                '<p class="main_content_p">Custom Mentions</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT CMEN">',
                                '<li>',
                                    '<textarea class="input cmen" placeholder="separate, keywords, by, commas"></textarea>',
                                    '<center class="edit">',
                                        '<span class="CMSconfirm" onclick="functions.cmenc();" style="float: left;">Confirm</span>',
                                        '<li class="cmentoggle"><p onclick="functions.cmentoggle();" class="main_content_off edt"><span class="CMSdisabled">Disabled</span></p></li>',
                                    '</center>',
                                '</li>',
                                '<br>',
                            '</div>',
                            '<li onclick="functions.bginput();" class="main_content_li main_content_feature backgroudme">',
                                '<p class="main_content_p">Custom Background</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT BG">',
                                '<li>',
                                    '<textarea class="input bg" placeholder="https://example.com/example.jpg"></textarea>',
                                    '<center><span class="CMSconfirm" onclick="functions.bgconfirm();">Confirm</span></center>',
                                '</li>',
                                '<br>',
                            '</div>',
                            '<li onclick="functions.cssinput();" class="main_content_li main_content_feature mycss">',
                                '<p class="main_content_p">Custom CSS</p>',
                                '<p class="main_content_off"><span class="CMSdisabled">Edit</span></p>',
                            '</li>',
                            '<div class="INPUT CSS">',
                                '<li>',
                                    '<textarea class="input css" placeholder="https://example.com/example.css"></textarea>',
                                    '<center><span class="CMSconfirm" onclick="functions.cssconfirm();">Confirm</span></center>',
                                '</li>',
                                '<br>',
                            '</div>',
                        '</ul>',
                    '</ul>',
                '</div>'
            ].join('');
            var userddub = [
                '<li onclick="functions.userddub();" class="main_content_li main_content_feature userddub">',
                    '<p class="main_content_p">Downdub Message</p>',
                    '<p class="main_content_off"><span class="CMSdisabled">Disabled</span></p>',
                '</li>'
            ].join('');
            var ac = '<div class="autocomplete" style="display: none;"></div>';
            $('.pusher-chat-widget-input').append(ac);
            setTimeout(function() {
                $('.chat-main').append(welcome);
                $(settingbtn).insertAfter('.chat-option-buttons-sound');
                if (functions.userHasPerm()) {
                    $(userddub).insertAfter('.usergrab');
                    $(downdubs).insertAfter('.updublist');
                }
            }, 5000);
            setTimeout(function() {
                $('.player_sharing').append('<span class="icon-history eta_btn" onclick="functions.eta();" onmouseover="functions.eta_tooltip();" onmouseout="functions.hide_eta_tooltip();"></span>');
                $('.player_sharing').append('<span class="icon-mute snooze_btn" onclick="functions.snooze();" onmouseover="functions.snooze_tooltip();" onmouseout="functions.hide_snooze_tooltip();"></span>');
                // $('.player_sharing').append('<span style="display: inline-block;font-size: 1.4rem;top: -.2rem;position: relative;margin-right: 0.5rem;color: #878c8e;text-transform: uppercase;font-weight: 700;" onclick="functions.eta();" class="eta">ETA</span>');
                // $('.player_sharing').append('<span style="display: inline-block;font-size: 1.4rem;top: -.2rem;position: relative;margin-right: 0rem;color: #878c8e;text-transform: uppercase;font-weight: 700;" onclick="functions.snooze();" class="snooze">SNOOZE</span>');
                $(dtapi).insertAfter('#main-menu-left .navigate.room-active-link');
                $(ebtn).insertAfter('#main-menu-left .navigate.lobby-link');
                $(btn).insertAfter('.player_header .room-info-display');
                $('body').prepend(mainmenu);
                $('body').append(updubs);
                $('body').append(grabs);
                setTimeout(function() {
                    $('.INPUT').hide();
                }, 6000);
            }, 1000);
        },
        downdubhover: function() {
            $('.dubdown').hover(function() {
                options.downdubhover = true;
                if (options.downdubhover) {
                    $('.downdublist').slideToggle("slow");
                }
            });
            $('.dubdown').mouseout(function() {
                options.downdubhover = false;
            });
        },
        downdublist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                if (e.dubtype === "downdub") {
                    $('.dd-user-'+user+'').remove();
                    $('.ud-user-'+user+'').remove();
                    $('.downdublistpeople').append('<p id="user-downdub" class="dd-user-'+user+'">@'+user+'</p>');
                }
            }, 1000);
        },
        updatedowndublist: function(e) {
            if (e.startTime < 2) {
                $('#user-downdub').remove();
            }
        },
        updubhover: function() {
            $('.dubup').hover(function() {
                options.updubhover = true;
                if (options.updubhover) {
                    $('.updublist').slideToggle("slow");
                }
            });
            $('.dubup').mouseout(function() {
                options.updubhover = false;
            });
        },
        updublist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                if (e.dubtype === "updub") {
                    $('.ud-user-'+user+'').remove();
                    $('.dd-user-'+user+'').remove();
                    $('.updublistpeople').append('<p id="user-updub" class="ud-user-'+user+'">@'+user+'</p>');
                }
            }, 1000);
        },
        updateupdublist: function(e) {
            if (e.startTime < 2) {
                $('#user-updub').remove();
            }
        },
        grabhover: function() {
            $('.add-to-playlist-button').hover(function() {
                options.grabhover = true;
                if (options.grabhover) {
                    $('.grablist').slideToggle("slow");
                }
            });
            $('.add-to-playlist-button').mouseout(function() {
                options.grabhover = false;
            });
        },
        grablist: function(e) {
            var user = e.user.username;
            setTimeout(function() {
                $('.g-user-'+user+'').remove();
                $('.grablistpeople').append('<p id="user-grab" class="g-user-'+user+'">@'+user+'</p>');
            }, 1000);
        },
        updategrablist: function(e) {
            if (e.startTime < 2) {
                $('#user-grab').remove();
            }
        },
        autocleardelmsg: function() {
            if (!options.cleardelmsg) {
                functions.enable('.autocleardelmsg');
                options.cleardelmsg = true;
                Dubtrack.Events.bind('realtime:delete-chat-message', functions.cleardelmsg);
                functions.storage('cleardelmsg', 'true');
            } else {
                functions.disable('.autocleardelmsg');
                functions.storage('cleardelmsg', 'false');
                options.cleardelmsg = false;
                Dubtrack.Events.unbind('realtime:delete-chat-message', functions.cleardelmsg);
            }
        },
        cleardelmsg: function() {
            $('.deleted-message').hide();
            $('.deleted').hide();
        },
        msgdata: function(e) {
            var message = e.message;
            var chatid = e.chatid;
            if ($('li').hasClass('chat-id-'+chatid+'')) {
                $('.chat-id-'+chatid+'').attr('data-message', ''+message+'');
            }
        },
        msgdatadel: function(e) {
            var chatid = e.chatid;
            var deleter = e.user.username;
            var username = $('.chat-id-'+chatid+'').find('.username').text().replace(" ", "");
            var message = $('.chat-id-'+chatid+'').attr('data-message');
            $('.chat-id-'+chatid+'').find('.deleted').remove();
            $('.chat-id-'+chatid+'').find('.text').append('<a class="username">@'+username+'\'s message was deleted by @'+deleter+'</a><p class="deleted">'+message+'</p>');
        },
        cssconfirm: function() {
            var text = $('.input.css').val();
            if (text !==null) {
                functions.storage('ccss',text);
                $('.CMSccss').remove();
                $('head').append('<link class="CMSccss" href="'+text+'" rel="stylesheet" type="text/css">');
                $('.INPUT.CSS').hide();
                if(text.length < 50 && text.length !== 0 || text.length === 50) {
                    functions.notification('info', 'Custom CSS set:<br>'+text+'');
                } else if (text.length !== 0) {
                    var shorttext = $('.input.css').val().slice(0,50);
                    functions.notification('info', 'Custom CSS set:<br>'+shorttext+'...');
                }
            }
        },
        cssinput: function() {
            if (!options.inputcss) {
                $('.INPUT.CMEN').hide();
                $('.INPUT.CSS').show();
                $('.INPUT.BG').hide();
                $('.INPUT.AFKMSG').hide();
                options.inputcss = true;
            } else {
                $('.INPUT.CSS').hide();
                options.inputcss = false;
            }
        },
        bgconfirm: function() {
            var text = $('.input.bg').val();
            if (text !==null) {
                functions.storage('bg',text);
                $('.CMSbg').remove();
                $('body').append('<div class="CMSbg" style="background: url('+text+');"></div>');
                $('.INPUT.BG').hide();
                if(text.length < 50 && text.length !== 0 || text.length === 50) {
                    functions.notification('info', 'Custom background set:<br>'+text+'');
                } else if (text.length !== 0) {
                    var shorttext = $('.input.bg').val().slice(0,50);
                    functions.notification('info', 'Custom background set<br>'+shorttext+'...');
                }
            }
        },
        bginput: function() {
            if (!options.inputbg) {
                $('.INPUT.CMEN').hide();
                $('.INPUT.BG').show();
                $('.INPUT.AFKMSG').hide();
                $('.INPUT.CSS').hide();
                options.inputbg = true;
            } else {
                $('.INPUT.BG').hide();
                options.inputbg = false;
            }
        },
        enable: function(theclass) {
            $(theclass + ' .main_content_off').html('<span class="CMSenabled">Enabled</span>');
        },
        disable: function(theclass) {
            $(theclass + ' .main_content_off').html('<span class="CMSdisabled">Disabled</span>');
        },
        storage: function(theclass,state) {
            localStorage.setItem(theclass,state);
        },
        vote: function(e) {
            if (e.startTime < 2) {
                if (options.randomvote) {
                    var min = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text());
                    var sec = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.sec').text());
                    var seconds = 60 * min + sec;
                    var random = Math.floor(Math.random() * seconds) - 1;
                    var timeout = ''+random+'000';
                    var rounded = Math.round(random / 60 * 10);
                    var intomin = rounded / 10;
                    if (intomin % 1 !== 0) {
                        var str = ''+intomin+'';
                        var substr = str.split('.');
                        var minute = ''+substr[0]+'';
                        var second = ''+substr[1]+'0';
                        if (second > 60) {
                            var minu = Number(substr[0]) + 1;
                            var seco = second - 60;
                            if (substr[0] === 0) {
                                functions.notification('info', 'Updub in '+seco+' seconds');
                            } else {
                                functions.notification('info', 'Updub in '+minu+' minutes and '+seco+' seconds');
                            }
                        } else if (substr[0] === 0) {
                            functions.notification('info', 'Updub in '+second+' seconds');
                        } else {
                            functions.notification('info', 'Updub in '+minute+' minutes and '+second+' seconds');
                        }
                    } else {
                        functions.notification('info', 'Updub in '+intomin+' minutes');
                    }
                    setTimeout(function() {
                        Dubtrack.playerController.voteUpAction();
                    }, timeout);
                } else if (options.autovote) {
                    Dubtrack.playerController.voteUpAction();
                }
            }
        },
        randomvote: function() {
            if (!options.randomvote) {
                options.randomvote = true;
                functions.storage('randomvote','true');
                functions.enable('.randomvote');
                if (options.autovote) {
                    options.autovote = false;
                    functions.storage('vote','false');
                    functions.disable('.autovote');
                }
            } else {
                options.randomvote = false;
                functions.storage('randomvote','false');
                functions.disable('.randomvote');
            }
        },
        autovote: function() {
            if (!options.autovote) {
                options.autovote = true;
                functions.storage('vote','true');
                functions.enable('.autovote');
                if (options.randomvote) {
                    options.randomvote = false;
                    functions.storage('randomvote','false');
                    functions.disable('.randomvote');
                }
            } else {
                options.autovote = false;
                functions.storage('vote','false');
                functions.disable('.autovote');
            }
        },
        workmode: function() {
            if (!options.workmode) {
                options.workfade = true;
                options.workmode = true;
                $('#main-room').fadeToggle('slow');
                functions.enable('.workmode');
            } else {
                options.workfade = false;
                options.workmode = false;
                $('#main-room').fadeToggle('slow');
                functions.disable('.workmode');
            }
        },
        chatmode: function() {
            if (!options.chatmode) {
                options.chatmode = true;
                $('#main_player').fadeToggle('slow');
                $('head').append('<link class="chatmodecss" rel="stylesheet" href="'+gitroot+'/assets/chatmode.css">');
                functions.enable('.chatmode');
            } else {
                options.chatmode = false;
                $('#main_player').fadeToggle('slow');
                $('.chatmodecss').remove();
                functions.disable('.chatmode');
            }
        },
        roomcss: function() {
            if (!options.roomcss) {
                options.roomcss = true;
                var location = Dubtrack.room.model.get('roomUrl');
                $.ajax({
                    type: 'GET',
                    url: 'https://api.dubtrack.fm/room/'+location,
                }).done(function(e) {
                    var content = e.data.description;
                    var url = content.match(/(@cms=)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/);
                    var append = url[0].split('@cms=');
                    $('head').append('<link class="CMScss" href="'+append[1]+'" rel="stylesheet" type="text/css">');
                });
                functions.storage('css','true');
                functions.enable('.roomcss');
            } else {
                options.roomcss = false;
                $('.CMScss').remove();
                functions.storage('css','false');
                functions.disable('.roomcss');
            }
        },
        userjoin: function() {
            if(!options.userjoin) {
                options.userjoin = true;
                functions.enable('.userjoin');
                functions.storage('userjoin','true');
                Dubtrack.Events.bind('realtime:user-join', functions.Euserjoin);
            } else {
                options.userjoin = false;
                functions.disable('.userjoin');
                functions.storage('userjoin','false');
                Dubtrack.Events.unbind('realtime:user-join', functions.Euserjoin);
            }
        },
        Euserjoin: function(e) {
            functions.addToChat('<span class="system-userjoin">@'+e.user.username+' just joined</span>');
        },
        userleave: function() {
            if(!options.userleave) {
                options.userleave = true;
                functions.enable('.userleave');
                functions.storage('userleave','true');
                Dubtrack.Events.bind('realtime:user-leave', functions.Euserleave);
            } else {
                options.userleave = false;
                functions.disable('.userleave');
                functions.storage('userleave','false');
                Dubtrack.Events.unbind('realtime:user-leave', functions.Euserleave);
            }
        },
        Euserleave: function(e) {
            functions.addToChat('<span class="system-userleave">@'+e.user.username+' just left</span>');
        },
        usergrab: function() {
            if (!options.usergrab) {
                options.usergrab = true;
                functions.enable('.usergrab');
                functions.storage('usergrab', 'true');
                Dubtrack.Events.bind('realtime:room_playlist-queue-update-grabs', functions.Eusergrab);
            } else {
                options.usergrab = false;
                functions.disable('.usergrab');
                functions.storage('usergrab', 'false');
                Dubtrack.Events.unbind('realtime:room_playlist-queue-update-grabs', functions.Eusergrab);
            }
        },
        Eusergrab: function(e) {
            functions.addToChat('<span class="system-usergrab">@'+e.user.username+' grabbed this song</span>');
        },
        userudub: function() {
            if(!options.userudub) {
                options.userudub = true;
                functions.enable('.userudub');
                functions.storage('userudub','true');
                Dubtrack.Events.bind('realtime:room_playlist-dub', functions.Euserudub);
            } else {
                options.userudub = false;
                functions.disable('.userudub');
                functions.storage('userudub','false');
                Dubtrack.Events.unbind('realtime:room_playlist-dub', functions.Euserudub);
            }
        },
        Euserudub: function(e) {
            if (e.dubtype === "updub") {
                functions.addToChat('<span class="system-userudub">@'+e.user.username+' updubbed this song</span>');
            }
        },
        userddub: function() {
            if (functions.userHasPerm()) {
                if(!options.userddub) {
                    options.userddub = true;
                    functions.enable('.userddub');
                    functions.storage('userddub','true');
                    Dubtrack.Events.bind('realtime:room_playlist-dub', functions.Euserddub);
                } else {
                    options.userddub = false;
                    functions.disable('.userddub');
                    functions.storage('userddub','false');
                    Dubtrack.Events.unbind('realtime:room_playlist-dub', functions.Euserddub);
                }
            } else {
                options.userddub = false;
                functions.disable('.userddub');
                Dubtrack.Events.unbind('realtime:room_playlist-dub', functions.Euserddub);
            }
        },
        Euserddub: function(e) {
            if (functions.userHasPerm()) {
                if (e.dubtype === "downdub") {
                    functions.addToChat('<span class="system-userddub">@'+e.user.username+' downdubbed this song</span>');
                }
            }
        },
        Muted: function(e) {
            if (functions.userHasPerm()) {
                var username = e.user.username;
                var muted = e.mutedUser.username;
                functions.addToChat('<span class="system-mute">@'+muted+' was muted by @'+username+'</span>');
            }
        },
        Unmuted: function(e) {
            if (functions.userHasPerm()) {
                var username = e.user.username;
                var muted = e.mutedUser.username;
                functions.addToChat('<span class="system-mute">@'+muted+' was unmuted by @'+username+'</span>');
            }
        },
        autoclearchat: function() {
            if (!options.autoclearchat) {
                options.autoclearchat = true;
                functions.enable('.clearchat');
                functions.storage('autoclearchat','true');
                options.clearchat = true;
                functions.clearchat();
            } else {
                options.autoclearchat = false;
                functions.disable('.clearchat');
                functions.storage('autoclearchat','false');
                options.clearchat = false;
            }
        },
        clearchat: function() {
            if (options.clearchat) {
                setInterval(function() {
                    $('.clearChatToggle').click();
                    setTimeout(function() {
                        functions.notification('info', 'Chat cleared automatically by CMS');
                    }, 1000);
                }, 1800000);
            }
        },
        chatdel: function(e) {
            $(e).parent('li')[0].remove();
        },
        scrolltobottom: function() {
            $('#new-messages-counter').click();
        },
        commands: function(e) {
            var message = e.message;
            var id = Dubtrack.session.id;
            var user = e.user.userInfo.userid;
            if (message.indexOf('/help') >-1 && id === user) {
                var help = [
                    '<li class="system">',
                        '<div class="chatDelete" onclick="functions.chatdel(this)"><span class="icon-close"></span></div>',
                            '<br>',
                        '<span>CMS HELP</span>',
                            '<br>',
                            '<br>',
                        '<span><a target="_blank" href="https://mitchdev.net/cms/o/">CMS Options Help</a></span>',
                            '<br>',
                            '<br>',
                        '<span>/commands - Displays a list of CMS chat commands</span>',
                            '<br>',
                    '</li>'
                ].join('');
                $('.chat-main').append(help);
            }
            if (message.indexOf('/commands') >-1 && id === user) {
                var commands = [
                    '<li class="system">',
                        '<div class="chatDelete" onclick="functions.chatdel(this)"><span class="icon-close"></span></div>',
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
            }
            if (message.indexOf("/whois ") === 0 && id === user) {
                message.replace(/( [A-Za-z0-9_.]+)/g, function(str) {
                    var name = ''+str+'';
                    var username = name.substr(1);
                    functions.whois(username);
                });
            }
            if (message.indexOf("/whois @") === 0 && id === user) {
                message.replace(/(@[A-Za-z0-9_.]+)/g, function(str) {
                    var name = ''+str+''.replace("@", "");
                    var username = name.substr(1);
                    functions.whois(username);
                });
            }
            if (message.indexOf("/volume ") === 0 && id === user) {
                message.replace(/( [A-Za-z0-9_.]+)/g, function(number) {
                    Dubtrack.room.player.setVolume(number);
                    $('.ui-slider-handle').css('left',  ''+number+'px');
                    $('.ui-slider-range').css('width', ''+number+'%');
                });
            }
            if (message.indexOf("/whoami") >-1 && id === user) {
                var username = Dubtrack.session.get('username');
                functions.whois(username);
            }
            if (message.indexOf("/eta") >-1 && id === user) {
                functions.eta();
            }
        },
        eta: function() {
            var average = 4;
            var mins = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.min').text());
            var sec = Number($('#player-controller div.left ul li.infoContainer.display-block div.currentTime span.sec').text());
            var position = Number($('.queue-position').text());
            var eta = position * average - average + mins;
            if (eta >= 0 && eta !== 0) {
                functions.notification('info', 'ETA: Less than '+eta+' minutes');
            } else if (eta === 0) {
                functions.notification('info', 'ETA: '+sec+' seconds');
            } else {
                functions.notification('info', 'ETA: You\'re not in the queue');
            }
        },
        eta_tooltip: function() {
            $('.snooze_btn').append('<div class="eta_tooltip" style="position: absolute;font: 1rem/1.5 proxima-nova,sans-serif;display: block;left: -33px;cursor: pointer;border-radius: 1.5rem;padding: 8px 16px;background: rgba(47,47,47,0.85);font-weight: 700;font-size: 13.6px;color: #fff;text-align: center;z-index: 9;">Show ETA</div>');
        },
        hide_eta_tooltip: function() {
            $('.eta_tooltip').remove();
        },
        whois: function(username) {
            $.ajax({
                type: 'GET',
                url: 'https://api.dubtrack.fm/user/'+username+'/',
            }).done(function(e) {
                var id = e.data._id;
                var locale = e.data.userInfo.locale;
                $.ajax({
                    type: 'GET',
                    url: 'https://api.dubtrack.fm/room/'+Dubtrack.room.model.get('_id')+'/users/'+id+'/',
                }).done(function(e) {
                    var songsinqueue = e.data.songsInQueue;
                    var active = e.data.active;
                    var dubs = e.data.dubs;
                    var username = e.data._user.username;
                    var cr = ''+e.data._user.created+'';
                    var created = cr.substr(0, cr.length-3);
                    var role = 'User';
                    if (Dubtrack.room.users.getIfOwner(''+id+'')) {
                        role = 'Co-Owner';
                    } else if (Dubtrack.room.users.getIfManager(''+id+'')) {
                        role = 'Manager';
                    } else if (Dubtrack.room.users.getIfMod(''+id+'')) {
                        role = 'Mod';
                    } else if (Dubtrack.room.users.getIfVIP(''+id+'')) {
                        role = 'Vip';
                    } else if (Dubtrack.room.users.getIfResidentDJ(''+id+'')) {
                        role = 'Rdj';
                    }
                    var grole = 'User';
                    if (Dubtrack.helpers.isDubtrackAdmin(''+id+'')) {
                        grole = 'Admin';
                    }
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
                    } else if (hh === 12) {
                        h = 12;
                        ampm = 'PM';
                    } else if (hh === 0) {
                        h = 12;
                    }
                    var time = yyyy+'/'+mm+'/'+dd+' - '+hh+':'+min+ampm;
                    functions.addToChat('<span>whois - '+username+'</span><br><br><span>GLOBAL INFO</span><br><span>Username: '+username+'</span><br><span>Uuid: '+id+'</span><br><span>Created: '+time+'</span><br><span>Locale: '+locale+'</span><br><span>Role: '+grole+'</span><br><br><span>ROOM INFO</span><br><span>In Room: '+active+'</span><br><span>Dubs: '+dubs+'</span><br><span>Songs Queued: '+songsinqueue+'</span><br><span>Role: '+role+'</span>');
               });
            });
        },
        cmen: function() {
            if (!options.cmen) {
                $('.INPUT.CMEN').show();
                $('.INPUT.BG').hide();
                $('.INPUT.AFKMSG').hide();
                $('.INPUT.CSS').hide();
                $('.INPUT.AFK').hide();
                options.cmen = true;
            } else {
                $('.INPUT.CMEN').hide();
                options.cmen = false;
            }
        },
        cmenc: function() {
            var text = $('.input.cmen').val();
            if (text !== null) {
                functions.storage('cmen',text);
                $('.INPUT.CMEN').hide();
                functions.notification('info', 'Custom mentions set:<br>'+text+'');
            }
        },
        cmench: function(e) {
            console.log(e);
            var chatid = e.chatid;
            var message = e.message;
            var content = e.message.toLowerCase();
            var user = Dubtrack.session.id;
            var id = e.user.userInfo.userid;
            if (options.cmen) {
                if (options.cmentoggle && user !== id && localStorage.getItem('cmen')) {
                    var customMentions = localStorage.getItem('cmen').toLowerCase().split(',');
                    if (customMentions.some(function(f) {return content.indexOf(f.trim(' ')) >= 0;})) {
                        Dubtrack.room.chat.mentionChatSound.play();
                        customMentions.forEach(function(a) {
                            var mention = a.trim();
                            if (content.indexOf(mention) >= 0) {
                                var newmsg = message.replace(''+a+'', '<span class="username-handle">'+a+'</span>');
                                console.log(message);
                                console.log(a);
                                console.log(newmsg);
                                console.log(chatid);
                                var username = $('.chat-id-'+chatid+'').find('.meta-info').find('.username').text();
                                console.log(username);
                                $('.chat-id-'+chatid+'').find('.text').find('p').remove();
                                $('.chat-id-'+chatid+'').find('.text').append('<p><a class="username">'+username+'</a>'+newmsg+'</p>');
                            }
                        });
                    }
                }
            }
        },
        afkmsg: function() {
            if (!options.afkmsg) {
                $('.INPUT.AFKMSG').show();
                $('.INPUT.CMEN').hide();
                $('.INPUT.BG').hide();
                $('.INPUT.CSS').hide();
                options.afkmsg = true;
            } else {
                $('.INPUT.AFKMSG').hide();
                options.afkmsg = false;
            }
        },
        afkmsgc: function() {
            var text = $('.input.afk').val();
            if (text !== null) {
                functions.storage('afkmsg',text);
                $('.INPUT.AFKMSG').hide();
                functions.notification('info', 'AFK message set:<br>'+text+'');
            }
        },
        afkch: function(e) {
            var message = e.message;
            var username = Dubtrack.session.get('username');
            var user = Dubtrack.session.id;
            var id = e.user.userInfo.userid;
            if (message.indexOf('@'+username) >-1 && user !== id) {
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
        },
        updatecmen: function() {
            var cmen = localStorage.getItem('cmen');
            if (cmen !== 'null') {
                $('.input.cmen').val(cmen);
            }
        },
        updateafkmsg: function() {
            var afk = localStorage.getItem('afkmsg');
            if (afk !== 'null') {
                $('.input.afk').val(afk);
            }
        },
        updatebg: function() {
            var bg = localStorage.getItem('bg');
            if (bg !== 'null') {
                $('.input.bg').val(bg);
                $('body').append('<div class="CMSbg" style="background: url('+bg+');"></div>');
            }
        },
        updatecss: function() {
            var css = localStorage.getItem('ccss');
            if (css !== 'null') {
                $('.input.css').val(css);
                $('head').append('<link class="CMSccss" href="'+css+'" rel="stylesheet" type="text/css">');
            }
        },
        afktoggle: function() {
            if (!options.afktoggle) {
                options.afktoggle = true;
                functions.enable('.afktoggle');
            } else {
                options.afktoggle = false;
                functions.disable('.afktoggle');
            }
        },
        cmentoggle: function() {
            if (!options.cmentoggle) {
                options.cmentoggle = true;
                functions.storage('cmentoggle','true');
                functions.enable('.cmentoggle');
            } else {
                options.cmentoggle = false;
                functions.storage('cmentoggle','false');
                functions.disable('.cmentoggle');
            }
        },
        snooze: function() {
            if (!options.snoozed && Dubtrack.room.player.player_volume_level > 2) {
                options.currentVol = Number(Dubtrack.room.player.player_volume_level);
                Dubtrack.room.player.setVolume(0);
                options.snoozed = true;
                functions.notification('info', 'Snooze enabled<br>Sound muted until next song');
            } else if (options.snoozed) {
                Dubtrack.room.player.setVolume(options.currentVol);
                options.snoozed = false;
                functions.notification('info', 'Snooze disabled');
            }
        },
        snooze_tooltip: function() {
            $('.snooze_btn').append('<div class="snooze_tooltip" style="position: absolute;font: 1rem/1.5 proxima-nova,sans-serif;display: block;left: -33px;cursor: pointer;border-radius: 1.5rem;padding: 8px 16px;background: rgba(47,47,47,0.85);font-weight: 700;font-size: 13.6px;color: #fff;text-align: center;z-index: 9;">Mute current song</div>');
        },
        hide_snooze_tooltip: function() {
            $('.snooze_tooltip').remove();
        },
        songadvance: function(e) {
            if (e.startTime < 2) {
                if (options.snoozed) {
                    Dubtrack.room.player.setVolume(options.currentVol);
                    options.snoozed = false;
                }
                return true;
            }
        },
        notification: function(type, message) {
            var id = Math.floor(Math.random() * 100);
            var a = [
                    '<div align="right" onclick="functions.ntfr('+id+');" id="'+id+'" class="toast-top-right" style="display: none;" aria-live="polite" role="alert">',
                        '<div class="toast toast-'+type+'" style="display: block;">',
                            '<div class="toast-progress" style="width: 100%;"></div>',
                            '<button onclick="functions.ntfr('+id+');" type="button" class="toast-close-button" role="button">×</button>',
                            '<div class="toast-message">'+message+'</div>',
                        '</div>',
                    '</div>'
                ].join('');
            $('body').append(a);
            $('#'+id+'').fadeToggle('slow');
            setTimeout(function() {
                functions.ntfr(id);
            }, 3500);
        },
        ntfr: function(id) {
            $('#'+id+'').fadeToggle('slow');
            setTimeout(function() {
                $('#'+id+'').remove();
            }, 500);
        },
        aj: function() {
            if (!options.autojoin) {
                functions.enable('.autojoin');
                functions.storage('autojoin', 'true');
                options.autojoin = true;
            } else {
                functions.disable('.autojoin');
                functions.storage('autojoin', 'false');
                options.autojoin = false;
            }
        },
        autojoin: function(e) {
            if (options.autojoin && e.startTime < 2) {
                $.ajax({
                    type: 'GET',
                    url: 'https://api.dubtrack.fm/room/'+Dubtrack.room.model.get('_id')+'/',
                }).done(function(e) {
                    if (e.data.recycleDJ === false && $('.queue-position').text() !== "") {
                        Dubtrack.room.joinQueue();
                        Dubtrack.app.browserView.hideBrowser();
                    }
                });
            }
        },
        //ace: function() {
        //    functions.notification('error', 'This feature is currently unavailable');
        //},
        //acm: function() {
        //    functions.notification('error', 'This feature is currently unavailable');
        //},
        addToChat: function(e) {
            $('.chat-main').append('<li class="system"><div class="chatDelete" onclick="functions.chatdel(this)"><span class="icon-close"></span></div><div class="text">'+e+'</div></li>');
            
        },
        userHasPerm: function() {
            return Dubtrack.room.users.getIfMod(Dubtrack.session.id) || Dubtrack.room.users.getIfManager(Dubtrack.session.id) || Dubtrack.room.users.getIfOwner(Dubtrack.session.id);
        },
        hidebackground: function() {
            if (!options.hidebackground) {
                functions.enable('.hidebackground');
                functions.storage('hidebackground', 'true');
                options.hidebackground = true;
                $('head').append('<link class="hide_background" rel="stylesheet" type="text/css" href="'+gitroot+'/assets/settings/hide_background.css">');
            } else {
                functions.disable('.hidebackground');
                functions.storage('hidebackground', 'false');
                options.hidebackground = false;
                $('.hide_background').remove();
            }
        },
        boothal: function() {
            if (!options.boothalert) {
                functions.enable('.boothalert');
                functions.storage('boothalert', 'true');
                options.boothalert = true;
            } else {
                functions.disable('.boothalert');
                functions.storage('boothalert', 'false');
                options.boothalert = false;
            }
        },
        boothalert: function(e) {
            if (e.startTime < 2) {
                var position = Number($('.queue-position').text());
                if (position === 2 && options.boothalert) {
                    setTimeout(function() {
                        functions.notification('info', 'It\'s almost your turn to DJ');
                        functions.addToChat('<span>It\'s almost your turn to DJ</span>');
                        Dubtrack.room.chat.mentionChatSound.play();
                    }, 5500);
                }
            }
        },
        hideavatars: function() {
            if (!options.hideavatars) {
                functions.enable('.avatars');
                options.hideavatars = true;
                functions.storage('avatars', 'true');
                $('head').append('<link class="hideavatars" rel="stylesheet" href="'+gitroot+'/assets/avatars.css">');
            } else {
                functions.disable('.avatars');
                functions.storage('avatars', 'false');
                options.hideavatars = false;
                $('.hideavatars').remove();
            }
        }
        //autocompleteuser: function() {
        //    setTimeout(function() {
        //        Dubtrack.room.users.collection.models.forEach(function(e) {
        //            var user = e.attributes._user.username;
        //            var id = e.attributes._user._id;
        //            var append = [
        //                '<div class="autocompleteuser">',
        //                    '<div class="autocompleteuser-image">',
        //                        '<img src="https://api.dubtrack.fm/user/'+id+'/image">',
        //                    '</div>',
        //                    '<span class="autocompleteuser-name" id="'+user.toLowerCase()+'">@'+user.toLowerCase()+'</span>',
        //                '</div>'
        //            ].join('');
        //            $('.autocomplete').append(append);
        //        });
        //    }, 2000);
        //},
    };
    
    functions.mainmenu();
    setTimeout(function() {
        if (Dubtrack.session.get('_id') === '5609dc356c09ec03001e7748') {
            $('body').append('<div class="pizza" style="background: url(http://i.imgur.com/A0qhlG2.gif);"></div>');
        }
        if (localStorage.getItem('autoclearchat') === 'true') {
            functions.autoclearchat();
        }
        if (localStorage.getItem('autojoin') === 'true') {
            functions.aj();
        }
        if (localStorage.getItem('hidebackground') === 'true') {
            functions.hidebackground();
        }
        if (localStorage.getItem('afktoggle') === 'true') {
            functions.afktoggle();
        }
        if (localStorage.getItem('cmentoggle') === 'true') {
            functions.cmentoggle();
        }
        if (localStorage.getItem('userjoin') === 'true') {
            functions.userjoin();
        }
        if (localStorage.getItem('userleave') === 'true') {
            functions.userleave();
        }
        if (localStorage.getItem('userddub') === 'true') {
            functions.userddub();
        }
        if (localStorage.getItem('boothalert') === 'true') {
            functions.boothal();
        }
        if (localStorage.getItem('usergrab') === 'true') {
            functions.usergrab();
        }
        if (localStorage.getItem('userudub') === 'true') {
            functions.userudub();
        }
        if (localStorage.getItem('vote') === 'true') {
            functions.autovote();
        }
        if (localStorage.getItem('randomvote') === 'true') {
            functions.randomvote();
        }
        if (localStorage.getItem('css') === 'true') {
            functions.roomcss();
        }
        if (localStorage.getItem('cleardelmsg') === 'true') {
            functions.autocleardelmsg();
        }
        if (localStorage.getItem('avatars') === 'true') {
            functions.hideavatars();
        }
        if (localStorage.getItem('cmen')) {
            functions.cmen();
        }
        if (localStorage.getItem('afkmsg')) {
            functions.afkmsg();
        }
        
        Dubtrack.Events.bind('realtime:delete-chat-message', functions.msgdatadel);
        Dubtrack.Events.bind('realtime:chat-message', functions.msgdata);
        Dubtrack.Events.bind('realtime:chat-message', functions.afkch);
        Dubtrack.Events.bind('realtime:chat-message', functions.cmench);
        Dubtrack.Events.bind('realtime:chat-message', functions.commands);
        Dubtrack.Events.bind('realtime:user-mute', functions.Muted);
        Dubtrack.Events.bind('realtime:user-unmute', functions.Unmuted);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.boothalert);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.autojoin);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.vote);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.updateupdublist);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.updatedowndublist);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.updategrablist);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.songadvance);
        Dubtrack.Events.bind('realtime:room_playlist-update', functions.autojoin);
        Dubtrack.Events.bind('realtime:room_playlist-dub', functions.updublist);
        Dubtrack.Events.bind('realtime:room_playlist-dub', functions.downdublist);
        Dubtrack.Events.bind('realtime:room_playlist-queue-update-grabs', functions.grablist);
        
        //functions.autocompleteuser();
        functions.grabhover();
        functions.downdubhover();
        functions.updubhover();
        functions.updatecmen();
        functions.updatebg();
        functions.updateafkmsg();
        functions.updatecss();
        functions.notification('success', 'CMS loaded successfully.<br>'+version+'<br>Welcome '+Dubtrack.session.get('username')+'');
    }, 6000);
} else {
    functions.notification('error', 'Sorry '+Dubtrack.session.get('username')+'<br>CMS is already running');
}
