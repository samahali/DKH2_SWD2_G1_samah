function showEmojieName(emojieElement) {
    // Find the next sibling element (the text div) within the same parent
    const textDiv = emojieElement.nextElementSibling;
    // remove class visually-hidden
    if (textDiv) {
        textDiv.classList.remove('visually-hidden');
    }
}
