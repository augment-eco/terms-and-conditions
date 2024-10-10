import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from "node:fs";
import { convert } from 'mdpdf';
import PDFWatermark from 'pdf-watermark';

const __dirname = dirname(fileURLToPath(import.meta.url));

const [_, __, source, outputFileName, watermark] = process.argv;

if (!source || !outputFileName) {
  console.error("Usage: <command> <source> <output file name> <watermark>");
  process.exit(1);
}

try {
  const exists = existsSync(source);

  if (!exists) {
    throw new Error(`Source file does not exist in path ${source}`);
  }

  const pdfPath = await convert({
    source,
    destination: join(__dirname, outputFileName),
    styles: join(__dirname, "styles.css"),
    pdf: {
      format: 'A4',
      orientation: 'portrait',
      border: {
        top: '56px',
        right: '56px',
        bottom: '56px',
        left: '56px'
      }
    }
  });
  console.log("PDF created at", pdfPath);

  if (watermark) {
    await PDFWatermark({
      pdf_path: pdfPath,
      text: "Preview",
      textOption: {
        size: 100,
        opacity: 0.1,
        diagonally: true,
      },
      output_dir: pdfPath,
    });
    console.log("Watermark added to PDF");
  }
} catch (e) {
  console.error("PDF creation failed", e);
  process.exit(1);
}
