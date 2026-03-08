const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, BorderStyle, WidthType,
        HeadingLevel, ShadingType, VerticalAlign, PageNumber } = require('docx');
const fs = require('fs');

// Table styling
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };
const headerShading = { fill: "D5E8F0", type: ShadingType.CLEAR };

// Helper to create header cell
const headerCell = (text, width) => new TableCell({
  borders: cellBorders,
  width: { size: width, type: WidthType.DXA },
  shading: headerShading,
  verticalAlign: VerticalAlign.CENTER,
  children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, bold: true, size: 22 })]
  })]
});

// Helper to create data cell
const dataCell = (text, width) => new TableCell({
  borders: cellBorders,
  width: { size: width, type: WidthType.DXA },
  children: [new Paragraph({ children: [new TextRun({ text, size: 22 })] })]
});

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Times New Roman", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 32, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 1 } }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "DSRT-734 Final Exam", size: 20, italics: true })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", size: 20 }), new TextRun({ children: [PageNumber.CURRENT], size: 20 }), new TextRun({ text: " of ", size: 20 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 20 })]
      })] })
    },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("DSRT-734 Final Comprehensive Exam - Answers")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Student: Srinath Jagarlamudi", size: 24 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Course: DSRT-734-M51 - Inferential Statistics in Decision-Making", size: 24 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Date: December 11, 2025", size: 24 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [new TextRun({ text: "Total Points: 200 points", size: 24 })] }),

      // Question 1
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 1 (20 Points) - MULTIPLE CHOICE")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Answer: Option B")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: '"Team Green is significantly different from Team Blue and Red, but Team Blue is not significantly different from Team Red."', italics: true })] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Rationale:")] }),
      new Paragraph({ children: [new TextRun("From the Post-Hoc Comparisons table (Bonferroni adjusted):")] }),
      new Paragraph({ children: [new TextRun("• Blue vs Green: p = 0.021 → Significant (p < 0.05)")] }),
      new Paragraph({ children: [new TextRun("• Blue vs Red: p = 1.000 → Not significant (p > 0.05)")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("• Green vs Red: p = 0.046 → Significant (p < 0.05)")] }),

      // Question 2
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 2 (20 Points) - ESSAY")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("APA Conclusion:")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("A paired samples t-test was conducted to compare hours spent studying and hours spent watching TV. Results revealed no statistically significant difference between study hours (M = 2.94, SD = 3.29) and TV hours (M = 2.59, SD = 2.15), t(254) = 1.714, p = .088. The difference between time spent studying and watching television was not statistically significant at the α = .05 level.")] }),

      // Question 3
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 3 (20 Points) - MULTIPLE CHOICE")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Answer: Option D - Pearson's correlation")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Rationale:")] }),
      new Paragraph({ children: [new TextRun("The scatterplot shows two continuous variables with a linear relationship, making Pearson's correlation the most appropriate test. Chi-square is for categorical data, and independent t-test compares group means rather than analyzing correlation.")] }),
      new Paragraph({ spacing: { after: 240 }, children: [] }),

      // Question 4
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 4 (20 Points) - MULTIPLE CHOICE")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Answer: Option A - (t[47.84]=2.276, p=0.027)")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Rationale:")] }),
      new Paragraph({ children: [new TextRun("Key: Levene's test p = 0.044 (significant at α = 0.05)")] }),
      new Paragraph({ children: [new TextRun("• Significant Levene's test means variances are NOT equal")] }),
      new Paragraph({ children: [new TextRun("• Must use Welch's t-test (not Student's t)")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("• Welch's row shows: t = 2.276, df = 47.836, p = 0.027")] }),

      // Question 5
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 5 (25 Points) - JASP ANALYSIS")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Descriptive Statistics:")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("Descriptive statistics were calculated for scores of two teams (N = 50 each).")] }),
      new Table({
        columnWidths: [1500, 900, 1200, 1200, 1200, 1100, 1100],
        rows: [
          new TableRow({ tableHeader: true, children: [
            headerCell("Variable", 1500), headerCell("N", 900), headerCell("Mean", 1200),
            headerCell("Median", 1200), headerCell("SD", 1200), headerCell("Min", 1100), headerCell("Max", 1100)
          ]}),
          new TableRow({ children: [
            dataCell("BlueTeam", 1500), dataCell("50", 900), dataCell("72.60", 1200),
            dataCell("74.00", 1200), dataCell("14.96", 1200), dataCell("50.00", 1100), dataCell("99.00", 1100)
          ]}),
          new TableRow({ children: [
            dataCell("RedTeam", 1500), dataCell("50", 900), dataCell("72.94", 1200),
            dataCell("68.50", 1200), dataCell("21.18", 1200), dataCell("41.00", 1100), dataCell("110.00", 1100)
          ]})
        ]
      }),
      new Paragraph({ spacing: { before: 120, after: 240 }, children: [new TextRun("The Blue Team and Red Team have nearly identical mean scores (72.60 vs 72.94). However, the Red Team shows greater variability (SD = 21.18) compared to the Blue Team (SD = 14.96), with a wider range of scores (41-110 vs 50-99).")] }),

      // Question 6
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 6 (20 Points) - MULTIPLE CHOICE")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Answer: Option B - p = 0.273")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Rationale:")] }),
      new Paragraph({ children: [new TextRun("• Small sample size (N = 31)")] }),
      new Paragraph({ children: [new TextRun("• Some expected counts may be < 5")] }),
      new Paragraph({ children: [new TextRun("• Fisher's exact test is more appropriate for small samples")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("• From the output, Fisher's exact test p = 0.273")] }),

      // Question 7
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 7 (30 Points) - JASP ANALYSIS")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("JASP Output - Paired Samples T-Test:")] }),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Descriptive Statistics:", bold: true })] }),
      new Table({
        columnWidths: [3500, 1500, 1500, 1500],
        rows: [
          new TableRow({ tableHeader: true, children: [
            headerCell("Variable", 3500), headerCell("N", 1500), headerCell("Mean", 1500), headerCell("SD", 1500)
          ]}),
          new TableRow({ children: [
            dataCell("Score1 (Pre-training)", 3500), dataCell("50", 1500), dataCell("94.98", 1500), dataCell("6.59", 1500)
          ]}),
          new TableRow({ children: [
            dataCell("Score2 (Post-training)", 3500), dataCell("50", 1500), dataCell("98.14", 1500), dataCell("8.49", 1500)
          ]})
        ]
      }),
      new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Test Results:", bold: true })] }),
      new Table({
        columnWidths: [4000, 4000],
        rows: [
          new TableRow({ tableHeader: true, children: [headerCell("Statistic", 4000), headerCell("Value", 4000)] }),
          new TableRow({ children: [dataCell("Mean Difference", 4000), dataCell("-3.16", 4000)] }),
          new TableRow({ children: [dataCell("t-statistic", 4000), dataCell("-2.073", 4000)] }),
          new TableRow({ children: [dataCell("Degrees of Freedom", 4000), dataCell("49", 4000)] }),
          new TableRow({ children: [dataCell("p-value", 4000), dataCell("0.043", 4000)] }),
          new TableRow({ children: [dataCell("Cohen's d", 4000), dataCell("0.416", 4000)] }),
          new TableRow({ children: [dataCell("95% CI", 4000), dataCell("[-6.22, -0.10]", 4000)] })
        ]
      }),
      new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "APA Conclusion:", bold: true })] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("A paired samples t-test was conducted to compare employee knowledge scores before (Score1) and after (Score2) a training program for 50 employees. There was a statistically significant difference between pre-training scores (M = 94.98, SD = 6.59) and post-training scores (M = 98.14, SD = 8.49), t(49) = -2.07, p = .043. The mean increase of 3.16 points represents a small effect size (Cohen's d = 0.42). These results suggest that the training program was effective in improving employee product knowledge.")] }),

      // Question 8
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 8 (15 Points) - ESSAY")] }),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "1. Research Question:", bold: true })] }),
      new Paragraph({ children: [new TextRun("Is there a significant difference in loan processing time between automated AI-based underwriting systems versus traditional manual underwriting in mortgage applications?")] }),
      new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "2. Data Collection:", bold: true })] }),
      new Paragraph({ children: [new TextRun("I would gather loan processing time data (measured in hours from application submission to underwriting decision) for two independent groups of mortgage applications:")] }),
      new Paragraph({ children: [new TextRun("• Group 1: Loans processed through AI-based automated underwriting (n = 50)")] }),
      new Paragraph({ children: [new TextRun("• Group 2: Loans processed through traditional manual underwriting (n = 50)")] }),
      new Paragraph({ children: [new TextRun("Data would be randomly sampled from mortgage processing records at my organization, Lakeview Loan Servicing.")] }),
      new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "3. Statistical Test:", bold: true })] }),
      new Paragraph({ children: [new TextRun("Independent samples t-test would be the most appropriate test because:")] }),
      new Paragraph({ children: [new TextRun("• We are comparing means of a continuous dependent variable (processing time)")] }),
      new Paragraph({ children: [new TextRun("• There are two independent groups (AI vs. traditional underwriting)")] }),
      new Paragraph({ children: [new TextRun("• Observations are independent between groups")] }),
      new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "4. Interpretation if Significant:", bold: true })] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("If p < 0.05, we would reject the null hypothesis and conclude there is a statistically significant difference in processing times between the two underwriting methods. This would indicate that the underwriting approach (AI vs. traditional) has a meaningful impact on operational efficiency. For example, if AI-underwritten loans showed significantly shorter processing times, this would provide evidence supporting increased investment in automated underwriting technology to improve loan servicing operations.")] }),

      // Question 9
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Question 9 (30 Points) - JASP ANALYSIS")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("JASP Output - Chi-Square Test of Independence:")] }),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Observed Frequencies:", bold: true })] }),
      new Table({
        columnWidths: [3000, 3000, 3000],
        rows: [
          new TableRow({ tableHeader: true, children: [headerCell("", 3000), headerCell("Disease=0", 3000), headerCell("Disease=1", 3000)] }),
          new TableRow({ children: [dataCell("Gender=0", 3000), dataCell("9", 3000), dataCell("6", 3000)] }),
          new TableRow({ children: [dataCell("Gender=1", 3000), dataCell("10", 3000), dataCell("8", 3000)] })
        ]
      }),
      new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Expected Frequencies:", bold: true })] }),
      new Table({
        columnWidths: [3000, 3000, 3000],
        rows: [
          new TableRow({ tableHeader: true, children: [headerCell("", 3000), headerCell("Disease=0", 3000), headerCell("Disease=1", 3000)] }),
          new TableRow({ children: [dataCell("Gender=0", 3000), dataCell("8.64", 3000), dataCell("6.36", 3000)] }),
          new TableRow({ children: [dataCell("Gender=1", 3000), dataCell("10.36", 3000), dataCell("7.64", 3000)] })
        ]
      }),
      new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Test Results:", bold: true })] }),
      new Table({
        columnWidths: [5000, 3000],
        rows: [
          new TableRow({ tableHeader: true, children: [headerCell("Statistic", 5000), headerCell("Value", 3000)] }),
          new TableRow({ children: [dataCell("Chi-square (χ²)", 5000), dataCell("0.000", 3000)] }),
          new TableRow({ children: [dataCell("Degrees of Freedom", 5000), dataCell("1", 3000)] }),
          new TableRow({ children: [dataCell("p-value (Chi-square)", 5000), dataCell("1.000", 3000)] }),
          new TableRow({ children: [dataCell("p-value (Fisher's exact)", 5000), dataCell("1.000", 3000)] }),
          new TableRow({ children: [dataCell("Minimum expected count", 5000), dataCell("6.36", 3000)] }),
          new TableRow({ children: [dataCell("Sample size (N)", 5000), dataCell("33", 3000)] })
        ]
      }),
      new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "APA Conclusion:", bold: true })] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("A chi-square test of independence was conducted to examine whether the prevalence of chronic disease differed between genders. The sample included 33 participants. The chi-square test revealed no statistically significant association between gender and disease status, χ²(1, N = 33) = 0.00, p = 1.000. Fisher's exact test confirmed this finding (p = 1.000). The results indicate that chronic disease prevalence did not differ significantly between males and females in this sample. The proportion of individuals with the disease was similar across both genders.")] }),

      // Summary
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Summary of Answers")] }),
      new Table({
        columnWidths: [1500, 1200, 2500, 3800],
        rows: [
          new TableRow({ tableHeader: true, children: [
            headerCell("Question", 1500), headerCell("Points", 1200), headerCell("Type", 2500), headerCell("Answer", 3800)
          ]}),
          new TableRow({ children: [dataCell("Q1", 1500), dataCell("20", 1200), dataCell("Multiple Choice", 2500), dataCell("Option B", 3800)] }),
          new TableRow({ children: [dataCell("Q2", 1500), dataCell("20", 1200), dataCell("Essay", 2500), dataCell("APA conclusion (not significant, p = .088)", 3800)] }),
          new TableRow({ children: [dataCell("Q3", 1500), dataCell("20", 1200), dataCell("Multiple Choice", 2500), dataCell("Option D", 3800)] }),
          new TableRow({ children: [dataCell("Q4", 1500), dataCell("20", 1200), dataCell("Multiple Choice", 2500), dataCell("Option A", 3800)] }),
          new TableRow({ children: [dataCell("Q5", 1500), dataCell("25", 1200), dataCell("JASP Essay", 2500), dataCell("Descriptive stats for both teams", 3800)] }),
          new TableRow({ children: [dataCell("Q6", 1500), dataCell("20", 1200), dataCell("Multiple Choice", 2500), dataCell("Option B", 3800)] }),
          new TableRow({ children: [dataCell("Q7", 1500), dataCell("30", 1200), dataCell("JASP Essay", 2500), dataCell("Paired t-test (significant, p = .043)", 3800)] }),
          new TableRow({ children: [dataCell("Q8", 1500), dataCell("15", 1200), dataCell("Essay", 2500), dataCell("Research design application", 3800)] }),
          new TableRow({ children: [dataCell("Q9", 1500), dataCell("30", 1200), dataCell("JASP Essay", 2500), dataCell("Chi-square (not significant, p = 1.000)", 3800)] }),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Total", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "200", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3800, type: WidthType.DXA }, shading: { fill: "E8E8E8", type: ShadingType.CLEAR }, children: [new Paragraph({ children: [] })] })
          ]})
        ]
      }),
      new Paragraph({ spacing: { before: 240 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Prepared for review before manual submission to Blackboard", italics: true })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/DSRT-734-Infer-Stats-Decision-Making/assignments/final-exam/Jagarlamudi_Srinath_Final_Exam.docx", buffer);
  console.log("Document created: Jagarlamudi_Srinath_Final_Exam.docx");
});
