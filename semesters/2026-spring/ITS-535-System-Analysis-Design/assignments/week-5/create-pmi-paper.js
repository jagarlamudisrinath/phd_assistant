const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Header, AlignmentType, HeadingLevel, PageBreak } = require('docx');

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Times New Roman", size: 24 }
      },
      paragraph: {
        spacing: { line: 480 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Times New Roman" },
        paragraph: {
          spacing: { before: 240, after: 240, line: 480 },
          alignment: AlignmentType.CENTER,
          outlineLevel: 0
        }
      },
      {
        id: "hangingIndent",
        name: "Hanging Indent",
        basedOn: "Normal",
        run: { font: "Times New Roman", size: 24 },
        paragraph: {
          indent: { left: 720, hanging: 720 },
          spacing: { line: 240, after: 240 }
        }
      }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun("Srinath Jagarlamudi")]
          })
        ]
      })
    },
    children: [
      // Page 1: Initiating: Develop Project Charter
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Initiating: Develop Project Charter")]
      }),
      new Paragraph({
        children: [new TextRun("The Develop Project Charter process formally authorizes a project and provides the project manager with authority to apply organizational resources to project activities (Project Management Institute, 2021). This foundational process creates the bridge between strategic objectives and project execution, establishing the formal relationship between the performing organization and stakeholders.")]
      }),
      new Paragraph({
        children: [new TextRun("Key inputs include the business case, which provides economic justification; benefits management plan; agreements; enterprise environmental factors; and organizational process assets. The business case justifies project investment while organizational process assets provide templates and historical information from previous projects (Kerzner, 2022). Tools and techniques include expert judgment, data gathering methods such as brainstorming and focus groups, and facilitated meetings. The primary output is the project charter itself, which includes project purpose, measurable objectives, high-level requirements, project boundaries, overall risk assessment, milestone schedule, preapproved financial resources, key stakeholders, and the assigned project manager's authority level.")]
      }),
      new Paragraph({
        children: [new TextRun("In mortgage data systems, a project charter for a loan offer generation platform establishes strategic alignment between business objectives such as capital marketing efficiency and technical deliverables including data pipeline architecture and analytics capabilities. The charter defines the project manager's authority to allocate data engineering resources and make technical decisions within budget constraints. By establishing clear scope boundaries and exit criteria, the charter prevents scope creep—particularly critical in complex data ecosystems where incremental requests for additional features can easily derail projects (Project Management Institute, 2021).")]
      }),
      new Paragraph({
        children: [new TextRun("Best practices include engaging stakeholders early to build consensus, ensuring alignment with organizational strategy, documenting assumptions explicitly, and establishing clear governance structures. A common challenge involves balancing comprehensiveness with brevity while managing stakeholder expectations when organizational politics create tension around resource allocation (Kerzner, 2022).")]
      }),

      // Page break
      new Paragraph({ children: [new PageBreak()] }),

      // Page 2: Planning: Collect Requirements
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Planning: Collect Requirements")]
      }),
      new Paragraph({
        children: [new TextRun("The Collect Requirements process determines, documents, and manages stakeholder needs to meet project objectives. This critical planning process establishes the foundation for defining scope and serves as the basis for schedule development, cost estimation, and procurement planning (Project Management Institute, 2021). Poor requirements gathering represents a leading cause of IT project failures.")]
      }),
      new Paragraph({
        children: [new TextRun("Key inputs include the project charter, project management plan components, stakeholder register, business case, and organizational process assets. The stakeholder register identifies all parties impacted by the project, providing targets for requirements elicitation (Sommerville, 2016). Tools and techniques are diverse: interviews allow in-depth exploration; focus groups bring together subject matter experts; questionnaires efficiently collect information from dispersed stakeholders; and benchmarking compares practices against industry standards. Prototyping develops preliminary versions to elicit feedback, while decision-making techniques like voting help prioritize conflicting requirements.")]
      }),
      new Paragraph({
        children: [new TextRun("Primary outputs include requirements documentation and the requirements traceability matrix. Requirements documentation encompasses business, stakeholder, solution (functional and non-functional), transition, project, and quality requirements. The traceability matrix links requirements to their origin and traces them throughout the project lifecycle, enabling impact assessment and change management (Project Management Institute, 2021).")]
      }),
      new Paragraph({
        children: [new TextRun("In mortgage data analytics, requirements must address multiple perspectives: business users needing reports and analytics, compliance officers requiring audit trails, data scientists needing clean datasets, and IT operations requiring performance and reliability. For loan offer generation systems, functional requirements specify data sources, business rules, user interfaces, and API specifications, while non-functional requirements address performance, availability, data quality, scalability, and security including encryption standards (Sommerville, 2016).")]
      }),
      new Paragraph({
        children: [new TextRun("Best practices emphasize continuous stakeholder engagement, using multiple elicitation techniques, validating requirements for mutual understanding, and prioritizing requirements for phased delivery. A key challenge involves bridging the gap between business users articulating needs as desired insights and technical teams translating these into data models and system architectures (Kerzner, 2022).")]
      }),

      // Page break
      new Paragraph({ children: [new PageBreak()] }),

      // Page 3: Planning: Plan Risk Management
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Planning: Plan Risk Management")]
      }),
      new Paragraph({
        children: [new TextRun("Plan Risk Management establishes the approach, methodology, and framework for identifying, analyzing, and responding to project risks. This process ensures risk management activities are commensurate with project risks and organizational importance (Project Management Institute, 2021). Effective risk planning is critical in IT projects where technical complexity, evolving technologies, and integration requirements create significant uncertainty.")]
      }),
      new Paragraph({
        children: [new TextRun("Primary inputs include the project charter, project management plan, stakeholder register, enterprise environmental factors including risk appetite and thresholds, and organizational process assets such as templates and lessons learned (Hillson & Simon, 2020). Tools include expert judgment, stakeholder analysis to understand risk appetites, and facilitated meetings.")]
      }),
      new Paragraph({
        children: [new TextRun("The output is a comprehensive risk management plan addressing: risk management strategy and methodology; roles and responsibilities; funding for contingency reserves; timing of risk activities; risk categories often structured in a Risk Breakdown Structure; stakeholder risk appetite; probability and impact definitions; probability and impact matrix for prioritization; reporting formats; and tracking mechanisms (Hillson & Simon, 2020).")]
      }),
      new Paragraph({
        children: [new TextRun("For mortgage data systems, risk categories might include technical risks (data integration challenges, cloud infrastructure limitations), organizational risks (resource availability, change resistance), external risks (regulatory changes, vendor stability), and project management risks (requirements volatility, stakeholder alignment). The probability and impact matrix would assess consequences across financial impact, schedule delays, data quality, regulatory compliance, and customer experience dimensions (Project Management Institute, 2021).")]
      }),
      new Paragraph({
        children: [new TextRun("Well-structured risk planning enables proactive threat mitigation, effective resource allocation, common risk language across stakeholders, and clear ownership for risk responses. In data projects where quality issues and integration complexities emerge unexpectedly, predetermined escalation paths and contingency reserves enable rapid, effective responses (Hillson & Simon, 2020).")]
      }),
      new Paragraph({
        children: [new TextRun("Best practices include tailoring approaches to project characteristics, engaging diverse stakeholder perspectives, establishing clear prioritization thresholds, and integrating risk management into overall project planning rather than treating it separately. Challenges include balancing process rigor against overhead and maintaining stakeholder engagement over time (Kerzner, 2022).")]
      }),

      // Page break
      new Paragraph({ children: [new PageBreak()] }),

      // Page 4: Executing: Manage Stakeholder Engagement
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Executing: Manage Stakeholder Engagement")]
      }),
      new Paragraph({
        children: [new TextRun("Manage Stakeholder Engagement focuses on communicating and working with stakeholders to meet needs and expectations, address issues, and foster appropriate involvement throughout the project lifecycle (Project Management Institute, 2021). In complex IT implementations like enterprise data platforms, effective stakeholder engagement often determines whether technically sound solutions achieve adoption and deliver business value.")]
      }),
      new Paragraph({
        children: [new TextRun("Key inputs include the stakeholder engagement plan, which documents strategies for productive involvement; communications, risk, and change management plans; change and issue logs; lessons learned register; and stakeholder register (Eskerod & Huemann, 2020). Tools include expert judgment; communication skills including various methods, styles, and presentation techniques; and interpersonal skills such as conflict management, cultural awareness, negotiation, and political awareness. Ground rules establish interaction expectations while meetings serve as primary engagement forums.")]
      }),
      new Paragraph({
        children: [new TextRun("Primary outputs include change requests arising from stakeholder engagement; project management plan updates to communications or stakeholder engagement approaches; and project document updates including change logs, issue logs, and lessons learned (Project Management Institute, 2021).")]
      }),
      new Paragraph({
        children: [new TextRun("In mortgage data analytics, stakeholder engagement addresses diverse interests: marketing teams needing intuitive reporting for capital campaigns; compliance officers requiring audit trails; data engineering teams needing infrastructure support; executives focusing on business value; and end users needing training and support (Eskerod & Huemann, 2020). For loan offer platforms, effective engagement might include weekly technical meetings, monthly governance reviews, quarterly executive briefings, and iterative prototype reviews with end users.")]
      }),
      new Paragraph({
        children: [new TextRun("Best practices emphasize proactive communication, building trust through consistent follow-through and transparency, tailoring approaches to stakeholder preferences, and regular effectiveness assessment through feedback mechanisms. Challenges include managing conflicting interests, maintaining engagement over time, addressing resistance from threatened stakeholders, and managing expectations within project constraints (Kerzner, 2022).")]
      }),

      // Page break
      new Paragraph({ children: [new PageBreak()] }),

      // Page 5: Monitoring/Controlling: Perform Integrated Change Control
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Monitoring/Controlling: Perform Integrated Change Control")]
      }),
      new Paragraph({
        children: [new TextRun("Perform Integrated Change Control reviews change requests, approves changes, and manages modifications to deliverables, documents, and project plans while coordinating changes across the project (Project Management Institute, 2021). This process maintains baseline integrity while enabling appropriate adaptation. In dynamic IT environments, disciplined change control separates strategic adaptation from aimless drift.")]
      }),
      new Paragraph({
        children: [new TextRun("Primary inputs include the change management plan, configuration management plan, scope/schedule/cost baselines, basis of estimates, requirements traceability matrix, work performance reports, and change requests (corrective actions, preventive actions, defect repairs, or updates). Enterprise environmental factors and organizational process assets guide change procedures (Hass, 2020).")]
      }),
      new Paragraph({
        children: [new TextRun("Tools include expert judgment evaluating changes from multiple perspectives; change control tools ranging from manual forms to automated workflow systems; and data analysis including alternatives analysis, cost-benefit analysis, and decision-making techniques. Change control board meetings serve as primary decision forums for significant changes (Project Management Institute, 2021).")]
      }),
      new Paragraph({
        children: [new TextRun("Change evaluation should balance multiple considerations: alignment with strategic objectives ensuring changes aren't scope creep; impact on scope, schedule, cost, quality, resources, and risk; dependencies and integration impacts in complex data ecosystems; and organizational change capacity (Hass, 2020). Outputs include approved change requests, project management plan updates, and comprehensive change logs.")]
      }),
      new Paragraph({
        children: [new TextRun("In mortgage servicing, change control addresses regulatory compliance, data quality standards, and integration complexities. For loan offer platforms, change requests might originate from business stakeholders requesting features, compliance officers identifying regulatory requirements, technical teams proposing architectural improvements, or end users suggesting usability enhancements. Consider a request to add credit risk factors to loan calculations: evaluation would assess business value, technical feasibility, schedule/cost impacts, risk implications, and compliance requirements before deciding.")]
      }),
      new Paragraph({
        children: [new TextRun("Best practices include clear, well-communicated processes; distinguishing formal changes from minor adjustments to avoid bureaucracy; prompt processing; comprehensive documentation; and analyzing change patterns to identify systemic issues like inadequate requirements definition (Project Management Institute, 2021). Challenges include managing stakeholder frustration over rejections, preventing informal bypasses, maintaining discipline under schedule pressure, and managing administrative burden (Kerzner, 2022).")]
      }),

      // Page break
      new Paragraph({ children: [new PageBreak()] }),

      // References page
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("References")]
      }),
      new Paragraph({
        style: "hangingIndent",
        children: [new TextRun("Eskerod, P., & Huemann, M. (2020). Rethinking project stakeholder management. "), new TextRun({ text: "Project Management Journal", italics: true }), new TextRun(", "), new TextRun({ text: "51", italics: true }), new TextRun("(4), 403-415. https://doi.org/10.1177/8756972820916447")]
      }),
      new Paragraph({
        style: "hangingIndent",
        children: [new TextRun("Hass, K. B. (2020). Managing complex change in the project environment. "), new TextRun({ text: "PM World Journal", italics: true }), new TextRun(", "), new TextRun({ text: "9", italics: true }), new TextRun("(3), 1-18. https://pmworldlibrary.net/wp-content/uploads/2020/03/pmwj91-Mar2020-Hass-managing-complex-change-in-projects-featured-paper.pdf")]
      }),
      new Paragraph({
        style: "hangingIndent",
        children: [new TextRun("Hillson, D., & Simon, P. (2020). "), new TextRun({ text: "Practical project risk management: The ATOM methodology", italics: true }), new TextRun(" (3rd ed.). Management Concepts Press. https://doi.org/10.1002/9781119560067")]
      }),
      new Paragraph({
        style: "hangingIndent",
        children: [new TextRun("Kerzner, H. (2022). "), new TextRun({ text: "Project management: A systems approach to planning, scheduling, and controlling", italics: true }), new TextRun(" (13th ed.). John Wiley & Sons. https://www.wiley.com/en-us/Project+Management%3A+A+Systems+Approach+to+Planning%2C+Scheduling%2C+and+Controlling%2C+13th+Edition-p-9781119805373")]
      }),
      new Paragraph({
        style: "hangingIndent",
        children: [new TextRun("Project Management Institute. (2021). "), new TextRun({ text: "A guide to the project management body of knowledge (PMBOK guide)", italics: true }), new TextRun(" (7th ed.). Project Management Institute. https://www.pmi.org/pmbok-guide-standards/foundational/pmbok")]
      }),
      new Paragraph({
        style: "hangingIndent",
        children: [new TextRun("Sommerville, I. (2016). "), new TextRun({ text: "Software engineering", italics: true }), new TextRun(" (10th ed.). Pearson Education. https://www.pearson.com/en-us/subject-catalog/p/software-engineering/P200000003225/9780137502547")]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/srinathjagarlamudi/Documents/codebase/phd_assistant/semesters/2026-spring/ITS-535-System-Analysis-Design/assignments/week-5/Jagarlamudi_Srinath_PMI_Paper.docx", buffer);
  console.log("Document created successfully!");
});
