# t-Test Quick Reference Cheat Sheet

**For DSRT 734 R.3 Residency Quiz**

---

## Types of t-Tests (Choose the Right One!)

| Test Type | When to Use | Example |
|-----------|-------------|---------|
| **One-Sample t-test** | Compare one group mean to a known value | Is the average test score different from 70? |
| **Independent Samples t-test** ✅ | Compare means of TWO INDEPENDENT groups | Do Group A and Group B have different scores? |
| **Paired Samples t-test** | Compare means of SAME subjects (before/after) | Did scores improve from pretest to posttest? |

**For ALL quiz questions:** Use **Independent Samples t-test**

---

## Quick Decision Tree

```
Start Here
    ↓
Are you comparing TWO groups?
    ↓ YES
Are the groups INDEPENDENT (different people)?
    ↓ YES
Use: TWO-SAMPLE INDEPENDENT T-TEST ✅
```

---

## Assumptions Checklist

Before running a t-test, check:

✅ **Independence:** Observations in each group are independent
✅ **Continuous Data:** Outcome variable is continuous (scores, measurements)
✅ **Normality:** Data approximately normally distributed (less critical with larger samples)
✅ **Random Sampling:** Samples randomly selected from populations

*For the quiz:* Assume all assumptions are met!

---

## Formula Reference

### Two-Sample Independent t-test

**t-statistic:**
```
t = (M₁ - M₂) / SE

where SE = √[(s₁²/n₁) + (s₂²/n₂)]
```

**Degrees of Freedom (simple version):**
```
df = n₁ + n₂ - 2
```

**Components:**
- M₁, M₂ = means of groups 1 and 2
- s₁², s₂² = variances of groups 1 and 2
- n₁, n₂ = sample sizes of groups 1 and 2
- SE = standard error of the difference

---

## Interpreting Results

### Understanding the p-value

| p-value | Decision | Interpretation |
|---------|----------|----------------|
| **p < 0.05** | Reject H₀ | **SIGNIFICANT** difference between groups |
| **p ≥ 0.05** | Fail to reject H₀ | **NO significant** difference between groups |

**Common p-value examples:**
- p = 0.001 → **Highly significant** (strong evidence of difference)
- p = 0.03 → **Significant** (reject null hypothesis)
- p = 0.12 → **Not significant** (fail to reject null)
- p = 0.52 → **Not significant** (no evidence of difference)

### Understanding the t-statistic

- **Larger |t|** = stronger evidence of difference
- **Smaller |t|** = weaker evidence of difference
- Compare to critical value from t-table (at df and α = 0.05)
- If **|t| > critical value** → significant
- If **|t| < critical value** → not significant

**Critical values (two-tailed, α = 0.05):**
- df = 10: ±2.228
- df = 15: ±2.131
- df = 16: ±2.120
- df = 20: ±2.086

---

## APA-Style Write-Up Template

### Format 1: Full Write-Up

```
A two-sample independent t-test was conducted to determine whether there
was a significant difference in [outcome variable] between [group 1 description]
and [group 2 description]. [Group 1 name] (n = [n1]) had a mean [outcome]
of [M1] (SD = [SD1]), while [group 2 name] (n = [n2]) had a mean [outcome]
of [M2] (SD = [SD2]). [The difference was/was not] statistically significant,
t([df]) = [t-value], p = [p-value]. [Interpretation sentence].
```

### Format 2: Concise Version

```
An independent samples t-test revealed [a significant / no significant]
difference in [outcome] between [Group 1] (M = [M1], SD = [SD1]) and
[Group 2] (M = [M2], SD = [SD2]), t([df]) = [t-value], p = [p-value].
```

### Example (Significant Result):

> An independent samples t-test revealed a significant difference in program
> outcomes between students with one concentration (M = 75.30, SD = 8.22) and
> students with no concentration (M = 68.50, SD = 6.15), t(16) = 2.14, p = .048.
> Students with one concentration scored significantly higher than those with
> no concentration.

### Example (Non-Significant Result):

> An independent samples t-test revealed no significant difference in program
> outcomes between students with one concentration (M = 61.90, SD = 9.59) and
> students with no concentration (M = 64.88, SD = 5.84), t(16) = -0.81, p = .43.

---

## Step-by-Step Checklist for Quiz

### For Each Question:

- [ ] **Step 1:** Identify the test → Two-sample independent t-test
- [ ] **Step 2:** Organize data into two groups
- [ ] **Step 3:** Calculate descriptive statistics:
  - [ ] Mean of Group 1
  - [ ] SD of Group 1
  - [ ] n of Group 1
  - [ ] Mean of Group 2
  - [ ] SD of Group 2
  - [ ] n of Group 2
- [ ] **Step 4:** Calculate t-statistic and p-value
- [ ] **Step 5:** Calculate degrees of freedom (n₁ + n₂ - 2)
- [ ] **Step 6:** Determine significance (p < 0.05?)
- [ ] **Step 7:** Write APA-style results
- [ ] **Step 8:** State interpretation (is there a difference?)

---

## Common Mistakes to AVOID

❌ **Wrong Test Selection:**
- Don't use paired t-test (groups are independent!)
- Don't use one-sample t-test (we have two groups!)

❌ **Missing Information:**
- Forgetting to report means and SDs
- Forgetting degrees of freedom: t([missing df]) ❌
- Not stating sample sizes

❌ **Interpretation Errors:**
- Saying "significant" when p > 0.05
- Not stating which group had higher/lower mean
- Confusing one-tailed vs. two-tailed

❌ **Format Errors:**
- Wrong parentheses: t = (16) 2.14 ❌ → Correct: t(16) = 2.14 ✅
- Missing equal signs: t(16) 2.14 ❌ → Correct: t(16) = 2.14 ✅
- Wrong p-value format: p = .048 ✅ or p = 0.048 ✅

❌ **Statistical Errors:**
- Using one-tailed test (should be two-tailed)
- Mixing up Group 1 and Group 2 data
- Incorrect calculation of degrees of freedom

---

## Hypotheses (Standard Format)

**For ALL quiz questions:**

**H₀ (Null Hypothesis):**
There is no difference in mean program outcomes between students with one
concentration and students with no concentration.
- μ₁ = μ₂

**H₁ (Alternative Hypothesis):**
There is a difference in mean program outcomes between the two groups.
- μ₁ ≠ μ₂

**Significance Level:** α = 0.05 (two-tailed)

---

## Time-Saving Tips for Quiz

✍️ **Prepare template write-up:**
- Have APA format ready
- Just fill in the numbers

📋 **Work systematically:**
- Do all calculations first
- Write all 5 responses at end
- Check each answer before submitting

🎯 **Focus on what matters:**
- Test selection (easy - always independent t-test!)
- Accurate descriptive statistics
- Correct p-value
- Proper interpretation

---

## If You Get Stuck...

**Can't remember the formula?**
→ Use Python (see my-python-guide.md) - scipy.stats.ttest_ind() handles everything!

**Unsure if significant?**
→ Just check: p < 0.05? If yes = significant. If no = not significant.

**Forgot how to write it up?**
→ Use template from this cheat sheet!

---

## Final Reminders

✅ All quiz questions use **the same test** (independent samples t-test)

✅ **Two-tailed test** (unless specifically told otherwise)

✅ Report: M, SD, n, t, df, p

✅ Interpret: Is p < 0.05? Then significant!

✅ **Time management:** Each question = ~6 minutes (5 questions in 30 min)

**You've got this! 🎓**
