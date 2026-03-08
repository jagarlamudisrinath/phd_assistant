---
description: "Complete entire assignment workflow autonomously from start to finish. Fetches/organizes instructions, drafts, reviews, revises, formats, and prepares for submission with approval checkpoints. Use when you want JARVIS to handle an assignment end-to-end."
allowed-tools: ["all"]
argument-hint: "[blackboard-url OR folder-path] [--mode=supervised|auto]"
---

# Complete Assignment Workflow

You will orchestrate the ENTIRE 6-step assignment workflow from start to finish with minimal user intervention. This is the primary JARVIS command for fully autonomous assignment completion.

## Arguments

**[blackboard-url OR folder-path]**: Either:
- Blackboard assignment URL (starts assignment from scratch)
- Existing assignment folder path (resumes in-progress work)

**[--mode]** (optional):
- `--mode=supervised` (default): Requires approval at key checkpoints
- `--mode=auto`: Maximum autonomy, minimal checkpoints (use with caution)

**Examples**:
```bash
/complete-assignment https://blackboard.ucumberlands.edu/...
/complete-assignment semesters/2025-fall/DSRT-734.../week-6/anova-paper
/complete-assignment https://blackboard.ucumberlands.edu/... --mode=auto
```

## What This Command Does

This command invokes the **JARVIS Orchestrator agent** to autonomously execute all 6 workflow steps:

### Step 1: Fetch & Organize (15-20 min)
- Navigate to Blackboard and extract assignment materials
- Create `instructions.md` with structured requirements
- Download attachments (rubrics, data files, templates)
- Set up proper folder structure

### Step 2: Draft Assignment (1-4 hours)
- Invoke academic-paper-writer agent
- Reference writing-style-profile for personalization
- Apply successful-patterns from similar assignments
- Check professor-preferences for this course
- Create `my-[assignment]-draft.md`

**CHECKPOINT**: Ask user to review draft before proceeding

### Step 3: Review Draft (15-30 min)
- Invoke phd-assignment-reviewer agent
- Evaluate against rubric criteria
- Check for common-feedback issues
- Generate detailed `feedback-review.md`
- Determine if revision needed

### Step 4: Revise (30 min - 2 hours)
- Address all major feedback points
- Apply improvements systematically
- Create `my-[assignment]-v2.md` (or v3, v4...)
- Optionally loop back to review if changes substantial

**CHECKPOINT**: Ask user if revision addresses feedback satisfactorily

### Step 5: Format for Submission (10-15 min)
- Invoke submission-formatter agent
- Convert to required format (DOCX, XLSX, etc.)
- Apply professional formatting and beautification
- Create `Jagarlamudi_Srinath_[Assignment].[ext]`

### Step 6: Prepare for Upload (5-10 min)
- Run all quality checks
- Verify deliverables complete
- Generate `UPLOAD-CHECKLIST.md`
- Confirm ready for Blackboard submission

**CHECKPOINT**: ALWAYS ask user before actual Blackboard upload

## Implementation

### Task 1: Initialize

1. **Parse arguments**:
   - Determine if starting fresh (URL) or resuming (folder path)
   - Extract mode (supervised or auto)

2. **Check/create state tracking**:
   - Read `/state/active-assignments.json`
   - Create assignment entry if new
   - Load existing state if resuming

3. **Invoke JARVIS Orchestrator**:
   - Pass assignment context
   - Specify autonomy mode
   - Provide access to all agents and memory files

### Task 2: Orchestrate Workflow

Delegate to **jarvis-orchestrator agent** with these parameters:

```
You are orchestrating a complete assignment workflow.

Assignment: [URL or folder]
Mode: [supervised or auto]
Current status: [new or existing status from state file]

Execute the full 6-step workflow:
1. Fetch & Organize
2. Draft
3. Review
4. Revise
5. Format
6. Prepare Upload

State tracking: Update /state/active-assignments.json after each step
Memory integration: Reference all /memory/ files for personalization
Approval checkpoints: [Based on mode]

Provide progress updates throughout.
```

### Task 3: State Management

After EACH step, update state:

```javascript
// Load state
let state = JSON.parse(fs.readFileSync('state/active-assignments.json'))
let assignment = state.assignments.find(a => a.folder_path === currentPath)

// Update status
assignment.status = newStatus  // e.g., "draft_complete"
assignment.workflow_history.push({
  step: newStatus,
  timestamp: new Date().toISOString(),
  agent: agentUsed,
  notes: stepNotes
})

// Update estimated time
assignment.estimated_hours_remaining -= hoursSpent

// Write back
fs.writeFileSync('state/active-assignments.json', JSON.stringify(state, null, 2))
```

