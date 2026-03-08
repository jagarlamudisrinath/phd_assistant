---
description: Fetch assignment materials directly from Blackboard using browser automation. Navigates to the assignment, extracts instructions, downloads attachments (PDFs, PPTs, DOCX), reads them using Skills, and creates comprehensive instructions.md.
allowed-tools: Read, Write, Bash(ls:*), Bash(mkdir:*), Bash(find:*), Bash(mv:*), mcp__playwright__browser_navigate, mcp__playwright__browser_snapshot, mcp__playwright__browser_click, mcp__playwright__browser_wait_for, mcp__playwright__browser_tabs, mcp__playwright__browser_run_code, mcp__playwright__browser_file_upload, Skill(document-skills:pdf), Skill(document-skills:pptx), Skill(document-skills:docx), Skill(document-skills:xlsx)
argument-hint: [assignment-url OR "current" to use current page]
---

# Fetch Assignment from Blackboard

Target: $ARGUMENTS

I will extract assignment materials from Blackboard, download all attachments, read them using Skills, and create a comprehensive `instructions.md` file.

## Enhanced Process

1. **Navigate & Snapshot**:
   - Navigate to assignment page (if URL provided) or use current page
   - Take accessibility snapshot to identify all content and attachments

2. **Extract Page Content**:
   - Assignment title and description
   - Instructions and requirements from page text
   - Due date, point value, attempts allowed
   - Grading information (rubric, SafeAssign status)
   - Course code and term

3. **Identify & Download Attachments**:
   - Scan page for attachment links (PDFs, PPTs, DOCX, XLSX, etc.)
   - Click each attachment to download
   - Save files to assignment folder with clear naming
   - Track what was downloaded

4. **Read Attachments with Skills**:
   - Use `Skill(document-skills:pdf)` to extract content from PDFs
   - Use `Skill(document-skills:pptx)` to extract content from PowerPoints
   - Use `Skill(document-skills:docx)` to extract content from Word documents
   - Use `Skill(document-skills:xlsx)` to extract content from Excel files
   - Integrate extracted content into instructions

5. **Determine Folder Structure**:
   - Parse course code from page
   - Create appropriate folder path: `semesters/YYYY-term/COURSE-CODE/assignments/week-X/assignment-name/`
   - Create folders if they don't exist

6. **Create Comprehensive instructions.md**:
   - Include all page content (description, requirements, due dates)
   - Add sections for each attachment with extracted content
   - List required deliverables using `my-` prefix pattern
   - Include metadata (due date, points, fetch timestamp)
   - Reference downloaded files

7. **Report Results**:
   - List what was downloaded and where
   - Show path to instructions.md
   - Confirm all attachments were read successfully
   - Provide next steps (draft, review, format, submit)

## Implementation

Let me start by taking a snapshot of the page to identify the assignment content and any attachments that need to be downloaded.
