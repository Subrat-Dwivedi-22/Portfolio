function copyText() {
    const textToCopy = document.getElementById("text-to-copy").textContent;
    const button = document.getElementById("copy-button");

    // Use the Clipboard API to copy text
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Change button text to "Copied!"
        button.textContent = "Copied!";
        button.classList.add("copied");

        // Optionally disable the button after copying
        button.disabled = true;
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

function showThankYouMessage() {
    // Hide the form content
    document.getElementById('form-content').style.display = 'none';
    // Show the thank you message
    document.getElementById('thank-you-message').style.display = 'block';
  }