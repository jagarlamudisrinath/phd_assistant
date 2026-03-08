# DSRT-734 Final Comprehensive Exam - Answers

**Student:** Srinath Jagarlamudi
**Course:** DSRT-734-M51 - Inferential Statistics in Decision-Making
**Date:** December 11, 2025
**Total Points:** 200 points

---

## Question 1 (20 Points) - MULTIPLE CHOICE

### Answer: **Option B**

"Team Green is significantly different from Team Blue and Red, but Team Blue is not significantly different from Team Red."

### Rationale:
From the Post-Hoc Comparisons table (Bonferroni adjusted):
- Blue vs Green: p = 0.021 → **Significant** (p < 0.05)
- Blue vs Red: p = 1.000 → **Not significant** (p > 0.05)
- Green vs Red: p = 0.046 → **Significant** (p < 0.05)

Green is significantly different from both Blue and Red, but Blue and Red are not significantly different from each other.

---

## Question 2 (20 Points) - ESSAY

### Answer (Copy/Paste):

A paired samples t-test was conducted to compare hours spent studying and hours spent watching TV. Results revealed no statistically significant difference between study hours (M = 2.94, SD = 3.29) and TV hours (M = 2.59, SD = 2.15), t(254) = 1.714, p = .088. The difference between time spent studying and watching television was not statistically significant at the α = .05 level.

---

## Question 3 (20 Points) - MULTIPLE CHOICE

### Answer: **Option D** - Pearson's correlation

*(Verify by viewing the scatterplot in Blackboard)*

### Rationale:
- If the scatterplot shows two **continuous variables** with a **linear relationship** → Pearson's correlation
- If the relationship appears **curved or non-linear** → Spearman's rho would be appropriate
- Chi-square is for categorical data (not appropriate for scatterplot of continuous variables)
- Independent t-test compares group means (not for correlation analysis)

**Decision Guide:**
- Linear pattern visible → **Pearson's correlation (Option D)**
- Curved/monotonic pattern → Spearman's rho (Option A)

---

## Question 4 (20 Points) - MULTIPLE CHOICE

### Answer: **Option A** - (t[47.84]=2.276, p=0.027)

### Rationale:
**Key:** Levene's test p = 0.044 (significant at α = 0.05)
- Significant Levene's test means variances are **NOT equal**
- Must use **Welch's t-test** (not Student's t)
- Welch's row shows: t = 2.276, df = 47.836, p = 0.027

Option A correctly reports the Welch's t-test values.

---

## Question 5 (25 Points) - JASP ANALYSIS

### JASP Output:

**Descriptive Statistics**

| Variable | N | Mean | Median | SD | Min | Max |
|----------|---|------|--------|----|----|-----|
| BlueTeam | 50 | 72.60 | 74.00 | 14.96 | 50.00 | 99.00 |
| RedTeam | 50 | 72.94 | 68.50 | 21.18 | 41.00 | 110.00 |

### Answer (Copy/Paste):

Descriptive statistics were calculated for scores of two teams (N = 50 each).

**Blue Team:**
- Mean: 72.60
- Median: 74.00
- Standard Deviation: 14.96
- Minimum: 50.00
- Maximum: 99.00

**Red Team:**
- Mean: 72.94
- Median: 68.50
- Standard Deviation: 21.18
- Minimum: 41.00
- Maximum: 110.00

The Blue Team and Red Team have nearly identical mean scores (72.60 vs 72.94). However, the Red Team shows greater variability (SD = 21.18) compared to the Blue Team (SD = 14.96), with a wider range of scores (41-110 vs 50-99).

---

## Question 6 (20 Points) - MULTIPLE CHOICE

### Answer: **Option B** - p = 0.273

### Rationale:
- Small sample size (N = 31)
- Some expected counts may be < 5
- **Fisher's exact test is more appropriate for small samples**
- From the output, Fisher's exact test p = 0.273

The chi-square p-value (0.183) is not the best choice when sample size is small.

---

## Question 7 (30 Points) - JASP ANALYSIS

### JASP Output:

**Paired Samples T-Test**

**Descriptive Statistics:**
| Variable | N | Mean | SD |
|----------|---|------|-----|
| Score1 (Pre-training) | 50 | 94.98 | 6.59 |
| Score2 (Post-training) | 50 | 98.14 | 8.49 |

**Test Results:**
| Statistic | Value |
|-----------|-------|
| Mean Difference | -3.16 |
| t-statistic | -2.073 |
| Degrees of Freedom | 49 |
| p-value | 0.043 |
| Cohen's d | 0.416 |
| 95% CI | [-6.22, -0.10] |

