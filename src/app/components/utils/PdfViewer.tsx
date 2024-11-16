import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

/**
 * A component that renders a PDF document in the browser.
 * @param {{pdfUrl: string}} props The properties of the component.
 * @prop {string} pdfUrl The URL of the PDF document to render.
 * @returns A JSX node representing the rendered PDF document.
 */
export default function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numberOfPages, setNumberOfPages] = useState<number | null>(null);

  return (
    <Document
      file={pdfUrl}
      onLoadSuccess={({ numPages }) => setNumberOfPages(numPages)}
    >
      {numberOfPages === null ? null : (
        [...Array(numberOfPages)].map((_, pageIndex) => (
          <Page key={pageIndex + 1} pageNumber={pageIndex + 1}/>
        ))
      )}
    </Document>
  );
}
