# JARVIS Architecture - Autonomous PhD Assistant

**Version**: 4.0
**Status**: Active (Phase 1 Complete)
**Vision**: Fully autonomous PhD assistant that handles assignments end-to-end with minimal intervention

> For core repository instructions and agent descriptions, see [CLAUDE.md](../CLAUDE.md)

---

## What is JARVIS?

JARVIS (Just A Rather Very Intelligent System - yes, inspired by Iron Man!) is an autonomous orchestration layer built on top of the existing 4 specialized agents. It enables end-to-end assignment completion with minimal user intervention while maintaining quality through intelligent checkpoints.

**Evolution**:
- **Version 3.0**: Manual 6-step workflow with individual commands
- **Version 4.0**: Autonomous multi-agent orchestration with learning capabilities

## Three-Pillar Architecture

JARVIS is built on three core systems that work together to enable autonomy:

### 1. Orchestration System (`jarvis-orchestrator` agent)

**Purpose**: Master coordinator that chains workflows and makes intelligent decisions

**Location**: `.claude/agents/jarvis-orchestrator.md`

**Capabilities**:
- Coordinates all 4 specialist agents automatically
- Chains the complete 6-step workflow without manual triggering
- Tracks assignment progress through state system
- Makes intelligent decisions about next steps
- Provides approval checkpoints at critical stages
- Handles errors gracefully with fallback strategies

**When it acts**:
- Invoked by `/complete-assignment` command
- Can operate in supervised mode (approval checkpoints) or auto mode (minimal intervention)
- Makes real-time decisions about workflow progression

### 2. State Management System (`/state/` directory)

**Purpose**: Track assignment progress, completion history, and monitoring state

**Location**: `/state/` directory with JSON files

**Files**:
- **active-assignments.json** - All in-progress assignments with current status
- **completed-assignments.json** - Archive of finished work with grades and feedback
- **monitoring-state.json** - Blackboard monitoring state (for future automation)
- **STATE_README.md** - Complete schema documentation

**What it tracks**:
```json
{
  "id": "dsrt-734-week-5-regression-paper",
  "status": "draft_complete",
  "workflow_history": [...],
  "due_date": "2025-11-30T23:59:00Z",
  "priority": "high",
  "files": {...},
  "metadata": {...}
}
```

**Status progression**:
`detected` → `organizing` → `draft_pending` → `draft_complete` → `review_complete` → `revision_complete` → `formatted` → `ready_for_submission` → `submitted` → `graded` → `archived`

**Updated by**: JARVIS orchestrator after every workflow step

### 3. Context Memory System (`/memory/` directory)

**Purpose**: Enable JARVIS to learn from your work and continuously improve

**Location**: `/memory/` directory with markdown files

**Files**:
- **writing-style-profile.md** - Your personal academic writing patterns
- **professor-preferences.md** - What each professor values
- **successful-patterns.md** - Approaches that led to high grades (95%+)
- **common-feedback.md** - Recurring feedback to maintain/avoid
- **MEMORY_README.md** - Complete usage documentation

**How JARVIS learns**:
1. **After each assignment**: Extract patterns from your submitted work
2. **After each grade**: Analyze professor feedback for preferences and issues
3. **Identify patterns**: After 3+ occurrences, document as high-confidence pattern
4. **Apply learning**: Use patterns in future assignments automatically

**Learning progression**:
- **Assignments 1-5**: Building baseline, generic assistance
- **Assignments 6-15**: Pattern recognition, increasing personalization
- **Assignment 16+**: Fully calibrated, writes in your voice naturally

## Primary Command: `/complete-assignment`

**Purpose**: Complete entire assignment workflow autonomously from start to finish

**Usage**:
```bash
/complete-assignment [blackboard-url OR folder-path] [--mode=supervised|auto]
```

**Examples**:
```bash
# Fresh assignment from Blackboard
/complete-assignment https://blackboard.ucumberlands.edu/webapps/assignment/...

# Resume in-progress work
/complete-assignment semesters/2025-fall/DSRT-734.../week-6/anova-paper

# Maximum autonomy (use after JARVIS is well-calibrated)
/complete-assignment https://blackboard.ucumberlands.edu/... --mode=auto
```

**What it does**:
1. **Fetch & Organize** (15-20 min) - Extract instructions from Blackboard
2. **Draft** (1-4 hours) - Invoke academic-paper-writer with personalization
3. **Review** (15-30 min) - Invoke phd-assignment-reviewer against rubric
4. **Revise** (30 min - 2 hours) - Address feedback systematically
5. **Format** (10-15 min) - Convert to DOCX/XLSX with professional formatting
6. **Prepare Upload** (5-10 min) - Final quality checks and checklist

**Approval checkpoints**:
- **Supervised mode** (default): After draft, after revision, before submission
- **Auto mode** (advanced): Only before submission

**State tracking**: Updates `/state/active-assignments.json` after each step

**Memory integration**: References all 4 memory files for personalization

## Operating Modes

### Supervised Mode (Recommended)

