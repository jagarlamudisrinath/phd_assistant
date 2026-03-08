# State Management System

**Purpose**: Track assignment progress, completion history, and monitoring state to enable autonomous PhD assistant workflows.

**Last Updated**: 2025-11-24

## Files in This Directory

### active-assignments.json
Tracks all assignments currently in progress or awaiting action.

**When to update**: After every workflow step (organizing, drafting, reviewing, formatting, etc.)

**Who updates**: JARVIS orchestrator agent, specialized agents, workflow commands

**Retention**: Assignments remain here until submitted and graded, then moved to completed-assignments.json

### completed-assignments.json
Archive of finished assignments with grades, feedback, and performance metrics.

**When to update**: After assignment is graded by professor

**Who updates**: JARVIS orchestrator, learning-optimizer agent (when implemented)

**Retention**: Permanent archive (kept for entire PhD program)

**Purpose**: Pattern recognition, learning from feedback, performance tracking

### monitoring-state.json
Tracks Blackboard monitoring activity - when courses were last checked for new content.

**When to update**: After each Blackboard monitoring sweep

**Who updates**: blackboard-monitor agent (when implemented), JARVIS orchestrator

**Retention**: Rolling state (only latest check times matter)

## Schema Documentation

### Assignment Object Schema

**Location**: `active-assignments.json` and `completed-assignments.json`

```json
{
  "id": "string - unique identifier (course-code-week-assignment-name)",
  "course_code": "string - e.g., DSRT-734, ITS-831",
  "course_name": "string - full course name",
  "title": "string - assignment title",
  "folder_path": "string - absolute or relative path to assignment folder",
  "status": "string - current workflow status (see Status Values below)",
  "workflow_history": [
    {
      "step": "string - status value",
      "timestamp": "ISO 8601 datetime",
      "agent": "string - which agent/command performed this step",
      "notes": "string - optional notes about this step"
    }
  ],
  "due_date": "ISO 8601 datetime - when assignment is due",
  "submitted_date": "ISO 8601 datetime - when submitted to Blackboard (null if not yet submitted)",
  "priority": "string - high, medium, low",
  "estimated_hours_remaining": "number - hours of work estimated to complete",
  "auto_mode": "boolean - true if running in autonomous mode",
  "checkpoints_required": ["array of checkpoint names that require user approval"],
  "files": {
    "instructions": "string - filename of instructions.md",
    "draft": "string - filename of draft file (my-*.md)",
    "feedback": "string - filename of review feedback (feedback-*.md)",
    "revised": "string - filename of revised version (my-*-v2.md)",
    "final": "string - filename of submission file (*.docx, *.xlsx, etc.)"
  },
  "metadata": {
    "assignment_type": "string - paper, quiz, discussion, project, exam, etc.",
    "grade_weight": "number - percentage of final course grade (0-100)",
    "word_count_requirement": "number - required word count (if applicable)",
    "deliverable_format": "string - docx, xlsx, pdf, md, ipynb, etc.",
    "rubric_file": "string - path to rubric file if exists"
  },
  "grade": {
    "points_earned": "number - points received (null if not graded)",
    "points_possible": "number - total points possible",
    "percentage": "number - grade as percentage (0-100)",
    "letter_grade": "string - A, A-, B+, etc.",
    "feedback_file": "string - path to professor feedback file"
  },
  "performance_metrics": {
    "time_spent_hours": "number - actual time spent on assignment",
    "iterations": "number - how many draft/review/revise cycles",
    "auto_completion_rate": "number - percentage completed autonomously (0-100)"
  }
}
```

### Status Values

Valid status values for `assignment.status` (in typical workflow order):

1. **detected** - New assignment found on Blackboard (not yet organized)
2. **organizing** - Currently extracting and structuring instructions
3. **draft_pending** - Instructions ready, drafting not yet started
4. **draft_in_progress** - Currently writing draft
5. **draft_complete** - Draft written, awaiting review
6. **review_in_progress** - Currently being reviewed
7. **review_complete** - Feedback generated, awaiting revision decision
8. **revision_in_progress** - Currently making revisions
9. **revision_complete** - Revisions made, ready for formatting or additional review
10. **formatting_in_progress** - Creating submission files (DOCX, XLSX, etc.)
11. **formatted** - Final files created, awaiting upload preparation
12. **ready_for_submission** - All checks passed, ready to upload
13. **submitted** - Uploaded to Blackboard
14. **graded** - Feedback and grade received from professor
15. **archived** - Moved to completed-assignments.json

