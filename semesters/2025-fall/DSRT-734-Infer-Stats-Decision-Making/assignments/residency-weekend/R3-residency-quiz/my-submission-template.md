# R.3 Residency Quiz - Problem-Solving Documentation

**Student:** Srinath Jagarlamudi
**Course:** DSRT 734 - Inferential Statistics in Decision-making
**Assignment:** R.3 - Residency Quiz (t-Test)
**Date:** Saturday, November 8, 2025
**Due:** 10:59 PM (CST)

---

## Overview

This document demonstrates my problem-solving approach for the R.3 Residency Quiz covering two-sample independent t-tests.

**Methodology:** All analyses performed using Python (scipy.stats library) with manual verification calculations where applicable.

**Tools Used:**
- Python 3.x
- scipy.stats.ttest_ind() for t-test calculations
- numpy for descriptive statistics
- Jupyter Notebook for interactive analysis

---

# Question 1

## Problem Statement

**Research Question:** Is there a difference in means of program outcomes between students who have one concentration and students with no concentration?

### Data Provided

| One Concentration | No Concentration |
|-------------------|------------------|
| [Enter data]      | [Enter data]     |
| [Enter data]      | [Enter data]     |
| [...]             | [...]            |

---

## Step 1: Test Selection & Hypotheses

### Appropriate Statistical Test
**Test:** Two-sample independent t-test

**Justification:**
- Comparing means of two independent groups
- Continuous outcome variable (program outcome scores)
- Different subjects in each group (not paired/matched)
- Population standard deviation unknown
- Assumptions: Independence, normality (approximately satisfied with sample sizes), random sampling

### Hypotheses

**Null Hypothesis (H₀):**
There is no difference in mean program outcomes between students with one concentration and students with no concentration.
- H₀: μ₁ = μ₂

**Alternative Hypothesis (H₁):**
There is a difference in mean program outcomes between the two groups.
- H₁: μ₁ ≠ μ₂

**Significance Level:** α = 0.05 (two-tailed test)

---

## Step 2: Organize Data

**Group 1 (One Concentration):**
```
Data: [list your data values]
n = [sample size]
```

**Group 2 (No Concentration):**
```
Data: [list your data values]
n = [sample size]
```

---

## Step 3: Calculate Descriptive Statistics

### Group 1 (One Concentration)
- **Sample size (n₁):** [value]
- **Mean (M₁):** [value]
- **Standard Deviation (SD₁):** [value]

**Calculation shown:**
```
Sum = [sum of values]
Mean = Sum / n = [calculation] = [result]
Variance = Σ(x - M)² / (n-1) = [calculation]
SD = √Variance = [result]
```

### Group 2 (No Concentration)
- **Sample size (n₂):** [value]
- **Mean (M₂):** [value]
- **Standard Deviation (SD₂):** [value]

**Calculation shown:**
```
Sum = [sum of values]
Mean = Sum / n = [calculation] = [result]
Variance = Σ(x - M)² / (n-1) = [calculation]
SD = √Variance = [result]
```

---

## Step 4: Perform t-Test

### Python Code Used
```python
from scipy import stats
import numpy as np

group1 = [your data]
group2 = [your data]

t_stat, p_value = stats.ttest_ind(group1, group2)
df = len(group1) + len(group2) - 2
```

### Manual Calculation (Verification)

**Standard Error:**
```
SE = √[(s₁²/n₁) + (s₂²/n₂)]
SE = √[([SD₁]²/[n₁]) + ([SD₂]²/[n₂])]
SE = [calculation]
```

**t-statistic:**
```
t = (M₁ - M₂) / SE
t = ([M₁] - [M₂]) / [SE]
t = [result]
```

**Degrees of Freedom:**
```
df = n₁ + n₂ - 2
df = [n₁] + [n₂] - 2
df = [result]
```

---

## Step 5: Results

### Test Statistics
- **t-statistic:** [value]
- **Degrees of freedom (df):** [value]
- **p-value (two-tailed):** [value]

### Decision
- **Comparison:** p-value [<  or ≥] α (0.05)
- **Decision:** [Reject H₀ / Fail to reject H₀]
- **Conclusion:** [Significant difference / No significant difference]

---

## Step 6: APA-Formatted Write-Up

[Insert your complete APA-formatted write-up here]

**Example format:**
> A two-sample independent t-test was conducted to determine whether there was a significant difference in program outcomes between students with one concentration and students with no concentration. Students with one concentration (n = [n₁]) had a mean program outcome of [M₁] (SD = [SD₁]), while students with no concentration (n = [n₂]) had a mean program outcome of [M₂] (SD = [SD₂]). The difference [was/was not] statistically significant, t([df]) = [t-value], p = [p-value]. [Additional interpretation if significant]

---

## Rough Work / Notes

[Use this space for calculations, scratch work, verification, or any additional notes]

- [ ] Data entered correctly
- [ ] Descriptive statistics calculated
- [ ] t-test performed
- [ ] Results verified
- [ ] Interpretation written

**Observations:**
- [Add any observations about the data or results]

---

---

# Question 2

## Problem Statement

**Research Question:** Is there a difference in means of program outcomes between students who have one concentration and students with no concentration?

### Data Provided

| One Concentration | No Concentration |
|-------------------|------------------|
| [Enter data]      | [Enter data]     |
| [...]             | [...]            |

---

## Step 1: Test Selection

**Test:** Two-sample independent t-test
*(Same justification and hypotheses as Question 1)*

---

## Step 2: Data Organization

