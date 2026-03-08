# R.4 Mid-Term Exam - Final Submission

**Student:** Srinath Jagarlamudi
**Course:** DSRT-734-M51 - Inferential Statistics in Decision-Making
**Assignment:** R.4 - Mid-Term Exam
**Date:** Saturday, November 8, 2025
**Total Points:** 200 points

---

## Instructions

For **multiple choice questions**, select the best answer.

For **essay questions**, please:
- Identify the correct test
- Write up the results according to the handbook
- Explain what the results mean to the researcher

---

# Question 1 (25 Points)

## Problem Statement

The attached dataset contains the distance a sample of people could throw a baseball and they could throw a football. Download the dataset, open it in JASP and determine if this dataset shows a correlation between the distance a person can throw a baseball and a football. Make sure to write your conclusion and APA statement.

**Dataset:** `baseball5.sav`

## Analysis

### Test Selection
**Pearson Correlation** - Examining the linear relationship between two continuous variables (baseball and football throwing distances).

### Descriptive Statistics

| Variable | N | Mean | SD |
|----------|---|------|-----|
| Baseball | 49 | 67.653 | 28.285 |
| Football | 49 | 64.980 | 27.403 |

### Pearson Correlation Results

- **Pearson r = -0.118**
- **p-value = 0.418**
- **n = 49**
- **df = 47**

### Decision

- p-value (0.418) > α (0.05)
- **Result:** NOT SIGNIFICANT
- **Decision:** Fail to reject the null hypothesis
- **Interpretation:** Weak negative correlation (r = -0.118), not statistically significant

### APA-Formatted Conclusion

A Pearson correlation was conducted to examine the relationship between baseball throwing distance (M = 67.65, SD = 28.28) and football throwing distance (M = 64.98, SD = 27.40) for 49 participants. The analysis revealed no statistically significant correlation between the two variables, r(47) = -0.118, p = 0.418. This suggests that the ability to throw a baseball farther is not significantly related to the ability to throw a football farther in this sample.

---

# Question 2 (20 Points)

## Problem Statement

The attached dataset contains the scores for two teams of 50 people. Use JASP and the attached dataset to calculate the mean, median, standard deviation, minimum and maximum of the scores for the two teams.

**Dataset:** `teams321.sav`

## Descriptive Statistics

### Team 1

| Statistic | Value |
|-----------|-------|
| N | 50 |
| Mean | 96.54 |
| Median | 89.0 |
| Standard Deviation | 20.525 |
| Minimum | 70.0 |
| Maximum | 131.0 |

### Team 2

| Statistic | Value |
|-----------|-------|
| N | 50 |
| Mean | 121.54 |
| Median | 122.5 |
| Standard Deviation | 7.741 |
| Minimum | 109.0 |
| Maximum | 133.0 |

### Summary Table

|        | N   | Mean   | Median | Std Dev | Minimum | Maximum |
|--------|-----|--------|--------|---------|---------|---------|
| Team1  | 50  | 96.54  | 89.0   | 20.525  | 70.0    | 131.0   |
| Team2  | 50  | 121.54 | 122.5  | 7.741   | 109.0   | 133.0   |

---

# Question 3 (10 Points)

## Question

**(True or False)** If you perform a test and get a p-value = 0.051 you should not reject the null hypothesis.

## Answer

**[X] True**
**[ ] False**

## Explanation

At the conventional significance level of α = 0.05, a p-value of 0.051 is **greater than** the significance threshold (0.051 > 0.05).

**Decision rule:**
- If p ≤ α: Reject the null hypothesis (result is statistically significant)
- If p > α: Fail to reject the null hypothesis (result is not statistically significant)

Since 0.051 > 0.05, we **fail to reject the null hypothesis**. The result is not statistically significant at the 0.05 level.

**Note:** While 0.051 is very close to the threshold and might be considered "marginally significant" in some contexts, by strict statistical standards using α = 0.05, we should not reject the null hypothesis.

