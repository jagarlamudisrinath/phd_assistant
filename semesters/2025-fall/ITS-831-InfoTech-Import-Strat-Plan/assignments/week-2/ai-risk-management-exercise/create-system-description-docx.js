const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
        ShadingType, VerticalAlign, PageNumber, LevelFormat } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Times New Roman", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 32, bold: true, color: "000000", font: "Times New Roman" },
        paragraph: { spacing: { before: 0, after: 240 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "000000", font: "Times New Roman" },
        paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "000000", font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "000000", font: "Times New Roman" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-stakeholders",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "AI Risk Management Exercise - Resubmission", size: 20, italics: true })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun("Page "), new TextRun({ children: [PageNumber.CURRENT] }), new TextRun(" of "), new TextRun({ children: [PageNumber.TOTAL_PAGES] })]
      })] })
    },
    children: [
      // Title Page
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("AI System Description")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
        children: [new TextRun({ text: "AI-Powered Mortgage Loan Approval System", size: 28, bold: true })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 480 },
        children: [new TextRun({ text: "AI Risk Management Exercise", size: 24 })] }),

      // Meta info table
      new Table({
        columnWidths: [3000, 6360],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
              shading: { fill: "E8E8E8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Organization:", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Lakeview Loan Servicing")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
              shading: { fill: "E8E8E8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "System Classification:", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Moderately to Highly Critical")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
              shading: { fill: "E8E8E8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Deployment Status:", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Production (Operational)")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
              shading: { fill: "E8E8E8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Student:", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Srinath Jagarlamudi")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
              shading: { fill: "E8E8E8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Course:", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("ITS-831: InfoTech Import in Strat Plan")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA },
              shading: { fill: "E8E8E8", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Submission:", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 6360, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Resubmission - November 2025")] })] })
          ]}),
        ]
      }),

      // Section 1: System Purpose
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. System Purpose")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun("The AI-Powered Mortgage Loan Approval System is designed to transform Lakeview Loan Servicing's mortgage underwriting process by automating credit assessments, predicting loan default risks, and accelerating approval decisions. The system supports the organization's strategic goals across multiple dimensions:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Operational Efficiency: ", bold: true }), new TextRun("Reducing manual underwriting time from 5-7 days to 24-48 hours for standard applications")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Risk Management: ", bold: true }), new TextRun("Improving portfolio quality through data-driven default prediction with 90%+ accuracy")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Competitive Advantage: ", bold: true }), new TextRun("Enhancing customer experience through faster loan decisions and transparent communication")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Regulatory Compliance: ", bold: true }), new TextRun("Ensuring fair lending practices and maintaining compliance with ECOA, FHA, and CFPB guidelines")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Business Growth: ", bold: true }), new TextRun("Scaling loan processing capacity to support capital marketing initiatives and loan offer generation programs")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun("This system directly supports Lakeview's capital markets operations and loan offer generation strategies by enabling rapid, consistent, and data-driven lending decisions across thousands of mortgage applications monthly.")] }),

      // Section 2: System Functionality
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. System Functionality")] }),
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.1 Core Capabilities")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun("The AI system analyzes comprehensive applicant data to generate risk-based loan recommendations using supervised machine learning algorithms (gradient boosting and neural networks).")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Input Data Sources")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Credit Bureau Data: ", bold: true }), new TextRun("Credit scores (FICO), payment history, credit utilization, inquiries, derogatory marks")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Income Verification: ", bold: true }), new TextRun("W-2s, tax returns, pay stubs, employment history, debt-to-income (DTI) ratios")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Asset Documentation: ", bold: true }), new TextRun("Bank statements, investment accounts, down payment sources")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Property Information: ", bold: true }), new TextRun("Appraisals, loan-to-value (LTV) ratios, property type and location")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Application Details: ", bold: true }), new TextRun("Loan amount, term, purpose (purchase, refinance, cash-out)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Alternative Data: ", bold: true }), new TextRun("Rental payment history, utility payments, employment stability indicators")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Processing Pipeline")] }),
      new Paragraph({ spacing: { after: 100, line: 360 },
        children: [new TextRun({ text: "1. Data Ingestion: ", bold: true }), new TextRun("Automated extraction from credit bureaus, income verification services, and internal databases")] }),
      new Paragraph({ spacing: { after: 100, line: 360 },
        children: [new TextRun({ text: "2. Feature Engineering: ", bold: true }), new TextRun("Calculation of 120+ derived risk features (e.g., DTI, LTV, credit utilization trends, payment shock ratio)")] }),
      new Paragraph({ spacing: { after: 100, line: 360 },
        children: [new TextRun({ text: "3. Risk Scoring: ", bold: true }), new TextRun("ML model generates probability of default (0.00-1.00 scale) and risk classification (Low/Medium/High)")] }),
      new Paragraph({ spacing: { after: 100, line: 360 },
        children: [new TextRun({ text: "4. Decision Logic: ", bold: true }), new TextRun("Rule-based layer applies lending policies, regulatory constraints, and business rules")] }),
      new Paragraph({ spacing: { after: 100, line: 360 },
        children: [new TextRun({ text: "5. Recommendation Output: ", bold: true }), new TextRun("Approve (40% auto-approval), Approve with Conditions, Manual Review (25%), or Deny")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun({ text: "6. Explainability Layer: ", bold: true }), new TextRun("SHAP values generate reason codes and applicant-facing explanations")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("System Performance Metrics")] }),
      new Table({
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Metric", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Value", bold: true })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Processing Volume")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("~12,000 mortgage applications per month")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Processing Speed")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("<30 seconds per application for automated decisions")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Current Accuracy")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("90.3% (validated against 12-month default outcomes)")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Human Override Rate")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("8.5% (underwriters overturn model recommendations)")] })] })
          ]}),
        ]
      }),

      // Section 3: Stakeholders
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Stakeholders")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.1 Primary Stakeholders (Direct Users and Impact)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("1. Loan Applicants")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Individuals and families applying for mortgage loans (purchase, refinance, home equity)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Impact: ", bold: true }), new TextRun("Receive faster loan decisions, transparent explanations, and fair treatment")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Fairness, privacy, explainability of denials, data security")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Accurate assessments, consistent treatment, reasonable rates")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2. Loan Underwriters and Processors")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Review flagged applications, validate model recommendations, make final decisions")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Impact: ", bold: true }), new TextRun("Workflow efficiency improved; focus on complex cases")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Model reliability, override flexibility, liability for AI-assisted decisions")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Accurate risk scores, clear explanations, ability to override when appropriate")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3. Loan Officers and Originators")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Advise applicants, pre-screen applications, communicate decisions")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Impact: ", bold: true }), new TextRun("Faster turnaround enables higher throughput and customer satisfaction")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Ability to explain denials, maintaining customer relationships")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Transparent reason codes, competitive approval rates")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.2 Secondary Stakeholders (Organizational Leadership)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4. Executive Leadership (CEO, CFO, CRO)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Strategic oversight, risk management, financial performance")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Default rates, fair lending compliance, shareholder value")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("ROI on AI investment, risk-adjusted returns, regulatory compliance")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("5. Compliance Officer and Legal Team")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Ensure adherence to ECOA, FHA, CFPB regulations, state lending laws")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Algorithmic bias, discriminatory outcomes, regulatory enforcement")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Zero violations, audit trail, bias monitoring, explainability")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("6. Data Science and AI Team")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Model development, training, validation, monitoring, retraining")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Model drift, data quality, fairness metrics, technical debt")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Access to quality data, computational resources, governance support")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("7. IT Security and Infrastructure")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Data protection, system availability, cybersecurity, cloud infrastructure")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("PII/financial data exposure, vendor security, insider threats")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Secure architecture, encryption, access controls, incident response")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("8. AI Ethics and Governance Board")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Oversight of AI risk management, fairness reviews, policy approval")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Bias in outcomes, transparency, accountability")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Regular reporting, bias audits, compliance with NIST AI RMF")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.3 External Stakeholders")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("9. Regulatory Agencies")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "CFPB: ", bold: true }), new TextRun("Consumer Financial Protection Bureau - Fair lending enforcement")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "OCC: ", bold: true }), new TextRun("Office of the Comptroller of the Currency - Bank supervision")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "FTC: ", bold: true }), new TextRun("Federal Trade Commission - Consumer protection, AI transparency")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "HUD: ", bold: true }), new TextRun("Housing and Urban Development - Fair Housing Act enforcement")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Compliance with fair lending laws, audit cooperation, transparency")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("10. Credit Bureaus and Data Providers")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Provide credit reports, income verification, identity validation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Organizations: ", bold: true }), new TextRun("Experian, TransUnion, Equifax, The Work Number")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Secure data handling, FCRA compliance, contractual obligations")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("11. Third-Party Auditors")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Independent validation of model performance, bias testing, security audits")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Comprehensive documentation, reproducible results, control evidence")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("12. Investors and Shareholders")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Provide capital, expect returns, monitor risk")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Concerns: ", bold: true }), new TextRun("Default rates, fair lending lawsuits, brand reputation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Competitive returns, prudent risk management, ESG compliance")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("13. Consumer Advocacy Groups")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Organizations: ", bold: true }), new TextRun("National Fair Housing Alliance, National Consumer Law Center, NAACP")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Role: ", bold: true }), new TextRun("Monitor for discriminatory practices, advocate for borrower rights")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Expectations: ", bold: true }), new TextRun("Fair outcomes, public accountability, bias mitigation")] }),

      // Section 4: System Criticality
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. System Criticality Assessment")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun({ text: "Business Criticality Level: HIGH", bold: true })] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun("The AI-Powered Mortgage Loan Approval System is highly critical to Lakeview Loan Servicing's operations for the following reasons:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Revenue Impact: ", bold: true }), new TextRun("Processes $3.2B in annual loan volume; system downtime costs ~$450K per day in delayed originations")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Regulatory Compliance: ", bold: true }), new TextRun("Non-compliance with fair lending laws could result in multi-million dollar penalties and consent orders")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Competitive Positioning: ", bold: true }), new TextRun("Fast, accurate decisions are key differentiators; system enables 48-hour approvals vs. industry average of 5-7 days")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Customer Trust: ", bold: true }), new TextRun("Mortgage lending is trust-intensive; discriminatory outcomes would cause severe reputational damage")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Operational Dependency: ", bold: true }), new TextRun("65% of applications now processed with AI assistance; manual-only processing would require 40% more underwriting staff")] }),

      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun({ text: "Risk Classification: ", bold: true }), new TextRun("Given the combination of high business impact, significant regulatory scrutiny, sensitive personal data, and potential for discriminatory harm, this system requires "), new TextRun({ text: "comprehensive AI risk management", bold: true }), new TextRun(" aligned with NIST AI RMF.")] }),

      // Section 5: Professional Context
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. Connection to Professional Context")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun("As a Data Engineer and Analyst at Lakeview Loan Servicing, I work directly with:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Capital Marketing Analytics: ", bold: true }), new TextRun("Analyzing loan offer performance, customer segmentation, and portfolio risk")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Loan Offer Generation: ", bold: true }), new TextRun("Data pipelines supporting targeted marketing and pre-qualification models")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Mortgage Data Analysis: ", bold: true }), new TextRun("Statistical analysis of loan performance, default prediction, and regulatory reporting")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun("This AI risk assessment directly relates to my professional responsibilities by addressing:")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Data Quality and Governance: ", bold: true }), new TextRun("Ensuring training data represents diverse applicant populations")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Model Monitoring: ", bold: true }), new TextRun("Implementing dashboards to track fairness metrics and performance drift")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
        children: [new TextRun({ text: "Regulatory Reporting: ", bold: true }), new TextRun("Supporting HMDA, fair lending, and model validation documentation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
        children: [new TextRun({ text: "Ethical AI Deployment: ", bold: true }), new TextRun("Balancing business objectives with fair lending requirements")] }),
      new Paragraph({ spacing: { after: 200, line: 360 },
        children: [new TextRun("This exercise provides practical experience in operationalizing NIST AI RMF principles within a financial services environment, preparing me for expanded roles in AI governance and strategic IT planning aligned with my PhD research interests in data-driven decision-making and IT strategic planning.")] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-2/ai-risk-management-exercise/Jagarlamudi_Srinath_AI_System_Description.docx", buffer);
  console.log("✅ Created: Jagarlamudi_Srinath_AI_System_Description.docx");
});
