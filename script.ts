// Function to handle content editing
// Function to handle content editing
function makeEditable() {
    const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach(element => {
        element.addEventListener('input', (event) => {
            const target = event.target as HTMLElement;
            const key = target.id;
            const value = target.innerText;

            // For demonstration purposes, log changes
            console.log(`Updated ${key}: ${value}`);
            // Implement saving to local storage or other persistent storage if needed
        });
    });
}

// Call the function to make elements editable
makeEditable();

// Download PDF functionality using html2pdf.js
import html2pdf from 'html2pdf.js';

const downloadButton = document.getElementById('downloadPdf') as HTMLButtonElement;
downloadButton.addEventListener('click', () => {
    const resumeElement = document.getElementById('resume') as HTMLElement;
    html2pdf().from(resumeElement).save('resume.pdf');
});

// Shareable link setup (this is an example, you need backend integration for actual URL generation)
const username = 'johnDoe'; // Replace with actual username
const uniqueURL = `https://${username}.vercel.app/resume`; // Example URL
const shareLinkElement = document.getElementById('shareLink') as HTMLAnchorElement;
shareLinkElement.href = uniqueURL;

// api/saveResume.js

export default async function handler(req, res) {
    const { username, resume } = req.body;

    // Save resume data to a database or file system
    // For demonstration purposes, you could return a static URL
    res.status(200).json({ url: `https://${username}.vercel.app/resume` });
}
async function saveResume(username: string, resume: any) {
    const response = await fetch('/api/saveResume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, resume }),
    });

    const data = await response.json();
    return data.url;
}

