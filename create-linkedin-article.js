const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, LevelFormat, ExternalHyperlink, HeadingLevel, BorderStyle,
        WidthType, ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

// Create the document
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } }, // 12pt default
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 48, bold: true, color: "1a1a1a", font: "Arial" },
        paragraph: { spacing: { before: 0, after: 300 }, alignment: AlignmentType.LEFT } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "1a1a1a", font: "Arial" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "333333", font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "arrow-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "→", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-list",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.TITLE, children: [
        new TextRun('Why "AI Agents Will Kill SaaS" is Wrong (And What\'s Actually Happening)')
      ]}),

      // Opening
      new Paragraph({ spacing: { before: 200, after: 200 }, children: [
        new TextRun("There's a hot take circulating in tech circles:")
      ]}),
      new Paragraph({ spacing: { before: 100, after: 200 }, children: [
        new TextRun({ text: '"AI agents will replace SaaS entirely."', italics: true })
      ]}),

      // Citations paragraph
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Microsoft's Charles Lamanna "),
        new ExternalHyperlink({
          children: [new TextRun({ text: 'said traditional business applications will become "the mainframes of 2030."', color: "0563C1", underline: { type: "single" } })],
          link: "https://thenewstack.io/microsoft-ai-business-agents-will-kill-saas-by-2030/"
        }),
        new TextRun(" "),
        new ExternalHyperlink({
          children: [new TextRun({ text: "ServiceNow just paid $2.85B for AI agent company Moveworks.", color: "0563C1", underline: { type: "single" } })],
          link: "https://fortune.com/2025/03/10/servicenow-buys-ai-agent-company-moveworks-for-2-85-billion/"
        }),
        new TextRun(" The hype is real.")
      ]}),

      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("But after spending months building AI solutions and studying this space, I've come to a different conclusion:")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "AI Agents don't replace Vertical SaaS. They're a new layer that sits on top of it.", bold: true })
      ]}),
      new Paragraph({ spacing: { after: 300 }, children: [
        new TextRun("Here's why this matters for anyone building or buying software.")
      ]}),

      // Section 1
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The Stack Still Exists")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Think about it this way:")] }),

      // Stack diagram as formatted text
      new Paragraph({ spacing: { before: 100, after: 100 }, shading: { fill: "f5f5f5", type: ShadingType.CLEAR }, children: [
        new TextRun({ text: "AI AGENT", bold: true }), new TextRun(" (What you see)")
      ]}),
      new Paragraph({ spacing: { after: 100 }, shading: { fill: "f5f5f5", type: ShadingType.CLEAR }, children: [
        new TextRun({ text: "VERTICAL SAAS", bold: true }), new TextRun(" (Domain logic)")
      ]}),
      new Paragraph({ spacing: { after: 100 }, shading: { fill: "f5f5f5", type: ShadingType.CLEAR }, children: [
        new TextRun({ text: "DATA", bold: true }), new TextRun(" (System of record)")
      ]}),
      new Paragraph({ spacing: { after: 200 }, shading: { fill: "f5f5f5", type: ShadingType.CLEAR }, children: [
        new TextRun({ text: "INFRASTRUCTURE", bold: true })
      ]}),

      new Paragraph({ spacing: { after: 150 }, children: [new TextRun("An AI agent can't function in a vacuum. It needs:")] }),

      // Arrow list
      new Paragraph({ numbering: { reference: "arrow-list", level: 0 }, children: [
        new TextRun({ text: "Data to act on", bold: true }), new TextRun(" — Stored in databases, managed by software")
      ]}),
      new Paragraph({ numbering: { reference: "arrow-list", level: 0 }, children: [
        new TextRun({ text: "Business rules", bold: true }), new TextRun(" — Encoded in domain-specific logic")
      ]}),
      new Paragraph({ numbering: { reference: "arrow-list", level: 0 }, children: [
        new TextRun({ text: "Integrations", bold: true }), new TextRun(" — Connections to external systems")
      ]}),
      new Paragraph({ numbering: { reference: "arrow-list", level: 0 }, children: [
        new TextRun({ text: "Compliance", bold: true }), new TextRun(" — Audit trails, security, regulations")
      ]}),
      new Paragraph({ numbering: { reference: "arrow-list", level: 0 }, spacing: { after: 200 }, children: [
        new TextRun({ text: "Reliability", bold: true }), new TextRun(" — The agent can fail; the system must recover")
      ]}),

      new Paragraph({ spacing: { after: 300 }, children: [
        new TextRun("The agent is brilliant at reasoning and taking action. But it needs a foundation to stand on.")
      ]}),

      // Section 2
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Real Example: AI Recruiting Agent")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Let's make this concrete.")] }),

      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "What the user sees: ", bold: true }),
        new TextRun('"An AI that finds and screens candidates automatically"')
      ]}),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "What's actually underneath:", bold: true })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Agent Layer (The Magic):")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Understands job requirements from natural language")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Searches across multiple sources simultaneously")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Evaluates candidate fit using context")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Sends personalized outreach")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Schedules interviews autonomously")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Vertical SaaS Layer (The Foundation):")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Candidate database (searchable, deduplicated)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Job board integrations (LinkedIn, Indeed, Dice)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Email/SMS delivery infrastructure")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Calendar system connections")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Compliance rules (EEOC, data retention laws)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Client permissions and billing")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Audit logging for every action")] }),

      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun("The agent makes it "), new TextRun({ text: "10x easier to USE.", bold: true })
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun("The vertical SaaS makes it "), new TextRun({ text: "WORK.", bold: true })
      ]}),
      new Paragraph({ spacing: { after: 300 }, children: [
        new TextRun("Without the foundation, the agent is just a clever chatbot with nowhere to go.")
      ]}),

      // Section 3 - What's Really Changing
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("What's Really Changing")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Here's the shift that IS happening:")] }),

      // Comparison Table
      createComparisonTable(),

      new Paragraph({ spacing: { before: 200, after: 300 }, children: [
        new TextRun("The interface layer is being revolutionized. The foundation layer is becoming "),
        new TextRun({ text: "MORE important.", bold: true })
      ]}),

      // Section 4 - What Gets Disrupted
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("What Gets Disrupted vs. What Gets Stronger")] }),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "SaaS categories that WILL get compressed:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Basic helpdesk (Tier 1 support tickets)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Simple scheduling tools")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Basic form builders")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Manual data entry workflows")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 150 }, children: [new TextRun("Generic reporting dashboards")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "Why? ", italics: true }),
        new TextRun('These are "thin" layers with little domain expertise. Agents can replace them entirely.')
      ]}),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "SaaS categories that get STRONGER:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Systems of record (ERP, HRIS, financial systems)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Vertical platforms with deep domain logic")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Compliance-heavy industries (healthcare, finance, legal)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Integration platforms (agents need connections)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 150 }, children: [new TextRun("Data infrastructure (agents need fuel)")] }),
      new Paragraph({ spacing: { after: 300 }, children: [
        new TextRun({ text: "Why? ", italics: true }),
        new TextRun("Agents don't replace expertise—they amplify it. The deeper your domain knowledge, the more valuable your platform becomes in an agent-powered world.")
      ]}),

      // Section 5 - Real Opportunity
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The Real Opportunity")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new ExternalHyperlink({
          children: [new TextRun({ text: "Y Combinator is projecting 300+ billion-dollar companies", color: "0563C1", underline: { type: "single" } })],
          link: "https://www.ycombinator.com/library/Lt-vertical-ai-agents-could-be-10x-bigger-than-saas"
        }),
        new TextRun(" emerging in vertical AI—potentially 10x bigger than traditional SaaS.")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("But here's what I see most people getting wrong:")] }),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Who WON'T win:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Pure AI wrapper companies (too easy to copy)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Traditional SaaS companies ignoring AI (will lose on UX)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Horizontal \"do everything\" agents (lack domain depth)")] }),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Who WILL win:", bold: true })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Companies that own domain-specific data + logic + agent layer")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Platforms that agents MUST connect to (systems of record)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 }, children: [new TextRun("Teams that build both the intelligence AND the infrastructure")] }),

      new Paragraph({ spacing: { after: 100 }, children: [new TextRun('The opportunity isn\'t "build an agent" or "build SaaS."')] }),
      new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: 'It\'s "build the full stack for a specific vertical."', bold: true })] }),

      // Section 6 - New Playbook
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The New Playbook")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("If you're building software in 2025 and beyond:")] }),

      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: 'Stop thinking "features" → Start thinking "outcomes"', bold: true })
      ]}),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 100 }, children: [new TextRun('Don\'t ask: "What can users do in our software?"')] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 200 }, children: [new TextRun('Ask: "What job can our agent do FOR users?"')] }),

      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: 'Stop thinking "users" → Start thinking "jobs to be done"', bold: true })
      ]}),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 100 }, children: [new TextRun("Your customer doesn't want recruiting software.")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 200 }, children: [new TextRun("They want candidates hired.")] }),

      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: 'Stop thinking "dashboard" → Start thinking "autonomous action"', bold: true })
      ]}),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 100 }, children: [new TextRun("The best interface is no interface.")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 200 }, children: [new TextRun("The agent just does the work.")] }),

      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "Own your vertical's data and rules", bold: true })
      ]}),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 100 }, children: [new TextRun("This is your moat. Agents come and go.")] }),
      new Paragraph({ indent: { left: 720 }, spacing: { after: 300 }, children: [new TextRun("Domain expertise compounds.")] }),

      // Bottom Line
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Bottom Line")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun('Don\'t believe the hype that "AI kills SaaS."')] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("The more accurate take:")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "AI transforms the interface layer of SaaS while making the foundation layer more valuable.", bold: true })
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("The stack gets smarter. The value chain shifts. But vertical expertise and data ownership become "),
        new TextRun({ text: "MORE important", bold: true }),
        new TextRun(", not less.")
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("We're not building software people work IN anymore.")] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun("We're building systems that work FOR people.")] }),
      new Paragraph({ spacing: { after: 100 }, children: [new TextRun("That's not the death of SaaS.")] }),
      new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: "That's its evolution.", bold: true })] }),

      // CTA
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "What vertical are you seeing get transformed by AI agents? I'd love to hear real examples in the comments.", italics: true })
      ]}),

      // Hashtags
      new Paragraph({ spacing: { before: 200 }, children: [
        new TextRun({ text: "#AIAgents #SaaS #FutureOfWork #ArtificialIntelligence #StartupStrategy #TechTrends #B2BSaaS #EnterpriseAI", color: "0563C1" })
      ]}),
    ]
  }]
});

