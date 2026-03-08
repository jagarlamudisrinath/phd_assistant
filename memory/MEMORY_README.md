# Context Memory System

**Purpose**: Enable JARVIS to learn from your completed work and progressively improve assistance quality by personalizing to your writing style, professor preferences, and successful patterns.

**Last Updated**: 2025-11-24

---

## Overview

The Context Memory System is the "learning brain" of your JARVIS PhD assistant. As you complete assignments and receive feedback, JARVIS updates these memory files to:

1. **Personalize writing** - Match your academic voice and style
2. **Adapt to professors** - Tailor work to each professor's preferences
3. **Replicate success** - Apply patterns that led to high grades
4. **Avoid pitfalls** - Proactively address recurring feedback

Think of this as JARVIS's way of "getting to know you" and continuously improving.

---

## Files in This Directory

### writing-style-profile.md
**What it tracks**: Your personal academic writing patterns

**Key elements**:
- Voice and tone preferences (first person vs. third person)
- Sentence structure and complexity
- Vocabulary and transitions
- Citation integration style
- Paragraph organization patterns

**Updated**: After each graded assignment, extracting your writing patterns

**Used by**: academic-paper-writer agent to draft in your voice

---

### professor-preferences.md
**What it tracks**: What each professor values in assignments

**Key elements**:
- Grading tendencies and priorities
- Pet peeves and common feedback
- Assignment-specific preferences
- Success patterns for each professor

**Updated**: After receiving feedback, noting what was praised/criticized

**Used by**: All agents to tailor work to specific professor expectations

---

### successful-patterns.md
**What it tracks**: Approaches that led to high grades (95%+)

**Key elements**:
- Paper structures that scored well
- Evidence integration strategies
- Analysis techniques
- Time management patterns that work

**Updated**: After each high-scoring assignment, documenting what worked

**Used by**: All agents to replicate successful approaches

---

### common-feedback.md
**What it tracks**: Recurring feedback across assignments

**Key elements**:
- Strengths consistently praised (maintain these)
- Issues frequently flagged (fix these)
- Progress tracking on improvements
- Professor-specific recurring comments

**Updated**: After every graded assignment, tracking patterns

**Used by**: All agents to avoid known issues and maintain strengths

---

## How JARVIS Learns

### Phase 1: Initial Calibration (Assignments 1-5)

**Status**: Building baseline understanding

**What happens**:
- JARVIS uses general PhD academic standards
- Follows rubric and syllabus strictly
- Observes your writing in submitted work
- Collects initial professor feedback

**Memory status**: Templates populated with first observations

**Assistance level**: Generic but competent

---

### Phase 2: Pattern Recognition (Assignments 6-15)

**Status**: Identifying recurring patterns

**What happens**:
- JARVIS spots patterns in feedback (3+ occurrences)
- Documents successful approaches from high grades
- Calibrates to your writing voice
- Learns each professor's priorities

**Memory status**: Solid patterns documented, confidence growing

**Assistance level**: Increasingly personalized

---

### Phase 3: Mature Personalization (Assignment 16+)

**Status**: Fully calibrated to your PhD journey

**What happens**:
- JARVIS automatically applies successful patterns
- Proactively avoids known issues
- Writes in your academic voice naturally
- Anticipates professor expectations

**Memory status**: Comprehensive, high-confidence patterns

**Assistance level**: Like having an experienced co-author who knows you well

---

## Update Workflow

### After Each Graded Assignment

**Step 1: Collect Feedback**
- Download professor comments from Blackboard
- Save to `grades/` folder in course directory
- Note: inline comments, rubric scores, summary feedback

**Step 2: Analyze Feedback**
- What was praised → Update `successful-patterns.md`
- What was criticized → Update `common-feedback.md`
- Professor-specific notes → Update `professor-preferences.md`
- Writing patterns observed → Update `writing-style-profile.md`

**Step 3: Update Memory Files**
Use the learning-optimizer agent (when implemented) or manually:
- Add new patterns if emerging (2-3 occurrences)
- Update frequency counts for recurring feedback
- Mark improvements as addressed if confirmed
- Document professor preferences from feedback

**Step 4: Adjust JARVIS Calibration**
- High-confidence patterns (3+ uses) → Apply liberally
- Recurring issues (3+ mentions) → Avoid proactively
- Professor preferences → Tailor accordingly

