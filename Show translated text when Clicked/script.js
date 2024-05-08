function hideAllTexts() {
    document.getElementById('en-text').style.display = 'none';
    document.getElementById('fr-text').style.display = 'none';
    document.getElementById('gr-text').style.display = 'none';
}

function showLanguage(lang) {
    var translations = {
        'en': 'I am English',
        'fr': 'Je suis français',
        'gr': 'Ich bin Deutsch'
    };

    hideAllTexts(); // Hide all texts first
    var langText = document.getElementById(`${lang}-text`);
    if (langText) {
        langText.textContent = translations[lang];
        langText.style.display = 'block'; // Show the text for the selected language
    }
}

// Initially hiding all texts
hideAllTexts();
