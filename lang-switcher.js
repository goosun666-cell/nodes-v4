(function() {
    // 1. Inject Google Translate Script
    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(gtScript);

    // 2. Inject hidden Google Translate element
    var gtDiv = document.createElement('div');
    gtDiv.id = 'google_translate_element';
    gtDiv.style.display = 'none';
    document.body.appendChild(gtDiv);

    // 3. Define init function
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            autoDisplay: false
        }, 'google_translate_element');
    };

    // 4. Inject custom CSS to hide Google's top bar and tooltips
    var style = document.createElement('style');
    style.innerHTML = `
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0px !important; position: static !important; }
        html { top: 0px !important; position: static !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        #goog-gt-tt { display: none !important; }
        
        .nav-links {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
        /* Custom Switcher Styles */
        .custom-lang-switcher {
            display: inline-block;
            margin-left: 20px;
            position: relative;
            vertical-align: middle;
        }
        .custom-lang-switcher select {
            background: rgba(1, 10, 20, 0.8);
            color: #D4AF37;
            border: 1px solid rgba(212, 175, 55, 0.3);
            padding: 6px 12px;
            border-radius: 4px;
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 0.75rem;
            font-weight: bold;
            cursor: pointer;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            padding-right: 28px;
            transition: all 0.3s ease;
        }
        .custom-lang-switcher::after {
            content: '▼';
            font-size: 0.6rem;
            color: #D4AF37;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
        }
        .custom-lang-switcher select:hover {
            border-color: #D4AF37;
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
        }
        .custom-lang-switcher select option {
            background: #010A14;
            color: #E1E1E1;
            padding: 10px;
        }
        @media (max-width: 768px) {
            .custom-lang-switcher { margin-left: 0; margin-top: 10px; }
        }
    `;
    document.head.appendChild(style);

    // 5. Inject Custom UI into header
    window.addEventListener('DOMContentLoaded', function() {
        var navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            var switcherHtml = `
                <div class="custom-lang-switcher" translate="no">
                    <select id="gtranslate_selector" onchange="doGTranslate(this.value)">
                        <option value="en|en">🌐 EN</option>
                        <option value="en|zh-CN">🇨🇳 中文</option>
                        <option value="en|ja">🇯🇵 日本語</option>
                        <option value="en|ko">🇰🇷 한국어</option>
                        <option value="en|ru">🇷🇺 Русский</option>
                        <option value="en|ar">🇦🇪 العربية</option>
                    </select>
                </div>
            `;
            navLinks.insertAdjacentHTML('beforeend', switcherHtml);

            // Set selected based on cookie
            var match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
            var currentLang = match ? match[2].split('/')[2] : 'en';
            var selector = document.getElementById('gtranslate_selector');
            if(selector) {
                if(currentLang === 'en') selector.value = 'en|en';
                else {
                    var optionExists = Array.from(selector.options).some(opt => opt.value === 'en|' + currentLang);
                    if(optionExists) {
                        selector.value = 'en|' + currentLang;
                    }
                }
            }
        }
    });

    // 6. Define translation trigger function
    window.doGTranslate = function(lang_pair) {
        if(lang_pair == '') lang_pair = 'en|en';
        var lang = lang_pair.split('|')[1];
        if(!lang) return;
        
        var teCombo = document.querySelector('.goog-te-combo');
        if (teCombo) {
            teCombo.value = lang;
            teCombo.dispatchEvent(new Event('change'));
        } else {
            // If Google Translate hasn't loaded yet, retry
            setTimeout(function() { doGTranslate(lang_pair); }, 500);
        }
    };
})();
