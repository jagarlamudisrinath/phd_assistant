const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, LevelFormat, Header, Footer, PageNumber } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 32, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 0, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "course-list",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "Jagarlamudi - INTR-799 Reflection", size: 20, italics: true })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", size: 20 }), new TextRun({ children: [PageNumber.CURRENT], size: 20 })]
      })] })
    },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Module 4 Reflection: Bridging Academic Theory and Data Engineering Practice")] }),

      // Student Info
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Student: ", bold: true }), new TextRun("Srinath Jagarlamudi")] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Course: ", bold: true }), new TextRun("INTR-799 - Applied Learning Practicum")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Date: ", bold: true }), new TextRun("November 24, 2025")] }),

      // Horizontal line (simulated with underscores)
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "─".repeat(80), color: "CCCCCC" })] }),

      // Part 1
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Part 1: Current Semester Enrollment")] }),

      new Paragraph({ numbering: { reference: "course-list", level: 0 }, spacing: { after: 60 },
        children: [new TextRun({ text: "ITS-831", bold: true }), new TextRun(" - Information Technology Import in Strategic Planning")] }),
      new Paragraph({ numbering: { reference: "course-list", level: 0 }, spacing: { after: 60 },
        children: [new TextRun({ text: "DSRT-734", bold: true }), new TextRun(" - Inferential Statistics in Decision-Making")] }),
      new Paragraph({ numbering: { reference: "course-list", level: 0 }, spacing: { after: 60 },
        children: [new TextRun({ text: "INTR-799", bold: true }), new TextRun(" - Applied Learning Practicum")] }),
      new Paragraph({ numbering: { reference: "course-list", level: 0 }, spacing: { after: 240 },
        children: [new TextRun({ text: "OREN-500", bold: true }), new TextRun(" - Graduate Orientation Training")] }),

      // Horizontal line
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "─".repeat(80), color: "CCCCCC" })] }),

      // Part 2
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Part 2: Workplace Application Reflection")] }),

      // Body paragraphs with proper spacing
      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("This semester has fundamentally changed how I approach my work as a Data Engineer and Analyst at Lakeview Loan Servicing. Rather than viewing my coursework and professional responsibilities as separate domains, I've discovered they form an integrated framework for solving real business problems.")
      ]}),

      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("The most significant shift in my thinking came from combining ITS-831's emphasis on strategic IT alignment with DSRT-734's rigorous statistical methodology. Previously, when tasked with building data pipelines or creating analytical models, I focused primarily on technical execution—making the code work, optimizing queries, delivering accurate numbers. What I was missing was the strategic lens that connects these technical solutions to organizational objectives.")
      ]}),

      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("A recent challenge at work perfectly illustrates this evolution in my approach. Our marketing team requested a new automated system for identifying high-value customers who might respond to refinance offers during periods of interest rate volatility. My initial instinct was to jump straight into the data—pull historical records, run some correlations, build a model. But the strategic planning concepts from ITS-831 made me pause and ask different questions first. What is the actual business objective here? How does this initiative align with our capital markets strategy? What organizational resources and constraints need to be considered? Who are the stakeholders, and what are their success metrics?")
      ]}),

      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("This strategic framing completely changed my technical approach. Instead of building a one-off analytical model, I designed a scalable system that could adapt to changing business priorities. I documented how this initiative supported our broader digital transformation goals and identified dependencies with other IT systems. The statistical methods from DSRT-734 then gave me the rigor to validate my approach—I could articulate not just that certain customer attributes correlated with refinance interest, but provide confidence intervals, explain statistical significance, and defend my modeling assumptions with hypothesis testing.")
      ]}),

      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("What surprised me most was how this integration improved my communication with non-technical stakeholders. When I presented my recommendations to the marketing leadership team, I didn't just show them a model. I explained the strategic rationale, discussed the statistical validity of our predictions, acknowledged the limitations and assumptions, and connected this work to our organizational IT roadmap. The credibility this brought to my analysis was transformative. I was no longer just the data person who runs numbers—I became a strategic partner in decision-making.")
      ]}),

      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("Regarding my dissertation interests, this semester has crystallized my research direction around data-driven decision-making frameworks in organizational contexts. I'm particularly interested in how organizations can bridge the gap between statistical capability and strategic implementation. Many companies have the data and the analytical talent, but struggle to translate insights into aligned action. The intersection of ITS-831 and DSRT-734 has given me a theoretical foundation to explore this challenge systematically.")
      ]}),

      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("Looking ahead, I'm already applying these concepts to an upcoming project involving predictive analytics for loan default risk. Rather than approaching it purely as a machine learning exercise, I'm starting with strategic questions about risk appetite, regulatory compliance, and organizational readiness for data-driven credit decisions. The statistical tools from DSRT-734 will ensure methodological soundness, while the strategic frameworks from ITS-831 will ensure business value and organizational alignment.")
      ]}),

      new Paragraph({ spacing: { after: 200, line: 360 }, children: [
        new TextRun("The value of this practicum experience lies not in any single insight, but in developing an integrated mindset. I now instinctively think about technical problems through both strategic and statistical lenses. This dual perspective has made me more effective in my current role and prepared me for the kind of research I want to pursue in my dissertation—work that doesn't just advance statistical methods, but helps organizations actually use them to make better decisions. As I continue through my doctoral program, I'm committed to maintaining this integration, ensuring that every analytical method I learn is tested against real business value and every strategic framework is validated with analytical rigor.")
      ]}),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/INTR-799-Applied-Learning-Practicum/assignments/module-4-reflection/Jagarlamudi_Srinath_Practicum_Reflection.docx", buffer);
  console.log("DOCX created successfully!");
});