### Task 4: Progress Reporting

Provide clear, concise updates:

```
✓ Step 1 complete: Instructions organized
  → Created: instructions.md, downloaded 3 attachments
  → Status: organizing → draft_pending

→ Step 2 starting: Drafting assignment
  ⏳ Estimated time: 90 minutes
  📝 Using: academic-paper-writer agent
  🎨 Applying: Your writing style + Prof Smith preferences
```

### Task 5: Checkpoint Handling

At approval checkpoints:

**Supervised Mode**:
```
📋 **Approval Required: Draft Review Complete**

**Draft status**: 2,847 words, 15 citations, follows rubric

**Review feedback summary**:
- ✅ Strengths: Evidence integration, statistical analysis
- ⚠️ Improvements needed: Deepen implications section, add 2-3 more sources

**Next step**: Revise to address feedback

**Options**:
1. Proceed with revision (recommended)
2. Skip revision, go straight to formatting
3. Do another review round first
4. Pause workflow for manual review

Shall I proceed with revision?
```

**Auto Mode**:
```
✓ Step 3 complete: Review done (minor improvements suggested)
→ Step 4 starting: Revising automatically
```

### Task 6: Completion

When all steps done:

```
🎉 **Assignment Workflow Complete**

**Summary**:
- Total time: 6.5 hours (estimated: 7 hours)
- Iterations: 2 draft/review cycles
- Final grade prediction: 95%+ (based on rubric alignment)

**Deliverables created**:
- ✅ Jagarlamudi_Srinath_ANOVA_Paper.docx (formatted, APA compliant)
- ✅ UPLOAD-CHECKLIST.md (ready for review)

**State updated**:
- Assignment marked: ready_for_submission
- Next action: Manual Blackboard upload

**Ready to submit!** Review UPLOAD-CHECKLIST.md and upload to Blackboard.

Track submission: I'll update state to "submitted" after you confirm upload.
```

## Workflow Variations

### If Starting from URL (Fresh Assignment)

**Workflow**:
```
URL → Fetch (Step 1) → Draft (Step 2) → Review (Step 3) →
Revise (Step 4) → Format (Step 5) → Prepare (Step 6) → Done
```

**Estimated total time**: 5-10 hours (depending on assignment complexity)

### If Resuming from Folder (In Progress)

**Workflow**:
```
Folder → Check state → Resume from last completed step →
Continue through remaining steps → Done
```

**Example**: If state shows "draft_complete", resume at Step 3 (Review)

### If Error Occurs Mid-Workflow

**Recovery strategy**:
1. Log error to state file (`status: "error_[step]"`)
2. Attempt automatic recovery (retry, fallback)
3. If recovery fails, pause and ask user
4. Preserve all work completed so far
5. Allow resume from error point

### If Existing Work Detected (Not Yet Submitted)

When Blackboard shows assignment is NOT submitted but repository has existing work:

**Detection**:
1. Check Blackboard: attempts remaining > 0, not yet submitted
2. Check repository folder for existing files:
   - `instructions.md` → Step 1 done
   - `my-*.md` draft → Step 2 done
   - `feedback-review.md` → Step 3 done
   - `my-*-v2.md` → Step 4 done
   - `*.docx` formatted file → Step 5 done
   - `UPLOAD-CHECKLIST.md` → Step 6 done (ready to submit)

**Scenario A: Fully Complete (Ready to Submit)**

All 6 steps complete, UPLOAD-CHECKLIST.md exists.

**User Prompt** (AskUserQuestion):

| Option | Description |
|--------|-------------|
| **Submit now** | Proceed to Blackboard submission |
| **Archive & Redo** | Archive current work, start fresh from Step 2 |
| **View existing** | Display completed work and checklist |

**If "Submit now"**:
- Navigate to Blackboard submission page
- Guide user through upload process
- Update state to `submitted` after confirmation

**If "Archive & Redo"**:
1. Archive all `my-*` files: add `-archived-[date]` suffix
   - Example: `my-reflection.md` → `my-reflection-archived-2025-11-24.md`
2. Archive formatted files: `*.docx` → `*-archived-[date].docx`
3. Keep `instructions.md` (reuse)
4. Delete `feedback-review.md`, `UPLOAD-CHECKLIST.md`, `SUBMISSION-READY.md`
5. Start fresh from Step 2 (Draft)
6. Update state: `redo_in_progress`

