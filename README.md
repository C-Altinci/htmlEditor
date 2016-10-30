
# htmlEditor
Javascript wysiwyg html editor.

        //-----------------html editor example-------------------
        /*Available all the buttons list:*/
        // buttonList = ['xhtml', 'fontSize', 'fontFamily', 'formatBlock', 'bold', 'italic', 'underline', 'bgcolor', 'forecolor', 'center', 'justify', 'left', 'right', 'hr', 'ol', 'ul', 'indent', 'outdent', 'paragraf', 'ticket', 'strikethrough', 'subscript', 'superscript', 'removeformat', 'insertImage', 'link', 'unlink', 'youtube', 'video', 'audio', 'subtitleimage', 'twitter', 'facebook', 'preview', 'fullScreen']

        createEditor([], { /* textarea ids (array). Minimum requirements: [] (Blank array) */
            iconFilePath: 'img/',           /* require!                     */
            onlyPasteTextChecked: true,     /* optional, default: false     */
            statusPanelDisplay: true,       /* optional, default: true      */
            minWidth: '300px',              /* optional, default: '300px'   */
            maxHeight: '500px',             /* optional, default: '500px'   */
            minHeight: '200px',             /* optional, default: '200px'   */
            maxWidth: '600px',              /* optional, default: '600px'   */
            scriptTagProtection: true,      /* optional, default: false     */
            fullButtons: true,              /* optional, default: false     */
            theme: '#9bc2e8',               /* optional, default: '#cccccc' */
            gradient: true,                 /* optional, default: false     */
            statusPanelDisplay: true,
            /* Optional */  buttonList: ['xhtml', 'bold', 'italic', 'underline', 'bgcolor', 'forecolor', 'center', 'justify', 'left', 'right', 'hr', 'ol', 'ul', 'indent', 'outdent', 'strikethrough', 'subscript', 'superscript', 'removeformat']
        });
        /*
        ex. 1: createEditor([], { iconFilePath: 'img/' }); // all texarea make minimal standard htmleditor.
        ex. 2: createEditor(['test1'], { iconFilePath: 'img/' }); // Only 'test1' id texarea make minimal standard htmleditor.
        ex. 3: createEditor(['test1','test2'], { iconFilePath: 'img/' }); //'test1'  and 'test2' ids texarea make minimal standard htmleditor.
        */
        /* Notes:
        1. If 'onlyPasteTextChecked: true' and 'statusPanelDisplay: false' parameters used together, users never the HTML source can not write the script tag.
        2. If the 'onlyPasteTextChecked: true' is made, drag-and-drop or the clipboard by pasting HTML tags are extracted.
        3. Textarea ids (array) ex: ['textarea1','textarea2']. If you empty array [] done, all done htmleditor textarea in the body.
        4. If given a list parameter button, the top button list consists of minimum standards.
        5. buttonList button rankings, ranking will be on the button panel.
        6. If 'fullButtons: true', buttonList will be ignored.
        7. The interface language is selected automatically based on the browser language. Supported languages currently, English and Turkish. Default lang: English.
        8. Additional features: Embedding Tweet, Facebook posts and Youtube video. (Be sure to place the site page body the necessary scripts to tweet and Facebook post).
        9. For all modern browsers. (Not tested in Opera)

        Regards...
        Çağlayan ALTINCI
        caglayana@hotmail.com
