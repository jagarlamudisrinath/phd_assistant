# CLAUDE.md

**Last Updated**: 2026-03-07
**Version**: 4.0 (JARVIS Architecture)

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Table of Contents

1. [Repository Purpose](#repository-purpose)
2. [Repository Structure](#repository-structure)
3. [Custom Agents and Specialized Workflows](#custom-agents-and-specialized-workflows)
4. [JARVIS Architecture Overview](#jarvis-architecture---autonomous-phd-assistant) → [Full Docs](docs/JARVIS.md)
5. [Current Semester](#current-semester-spring-2026)
6. [How to Assist with This Repository](#how-to-assist-with-this-repository)
7. [Student Context](#student-context)
8. [Academic Standards](#academic-standards)
9. [File Management](#file-management)
10. [Typical Workflow](#typical-workflow)
11. [Workflow Examples and Troubleshooting](#workflow-examples-and-troubleshooting)
12. [Program Information](#program-information)
13. [Repository Growth](#repository-growth)
14. [Semester Archival and Maintenance](#semester-archival-and-maintenance)

**For detailed workflow examples and troubleshooting, see [WORKFLOW.md](WORKFLOW.md)**

---

## Repository Purpose

This is a **knowledge base repository** for an entire PhD in Information Technology program (2025 - completion). It contains course materials, assignments, papers, and resources organized by semester and course. The repository serves as a structured reference to help Claude Code assist with:

- Writing papers and research assignments across all courses
- Understanding course requirements, rubrics, and deadlines
- Accessing course syllabi, instructions, and materials
- Managing coursework across multiple subjects per semester
- Providing context for any course-related work throughout the doctoral program

**Important**: This repository contains NO code. All materials are documentation files in formats: PDF, DOCX, XLSX, CSV, MD, IPYNB (Jupyter notebooks), and HTML (exported notebooks).

**Scope**: This knowledge base supports ALL courses across ALL semesters of the PhD program, not just a single subject or term.

## Repository Structure

```
/semesters/
  /YYYY-semester/              # e.g., 2025-fall, 2026-spring
    /[COURSE-CODE]-[Course-Name]/   # e.g., DSRT-734-Infer-Stats-Decision-Making
      syllabus/                # Course syllabus, policies, schedule
      assignments/             # All course assignments
        [assignment-name]/     # Major assignments may have subfolders
          instructions.md      # Assignment requirements
          [student-work]       # Drafts, submissions
      announcements/           # Course announcements and updates
      rubrics/                 # Grading rubrics (shared across assignments)
      grades/                  # Grade tracking (CSV or other formats)
      messages/                # Instructor communications
/papers/                       # Dissertation research and papers
/templates/                    # Reusable templates for assignments/papers
/resources/                    # General PhD resources and references
```

### Course Folder Naming Convention

Courses follow the pattern: `[COURSE-CODE]-[Short-Course-Name]`

Examples:
- `DSRT-734-Infer-Stats-Decision-Making`
- `ITS-831-InfoTech-Import-Strat-Plan`
- `INTR-799-Applied-Learning-Practicum`

### Standard Course Subfolder Structure

Each course folder contains:

- **`syllabus/`** - Course syllabus (PDF/DOCX), learning objectives, grading policies, schedule
- **`assignments/`** - All course assignments
  - Simple assignments: Direct files (e.g., `week-1-quiz.md`)
  - Complex assignments: Subfolders with `instructions.md` and student work
  - May include: quizzes, papers, projects, discussions
- **`announcements/`** - Course announcements, policy updates, resource links
- **`rubrics/`** (optional) - Grading rubrics stored at course level when shared across assignments
- **`grades/`** - Grade tracking and feedback (typically CSV format)
- **`messages/`** - Important communications from instructors

### Assignment Organization Patterns

**Simple Assignments**: Stored directly in `assignments/` folder
```
assignments/
  week-1-quiz.md
  week-2-discussion.md
```

**Complex Assignments**: Have their own subfolders
```
assignments/
  residency-weekend/
    overview.md
    R1-journal-article-review/
      instructions.md
      draft.md
    R2-practical-connection/
      instructions.md
      submission.docx
```

**Rubrics**: Stored at course level and referenced by assignments
```
rubrics/
  journal-article-review-rubric.md
  practical-connection-rubric.md
```

### Student Work Naming Convention

**All student-created work** (submissions, drafts, responses) uses the `my-` prefix to clearly distinguish it from course materials and instructions.

**Pattern**: `my-[assignment-type].[ext]` or `my-[deliverable-name].[ext]`

**Simple Assignments** (discussions, quizzes):
```
assignments/
  week-2/
    discussion-emerging-technologies.md    # Instructions
    my-discussion.md                       # Student submission
```

**Complex Assignments** (papers, projects, exercises):
```
assignments/
  week-2/
    ai-risk-management-exercise/
      instructions.md                      # Assignment instructions
      AI Risk Register Template.xlsx       # Provided template
      my-risk-register.xlsx                # Student's completed work
      my-monitoring-plan.docx              # Student's Word document
  week-1/
    paper-1-aligning-it-strategies/
      instructions.md                      # Paper instructions
      my-paper-draft.docx                  # Student's draft
      my-paper-final.docx                  # Student's final submission
```

**Benefits**:
- **Clear separation**: Instantly distinguishes student work from instructions and templates
- **Easy identification**: All student work groups together alphabetically
- **Consistent pattern**: Works across all file types (MD, DOCX, XLSX, PDF)
- **Scalable**: Applies to all courses throughout the entire PhD program
- **Version tracking**: Easy to add `-draft`, `-final`, `-v1`, etc. suffixes

**Examples**:
- `my-discussion.md` - Discussion post
- `my-quiz.md` - Quiz submission
- `my-paper.docx` - Research paper
- `my-risk-register.xlsx` - Risk assessment spreadsheet
- `my-paper-draft.docx` - Draft version
- `my-paper-final.docx` - Final submission

**Version Control with my- prefix:**
- Single version: `my-paper.docx`
- Multiple versions: `my-paper-draft.docx`, `my-paper-final.docx`
- Dated versions: `my-paper-2025-11-15.docx`
- Iteration versions: `my-paper-v1.docx`, `my-paper-v2.docx`

**Anti-patterns** (don't do this):
- ❌ `Srinath-paper.docx` (use my-, not your name)
- ❌ `paper-final-final-FINAL.docx` (be systematic with versioning)
- ❌ `submission.docx` (not descriptive enough)

## Custom Agents and Specialized Workflows

This repository includes four specialized agents designed for specific PhD workflow tasks. Each agent has deep expertise in its domain and should be used when tasks match their specialty.

**Architecture Philosophy: Skills-First Approach**

This repository uses **Anthropic document-skills** (docx, pdf, pptx, xlsx) as the primary tool stack for all document operations. Skills provide comprehensive, high-level document manipulation capabilities:
- **Reading**: Extract content from PDFs, PowerPoints, Word docs, and Excel files provided by professors
- **Writing**: Create professionally formatted DOCX and XLSX files for submission
- **Formatting**: Apply APA styling, table beautification, and academic formatting standards

Skills are invoked using the `Skill(document-skills:<type>)` tool pattern and offer simpler, more powerful document handling than lower-level MCP tools.

### Available Agents

#### 1. assignment-instructions-organizer

**Purpose**: Extract, organize, and structure assignment instructions from raw course materials

**When to use:**
- User downloads new assignment materials from Blackboard
- Assignment requirements are scattered across multiple documents (syllabus, PDFs, announcements, rubrics)
- Need to create standardized `instructions.md` files
- Setting up folder structure for complex multi-part assignments
- Consolidating course materials into coherent, actionable requirements

**What it does:**
- Reads professor-provided materials using Skills: PDFs, PowerPoints, Word docs, Excel spreadsheets
- Extracts key information: assignment name, due date, requirements, deliverables, grading criteria
- Creates structured `instructions.md` files following repository patterns
- Recommends proper folder organization (simple vs. complex assignment structures)
- Identifies what student deliverables to create (using `my-` prefix pattern)
- References rubrics and course materials appropriately
- Flags ambiguities and missing information for clarification

**Workflow Integration:**
1. User downloads course materials from Blackboard
2. Invoke `assignment-instructions-organizer` agent
3. Agent analyzes materials and creates structured `instructions.md`
4. Agent recommends folder structure and identifies deliverables
5. User reviews and confirms organization
6. Materials are ready for work to begin

**Example invocations:**
- "I just downloaded the Week 3 assignment from Blackboard. Can you help me organize the instructions?"
- "This residency weekend has 4 assignments. Can you structure them all?"
- "The assignment requirements are in the syllabus, an announcement, and a PDF. Can you consolidate them into instructions.md?"

---

#### 2. academic-paper-writer

**Purpose**: Write PhD-level papers and academic assignments based on professor instructions

**When to use:**
- User needs to draft research papers, literature reviews, essays, or case studies
- Complex multi-section assignments requiring academic rigor and proper structure
- Assignments requiring specific citation formatting (APA, MLA, Chicago)
- Any writing task requiring doctoral-level critical thinking and analysis
- Discussion posts or reflective assignments that need scholarly depth

**What it does:**
- Reviews assignment instructions, rubrics, and grading criteria
- Creates detailed outlines for approval before drafting
- Drafts well-structured academic content with proper citations
- Maintains PhD-level critical thinking, analysis, and argumentation
- Follows academic integrity principles (assists learning, doesn't replace it)
- Works incrementally with student feedback and personalization
- Adapts writing style to assignment type (formal papers vs. discussions)

**Prerequisites:**
- Clear assignment instructions (ideally in `instructions.md`)
- Access to rubric and grading criteria
- Any required readings or source materials
- Understanding of assignment context and goals

**Workflow Integration:**
1. Ensure `instructions.md` exists (use assignment-instructions-organizer if needed)
2. Invoke `academic-paper-writer` agent with instructions and context
3. Agent reviews requirements and creates outline
4. User approves outline or requests modifications
5. Agent drafts content section by section
6. User reviews, provides feedback, adds personal insights
7. Iterate until ready for final review

**Example invocations:**
- "I need to write the 3000-word literature review for Week 5. The instructions are in instructions.md."
- "Help me draft the theoretical framework analysis assignment."
- "Can you help me write my Practical Connection assignment connecting course concepts to my work experience?"

---

#### 3. phd-assignment-reviewer

**Purpose**: Review and provide detailed feedback on completed PhD assignments before submission

**When to use:**
- User has completed a draft and wants comprehensive feedback
- Need systematic evaluation against rubric criteria before submission
- Want to identify gaps, weaknesses, or areas for improvement
- Self-assessment and quality assurance check
- Revising based on professor feedback and need to verify improvements

**What it does:**
- Evaluates work against assignment instructions and rubric criteria
- Provides structured feedback: summary assessment + detailed criteria-based review
- Identifies strengths and areas for improvement with specific examples
- Offers concrete, actionable suggestions for revision
- Maintains doctoral-level standards and expectations
- Checks academic integrity, citation format, methodology, and argumentation
- Assesses whether work meets all requirements before submission

**Prerequisites:**
- Completed draft (or substantially complete section)
- Assignment instructions and rubric
- Clear evaluation criteria and expectations

**Workflow Integration:**
1. User completes draft of assignment
2. Invoke `phd-assignment-reviewer` agent with instructions and draft
3. Agent provides comprehensive evaluation against all criteria
4. Agent identifies specific improvements needed
5. User revises based on feedback
6. Optionally invoke reviewer again for final check
7. Submit when assignment meets standards

**Example invocations:**
- "I've finished my draft paper. Can you review it against the rubric and provide feedback?"
- "Please evaluate this assignment before I submit it."
- "I revised based on the professor's feedback. Can you check if I addressed all the concerns?"

---

#### 4. submission-formatter

**Purpose**: Convert final reviewed assignments to submission-ready formats (DOCX/XLSX) with professional formatting

**When to use:**
- User has completed and reviewed an assignment in Markdown format
- Need to convert `my-*.md` files to Word (DOCX) or Excel (XLSX) for submission
- Assignment requires professional formatting (colors, borders, alignment, fonts)
- Final step before uploading to Blackboard
- Multiple deliverables need consistent formatting and naming

**What it does:**
- Converts Markdown documents to properly formatted Word files using document-skills (docx)
- Converts Markdown tables to beautifully formatted Excel spreadsheets using document-skills (xlsx)
- Applies professional formatting: fonts, spacing, colors, borders, alignment
- Implements APA formatting for academic papers (double-spacing, title pages, headers)
- Applies Excel beautification: frozen headers, alternating row colors, borders, column widths
- Ensures proper file naming conventions (e.g., `Jagarlamudi_Srinath_Assignment.docx`)
- Verifies all submission requirements are met before upload

**Prerequisites:**
- Completed and reviewed Markdown files (`my-*.md`)
- Assignment instructions with deliverable requirements
- Clear understanding of required formats and naming conventions

**Workflow Integration:**
1. User completes assignment and review process
2. Invoke `submission-formatter` agent with assignment folder path
3. Agent reads `instructions.md` to understand deliverable requirements
4. Agent converts Markdown files to required formats (DOCX/XLSX)
5. Agent applies professional formatting and beautification
6. Agent verifies naming conventions and completeness
7. Files are ready for Blackboard submission

**Example invocations:**
- "I've finished my-justification.md and it's been reviewed. Convert it to a Word document with proper APA formatting."
- "I have my-data-catalog.md that needs to become a professionally formatted Excel file with borders, colors, and frozen headers."
- "My Week 5 assignment needs both a Word document and an Excel file. Can you format them according to the submission requirements?"

---

### Agent vs. Main Context Decision Guide

**Use specialized agents when:**
- Task clearly matches an agent's domain expertise
- Need deep, focused assistance in that specific area
- Complex multi-step process requiring specialized workflow
- Want systematic, structured approach to the task
- Assignment is substantial (papers, projects, complex deliverables)

**Use main Claude Code context when:**
- Quick questions about repository structure or file organization
- Simple file operations, searches, or navigation
- General questions about course materials or schedules
- Tasks that don't fit a specific agent's domain
- Cross-cutting work involving multiple domains
- Brief clarifications or small edits

### Typical Multi-Agent Workflow

**Complete 6-Step Assignment Workflow with Slash Commands:**

| Step | Command | Agent | Purpose |
|------|---------|-------|---------|
| 1. Get Instructions | `/fetch-from-blackboard [URL]` | (browser automation) | Extract assignment from Blackboard, create `instructions.md` |
| 2. Draft Assignment | `/draft-submission [folder]` | academic-paper-writer | Create first draft with PhD-level rigor |
| 3. Review Assignment | `/review-submission [folder]` | phd-assignment-reviewer | Get detailed pre-submission feedback |
| 4. Revise Based on Feedback | `/revise-submission [folder]` | (guided workflow) | Systematically improve draft based on feedback |
| 5. Format for Submission | `/format-submission [folder]` | submission-formatter | Convert to DOCX/XLSX with professional formatting |
| 6. Prepare for Upload | `/prepare-upload [folder]` | (verification) | Final checks and upload preparation |

**Alternative Paths:**
- **Manual organize**: Download materials manually, invoke `assignment-instructions-organizer` agent directly
- **Direct agent invocation**: Any agent can be invoked without commands for custom workflows
- **Iterative revision**: Repeat Steps 3-4 multiple times (review → revise → review → revise) until satisfied

This staged approach ensures systematic, high-quality work at each phase of the assignment lifecycle, with clear separation between each major step.

**Example: Week 3 Research Paper (6-Step Command Workflow)**
- **Day 1**: `/fetch-from-blackboard [URL]` → get structured instructions automatically
- **Days 2-5**: `/draft-submission [folder]` → create draft with academic rigor
- **Day 6**: `/review-submission [folder]` → get detailed feedback
- **Day 6**: `/revise-submission [folder]` → improve based on feedback (repeat if needed)
- **Day 7**: `/format-submission [folder]` → convert to professional DOCX
- **Day 7**: `/prepare-upload [folder]` → verify everything ready, then upload to Blackboard

---

## JARVIS Architecture - Autonomous PhD Assistant

JARVIS is an autonomous orchestration layer that handles assignments end-to-end with minimal intervention. Built on top of the 4 specialized agents, it enables complete assignment workflows from Blackboard fetch to submission-ready formatting.

**Primary Command**: `/complete-assignment [blackboard-url OR folder-path] [--mode=supervised|auto]`

**Operating Modes**:
- **Supervised** (default): Approval checkpoints after draft, revision, and before submission (~70% time savings)
- **Auto**: Only asks before submission (~90% time savings, use after JARVIS is well-calibrated)

**Core Systems**:
- **Orchestration**: Master coordinator chaining all 4 agents automatically (`.claude/agents/jarvis-orchestrator.md`)
- **State Management**: `/state/` directory tracks assignment progress
- **Context Memory**: `/memory/` directory enables learning from your work

**For complete JARVIS documentation**, including detailed workflow, best practices, troubleshooting, and roadmap, see **[docs/JARVIS.md](docs/JARVIS.md)**.

---

## Current Semester (Spring 2026)

**Active Semester**: Spring 2026
**Status**: In Progress
**Last Updated**: 2026-03-07

The repository currently contains materials for the following courses:

1. **ITS-535**: System Analysis and Design (Section M50, First Bi-term)
2. **ITS-538**: Database Systems (Section B01, Second Bi-term)
3. **INTR-799**: Applied Learning Practicum (Section, Full Term)

**Note**: Course folders use base course codes without section identifiers to allow materials to be reusable across sections. Section information is documented here for reference but not in folder names.

## Previously Completed Semester (Fall 2025)

**Semester**: Fall 2025
**Status**: Completed

1. **ITS-831**: InfoTech Import in Strat Plan (Section B02)
2. **INTR-799**: Applied Learning Practicum (Section M101, Full Term)
3. **OREN-500**: Graduate Orientation Training (Section M20, Full Term)
4. **DSRT-734**: Infer Stats in Decision-Making (Section M51, Full Term)

*This section will grow with each new semester. Future semesters will add their own course folders.*

**Maintenance**: Update this section at the start of each semester to reflect active courses.

## How to Assist with This Repository

### Identifying the Current Course/Task

1. **From file paths**: Look at the directory structure to identify which course the user is working on
   - Example: `semesters/2025-fall/DSRT-734-Infer-Stats-Decision-Making/assignments/...`
2. **From user context**: The user may mention the course name or code
3. **From assignment files**: Check the course header in assignment files

### When Helping with Papers/Assignments

**Step 1: Locate Course Materials**
1. Navigate to the relevant course folder: `semesters/[semester]/[COURSE-CODE]-[Course-Name]/`
2. Review the **syllabus** to understand course objectives, grading breakdown, and schedule
3. Check **assignment instructions** (often in `assignments/[assignment-name]/instructions.md`)
4. Review applicable **rubrics** (in `rubrics/` folder)

**Step 2: Understand Requirements**
1. Identify grading criteria and point values
2. Note due dates and submission requirements
3. Check for specific formatting requirements (APA, word count, etc.)
4. Look for special instructions or constraints

**Step 3: Gather Context**
1. Review recent **announcements** for clarifications or updates
2. Reference course-specific materials (readings, lecture notes)
3. Consider the subject area (statistics, IT management, research methods, etc.)
4. Check for cross-references to other assignments or rubrics

**Step 4: Provide Assistance**
1. Align guidance with specific course requirements
2. Reference relevant course materials and rubrics
3. Maintain PhD-level academic rigor
4. Use appropriate citation standards (typically APA)
5. Consider the student's professional context when relevant (see Student Context below)

### When Writing Discussion Posts and Scripts

**IMPORTANT**: When creating discussion responses, video scripts, or similar deliverables, create FINAL, CLEAN content ready for the student to use directly. Do NOT create templates with instructional scaffolding.

**What TO Include:**
- Simple metadata header (student name, course, topic)
- The actual content the student will deliver/record/submit
- Natural, conversational language that sounds human
- Statistics and evidence woven naturally into the narrative
- Conversational transitions ("So...", "Now...", "Here's the thing...", "Let me talk about...")
- For video scripts: Write as if speaking to colleagues, not reading formal notes

**What NOT to Include:**
- ❌ Timing labels or section headers within the script itself (e.g., "Component 1 (45 seconds)")
- ❌ Delivery notes in brackets (e.g., "[Speak with energy]", "[Use hand gestures]")
- ❌ Separate "Supporting Statistics" or "Research References" sections
- ❌ Practice tips, action items, or to-do lists
- ❌ "Peer Response Preparation" sections
- ❌ "Notes & Reflections" or meta-commentary
- ❌ Multiple "alternative versions" or example variations
- ❌ Template-style instructional content

**Example Structure for Video Discussion Script:**

```markdown
# Video Pitch: [Topic]

**Student:** [Name]
**Course:** [Course Code]
**Topic:** [Topic]

---

## Script

[Natural, conversational speech content here - no section breaks, no delivery notes, just the words to speak]

[Use paragraph breaks for natural pauses and transitions]

[Include statistics and evidence inline with the narrative]

[End naturally without meta-commentary]
```

**Writing Style:**
- Write in first person when appropriate
- Use contractions naturally (I'm, we're, don't, can't)
- Vary sentence length for natural rhythm
- Include natural speech patterns and transitions
- Make it sound like the student is thinking and explaining, not reciting
- Avoid overly formal or rigid academic language in scripts (save that for papers)

**For Written Discussion Posts (not video):**
Apply similar principles but adjust for written format:
- More structured paragraphs than speech
- Can be slightly more formal than video scripts
- Still conversational and natural, not template-like
- Include only the actual discussion post content

### When Organizing New Materials

1. **Maintain folder structure** - Place materials in the appropriate course/semester folder
2. **Use clear file naming** - Include dates, assignment numbers, or descriptive names
3. **Preserve file formats** - Keep original formats from Blackboard downloads (PDF, DOCX, etc.)
4. **Follow naming patterns** - Use consistent naming: `[type]-[name].ext` or `[course-code]-[assignment].ext`
5. **Create subfolders for complex assignments** - Use `instructions.md` pattern for major assignments

### Student Context

**Program**: PhD in Information Technology, University of the Cumberlands (2025 - )

**Professional Background**: Data Engineer & Analyst at Lakeview Loan Servicing
- Focus: Capital marketing, loan offer generation, mortgage data analysis
- Skills: Statistical analysis, data modeling, IT decision-making

**Research Interests**:
- Data-driven decision-making in IT environments
- Statistical methods in organizational contexts
- IT strategic planning and governance

**Use This Context For**:
- Practical Connection assignments (linking course concepts to work experience)
- Selecting research topics aligned with dissertation interests
- Providing relevant examples in papers and discussions

### Academic Standards

**All courses require**:
- Doctoral-level critical thinking and analysis
- Proper APA formatting (7th edition)
- Original work with appropriate citations
- Professional, scholarly writing
- Evidence-based arguments and conclusions

**Common Assignment Types Across Courses**:
- Research papers and literature reviews
- Practical connection reflections
- Journal article critiques
- Case studies and applications
- Discussion posts and peer responses
- Quizzes and exams

## File Management

- **Supported formats**: PDF, DOCX, XLSX, CSV, MD, IPYNB (Jupyter notebooks), HTML (exported notebooks)
- **Source**: Most materials downloaded from Blackboard LMS
- **Sensitive data**: Grades and personal information should not be committed if repository becomes public
- **Version control**: Use git to track changes to papers and assignments

## Typical Workflow

**When starting a new semester:**
1. Create semester folder: `semesters/YYYY-semester/` (e.g., `2026-spring`)
2. Create course folders following naming convention: `[COURSE-CODE]-[Short-Course-Name]/`
3. Create standard subfolders for each course:
   - `syllabus/`
   - `assignments/`
   - `announcements/`
   - `rubrics/` (if course has shared rubrics)
   - `grades/`
   - `messages/`
4. Add `.gitkeep` files to empty folders to preserve structure in git
5. Download and add course syllabus to `syllabus/` folder
6. Update "Current Semester Example" section in CLAUDE.md
7. Commit initial semester structure to repository with descriptive message

**When working on assignments (recommended 6-step command workflow):**

*Complete workflow using slash commands:*
1. **Get instructions**: `/fetch-from-blackboard [URL]` - Extract assignment from Blackboard automatically
2. **Draft**: `/draft-submission [folder]` - Create first draft with PhD-level academic rigor
3. **Review**: `/review-submission [folder]` - Get detailed pre-submission feedback against rubric
4. **Revise**: `/revise-submission [folder]` - Systematically improve draft based on feedback
5. **Format**: `/format-submission [folder]` - Convert to professional DOCX/XLSX for submission
6. **Prepare**: `/prepare-upload [folder]` - Final verification and upload checklist

*Alternative: Manual workflow with direct agent invocation:*
1. Download materials from Blackboard manually
2. Invoke `assignment-instructions-organizer` agent to create `instructions.md`
3. Invoke `academic-paper-writer` agent to draft assignment
4. Invoke `phd-assignment-reviewer` agent for feedback
5. Manually revise based on feedback
6. Invoke `submission-formatter` agent to create final files
7. Manually verify and upload to Blackboard

**Alternative lightweight workflow (for simple assignments or quick questions):**
1. User downloads course materials from Blackboard
2. User organizes materials into appropriate course folders
3. User asks Claude Code for assistance with specific assignment
4. Claude Code:
   - Identifies the course from file path or context
   - Reviews syllabus, rubrics, and instructions
   - Checks announcements for updates
   - Provides guidance aligned with specific course requirements
5. User iterates on work with Claude Code's assistance

**When completing and submitting assignments:**
1. **Review and revise** (Steps 3-4):
   - Run `/review-submission [folder]` for detailed feedback against rubric
   - Run `/revise-submission [folder]` to systematically improve draft
   - Iterate as needed until satisfied with quality

2. **Format for submission** (Step 5):
   - Run `/format-submission [folder]` to convert to DOCX/XLSX
   - Files created with proper naming: `Jagarlamudi_Srinath_[Assignment].[ext]`
   - Keep draft versions for reference

3. **Prepare for upload** (Step 6):
   - Run `/prepare-upload [folder]` for final verification
   - Review `UPLOAD-CHECKLIST.md` generated by command
   - Verify all deliverables present and properly formatted
   - Check due date and submission requirements

4. **Submit to Blackboard**:
   - Upload files listed in checklist to appropriate assignment dropbox
   - Note submission timestamp
   - Keep confirmation/receipt if provided

5. **Document in repository**:
   - Commit all work to git with descriptive message
   - Document submission date in commit message

6. **Track feedback**:
   - When grades/feedback are received, add to `grades/` folder
   - Create feedback file: `feedback-[assignment-name].md`
   - Use feedback to improve future assignments

## Workflow Examples and Troubleshooting

For detailed workflow examples and troubleshooting guidance, see **[WORKFLOW.md](WORKFLOW.md)**.

**Quick Reference - 6-Step Workflow:**

| Step | Command | Output |
|------|---------|---------|
| 1 | `/fetch-from-blackboard [URL]` | `instructions.md` + attachments |
| 2 | `/draft-submission [folder]` | `my-[assignment]-draft.md` |
| 3 | `/review-submission [folder]` | `feedback-review.md` |
| 4 | `/revise-submission [folder]` | `my-[assignment]-v2.md` |
| 5 | `/format-submission [folder]` | `[Name]_[Assignment].docx` |
| 6 | `/prepare-upload [folder]` | `UPLOAD-CHECKLIST.md` |

**See WORKFLOW.md for:**
- Complete assignment lifecycle example with detailed step-by-step walkthrough
- Comprehensive troubleshooting for all commands
- Tips for handling edge cases and common issues

## Program Information

- **Degree**: PhD in Information Technology
- **Institution**: University of the Cumberlands
- **Start Date**: Fall 2025
- **Expected Load**: 2-4 courses per semester
- **LMS**: Blackboard
- **Primary Format**: Hybrid (online + residency weekends)

## Repository Growth

This repository will grow organically throughout the PhD program:
- **Each semester**: Add new semester folder with 2-4 course folders
- **Each course**: Populate with syllabus, assignments, announcements, rubrics
- **Dissertation phase**: Use `/papers/` folder for dissertation work
- **Resources**: Accumulate general PhD resources in `/resources/`

**Important**: All guidance in this file applies to ANY course in ANY semester, not just current courses.

## Semester Archival and Maintenance

As the repository grows across multiple years of the PhD program, maintain focus on active coursework while preserving historical materials.

### Active Semesters

- Keep **current semester** and **next semester** (if materials are available) in "Current Semester Example"
- These are the semesters Claude Code should prioritize when answering queries
- Full context and immediate access to all materials

### Recently Completed Semesters

- **Previous semester** can remain in main CLAUDE.md for reference
- Useful for cross-referencing similar assignments or materials
- Helps with pattern recognition across courses
- Can inform approaches to new assignments

### Archived Semesters

- Semesters older than 1 year should be documented in `SEMESTER_HISTORY.md` (create as needed)
- Maintain the folder structure but remove from primary CLAUDE.md guidance
- Still accessible via repository but not in primary context
- Keeps CLAUDE.md focused and manageable

### Suggested Maintenance Schedule

**Start of Each Semester:**
- Add new courses to "Current Semester Example" section
- Update "Last Updated" date in CLAUDE.md header
- Review and update Student Context if professional situation has changed
- Create new semester folder structure

**End of Each Semester:**
- Move completed semester to "Recently Completed" status in documentation
- Archive grades and final feedback
- Reflect on what worked well in workflow
- Note any process improvements for next semester

**Annually (at start of new academic year):**
- Move semesters older than 1 year to `SEMESTER_HISTORY.md`
- Review repository organization and cleanup if needed
- Update Program Information section (courses completed, dissertation status)
- Backup repository to external storage

### SEMESTER_HISTORY.md Format

When archiving old semesters, create/update `SEMESTER_HISTORY.md` in repository root:

```markdown
# Semester History

## Fall 2025 (Completed)

**Courses:**
1. **ITS-831**: InfoTech Import in Strat Plan
2. **INTR-799**: Applied Learning Practicum
3. **OREN-500**: Graduate Orientation Training
4. **DSRT-734**: Infer Stats in Decision-Making

**Key Achievements:**
- Completed first semester of PhD program
- Established workflow with custom agents
- Maintained 3.8+ GPA

**Lessons Learned:**
- Agent workflow (Organize → Write → Review) highly effective for major papers
- Early organization of assignment instructions saves significant time
- Regular commits to git preserve work and track progress

---

## Spring 2026 (Completed)

[Similar format for next semester]
```

### Long-Term Repository Health

**Goals:**
- Keep CLAUDE.md under 800 lines for optimal usability
- Maintain clear focus on active work
- Preserve historical materials for reference
- Scale sustainably through 4-6 years of doctoral work

**Best Practices:**
- Regular commits with descriptive messages
- Consistent naming conventions throughout
- Periodic cleanup of duplicate or obsolete files
- Annual review of repository structure and organization