**If "View existing"**:
- Display UPLOAD-CHECKLIST.md summary
- Show word count, expected grade, deliverables
- End workflow (user can re-run command to take action)

**Scenario B: Partially Complete**

Some steps done but not all 6 complete.

**User Prompt** (AskUserQuestion):

| Option | Description |
|--------|-------------|
| **Resume** | Continue from last completed step |
| **Archive & Redo** | Archive current work, start fresh from Step 2 |
| **View progress** | Show what's been completed |

**If "Resume"**:
- Detect last completed step from files present
- Continue workflow from next step
- Example: If `feedback-review.md` exists → resume at Step 4 (Revise)

**If "Archive & Redo"**:
- Same archival process as Scenario A
- Start fresh from Step 2 (Draft)

**If "View progress"**:
- List completed steps and files
- Show what's next in workflow
- End workflow (user can re-run to take action)

### If Assignment Already Completed (Redo Option)

When Blackboard indicates the assignment has been submitted and graded:

**Detection** (from browser snapshot):
- "0 attempts left" or "X submitted"
- Grade already posted in activity stream
- Existing `my-*` files in repository folder

**User Prompt**:
Use AskUserQuestion with these options:

| Option | Description |
|--------|-------------|
| **Redo locally** | Create new version for practice/improvement |
| **View existing** | Show previously submitted work and grade |
| **Different assignment** | Exit and choose another assignment |

**If user selects "Redo locally"**:

1. **Skip Step 1** - Use existing `instructions.md` from repository folder
2. **Archive previous work**:
   - Rename: `my-[assignment].md` → `my-[assignment]-submitted.md`
   - Rename: `my-[assignment].docx` → `my-[assignment]-submitted.docx`
3. **Start fresh draft**:
   - Create: `my-[assignment]-redo.md`
   - Continue with full Draft → Review → Revise → Format workflow
4. **Update state**:
   - Status: `redo_in_progress`
   - Note: "Redo of previously submitted assignment"
5. **In UPLOAD-CHECKLIST.md**:
   - Mark as "REDO VERSION - Original already submitted"
   - Note: Cannot submit to Blackboard (0 attempts remaining)

**If user selects "View existing"**:
1. Display contents of existing `my-[assignment].md` or `.docx`
2. Show grade and feedback if available in repository
3. End workflow (no further action needed)

**If user selects "Different assignment"**:
1. Close browser tab
2. Exit workflow gracefully
3. User can run `/complete-assignment` with a different URL

## Mode Comparison

### Supervised Mode (Recommended)

**Checkpoints**:
- ✓ After draft complete (before review)
- ✓ After review complete (before revise)
- ✓ Before submission upload

**User involvement**: ~3-5 approval decisions

**Time savings**: ~70% vs. manual

**Risk level**: Low (user validates quality at key points)

**Best for**: Most assignments, especially first-time use

### Auto Mode (Advanced)

**Checkpoints**:
- ✓ Before submission upload (only)

**User involvement**: ~1 approval decision

**Time savings**: ~90% vs. manual

**Risk level**: Medium (trust JARVIS judgment)

**Best for**:
- Routine assignments (weekly discussions)
- After JARVIS is well-calibrated (10+ completed assignments)
- Low-stakes work (<10% of course grade)

**Not recommended for**:
- Major papers (>20% of grade)
- First assignment with new professor
- Complex research projects
- Final exams or capstone work

## Integration with Memory System

JARVIS automatically references:

**writing-style-profile.md**:
- Match your academic voice and tone
- Use your preferred citation style
- Apply your paragraph structures

**professor-preferences.md**:
- Tailor to this course's professor
- Emphasize what they value
- Avoid their pet peeves

**successful-patterns.md**:
- Apply approaches that scored 95%+
- Replicate proven structures
- Use evidence strategies that work

**common-feedback.md**:
- Proactively avoid recurring issues
- Maintain consistently praised strengths
- Address past improvement areas

## Quality Assurance

Before marking as ready_for_submission, verify:

- ✅ All rubric criteria addressed
- ✅ Instructions.md requirements met
- ✅ Word count in range (±10%)
- ✅ Citations properly formatted (APA 7)
- ✅ Professional formatting applied
- ✅ No placeholder text or TODOs
- ✅ Files not corrupted, reasonable size
- ✅ Proper naming convention
- ✅ All deliverables present

**If any check fails**: Fix automatically or escalate to user

## Error Handling

### Common Issues & Solutions

**Browser automation fails** (Step 1):
- Fallback: Ask user to download materials manually
- Process: Organize downloaded files into instructions.md

