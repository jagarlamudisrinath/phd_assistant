# PhD Assistant Workflow Guide

**Last Updated**: 2025-11-23
**Version**: 3.0

This document provides detailed workflow examples and troubleshooting for the PhD assistant repository. For core architecture and agent descriptions, see [CLAUDE.md](CLAUDE.md).

---

## Table of Contents

1. [Complete Assignment Lifecycle Example](#complete-assignment-lifecycle-example)
2. [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Complete Assignment Lifecycle Example

**Scenario**: Week 3 Research Paper on IT Strategic Planning
**Workflow**: Using the recommended 6-step command approach

### Step 1: Get Instructions (Day 1)

**Command**: `/fetch-from-blackboard https://ucumberlands.blackboard.com/.../week-3-paper`

**What happens:**
- Browser automation navigates to assignment page
- Extracts title, instructions, requirements, due date, points
- Downloads any attachments (PDFs, PPTs, rubrics)
- Reads attachments using Skills (pdf, pptx, docx, xlsx)
- Creates `assignments/week-3/paper-1-it-strategic-planning/instructions.md`
- Saves attachments to assignment folder

**Result:**
- `instructions.md` - Structured requirements (3000 words, APA, 20+ sources, due Nov 30)
- `Rubric_Research_Paper.xlsx` - Downloaded and readable
- Clear understanding of all deliverables

---

### Step 2: Draft Assignment (Days 2-5)

**Command**: `/draft-submission semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-3/paper-1-it-strategic-planning`

**What happens:**
- Reads `instructions.md` to understand requirements
- Invokes `academic-paper-writer` agent
- Agent creates detailed outline for approval
- Agent drafts sections with PhD-level analysis
- Incorporates professional context (Data Engineer at Lakeview Loan Servicing)
- Saves as `my-paper-draft.md`

**Student actions during this phase:**
- Conduct independent research, document in `my-research-notes.md`
- Review draft sections, add personal insights
- Approve outline before full drafting begins

**Result:**
- `my-paper-draft.md` - Complete 3,200-word draft with 22 sources
- Strong academic foundation with room for personalization

---

### Step 3: Review Assignment (Day 6, morning)

**Command**: `/review-submission semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-3/paper-1-it-strategic-planning`

**What happens:**
- Locates `my-paper-draft.md`
- Reads `instructions.md` and rubric
- Invokes `phd-assignment-reviewer` agent
- Agent provides comprehensive feedback:
  - **Strengths**: Strong theoretical framework, good professional examples
  - **Gaps**: Missing 3 recent scholarly sources (2023-2025), literature review needs expansion
  - **Issues**: Some APA citation inconsistencies, introduction could be stronger
  - **Recommendations**: Add current research, strengthen thesis statement, fix citation formats
- Saves feedback to `feedback-review.md`

**Result:**
- `feedback-review.md` - Detailed, actionable feedback organized by priority
- Clear understanding of what needs improvement

---

### Step 4: Revise Based on Feedback (Day 6, afternoon)

**Command**: `/revise-submission semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-3/paper-1-it-strategic-planning`

**What happens:**
- Reads `my-paper-draft.md` and `feedback-review.md`
- Presents revision plan with numbered improvement areas
- Asks which areas to prioritize in this revision
- Makes targeted improvements:
  - Added 4 recent scholarly sources (2024-2025)
  - Expanded literature review section
  - Strengthened introduction and thesis
  - Fixed all APA citation format issues
- Creates `my-paper-v2.md` with revision notes

**Student actions:**
- Choose which feedback items to address
- Review changes, ensure voice is preserved
- Add any final personal touches

**Result:**
- `my-paper-v2.md` - Significantly improved draft addressing all critical feedback
- Ready for final formatting

---

### Step 5: Format for Submission (Day 7, morning)

**Command**: `/format-submission semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-3/paper-1-it-strategic-planning`

**What happens:**
- Locates `my-paper-v2.md` (latest version)
- Reads `instructions.md` for formatting requirements
- Invokes `submission-formatter` agent
- Agent converts Markdown to DOCX using `Skill(document-skills:docx)`:
  - Applies APA 7th edition formatting (Times New Roman, 12pt, double-spacing)
  - Creates title page with student name, course, date
  - Adds page numbers and headers
  - Formats references with hanging indents
  - Ensures all formatting requirements met
- Saves as `Jagarlamudi_Srinath_ITStrategicPlanning.docx`

**Result:**
- `Jagarlamudi_Srinath_ITStrategicPlanning.docx` - Professionally formatted, submission-ready
- Meets all formatting requirements (✓ APA, ✓ 3,200 words, ✓ 26 sources)

---

### Step 6: Prepare for Upload (Day 7, before submission)

**Command**: `/prepare-upload semesters/2025-fall/ITS-831-InfoTech-Import-Strat-Plan/assignments/week-3/paper-1-it-strategic-planning`

**What happens:**
- Reads `instructions.md` to understand deliverable requirements
- Verifies formatted files exist:
  - ✓ `Jagarlamudi_Srinath_ITStrategicPlanning.docx` (124 KB, not empty)
- Checks due date: Nov 30, 2025, 11:59 PM CST (2 hours remaining)
- Creates `UPLOAD-CHECKLIST.md`:
  ```markdown
  # Upload Checklist - Week 3 IT Strategic Planning Paper

  **Due Date**: November 30, 2025, 11:59 PM CST
  **Time Remaining**: 2 hours 15 minutes

  ## Files to Upload
  1. Jagarlamudi_Srinath_ITStrategicPlanning.docx (124 KB)
     - Location: /Users/.../week-3/paper-1-it-strategic-planning/

  ## Pre-Upload Verification
  - [x] File size reasonable (not empty or corrupted)
  - [x] Filename matches requirements
  - [x] APA formatting applied
  - [x] All rubric criteria addressed

  ## Submission Steps
  1. Navigate to Blackboard assignment page
  2. Click "Attach File" button
  3. Upload: Jagarlamudi_Srinath_ITStrategicPlanning.docx
  4. Click "Submit" button
  5. Verify upload success
  6. Save confirmation/receipt
  ```
- Optionally copies file to Desktop for easy access

**Result:**
- `UPLOAD-CHECKLIST.md` - Complete preparation checklist
- All files verified and ready
- Clear submission instructions

---

### Final Actions

**Manual upload to Blackboard:**
1. Follow steps in `UPLOAD-CHECKLIST.md`
2. Upload `Jagarlamudi_Srinath_ITStrategicPlanning.docx`
3. Submit assignment (timestamp: Nov 30, 2025, 9:47 PM CST)
4. Save confirmation screenshot

**Repository commit:**
```bash
git add .
git commit -m "Complete Week 3 IT Strategic Planning paper - all 6 steps"
git push
```

---

### Repository State After Submission

```
assignments/week-3/paper-1-it-strategic-planning/
  instructions.md                                   # Step 1: Fetched requirements
  Rubric_Research_Paper.xlsx                        # Step 1: Downloaded attachment
  my-research-notes.md                              # Step 2: Student research
  my-paper-draft.md                                 # Step 2: Initial draft
  feedback-review.md                                # Step 3: Review feedback
  my-paper-v2.md                                    # Step 4: Revised version
  Jagarlamudi_Srinath_ITStrategicPlanning.docx     # Step 5: Formatted submission
  UPLOAD-CHECKLIST.md                               # Step 6: Upload preparation
```

**Grade Received**: 95/100 (A)

**Feedback Stored**: `grades/feedback-week-3-paper.md`

**Lessons Applied**: Professor noted strong integration of theory and practice, thorough literature review, and excellent APA formatting. Will continue emphasizing professional connections and current research in future papers.

---

### Workflow Summary

| Step | Command | Time | Output |
|------|---------|------|--------|
| 1. Get Instructions | `/fetch-from-blackboard [URL]` | 10 min | `instructions.md` + attachments |
| 2. Draft | `/draft-submission [folder]` | 3 days | `my-paper-draft.md` |
| 3. Review | `/review-submission [folder]` | 1 hour | `feedback-review.md` |
| 4. Revise | `/revise-submission [folder]` | 3 hours | `my-paper-v2.md` |
| 5. Format | `/format-submission [folder]` | 15 min | `[Name]_[Assignment].docx` |
| 6. Prepare | `/prepare-upload [folder]` | 10 min | `UPLOAD-CHECKLIST.md` |
| **Total** | **6 commands** | **~4 days** | **High-quality submission** |

---

## Troubleshooting Common Issues

### "I can't find the instructions for this assignment"

**Solution:**
- Check: `assignments/[week or assignment-name]/instructions.md`
- If missing: Use `assignment-instructions-organizer` agent to create from course materials
- **Alternative**: Use `/fetch-from-blackboard current` command to extract instructions directly from Blackboard (requires login)
- Source materials may be in: syllabus, announcements, or professor emails
- Ask Claude Code: "Where are the Week 3 assignment instructions?"

### "The `/fetch-from-blackboard` command isn't working"

**Solution:**
- **Verify login**: Ensure you're logged into Blackboard in the browser before running the command
- **Check page**: Command works best when you're on an assignment detail page showing instructions
- **Permissions**: Required Playwright tools must be authorized in `.claude/settings.local.json`:
  - `mcp__playwright__browser_navigate`
  - `mcp__playwright__browser_snapshot`
  - `mcp__playwright__browser_wait_for`
  - `mcp__playwright__browser_tabs`
  - `mcp__playwright__browser_run_code`
  - `mcp__playwright__browser_click`
- **Reload required**: After creating the command file, Claude Code may need to reload to recognize it
- **Fallback**: If command fails, manually download materials and invoke `assignment-instructions-organizer` agent directly

### "The rubric is missing"

**Solution:**
- Check course-level: `rubrics/[rubric-name].md`
- Check assignment folder: May be inline in `instructions.md`
- If from professor's Excel/PDF: Store in `rubrics/` folder and reference in instructions
- Some assignments don't have separate rubrics - criteria may be in assignment description

### "My file structure doesn't match the examples"

**Solution:**
- Course structures vary - examples are templates, not strict requirements
- Adapt to your course's organization from Blackboard
- Key principle: Keep instructions separate from student work (use `my-` prefix)
- Consistency within each course is more important than matching examples exactly

### "Should I use an agent or Claude Code directly?"

**Decision Guide:**
- **Use agents for**: Structured multi-step tasks in their specific domain (organizing, writing, reviewing)
- **Use Claude Code for**: Quick questions, searches, general assistance, simple edits
- **When in doubt**: Ask Claude Code which approach to recommend
- **For substantial assignments**: Agent workflow (Organize → Write → Review) is recommended

### "Where do I put materials that don't fit the structure?"

**Solution:**
- Course-specific materials: Create custom subfolder in course directory
- Cross-course resources: Use `/resources/` folder
- Templates reused across courses: Use `/templates/` folder
- Data files for assignments: Store in assignment folder with assignment deliverables
- General PhD program info: Use `/resources/` at repository root

### "How do I handle group assignments?"

**Solution:**
- Store group materials in your assignment folder
- Use `my-` prefix for your individual contributions
- Create `group-[deliverable].docx` for collaborative work
- Add notes about group members and division of labor in `instructions.md`
- Keep your individual work separate from group deliverables

### "I got feedback from my professor - how do I incorporate it?"

**Solution:**
1. Store professor feedback in `grades/feedback-[assignment-name].md`
2. Review feedback carefully and identify specific changes needed
3. **Use `/revise-submission [folder]`** - This command provides guided revision workflow
4. Command reads feedback and presents improvement areas
5. Choose which areas to address, command helps make targeted revisions
6. Creates new version: `my-paper-v2.md` (preserves original)
7. Document what changed in git commit message

### "The `/review-submission` command isn't finding my draft"

**Solution:**
- **Check filename pattern**: Command looks for `my-*.md` or `my-*.docx` files
- **Check location**: Draft must be in the assignment folder you specify
- **Multiple drafts**: If you have `my-draft.md` and `my-draft-v2.md`, command uses the latest (highest version number)
- **Wrong format**: Ensure draft is in Markdown (.md) or Word (.docx), not plain text
- **Fallback**: Invoke `phd-assignment-reviewer` agent directly with specific file paths

### "The `/revise-submission` command can't find feedback"

**Solution:**
- **Check for feedback file**: Command looks for `feedback-review.md` in assignment folder
- **Run review first**: You must run `/review-submission` before `/revise-submission` to generate feedback
- **Alternative feedback sources**: If you have professor feedback or other sources, save as `feedback-review.md`
- **Manual revision**: If no feedback file exists, command will prompt you to describe what needs improvement

### "The `/prepare-upload` command says files are missing"

**Solution:**
- **Run format first**: You must run `/format-submission` before `/prepare-upload` to create DOCX/XLSX files
- **Check filename pattern**: Command looks for `Jagarlamudi_Srinath_*.docx` or similar formatted files
- **Check deliverable requirements**: Verify `instructions.md` specifies correct deliverables
- **Multiple formats**: If assignment requires both DOCX and XLSX, ensure both exist
- **Fallback**: Manually verify files exist and create your own upload checklist

### "Which commands are required vs. optional in the workflow?"

**Answer:**
- **Required for submission**: Steps 2 (draft), 5 (format)
- **Highly recommended**: Steps 3 (review), 4 (revise) - significantly improve quality
- **Optional but helpful**: Step 1 (fetch) - can organize manually; Step 6 (prepare) - can verify manually
- **Minimum workflow**: `/draft-submission` → `/format-submission` → manual upload
- **Recommended workflow**: All 6 steps for highest quality and systematic approach

### "The new commands aren't showing up"

**Solution:**
- **Reload Claude Code**: New commands require a reload to be recognized
- **Check command files**: Verify `.claude/commands/[command-name].md` files exist
- **Check YAML frontmatter**: Ensure description and allowed-tools are properly formatted
- **Restart session**: Close and reopen Claude Code if reload doesn't work
- **Verify path**: Commands must be in `.claude/commands/` directory at repository root