---

## Usage by Agents

### academic-paper-writer Agent

**Before drafting:**
1. Read `writing-style-profile.md` to match your voice
2. Check `professor-preferences.md` for this course's professor
3. Review `successful-patterns.md` for similar assignment types
4. Scan `common-feedback.md` to avoid known issues

**During drafting:**
- Apply your sentence structure patterns
- Use your preferred citation style
- Incorporate your vocabulary and transitions
- Emphasize elements this professor values

**Result**: Draft that sounds like you and meets professor expectations

---

### phd-assignment-reviewer Agent

**During review:**
1. Check `common-feedback.md` for recurring issues
2. Verify `successful-patterns.md` elements are present
3. Confirm `professor-preferences.md` requirements met
4. Compare to your `writing-style-profile.md` for consistency

**Feedback focuses on:**
- "This area has been flagged before - verify it's addressed"
- "Consider adding X, which scored well in similar assignments"
- "Professor Y values Z - ensure this is emphasized"

**Result**: Review that prevents recurring mistakes and ensures success factors

---

### submission-formatter Agent

**During formatting:**
1. Check `professor-preferences.md` for specific formatting notes
2. Apply any professor-specific requirements
3. Match formatting that scored well in `successful-patterns.md`

**Result**: Professionally formatted work matching proven standards

---

### jarvis-orchestrator Agent

**When coordinating:**
1. Prioritize patterns with high confidence
2. Alert you to potential issues based on `common-feedback.md`
3. Recommend approaches from `successful-patterns.md`
4. Calibrate workflow based on professor tendencies

**Result**: Intelligent workflow decisions based on accumulated knowledge

---

## Confidence Levels

### High Confidence (Apply Liberally)
- **Definition**: Pattern observed 3+ times with consistent positive results
- **Examples**:
  - "Including real-world examples always scores 95%+"
  - "Professor X consistently praises statistical depth"
  - "APA formatting errors appear in every assignment - avoid proactively"

**JARVIS behavior**: Automatically applies without asking

---

### Medium Confidence (Apply with Caution)
- **Definition**: Pattern observed 1-2 times, seems promising but not confirmed
- **Examples**:
  - "Thematic organization worked well in one paper"
  - "Professor Y mentioned appreciating X in one assignment"

**JARVIS behavior**: Suggests but notes it's emerging pattern

---

### Low Confidence (Note But Don't Rely On)
- **Definition**: Single observation, may be assignment-specific
- **Examples**:
  - "Used a specific framework in one case study"
  - "Professor made one comment about Y"

**JARVIS behavior**: Documents but doesn't prioritize

---

## Pattern Conflicts

### When patterns contradict:

**Priority order**:
1. **Most recent** (professors may update expectations)
2. **Course-specific** (overrides general patterns)
3. **High confidence** (3+ observations beats 1-2)
4. **Professor preferences** (what they value trumps general patterns)

**Example conflict**:
- `successful-patterns.md`: "Use thematic organization"
- `professor-preferences.md` for this course: "Prefer chronological"
- **Resolution**: Use chronological (professor preference wins)

---

## Maintenance Schedule

### Weekly
- No action required (files updated as assignments complete)

### Monthly
- Review all memory files for consistency
- Look for emerging patterns (2+ occurrences → document)
- Check if improvement areas are showing progress

### Semester End
- Comprehensive review of all patterns
- Archive very specific patterns that won't generalize
- Summarize key learnings for next semester
- Backup memory files

---

## Privacy & Ethics

### What's Tracked
- **Your writing patterns**: Style, structure, preferences
- **Professor feedback**: Public comments on assignments
- **Assignment performance**: Grades and what worked

### What's NOT Tracked
- **Personal information**: Beyond what's needed for academic work
- **Sensitive content**: Private conversations, personal issues
- **Other students**: No tracking of peers

### Academic Integrity
- **Memory helps YOU improve**: Not replacing your learning
- **Patterns are YOUR work**: Based on your assignments
- **JARVIS assists, you decide**: Final control always with you

---

## Troubleshooting

### Problem: Memory files feel generic/not personalized

**Likely cause**: Not enough completed assignments yet

**Solution**:
- Complete 5-10 assignments to build baseline
- Manually review and update memory files with specific observations
- Be patient - personalization emerges over time

---

### Problem: JARVIS not applying patterns consistently