**Draft too short/long**:
- Auto-adjust: academic-paper-writer regenerates to meet word count

**Review finds major issues**:
- Loop: Additional revision round automatically
- Escalate: If 3+ revision cycles, ask user for guidance

**Formatting fails**:
- Fallback: Provide Markdown file + manual format instructions
- Retry: Use alternative Skills invocation pattern

**State file corrupted**:
- Recover: Reconstruct from folder contents
- Backup: Git commit before proceeding

## Best Practices

### For Best Results

1. **Use supervised mode initially**: Build confidence before auto mode
2. **Keep memory files updated**: Better memory = better results
3. **Provide feedback**: If output isn't right, tell JARVIS for next time
4. **Start early**: Don't wait until deadline (JARVIS needs time)
5. **Review checkpoints carefully**: JARVIS is smart but not perfect

### Red Flags (Abort & Manual)

Stop autonomous workflow if:
- Assignment instructions are ambiguous or conflicting
- This is a completely new assignment type never seen before
- Professor gave unusual or specific instructions not in pattern
- Technical difficulties preventing progress (after 3 retries)
- You feel uncertain about quality

**When in doubt, involve human judgment.**

## Examples

### Example 1: Fresh Assignment from URL

```bash
/complete-assignment https://blackboard.ucumberlands.edu/webapps/assignment/... --mode=supervised
```

**What happens**:
1. JARVIS fetches assignment from Blackboard
2. Creates folder and instructions.md
3. Drafts paper (asks approval)
4. Reviews and revises
5. Formats to DOCX
6. Prepares upload checklist
7. Asks for submission approval

**User approvals needed**: 3 (after draft, after revision, before upload)

**Total time**: ~6 hours (mostly autonomous)

### Example 2: Resume In-Progress Work

```bash
/complete-assignment semesters/2025-fall/DSRT-734.../week-6/anova-paper
```

**What happens**:
1. JARVIS checks state file
2. Sees status is "draft_complete"
3. Resumes at Step 3 (Review)
4. Continues through format and prepare

**User approvals needed**: 2 (after revision, before upload)

**Total time**: ~2 hours (resume from midpoint)

### Example 3: Routine Discussion (Auto Mode)

```bash
/complete-assignment https://blackboard.ucumberlands.edu/... --mode=auto
```

**What happens**:
1. JARVIS completes entire workflow autonomously
2. Only asks approval before Blackboard upload
3. Leverages patterns from 10+ prior discussions

**User approvals needed**: 1 (before upload)

**Total time**: ~30 minutes (highly autonomous)

### Example 4: Redo a Completed Assignment

```bash
/complete-assignment https://blackboard.ucumberlands.edu/.../journal-review
```

**What happens** (when assignment already submitted):
1. JARVIS navigates to Blackboard, sees "0 attempts left, 1 submitted"
2. Detects grade already posted and existing work in repository
3. Prompts user: "Redo locally", "View existing", or "Different assignment"
4. If user selects "Redo locally":
   - Archives: `my-journal-review.md` → `my-journal-review-submitted.md`
   - Creates fresh: `my-journal-review-redo.md`
   - Runs full Draft → Review → Revise → Format workflow
   - Generates checklist noting this is a redo version

**User approvals needed**: 4 (redo decision + standard checkpoints)

**Total time**: ~5 hours (full redo workflow)

**Use case**: Practice, improvement, portfolio building, or preparing for resubmission

## Success Metrics

Track and report:

**Completion rate**: % workflows completed without errors
**Time efficiency**: Hours saved vs. manual approach
**Quality**: Predicted vs. actual grades
**Autonomy level**: % of steps completed without user input

**Monthly report**:
```
JARVIS Performance (November 2025):
- 8 assignments completed via /complete-assignment
- 94% completion rate (1 required manual intervention)
- 48 hours saved (vs. estimated manual time)
- 96% average predicted grade (actual: 97%)
- 82% autonomy rate (supervised mode)
```

## Notes

- First time using this command? **Start with supervised mode**
- JARVIS well-calibrated (10+ assignments)? **Consider auto mode for routine work**
- Complex or high-stakes assignment? **Use supervised mode with careful review**
- Technical issues? **Fall back to individual step commands (/draft, /review, etc.)**

## See Also

- Individual step commands: `/draft-submission`, `/review-submission`, etc.
- JARVIS orchestrator agent documentation
- State management system: `/state/STATE_README.md`
- Memory system: `/memory/MEMORY_README.md`
