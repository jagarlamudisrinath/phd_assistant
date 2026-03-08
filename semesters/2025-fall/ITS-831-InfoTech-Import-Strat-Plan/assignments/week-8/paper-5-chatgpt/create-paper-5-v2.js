const { Document, Packer, Paragraph, TextRun, Header, Footer, AlignmentType, PageNumber, HeadingLevel, PageBreak } = require('docx');
const fs = require('fs');

// APA 7th Edition formatted document - Trimmed v2
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Times New Roman", size: 24 }
      }
    },
    paragraphStyles: [
      {
        id: "Title",
        name: "Title",
        basedOn: "Normal",
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 0, after: 0, line: 480 }, alignment: AlignmentType.CENTER }
      },
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 240, line: 480 }, alignment: AlignmentType.CENTER, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 240, line: 480 }, alignment: AlignmentType.LEFT, outlineLevel: 1 }
      },
      {
        id: "Normal",
        name: "Normal",
        run: { font: "Times New Roman", size: 24 },
        paragraph: { spacing: { line: 480 }, indent: { firstLine: 720 } }
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
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [
              new TextRun({ text: "Running head: GENERATIVE AI IN ACADEMIC SCHOLARSHIP", font: "Times New Roman", size: 24 })
            ]
          })]
        })
      },
      children: [
        new Paragraph({ spacing: { before: 2880 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun({ text: "Navigating Generative AI in Academic Scholarship:", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun({ text: "An Evaluation and Critical Reflection", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({ spacing: { before: 480 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun({ text: "Srinath Jagarlamudi", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun({ text: "University of the Cumberlands", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun({ text: "ITS-831: Information Technology Import in Strategic Planning", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480 },
          children: [new TextRun({ text: "December 11, 2025", font: "Times New Roman", size: 24 })]
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
            children: [
              new TextRun({ text: "GENERATIVE AI IN ACADEMIC SCHOLARSHIP", font: "Times New Roman", size: 24 }),
              new TextRun({ text: "    " }),
              new TextRun({ children: [PageNumber.CURRENT], font: "Times New Roman", size: 24 })
            ]
          })]
        })
      },
      children: [
        // Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480, after: 240 },
          children: [new TextRun({ text: "Navigating Generative AI in Academic Scholarship: An Evaluation and Critical Reflection", font: "Times New Roman", size: 24, bold: true })]
        }),

        // Introduction
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Generative artificial intelligence has fundamentally disrupted traditional paradigms of academic writing and knowledge production. Tools like ChatGPT can produce coherent, sophisticated text within seconds, raising profound questions about intellectual autonomy, authorship, and scholarly inquiry. This advancement creates both opportunities and challenges for higher education institutions and PhD students navigating the evolving research landscape (Diab & El Hajj, 2024).", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The implications for doctoral education are particularly significant. PhD programs aim to develop original thinkers capable of advancing knowledge through rigorous research and critical analysis. AI tools that generate literature reviews or synthesize findings threaten to short-circuit intellectual development, yet simultaneously offer unprecedented capabilities for managing information overload and accelerating research processes (Pearlson et al., 2024). The central challenge lies not in whether AI should be permitted, but in establishing ethical frameworks that leverage AI's capabilities while preserving intellectual rigor.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "This paper examines generative AI in academic scholarship through four lenses: presenting an AI-generated essay on AI ethics in mortgage lending, evaluating that content for depth and limitations, critically reflecting on implications for higher education and business, and proposing a framework for regulated AI use in doctoral scholarship.", font: "Times New Roman", size: 24 })]
        }),

        // Part 1
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 1: AI-Generated Essay", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The following essay was generated using ChatGPT (GPT-4) on December 10, 2025, in response to the prompt: \"Write a one-page academic essay on the ethical implications of AI in mortgage data analysis and lending decisions. Include references to fairness, transparency, and regulatory concerns.\"", font: "Times New Roman", size: 24, italics: true })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Ethical Implications of AI in Mortgage Data Analysis and Lending Decisions", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Artificial intelligence has rapidly transformed mortgage lending, offering unprecedented capabilities for analyzing datasets, identifying creditworthy borrowers, and streamlining approval processes. Machine learning algorithms can process thousands of variables—from credit scores to alternative data sources—to predict default risk with remarkable accuracy. However, AI deployment in mortgage lending raises critical ethical concerns regarding fairness, transparency, and the perpetuation of historical discrimination.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The most significant ethical challenge involves algorithmic bias. AI models learn patterns from historical data, which in the mortgage industry reflects decades of discriminatory practices including redlining and disparate treatment of protected classes. When trained on such data, AI systems risk encoding historical biases, potentially denying credit to qualified applicants from marginalized communities.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Transparency represents another critical concern. Traditional underwriting provided explainability—applicants understood approval or denial based on identifiable factors. Modern AI systems often operate as \"black boxes\" where even developers cannot fully explain decisions. This opacity creates accountability challenges when applicants are denied credit or regulators investigate discrimination.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Regulatory frameworks struggle to keep pace with technological advancement. The Fair Housing Act, Equal Credit Opportunity Act, and Community Reinvestment Act were designed for human decision-making and may not adequately address algorithmic discrimination. The path forward requires multi-stakeholder collaboration to develop ethical AI frameworks, implement rigorous bias testing, and establish human oversight mechanisms.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          children: [new TextRun({ text: "[End of AI-generated content]", font: "Times New Roman", size: 24, italics: true })]
        }),

        // Part 2
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 2: Evaluation of AI-Generated Essay", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The AI-generated essay demonstrates both impressive capabilities and significant limitations illuminating challenges and opportunities for generative AI in academic contexts.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Depth of Argumentation", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The essay provides competent overview of ethical issues in AI-enabled mortgage lending. However, argumentation lacks doctoral-level analytical depth. The essay identifies issues—algorithmic bias, explainability challenges, regulatory gaps—but treats them superficially without engaging with theoretical frameworks. For example, the essay mentions AI models \"learn patterns from historical data\" but does not explore the fundamental tension between statistical prediction and causal inference, or examine whether algorithmic fairness is mathematically achievable when different fairness criteria conflict. A PhD-level treatment would engage with formal fairness definitions (demographic parity, equalized odds, calibration) and the impossibility theorems demonstrating their mutual exclusivity.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Citation Integrity", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The most critical deficiency involves complete absence of citations. The essay makes empirical claims—\"research has documented cases where AI lending algorithms systematically disadvantage minority borrowers\"—without sources. This exemplifies what Pearlson et al. (2024) describe as \"hallucinated\" references—a known limitation where large language models generate plausible claims without reliably grounding them in verifiable sources. ChatGPT's training data enables generating believable academic prose, but the model cannot distinguish between well-established findings and speculative possibilities.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Biases and Overall Assessment", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The essay reflects several implicit biases: U.S.-centric perspective (referencing only American regulations), techno-solutionist bias (assuming AI deployment is inevitable and focusing only on mitigation), and framing bias primarily as a technical problem rather than engaging with structural inequalities. The essay demonstrates ChatGPT's capability to produce coherent prose with appropriate academic tone; however, the surface-level treatment, absent citations, and lack of original insight render it unsuitable for PhD-level scholarship without substantial human intervention.", font: "Times New Roman", size: 24 })]
        }),

        // Part 3
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 3: Critical Reflection on AI in Higher Education and Research", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Generative AI creates profound implications for higher education, scholarly research, and business that extend beyond plagiarism concerns.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Intellectual Autonomy and Critical Thinking", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Higher education aims to develop intellectual autonomy—the capacity to formulate original research questions, critically evaluate evidence, and advance disciplinary knowledge. This emerges through sustained engagement with difficult intellectual work. Generative AI threatens to short-circuit this developmental process by providing shortcuts that reduce cognitive effort (Diab & El Hajj, 2024). Students may produce superficially acceptable work while failing to develop capabilities doctoral training intends to cultivate. Over-reliance on AI risks producing scholarship that recombines existing ideas without genuine intellectual advancement.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Authorship, Peer Review, and Institutional Implications", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Academic authorship carries specific meanings related to intellectual contribution and accountability. Generative AI complicates these norms by introducing non-human contributors that don't fit existing frameworks (Patel, 2023). Publishers are developing varied policies—some prohibiting AI-generated text, others requiring disclosure—creating fragmentation. Peer review faces challenges: reviewers may struggle to distinguish AI-generated text from human-written content; submission volumes may increase dramatically; bad actors could generate fraudulent research with fabricated data (Diab & El Hajj, 2024). Beyond academia, organizations deploying AI for strategic analysis face challenges verifying AI-generated insights and maintaining accountability (Pearlson et al., 2024). Privacy concerns arise as researchers may inadvertently expose sensitive information through prompts (Patel, 2023). Access disparities to sophisticated AI tools risk exacerbating existing inequalities.", font: "Times New Roman", size: 24 })]
        }),

        // Part 4
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 4: Original Contribution—The Case for Regulated AI Use in PhD Scholarship", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "This paper argues FOR the regulated integration of generative AI in PhD-level scholarship. The challenges of generative AI in academic contexts are real. However, reflexive rejection would be both impractical and counterproductive. The academic community should embrace regulated AI use under ethical frameworks that preserve intellectual rigor while leveraging legitimate capabilities.", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Attempting to prohibit AI use is fundamentally unenforceable. AI tools are freely available, continuously improving, and increasingly embedded in standard productivity software—grammar checking, citation management, literature search—making it difficult to delineate legitimate tool use. PhD graduates will enter professional environments where AI tools are standard practice; programs that prohibit AI may inadequately prepare graduates for contexts where AI literacy is essential.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "When used appropriately, AI can enhance research quality without compromising integrity. AI excels at literature discovery, helping researchers manage information overload. AI writing assistants help students express ideas clearly—democratizing access to writing support. AI capabilities in data analysis can enhance rigor when used transparently.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Proposed Framework for Regulated AI Use", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Responsible AI integration requires clear frameworks: (1) Transparency and Disclosure—researchers should disclose AI tool use with specificity about purposes; (2) Human Intellectual Control—researchers must maintain intellectual control, with research questions, methodology, interpretation, and conclusions remaining human-generated; (3) Verification and Responsibility—researchers bear full responsibility for verifying AI-generated content, with disclosure not transferring accountability; (4) Original Contribution Requirement—work must demonstrate original intellectual contribution beyond AI capability; and (5) Pedagogical Integration—PhD programs should teach AI literacy as part of research methods training, transforming AI from threat into opportunity for developing critical thinking about human-machine collaboration.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The appropriate path embraces regulated AI use that preserves what makes PhD scholarship valuable—original thinking, critical analysis, methodological rigor—while leveraging legitimate capabilities. This requires moving beyond binary thinking about AI as salvation or threat, and reaffirming that PhD education's purpose is developing human intellectual capacity, not producing written artifacts.", font: "Times New Roman", size: 24 })]
        }),

        // Conclusion
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Conclusion", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Generative AI presents both challenges and opportunities for academic scholarship. The AI-generated essay analyzed here demonstrates impressive surface capabilities while revealing critical limitations: absent citations (including hallucinated references), surface-level analysis, and lack of original insight. These illuminate both promise and peril for doctoral education.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Implications extend beyond plagiarism to fundamental questions about intellectual autonomy, knowledge production, authorship, and equity. Rather than futile prohibition, the academic community should develop ethical frameworks for regulated AI use. The proposed framework—emphasizing transparency, human control, verification responsibility, original contribution requirements, and pedagogical integration—prepares PhD students for AI-enabled professional environments while maintaining analytical depth defining doctoral scholarship.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "AI tools can generate competent text but cannot replicate deep engagement, critical thinking, and contextual judgment defining excellent scholarship. Doctoral education's future lies in developing uniquely human capabilities that complement AI tools—critical evaluation, creative insight, and wisdom to know when AI assistance enhances intellectual work and when it undermines it.", font: "Times New Roman", size: 24 })]
        }),

        // References
        new Paragraph({ children: [new PageBreak()] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480, after: 240 },
          children: [new TextRun({ text: "References", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { left: 720, hanging: 720 },
          children: [new TextRun({ text: "Diab, B., & El Hajj, M. (2024). Ethics in the age of artificial intelligence: unveiling challenges and opportunities in business culture. ", font: "Times New Roman", size: 24 }), new TextRun({ text: "Cogent Business & Management, 11", font: "Times New Roman", size: 24, italics: true }), new TextRun({ text: "(1). https://doi.org/10.1080/23311975.2024.2304943", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { left: 720, hanging: 720 },
          children: [new TextRun({ text: "Patel, S. (2023). Data privacy and the legal implications of emerging technologies. ", font: "Times New Roman", size: 24 }), new TextRun({ text: "Journal of Emerging Technologies and Innovative Research, 10", font: "Times New Roman", size: 24, italics: true }), new TextRun({ text: "(11), 220-245.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { left: 720, hanging: 720 },
          children: [new TextRun({ text: "Pearlson, K. E., Saunders, C. S., & Galletta, D. F. (2024). ", font: "Times New Roman", size: 24 }), new TextRun({ text: "Managing and using information systems: A strategic approach", font: "Times New Roman", size: 24, italics: true }), new TextRun({ text: " (8th ed.). Wiley.", font: "Times New Roman", size: 24 })]
        })
      ]
    }
  ]
});

// Save the document
const outputPath = "/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-8/paper-5-chatgpt/Jagarlamudi_Srinath_Paper_5.docx";

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log("Document created successfully: " + outputPath);
}).catch(err => {
  console.error("Error creating document:", err);
});