### APA Conclusion (Copy/Paste):

A paired samples t-test was conducted to compare employee knowledge scores before (Score1) and after (Score2) a training program for 50 employees. There was a statistically significant difference between pre-training scores (M = 94.98, SD = 6.59) and post-training scores (M = 98.14, SD = 8.49), t(49) = -2.07, p = .043. The mean increase of 3.16 points represents a small effect size (Cohen's d = 0.42). These results suggest that the training program was effective in improving employee product knowledge.

---

## Question 8 (15 Points) - ESSAY

### Answer (Copy/Paste):

**1. Research Question:**
Is there a significant difference in loan processing time between automated AI-based underwriting systems versus traditional manual underwriting in mortgage applications?

**2. Data Collection:**
I would gather loan processing time data (measured in hours from application submission to underwriting decision) for two independent groups of mortgage applications:
- Group 1: Loans processed through AI-based automated underwriting (n = 50)
- Group 2: Loans processed through traditional manual underwriting (n = 50)
Data would be randomly sampled from mortgage processing records at my organization, Lakeview Loan Servicing.

**3. Statistical Test:**
Independent samples t-test would be the most appropriate test because:
- We are comparing means of a continuous dependent variable (processing time)
- There are two independent groups (AI vs. traditional underwriting)
- Observations are independent between groups

**4. Interpretation if Significant:**
If p < 0.05, we would reject the null hypothesis and conclude there is a statistically significant difference in processing times between the two underwriting methods. This would indicate that the underwriting approach (AI vs. traditional) has a meaningful impact on operational efficiency. For example, if AI-underwritten loans showed significantly shorter processing times, this would provide evidence supporting increased investment in automated underwriting technology to improve loan servicing operations.

---

## Question 9 (30 Points) - JASP ANALYSIS

### JASP Output:

**Chi-Square Test of Independence**

**Observed Frequencies:**
|        | Disease=0 | Disease=1 |
|--------|-----------|-----------|
| Gender=0 | 9 | 6 |
| Gender=1 | 10 | 8 |

**Expected Frequencies:**
|        | Disease=0 | Disease=1 |
|--------|-----------|-----------|
| Gender=0 | 8.64 | 6.36 |
| Gender=1 | 10.36 | 7.64 |

**Test Results:**
| Statistic | Value |
|-----------|-------|
| Chi-square (χ²) | 0.000 |
| Degrees of Freedom | 1 |
| p-value (Chi-square) | 1.000 |
| p-value (Fisher's exact) | 1.000 |
| Minimum expected count | 6.36 |
| Sample size (N) | 33 |

### APA Conclusion (Copy/Paste):

A chi-square test of independence was conducted to examine whether the prevalence of chronic disease differed between genders. The sample included 33 participants. The chi-square test revealed no statistically significant association between gender and disease status, χ²(1, N = 33) = 0.00, p = 1.000. Fisher's exact test confirmed this finding (p = 1.000). The results indicate that chronic disease prevalence did not differ significantly between males and females in this sample. The proportion of individuals with the disease was similar across both genders.

---

## Summary of Answers

| Question | Points | Type | Answer |
|----------|--------|------|--------|
| Q1 | 20 | Multiple Choice | **Option B** |
| Q2 | 20 | Essay | APA conclusion (not significant, p = .088) |
| Q3 | 20 | Multiple Choice | **Option D** (verify scatterplot) |
| Q4 | 20 | Multiple Choice | **Option A** |
| Q5 | 25 | JASP Essay | Descriptive stats for both teams |
| Q6 | 20 | Multiple Choice | **Option B** |
| Q7 | 30 | JASP Essay | Paired t-test (significant, p = .043) |
| Q8 | 15 | Essay | Research design application |
| Q9 | 30 | JASP Essay | Chi-square (not significant, p = 1.000) |
| **Total** | **200** | | |

---

## Quick Reference for Manual Entry

### Multiple Choice Answers:
- **Q1:** Option B
- **Q3:** Option D *(verify scatterplot shows linear relationship)*
- **Q4:** Option A
- **Q6:** Option B

### Key Results:
- **Q2:** NOT significant (p = .088)
- **Q7:** SIGNIFICANT (p = .043) - training improved scores
- **Q9:** NOT significant (p = 1.000) - no gender difference in disease

---

*Prepared for review before manual submission to Blackboard*
