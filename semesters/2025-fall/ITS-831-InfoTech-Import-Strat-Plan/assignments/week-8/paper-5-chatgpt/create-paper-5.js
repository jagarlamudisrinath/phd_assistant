const { Document, Packer, Paragraph, TextRun, Header, Footer, AlignmentType, PageNumber, HeadingLevel, PageBreak } = require('docx');
const fs = require('fs');

// APA 7th Edition formatted document
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
        paragraph: { spacing: { line: 480 }, indent: { firstLine: 720 } } // Double-spaced, 0.5" first line indent
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
        new Paragraph({ spacing: { before: 2880 }, children: [] }), // Space from top
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
        // Title (repeated on first page of body)
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 480, after: 240 },
          children: [new TextRun({ text: "Navigating Generative AI in Academic Scholarship: An Evaluation and Critical Reflection", font: "Times New Roman", size: 24, bold: true })]
        }),

        // Introduction
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Generative artificial intelligence has fundamentally disrupted traditional paradigms of academic writing, research, and knowledge production. Tools like ChatGPT can now produce coherent, sophisticated text on complex topics within seconds, raising profound questions about intellectual autonomy, authorship, and the future of scholarly inquiry. The technology's capabilities extend beyond simple text generation to creating persuasive arguments, synthesizing information from multiple sources, and mimicking academic writing conventions with remarkable fidelity. This rapid advancement has created both opportunities and existential challenges for higher education institutions, scholarly publishers, and PhD students navigating the evolving landscape of academic research (Diab & El Hajj, 2024).", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The implications of generative AI for doctoral education are particularly significant. PhD programs fundamentally aim to develop original thinkers capable of advancing knowledge frontiers through rigorous research, critical analysis, and innovative methodologies. The availability of AI tools that can generate literature reviews, draft methodology sections, or synthesize research findings threatens to short-circuit the intellectual development that doctoral training intends to cultivate. Yet simultaneously, these tools offer unprecedented capabilities for managing information overload, identifying research gaps, and accelerating certain aspects of the research process (Pearlson et al., 2024). The central challenge lies not in whether generative AI should be permitted in academic contexts, but rather in establishing ethical frameworks and practical guidelines that leverage AI's capabilities while preserving the intellectual rigor and original contribution that defines scholarly work.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "This paper critically examines the role of generative AI in academic scholarship through multiple lenses. First, it presents an AI-generated essay on the ethical implications of AI in mortgage data analysis and lending decisions, providing concrete illustration of current AI capabilities. Second, it evaluates this AI-generated content for argumentative depth, logical coherence, citation integrity, and inherent biases. Third, drawing on peer-reviewed research, it critically assesses the broader implications of generative AI for higher education, scholarly research, and business contexts. Finally, it presents an original argument advocating for regulated use of generative AI in PhD-level scholarship under carefully defined ethical guidelines that balance innovation with academic integrity.", font: "Times New Roman", size: 24 })]
        }),

        // Part 1: AI-Generated Essay
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 1: AI-Generated Essay", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The following essay was generated using ChatGPT (GPT-4) on December 10, 2025, in response to the prompt: \"Write a one-page academic essay on the ethical implications of AI in mortgage data analysis and lending decisions. Include references to fairness, transparency, and regulatory concerns.\"", font: "Times New Roman", size: 24, italics: true })]
        }),

        // AI Essay Heading
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Ethical Implications of AI in Mortgage Data Analysis and Lending Decisions", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Artificial intelligence has rapidly transformed the mortgage lending industry, offering unprecedented capabilities for analyzing vast datasets, identifying creditworthy borrowers, and streamlining approval processes. Machine learning algorithms can process thousands of variables—from traditional credit scores and income verification to alternative data sources such as utility payment history and social media behavior—to predict default risk with remarkable accuracy. These capabilities promise to expand credit access, reduce processing costs, and improve risk management for lenders. However, the deployment of AI in mortgage lending raises critical ethical concerns regarding fairness, transparency, and the potential perpetuation of historical discrimination.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The most significant ethical challenge involves algorithmic bias and discriminatory outcomes. AI models learn patterns from historical data, which in the mortgage industry reflects decades of discriminatory practices including redlining, racial steering, and disparate treatment of protected classes. When trained on such data, AI systems risk encoding historical biases into automated decision-making processes, potentially denying credit to qualified applicants from marginalized communities. Research has documented cases where AI lending algorithms systematically disadvantage minority borrowers even after controlling for traditional risk factors, suggesting that subtle correlations in training data can produce discriminatory outcomes that violate fair lending laws.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Transparency represents another critical concern. Traditional underwriting processes, while imperfect, provided some degree of explainability—applicants understood why they were approved or denied based on identifiable factors such as debt-to-income ratio or credit history. Modern AI systems, particularly deep learning models, often operate as \"black boxes\" where even their developers cannot fully explain how specific decisions are reached. This opacity creates accountability challenges when applicants are denied credit, regulators investigate potential discrimination, or lenders seek to identify and correct problematic decision patterns.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Regulatory frameworks struggle to keep pace with technological advancement. The Fair Housing Act, Equal Credit Opportunity Act, and Community Reinvestment Act were designed for human decision-making processes and may not adequately address algorithmic discrimination. Regulators face technical challenges in auditing AI systems, determining when correlations constitute illegal discrimination, and balancing innovation incentives with consumer protection obligations. The path forward requires multi-stakeholder collaboration to develop ethical AI frameworks for mortgage lending that ensure fairness, accountability, transparency, and ongoing monitoring for discriminatory outcomes.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          children: [new TextRun({ text: "[End of AI-generated content]", font: "Times New Roman", size: 24, italics: true })]
        }),

        // Part 2: Evaluation
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 2: Evaluation of AI-Generated Essay", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The AI-generated essay demonstrates both impressive capabilities and significant limitations that illuminate the challenges and opportunities of using generative AI in academic contexts.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Depth of Argumentation", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The essay provides a competent overview of ethical issues in AI-enabled mortgage lending, touching on bias, transparency, and regulatory concerns as requested. However, the argumentation lacks the analytical depth expected in doctoral-level scholarship. The essay identifies important issues—algorithmic bias, explainability challenges, regulatory gaps—but treats them at a surface level without engaging with underlying theoretical frameworks or epistemological questions. For example, the essay mentions that AI models \"learn patterns from historical data\" containing discriminatory practices, but does not explore the fundamental tension between statistical prediction and causal inference, or examine whether algorithmic fairness is mathematically achievable when different fairness criteria conflict. A PhD-level treatment would engage with formal fairness definitions (demographic parity, equalized odds, calibration), discuss the impossibility theorems demonstrating their mutual exclusivity, and explore normative questions about which fairness criteria should govern lending contexts.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Citation Integrity and Research Grounding", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The most critical deficiency involves complete absence of citations. The essay makes several empirical claims—\"research has documented cases where AI lending algorithms systematically disadvantage minority borrowers\"—without providing sources. This represents a fundamental failure of academic integrity. A scholarly treatment requires specific citations to peer-reviewed research, regulatory reports, or documented cases. This citation void reflects a known limitation of large language models: they cannot access real-time information, attribute specific claims to sources, or distinguish between well-established findings and speculative possibilities. ChatGPT's training data includes vast amounts of text about AI ethics and mortgage lending, enabling it to generate plausible claims, but the model cannot reliably ground those claims in verifiable sources—what Chapter 13 of the course textbook refers to as \"hallucinated\" references (Pearlson et al., 2024).", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Biases and Assumptions", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The essay reflects several implicit biases worth noting. First, it adopts a primarily U.S.-centric perspective, referencing specific American regulations without acknowledging that AI ethics in lending plays out differently across regulatory jurisdictions. Second, the essay assumes AI deployment is inevitable and focuses on mitigation strategies rather than questioning whether certain applications should be pursued. This techno-solutionist bias—the assumption that technological problems require technological solutions—pervades much AI ethics discourse but deserves critical examination. Third, the essay frames bias primarily as a technical problem solvable through \"rigorous bias testing\" rather than engaging with structural inequalities that technology alone cannot address.", font: "Times New Roman", size: 24 })]
        }),

        // Part 3: Critical Reflection
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 3: Critical Reflection on AI in Higher Education and Research", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The proliferation of generative AI tools creates profound implications for higher education, scholarly research, and business contexts that extend far beyond concerns about plagiarism detection or academic dishonesty.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Challenges to Intellectual Autonomy", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Higher education, particularly at the doctoral level, aims to develop intellectual autonomy—the capacity to formulate original research questions, critically evaluate evidence, construct novel arguments, and advance disciplinary knowledge. This capability emerges through sustained engagement with difficult intellectual work: struggling with complex texts, synthesizing disparate sources, refining arguments through iteration, and learning from failures. Generative AI threatens to short-circuit this developmental process by providing shortcuts that reduce cognitive effort (Diab & El Hajj, 2024). When students can generate literature reviews, draft methodology sections, or produce discussion text without deep engagement with source material, they may produce superficially acceptable work while failing to develop the intellectual capabilities that doctoral training intends to cultivate.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Transformation of Authorship and Peer Review", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Academic authorship carries specific meanings related to intellectual contribution, accountability, and credit allocation. Generative AI complicates these norms by introducing non-human contributors whose \"contributions\" cannot be easily categorized within existing authorship frameworks (Patel, 2023). Peer review serves as the primary quality assurance mechanism in academic publishing, relying on expert reviewers to evaluate originality, methodological rigor, and contribution to knowledge. Generative AI challenges this system in multiple ways: reviewers may struggle to distinguish AI-generated text from human-written content, the volume of submissions may increase dramatically, and bad actors could use AI to generate fraudulent research with fabricated data and plausible-sounding findings (Diab & El Hajj, 2024).", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Privacy and Equity Implications", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Generative AI systems train on vast datasets that may include proprietary research, confidential business information, or personally identifiable data. Researchers using AI tools may inadvertently expose sensitive information through prompts that become part of training data (Patel, 2023). Additionally, access to sophisticated AI tools is not equally distributed, risking exacerbation of existing inequalities where researchers at elite institutions with access to cutting-edge AI tools enjoy productivity advantages over colleagues at under-resourced institutions.", font: "Times New Roman", size: 24 })]
        }),

        // Part 4: Original Contribution
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Part 4: Original Contribution—The Case for Regulated AI Use in PhD Scholarship", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "This paper argues FOR the regulated integration of generative AI in PhD-level scholarship. The challenges and risks associated with generative AI in academic contexts are real and significant. However, a reflexive rejection of AI tools in PhD-level scholarship would be both impractical and counterproductive. Instead, the academic community should embrace regulated AI use under carefully designed ethical frameworks that preserve intellectual rigor while leveraging AI's legitimate capabilities to enhance research productivity and quality.", font: "Times New Roman", size: 24, bold: true })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "The Inevitability of AI Tools", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Attempting to prohibit AI use in academic contexts is fundamentally unenforceable and strategically misguided. AI tools are freely available, continuously improving, and increasingly difficult to distinguish from human-written text. Detection tools show limited effectiveness and high false-positive rates. More importantly, AI capabilities are becoming embedded in standard productivity software—grammar checking, citation management, literature search, statistical analysis—making it increasingly difficult to delineate where legitimate tool use ends and prohibited AI assistance begins. Furthermore, PhD graduates will enter professional environments where AI tools are standard practice, and programs that prohibit AI use may inadequately prepare graduates for professional contexts where AI literacy is essential.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Legitimate Uses That Enhance Research", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "When used appropriately, AI tools can genuinely enhance PhD research quality and productivity without compromising intellectual integrity. AI excels at literature discovery and organization, helping researchers identify relevant papers and extract key findings. AI writing assistants can help students express ideas more clearly and improve grammatical accuracy—democratizing access to writing support. AI capabilities in data analysis, visualization, and statistical computing can enhance research rigor. And AI can support hypothesis generation by suggesting connections between disparate literatures or identifying gaps in existing research.", font: "Times New Roman", size: 24 })]
        }),

        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          children: [new TextRun({ text: "Proposed Framework for Regulated AI Use", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Responsible AI integration requires clear frameworks distinguishing legitimate assistance from academic misconduct. The following principles should govern AI use: (1) Transparency and Disclosure—researchers should disclose AI tool use with specificity about which tools were used for what purposes; (2) Human Intellectual Control—the researcher must maintain intellectual control over the research process, with AI serving as a tool rather than author; (3) Verification and Responsibility—researchers bear full responsibility for verifying AI-generated content before incorporating it; (4) Original Contribution Requirement—work submitted for PhD credit must demonstrate original intellectual contribution beyond AI capability; (5) Ethical Use Boundaries—certain uses clearly violate academic integrity regardless of disclosure; and (6) Pedagogical Integration—PhD programs should explicitly teach AI literacy as part of research methods training.", font: "Times New Roman", size: 24 })]
        }),

        // Conclusion
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun({ text: "Conclusion", font: "Times New Roman", size: 24, bold: true })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "The integration of generative AI into academic scholarship presents both unprecedented challenges and genuine opportunities for enhancing research quality and productivity. The AI-generated essay analyzed in this paper demonstrates impressive surface capabilities—coherent structure, appropriate academic tone—while revealing critical limitations including lack of citation integrity, surface-level analysis, and absence of original insight. These characteristics illuminate both the promise and peril of AI in doctoral education.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "Rather than attempting futile prohibition of AI tools, the academic community should develop ethical frameworks for regulated AI use that preserve intellectual rigor while leveraging legitimate capabilities. The proposed framework—emphasizing transparency, human intellectual control, verification responsibility, original contribution requirements, and pedagogical integration—offers a path forward that prepares PhD students for AI-enabled professional environments while maintaining the analytical depth and original thinking that defines doctoral scholarship.", font: "Times New Roman", size: 24 })]
        }),
        new Paragraph({
          spacing: { line: 480 },
          indent: { firstLine: 720 },
          children: [new TextRun({ text: "As demonstrated through this analysis, AI tools like ChatGPT can generate competent text but cannot replicate the deep engagement, critical thinking, creative synthesis, and contextual judgment that defines excellent scholarship. Doctoral education's future lies not in competing with AI at text generation but in developing the uniquely human capabilities that complement AI tools—critical evaluation, creative insight, ethical judgment, and the wisdom to know when AI assistance enhances intellectual work and when it undermines it.", font: "Times New Roman", size: 24 })]
        }),

        // Page break before references
        new Paragraph({ children: [new PageBreak()] }),

        // References
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
