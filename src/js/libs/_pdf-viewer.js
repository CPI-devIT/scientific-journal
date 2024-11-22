import 'pdfjs-viewer-element';

document.addEventListener('DOMContentLoaded', async () => {
    const viewer = document.querySelector('pdfjs-viewer-element')
    // Wait for the viewer initialization, receive PDFViewerApplication
    const viewerApp = await viewer.initialize()
    // Open PDF file data using Uint8Array instead of URL
   // viewerApp.open('./assets/pdfs/politika-obrabotki-pdn.pdf')
})