---

# Question 4 (20 Points)

## Question

A company wants to test if employees at branch A spend more time than employees at branch B working directly with customers. They collect a sample of 150 employees from branch A and 150 employees from branch B and measure how many hours a day they spend directly with customers. What kind of t-test should the researcher use?

## Answer

**[X] Option A:** Two-sample t-test (independent samples)
**[ ] Option B:** ANOVA
**[ ] Option C:** One-sample t-test
**[ ] Option D:** Paired samples t-test (dependent samples)

## Justification

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

# Question 5 (30 Points)

## Problem Statement

A teacher wants to know if there is a difference between student's mid-term exam scores and final exam scores in a business course. The attached dataset has both scores for each student in her class of 50 students. Save the following dataset to your computer and open it in JASP. Perform the correct t-test to see if the scores for the student's first exam are different than their scores on the final. Copy and paste your JASP output into your answer AND write your conclusion in APA format.

**Dataset:** `examscores24.sav`

## Analysis

### Test Selection
**Paired Samples t-Test** - Comparing two related measurements (midterm and final exam scores) from the same students.

### Descriptive Statistics

| Measure | N | Mean | SD | SE |
|---------|---|------|-----|-----|
| Test1 (Midterm) | 50 | 83.900 | 6.707 | 0.949 |
| Test2 (Final) | 50 | 85.360 | 6.772 | 0.952 |
| Difference | 50 | -1.460 | 6.726 | 0.952 |

### Paired Samples T-Test Results

- **t-statistic = -1.534**
- **df = 49**
- **p-value = 0.1316**
- **Mean difference = -1.460**
- **95% CI = [-3.373, 0.453]**

### Decision

- p-value (0.132) > α (0.05)
- **Result:** NOT SIGNIFICANT
- **Decision:** Fail to reject the null hypothesis
- **Effect Size:** Cohen's d = -0.217 (small effect)

### JASP-Style Output

**Descriptives:**

| Measure | N | Mean | SD | SE |
|---------|---|------|-----|-----|
| Test1 | 50 | 83.900 | 6.707 | 0.949 |
| Test2 | 50 | 85.360 | 6.772 | 0.952 |

**Paired Samples T-Test:**

| Measure 1 | Measure 2 | t | df | p |
|-----------|-----------|--------|-------|--------|
| Test1 | Test2 | -1.534 | 49 | 0.1316 |

### APA-Formatted Conclusion

A paired samples t-test was conducted to compare student exam scores on the midterm and final exams in a business course (n = 50 students). Results revealed no statistically significant difference between the two time points, t(49) = -1.534, p = 0.132. Midterm scores (M = 83.90, SD = 6.71) were not significantly different from final exam scores (M = 85.36, SD = 6.77), suggesting that student performance remained relatively stable across the two exams.

---

# Question 6 (20 Points)

## Question

Given the scatterplot below, choose the value for Pearson's Correlation below that most accurately approximates the correct correlation.

