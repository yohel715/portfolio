"use client";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export default function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
    return (
    <Document file={pdfUrl}>
      <Page
        pageNumber={1}
      />
    </Document>
  );
}