**Autonomy level**: ~70% (JARVIS handles most steps, asks approval at 3 checkpoints)

**Best for**:
- Most assignments, especially major papers
- First-time use of JARVIS
- High-stakes work (>20% of course grade)
- New professors or unfamiliar assignment types

**Checkpoints**:
1. After draft complete (before review)
2. After revision complete (before formatting)
3. Before submission upload

**Time savings**: ~70% vs. manual workflow

**Risk level**: Low (user validates quality at key decision points)

### Auto Mode (Advanced)

**Autonomy level**: ~90% (JARVIS handles everything, only asks before submission)

**Best for**:
- Routine assignments (weekly discussions, quizzes)
- After JARVIS well-calibrated (10+ completed assignments)
- Low-stakes work (<10% of course grade)
- Familiar assignment types with established patterns

**Checkpoints**:
1. Before submission upload (only)

**Time savings**: ~90% vs. manual workflow

**Risk level**: Medium (trust JARVIS judgment throughout)

**Not recommended for**:
- Major papers, exams, or capstone work
- First assignment with new professor
- Novel assignment types not seen before

## How the Systems Work Together

**Typical autonomous workflow**:

1. **User invokes**: `/complete-assignment https://blackboard.../assignment`

2. **Orchestrator initializes**:
   - Creates entry in `/state/active-assignments.json`
   - Loads context from `/memory/` files
   - Determines workflow based on assignment type

3. **Step 1 (Fetch & Organize)**:
   - Browser automation extracts materials
   - `assignment-instructions-organizer` agent creates `instructions.md`
   - State updated: `status: "draft_pending"`

4. **Step 2 (Draft)**:
   - Orchestrator invokes `academic-paper-writer` agent
   - Agent reads memory files:
     - `writing-style-profile.md` → match your voice
     - `professor-preferences.md` → tailor to this professor
     - `successful-patterns.md` → apply proven approaches
     - `common-feedback.md` → avoid known issues
   - Creates `my-[assignment]-draft.md`
   - State updated: `status: "draft_complete"`
   - **CHECKPOINT** (supervised mode): Ask user to review draft

5. **Step 3 (Review)**:
   - Orchestrator invokes `phd-assignment-reviewer` agent
   - Agent evaluates against rubric and common-feedback patterns
   - Creates `feedback-review.md`
   - State updated: `status: "review_complete"`

6. **Step 4 (Revise)**:
   - Orchestrator addresses feedback systematically
   - Creates `my-[assignment]-v2.md`
   - If major changes, may loop back to review
   - State updated: `status: "revision_complete"`
   - **CHECKPOINT** (supervised mode): Ask if revision satisfactory

7. **Step 5 (Format)**:
   - Orchestrator invokes `submission-formatter` agent
   - Converts to DOCX/XLSX with professional formatting
   - Creates `Jagarlamudi_Srinath_[Assignment].docx`
   - State updated: `status: "formatted"`

8. **Step 6 (Prepare)**:
   - Final quality checks against rubric
   - Generates `UPLOAD-CHECKLIST.md`
   - State updated: `status: "ready_for_submission"`
   - **CHECKPOINT** (always): Ask before Blackboard upload

9. **After submission**:
   - User uploads to Blackboard manually
   - Confirms upload to JARVIS
   - State updated: `status: "submitted"`

10. **After grading**:
    - User provides grade and feedback
    - Memory files updated with patterns
    - Assignment moved to `completed-assignments.json`
    - JARVIS learns for next time

## Benefits of JARVIS Architecture

**Time Savings**:
- **Supervised mode**: ~70% time reduction vs. manual
- **Auto mode**: ~90% time reduction vs. manual
- **Example**: 10-hour assignment → 3 hours (supervised) or 1 hour (auto)

**Quality Improvements**:
- **Consistent application** of successful patterns
- **Proactive avoidance** of recurring issues
- **Personalization** to your voice and professor preferences
- **Multi-pass review** catches issues before submission

**Learning & Adaptation**:
- **Continuous improvement**: Gets better with every assignment
- **Pattern recognition**: Identifies what works and replicates it
- **Professor calibration**: Learns each professor's priorities
- **Feedback integration**: Automatically applies past corrections

**Cognitive Load Reduction**:
- **Less decision fatigue**: JARVIS handles routine decisions
- **Focus on high-value work**: You review and approve, not draft from scratch
- **Deadline management**: State tracking prevents forgotten assignments
- **Reduced stress**: Confidence that quality work will be produced

## Workflow Comparison

### Version 3.0 (Manual 6-Step)

**User actions required**: ~8-10
- Manually trigger each command
- Review output after each step
- Decide what to do next
- Track progress mentally or manually

**Time commitment**: 100% of assignment time

**Mental overhead**: High (constant decision-making)

### Version 4.0 (JARVIS - Supervised)

**User actions required**: ~3-5
- Invoke `/complete-assignment` once
- Approve at 3 checkpoints
- Upload to Blackboard
- Confirm submission

