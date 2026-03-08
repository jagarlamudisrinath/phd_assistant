# Weeks 13-14 Quiz - My Answers

**Student**: Srinath Jagarlamudi
**Date**: November 30, 2025
**Status**: Draft saved (pending submission)

---

## Question 1 (10 points)

**Scenario**: A researcher is interested in testing if there is a relationship between the amount of time a person spends reading in a week and their grade point average in school. Which is the best test for the researcher to run?

**Options**:
- A. Independent samples t-test
- B. Pearson's correlation
- C. ANOVA
- D. Pearson's chi-square

**My Answer**: **B. Pearson's correlation**

**Rationale**:
- Time spent reading = continuous variable
- GPA = continuous variable
- Research question asks about "relationship" between two variables
- Both variables are interval/ratio scale
- Pearson's correlation is appropriate for testing relationships between two continuous variables

---

## Question 2 (10 points)

**Scenario**: A researcher wants to test if gender is related to a certain disease. They collect the following data. What is the correct test for them to run?

| | Disease Yes | Disease No |
|--|-------------|------------|
| Male | 12 | 21 |
| Female | 7 | 23 |

**Options**:
- A. Pearson's Chi-Square
- B. Fisher's Exact Test
- C. Pearson's Correlation
- D. Spearman's rho correlation

**My Answer**: **B. Fisher's Exact Test**

**Rationale**:
- Gender = categorical (2 levels)
- Disease status = categorical (2 levels)
- This is a 2x2 contingency table
- Total n = 12 + 21 + 7 + 23 = 63
- Some expected cell frequencies may be small
- Fisher's Exact Test is preferred for 2x2 tables with small sample sizes or when expected cell counts < 5
- Chi-Square is less reliable with small expected frequencies

---

## Question 3 (10 points)

**Scenario**: A researcher is interested in testing if the rank of a hospital according to US News Best Hospital Rankings is related to the number of physicians they employ. What is the correct test for the researcher to run?

**Options**:
- A. Pearson's correlation
- B. Spearman's rho correlation (rs)
- C. Independent samples t-test
- D. Pearson's chi-square

**My Answer**: **B. Spearman's rho correlation (rs)**

**Rationale**:
- Hospital rank = ordinal variable (1st, 2nd, 3rd, etc.)
- Number of physicians = continuous variable
- Research question asks about relationship between two variables
- When one variable is ordinal (ranked data), Spearman's rho is appropriate
- Pearson's requires both variables to be continuous and normally distributed

---

## Question 4 (5 points - Extra Credit)

**Scenario**: A school has three different teams of students (Red team, Blue team, and Green Team). They want to test if the average hours of weekly homework is equal between the three teams. They collect a random sample of students and find out how many hours of homework they have in an average week. The hours of homework has a normal distribution. What is the correct test for the school to run?

**Options**:
- A. Paired samples t-test
- B. ANOVA with a post hoc test
- C. Independent samples t-test
- D. Wilcoxon signed-rank test

**My Answer**: **B. ANOVA with a post hoc test**

**Rationale**:
- Independent variable: Team membership (3 groups: Red, Blue, Green)
- Dependent variable: Hours of homework (continuous)
- Data is normally distributed
- Comparing means across 3+ groups = ANOVA
- Post hoc test needed to determine which specific groups differ if ANOVA is significant
- Cannot use t-test because there are more than 2 groups

---

## Question 5 (5 points - Extra Credit)

**Scenario**: A school has 52 teachers who have been teaching last year and this year. The summer between the two years they had a training for all the teachers to be more effective in their teaching. The school wants to test if the teachers scored significantly better this year on their course evaluations compared to last year. What is the best test for them to run? The evaluation scores are scored between 0 and 100 and are normally distributed.

**Options**:
- A. Pearson's correlation
- B. Wilcoxon signed-rank test
- C. ANOVA with a post hoc test
- D. Paired samples t-test

**My Answer**: **D. Paired samples t-test**

**Rationale**:
- Same 52 teachers measured twice (before and after training)
- This is a repeated measures / within-subjects design
- Dependent variable: Evaluation scores (continuous, 0-100)
- Data is normally distributed
- Paired samples t-test is appropriate for comparing two related means
- Not Wilcoxon because data is normally distributed (parametric test preferred)

---

## Question 6 (10 points)

**Scenario**: A teacher has changed their teaching style for this year and wants to test if their students' grades are significantly different this year compared to their students' grades last year. The students are different people. Assuming the grades are symmetrically distributed and scored between 0% and 100%, what is the correct test for the teacher to run?

**Options**:
- A. Mann-Whitney U test
- B. Independent samples t-test
- C. Paired samples t-test
- D. Pearson's correlation

**My Answer**: **B. Independent samples t-test**

**Rationale**:
- Two groups: This year's students vs. Last year's students
- Students are **different people** (independent samples, not paired)
- Dependent variable: Grades (continuous, 0-100%)
- Data is symmetrically distributed (indicates normality)
- Independent samples t-test compares means of two independent groups
- Not paired t-test because subjects are different people
- Not Mann-Whitney because data is symmetric/normal (parametric test preferred)

---

## Summary

| Question | Points | My Answer | Confidence |
|----------|--------|-----------|------------|
| Q1 | 10 | B. Pearson's correlation | High |
| Q2 | 10 | B. Fisher's Exact Test | High |
| Q3 | 10 | B. Spearman's rho | High |
| Q4 | 5 (EC) | B. ANOVA with post hoc | High |
| Q5 | 5 (EC) | D. Paired samples t-test | High |
| Q6 | 10 | B. Independent samples t-test | High |

**Expected Score**: 40/40 + 10/10 EC = 50 points
