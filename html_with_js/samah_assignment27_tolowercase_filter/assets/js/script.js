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
    let searchText = document.querySelector(".search-input").value.trim();
    let factItems = document.querySelectorAll(".fact-item");
    let introText = document.querySelector(".intro-text");

    if (!introText.dataset.originalText) {
        introText.dataset.originalText = introText.innerHTML; // Save original HTML content
    }
    
    factItems.forEach(item => {
        if (!item.dataset.originalText) {
            item.dataset.originalText = item.innerHTML; // Save original HTML
        }
    });

    // Reset original content before searching
    introText.innerHTML = introText.dataset.originalText;
    factItems.forEach(item => item.innerHTML = item.dataset.originalText);

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
        } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "MARK") {
            node.childNodes.forEach(highlightMatches);
        }
    };

    // Apply highlighting to the intro and fact items
    highlightMatches(introText);
    factItems.forEach(highlightMatches);

    if (!foundMatchedText) {
        return alert("No matches found. Try different keywords.");
    }

    setTimeout(() => {
        let firstMatched = document.querySelector("mark");
        if (firstMatched) {
            firstMatched.scrollIntoView({ behavior: "smooth", block: "center" });
            
            // Add a subtle flash effect to the first match
            firstMatched.style.transition = "background-color 0.5s ease";
            firstMatched.style.backgroundColor = "rgba(212, 175, 55, 0.8)";
            setTimeout(() => {
                firstMatched.style.backgroundColor = "";
            }, 1000);
        }
    }, 100);
};

// Enable search on Enter key press
document.querySelector(".search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search();
    }
});

// Add scroll animation
document.addEventListener("DOMContentLoaded", function() {
    const factItems = document.querySelectorAll(".fact-item");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });
    
    factItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(item);
    });
});