**Time commitment**: ~30% of assignment time (reviews and approvals)

**Mental overhead**: Low (validate decisions, don't make them)

### Version 4.0 (JARVIS - Auto)

**User actions required**: ~2
- Invoke `/complete-assignment` once
- Approve before submission

**Time commitment**: ~10% of assignment time (final review only)

**Mental overhead**: Very low (trust and verify)

## Best Practices for JARVIS

### Starting Out (Assignments 1-5)

1. **Use supervised mode exclusively**: Build confidence and understanding
2. **Review checkpoints carefully**: JARVIS is learning, verify quality
3. **Provide feedback**: If output isn't right, note it for memory system
4. **Update memory files manually**: Fill in templates as patterns emerge
5. **Start assignments early**: Give JARVIS time (don't wait until deadline)

### Calibration Period (Assignments 6-15)

6. **Trust growing patterns**: If pattern has 3+ successes, trust it
7. **Consider auto mode for routine work**: Low-stakes discussions, quizzes
8. **Keep memory files updated**: Document patterns as they solidify
9. **Compare JARVIS output to your style**: Refine writing-style-profile
10. **Track performance**: Note grades, time saved, quality improvements

### Mature Usage (Assignment 16+)

11. **Leverage full autonomy**: Use auto mode for appropriate assignments
12. **Focus on high-value additions**: Add your unique insights to drafts
13. **Maintain memory system**: Quarterly reviews of patterns
14. **Handle exceptions**: Complex assignments may still need supervised mode
15. **Measure ROI**: Track time saved, grade consistency, stress reduction

## When NOT to Use JARVIS

**Red flags** (use manual workflow instead):

1. **Ambiguous instructions**: Assignment requirements unclear or conflicting
2. **Novel assignment type**: Never seen this format before
3. **Unusual professor requests**: Specific instructions outside normal patterns
4. **Technical difficulties**: Browser automation failing repeatedly
5. **Your gut feeling**: If uncertain about quality, involve more human judgment

**Principle**: JARVIS is intelligent but not infallible. When in doubt, use manual workflow with individual step commands.

## Future Enhancements (Roadmap)

**Phase 2** (Planned):
- **blackboard-monitor agent**: Continuous Blackboard monitoring for new assignments
- **deadline-manager agent**: Proactive deadline and priority management
- **learning-optimizer agent**: Automatic memory file updates from feedback

**Phase 3** (Vision):
- Autonomous submission to Blackboard (with approval)
- Proactive assignment start suggestions (deadline-based)
- Multi-assignment orchestration (handle 3+ assignments in parallel)
- Cross-course pattern recognition (apply DSRT insights to ITS papers)

**Phase 4** (Long-term):
- Research assistant integration (literature search, citation management)
- Study mode (quiz practice, exam prep, concept tutoring)
- Dissertation support (long-term research tracking, methodology guidance)
- Predictive grading (estimate score before submission)

## Technical Details

**Dependencies**:
- All 4 specialist agents (organizer, writer, reviewer, formatter)
- Playwright MCP for browser automation
- document-skills for file manipulation
- Git for version control

**File locations**:
- **Orchestrator**: `.claude/agents/jarvis-orchestrator.md`
- **Command**: `.claude/commands/complete-assignment.md`
- **State**: `/state/*.json`
- **Memory**: `/memory/*.md`

**Schema versions**:
- State files: v1.0
- Memory files: Template-based (no versioning yet)

**Backup strategy**:
- All files in git repository
- State and memory committed after major changes
- Regular commits preserve historical patterns

## Troubleshooting JARVIS

**Problem**: JARVIS output doesn't match my style

**Solution**: Update `/memory/writing-style-profile.md` with more specific patterns from your successful work

---

**Problem**: Assignment stuck in middle of workflow

**Solution**: Check `/state/active-assignments.json` for status, resume from last successful step using individual commands

---

**Problem**: Browser automation failing

**Solution**: JARVIS will fall back to manual download mode. Download materials yourself, run `/complete-assignment [folder-path]` to resume

---

**Problem**: Draft quality lower than expected

**Solution**: Reduce autonomy - use supervised mode with careful checkpoint reviews. Provide specific feedback to improve memory.

---

**Problem**: JARVIS applying outdated patterns

**Solution**: Review and update `/memory/` files quarterly. Mark old patterns as deprecated if professor expectations changed.

## Support & Documentation

**Comprehensive guides**:
- **State system**: `/state/STATE_README.md`
- **Memory system**: `/memory/MEMORY_README.md`
- **Workflow examples**: `WORKFLOW.md`
- **Orchestrator details**: `.claude/agents/jarvis-orchestrator.md`
- **Command usage**: `.claude/commands/complete-assignment.md`

**Quick reference**:
- **Start assignment**: `/complete-assignment [url]`
- **Check status**: Read `/state/active-assignments.json`
- **Review patterns**: Browse `/memory/successful-patterns.md`
- **Manual override**: Use individual step commands (`/draft-submission`, etc.)
