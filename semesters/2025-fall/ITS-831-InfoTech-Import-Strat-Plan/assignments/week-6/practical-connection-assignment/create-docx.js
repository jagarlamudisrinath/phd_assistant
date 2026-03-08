const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } = require('docx');
const fs = require('fs');

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
        paragraph: { spacing: { after: 240 }, alignment: AlignmentType.CENTER }
      },
      {
        id: "Normal",
        name: "Normal",
        run: { font: "Times New Roman", size: 24 },
        paragraph: { spacing: { line: 480, after: 0 }, indent: { firstLine: 720 } } // Double-spaced, first line indent
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
      // Title
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 },
        children: [new TextRun({ text: "Practical Connection: Applying IT Strategy to Mortgage Analytics", bold: true, size: 24 })]
      }),

      // Introduction paragraph
      new Paragraph({
        spacing: { line: 480 },
        indent: { firstLine: 720 },
        children: [new TextRun({ text: "As a Data Engineer at Lakeview Loan Servicing, I work at the intersection of technology and business strategy every day. This course has fundamentally transformed how I understand my role—not merely as someone who builds data pipelines and infrastructure, but as a strategic partner who aligns IT capabilities with organizational objectives. The knowledge gained from ITS-831 has provided me with frameworks and theories that I now actively apply to critical business problems, particularly in the areas of IT-business alignment, proactive risk management for AI systems, and data governance in highly regulated financial environments.", size: 24 })]
      }),

      // Body paragraph 1 - IT-Business Alignment
      new Paragraph({
        spacing: { line: 480 },
        indent: { firstLine: 720 },
        children: [new TextRun({ text: "The most immediately applicable concept from this course has been the principle of aligning IT strategy with business strategy. In my work on capital marketing and loan offer generation systems, I previously approached technical decisions primarily through an efficiency lens—how can I process data faster, build more scalable pipelines, or generate more accurate predictions? The course challenged me to elevate my thinking by considering how each technical decision directly supports or constrains business objectives. For example, our marketing team's strategic goal is to identify the highest-value refinance opportunities within our existing customer base while maintaining compliance with fair lending regulations. The IT strategy I now employ involves not just building predictive models that identify likely refinancers, but architecting data systems that enable rapid experimentation with different marketing strategies while maintaining complete audit trails for regulatory review. This alignment means that when business priorities shift—such as focusing on cash-out refinances versus rate-and-term refinances in response to market conditions—our IT infrastructure can pivot quickly because it was designed with strategic flexibility in mind, not just operational efficiency.", size: 24 })]
      }),

      // Body paragraph 2 - AI Risk Management
      new Paragraph({
        spacing: { line: 480 },
        indent: { firstLine: 720 },
        children: [new TextRun({ text: "The course's deep dive into AI risk management, particularly the NIST AI Risk Management Framework, has been transformative for how I approach machine learning implementations in mortgage analytics. We deploy predictive models to score loan offers, estimate customer propensity to refinance, and optimize marketing campaign targeting. Before this course, my risk considerations were largely technical—model accuracy, data quality, system uptime. The NIST AI RMF framework introduced me to a far more comprehensive view of AI risk that encompasses fairness, accountability, transparency, and ethical considerations. I have since implemented several proactive risk management practices directly inspired by course materials. First, I established a model documentation standard that requires every deployed AI model to have a transparent explanation of its training data sources, feature engineering logic, and potential bias risks. Second, I instituted regular fairness audits of our propensity models, specifically examining whether protected class characteristics are correlated with model predictions even when those variables are not directly included as features. Third, I created monitoring dashboards that track not just model performance metrics, but also distributional shifts in predictions across demographic groups to detect emerging fairness issues before they impact customers. These practices emerged directly from understanding that AI risk management is not a one-time activity but an ongoing governance function that must be embedded into the system development lifecycle.", size: 24 })]
      }),

      // Body paragraph 3 - Data Governance and Zero Trust
      new Paragraph({
        spacing: { line: 480 },
        indent: { firstLine: 720 },
        children: [new TextRun({ text: "Data governance and Zero Trust Architecture principles have also reshaped how I handle sensitive financial information. The mortgage industry operates under intense regulatory scrutiny, with requirements from HMDA, ECOA, and various fair lending regulations dictating how we collect, process, and report customer data. The course's coverage of Zero Trust principles—never trust, always verify—resonated deeply with the compliance challenges I face daily. I have redesigned our data access architecture to implement least-privilege access controls, where analysts and data scientists receive only the minimum data exposure necessary for their specific tasks. For instance, marketing analysts working on campaign performance can access aggregated customer segments without ever seeing individual personally identifiable information. This approach reduces our regulatory risk surface while maintaining analytical capabilities. Additionally, I implemented comprehensive data lineage tracking that documents every transformation applied to sensitive data from source systems through analytical outputs. This lineage capability proves invaluable during regulatory examinations when we must demonstrate exactly how we calculated specific metrics or why certain customers were included or excluded from marketing campaigns.", size: 24 })]
      }),

      // Body paragraph 4 - Emerging Technologies
      new Paragraph({
        spacing: { line: 480 },
        indent: { firstLine: 720 },
        children: [new TextRun({ text: "The emerging technologies discussions in this course have also influenced how I evaluate new tools and platforms. Rather than adopting technologies because they are trendy or technically impressive, I now assess them through a strategic lens: How does this technology create competitive advantage? How does it affect our organizational resiliency? What are the long-term economic implications beyond initial implementation costs? This framework has made me far more discerning in technology recommendations and has elevated my credibility with business leadership because I speak their language of strategic value rather than purely technical capabilities.", size: 24 })]
      }),

      // Conclusion
      new Paragraph({
        spacing: { line: 480 },
        indent: { firstLine: 720 },
        children: [new TextRun({ text: "In conclusion, ITS-831 has fundamentally reshaped my professional identity from a technologist who serves the business to a strategic partner who uses technology to advance organizational objectives while managing risk and maintaining ethical responsibility. The frameworks and theories from this course are not abstract concepts—they are tools I use daily to make better decisions, communicate more effectively with business stakeholders, and create IT solutions that deliver sustainable competitive advantage in the highly competitive and regulated mortgage servicing industry.", size: 24 })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-6/practical-connection-assignment/Jagarlamudi_Srinath_Practical_Connection.docx", buffer);
  console.log("Document created successfully!");
});
