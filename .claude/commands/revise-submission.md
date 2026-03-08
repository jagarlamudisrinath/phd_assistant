---
description: Guide iterative revision of assignments based on reviewer feedback. Use this after receiving feedback to systematically improve your draft.
allowed-tools: Read, Write, Edit, Bash(find:*), Bash(ls:*)
argument-hint: [assignment-folder-path]
---

# Revise Assignment Based on Feedback

Assignment path: $ARGUMENTS

I'll help you systematically revise your assignment by:

1. **Reading your current draft** - Locating the latest version (`my-*.md` or `my-*-v[N].md`)
2. **Reading the feedback** - Loading `feedback-review.md` or other feedback files
3. **Presenting a revision plan** - Summarizing the key improvements needed:
   - Critical issues that must be addressed
   - Important enhancements to strengthen the work
   - Minor refinements for polish
4. **Asking what to focus on** - You choose which feedback areas to tackle in this revision
5. **Making targeted revisions** - Implementing improvements while preserving your voice and strong sections
6. **Creating a new version** - Saving as `my-[assignment]-v2.md` (or v3, v4, etc.)
7. **Documenting changes** - Adding revision notes at the top explaining what was updated

**Revision Philosophy:**
- **Guided, not automatic** - You maintain control over what changes and how
- **Incremental improvement** - Multiple focused revisions beat one massive rewrite
- **Preserve strengths** - Keep what's working well, improve what needs help
- **Your voice** - Maintain your personal insights and professional context

**Iteration Workflow:**
1. Draft → Review → Revise (v2)
2. Review v2 → Revise (v3)
3. Continue until satisfied
4. Format for submission

**Note**: After revision, you can:
- Run `/review-submission` again to check improvements
- Continue revising with another `/revise-submission` call
- Move to `/format-submission` when ready to submit

Let me start by reading your draft and feedback...
