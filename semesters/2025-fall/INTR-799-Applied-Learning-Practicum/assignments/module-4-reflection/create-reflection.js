const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, LevelFormat } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 24 } // 12pt default
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 180, after: 120 }, outlineLevel: 1 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "course-list",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Part 1: Current Semester Courses
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Part 1: Current Semester Courses")]
      }),

      // Course list
      new Paragraph({
        numbering: { reference: "course-list", level: 0 },
        children: [
          new TextRun({ text: "ITS-831", bold: true }),
          new TextRun(": Information Technology Import in Strategic Planning")
        ]
      }),
      new Paragraph({
        numbering: { reference: "course-list", level: 0 },
        children: [
          new TextRun({ text: "DSRT-734", bold: true }),
          new TextRun(": Inferential Statistics in Decision-Making")
        ]
      }),
      new Paragraph({
        numbering: { reference: "course-list", level: 0 },
        children: [
          new TextRun({ text: "INTR-799", bold: true }),
          new TextRun(": Applied Learning Practicum")
        ]
      }),
      new Paragraph({
        numbering: { reference: "course-list", level: 0 },
        children: [
          new TextRun({ text: "OREN-500", bold: true }),
          new TextRun(": Graduate Orientation Training")
        ]
      }),

      // Part 2: Reflection on Knowledge Application
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Part 2: Reflection on Knowledge Application")]
      }),

      // Paragraph 1
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("As a Data Engineer and Analyst at Lakeview Loan Servicing, I work extensively on capital marketing campaigns, loan offer generation, and mortgage data analysis. The coursework from this semester has directly informed how I approach these responsibilities, particularly in my recent work on optimizing our capital marketing targeting strategy.")]
      }),

      // Paragraph 2
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("The strategic IT concepts from ITS-831 have fundamentally changed how I think about aligning data initiatives with business objectives. Previously, I focused primarily on the technical execution of campaigns—building data pipelines, generating customer lists, and tracking performance metrics. Now, I explicitly frame each project within the context of organizational strategy. For our latest capital marketing campaign, I started by mapping how our data governance practices and analytical capabilities support broader business goals around customer retention and revenue growth. This strategic framing helped me articulate the value of investing in more sophisticated analytical approaches, which led directly to implementing regression analysis for campaign optimization.")]
      }),

      // Paragraph 3
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("The statistical methods from DSRT-734, particularly regression analysis, have become central to my daily work. For the capital marketing campaign, I used multiple regression to predict customer response likelihood based on loan characteristics, payment history, credit scores, and demographic factors. This allowed us to move beyond simple segmentation to a more nuanced understanding of what drives customer engagement. By identifying which variables had the strongest predictive power, we optimized our targeting strategy to focus resources on customers most likely to respond positively. The regression model revealed that recent payment consistency and remaining loan balance were far more predictive than traditional demographic variables, which shifted our entire targeting approach. We're now seeing measurably higher response rates and better return on marketing investment.")]
      }),

      // Paragraph 4
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("What strikes me most is how these courses reinforce each other in practical application. The IT strategic planning concepts gave me the business vocabulary and framework to justify the analytical work, while the statistical methods provided the technical rigor to deliver measurable results. I can now have conversations with business stakeholders about how data-driven decision-making aligns with strategic objectives, then turn around and execute sophisticated analyses that validate those claims.")]
      }),

      // Paragraph 5 - Dissertation connection
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("These experiences are directly shaping my dissertation research on data-driven decision-making in organizational IT contexts. My work on the capital marketing campaign has revealed how organizations struggle to translate statistical insights into strategic action—a gap that goes beyond technical capability to organizational culture and communication practices. The practicum experience is helping me refine my research questions to focus not just on analytical methods, but on the organizational factors that enable or constrain data-driven decision-making in practice. This real-world context is invaluable for grounding my dissertation in authentic organizational challenges rather than purely theoretical constructs.")]
      }),

      // Paragraph 6 - Practicum benefits and conclusion
      new Paragraph({
        children: [new TextRun("The practicum structure provides unique benefits that purely academic study cannot replicate: immediate feedback on whether theoretical concepts work in practice, deeper understanding of organizational constraints that shape IT decision-making, and development of skills in translating academic research into business-relevant insights. This real-world context has accelerated my learning and ensured that my doctoral education remains grounded in authentic organizational challenges. The immediate impact on my current role has been profound—I'm approaching problems more strategically, analyzing data more rigorously, and communicating results more effectively. This integration of theory and practice has made me a more valuable contributor to my organization and a more thoughtful analyst overall.")]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Jagarlamudi_Srinath_Practicum_Reflection.docx", buffer);
  console.log("Document created: Jagarlamudi_Srinath_Practicum_Reflection.docx");
});
