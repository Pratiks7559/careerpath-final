import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function downloadPlanAsPDF(studyPlan) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 12;
  const lineHeight = 25;
  const colX = { subject: 60, goal: 260, time: 480 };
  const pageSize = [600, 800];
  const marginTop = 50;
  const marginBottom = 60;
  const usableHeight = pageSize[1] - marginTop - marginBottom;

  let page = pdfDoc.addPage(pageSize);
  let y = pageSize[1] - marginTop;

  const addNewPage = () => {
    page = pdfDoc.addPage(pageSize);
    y = pageSize[1] - marginTop;
  };

  // Title
  page.drawText('Study Plan (Weekly)', {
    x: 50,
    y,
    size: 20,
    font,
    color: rgb(0, 0.53, 0.71),
  });

  y -= 40;

  for (const day of Object.keys(studyPlan)) {
    const tasks = studyPlan[day];
    if (tasks.length === 0) continue;

    const neededHeight = (tasks.length + 4) * lineHeight;
    if (y - neededHeight < marginBottom) addNewPage();

    // Day Header
    page.drawText(day, {
      x: 50,
      y,
      size: 14,
      font,
      color: rgb(0.2, 0.2, 0.2),
    });
    y -= lineHeight;

    // Table Header
    page.drawText('Subject', { x: colX.subject, y, font, size: fontSize, color: rgb(0, 0, 0.5) });
    page.drawText('Goal', { x: colX.goal, y, font, size: fontSize, color: rgb(0, 0, 0.5) });
    page.drawText('Time', { x: colX.time, y, font, size: fontSize, color: rgb(0, 0, 0.5) });

    y -= 10;
    page.drawLine({
      start: { x: 50, y },
      end: { x: 550, y },
      thickness: 1,
      color: rgb(0.6, 0.6, 0.6),
    });

    y -= lineHeight;

    for (const task of tasks) {
      if (y - lineHeight < marginBottom) {
        addNewPage();
      }

      page.drawText(task.subject, { x: colX.subject, y, font, size: fontSize });
      page.drawText(task.goal, { x: colX.goal, y, font, size: fontSize });
      page.drawText(task.time, { x: colX.time, y, font, size: fontSize });

      y -= lineHeight;

      page.drawLine({
        start: { x: 50, y: y + 10 },
        end: { x: 550, y: y + 10 },
        thickness: 0.5,
        color: rgb(0.8, 0.8, 0.8),
      });
    }

    y -= 20;
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'study_plan.pdf';
  link.click();
}
