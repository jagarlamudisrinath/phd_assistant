# R.4 Mid-Term Exam - Conceptual Questions

**Student:** Srinath Jagarlamudi
**Course:** DSRT-734-M51 - Inferential Statistics in Decision-Making
**Assignment:** R.4 - Mid-Term Exam (Conceptual Questions)
**Date:** Saturday, November 8, 2025

---

## Question 3 (10 Points)

### Question
**(True or False)** If you perform a test and get a p-value = 0.051 you should not reject the null hypothesis.

### Answer
**[X] True**
**[ ] False**

### Explanation
At the conventional significance level of α = 0.05, a p-value of 0.051 is **greater than** the significance threshold (0.051 > 0.05).

**Decision rule:**
- If p ≤ α: Reject the null hypothesis (result is statistically significant)
- If p > α: Fail to reject the null hypothesis (result is not statistically significant)

Since 0.051 > 0.05, we **fail to reject the null hypothesis**. The result is not statistically significant at the 0.05 level.

**Note:** While 0.051 is very close to the threshold and might be considered "marginally significant" in some contexts, by strict statistical standards using α = 0.05, we should not reject the null hypothesis.

---

## Question 4 (20 Points)

### Question
A company wants to test if employees at branch A spend more time than employees at branch B working directly with customers. They collect a sample of 150 employees from branch A and 150 employees from branch B and measure how many hours a day they spend directly with customers. What kind of t-test should the researcher use?

### Answer
**[X] Option A:** Two-sample t-test (independent samples)
**[ ] Option B:** ANOVA
**[ ] Option C:** One-sample t-test
**[ ] Option D:** Paired samples t-test (dependent samples)

### Justification

**Correct Test: Two-sample independent t-test**

**Reasoning:**

1. **Two groups being compared:** Branch A employees vs Branch B employees
2. **Continuous outcome variable:** Hours per day spent with customers
3. **Independent samples:** Different employees in each branch (not the same people measured twice)
4. **Comparing means:** Testing if mean time differs between the two branches

**Why other options are incorrect:**

- **Option B (ANOVA):** Used for comparing 3+ groups. We only have 2 groups here.
- **Option C (One-sample t-test):** Used to compare one sample mean against a known population value. We're comparing two samples.
- **Option D (Paired samples t-test):** Used when the same subjects are measured twice (e.g., before/after). Different employees are in each branch, so samples are independent, not paired.

**Study Design Characteristics:**
- Sample sizes: n₁ = 150 (Branch A), n₂ = 150 (Branch B)
- Independent observations between groups
- Each employee measured once
- Random samples from each branch

---

## Question 6 (20 Points)

### Question
Given the scatterplot below, choose the value for Pearson's Correlation below that most accurately approximates the correct correlation.