**Likely cause**: Patterns documented but confidence level unclear

**Solution**:
- Mark high-confidence patterns explicitly (3+ uses)
- Update frequency counts when patterns recur
- Verify agents are referencing memory files (check prompts)

---

### Problem: Outdated patterns being applied

**Likely cause**: Memory not updated after feedback

**Solution**:
- Make memory updates part of post-grade routine
- Mark old patterns as deprecated if professor expectations change
- Date all pattern entries to track currency

---

### Problem: Conflicting patterns across courses

**This is normal**: Different professors value different things

**Solution**:
- Keep course-specific sections in `professor-preferences.md`
- JARVIS selects course-appropriate patterns automatically
- Document conflicts and resolution strategy in notes

---

## Example Learning Journey

### Week 1: First Assignment Submitted
- Memory files: Mostly templates
- JARVIS assistance: Generic PhD standards
- Grade received: 88% (B+)
- Feedback: "Good analysis but needs more depth"

**Memory update**: Add to `common-feedback.md` - "Deepen analysis" noted

---

### Week 4: Third Assignment Submitted
- Memory files: Some patterns emerging
- JARVIS assistance: Starting to personalize
- Grade received: 93% (A)
- Feedback: "Much better depth. Excellent use of evidence."

**Memory update**:
- `successful-patterns.md`: Add evidence integration approach
- `common-feedback.md`: "Depth" issue addressed
- `writing-style-profile.md`: Note effective citation density

---

### Week 8: Sixth Assignment Submitted
- Memory files: Solid patterns documented
- JARVIS assistance: Highly personalized
- Grade received: 97% (A+)
- Feedback: "Outstanding work. Clear improvement throughout semester."

**Memory update**:
- `successful-patterns.md`: Document entire approach as high-confidence
- `professor-preferences.md`: Clear understanding of what Prof values
- `writing-style-profile.md`: Your voice well-calibrated

---

### Week 12: Subsequent Assignments
- Memory files: Comprehensive
- JARVIS assistance: Like an experienced co-author
- Grades: Consistently 95%+
- Feedback: Minimal corrections, praise for consistent quality

**Result**: JARVIS has learned your PhD journey and optimizes every assignment

---

## Success Metrics

Track memory system effectiveness:

**Personalization level**: % of feedback that confirms JARVIS matched your style
- **Target**: 90%+ by assignment 15

**Pattern replication**: % of successful patterns successfully applied to new work
- **Target**: 80%+ by assignment 10

**Issue prevention**: % of recurring issues proactively avoided
- **Target**: 100% by assignment 8

**Grade trajectory**: Average grade improvement over first semester
- **Target**: +5-10 percentage points from first to last assignment

---

## Future Enhancements

**Planned features**:
1. **Auto-extraction**: learning-optimizer agent automatically updates memory
2. **Pattern visualization**: Dashboard showing learning progress
3. **Predictive grading**: JARVIS predicts score before submission
4. **Cross-student learning**: Opt-in anonymized pattern sharing (ethical considerations)
5. **Integration with citation managers**: Zotero, Mendeley for consistent sources

---

## Getting Started

### Your First 5 Assignments

**Do this manually** (learning-optimizer not yet implemented):

1. **After each graded assignment**:
   - Read professor feedback thoroughly
   - Note 2-3 key takeaways
   - Update ONE memory file with observations

2. **Don't overthink it**:
   - Simple notes are fine ("Prof likes real-world examples")
   - Patterns will emerge naturally
   - Start simple, refine over time

3. **Watch for patterns**:
   - When something appears 2-3 times, document it
   - High grades → What did you do?
   - Low grades → What was missing?

### By Assignment 10

**Memory files should have**:
- 3-5 high-confidence patterns in `successful-patterns.md`
- Clear understanding of each professor in `professor-preferences.md`
- Your writing voice captured in `writing-style-profile.md`
- 5-10 items in `common-feedback.md` (both strengths and improvements)

### Then Watch JARVIS Excel

**With solid memory foundation**:
- Drafts sound like YOU wrote them
- Feedback becomes minimal
- Grades consistently high
- Time to completion decreases
- Confidence in work increases

---

**Remember**: This memory system makes JARVIS progressively smarter about YOUR specific PhD journey. Every assignment completed is a learning opportunity that benefits all future work.

Your JARVIS gets better every single week.
