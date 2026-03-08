const { Document, Packer, Paragraph, TextRun, Header, Footer, PageNumber, AlignmentType, HeadingLevel, PageBreak } = require('docx');
const fs = require('fs');

// APA 7th Edition formatted paper - CONDENSED VERSION (~1,600 words)
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Times New Roman", size: 24 } // 12pt
      }
    },
    paragraphStyles: [
      {
        id: "Title",
        name: "Title",
        basedOn: "Normal",
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 0, after: 0 }, alignment: AlignmentType.CENTER }
      },
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 240 }, alignment: AlignmentType.CENTER, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 240 }, alignment: AlignmentType.LEFT, outlineLevel: 1 }
      }
    ]
  },
  sections: [
    // Title Page
    {
      properties: {
        page: {
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      children: [
        new Paragraph({ spacing: { before: 2880 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun({ text: "Strategic and Economic Implications of IS Outsourcing", bold: true })]
        }),
        new Paragraph({ spacing: { before: 1440 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun("Srinath Jagarlamudi")]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun("University of the Cumberlands")]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun("ITS-831: Information Technology Import in Strategic Planning")]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun("December 7, 2025")]
        })
      ]
    },
    // Main Content
    {
      properties: {
        page: {
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun("IS OUTSOURCING"), new TextRun("     "), new TextRun({ children: [PageNumber.CURRENT] })]
          })]
        })
      },
      children: [
        // Introduction
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Introduction")] }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Information Systems (IS) outsourcing has become a strategic imperative for organizations seeking to optimize operational efficiency, reduce costs, and maintain competitive advantage in an increasingly digital business environment. IS outsourcing refers to the practice of contracting external service providers to manage, maintain, or develop an organization's IT infrastructure, applications, and services (Lacity et al., 2010). The global IT outsourcing market now exceeds $500 billion annually (Pearlson et al., 2024), with organizations routinely outsourcing functions ranging from infrastructure management and application development to cybersecurity operations and data analytics.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("However, outsourcing is neither universally appropriate nor automatically successful. Organizations must carefully weigh the advantages against significant challenges and risks while ensuring strategic alignment with broader business objectives. This paper critically examines the strategic and economic implications of IS outsourcing by analyzing both advantages and challenges, discussing strategic implications for business competitiveness, and presenting a detailed case study of Procter & Gamble's transformative partnership with Hewlett-Packard.")]
        }),

        // Advantages
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Advantages of IS Outsourcing")] }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("IS outsourcing offers compelling strategic and operational advantages that have driven its widespread adoption across industries. First, "), new TextRun({ text: "cost efficiency", bold: true }), new TextRun(" remains the most frequently cited rationale for outsourcing. Organizations can achieve significant savings through several mechanisms: converting fixed IT costs into variable costs provides financial flexibility, specialized providers achieve economies of scale by serving multiple clients, and labor arbitrage through offshore outsourcing can reduce personnel costs by 40-60% for routine functions (Lacity et al., 2010; Willcocks et al., 2018). Beyond direct savings, outsourcing improves financial predictability through fixed-price contracts and service-level agreements.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Second, outsourcing provides "), new TextRun({ text: "access to specialized expertise", bold: true }), new TextRun(" that would be prohibitively expensive or impractical to develop internally. Service providers invest heavily in recruiting and retaining technical specialists across diverse technology domains, from cloud architecture and artificial intelligence to cybersecurity and blockchain. Through exposure to multiple clients and diverse use cases, providers accumulate expertise far beyond what internal employees supporting a single organization could develop.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Third, outsourcing enables organizations to "), new TextRun({ text: "focus on core business competencies", bold: true }), new TextRun(". Strategic management theory emphasizes that competitive advantage comes from concentrating resources on activities that directly differentiate organizations in the marketplace (Lacity et al., 2010; Pearlson et al., 2024). By outsourcing non-differentiating IT functions, organizations free internal resources to focus on core competencies driving competitive advantage.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Finally, outsourcing providers offer "), new TextRun({ text: "scalability and flexibility", bold: true }), new TextRun(", allowing organizations to rapidly expand or contract IT services in response to changing business needs (Willcocks et al., 2018). Cloud-based arrangements enable provisioning additional computing capacity within minutes, eliminating IT capacity as a constraint on business initiatives.")]
        }),

        // Challenges
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Challenges and Risks of IS Outsourcing")] }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Despite compelling advantages, organizations must confront significant challenges that can undermine outsourcing success. "), new TextRun({ text: "Security and data privacy concerns", bold: true }), new TextRun(" arise because outsourcing requires sharing sensitive data with external parties, creating attractive cyberattack targets (Willcocks et al., 2018). The 2013 Target breach through a compromised contractor illustrates how third-party access can become an attack vector. Organizations remain legally responsible for data protection even when processing occurs externally, navigating complex regulations including GDPR, HIPAA, and PCI DSS across multiple jurisdictions.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Loss of control", bold: true }), new TextRun(" over critical functions creates dependencies limiting organizational flexibility and responsiveness. When internal staff no longer perform critical functions, organizations lose detailed technical knowledge and institutional memory informing technology decisions (Lacity et al., 2010). Outsourcing providers operate under contractual agreements defining scope and change management processes, potentially triggering costly negotiations when requirements shift unexpectedly.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Quality control issues", bold: true }), new TextRun(" prove challenging because service-level agreements often fail to capture nuanced quality dimensions determining business value (Willcocks et al., 2018). Cultural differences and geographic separation in offshore arrangements exacerbate challenges through communication barriers and time zone complications. The principal-agent problem creates incentives for providers to reduce costs potentially at the expense of service quality.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Hidden costs and vendor lock-in", bold: true }), new TextRun(" often surprise organizations. Transition costs for vendor selection, contract negotiation, knowledge transfer, and relationship establishment can consume first-year anticipated savings. Once migrated to proprietary platforms, switching providers becomes prohibitively expensive. "), new TextRun({ text: "Intellectual property risks", bold: true }), new TextRun(" emerge when sharing proprietary information, as providers may transfer knowledge to competitors while IP ownership often proves ambiguous.")]
        }),

        // Strategic Implications
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Strategic Implications")] }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("The outsourcing decision carries profound strategic implications extending beyond operational efficiency. IS outsourcing can enhance competitive advantage when properly aligned with strategy but can commoditize differentiating capabilities when applied indiscriminately (Pearlson et al., 2024). The critical distinction lies in identifying which IT capabilities create competitive advantage—such as Amazon's recommendation engine or a bank's trading algorithms—versus commodity functions safe to outsource (Lacity et al., 2010). This boundary shifts over time as technology evolves and business models change.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Transaction cost economics provides a useful framework, suggesting organizations should internalize activities with high asset specificity or uncertainty while outsourcing activities with low values on these dimensions. The resource-based view complements this approach, recommending retention of activities involving rare, valuable, inimitable resources creating sustainable competitive advantage. Effective outsourcing requires alignment with long-term business strategy, designing arrangements with flexibility mechanisms allowing adjustment as strategy evolves.")]
        }),

        // Case Study
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Case Study: Procter & Gamble and Hewlett-Packard")] }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("The P&G-HP partnership represents one of the most successful IS outsourcing relationships in business history. In the early 2000s, P&G faced intense competitive pressure requiring cost reduction while improving business agility. Their IT organization operated complex, fragmented infrastructure across 80 countries with redundant systems driving high costs (Willcocks et al., 2018). Leadership recognized IT infrastructure management as a non-core competency diverting resources from consumer understanding and product innovation—the true sources of competitive advantage.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("In 2003, P&G announced a comprehensive 10-year, $3 billion outsourcing agreement with HP covering data centers, networks, workplace technology, and help desk operations. Critically, P&G retained control of business applications, IT strategy, and relationship management, ensuring alignment between capabilities and objectives (Lacity et al., 2010). The strategy reflected sophisticated design principles: structuring the relationship as a strategic partnership with HP incentives tied to P&G's business performance, retaining significant internal capabilities for architecture and governance, and including provisions for continuous improvement.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Implementation involved transferring over 2,000 IT employees to HP, preserving institutional knowledge while establishing sophisticated governance structures including executive steering committees and operational management teams. HP consolidated P&G's infrastructure from 150 data centers to fewer than 20, implementing common platforms globally.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Results were substantial across multiple dimensions. P&G achieved cost savings exceeding $1 billion through consolidation and standardization (Willcocks et al., 2018). System availability increased to 99.9% from approximately 98% before outsourcing, while help desk response times decreased 30%. Most significantly, the partnership enhanced business agility—P&G estimated the relationship contributed to over $10 billion in revenue growth through faster time-to-market for new products.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("Key lessons emerged from this case. First, successful outsourcing requires retaining strategic IT capabilities internally for effective governance. Second, partnership structures with shared risk and reward create alignment that transactional relationships lack. Third, governance requires continuous attention and significant organizational investment. Finally, outsourcing works best when focused on commodity functions while retaining differentiating capabilities. While P&G's scale enabled a comprehensive partnership, smaller organizations can achieve similar benefits through focused, modular arrangements targeting specific commodity functions (Pearlson et al., 2024).")]
        }),

        // Conclusion
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Conclusion")] }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("IS outsourcing represents a powerful strategic tool delivering significant value when applied thoughtfully and managed effectively. The advantages—cost efficiency, access to specialized expertise, focus on core competencies, and improved scalability—are substantial and well-documented. However, security concerns, loss of control, quality challenges, hidden costs, and intellectual property risks demand careful management with realistic expectations.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("The P&G case study demonstrates that well-executed strategic outsourcing can deliver transformational business value—over $1 billion in savings while simultaneously improving service quality, business agility, and innovation capability. For organizations considering outsourcing, key recommendations include: approaching outsourcing as a strategic decision requiring thorough analysis rather than a tactical cost-reduction initiative; retaining internal capabilities in governance, architecture, and relationship management; structuring relationships as partnerships with aligned incentives; investing in robust performance management processes; and maintaining flexibility through contract provisions allowing adjustment as needs evolve.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun("When executed with strategic intention and effective governance, IS outsourcing enhances competitive advantage by allowing organizations to focus on what truly differentiates them while leveraging external expertise for commodity functions.")]
        }),

        // References
        new Paragraph({ children: [new PageBreak()] }),
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("References")] }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { left: 720, hanging: 720 },
          children: [new TextRun("Lacity, M. C., Khan, S., Yan, A., & Willcocks, L. P. (2010). A review of the IT outsourcing empirical literature and future research directions. "), new TextRun({ text: "Journal of Information Technology", italics: true }), new TextRun(", "), new TextRun({ text: "25", italics: true }), new TextRun("(4), 395-433. https://doi.org/10.1057/jit.2010.21")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { left: 720, hanging: 720 },
          children: [new TextRun("Pearlson, K. E., Saunders, C. S., & Galletta, D. F. (2024). "), new TextRun({ text: "Managing and using information systems: A strategic approach", italics: true }), new TextRun(" (8th ed.). Wiley.")]
        }),

        new Paragraph({
          spacing: { line: 480 },
          indent: { left: 720, hanging: 720 },
          children: [new TextRun("Willcocks, L. P., Lacity, M. C., & Craig, A. (2018). Outsourcing and offshoring business services. In "), new TextRun({ text: "The Routledge Companion to Management Information Systems", italics: true }), new TextRun(" (pp. 363-378). Routledge.")]
        })
      ]
    }
  ]
});

// Save the document
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-8/paper-4-is-outsourcing/Jagarlamudi_Srinath_Paper_4.docx', buffer);
  console.log('Condensed document created successfully!');
});
