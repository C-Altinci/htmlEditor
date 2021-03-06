/*
Product: Web HTML Editor. v 1.0
Author: �a�layan ALTINCI
E-Mail: caglayana@hotmail.com
Freeware script.
*/
function createEditor(txtAreaIDs, opt) {
    String.prototype.paddingLeft = function (n, str) {
        var color = this.toString(); n = n || 1; color = color.replace(/[^0-9a-f]/gi, '');
        return "#".concat(Array(n - String(color).length + 1).join(str || '0') + color);
    };
    /*------------ Editor Language --------------------*/
    var lngTR = {
        'buttonsXhtml': 'HTML-Kaynak',
        'buttonsBold': 'Kal�n yaz�',
        'buttonsItalic': 'Yat�k yaz�',
        'buttonsUnderline': 'Alt �izgili yaz�',
        'buttonsForecolor': 'Karakter rengi',
        'buttonsBgcolor': 'Arka plan rengi',
        'buttonsLeft': 'Sola yasla',
        'buttonsCenter': 'Ortala',
        'buttonsRight': 'Sa�a yasla',
        'buttonsJustify': '�ki yana yasla',
        'buttonsOl': 'S�ral� liste',
        'buttonsUl': 'S�ras�z liste',
        'buttonsSubscript': 'Alt simge',
        'buttonsSuperscript': '�st simge',
        'buttonsStrikethrough': '�st� �izgili yaz�',
        'buttonsRemoveformat': 'Bi�imlendirmeyi kald�r',
        'buttonsIndent': 'Girinti',
        'buttonsOutdent': 'Girintiyi kald�r',
        'buttonsHr': 'Yatay �izgi',
        'buttonsLink': 'K�pr� ekle/d�zenle',
        'buttonsUnlink': 'K�pr�y� kald�r',
        'buttonsInsertImage': 'Resim ekle/d�zenle',
        'buttonsYoutube': 'Youtube video ekle',
        'buttonsTwitter': 'Tweet ekle',
        'buttonsFacebook': 'Facebook g�nderi ekle',
        'buttonsFontSize': 'Karakter b�y�kl���',
        'buttonsFontFamily': 'Karakter t�r�',
        'buttonsFormatBlock': 'Sat�r bi�imi',
        'buttonsParagraf': 'Paragraf',
        'buttonsTicket': 'Etiket',
        'buttonsPreview': '�nizleme',
        'buttonsVideo': 'Video ekle',
        'buttonsAudio': 'Audio ekle',
        'buttonsFullScreen': 'Tam Ekran',
        'buttonsRestoreScreen': '�nceki Ekran',
        'buttonsSubtitleimage': 'Alt yaz�l� resim',
        'buttonsInfo': 'Hakk�nda',
        'formsInfoDescription': '�r�n: Web HTML Editor. v 1.0<br />Yazar: �a�layan ALTINCI<br />E-Posta: caglayana@hotmail.com',
        'alertsMultipleID': 'Birden fazla ayn� ID kullanan textarea.\nID de�erleri:',
        'alertsUsedPreviously': 'Bu eleman daha �nce kullan�lm��.\nID: [',
        'alertsElementsNotFound': "' ID de�erli eleman bulunamad�.",
        'alertsCreateLink': 'Ba�lant� olu�turabilmek i�in ge�erli bir URL girmeniz gerekir.',
        'alertsCreateImage': 'Resim olu�turabilmek i�in ge�erli bir URL girmeniz gerekir.',
        'alertsCreateYoutube': 'Youtube video olu�turabilmek i�in ge�erli bir URL girmeniz gerekir.',
        'alertsCreateTweet': 'Tweet olu�turabilmek i�in ge�erli bir URL girmeniz gerekir.',
        'alertsCreateVideo': 'URL veya dosya t�r� ge�ersiz.\nGe�erli video t�rleri: .mp4 .mpeg .mpg .webm .ogg',
        'alertsCreateAudio': 'URL veya dosya t�r� ge�ersiz.\nGe�erli ses dosyas� t�rleri: .mp3 .wav .ogg',
        'alertsCreateFacebook': 'Facebook g�nderi olu�turabilmek i�in ge�erli bir URL girmeniz gerekir.',
        'alertsCreateParagraf': '��erikten bir se�im yapmal�s�n�z.',
        'alertsCreateTicket': '��erikten bir se�im yapmal�s�n�z.',
        'alertsDuplicateButton': 'Yinelenen buton adlar� \nButonlar: '
    };
    var lngEN = {
        'buttonsXhtml': 'HTML-Source',
        'buttonsBold': 'Bold',
        'buttonsItalic': 'Italic',
        'buttonsUnderline': 'Underline',
        'buttonsForecolor': 'Fore Color',
        'buttonsBgcolor': 'Back Color',
        'buttonsLeft': 'Align Left',
        'buttonsCenter': 'Align Center',
        'buttonsRight': 'Align Right',
        'buttonsJustify': 'Align Justify',
        'buttonsOl': 'Insert Ordered List',
        'buttonsUl': 'Insert Unordered List',
        'buttonsSubscript': 'Subscript',
        'buttonsSuperscript': 'Superscript',
        'buttonsStrikethrough': 'Strike Through',
        'buttonsRemoveformat': 'Remove Formatting',
        'buttonsIndent': 'Indent Text',
        'buttonsOutdent': 'Remove Indent',
        'buttonsHr': 'Horizontal Rule',
        'buttonsLink': 'Add/edit Link',
        'buttonsUnlink': 'Remove Link',
        'buttonsInsertImage': 'Insert/Edit Image',
        'buttonsYoutube': 'Add Youtube video',
        'buttonsTwitter': 'Add Tweet',
        'buttonsFacebook': 'Add Facebook post',
        'buttonsFontSize': 'Select Font Size',
        'buttonsFontFamily': 'Select Font Family',
        'buttonsFormatBlock': 'Select Font Format',
        'buttonsParagraf': 'Paragraph',
        'buttonsTicket': 'Ticket',
        'buttonsPreview': 'Preview',
        'buttonsVideo': 'Add Video',
        'buttonsAudio': 'add Audio',
        'buttonsFullScreen': 'Full Screen',
        'buttonsRestoreScreen': 'Restore Screen',
        'buttonsSubtitleimage': 'Sub title image',
        'buttonsInfo': 'About',
        'formsInfoDescription': 'Product: Web HTML Editor. v 1.0<br />Author: �a�layan ALTINCI<br />E-Mail: caglayana@hotmail.com',
        'alertsMultipleID': 'Multiple same ID enabled textarea.\nID values:',
        'alertsUsedPreviously': 'These element used previously.\nID: [',
        'alertsElementsNotFound': "' ID valuable element not found.",
        'alertsCreateLink': 'To create a link, you must enter a valid URL.',
        'alertsCreateImage': 'To create a image, you must enter a valid URL.',
        'alertsCreateYoutube': 'To create a Youtube video, you must enter a valid URL.',
        'alertsCreateTweet': 'To create a Tweet, you must enter a valid URL.',
        'alertsCreateVideo': 'Invalid URL or file type. \nCurrent video file types: .mpg, .mpeg, .mp4, .ogg .webm',
        'alertsCreateAudio': 'Invalid URL or file type..\nCurrent audio file types: .mp3 .wav .ogg',
        'alertsCreateFacebook': 'You must enter a URL to Create a You Facebook post.',
        'alertsCreateParagraf': 'You must make a choice of content.',
        'alertsCreateTicket': 'You must make a choice of content.',
        'alertsDuplicateButton': 'Duplicate button names.\nButtons: '
    };
    var navLang = navigator.language || navigator.userLanguage;
    var edLang = {};
    switch (navLang) {
        case "tr": case "tr-TR":
            edLang = (typeof lngTR != 'undefined') ? lngTR : lngEN; break;
        default:
            edLang = (typeof lngEN != 'undefined') ? lngEN : lngTR;
    };
    /*-- theme --------*/
    var theme = (opt && opt.theme && isHexColor(opt.theme)) ? opt.theme : '#cccccc'; theme = theme.paddingLeft(6);
    var gradient = (opt && opt.gradient) ? opt.gradient : false, invertBorderColor = invertColor(theme);
    var darkColor = theme, lightColor = lightenColor(theme, 0.80), hoverColor = lightenColor(lightColor, -0.15);
    /*-- checking all editors --------*/
    var dups = [], arrData = [];
    if (Array.isArray(txtAreaIDs) && txtAreaIDs.length > 0) {
        dups = dupIds(arrData);
        if (dups.length > 0) { alert(edLang.alertsMultipleID + dups.toString()); return };
        var txa = Array.prototype.slice.call(txtAreaIDs);
        txa.forEach(function (id) { htmlEditor(id, opt); });
    }
    else {
        var textAreas = document.getElementsByTagName("textarea"); for (i = 0; i < textAreas.length; i++) { var txtElement = textAreas[i], txtAreaID = ''; txtAreaID = txtElement.getAttribute("id"); if (!txtAreaID) { txtAreaID = 'edTextArea-' + i; txtElement.setAttribute("id", txtAreaID); }; arrData.push(txtAreaID) }; dups = dupIds(arrData); if (dups.length > 0) { alert(edLang.alertsMultipleID + dups.toString()); return }; var txa = Array.prototype.slice.call(textAreas); for (i = 0; i < txa.length; i++) { var txtAreaId = txa[i].getAttribute("id"); if (!document.getElementById('elmBody-' + txtAreaId)) { htmlEditor(txtAreaId, opt) } else { alert(edLang.alertsUsedPreviously + txtAreaId + ']') } };
    };
    delete opt.theme; delete opt.gradient;
    function dupIds(data) {
        var track = {}; data.forEach(function (item) { !track[item] ? track[item] = true : dups.push(item); }); return dups;
    };
    function lightenColor(color, luminosity) {
        color = new String(color).replace(/[^0-9a-f]/gi, '');
        if (color.length < 6) { color = color[0].concat(color[0], color[1], color[1], color[2], color[2]).slice(0, 6); };
        luminosity = luminosity || 0; var newColor = "#", c, i, black = 0, white = 255;
        for (i = 0; i < 3; i++) {
            c = parseInt(color.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
            newColor += ("00" + c).substr(c.length);
        }; return newColor.paddingLeft(6);
    };
    function isHexColor(hexCode) {
        hexCode = hexCode.paddingLeft(6); hexCode = new String(hexCode).replace(/[^0-9a-f]/gi, '');
        if (hexCode.length < 6) { hexCode = hexCode[0].concat(hexCode[0], hexCode[1], hexCode[1], hexCode[2], hexCode[2]); };
        return (typeof hexCode === "string") && hexCode.length === 6 && !isNaN(parseInt(hexCode, 16));
    };
    function invertColor(hexCode) {
        hexCode = new String(hexCode).replace(/[^0-9a-f]/gi, '');
        if (hexCode.length < 6) { hexCode = hexCode[0].concat(hexCode[0], hexCode[1], hexCode[1], hexCode[2], hexCode[2]); };
        var cd = (parseInt('FFFFFF', 16) ^ parseInt(hexCode, 16)).toString(16); return cd.paddingLeft(6)
    };
    /*-- creating all editors --------*/
    function htmlEditor(txtAreaID, opt) {
        var edTxtElm = document.getElementById(txtAreaID)
        if (!edTxtElm) { alert("'" + txtAreaID + edLang.alertsElementsNotFound); return; }
        var lQuot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAPFBMVEUAAAD/tmYAAAAAOpDb/////7ZmAAAAAGa2///bkDr/25A6AAA6kNv//9uQOgAAADqQ2/8AZra2ZgD///+WHOLvAAAAAXRSTlMAQObYZgAAAAFiS0dEEwy7XJYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABPSURBVBjTY2AgCjAyMbMAKVY2dg4wn5MJLMDFzQQRADJ4gBQvH0QdSAFYgpGJXwDMB8oIQsShCljZwDoYhDAFBBlgAmBbhIAU2DBqCBACAHOqAs8VMcDFAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTEwLTE2VDIzOjEzOjAzKzAyOjAwbVwvWAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0xMC0xNlQyMzoxMzowMyswMjowMBwBl+QAAAAASUVORK5CYII=";
        var rQuot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAP1BMVEUAAAD//7ZmAAAAAAAAOpDb//+2ZgAAAGa2////tmYAZrbbkDr//9uQOgD/25A6AABmtv8AADqQ2/86kNv///+tieJrAAAAAXRSTlMAQObYZgAAAAFiS0dEFJLfyTUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABPSURBVBjTY2AgDBiZmJmZWVgZ2IAUOweVBICADSTAwMCJJMAForhhAjy8MAGwQgYGPn5mASRxkA6wUm5mQSGYSwXAwszCUKdDJNjAwkQAAFmyArDaYmUgAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTEwLTE2VDIzOjMxOjI5KzAyOjAw15AelwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0xMC0xNlQyMzozMToyOSswMjowMKbNpisAAAAASUVORK5CYII=";
        vars = {
            iconFilePath: (opt && opt.iconFilePath) ? opt.iconFilePath : '/htmlEditor/img/', /*require*/
            maxWidth: (opt && opt.maxWidth) ? opt.maxWidth : '600px',
            minWidth: (opt && opt.minWidth) ? opt.minWidth : '300px',
            maxHeight: (opt && opt.maxHeight) ? opt.maxHeight : '500px',
            minHeight: (opt && opt.minHeight) ? opt.minHeight : '200px',
            scriptTagProtection: (opt && opt.scriptTagProtection) ? opt.scriptTagProtection : false,
            onlyPasteTextChecked: (opt && opt.onlyPasteTextChecked) ? opt.onlyPasteTextChecked : false,
            statusPanelDisplay: (opt && opt.statusPanelDisplay) ? '' : 'none',
            fullButtons: (opt && opt.fullButtons) ? opt.fullButtons : false,
        };
        /*-- head add STYLE block --------*/
        if (!document.getElementById('edStyle')) {
            var cssText = "\
                    \n.colorPalet { border: 1px solid transparent; } \
                    \n.colorPalet:hover { border: 1px solid #c0c0c0;} \
                    \n.fonts { } \
                    \n.edEl { scrollbar-base-color: " + darkColor + "; scrollbar-shadow-color:" + darkColor + "; scrollbar-arrow-color:" + darkColor + "; overflow-Y:auto; overflow-X:hidden; min-Height:" + vars.minHeight + "; max-Height: " + vars.maxHeight + "; padding:'3px';} \
                    \n.edEl::-webkit-scrollbar { background: " + hoverColor + "; width: 12px; }\
                    \n.edEl::-webkit-scrollbar-thumb { background: " + darkColor + "; -webkit-box-shadow: " + darkColor + " ;}\
                    \n.htmlEdit-forms { border: 1px solid " + darkColor + "; background-color: " + lightColor + "; position:absolute; display:table; padding:2px 2px 2px 2px;} \
                    \n.texts { width: 200px; border: 1px solid " + darkColor + "; float: left; margin:1px 0; }  \
                    \n.submits { margin:1px 0; border: 1px solid " + darkColor + "; float: right; }  \
                    \n.selects { border: 1px solid " + darkColor + "; float: left; margin: 1px 0; } \
                    \n.buttons:hover, .buttons-select:hover, .fonts:hover { background-color: " + hoverColor + "; color:" + invertColor(lightColor) + " } \
                    \n.buttons-select {border: 1px solid " + lightenColor(darkColor, -0.3) + "; background-color: " + lightColor + ";position: relative;  float: left;  height: 18px; min-width: 80px; font-size: 12px; padding-left: 2px; cursor: default; margin: 2px 0px 2px 2px;  } \
                    \n.buttons { background-color: " + lightColor + "; border: 1px solid " + lightenColor(darkColor, -0.3) + "; position: relative; float: left; height: 18px; width: 18px; margin: 2px 0px 2px 2px;  } \
                    \n.edPanel { " + (gradient ? "background: linear-gradient(to bottom, " + darkColor + ", " + lightColor + ")" : "background-color:" + darkColor) + "; display: table;border-bottom:1px solid " + darkColor + "; width: 100%; font-size: 12px; } \
                    \n.edStatus { " + (gradient ? "background: linear-gradient(to top, " + darkColor + ", " + lightColor + ")" : "background-color:" + darkColor) + ";border-top:1px solid " + darkColor + "; width: 100%;font-size: 12px; } \
                    \n.edBody-htmlEditor { min-width:" + vars.minWidth + "; max-width:" + vars.maxWidth + "; overflow:hidden; border: 1px solid " + darkColor + "; background-Color: #ffffff; box-sizing: border-box; } \
                    \n.edBody-htmlEditor-max { position:fixed;top:0px;right:0px;bottom:0px;left:0px;z-index:9000;height:100%;width:100%; overflow:hidden; border: 1px solid " + darkColor + "; background-Color: #ffffff; box-sizing: border-box; }";
            var cssElm = document.createElement('STYLE'); cssElm.setAttribute("type", "text/css"); cssElm.id = 'edStyle'; cssElm.innerHTML = cssText; document.head.appendChild(cssElm);
        };
        /*------------create elements--------------------*/
        var edBody = new createElm('DIV'), edPanel = new createElm('DIV'), edEl = new createElm('DIV');
        var edStatusPanel = createElm('DIV'), edChkPaste = createElm('INPUT'), edChkLabel = createElm('LABEL');
        var edCharCount = createElm('DIV'), edTargetInfo = createElm('DIV');
        /*------------Textarea settings--------------------*/
        var edTxtParent = edTxtElm.parentElement; setStyle(edTxtParent, { position: 'relative' })
        setStyle(edTxtElm, { display: 'none', 'border-Width': '0px', 'background-Color': 'lightyellow', width: '100%', 'box-sizing': 'border-box', 'overflow-Y': 'auto', 'overflow-X': 'none', 'font-family': 'Consolas' });
        setAttributes(edTxtElm, { spellcheck: 'false', placeholder: 'HTML text' });
        /*---------------Body element settings -----------------*/
        setAttributes(edBody, { id: 'elmBody-' + txtAreaID, 'class': 'edBody-htmlEditor' });
        /*--------------Editor element settings------------------*/
        setAttributes(edEl, { 'contentEditable': 'true', id: 'edEl-' + txtAreaID, 'class': 'edEl' }); //<-- ED ID
        edTxtElm.value.length > 0 ? edEl.innerHTML = edTxtElm.value : edEl.innerHTML = '<br />'
        /*---------------Button panel settings -----------------*/
        setAttributes(edPanel, { 'class': 'edPanel', id: 'edPanel-' + txtAreaID });
        /*---------------Option panel settings-----------------*/
        setAttributes(edStatusPanel, { 'class': 'edStatus' });
        setStyle(edStatusPanel, { 'display': vars.statusPanelDisplay });
        /*---------------checkbox settings-----------------*/
        setAttributes(edChkPaste, { 'border': '2px solid #ff0000', 'type': 'checkbox', 'id': 'chkPaste-' + txtAreaID });
        edChkPaste.checked = vars.onlyPasteTextChecked;
        /*---------------checkbox label settings-----------------*/
        setAttributes(edChkLabel, { 'for': 'chkPaste-' + txtAreaID }); edChkLabel.innerHTML = 'Only text for paste/drag-drop';
        /*--------------Char count div settings------------------*/
        setStyle(edCharCount, { float: 'right', width: '50px', 'text-align': 'right', color: invertBorderColor, 'padding': '0px 2px 0px 5px' });
        edCharCount.innerHTML = '0';
        /*--------------target element show settings------------------*/
        setStyle(edTargetInfo, { float: 'right', color: invertBorderColor })
        /*---------------Appends-----------------*/
        appendTo(edStatusPanel, edChkPaste); appendTo(edStatusPanel, edChkLabel); appendTo(edStatusPanel, edCharCount); appendTo(edStatusPanel, edTargetInfo); appendTo(edBody, edPanel); appendTo(edBody, edEl); appendTo(edBody, edTxtElm);/*<-- textarea move to editor body.*/ appendTo(edBody, edStatusPanel);
        appendTo(edTxtParent, edBody);
        var buttonList = ['xhtml', 'fontSize', 'fontFamily', 'formatBlock', 'bold', 'italic', 'underline', 'bgcolor', 'forecolor', 'center', 'justify', 'left', 'right', 'hr', 'ol', 'ul', 'indent', 'outdent', 'paragraf', 'ticket', 'strikethrough', 'subscript', 'superscript', 'removeformat', 'insertImage', 'link', 'unlink', 'youtube', 'video', 'audio', 'subtitleimage', 'twitter', 'facebook', 'preview', 'fullScreen']
        if (opt && opt.buttonList && !vars.fullButtons) { if (!dupButtonTest(opt.buttonList)) { removeForm(edBody); return; }; buttonList = opt.buttonList }
        else if (!opt || (opt && !opt.buttonList && !vars.fullButtons)) {
            /* minimal standard button list */  buttonList = ["xhtml", "bold", "italic", "underline", "bgcolor", "forecolor", "center", "justify", "left", "right", "hr", "ol", "ul", "indent", "outdent", "strikethrough", "subscript", "superscript", "removeformat"]
        }
        var arrButton = {}, rng = null, selElm = null;
        var edConfig = {
            editorInstance: function () {
                var btns = buttonList; for (btn in btns) { var objBtn = btns[btn]; if (this.buttons[objBtn]) { this.createButton(objBtn, this.buttons[objBtn]) }; }; if (btns.indexOf('info') < 0) { this.createButton('info', this.buttons['info']) };
                edEl.onmouseover = function (e) {
                    edTargetInfo.innerHTML = "&lt;" + e.target.tagName + "&gt;"
                };
                edChkLabel.onclick = function (e) { edChkPaste.checked = !edChkPaste.checked; e.preventDefault(); }
                edEl.ondrop = function (e) {
                    e.stopPropagation(); e.preventDefault();
                    var xUrl = UrlTest(e.dataTransfer.getData("URL")); //-->  URL  text/html
                    if (xUrl != null) { pasteHtmlAtCaret(xUrl); }
                    else if (edChkPaste.checked) {
                        pasteHtmlAtCaret(e.dataTransfer.getData("text").replace(/(?:\r\n|\r|\n)/g, '<br />'));
                        doCount(); return false;
                    };
                };
                edEl.onpaste = function (e) {
                    if (edChkPaste.checked) {
                        var pText = undefined;
                        if (window.clipboardData && window.clipboardData.getData) { pText = window.clipboardData.getData('text') }
                        else if (e.clipboardData && e.clipboardData.getData) { pText = e.clipboardData.getData('text'); };
                        pasteHtmlAtCaret(pText.replace(/(?:\r\n|\r|\n)/g, '<br />'));
                        doCount(); return false;
                    };
                };
                edEl.onblur = function (e) {
                    edTxtElm.value = edEl.innerHTML;
                };
                edEl.onmousedown = function (e) {
                    buttonState(e.target); selElm = e.target; edTargetInfo.innerHTML = "&lt;" + e.target.tagName + "&gt;"; removeAllForms();
                };
                edEl.onfocus = function (e) { enableDisablePanel(false, edPanel, edTxtElm); };
                edPanel.onmousedown = function (e) { e.preventDefault(); e.stopPropagation(); };
                edStatusPanel.onmousedown = function (e) { e.preventDefault(); e.stopPropagation(); };
                edTxtElm.onblur = function (e) {
                    if (vars.scriptTagProtection) {
                        edTxtElm.value = edTxtElm.value.replace(/<script[^>]*>/gi, '&lt;script&gt;').replace(/<\/script>/gi, '&lt;/script&gt;');
                        edEl.innerHTML = edTxtElm.value
                    }
                };
                edTxtElm.onfocus = function () {
                    edTxtElm.clientWidth = edEl.clientWidth;
                    rng = null;
                };
                edEl.onkeyup = function (e) { doCount(); };
                document.onmousedown = function (e) {
                    var bodys = document.querySelectorAll('.edBody-htmlEditor')
                    for (i = 0; i < bodys.length; i++) {
                        var body = bodys[i]; tx = document.getElementById(body.id.split('-')[1]);
                        if (body.contains(e.target) && e.target != tx) {
                            enableDisablePanel(false, body.firstChild, tx);
                        } else {
                            enableDisablePanel(true, body.firstChild, tx);
                        };
                    };
                };
                window.onresize = function (e) { removeAllDocumentForms(); };
                window.onscroll = function (e) { removeAllDocumentForms(); };
                function removeAllDocumentForms() { var arrFrm = document.querySelectorAll('.htmlEdit-forms'); for (var i = 0; i < arrFrm.length; i++) { removeForm(arrFrm[i]) }; };
                doCount();
            },
            buttons: {
                'xhtml': { title: edLang.buttonsXhtml, cls: 'buttons', commandType: 'func', funcName: 'htmlTextShift', noActive: false },
                'bold': { title: edLang.buttonsBold, cls: 'buttons', commandType: 'exec', command: 'Bold', tags: ['B', 'STRONG'], css: { 'font-weight': 'bold' }, key: 'b' },
                'italic': { title: edLang.buttonsItalic, cls: 'buttons', commandType: 'exec', command: 'Italic', tags: ['EM', 'I'], css: { 'font-style': 'italic' }, key: 'i' },
                'underline': { title: edLang.buttonsUnderline, cls: 'buttons', commandType: 'exec', command: 'Underline', tags: ['U'], css: { 'text-decoration': 'underline' }, key: 'u' },
                'forecolor': { title: edLang.buttonsForecolor, cls: 'buttons', commandType: 'func', funcName: 'createForeColor', tags: ['FONT', 'SPAN'], noActive: true },
                'bgcolor': { title: edLang.buttonsBgcolor, cls: 'buttons', commandType: 'func', funcName: 'createBackColor', tags: ['FONT', 'SPAN'], noActive: true },
                'left': { title: edLang.buttonsLeft, cls: 'buttons', commandType: 'exec', command: 'justifyleft', noActive: true },
                'center': { title: edLang.buttonsCenter, cls: 'buttons', commandType: 'exec', command: 'justifycenter', noActive: true },
                'right': { title: edLang.buttonsRight, cls: 'buttons', commandType: 'exec', command: 'justifyright', noActive: true },
                'justify': { title: edLang.buttonsJustify, cls: 'buttons', commandType: 'exec', command: 'justifyfull', noActive: true },
                'ol': { title: edLang.buttonsOl, cls: 'buttons', commandType: 'exec', command: 'insertorderedlist', tags: ['OL'] },
                'ul': { title: edLang.buttonsUl, cls: 'buttons', commandType: 'exec', command: 'insertunorderedlist', tags: ['UL'] },
                'subscript': { title: edLang.buttonsSubscript, cls: 'buttons', commandType: 'exec', command: 'subscript', tags: ['SUB'] },
                'superscript': { title: edLang.buttonsSuperscript, cls: 'buttons', commandType: 'exec', command: 'superscript', tags: ['SUP'] },
                'strikethrough': { title: edLang.buttonsStrikethrough, cls: 'buttons', commandType: 'exec', command: 'strikeThrough', tags: ['STRIKE'], css: { 'text-decoration': 'line-through' } },
                'removeformat': { title: edLang.buttonsRemoveformat, cls: 'buttons', commandType: 'exec', command: 'removeformat', noActive: true },
                'indent': { title: edLang.buttonsIndent, cls: 'buttons', commandType: 'exec', command: 'indent', tags: ['blockquote'], noActive: true },
                'outdent': { title: edLang.buttonsOutdent, cls: 'buttons', commandType: 'exec', command: 'outdent', noActive: true },
                'hr': { title: edLang.buttonsHr, cls: 'buttons', commandType: 'exec', command: 'insertHorizontalRule', tags: ['HR'], noActive: true },
                'link': { title: edLang.buttonsLink, cls: 'buttons', commandType: 'func', funcName: 'createLink', tags: ['A'] },
                'unlink': { title: edLang.buttonsUnlink, cls: 'buttons', commandType: 'exec', command: 'unlink', noActive: true },
                'insertImage': { title: edLang.buttonsInsertImage, cls: 'buttons', commandType: 'func', funcName: 'insertImage', tags: ['IMG'], noActive: true },
                'youtube': { title: edLang.buttonsYoutube, cls: 'buttons', commandType: 'func', funcName: 'createYouTube', tags: ['IFRAME'] },
                'twitter': { title: edLang.buttonsTwitter, cls: 'buttons', commandType: 'func', funcName: 'createTwit', tags: ['BLOCKQUOTE'] },
                'facebook': { title: edLang.buttonsFacebook, cls: 'buttons', commandType: 'func', funcName: 'createFBpost', /*tags: ['DIV']*/ },
                'paragraf': { title: edLang.buttonsParagraf, cls: 'buttons', commandType: 'func', funcName: 'createParagraf' },
                'ticket': { title: edLang.buttonsTicket, cls: 'buttons', commandType: 'func', funcName: 'createTicket' },
                'preview': { title: edLang.buttonsPreview, cls: 'buttons', commandType: 'func', funcName: 'createPreview' },
                'video': { title: edLang.buttonsVideo, cls: 'buttons', commandType: 'func', funcName: 'createVideo', tags: ['VIDEO'] },
                'audio': { title: edLang.buttonsAudio, cls: 'buttons', commandType: 'func', funcName: 'createAudio', tags: ['AUDIO'] },
                'subtitleimage': { title: edLang.buttonsSubtitleimage, cls: 'buttons', commandType: 'func', funcName: 'createSubtitlesImage' },
                'fontSize': { title: edLang.buttonsFontSize, name: 'Font Size', cls: 'buttons-select', commandType: 'func', funcName: 'createFontSize', tags: ['FONT', 'SPAN'] },
                'fontFamily': { title: edLang.buttonsFontFamily, name: 'Font Family', cls: 'buttons-select', commandType: 'func', funcName: 'createFontFamily', tags: ['FONT', 'SPAN'] },
                'formatBlock': { title: edLang.buttonsFormatBlock, name: 'Format Block', cls: 'buttons-select', commandType: 'func', funcName: 'createFormatBlock', tags: ['FONT', 'SPAN'] },
                'fullScreen': { title: edLang.buttonsFullScreen, cls: 'buttons', commandType: 'func', funcName: 'fullScreen' },
                'info': { title: edLang.buttonsInfo, cls: 'buttons', commandType: 'func', funcName: 'createInfo' }
            },
            iconsPath: vars.iconFilePath + 'edIcons.png',
            iconList: { "xhtml": 1, "bgcolor": 2, "forecolor": 3, "bold": 4, "center": 5, "hr": 6, "indent": 7, "italic": 8, "justify": 9, "left": 10, "ol": 11, "outdent": 12, "removeformat": 13, "right": 14, "strikethrough": 16, "subscript": 17, "superscript": 18, "ul": 19, "underline": 20, "insertImage": 21, "link": 22, "unlink": 23, "close": 24, "save": 25, "preview": 26, "youtube": 27, "video": 28, "audio": 29, "paragraf": 30, "subtitleimage": 31, "ticket": 32, "twitter": 33, "facebook": 34, "fullScreen": 35, "restoreScreen": 36, 'info': 37 },
            createButton: function (btnName, button) {
                var btn = createElm("DIV"), icon = this.getIcon(btnName, buttonList);
                if (button.name) { setContent(btn, button.name) }
                setAttributes(btn, { id: 'edButton-' + txtAreaID + '-' + btnName, 'data-name': btnName, 'class': button.cls });
                btn.style.backgroundImage = icon.backgroundImage; btn.title = button.title; btn.style.backgroundPosition = icon.backgroundPosition;
                if (button.commandType == 'exec') { addEvent(btn, 'mousedown', function () { execCommand(button.command, null); }) }
                else if (button.commandType == 'func') { addEvent(btn, 'mousedown', eval(button.funcName), null); edEl.focus(); };
                edPanel.appendChild(btn); arrButton[btnName] = button;
            },
            getIcon: function (iconName, opt) {
                var icon = this.iconList[iconName], file = (opt.iconFiles) ? opt.iconFiles[iconName] : '';
                return { backgroundImage: "url('" + ((icon) ? this.iconsPath : file) + "')", backgroundPosition: ((icon) ? ((icon - 1) * -18) : 0) + 'px 0px' };
            },
        };
        var formArgs = {
            fontFamilyArg: function (frm) {
                var sel = { 'Microsoft Sans Serif': 'MS Sans Serif', 'consolas': 'Consolas', 'arial': 'Arial', 'comic sans ms': 'Comic Sans', 'courier new': 'Courier New', 'georgia': 'Georgia', 'helvetica': 'Helvetica', 'times new roman': 'Times', 'trebuchet ms': 'Trebuchet', 'verdana': 'Verdana' };
                var elmBody = createElm('div'); setStyle(elmBody, { 'font-size': '12px', overflow: 'hidden' });
                for (itm in sel) {
                    var subElm = createElm('DIV'); setStyle(subElm, { 'float': 'left', margin: '2px 1px 0 1px', cursor: 'default', width: '100%', 'white-space': 'nowrap' });
                    setAttributes(subElm, { 'class': 'fonts' })
                    setContent(subElm, '<font face="' + itm + '">' + sel[itm] + '</font>');
                    this.fontEvent(subElm, itm, 'fontName', frm)
                    appendTo(elmBody, subElm)
                };
                return elmBody;
            },
            fontSizeArg: function (frm) {
                var sel = { 1: '1&nbsp;(8pt)', 2: '2&nbsp;(10pt)', 3: '3&nbsp;(12pt)', 4: '4&nbsp;(14pt)', 5: '5&nbsp;(18pt)', 6: '6&nbsp;(24pt)' };
                var elmBody = createElm('div'); setStyle(elmBody, { 'font-size': '12px', overflow: 'hidden' });
                for (itm in sel) {
                    var subElm = createElm('DIV'); setStyle(subElm, { 'float': 'left', margin: '2px 1px 0 1px', cursor: 'default', width: '100%', 'white-space': 'nowrap' });
                    setAttributes(subElm, { 'class': 'fonts' })
                    setContent(subElm, '<font size="' + itm + '">' + sel[itm] + '</font>');
                    this.fontEvent(subElm, itm, 'fontSize', frm)
                    appendTo(elmBody, subElm)
                };
                return elmBody;
            },
            formatBlockArg: function (frm) {
                var sel = { 'p': 'Paragraph', 'pre': 'Pre', 'h6': 'Heading&nbsp;6', 'h5': 'Heading&nbsp;5', 'h4': 'Heading&nbsp;4', 'h3': 'Heading&nbsp;3', 'h2': 'Heading&nbsp;2', 'h1': 'Heading&nbsp;1' };
                var elmBody = createElm('div'); setStyle(elmBody, { 'font-size': '12px', overflow: 'hidden' });
                for (itm in sel) {
                    var subElm = createElm('DIV'); setStyle(subElm, { 'float': 'left', margin: '2px 1px 0 1px', cursor: 'default', width: '100%', 'white-space': 'nowrap' });
                    setAttributes(subElm, { 'class': 'fonts' })
                    var tag = itm.toUpperCase();
                    setContent(subElm, '<' + tag + ' style="padding: 0px; margin: 0px;">' + sel[itm] + '</' + tag + '>');
                    this.fontEvent(subElm, '<' + itm + '>', 'formatBlock', frm)
                    appendTo(elmBody, subElm)
                };
                return elmBody;
            },
            fontEvent: function (elm, fontName, command, frm) {/* 3 font i�lemi i�in ortak func.*/
                addEvent(elm, 'click', function () {
                    restoreSelection(rng); execCommand(command, fontName); removeForm(frm); edEl.focus();
                });
            },
            linkArg: {
                /*id prefix: link+key+edTxtElm.id     key: {'xx', type:'xx', label:'xx', attributes: {}, style: {} | options: {}  }  */
                '': { type: 'title', label: edLang.buttonsLink },
                'href': { type: 'text', label: 'URL', attributes: { type: 'text', value: 'http://', 'class': 'texts', id: 'link-href-' + edTxtElm.id } },
                'title': { type: 'text', label: 'Tooltip', attributes: { type: 'text', 'class': 'texts', id: 'link-title-' + edTxtElm.id } },
                'target': { type: 'select', label: 'Open In', attributes: { 'class': 'selects', id: 'link-target-' + edTxtElm.id }, options: { '': 'Current Window', '_blank': 'New Window' } },
                'submit': { type: 'button', label: ' ', attributes: { value: 'OK', type: 'button', 'class': 'submits', id: 'link-submit-' + edTxtElm.id } }
            },
            linkBtnEvent: function (btn, frm) {
                //var linkText = frm.elements['href'], targetSel = frm.elements['target'], titleText = frm.elements['title'];
                addEvent(btn, 'click', function () {
                    restoreSelection(rng);
                    var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(frm['href'].value);
                    if (!valid) { alert(edLang.alertsCreateLink); frm['href'].focus(); frm['href'].select(); return false; };
                    if (selElm && selElm.tagName.toUpperCase() == "A") {
                        setAttributes(selElm, { "href": frm['href'].value.replace(getHostName(location.href), '') });
                        frm['target'].value ? setAttributes(selElm, { "target": frm['target'].options[frm['target'].selectedIndex].value }) : selElm.removeAttribute("target");
                        frm['title'].value ? setAttributes(selElm, { "title": frm['title'].value }) : selElm.removeAttribute("title");
                    } else {
                        restoreSelection(rng);
                        setSelectionHtml(clearHTML(getSelectionHtml()))
                        var sTxt = getSelectionHtml();
                        if (sTxt.length > 0) {
                            var a = document.createElement("A");
                            a.href = frm['href'].value.replace(getHostName(location.href), '')
                            a.innerHTML = sTxt;
                            if (frm['target'].value) { a.target = frm['target'].value };
                            if (frm['title'].value) { a.title = frm['title'].value };
                            setSelectionHtml(a.outerHTML)
                        };
                    };
                    removeForm(frm); edEl.focus();
                });
            },
            imageArg: {
                '': { type: 'title', label: edLang.buttonsInsertImage },
                'src': { type: 'text', label: 'URL', attributes: { value: 'http://', 'class': 'texts', id: 'image-src-' + edTxtElm.id } },
                'alt': { type: 'text', label: 'Alt Text', attributes: { 'class': 'texts', id: 'image-alt-' + edTxtElm.id } },
                'align': { type: 'select', label: 'Align', attributes: { 'class': 'selects', id: 'image-align-' + edTxtElm.id }, options: { 'default': 'Default', 'left': 'Left', 'right': 'Right' } },
                'submit': { type: 'button', label: ' ', attributes: { value: 'OK', type: 'button', 'class': 'submits', id: 'image-submit-' + edTxtElm.id } }
            },
            imageBtnEvent: function (btn, frm) {
                addEvent(btn, 'click', function () {
                    restoreSelection(rng);
                    var valid = /^(http|https):\/\/[^ "]+$/.test(frm['src'].value);
                    if (!valid) { alert(edLang.alertsCreateImage); frm['src'].focus(); frm['src'].select(); return false; };
                    if (selElm && selElm.tagName.toUpperCase() == "IMG") {
                        setAttributes(selElm, { "src": frm['src'].value.replace(getHostName(location.href), '') });
                        frm['align'].value ? setAttributes(selElm, { "align": frm['align'].options[frm['align'].selectedIndex].value }) : selElm.removeAttribute("align");
                        frm['alt'].value ? setAttributes(selElm, { "alt": frm['alt'].value }) : selElm.removeAttribute("alt");
                    } else {
                        var a = document.createElement("IMG");
                        a.src = frm['src'].value.replace(getHostName(location.href), '')
                        if (frm['align'].value != 'default') { a.align = frm['align'].value };
                        if (frm['alt'].value) { a.alt = frm['alt'].value };
                        pasteHtmlAtCaret(a.outerHTML, true)
                    };
                    removeForm(frm); edEl.focus();
                });
            },
            youTubeArgs: {
                '': { type: 'title', label: edLang.buttonsYoutube },
                'src': { type: 'text', label: 'URL', attributes: { value: 'http://', 'class': 'texts', id: 'youtube-src-' + edTxtElm.id } },
                'submit': { type: 'button', label: ' ', attributes: { value: 'OK', type: 'button', 'class': 'submits', id: 'youtube-submit-' + edTxtElm.id } }
            },
            youTubeBtnEvent: function (btn, frm) {
                addEvent(btn, 'click', function () {
                    restoreSelection(rng);
                    var yid = YoutubeVideoId(frm['src'].value);
                    if (!yid) { alert(edLang.alertsCreateYoutube); frm['src'].focus(); frm['src'].select(); return false; };
                    var ytbUrl = 'http://www.youtube.com/embed/' + yid + '?wmode=opaque';
                    if (selElm && selElm.tagName.toUpperCase() == "IFRAME") {
                        setAttributes(selElm, { 'src': ytbUrl, 'data-youtube-id': yid });
                    } else {
                        var ytTmp = '<iframe style="width: 100%; min-height: 80px; max-width: 600px; max-height: 350px; margin:auto;" height="350" src="' + ytbUrl + '" data-youtube-id="' + yid + '" frameborder="0" allowfullscreen="true"></iframe>'
                        pasteHtmlAtCaret(ytTmp, true)
                    };
                    removeForm(frm); edEl.focus();
                });
                function YoutubeVideoId(url) {
                    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
                    return (url.match(p)) ? RegExp.$1 : false;
                };
            },
            twitterArgs: {
                '': { type: 'title', label: edLang.buttonsTwitter },
                'src': { type: 'text', label: 'Tweet Url', attributes: { value: 'https://', 'class': 'texts', id: 'twitter-src-' + edTxtElm.id } },
                'lang': { type: 'select', label: 'Lang', attributes: { 'class': 'selects', id: 'twitter-lang-' + edTxtElm.id }, options: { 'tr': 'T�rk�e', 'en': 'English', 'de': 'German', 'ar': 'Arabic', 'es': 'Spanish', 'fa': 'Persian', 'fr': 'French', 'it': 'Italian', 'ja': 'Japanese', 'ru': 'Russian' } },
                'submit': { type: 'button', label: ' ', attributes: { value: 'OK', type: 'button', 'class': 'submits', id: 'twitter-submit-' + edTxtElm.id } }
            },
            twitterBtnEvent: function (btn, frm) {
                addEvent(btn, 'click', function () {
                    restoreSelection(rng);
                    var tUrl = frm['src'].value.replace(/\/$/, "");
                    if (!isNumber(getTweetId(tUrl))) { alert(edLang.alertsCreateTweet); frm['src'].focus(); frm['src'].select(); return false; };
                    if (selElm && selElm.tagName.toUpperCase() == "BLOCKQUOTE" && selElm.className == 'twitter-tweet') {
                        setAttributes(selElm.getElementsByTagName('a')[0], { 'href': tUrl });
                        setAttributes(selElm, { 'lang': frm['lang'].value });
                    } else {
                        var tTmp = "<blockquote style='background-color:#beebe6;max-width:550px;margin:auto;' align='center' class='twitter-tweet' lang='" + frm['lang'].value + "'>\nTweet\n<a href='" + tUrl + "'></a>\n</blockquote>";
                        pasteHtmlAtCaret(tTmp)
                    };
                    removeForm(frm); edEl.focus();
                });
                function getTweetId(url) {
                    var p = /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
                    return (url.match(p)) ? RegExp.$1 : false;
                };
            },
            videoArgs: {
                '': { type: 'title', label: edLang.buttonsVideo },
                'src': { type: 'text', label: 'Video Url', attributes: { value: 'https://', 'class': 'texts', id: 'video-src-' + edTxtElm.id } },
                'submit': { type: 'button', label: ' ', attributes: { value: 'OK', type: 'button', 'class': 'submits', id: 'video-submit-' + edTxtElm.id } }
            },
            videoBtnEvent: function (btn, frm) {
                addEvent(btn, 'click', function () {
                    restoreSelection(rng);
                    var vidUrl = frm['src'].value;
                    if (vidUrl == "" || VideoUrlTest(vidUrl) == false) { alert(edLang.alertsCreateVideo); return false; };
                    var vidTmp = UrlTest(vidUrl); //'<video title="Video dosyas�" style="width: 525px;" src="' + src + '" controls="true"></video> '

                    if (selElm && selElm.tagName.toUpperCase() == "VIDEO") {
                        var sourceTag = selElm.getElementsByTagName('source')[0]
                        setAttributes(sourceTag, { 'src': vidUrl });
                    } else {
                        pasteHtmlAtCaret(vidTmp)
                    };
                    removeForm(frm); edEl.focus();
                });
                function VideoUrlTest(url) {
                    if (url !== null && (url.substring(0, 7) == 'http://' || url.substring(0, 8) == 'https://')) {
                        var txt = url.replace(/\?.*$/, "").replace(/.*\//, "");
                        var vidReg = new RegExp(/mp4|webm|ogg/gi);
                        return (vidReg.test(txt)) ? true : false;
                    }
                };

            },
            audioArgs: {
                '': { type: 'title', label: edLang.buttonsAudio },
                'src': { type: 'text', label: 'Audio Url', attributes: { value: 'https://', 'class': 'texts', id: 'audio-src-' + edTxtElm.id } },
                'submit': { type: 'button', label: ' ', attributes: { value: 'OK', type: 'button', 'class': 'submits', id: 'audio-submit-' + edTxtElm.id } }
            },
            audioBtnEvent: function (btn, frm) {
                addEvent(btn, 'click', function () {
                    restoreSelection(rng);
                    var audUrl = frm['src'].value;
                    if (audUrl == "" || AudioUrlTest(audUrl) == false) { alert(edLang.alertsCreateAudio); return false; };
                    var audTmp = UrlTest(audUrl); //'<video title="Video dosyas�" style="width: 525px;" src="' + src + '" controls="true"></video> '
                    if (selElm && selElm.tagName.toUpperCase() == "AUDIO") {
                        var sourceTag = selElm.getElementsByTagName('source')[0]
                        setAttributes(sourceTag, { 'src': audUrl });
                    } else {
                        pasteHtmlAtCaret(audTmp)
                    };
                    removeForm(frm); edEl.focus();
                });
                function AudioUrlTest(url) {
                    if (url !== null && (url.substring(0, 7) == 'http://' || url.substring(0, 8) == 'https://')) {
                        var txt = url.replace(/\?.*$/, "").replace(/.*\//, "");
                        var vidReg = new RegExp(/mp3|wav|ogg/gi);
                        return (vidReg.test(txt)) ? true : false;
                    }
                };
            },
            facebookArgs: {
                '': { type: 'title', label: edLang.buttonsFacebook },
                'src': { type: 'text', label: 'Post Url', attributes: { value: 'https://', 'class': 'texts', id: 'facebook-src-' + edTxtElm.id } },
                'submit': { type: 'button', label: ' ', attributes: { value: 'OK', type: 'button', 'class': 'submits', id: 'facebook-submit-' + edTxtElm.id } }
            },
            facebookBtnEvent: function (btn, frm) {
                addEvent(btn, 'click', function () {
                    restoreSelection(rng);
                    var fbUrl = frm['src'].value.replace(/\/$/, "");
                    if (!isNumber(getFacebookId(fbUrl))) { alert(edLang.alertsCreateFacebook); frm['src'].focus(); frm['src'].select(); return false; };
                    if (selElm && selElm.tagName.toUpperCase() == "DIV" && selElm.className == 'fb-post') {
                        setAttributes(selElm, { 'data-href': fbUrl });
                    } else {
                        var tTmp = "<div style='background-color:#547ec8;color:#ffffff;max-width:550px;margin:auto;display:table;' class='fb-post' data-href='" + fbUrl + "' data-width='auto'>\nFacebook post\n</div>";
                        pasteHtmlAtCaret(tTmp)
                    };
                    removeForm(frm); edEl.focus();
                });
                function getFacebookId(url) {
                    var p = /(?:https:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/;
                    return (url.match(p)) ? RegExp.$1 : false;
                };
            },
            colorPaletArg: function (command, frm, formTitle) {
                var canvas = createElm('CANVAS'), cTitle = createElm('DIV'), hoverElm = createElm('DIV')
                setStyle(canvas, { float: 'left', 'margin-left': '3px', 'border': '1px solid #000000', cursor: 'crosshair' }); setAttributes(canvas, { height: '20px', width: '245px' });
                setStyle(cTitle, { 'font-size': '16px', 'padding-left': '5px' }); cTitle.innerHTML = formTitle; appendTo(frm, cTitle);
                setStyle(hoverElm, { float: 'left', display: 'table', width: '20px', height: '20px', 'border': '1px solid #000000' });
                hoverElm.innerHTML = '&nbsp;'; appendTo(frm, hoverElm); appendTo(frm, canvas);
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d"), gr = ctx.createLinearGradient(0, 0, 245, 0);
                    gr.addColorStop(0, 'red');
                    gr.addColorStop(1 / 7, 'orange');
                    gr.addColorStop(2 / 7, 'yellow');
                    gr.addColorStop(3 / 7, 'lightgreen');
                    gr.addColorStop(4 / 7, 'green');
                    gr.addColorStop(5 / 7, 'red');
                    gr.addColorStop(6 / 7, 'blue');
                    gr.addColorStop(1, 'lightblue');
                    ctx.fillStyle = gr;
                    ctx.fillRect(0, 0, 245, 20);
                };
                this.colorBtnEvent(canvas, hoverElm, command, frm);
            },
            colorBtnEvent: function (elm, hElm, command, frm) {
                function getEventLocation(element, event) {
                    var pos = getOffset(element);
                    return { x: (event.pageX - pos.left), y: (event.pageY - pos.top) };
                };
                function rgbToHex(r, g, b) {
                    var bin = r << 16 | g << 8 | b;
                    return (function (h) {
                        return new Array(7 - h.length).join("0") + h
                    })(bin.toString(16).toUpperCase());
                };
                function setColor(e, hvr) {
                    var eLoc = getEventLocation(elm, e);
                    var context = elm.getContext('2d');
                    var pixelData = context.getImageData(eLoc.x, eLoc.y, 1, 1).data;
                    //if ((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)) {
                    // Do something if the pixel is transparent
                    //};
                    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
                    if (hvr) {
                        hElm.style.backgroundColor = hex;//<- hover
                    }
                    else {
                        restoreSelection(rng); execCommand(command, hex); removeForm(frm); edEl.focus();
                    };
                };
                elm.onclick = function (e) { setColor(e, false) };
                elm.onmousemove = function (e) { setColor(e, true) };
            },
            InfoArgs: {
                '': { type: 'title', label: edLang.buttonsInfo + ':' },
                'info': { type: 'div', content: edLang.formsInfoDescription, style: { color: '#5b00a4', 'font-weight': 'normal', 'font-size': '12px', 'font-family': 'calibri, consolas, tahoma' } },
            },
        };
        function createFormElements(form, frmArg, elm) {
            /*form Class Name: htmlEdit-Class*/
            var inputs = {};
            function addForm() {
                for (itm in frmArg) {
                    var field = frmArg[itm];
                    var val = '';
                    if (elm) { val = elm.getAttribute(itm); };
                    if (!val) { val = field['value'] || ''; };
                    var type = frmArg[itm].type;
                    if (type == 'title') {
                        var titElm = createElm('STRONG');
                        setContent(titElm, field.label);
                        setStyle(titElm, { float: 'left', fontSize: '14px', fontWeight: 'bold', padding: '0px', margin: '2px 0' });
                        appendTo(form, titElm);
                    } else {
                        var contain = createElm('div');
                        setStyle(contain, { float: 'left', overflow: 'hidden', clear: 'both' });
                        appendTo(form, contain);
                        field.attributes ? field.attributes['name'] = itm : field.attributes = { name: itm };
                        if (field.label) {
                            var lbl = createElm('label');
                            setAttributes(lbl, { 'for': field.attributes['id'] });
                            setContent(lbl, field.label);
                            setStyle(lbl, { 'white-space': 'nowrap', margin: '1px 4px', fontSize: '11px', width: '60px', lineHeight: '15px', 'text-align': 'right', 'float': 'left' });
                            appendTo(contain, lbl);
                        };
                        switch (type) {
                            case 'text':
                                inputs[itm] = createElm('input');
                                setAttributes(inputs[itm], field.attributes);
                                field.style ? setStyle(inputs[itm], field.style) : setStyle(inputs[itm], {})
                                appendTo(contain, inputs[itm]);
                                break;
                            case 'select':
                                inputs[itm] = createElm('select');

                                setAttributes(inputs[itm], field.attributes);
                                field.style ? setStyle(inputs[itm], field.style) : setStyle(inputs[itm], {})
                                appendTo(contain, inputs[itm]);
                                for (opt in field.options) {
                                    var o = createElm('option');
                                    setContent(o, field.options[opt]);
                                    appendTo(inputs[itm], o);
                                    setAttributes(o, { value: opt, selected: (opt == val) ? null : null });
                                };
                                appendTo(contain, inputs[itm]);
                                break;
                            case 'button':
                                inputs[itm] = createElm('input');
                                setAttributes(inputs[itm], field.attributes);
                                field.style ? setStyle(inputs[itm], field.style) : setStyle(inputs[itm], {})
                                appendTo(contain, inputs[itm]);
                                break;
                            case 'div':
                                inputs[itm] = createElm('DIV');
                                setAttributes(inputs[itm], field.attributes);
                                setContent(inputs[itm], field.content)
                                field.style ? setStyle(inputs[itm], field.style) : setStyle(inputs[itm], {})
                                appendTo(contain, inputs[itm]);

                        };
                        appendTo(form, contain);
                    };
                }; return form;
            };
            addForm();
        };
        /*-----------------------------------------*/
        function getHtmlButton(panel, btnName) { return panel.childNodes[Object.keys(arrButton).indexOf(btnName)]; };
        function getObjButton(btnName) { return arrButton[btnName]; };
        function enableDisablePanel(bool, panel, tx) {
            var panButtons = panel.childNodes;
            txtDisplay = tx.style.display == 'none' ? false : true;
            if (txtDisplay && bool) {
                enDisBtn(bool, panButtons);
                var b = getHtmlButton(panel, "xhtml");
                b.disabled = false; b.style.pointerEvents = 'auto'; b.style.opacity = 1;
            } else { enDisBtn(bool, panButtons); }
        };
        function enDisBtn(bool, panButtons) {
            var opc = bool ? 0.5 : 1; pEvn = bool ? 'none' : 'auto';
            for (var i = 0; i < panButtons.length; i++) {
                var b = panButtons[i];
                b.disabled = bool; b.style.opacity = opc; b.style.pointerEvents = pEvn;
            };
        };
        function addEvent(obj, type, fn, arg) {
            (obj.addEventListener) ? obj.addEventListener(type, fn.bind(obj, arg), false) : obj.attachEvent("on" + type, fn.bind(obj, arg));
        }
        function removeEvent(obj, type, fn) {
            if (obj.removeEventListener) { obj.removeEventListener(type, fn, false); } else if (obj.detachEvent) { obj.detachEvent("on" + type, fn); };
        };
        function selectUnselectButton(btnName, boolOpt) {
            var b = getHtmlButton(panel, btnName);
            boolOpt ? b.style.borderColor = invertBorderColor : b.style.borderColor = "";
        };
        function buttonState(target) {
            var panButtons = edPanel.childNodes;
            for (var i = 0; i < panButtons.length; i++) {
                var b = panButtons[i], btnName = b.getAttribute("data-name"), objBtn = getObjButton(btnName)
                if (Array.isArray(objBtn.tags)) {
                    for (n in objBtn.tags) {
                        var t = objBtn.tags[n]; if (t == target.tagName.toUpperCase()) { b.style.borderColor = invertBorderColor; break; } else { b.style.borderColor = '' };
                    };
                };
            };
        };
        function getNodeIndex(el) { for (var i = 0; el = el.previousElementSibling; i++); return i; };
        function htmlTextShift() {
            if (edTxtElm.style.display == 'none') {
                edTxtElm.style.height = getOffset(edEl).height + "px";
                edTxtElm.style.removeProperty('display'); edEl.style.display = 'none'; enableDisablePanel(true, edPanel, edTxtElm); edTxtElm.focus();
                edTxtElm.value = edEl.innerHTML;
            }
            else { edEl.innerHTML = edTxtElm.value; edTxtElm.style.display = 'none'; edTxtElm.style.height = getOffset(edEl).height + "px"; edEl.style.removeProperty('display'); enableDisablePanel(false, edPanel, edTxtElm); edEl.focus(); }; removeAllForms();
        };
        function removeAllForms() {
            var arrFrm = document.querySelectorAll('.htmlEdit-Class-' + txtAreaID);
            for (var i = 0; i < arrFrm.length; i++) { removeForm(arrFrm[i]) };
        };
        function removeForm(frm) { frm.parentNode.removeChild(frm); };
        function createForm(frmId, frmHW, frmArg) {
            var frmBody = createElm("FORM"); frmBody.className = "htmlEdit-forms htmlEdit-Class-" + txtAreaID;
            if (Object.keys(frmArg).length > 0) { createFormElements(frmBody, frmArg) };
            setAttributes(frmBody, { 'id': frmId });
            setStyle(frmBody, frmHW)
            frmBody.style.zIndex = "1000";
            //alert(document.implementation.hasFeature("Range", "2.0")) //<-- silme!
            return frmBody;
        };
        /*-----------------------------------------*/
        function createLink() {
            /*form ID: htmlEdit-link*/
            rng = saveSelection();
            var frmLink = document.getElementById('htmlEdit-link-' + txtAreaID);
            if (frmLink) { removeForm(frmLink); return; }
            var btn = getHtmlButton(edPanel, "link");
            var form = createForm('htmlEdit-link-' + txtAreaID, { height: '100px', width: '277px' }, formArgs.linkArg)
            var updateBtn = form.elements['submit'];
            formArgs.linkBtnEvent(updateBtn, form)//<--
            if (selElm && selElm.tagName.toUpperCase() == "A") {
                selectNode(selElm);
                form['href'].value = selElm.getAttribute("href");
                form['target'].value = selElm.getAttribute("target");
                form['title'].value = selElm.getAttribute("title");
            } else { form['target'].selectedIndex = 0 };
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        function insertImage() {
            /*form ID: htmlEdit-image*/
            rng = saveSelection();
            var frmImage = document.getElementById('htmlEdit-image-' + txtAreaID);
            if (frmImage) { removeForm(frmImage); return; }
            var btn = getHtmlButton(edPanel, "insertImage");
            var form = createForm('htmlEdit-image-' + txtAreaID, { height: '100px', width: '277px' }, formArgs.imageArg)
            var updateBtn = form.elements['submit'];
            formArgs.imageBtnEvent(updateBtn, form)//<--
            if (selElm && selElm.tagName.toUpperCase() == "IMG") {
                //selectNode(selElm);
                form['src'].value = selElm.getAttribute("src");
                form['align'].value = selElm.getAttribute("align");
                form['alt'].value = selElm.getAttribute("alt");
            } else { form['align'].selectedIndex = 0 };
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        function createForeColor() {
            /*form ID: htmlEdit-ForeColor*/
            rng = saveSelection();
            var frmForeColor = document.getElementById('htmlEdit-ForeColor-' + txtAreaID);
            if (frmForeColor) { removeForm(frmForeColor); return; };
            var btn = getHtmlButton(edPanel, "forecolor");
            var form = createForm('htmlEdit-ForeColor-' + txtAreaID, { width: '283px', height: '40px', 'box-sizing': 'border-box' }, {});
            if (selElm && selElm.tagName.toUpperCase() == "FONT") {
                selectNode(selElm);
            }
            formArgs.colorPaletArg('foreColor', form, edLang.buttonsForecolor)
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        function createBackColor() {
            /*form ID: htmlEdit-BackColor*/
            rng = saveSelection();
            var frmBackColor = document.getElementById('htmlEdit-BackColor-' + txtAreaID);
            if (frmBackColor) { removeForm(frmBackColor); return; };
            var btn = getHtmlButton(edPanel, "bgcolor");
            var form = createForm('htmlEdit-BackColor-' + txtAreaID, { width: '283px', height: '40px', 'box-sizing': 'border-box' }, {});
            if (selElm && selElm.tagName.toUpperCase() == "FONT") {
                selectNode(selElm);
            }
            edBody.appendChild(form);
            formArgs.colorPaletArg('backColor', form, edLang.buttonsBgcolor);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        /*-----------------------------------------*/
        function createFontSize() {
            /*form ID: htmlEdit-fontSize*/
            rng = saveSelection();
            var frmfontSize = document.getElementById('htmlEdit-fontSize-' + txtAreaID);
            if (frmfontSize) { removeForm(frmfontSize); return; };
            var btn = getHtmlButton(edPanel, "fontSize");
            var form = createForm('htmlEdit-fontSize-' + txtAreaID, { width: '80px' }, {});
            //if (selElm && selElm.tagName.toUpperCase() == "FONT") {
            //    selectNode(selElm);
            //}
            edBody.appendChild(form);
            form.appendChild(formArgs.fontSizeArg(form));
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        function createFontFamily() {
            /*form ID: htmlEdit-fontName*/
            rng = saveSelection();
            var frmfontName = document.getElementById('htmlEdit-fontName-' + txtAreaID);
            if (frmfontName) { removeForm(frmfontName); return; };
            var btn = getHtmlButton(edPanel, "fontFamily");
            var form = createForm('htmlEdit-fontName-' + txtAreaID, { width: '80px' }, {});
            //if (selElm && selElm.tagName.toUpperCase() == "FONT") {
            //    selectNode(selElm);
            //}
            edBody.appendChild(form);
            form.appendChild(formArgs.fontFamilyArg(form));
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        }
        function createFormatBlock() {
            /*form ID: htmlEdit-formatBlock-*/
            rng = saveSelection();
            var frmformatBlock = document.getElementById('htmlEdit-formatBlock-' + txtAreaID);
            if (frmformatBlock) { removeForm(frmformatBlock); return; };
            var btn = getHtmlButton(edPanel, "formatBlock");
            var form = createForm('htmlEdit-formatBlock-' + txtAreaID, { width: '80px' }, {});
            //if (selElm && selElm.tagName.toUpperCase() == "FONT") {
            //    selectNode(selElm);
            //}
            edBody.appendChild(form);
            form.appendChild(formArgs.formatBlockArg(form));
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        }
        /*-----------------------------------------*/
        function createYouTube() {
            /*form ID: htmlEdit-YouTube*/
            rng = saveSelection();
            var frmYouTube = document.getElementById('htmlEdit-YouTube-' + txtAreaID);
            if (frmYouTube) { removeForm(frmYouTube); return; }
            var btn = getHtmlButton(edPanel, "youtube")
            var form = createForm('htmlEdit-YouTube-' + txtAreaID, { height: '60px', width: '277px' }, formArgs.youTubeArgs)
            var updateBtn = form.elements['submit'];
            formArgs.youTubeBtnEvent(updateBtn, form)//<--
            if (selElm && selElm.tagName.toUpperCase() == "IFRAME") {
                selectNode(selElm);
                form['src'].value = selElm.getAttribute("src");
            };
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        function createTwit() {
            /*form ID: htmlEdit-Twitter*/
            rng = saveSelection();
            var frmTwitter = document.getElementById('htmlEdit-Twitter-' + txtAreaID);
            if (frmTwitter) { removeForm(frmTwitter); return; }
            var btn = getHtmlButton(edPanel, "twitter")
            var form = createForm('htmlEdit-Twitter-' + txtAreaID, { height: '60px', width: '277px' }, formArgs.twitterArgs)
            var updateBtn = form.elements['submit'];
            formArgs.twitterBtnEvent(updateBtn, form)//<--
            if (selElm && selElm.tagName.toUpperCase() == "BLOCKQUOTE" && selElm.className == 'twitter-tweet') {
                selectNode(selElm);
                form['src'].value = selElm.getElementsByTagName('a')[0].getAttribute("href");
                form['lang'].value = selElm.getAttribute("lang");
            } else { form['lang'].selectedIndex = 0 };
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        }
        function createFBpost() {
            /*form ID: htmlEdit-Facebook*/
            rng = saveSelection();
            var frmFacebook = document.getElementById('htmlEdit-Facebook-' + txtAreaID);
            if (frmFacebook) { removeForm(frmFacebook); return; }
            var btn = getHtmlButton(edPanel, "facebook")
            var form = createForm('htmlEdit-Facebook-' + txtAreaID, { height: '60px', width: '277px' }, formArgs.facebookArgs)
            var updateBtn = form.elements['submit'];
            formArgs.facebookBtnEvent(updateBtn, form)//<--
            if (selElm && selElm.tagName.toUpperCase() == "DIV" && selElm.className == 'fb-post') {
                selectNode(selElm);
                form['src'].value = selElm.getAttribute('data-href');
                form['lang'].value = selElm.getAttribute("lang");
            } else { form['lang'].selectedIndex = 0 };
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        }
        /*-----------------------------------------*/
        function createVideo() {
            /*form ID: htmlEdit-Video*/
            rng = saveSelection();
            var frmVideo = document.getElementById('htmlEdit-Video-' + txtAreaID);
            if (frmVideo) { removeForm(frmVideo); return; }
            var btn = getHtmlButton(edPanel, "video")
            var form = createForm('htmlEdit-Video-' + txtAreaID, { height: '60px', width: '277px' }, formArgs.videoArgs)
            var updateBtn = form.elements['submit'];
            formArgs.videoBtnEvent(updateBtn, form)//<--
            if (selElm && selElm.tagName.toUpperCase() == "VIDEO") {
                selectNode(selElm);
                form['src'].value = selElm.getElementsByTagName('source')[0].getAttribute("src");
            };
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        function createAudio() {
            /*form ID: htmlEdit-Audio*/
            rng = saveSelection();
            var frmAudio = document.getElementById('htmlEdit-Audio-' + txtAreaID);
            if (frmAudio) { removeForm(frmAudio); return; }
            var btn = getHtmlButton(edPanel, "audio")
            var form = createForm('htmlEdit-Audio-' + txtAreaID, { height: '60px', width: '277px' }, formArgs.audioArgs)
            var updateBtn = form.elements['submit'];
            formArgs.audioBtnEvent(updateBtn, form)//<--
            if (selElm && selElm.tagName.toUpperCase() == "AUDIO") {
                selectNode(selElm);
                form['src'].value = selElm.getElementsByTagName('source')[0].getAttribute("src");
            };
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";
        };
        /*-----------------------------------------*/
        function createParagraf() {
            var val;
            if (document.getSelection) { val = document.getSelection(); } else { val = document.selection.createRange().htmlText; };
            if (val.toString().length > 0) {
                var prgrf = "<div style='margin: auto; min-width: 250px; width: 100%; background-color: #f1f4f8; display: table;'><div style='height: 100%; width: 10px; background-color: #5788d5; display: table-cell; z-index: 100;'></div><div style='padding: 5px; font: normal 16px georgia; font-style: italic; display: table-cell; background-color: #f1f4f8;'>" + val + "</div></div>";
                pasteHtmlAtCaret(prgrf);
            } else { alert(edLang.alertsCreateParagraf); };

        }
        function createTicket() {
            var val;
            if (document.getSelection) { val = document.getSelection(); } else { val = document.selection.createRange().htmlText; };
            if (val.toString().length > 0) {
                var prgrf = "<div style='border:1px solid #e0e0e0;display:table;float:right;margin:2px 2px 2px 5px;padding:2px;vertical-align:top;max-width:200px;background-color:#f0f0f0;'><div><img src=" + lQuot + " /></div>" + val + "<div style='text-align:right;'><img src=" + rQuot + " /></div></div>";
                pasteHtmlAtCaret(prgrf);
            } else { alert(edLang.alertsCreateTicket); };
        };
        function createPreview() {
            iDiv = document.createElement("div"); oDiv = document.createElement("div");
            oDiv.style.left = "0px";
            oDiv.style.right = "0px";
            oDiv.style.top = "0px";
            oDiv.style.bottom = "0px";
            oDiv.style.height = "100%";
            oDiv.style.width = "100%";
            oDiv.style.minHeight = "100px";
            //oDiv.style.margin = "auto";
            oDiv.style.position = "fixed";
            oDiv.style.zIndex = 9100;
            oDiv.style.cursor = "default";
            //oDiv.style.display = "table";
            oDiv.id = "__preview";
            oDiv.style.backgroundColor = "black"; oDiv.style.opacity = 0.70;

            iDiv.style.width = (edEl.offsetWidth * 0.95) + 'px'; iDiv.style.minHeight = "100px"; iDiv.style.border = "3px solid #666666"; iDiv.style.cursor = "default";
            iDiv.style.left = 0; iDiv.style.right = 0; iDiv.style.margin = "0 auto"; iDiv.style.top = "0px"; iDiv.style.padding = "3px";
            iDiv.style.backgroundColor = "#ffffff"; iDiv.style.zIndex = 9101; iDiv.style.position = "absolute";
            iDiv.innerHTML = edEl.innerHTML; oDiv.onclick = function () { document.body.removeChild(oDiv); document.body.removeChild(iDiv); edEl.focus(); };
            document.body.appendChild(iDiv);
            document.body.appendChild(oDiv);
            window.scrollTo(0, 0);
        };
        function createSubtitlesImage() {
            var defImage = vars.iconFilePath + 'sample.jpg'
            var val = '<div style=\" margin:auto; min-height:50px;min-width:50px;width:100%;display:table;overflow:hidden;box-sizing:border-box;border:1px solid #bfcaf6;background-color:#3f455e;color:#ffffff;\">'
                        + '<div style=\"display:table-row;overflow:hidden;\">'
                        + '<div style=\"display:table-cell;\"><img src=\"' + defImage + '\" style=\" width:100%;z-index:-1;\" /></div>'
                        + '</div>'
                        + '<div style=\"display:table-row;\">'
                        + '<div style=\"display:table-cell;padding:5px;font-size:12px;\">Replace this text</div>'
                        + '</div>'
                        + '</div><br />';
            pasteHtmlAtCaret(val);
        };
        /*-----------------------------------------*/
        function createInfo() {
            /*form ID: htmlEdit-Info*/
            var frmInfo = document.getElementById('htmlEdit-Info-' + txtAreaID);
            if (frmInfo) { removeForm(frmInfo); return; }
            var btn = getHtmlButton(edPanel, "info")
            var form = createForm('htmlEdit-Info-' + txtAreaID, { height: '50px', width: '180px', cursor: 'default' }, formArgs.InfoArgs)
            var updateBtn = form.elements['submit'];
            //formArgs.InfoBtnEvent(updateBtn, form)//<--
            edBody.appendChild(form);
            form.style.top = (btn.offsetTop + btn.offsetHeight + 1) + 'px'; form.style.left = calcFormLeft(form, btn) + "px";

        };
        /*-----------------------------------------*/
        function fullScreen() {
            if (edBody.className == 'edBody-htmlEditor') {
                edBody.className = 'edBody-htmlEditor-max';
                var btn = getHtmlButton(edPanel, 'fullScreen');
                icon = edConfig.getIcon('restoreScreen', buttonList);
                btn.style.backgroundImage = icon.backgroundImage; btn.title = edLang.buttonsRestoreScreen; btn.style.backgroundPosition = icon.backgroundPosition;
                edStatusPanel.style.position = 'absolute'; edStatusPanel.style.bottom = '0px';
                edEl.style.maxHeight = getOffset(edBody).height - (getOffset(edPanel).height + getOffset(edStatusPanel).height + 1) + "px";
                function edFullScreenResize() {
                    edEl.style.maxHeight = getOffset(edBody).height - (getOffset(edPanel).heigh + getOffset(edStatusPanel).height + 1) + "px";
                };
                addEvent(window, 'resize', edFullScreenResize); removeAllForms();
            } else {
                edBody.className = 'edBody-htmlEditor';
                var btn = getHtmlButton(edPanel, 'fullScreen');
                icon = edConfig.getIcon('fullScreen', buttonList);
                btn.style.backgroundImage = icon.backgroundImage; btn.title = edLang.buttonsFullScreen; btn.style.backgroundPosition = icon.backgroundPosition;
                edEl.style.maxHeight = vars.maxHeight;
                edStatusPanel.removeAttribute('style');
                removeEvent('resize', edFullScreenResize); removeAllForms();
            };
        };
        function calcFormLeft(form, btn) {
            var panLeft = getOffset(edPanel).left, panWidth = getOffset(edPanel).width, formWidth = getOffset(form).width, btnLeft = getOffset(btn).left;
            if ((btnLeft + formWidth) > (panLeft + panWidth)) { return (panWidth - formWidth) }
            else { return (btnLeft - panLeft); };
        };
        /*-----------------------------------------*/
        function clearHTML(input) { var regex = /(<([^>]+)>)/ig; var res = input.replace(/&nbsp;/gi, " ").replace(regex, ""); return res; };
        function selectNode(el) {
            var r, sel;
            if (document.createRange) {
                r = document.createRange();
                r.selectNode(el)
                sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(r); rng = r;
            } else {
                var r = document.body.createTextRange();
                r.moveToElementText(el);
                r.select(); rng = r;
            }
        };
        function saveSelection() {
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    rng = sel.getRangeAt(0);
                }
            } else if (document.selection && document.selection.createRange) {
                rng = document.selection.createRange();
            }
            return rng;
        };
        function restoreSelection(range) {
            if (range) {
                if (window.getSelection) {
                    sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (document.selection && range.select) {
                    range.select();
                }
            }
        };
        /*-----------------------------------------*/
        function createElm(tag) {
            if (typeof (tag) == "string") {
                elmNew = document.createElement(tag); return (elmNew) ? elmNew : null;
            }
        };
        function setContent(el, content) { el.innerHTML = content; };
        function setStyle(el, st) { var elmStyle = el.style; for (var key in st) { el.style.setProperty(key, st[key]) } };
        function setAttributes(el, at) { for (key in at) { el.setAttribute(key, at[key]) }; };
        function appendTo(parEl, childElm) { parEl.appendChild(childElm); };
        /*-----------------------------------------*/
        function execCommand(cmd, args) {
            if (!edEl.isEqualNode(document.activeElement)) { edEl.focus(); return execCommand(cmd, args); }
            else {
                return document.execCommand(cmd, null, args);
            };
        };
        function cancelEvent(e) {
            e = e || window.event;
            if (e.preventDefault && e.stopPropagation) {
                e.preventDefault();
                e.stopPropagation();
            }
            return false;
        }
        function getSel() {
            return (window.getSelection) ? window.getSelection() : document.selection;
        };
        function getSelectionText() {
            var text = "";
            if (window.getSelection) {
                text = window.getSelection().toString();
            } else if (document.selection && document.selection.type != "Control") {
                text = document.selection.createRange().text;
            }
            return text;
        };
        function getSelectionHtml() {
            var html = "";
            if (typeof window.getSelection != "undefined") {
                var sel = window.getSelection();
                if (sel.rangeCount) {
                    var container = document.createElement("div");
                    for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                        container.appendChild(sel.getRangeAt(i).cloneContents());
                    }
                    html = container.innerHTML;
                }
            } else if (typeof document.selection != "undefined") {
                if (document.selection.type == "Text") {
                    html = document.selection.createRange().htmlText;
                }
            }
            return html;
        };
        function getSelectionParentElement() {
            var parentEl = null, sel;
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    parentEl = sel.getRangeAt(0).commonAncestorContainer;
                    if (parentEl.nodeType != 1) {
                        parentEl = parentEl.parentNode;
                    }
                }
            } else if ((sel = document.selection) && sel.type != "Control") {
                parentEl = sel.createRange().parentElement();
            }
            return parentEl.tagName;
        }
        function setSelectionHtml(html) {
            edEl.focus();
            if (window.getSelection) {
                var r = getSelection().getRangeAt(0);
                r.deleteContents();
                r.insertNode(r.createContextualFragment(html));
                getSelection().removeAllRanges();
                getSelection().addRange(r);
                //getSelection().collapseToEnd() // <-- cursor end
                //getSelection().collapse(true) // <-- select addet html
            } else if (document.selection && document.selection.createRange) {
                var sel = document.selection;
                if (sel != null) {
                    var r = sel.createRange();
                    if (r != null) { r.pasteHTML(html); r.select() };
                };
            };
        };
        function setSelectionText(replacementText) {
            var sel, range;
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    range.insertNode(document.createTextNode(replacementText));
                }
            } else if (document.selection && document.selection.createRange) {
                range = document.selection.createRange();
                range.text = replacementText;
            }
        };
        function findElm(tag, attr, val) { var list = edEl.getElementsByTagName(tag); for (var i = 0; i < list.length; i++) { if (list[i].getAttribute(attr) == val) { return list[i]; }; } };
        function checkCssProperty(obj, targetEl) {
            //var o2 = targetEl.attributes;
            //obj.filter(function (n) {
            //    return o2.indexOf(n) != -1
            //});
            //return Object.keys(o1).filter(k => k in o2)
            //bj.hasOwnProperty('myKey');
        };
        function pasteHtmlAtCaret(html, selectPastedContent) {
            edEl.focus();
            var sel, range;
            if (window.getSelection) {
                // IE9 and non-IE
                sel = window.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    var el = document.createElement("div");
                    el.innerHTML = html;
                    var frag = document.createDocumentFragment(), node, lastNode;
                    while ((node = el.firstChild)) {
                        lastNode = frag.appendChild(node);
                    }
                    var firstNode = frag.firstChild;
                    range.insertNode(frag);
                    if (lastNode) {
                        range = range.cloneRange();
                        range.setStartAfter(lastNode);
                        if (selectPastedContent) {
                            range.setStartBefore(firstNode);
                        } else {
                            range.collapse(true);
                        }
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                }
            } else if ((sel = document.selection) && sel.type != "Control") {
                // IE < 9
                var originalRange = sel.createRange();
                originalRange.collapse(true);
                sel.createRange().pasteHTML(html);
                if (selectPastedContent) {
                    range = sel.createRange();
                    range.setEndPoint("StartToStart", originalRange);
                    range.select();
                }
            }
        };
        function dupButtonTest(arrBtn) {
            var track = {}, dups = [];
            arrBtn.forEach(function (item) { !track[item] ? track[item] = true : dups.push(item); });
            if (dups.length > 0) { alert(edLang.alertsDuplicateButton + dups.toString()); return false; };
            return true;
        };
        function doCount() {
            edCharCount.innerHTML = Intl.NumberFormat(navLang, { maximumFractionDigits: 3 }).format(edEl.innerText.length);
        }
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        function UrlTest(url) {
            if (url !== null && (url.substring(0, 7) == 'http://' || url.substring(0, 8) == 'https://')) {
                var txt = url.replace(/\?.*$/, "").replace(/.*\//, "");
                var imgReg = new RegExp(/jpg|jpeg|png|jpeg|bmp|tif|tiff/gi);
                var vidReg = new RegExp(/webm|mp4|ogg/gi);
                var audReg = new RegExp(/ogg|mp3|wma|wav/gi);
                //-->//stream/2/5/?file=example.mp4
                if (imgReg.test(txt)) {
                    return "<img itemprop='image' class='" + txt + " haberresimbuyuk' title='" + txt + "'  alt='" + txt + "' style='margin: auto; display: block; width: 100%;' src='" + url.replace(getHostName(location.href), '') + "' />";
                }
                else if (vidReg.test(txt)) {
                    var tbl = document.getElementById("hidTbl").value //, uid = document.getElementById("hidUID").value, vURL = "/stream/" + tbl + "/" + uid + "/?file=" + txt;
                    return "<video class='" + txt + "' title='" + txt + "' style='margin: auto; display: block; height: 100%; width: 100%;' controls='true'><source src='" + url.replace(getHostName(location.href), '') + "'></video>";
                }
                else if (audReg.test(txt)) {
                    var tbl = document.getElementById("hidTbl").value //, uid = document.getElementById("hidUID").value, vURL = "/stream/" + tbl + "/" + uid + "/?file=" + txt;
                    return "<audio class='" + txt + "' title='" + txt + "' style='margin: auto; display: block; height: 100%; width: 100%;' controls='true'><source src='" + url.replace(getHostName(location.href), '') + "'></audio>";
                }
                else { return null };
            } else { return null };
        };
        function getOffset(el) {
            var elx = el.getBoundingClientRect();
            return { left: elx.left + window.pageXOffset, top: elx.top + window.pageYOffset, height: elx.height, width: elx.width };
        };
        function getHostName(url) {
            var pos, pPos = url.indexOf('//');
            if (pPos > 4) {
                var protocol = url.substring(0, pPos + 2); urlx = url.substring(pPos + 2);
                pos = urlx.indexOf("/");
                return pos > -1 ? protocol + urlx.substring(0, urlx.indexOf("/")) : protocol + urlx;
            } else {
                pos = url.indexOf("/") + 2; return pos > -1 ? url.substring(0, pos) : url;
            };
        };
        function getDomainName(url) {
            return url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
        };
        /*-----------------------------------------*/
        function insertNodeAtCursor(node) {
            var range, html;
            if (window.getSelection && window.getSelection().getRangeAt) {
                range = window.getSelection().getRangeAt(0);
                range.insertNode(node);
            } else if (document.selection && document.selection.createRange) {
                range = document.selection.createRange();
                html = (node.nodeType == 3) ? node.data : node.outerHTML;
                range.pasteHTML(html); document.caretPositionFromPoint
            }
        }
        function insertHtmlAtCursor(html) {
            var range, node;
            if (window.getSelection && window.getSelection().getRangeAt) {
                range = window.getSelection().getRangeAt(0);
                node = range.createContextualFragment(html);
                range.insertNode(node);
            } else if (document.selection && document.selection.createRange) {
                document.selection.createRange().pasteHTML(html);
            }
        }
        function getCaretPosition() {
            if (window.getSelection && window.getSelection().getRangeAt) {
                var range = window.getSelection().getRangeAt(0);
                var selectedObj = window.getSelection();
                var rangeCount = 0;
                var childNodes = selectedObj.anchorNode.parentNode.childNodes;
                for (var i = 0; i < childNodes.length; i++) {
                    if (childNodes[i] == selectedObj.anchorNode) {
                        break;
                    }
                    if (childNodes[i].outerHTML)
                        rangeCount += childNodes[i].outerHTML.length;
                    else if (childNodes[i].nodeType == 3) {
                        rangeCount += childNodes[i].textContent.length;
                    }
                }
                return range.startOffset + rangeCount;
            }
            return -1;
        }
        function getSelectionStart() {
            var node = document.getSelection().anchorNode;
            return (node.nodeType == 3 ? node.parentNode : node);
        }
        /*-----------------------------------------*/
        edConfig.editorInstance(); console.log("Editor element ID: '" + edEl.id + "'")
    };
};
/* Remember : Editor Id= (Textarea Id) + '-edEl'*/