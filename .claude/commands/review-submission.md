---
description: Review and provide feedback on PhD-level academic assignments. Use this after completing your draft to get detailed feedback before submission.
allowed-tools: Read, Bash(find:*), Write
argument-hint: [assignment-folder-path]
---

# Review Assignment Submission

Assignment path: $ARGUMENTS

I'll help you review this assignment by:

1. **Locating your draft** - Finding the latest `my-*.md` or `my-*.docx` file in the assignment folder
2. **Reading the instructions.md** - Understanding all requirements, rubric criteria, and grading standards
3. **Using the phd-assignment-reviewer agent** to provide comprehensive feedback on:
   - **Rubric alignment** - How well your work addresses each grading criterion
   - **Strengths** - What you've done well that should be preserved
   - **Gaps and weaknesses** - Missing requirements, unclear arguments, or areas needing development
   - **Specific recommendations** - Concrete, actionable suggestions for improvement
   - **Academic quality** - PhD-level critical thinking, evidence, citations, and writing quality
4. **Saving feedback** to `feedback-review.md` in your assignment folder for reference during revision

**What happens next:**
- Review the feedback carefully
- Use `/revise-submission` to make improvements based on the recommendations
- Iterate as needed until you're satisfied with the quality
- Use `/format-submission` to create final submission files

Let me start by locating your draft and reviewing it against the assignment requirements...
