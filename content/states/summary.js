const showSummaryState = (response) => {
    // Return if main popup not exists
    if (!document.querySelector('.gpts .gpts-content')) return;

    response = response.replace(/'(.*?)'/g, "**$1**");
    var mdResponse = marked.parse(response);

    // Create summary state DOM and put it inside the popup content
    const dom = `<div class="gpts-summary">
                    <div class="gpts-summary-text" id="gpts-summary-text">${mdResponse}</div>
                </div>`;
    document.querySelector('.gpts .gpts-content').innerHTML = dom;
}

// Display summary options after summary is completed
const showSummaryOptions = (regenerateCallback) => {
    // Return if summary not exists
    if (!document.querySelector('.gpts .gpts-content .gpts-summary')) return;

    // Create summary options DOM and append it to the popup content
    const dom = `<div class="gpts-summary-options"> 
                    <div class="gpts-summary-option gpts-summary-option-copy" title="Copy">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.9992 22.9994V4.99924H8.99829" stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M22.999 8.99939H4.99829V26.9994H22.999V8.99939Z" stroke="black" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div class="gpts-summary-option gpts-summary-option-regenerate" title="Revert">
                    <input type="button" onclick="regenerateOptionAction">
                </div>

                </div>

                <div class="gpts-summary-options-action"></div>`;
    document.querySelector('.gpts .gpts-content .gpts-summary').insertAdjacentHTML('beforeend', dom);

    // Handle options actions
    copyOptionAction();
}

// The following function is responsible for copying the summary text to the clipboard when the copy button is clicked
const copyOptionAction = () => {
    // Creating an HTML element with the message to be displayed when the text is copied
    const actionDom = `<div class="gpts-summary-options-action-copy">
                            The summary text was copied!
                        </div>`;

    // Adding a click event to the copy button, copying the text to clipboard, and displaying the message
    dynamicDomEvent('click', '.gpts-summary-option-copy', () => {
        document.querySelector('.gpts-summary-options-action').innerHTML = actionDom;
        document.querySelector('.gpts-content').scrollTop = document.querySelector('.gpts-content').scrollHeight;
        copyToClipboard('gpts-summary-text');
    });
}