// Helper function for comparison table
function createComparisonTable() {
  const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
  const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

  return new Table({
    columnWidths: [4680, 4680],
    rows: [
      new TableRow({
        tableHeader: true,
        children: [
          new TableCell({
            borders: cellBorders,
            width: { size: 4680, type: WidthType.DXA },
            shading: { fill: "1a365d", type: ShadingType.CLEAR },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
              new TextRun({ text: "Before (Traditional SaaS)", bold: true, color: "FFFFFF" })
            ]})]
          }),
          new TableCell({
            borders: cellBorders,
            width: { size: 4680, type: WidthType.DXA },
            shading: { fill: "1a365d", type: ShadingType.CLEAR },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
              new TextRun({ text: "After (Agent-Enabled SaaS)", bold: true, color: "FFFFFF" })
            ]})]
          })
        ]
      }),
      createTableRow("Users click buttons and fill forms", "Agents take actions autonomously", cellBorders),
      createTableRow("Value measured in features", "Value measured in outcomes", cellBorders),
      createTableRow("Per-seat pricing ($X/user)", "Per-outcome pricing ($X/task)", cellBorders),
      createTableRow("Compete on UI/UX", "Compete on agent accuracy", cellBorders),
      createTableRow('"Here\'s a tool"', '"Here\'s a worker"', cellBorders),
    ]
  });
}

function createTableRow(before, after, cellBorders) {
  return new TableRow({
    children: [
      new TableCell({
        borders: cellBorders,
        width: { size: 4680, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun(before)] })]
      }),
      new TableCell({
        borders: cellBorders,
        width: { size: 4680, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun(after)] })]
      })
    ]
  });
}

// Save the document
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/linkedin-ai-agents-saas-article.docx", buffer);
  console.log("Document created: linkedin-ai-agents-saas-article.docx");
});