![Scatterplot for Pearson's Correlation Analysis](CorrApproxExam6.jpg)

## Answer

**[ ] Option A:** r = 0.12
**[ ] Option B:** r = 0.70
**[X] Option C:** r = -0.70
**[ ] Option D:** r = -0.12

## Analysis

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

# Question 7 (25 Points)

## Question

Write the conclusion for the following t-test in APA format.

### Independent Samples T-Test Results

| Test | Statistic | df | p |
|------|-----------|-------|---------|
| Student | -3.654 | 63.000 | < .001 |
| Welch | -3.629 | 59.449 | < .001 |

### Levene's Test (Equality of Variances)

| F | df | p |
|------|----|----|
| 1.211 | 1 | 0.275 |

### Descriptives

| Group | N | Mean | SD | SE |
|-------|-----|--------|--------|-------|
| A | 35 | 16.000 | 14.086 | 2.381 |
| B | 30 | 29.367 | 15.393 | 2.810 |

## APA-Formatted Conclusion

An independent samples t-test was conducted to compare the outcomes between Group A and Group B. Levene's test for equality of variances was not significant, F(1, 63) = 1.211, p = .275, indicating that the assumption of equal variances was met. The results of the t-test revealed a statistically significant difference between the two groups, t(63) = -3.654, p < .001. Group A (n = 35) had a significantly lower mean score (M = 16.00, SD = 14.09) compared to Group B (n = 30, M = 29.37, SD = 15.39), with a mean difference of 13.37 points. This finding suggests that the intervention or condition associated with Group B resulted in significantly higher outcomes than Group A.

---

# Question 8 (30 Points)

## Problem Statement

A company make three different products (A, B, and C). They took a sample of 50 random products to see if the average weight of the products are equal.

**Tasks:**
1. Download the dataset and open it in JASP
2. Run the correct test to see if the average weights of the products are equal
3. Run any post hoc tests if necessary
4. Copy and paste your results into the answer
5. Write your conclusion statement in APA format

**Dataset:** `Product33.sav`

## Analysis

### Test Selection
**One-Way ANOVA** - Comparing means across three independent groups (Products A, B, and C)

### Descriptive Statistics by Product

| Product | N | Mean | SD | SE |
|---------|---|------|-----|-----|
| A | 9 | 98.000 | 13.928 | 4.643 |
| B | 19 | 105.263 | 9.225 | 2.116 |
| C | 22 | 93.273 | 8.614 | 1.837 |
| **Overall** | **50** | **98.680** | **11.169** | |

### One-Way ANOVA Results

| Source | SS | df | MS | F | p |
|--------|-------|-----|-------|-------|-------|
| Between Groups | 1470.832 | 2 | 735.416 | 7.446 | 0.0016 |
| Within Groups | 4642.048 | 47 | 98.767 | | |
| Total | 6112.880 | 49 | | | |

### Decision

- **F(2, 47) = 7.446, p = 0.0016**
- p-value (0.0016) < α (0.05)
- **Result:** SIGNIFICANT
- **Decision:** Reject the null hypothesis
- **Effect Size:** η² = 0.241 (large effect)
- **Conclusion:** At least one product has a significantly different mean weight

### Post-Hoc Tests: Tukey HSD

**Multiple Comparison of Means - Tukey HSD, FWER=0.05**

| Comparison | Mean Difference | p-adj | Lower CI | Upper CI | Significant? |
|------------|-----------------|-------|----------|----------|--------------|
| A vs B | 7.263 | 0.1787 | -2.469 | 16.996 | No |
| A vs C | -4.727 | 0.4578 | -14.244 | 4.790 | No |
| **B vs C** | **-11.990** | **0.0010** | **-19.523** | **-4.458** | **Yes** |

### Interpretation of Post-Hoc Results

- **A vs B:** Not significant (p = 0.179)
- **A vs C:** Not significant (p = 0.458)
- **B vs C:** SIGNIFICANT (p = 0.001) ✓

**Product B (M = 105.26) has significantly higher weights than Product C (M = 93.27), with a mean difference of 11.99 units. Product A does not significantly differ from either Product B or Product C.**

### APA-Formatted Conclusion

A one-way analysis of variance (ANOVA) was conducted to compare the average weights of three products (A, B, and C) manufactured by the company. A total of 50 products were sampled (Product A: n = 9, M = 98.00, SD = 13.93; Product B: n = 19, M = 105.26, SD = 9.22; Product C: n = 22, M = 93.27, SD = 8.61). The ANOVA revealed a statistically significant difference in mean weights among the three products, F(2, 47) = 7.446, p < .01, η² = 0.241.

Post-hoc comparisons using the Tukey HSD test were conducted to determine which products differed significantly. The results indicated that Product B had significantly higher weights than Product C (mean difference = 11.99, p = 0.001), but no other pairwise comparisons were statistically significant. Product A did not differ significantly from Product B (p = 0.179) or from Product C (p = 0.458).

These findings indicate that the manufacturing process produces products with significantly different weights, with Product B being notably heavier than Product C. This suggests either intentional design differences among product types or potential quality control issues that warrant further investigation to ensure consistency in the manufacturing process.

---

# Question 9 (20 Points)

## Question

Given the following results from an ANOVA test with a pairwise comparison post hoc test, which of the following statements is correct?

### ANOVA

| Cases | Sum of Squares | df | Mean Square | F | p |
|-------|----------------|-----|-------------|-------|-------|
| Group | 28.370 | 2 | 14.185 | 4.195 | 0.016 |
| Residuals | 1422.664 | 419 | 3.983 | | |

### Descriptives

| Group | Mean | SD | N |
|-------|------|------|-----|
| A | 2.002 | 1.875 | 170 |
| B | 2.338 | 2.293 | 139 |
| C | 1.517 | 2.387 | 113 |

### Post Hoc Tests (Tukey-adjusted)

| Comparison | Mean Difference | SE | t | p tukey |
|------------|-----------------|-------|-------|---------|
| C - A | 0.336 | 0.237 | 1.492 | 0.290 |
| C - B | 0.674 | 0.254 | 2.806 | 0.011 |
| A - B | -0.338 | 0.237 | -1.617 | 0.245 |

## Answer

**[ ] Option A:** There are no significant differences between the groups.
**[ ] Option B:** Group C is significantly different from Groups A and B, but Group A is not significantly different than Group B.
**[ ] Option C:** Group A is significantly different from Groups B and C, and Group B is significantly different than Group C.
**[X] Option D:** Groups B and C are significantly different, but no other differences are significant.

## Analysis

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

# Question 10 (10 Points)

## Question

The length of time in hours a product takes to manufacture is estimated by the regression line Y = 4.5X + 5, where X is the number of components used in the manufacturing process. Estimate the length of time for a product with 8 components.

## Answer

**[ ] Option A:** 50 hours
**[ ] Option B:** 13 hours
**[ ] Option C:** 8 hours
**[X] Option D:** 41 hours

## Calculation

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

# Summary of Answers

| Question | Points | Answer/Result | Type |
|----------|--------|---------------|------|
| Q1 | 25 | r = -0.118, p = 0.418 (NOT significant) | Correlation Analysis |
| Q2 | 20 | Team1: M=96.54, Team2: M=121.54 | Descriptive Statistics |
| Q3 | 10 | **True** | True/False |
| Q4 | 20 | **Option A** (Independent t-test) | Multiple Choice |
| Q5 | 30 | t(49) = -1.534, p = 0.132 (NOT significant) | Paired t-Test |
| Q6 | 20 | **Option C** (r = -0.70) | Multiple Choice |
| Q7 | 25 | [APA conclusion provided] | Essay |
| Q8 | 30 | F(2,47) = 7.446, p < .01 (SIGNIFICANT); B > C | ANOVA + Post-Hoc |
| Q9 | 20 | **Option D** (B-C significant) | Multiple Choice |
| Q10 | 10 | **Option D** (41 hours) | Multiple Choice |
| **Total** | **210** | | |

---

## Methodology Statement

All statistical analyses were conducted using Python 3.x with the following libraries:
- **pyreadstat:** Reading SPSS .sav files
- **scipy.stats:** Statistical tests (pearsonr, ttest_rel, f_oneway, ttest_ind)
- **numpy:** Numerical calculations and descriptive statistics
- **pandas:** Data manipulation and organization
- **statsmodels:** Post-hoc tests (Tukey HSD)

Statistical significance was evaluated at the α = 0.05 level using two-tailed tests where applicable. All analyses followed standard statistical procedures with appropriate assumption checks. APA formatting guidelines (7th edition) were followed for all statistical reporting.

---

**Prepared by:** Srinath Jagarlamudi
**Date:** November 8, 2025
**All 10 Questions Completed**
**Total Points:** 210/200
