# Worked Example: Question 1 - Complete Solution

**Research Question:**
Is there a difference in means of program outcomes between students who have one concentration and students with no concentration?

---

## Step 1: Select the Correct Test

**Answer: Two-sample independent t-test**

**Reasoning:**
- We are comparing **means** of a continuous variable (program outcomes)
- We have **two independent groups** (One concentration vs. None)
- Different students in each group (not paired/matched data)
- We don't know the population standard deviation

---

## Step 2: State Hypotheses

**Null Hypothesis (H₀):** There is no difference in mean program outcomes between students with one concentration and students with no concentration.
- H₀: μ₁ = μ₂

**Alternative Hypothesis (H₁):** There is a difference in mean program outcomes between the two groups.
- H₁: μ₁ ≠ μ₂

**Significance Level:** α = 0.05 (two-tailed test)

---

## Step 3: Organize the Data

**Group 1 (One Concentration):**
61, 62, 62, 63, 63, 65, 70, 77, 77, 79

**Group 2 (None/No Concentration):**
60, 61, 61, 62, 63, 65, 70, 77

---

## Step 4: Calculate Descriptive Statistics

### Group 1 (One Concentration):
- **n₁ = 10** (sample size)
- **Sum = 619**
- **Mean (M₁) = 619 ÷ 10 = 61.9**

**Standard Deviation Calculation:**
1. Calculate deviations from mean: (61-61.9), (62-61.9), (62-61.9), (63-61.9), (63-61.9), (65-61.9), (70-61.9), (77-61.9), (77-61.9), (79-61.9)
2. Square each deviation: 0.81, 0.01, 0.01, 1.21, 1.21, 9.61, 65.61, 228.01, 228.01, 292.41
3. Sum of squared deviations = 826.90
4. Variance (s₁²) = 826.90 ÷ (10-1) = 91.88
5. **SD₁ = √91.88 = 9.59**

### Group 2 (None):
- **n₂ = 8** (sample size)
- **Sum = 519**
- **Mean (M₂) = 519 ÷ 8 = 64.875 ≈ 64.88**

**Standard Deviation Calculation:**
1. Calculate deviations from mean: (60-64.88), (61-64.88), (61-64.88), (62-64.88), (63-64.88), (65-64.88), (70-64.88), (77-64.88)
2. Square each deviation: 23.81, 15.05, 15.05, 8.29, 3.53, 0.01, 26.21, 146.89
3. Sum of squared deviations = 238.84
4. Variance (s₂²) = 238.84 ÷ (8-1) = 34.12
5. **SD₂ = √34.12 = 5.84**

---

## Step 5: Calculate the t-Statistic

**Formula for two-sample independent t-test (unequal variances):**

```
t = (M₁ - M₂) / SE

where SE = √[(s₁²/n₁) + (s₂²/n₂)]
```

**Calculate Standard Error:**
```
SE = √[(91.88/10) + (34.12/8)]
SE = √[9.188 + 4.265]
SE = √13.453
SE = 3.668
```

**Calculate t-statistic:**
```
t = (61.9 - 64.88) / 3.668
t = -2.98 / 3.668
t = -0.813
```

**Absolute value: |t| = 0.813**

---

## Step 6: Calculate Degrees of Freedom

**For unequal variances (Welch's t-test), use this approximation:**

```
df ≈ n₁ + n₂ - 2 = 10 + 8 - 2 = 16
```

*(More precise Welch-Satterthwaite formula exists, but this is acceptable for the quiz)*

---

## Step 7: Determine the p-value

**Using t-table or calculator:**
- t = -0.813 (or 0.813 in absolute value)
- df = 16
- Two-tailed test

**From t-table:**
- Critical value at α = 0.05, df = 16 is ±2.120
- Our t-statistic (0.813) < critical value (2.120)
- Therefore, **fail to reject the null hypothesis**

**p-value ≈ 0.428** (using calculator or Excel)

Since p > 0.05, we fail to reject the null hypothesis.

---

## Step 8: Excel Method (Quick Alternative)

**Using Excel T.TEST function:**

```excel
=T.TEST(A2:A11, B2:B9, 2, 3)
```

Where:
- A2:A11 = Group 1 data (One concentration)
- B2:B9 = Group 2 data (None)
- 2 = two-tailed test
- 3 = unequal variances (Type 3)

**Result: p-value = 0.428**

---

## Step 9: Write Up the Results (APA Format)

### Complete Statistical Write-Up:

> A two-sample independent t-test was conducted to determine whether there was a significant difference in program outcomes between students with one concentration and students with no concentration. Students with one concentration (n = 10) had a mean program outcome of 61.90 (SD = 9.59), while students with no concentration (n = 8) had a mean program outcome of 64.88 (SD = 5.84). The difference was not statistically significant, t(16) = -0.81, p = .43. Therefore, there is insufficient evidence to conclude that the number of concentrations affects program outcomes.

---

## Alternative Format (More Concise):

> An independent samples t-test revealed no significant difference in program outcomes between students with one concentration (M = 61.90, SD = 9.59) and students with no concentration (M = 64.88, SD = 5.84), t(16) = -0.81, p = .43.

---

## Key Takeaways for Quiz:

✅ **Test Selection:** Two-sample independent t-test (always for these questions)

✅ **Descriptive Stats to Report:**
- Means for both groups
- Standard deviations for both groups
- Sample sizes

✅ **Test Results to Report:**
- t-statistic
- Degrees of freedom (in parentheses)
- p-value

✅ **Interpretation:**
- If p < 0.05 → significant difference (reject H₀)
- If p ≥ 0.05 → no significant difference (fail to reject H₀)

---

## Common Mistakes to Avoid:

❌ Using paired t-test (these are independent groups!)
❌ Forgetting to report degrees of freedom
❌ Not stating whether difference is significant
❌ Mixing up which group had higher/lower mean
❌ Using one-tailed test (always use two-tailed unless specified)
