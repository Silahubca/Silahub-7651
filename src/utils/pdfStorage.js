// PDF Storage Utilities
export class PDFStorage {
  constructor() {
    this.storageKey = 'generated_pdfs';
  }

  // Save generated PDF to storage
  saveGeneratedPDF(pdfData) {
    try {
      const existingPDFs = this.getStoredPDFs();
      existingPDFs.push(pdfData);
      localStorage.setItem(this.storageKey, JSON.stringify(existingPDFs));
      return true;
    } catch (error) {
      console.error('Error saving PDF:', error);
      return false;
    }
  }

  // Get all stored PDFs
  getStoredPDFs() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch (error) {
      console.error('Error reading PDFs:', error);
      return [];
    }
  }

  // Delete PDF
  deletePDF(pdfId) {
    try {
      const existingPDFs = this.getStoredPDFs();
      const filteredPDFs = existingPDFs.filter(pdf => pdf.id !== pdfId);
      localStorage.setItem(this.storageKey, JSON.stringify(filteredPDFs));
      return true;
    } catch (error) {
      console.error('Error deleting PDF:', error);
      return false;
    }
  }
}

export default new PDFStorage();