**Group 1:** [list data]
**Group 2:** [list data]

---

## Step 3: Descriptive Statistics

**Group 1:**
- n₁ = [value]
- M₁ = [value]
- SD₁ = [value]

**Group 2:**
- n₂ = [value]
- M₂ = [value]
- SD₂ = [value]

---

## Step 4: t-Test Results

- t = [value]
- df = [value]
- p = [value]

---

## Step 5: APA Write-Up

[Insert your APA-formatted write-up]

---

## Rough Work

[Calculations and notes]

---

---

# Question 3

## Problem Statement

**Research Question:** Is there a difference in means of program outcomes between students who have one concentration and students with no concentration?

### Data Provided

*Note: Columns may be reversed (None listed first)*

| No Concentration | One Concentration |
|------------------|-------------------|
| [Enter data]     | [Enter data]      |
| [...]            | [...]             |

---

## Analysis

**Descriptive Statistics:**
- Group 1 (One): n = [value], M = [value], SD = [value]
- Group 2 (None): n = [value], M = [value], SD = [value]

**Test Results:**
- t([df]) = [value], p = [value]

**APA Write-Up:**

[Insert write-up]

---

## Rough Work

[Notes and calculations]

---

---

# Question 4

## Problem Statement

**Research Question:** Is there a difference in means of program outcomes between students who have one concentration and students with no concentration?

---

## Analysis

**Descriptive Statistics:**
- Group 1 (One): n = [value], M = [value], SD = [value]
- Group 2 (None): n = [value], M = [value], SD = [value]

**Test Results:**
- t([df]) = [value], p = [value]

**APA Write-Up:**

[Insert write-up]

---

## Rough Work

[Notes and calculations]

---

---

# Question 5

## Problem Statement

**Research Question:** Is there a difference in means of program outcomes between students who have one concentration and students with no concentration?

---

## Analysis

**Descriptive Statistics:**
- Group 1 (One): n = [value], M = [value], SD = [value]
- Group 2 (None): n = [value], M = [value], SD = [value]

**Test Results:**
- t([df]) = [value], p = [value]

**APA Write-Up:**

[Insert write-up]

---

## Rough Work

[Notes and calculations]

---

---

# Summary & Reflection

## Results Overview

| Question | Test Used | t-statistic | df | p-value | Significant? | Interpretation |
|----------|-----------|-------------|----|---------|--------------| ---------------|
| Q1       | Independent t-test | [value] | [value] | [value] | [Yes/No] | [Brief note] |
| Q2       | Independent t-test | [value] | [value] | [value] | [Yes/No] | [Brief note] |
| Q3       | Independent t-test | [value] | [value] | [value] | [Yes/No] | [Brief note] |
| Q4       | Independent t-test | [value] | [value] | [value] | [Yes/No] | [Brief note] |
| Q5       | Independent t-test | [value] | [value] | [value] | [Yes/No] | [Brief note] |

---

## Methodology Statement

All statistical analyses were conducted using Python 3.x with the scipy.stats library. The two-sample independent t-test (scipy.stats.ttest_ind) was selected as the appropriate test for all questions, as each involved comparing means between two independent groups with continuous outcome variables. Descriptive statistics were calculated using numpy. Significance was evaluated at the α = 0.05 level using two-tailed tests. Manual calculations were performed for verification purposes to ensure accuracy of computational results.

---

## Assumptions Verification

**For two-sample independent t-test:**
1. ✓ **Independence:** Observations within and between groups are independent
2. ✓ **Continuous data:** Outcome variable (program outcomes) is continuous
3. ✓ **Normality:** Data approximately normally distributed (or sample sizes adequate)
4. ✓ **Random sampling:** Assumed based on problem context

---

## Tools & Software Used

- **Python 3.x** - Statistical computing
- **scipy.stats** - Statistical functions (t-test)
- **numpy** - Numerical calculations
- **Jupyter Notebook** - Interactive analysis environment

---

## References

1. Course Materials - DSRT 734, Weeks 5-6: t-test concepts and applications
2. JMP Statistical Knowledge Portal - t-Test. Retrieved from https://www.jmp.com/en/statistics-knowledge-portal/t-test
3. scipy.stats.ttest_ind documentation - SciPy library
4. Math is Fun - Student's t-Test. Retrieved from https://www.mathsisfun.com/data/students-t-test.html

---

## Submission Checklist

- [ ] All 5 questions completed
- [ ] Data entered correctly for each question
- [ ] Descriptive statistics calculated and reported
- [ ] t-test performed and results documented
- [ ] APA-formatted write-ups provided
- [ ] Rough work and calculations shown
- [ ] Results verified and double-checked
- [ ] Document exported to PDF
- [ ] Ready for submission

---

**Document prepared by:** Srinath Jagarlamudi
**Date:** [Completion date]
**Total Time:** [Approximate time spent]

---

## How to Convert This to PDF

### Method 1: Using Markdown to PDF converter
1. Use Typora, Marked 2, or similar app
2. Open this .md file
3. File → Export → PDF

### Method 2: Using VS Code
1. Install "Markdown PDF" extension
2. Right-click this file
3. Select "Markdown PDF: Export (pdf)"

### Method 3: Using pandoc (command line)
```bash
pandoc my-submission-template.md -o my-quiz-submission.pdf
```

### Method 4: Using Jupyter Notebook (if filled in .ipynb)
1. Use `my-ttest-quiz-submission.ipynb` instead
2. File → Download as → PDF via LaTeX
3. OR File → Print → Save as PDF
