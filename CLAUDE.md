# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a **knowledge base repository** for an entire PhD in Information Technology program (2025 - completion). It contains course materials, assignments, papers, and resources organized by semester and course. The repository serves as a structured reference to help Claude Code assist with:

- Writing papers and research assignments across all courses
- Understanding course requirements, rubrics, and deadlines
- Accessing course syllabi, instructions, and materials
- Managing coursework across multiple subjects per semester
- Providing context for any course-related work throughout the doctoral program

**Important**: This repository contains NO code. All materials are documentation files in formats: PDF, DOCX, XLSX, CSV, and MD.

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
- **`rubrics/`** - Grading rubrics (stored at course level, referenced by assignments)
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

## Current Semester Example (Fall 2025)

The repository currently contains materials for the following courses:

1. **ITS-831-B02**: InfoTech Import in Strat Plan
2. **INTR-799-M101**: Applied Learning Practicum (Full Term)
3. **OREN-500-M20**: Graduate Orientation Training (Full Term)
4. **DSRT-734-M51**: Infer Stats in Decision-Making (Full Term)

*Note: This section will grow with each new semester. Future semesters will add their own course folders.*

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

- **Supported formats**: PDF, DOCX, XLSX, CSV, MD
- **Source**: Most materials downloaded from Blackboard LMS
- **Sensitive data**: Grades and personal information should not be committed if repository becomes public
- **Version control**: Use git to track changes to papers and assignments

## Typical Workflow

**When starting a new semester:**
1. Create semester folder: `semesters/YYYY-semester/`
2. Create course folders following naming convention
3. Add syllabus to `syllabus/` folder
4. Organize initial materials into appropriate subfolders

**When working on assignments:**
1. User downloads course materials from Blackboard
2. User organizes materials into appropriate course folders
3. User asks Claude Code for assistance with specific assignment
4. Claude Code:
   - Identifies the course from file path or context
   - Reviews syllabus, rubrics, and instructions
   - Checks announcements for updates
   - Provides guidance aligned with specific course requirements
5. User iterates on work with Claude Code's assistance

**When submitting assignments:**
1. Store drafts and final submissions in assignment folders
2. Track submission dates and feedback
3. Use version control (git) to preserve drafts

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
