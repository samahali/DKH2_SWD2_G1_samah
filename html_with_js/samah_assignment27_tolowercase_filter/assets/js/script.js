/**
 * Cleans and normalizes an HTML string by replacing line breaks and extra spaces.
 *
 * @param {string} html - The raw HTML content as a string.
 * @returns {string} - A cleaned string with normalized spaces.
 */
const cleanText = (html) => {

    return html
        .replace(/<br\s*\/?>/gi, " ")   // Replace <br> tags with spaces using gi to Create case-insensitive
        .replace(/[\r\n]+/g, " ")       // Replace newlines with space
        .replace(/\s+/g, " ")           // Replace multiple spaces with a single space
        .trim();                        // Remove leading/trailing spaces
};


/**
 * Searches for a user-provided query within an article and list items, highlighting matches.
 *
 * - Saves the original content of the article and list items (li) to prevent permanent modification.
 * - Normalizes spaces and creates a case-insensitive regex for accurate searching.
 * - Highlights matching text using the `<mark>` element.
 * - Scrolls to the first matched occurrence if found.
 * - return alert if not matched text found
 * @function
 */
const search = () => {
    let searchText = document.querySelector("form input").value.trim();
    let article = document.querySelector("article");
    let listItems = document.querySelectorAll("li");

    if (!article.dataset.originalText) {
        article.dataset.originalText = article.innerHTML; // Save original HTML content
    }
    listItems.forEach(li => {
        if (!li.dataset.originalText) {
            li.dataset.originalText = li.innerHTML; // Save original HTML for each <li>
        }
    });

    // Reset original content before searching
    article.innerHTML = article.dataset.originalText;
    listItems.forEach(li => li.innerHTML = li.dataset.originalText);

    if (searchText === "") return;

    let normalizedSearchText = searchText.replace(/\s+/g, " ").toLowerCase(); // Normalize spaces in input
    let regex = new RegExp(normalizedSearchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");

    let foundMatchedText = false;

    // Function to highlight matches
    const highlightMatches = (node) => {
        if (node.nodeType === 3) { // Text node
            let text = cleanText(node.nodeValue);
            if (regex.test(text)) {
                foundMatchedText = true;
                let newHTML = text.replace(regex, `<mark>$&</mark>`);
                let tempDiv = document.createElement("div");
                tempDiv.innerHTML = newHTML;

                while (tempDiv.firstChild) {
                    node.parentNode.insertBefore(tempDiv.firstChild, node);
                }
                node.parentNode.removeChild(node);
            }
        } else {
            node.childNodes.forEach(highlightMatches);
        }
    };

    // Apply highlighting to the article and list items
    highlightMatches(article);
    listItems.forEach(highlightMatches);

    if (!foundMatchedText) {
        return alert("No matches found.");
    }

    setTimeout(() => {
        let firstMatched = document.querySelector("mark");
        if (firstMatched) firstMatched.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
};