**Error states:**
- **error_organizing** - Failed during instruction organization
- **error_drafting** - Failed during draft creation
- **error_reviewing** - Failed during review
- **error_formatting** - Failed during formatting
- **on_hold** - User paused workflow

### Priority Values

**high** - Due within 3 days OR worth ≥20% of course grade OR critical assignment

**medium** - Due within 7 days OR worth 10-19% of course grade OR moderate importance

**low** - Due ≥7 days away OR worth <10% of course grade OR minor assignment

Priority is calculated automatically but can be manually overridden.

## Usage Patterns

### Pattern 1: Adding New Assignment

When JARVIS detects or user initiates a new assignment:

```javascript
// Read current state
let state = JSON.parse(fs.readFileSync('state/active-assignments.json'))

// Create new assignment object
let newAssignment = {
  id: "dsrt-734-week-6-anova-paper",
  course_code: "DSRT-734",
  title: "ANOVA Analysis Research Paper",
  folder_path: "semesters/2025-fall/DSRT-734-Infer-Stats-Decision-Making/assignments/week-6/anova-paper",
  status: "draft_pending",
  workflow_history: [
    {
      step: "organizing",
      timestamp: new Date().toISOString(),
      agent: "assignment-instructions-organizer",
      notes: "Instructions extracted from Blackboard"
    },
    {
      step: "draft_pending",
      timestamp: new Date().toISOString(),
      notes: "Ready for academic-paper-writer agent"
    }
  ],
  due_date: "2025-12-05T23:59:00Z",
  priority: "medium",
  estimated_hours_remaining: 6,
  auto_mode: true,
  checkpoints_required: ["draft_approval", "submit_approval"],
  files: {
    instructions: "instructions.md",
    draft: null,
    feedback: null,
    final: null
  }
}

// Add to state
state.assignments.push(newAssignment)
state._last_updated = new Date().toISOString()

// Write back
fs.writeFileSync('state/active-assignments.json', JSON.stringify(state, null, 2))
```

### Pattern 2: Updating Assignment Status

After completing a workflow step:

```javascript
// Read state
let state = JSON.parse(fs.readFileSync('state/active-assignments.json'))

// Find assignment
let assignment = state.assignments.find(a => a.id === "dsrt-734-week-6-anova-paper")

// Update status
assignment.status = "draft_complete"
assignment.files.draft = "my-anova-paper-draft.md"
assignment.workflow_history.push({
  step: "draft_complete",
  timestamp: new Date().toISOString(),
  agent: "academic-paper-writer",
  notes: "Draft completed: 2,847 words, 15 citations"
})
assignment.estimated_hours_remaining = 4  // Update estimate

// Update timestamp
state._last_updated = new Date().toISOString()

// Write back
fs.writeFileSync('state/active-assignments.json', JSON.stringify(state, null, 2))
```

### Pattern 3: Moving to Completed

When assignment is graded:

```javascript
// Read both states
let activeState = JSON.parse(fs.readFileSync('state/active-assignments.json'))
let completedState = JSON.parse(fs.readFileSync('state/completed-assignments.json'))

// Find and remove from active
let assignmentIndex = activeState.assignments.findIndex(a => a.id === "dsrt-734-week-6-anova-paper")
let assignment = activeState.assignments[assignmentIndex]
activeState.assignments.splice(assignmentIndex, 1)

// Update final status and grade
assignment.status = "graded"
assignment.grade = {
  points_earned: 95,
  points_possible: 100,
  percentage: 95,
  letter_grade: "A",
  feedback_file: "semesters/2025-fall/DSRT-734.../grades/week-6-anova-feedback.pdf"
}
assignment.performance_metrics = {
  time_spent_hours: 6.5,
  iterations: 2,
  auto_completion_rate: 85
}

// Add to completed
completedState.assignments.push(assignment)
completedState._last_updated = new Date().toISOString()

// Write both back
fs.writeFileSync('state/active-assignments.json', JSON.stringify(activeState, null, 2))
fs.writeFileSync('state/completed-assignments.json', JSON.stringify(completedState, null, 2))
```