![Scatterplot for Pearson's Correlation Analysis](CorrApproxExam6.jpg)

### Answer
**[ ] Option A:** r = 0.12
**[ ] Option B:** r = 0.70
**[X] Option C:** r = -0.70
**[ ] Option D:** r = -0.12

### Analysis

**Visual Assessment of Scatterplot:**

1. **Direction:** The points show a clear **negative** relationship
   - As variable A increases (left to right), variable B decreases (top to bottom)
   - The trend line has a negative slope
   - This eliminates Options A and B (positive correlations)

2. **Strength:** The relationship is **moderately strong**
   - Points are fairly close to the trend line (not perfectly aligned, but clustered around it)
   - There is some scatter, but a clear linear pattern is visible
   - Not a weak correlation (would be r ≈ -0.1 to -0.3)
   - Not a perfect correlation (would be r = -1.0)

3. **Magnitude Estimation:**
   - Weak correlation: |r| < 0.3 → Would show much more scatter
   - Moderate correlation: 0.3 < |r| < 0.7 → Points loosely follow trend
   - Strong correlation: |r| > 0.7 → Points tightly clustered around line

**Comparison of Remaining Options:**
- **Option C: r = -0.70** → Strong negative correlation ✓
- **Option D: r = -0.12** → Very weak negative correlation ✗

The scatter shows too much clustering around the trend line to be r = -0.12, and the negative direction with moderately strong relationship best matches **r = -0.70**.

---

## Question 7 (25 Points)

### Question
Write the conclusion for the following t-test in APA format.

**Independent Samples T-Test Results:**

| Test | Statistic | df | p |
|------|-----------|-------|---------|
| Student | -3.654 | 63.000 | < .001 |
| Welch | -3.629 | 59.449 | < .001 |

**Levene's Test (Equality of Variances):**

| F | df | p |
|------|----|----|
| 1.211 | 1 | 0.275 |

**Descriptives:**

| Group | N | Mean | SD | SE |
|-------|-----|--------|--------|-------|
| A | 35 | 16.000 | 14.086 | 2.381 |
| B | 30 | 29.367 | 15.393 | 2.810 |

### APA-Formatted Conclusion

An independent samples t-test was conducted to compare the outcomes between Group A and Group B. Levene's test for equality of variances was not significant, F(1, 63) = 1.211, p = .275, indicating that the assumption of equal variances was met. The results of the t-test revealed a statistically significant difference between the two groups, t(63) = -3.654, p < .001. Group A (n = 35) had a significantly lower mean score (M = 16.00, SD = 14.09) compared to Group B (n = 30, M = 29.37, SD = 15.39), with a mean difference of 13.37 points. This finding suggests that the intervention or condition associated with Group B resulted in significantly higher outcomes than Group A.

---

**Alternative Version (More Concise):**

An independent samples t-test was conducted to compare Group A and Group B. The assumption of homogeneity of variance was satisfied (Levene's test: p = .275). Group B (M = 29.37, SD = 15.39) scored significantly higher than Group A (M = 16.00, SD = 14.09), t(63) = -3.654, p < .001. The mean difference of 13.37 points indicates a substantial and statistically significant effect.

---

## Question 9 (20 Points)

### Question
Given the following results from an ANOVA test with a pairwise comparison post hoc test, which of the following statements is correct?

**ANOVA:**

| Cases | Sum of Squares | df | Mean Square | F | p |
|-------|----------------|-----|-------------|-------|-------|
| Group | 28.370 | 2 | 14.185 | 4.195 | 0.016 |
| Residuals | 1422.664 | 419 | 3.983 | | |

**Descriptives:**

| Group | Mean | SD | N |
|-------|------|------|-----|
| A | 2.002 | 1.875 | 170 |
| B | 2.338 | 2.293 | 139 |
| C | 1.517 | 2.387 | 113 |

**Post Hoc Tests (Tukey-adjusted):**

| Comparison | Mean Difference | SE | t | p tukey |
|------------|-----------------|-------|-------|---------|
| C - A | 0.336 | 0.237 | 1.492 | 0.290 |
| C - B | 0.674 | 0.254 | 2.806 | 0.011 |
| A - B | -0.338 | 0.237 | -1.617 | 0.245 |

### Answer
**[ ] Option A:** There are no significant differences between the groups.
**[ ] Option B:** Group C is significantly different from Groups A and B, but Group A is not significantly different than Group B.
**[ ] Option C:** Group A is significantly different from Groups B and C, and Group B is significantly different than Group C.
**[X] Option D:** Groups B and C are significantly different, but no other differences are significant.

### Analysis

**Step 1: ANOVA Interpretation**
- F(2, 419) = 4.195, p = 0.016
- The overall ANOVA is **significant** (p < 0.05)
- This indicates that **at least one pair** of groups differs significantly
- We need post-hoc tests to determine which specific pairs differ

**Step 2: Post-Hoc Test Results (using α = 0.05)**

| Comparison | p-value | Significant? |
|------------|---------|--------------|
| C vs A | 0.290 | No (0.290 > 0.05) |
| C vs B | 0.011 | **Yes (0.011 < 0.05)** ✓ |
| A vs B | 0.245 | No (0.245 > 0.05) |

**Step 3: Evaluate Each Option**

- **Option A** (All non-significant): **Incorrect** → C vs B is significant (p = 0.011)

- **Option B** (C different from both A and B): **Incorrect** → C is NOT significantly different from A (p = 0.290)

- **Option C** (A different from both B and C, B different from C): **Incorrect** → A is not significantly different from B (p = 0.245) or C (p = 0.290)

- **Option D** (Only B and C are significantly different): **Correct** ✓
  - C vs B: p = 0.011 (significant)
  - C vs A: p = 0.290 (not significant)
  - A vs B: p = 0.245 (not significant)

**Interpretation:**
Group B (M = 2.338) has significantly higher scores than Group C (M = 1.517), with a mean difference of 0.674 points. Group A (M = 2.002) does not significantly differ from either Group B or Group C.

---

## Question 10 (10 Points)

### Question
The length of time in hours a product takes to manufacture is estimated by the regression line Y = 4.5X + 5, where X is the number of components used in the manufacturing process. Estimate the length of time for a product with 8 components.

### Answer
**[ ] Option A:** 50 hours
**[ ] Option B:** 13 hours
**[ ] Option C:** 8 hours
**[X] Option D:** 41 hours

### Calculation

**Given:**
- Regression equation: Y = 4.5X + 5
- X = 8 components
- Y = manufacturing time (hours)

**Solution:**
```
Y = 4.5X + 5
Y = 4.5(8) + 5
Y = 36 + 5
Y = 41 hours
```

**Answer: 41 hours (Option D)**

**Interpretation:**
The regression model predicts that a product with 8 components will take approximately 41 hours to manufacture. This consists of:
- 36 hours attributable to the 8 components (4.5 hours per component × 8)
- 5 hours of base manufacturing time (y-intercept)

---

## Summary of Answers

| Question | Points | Answer | Type |
|----------|--------|--------|------|
| Q3 | 10 | True | True/False |
| Q4 | 20 | Option A (Independent t-test) | Multiple Choice |
| Q6 | 20 | Option C (r = -0.70) | Multiple Choice |
| Q7 | 25 | [APA conclusion provided] | Essay |
| Q9 | 20 | Option D (B-C significant) | Multiple Choice |
| Q10 | 10 | Option D (41 hours) | Multiple Choice |
| **Total** | **105** | | |

---

**Prepared by:** Srinath Jagarlamudi
**Date:** November 8, 2025
**Conceptual Questions Completed:** 6 of 6
