function hideAllTexts() {
    document.getElementById('en-text').style.display = 'none';
    document.getElementById('fr-text').style.display = 'none';
    document.getElementById('gr-text').style.display = 'none';
}

function showLanguage(lang) {
    hideAllTexts();
    document.getElementById(`${lang}-text`).style.display = 'block';
}

// Initially hiding all texts
hideAllTexts();