### Pattern 4: Querying State

JARVIS orchestrator frequently queries state to make decisions:

```javascript
// Get all high priority assignments due within 3 days
let state = JSON.parse(fs.readFileSync('state/active-assignments.json'))
let urgent = state.assignments.filter(a => {
  let dueDate = new Date(a.due_date)
  let now = new Date()
  let hoursUntilDue = (dueDate - now) / (1000 * 60 * 60)
  return hoursUntilDue <= 72 && a.priority === "high"
})

// Get assignments awaiting specific status
let needingReview = state.assignments.filter(a => a.status === "draft_complete")

// Calculate total workload
let totalHoursRemaining = state.assignments.reduce((sum, a) => sum + a.estimated_hours_remaining, 0)

// Find next action
let nextAssignment = state.assignments
  .filter(a => !["submitted", "graded"].includes(a.status))
  .sort((a, b) => {
    // Sort by: priority, then due date, then status
    if (a.priority !== b.priority) {
      let priorityOrder = { high: 3, medium: 2, low: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority]
    }
    return new Date(a.due_date) - new Date(b.due_date)
  })[0]
```

## Best Practices

### 1. Always Update After Every Step
Don't batch updates - update state immediately after each workflow step completes.

### 2. Include Descriptive Notes
Add notes to workflow_history entries to explain what happened, especially for unusual situations.

### 3. Keep Estimates Current
Update `estimated_hours_remaining` after each step based on actual progress.

### 4. Use Consistent IDs
ID format: `{course-code}-{week/module}-{assignment-name}` (all lowercase, hyphens)
Example: `dsrt-734-week-6-anova-paper`

### 5. Validate Before Writing
Check that status transitions make sense (e.g., can't go from `draft_pending` to `formatted`)

### 6. Backup on Major Changes
Before moving assignments to completed state, ensure data is correct.

### 7. Prune Old Entries
Periodically clean up very old completed assignments (after semester ends) to archive file.

## Integration with Agents

### JARVIS Orchestrator
- **Reads**: active-assignments.json (primary interface)
- **Writes**: Updates status after delegating to specialist agents
- **Frequency**: Every workflow step

### Specialist Agents
- **Reads**: May read to understand context
- **Writes**: Generally DO NOT write directly (orchestrator handles this)
- **Exception**: May update if running standalone without orchestrator

### Commands
- **Reads**: Check state to understand current status
- **Writes**: Update state at command completion
- **Pattern**: Read at start, write at end

## Maintenance

### Weekly
- Review `active-assignments.json` for stale entries
- Verify all active assignments have recent updates
- Check for orphaned files (assignments in state but folder missing)

### Monthly
- Move graded assignments to completed state
- Archive very old completed assignments to separate file
- Backup all state files

### Semester End
- Archive all completed assignments for the semester
- Create summary statistics (total assignments, average grade, etc.)
- Reset monitoring state for new semester courses

## Troubleshooting

### Problem: State file corrupted

**Solution**:
1. Check git history: `git log state/active-assignments.json`
2. Restore from last good commit
3. Manually reconstruct if needed from assignment folders

### Problem: Duplicate assignments in state

**Solution**:
1. Identify which is correct (check timestamps)
2. Merge workflow_history if needed
3. Remove duplicate
4. Update ID generation logic to prevent

### Problem: Status out of sync with actual files

**Solution**:
1. Scan assignment folder for actual files present
2. Update status and files object to match reality
3. Add corrective note to workflow_history

## Future Enhancements

**Planned features:**
- Machine learning on completed assignments to predict time requirements
- Automatic priority recalculation based on approaching deadlines
- Integration with calendar APIs for deadline tracking
- Web dashboard for visualizing assignment pipeline
- Export to CSV/Excel for grade tracking and analysis
