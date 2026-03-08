# Python t-Test Quick Reference Guide

**For DSRT 734 R.3 Residency Quiz**

---

## Why Use Python for the Quiz?

### ✅ Advantages (Especially for Data Engineers!)

**For You:**
- ✅ **Already proficient** - Leverage your Python skills
- ✅ **Reproducible** - Save exact calculations
- ✅ **Professional** - Uses same tools as your work
- ✅ **Precise** - Full control over all calculations
- ✅ **Automated** - One function, use 5 times

**Technical Benefits:**
- ✅ **scipy.stats** - Industry-standard statistical library
- ✅ **Formatted output** - Auto-generates APA write-ups
- ✅ **No manual entry** - Less prone to copy/paste errors
- ✅ **Portable** - Works on any computer with Python

### ⚠️ Considerations

- Need Python environment (Jupyter recommended)
- Requires basic Python knowledge
- One-time setup (5-10 minutes)

---

## Quick Start: Which Tool to Use?

| Tool | Best For | Setup Time |
|------|----------|------------|
| **Jupyter Notebook** ⭐ | Interactive analysis, quiz conditions | 2 min |
| **Google Colab** | No Python installed, cloud-based | 1 min |
| **VS Code + Python** | Already have setup | 0 min |
| **Python Script** | Command-line preference | 2 min |

**For the quiz: Use Jupyter Notebook or Google Colab** ⭐

---

## Installation & Setup

### Option 1: Jupyter Notebook (Recommended)

#### If You Have Python Installed:

```bash
# Install required packages
pip install numpy scipy jupyter

# OR if using conda:
conda install numpy scipy jupyter
```

#### If You DON'T Have Python:

**Fastest: Use Anaconda (includes everything)**

1. Download Anaconda: https://www.anaconda.com/download
2. Install Anaconda
3. Open "Anaconda Navigator"
4. Click "Jupyter Notebook"

**Already includes:** numpy, scipy, jupyter!

---

### Option 2: Google Colab (No Installation!)

**Best for:** No Python installed, need quick access

1. Go to: https://colab.research.google.com/
2. Click "New notebook"
3. Libraries already installed! (numpy, scipy included)
4. Upload `my-ttest-quiz.ipynb` OR create new notebook

**Advantages:**
- ✅ Zero setup
- ✅ Free
- ✅ Cloud-based (access anywhere)
- ✅ Auto-saves to Google Drive

**How to use your notebook in Colab:**
1. Go to Google Colab
2. File → Upload notebook
3. Select `my-ttest-quiz.ipynb`
4. Run cells!

---

### Option 3: VS Code with Python

**If you already use VS Code:**

1. Install Python extension for VS Code
2. Install packages: `pip install numpy scipy jupyter`
3. Open `.ipynb` file in VS Code
4. Select Python kernel
5. Run cells!

---

## Python Syntax Reference

### Basic t-Test Code (Minimal Version)

```python
from scipy import stats
import numpy as np

# Your data
group1 = [61, 62, 62, 63, 63, 65, 70, 77, 77, 79]
group2 = [60, 61, 61, 62, 63, 65, 70, 77]

# Descriptive statistics
mean1 = np.mean(group1)
std1 = np.std(group1, ddof=1)  # ddof=1 for sample SD
n1 = len(group1)

mean2 = np.mean(group2)
std2 = np.std(group2, ddof=1)
n2 = len(group2)

# t-test
t_stat, p_value = stats.ttest_ind(group1, group2)

# Degrees of freedom
df = n1 + n2 - 2

# Results
print(f"Group 1: M = {mean1:.2f}, SD = {std1:.2f}, n = {n1}")
print(f"Group 2: M = {mean2:.2f}, SD = {std2:.2f}, n = {n2}")
print(f"t({df}) = {t_stat:.2f}, p = {p_value:.3f}")
```

---

## Function Reference

### scipy.stats.ttest_ind()

**Purpose:** Perform two-sample independent t-test

**Syntax:**
```python
t_statistic, p_value = stats.ttest_ind(array1, array2)
```

**Parameters:**
- `array1` - First group data (list or numpy array)
- `array2` - Second group data (list or numpy array)

**Returns:**
- `t_statistic` - The calculated t-value
- `p_value` - Two-tailed p-value

**Optional parameters:**
```python
# Equal variances assumed (default: False)
stats.ttest_ind(group1, group2, equal_var=True)

# One-tailed test (not needed for quiz!)
# Use p_value / 2 for one-tailed
```

---

### NumPy Functions

```python
import numpy as np

# Mean
mean = np.mean(data)

# Standard Deviation (SAMPLE - use ddof=1)
std = np.std(data, ddof=1)

# Count
n = len(data)

# Alternative for std (using statistics module)
import statistics
std = statistics.stdev(data)  # Already uses sample SD
```

**Important: Always use `ddof=1` for sample standard deviation!**

- `ddof=0` (default) = population SD (divides by n)
- `ddof=1` = sample SD (divides by n-1) ✅ **Use this!**

---

## Using the Provided Notebook

### File: `my-ttest-quiz.ipynb`

**Structure:**

1. **Setup Cell** - Import libraries and create analysis function
2. **Question 1-5 Cells** - Pre-loaded data (update as needed)

**Workflow:**

```
Step 1: Open notebook in Jupyter or Google Colab
   ↓
Step 2: Run Setup cell (first code cell)
   ↓
Step 3: For each question:
   - Update data arrays if needed
   - Run cell (Shift+Enter)
   - Copy APA-formatted output
   ↓
Step 4: Paste results into quiz
   ↓
Done! ✅
```

**Output includes:**
- ✅ Descriptive statistics
- ✅ Test results (t, df, p)
- ✅ Significance determination
- ✅ **APA-formatted write-up** (ready to copy/paste!)
- ✅ Concise version

---

## Quiz Day Workflow

### Before Quiz (Setup - 5 minutes):

1. **Open Jupyter Notebook or Google Colab**
2. **Load `my-ttest-quiz.ipynb`**
3. **Run the first cell** (imports + function)
4. **Test with Question 1** to verify it works
5. **Keep notebook open** during quiz

### During Quiz (Per Question - 3 minutes):

1. **Read quiz question** and data
2. **Update data arrays** in corresponding cell:
   ```python
   group1_one = [your, data, here]
   group2_none = [your, data, here]
   ```
3. **Run cell** (Shift+Enter)
4. **Copy "APA-FORMATTED WRITE-UP" section**
5. **Paste into quiz answer box**
6. **Move to next question**

**Time estimate:** ~15-20 minutes for all 5 questions!

---

## Example Output

### What You'll See:

```
======================================================================
DESCRIPTIVE STATISTICS
======================================================================
Group 1 (one concentration):
  n = 10
  M = 61.90
  SD = 9.59

Group 2 (no concentration):
  n = 8
  M = 64.88
  SD = 5.84

======================================================================
TEST RESULTS
======================================================================
Test: Two-sample independent t-test
t-statistic: -0.81
Degrees of freedom: 16
p-value (two-tailed): 0.428
Significance (α = 0.05): NO - NOT SIGNIFICANT

======================================================================
APA-FORMATTED WRITE-UP (Copy this for your answer!)
======================================================================

A two-sample independent t-test was conducted to determine whether there
was a significant difference in program outcomes between students with
one concentration and students with no concentration.
Students with one concentration (n = 10) had a mean program
outcome of 61.90 (SD = 9.59), while students with no
concentration (n = 8) had a mean program outcome of 64.88
(SD = 5.84). The difference was not statistically significant,
t(16) = -0.81, p = 0.428.

======================================================================
CONCISE VERSION
======================================================================

An independent samples t-test revealed no significant
difference in program outcomes between students with one concentration
(M = 61.90, SD = 9.59) and students with no concentration
(M = 64.88, SD = 5.84), t(16) = -0.81, p = 0.428.
```

**Just copy the APA section and paste!** ✅

---

## Troubleshooting

### "ModuleNotFoundError: No module named 'scipy'"

**Fix:**
```bash
pip install scipy
# OR
conda install scipy
```

### "No module named 'numpy'"

**Fix:**
```bash
pip install numpy
# OR
conda install numpy
```

### "Jupyter not found"

**Fix:**
```bash
pip install jupyter
# OR use Google Colab (no installation needed!)
```

### "Kernel error" in Jupyter

**Fix:**
1. Kernel → Restart Kernel
2. Run setup cell again

---

## Advanced: Creating Your Own Function

### Reusable Quiz Function

```python
def quick_ttest(g1, g2):
    """Ultra-quick t-test for quiz"""
    from scipy import stats
    import numpy as np

    # Stats
    m1, sd1, n1 = np.mean(g1), np.std(g1, ddof=1), len(g1)
    m2, sd2, n2 = np.mean(g2), np.std(g2, ddof=1), len(g2)
    t, p = stats.ttest_ind(g1, g2)
    df = n1 + n2 - 2

    # Print
    sig = "significant" if p < 0.05 else "no significant"
    print(f"An independent samples t-test revealed {sig} difference in program")
    print(f"outcomes between students with one concentration (M = {m1:.2f}, SD = {sd1:.2f})")
    print(f"and students with no concentration (M = {m2:.2f}, SD = {sd2:.2f}),")
    print(f"t({df}) = {t:.2f}, p = {p:.3f}.")
```

**Usage:**
```python
quick_ttest([61, 62, 63], [60, 61, 62])
```

---

## Keyboard Shortcuts (Jupyter)

| Action | Shortcut |
|--------|----------|
| Run cell and move to next | **Shift + Enter** |
| Run cell, stay on current | **Ctrl + Enter** |
| Insert cell below | **B** |
| Insert cell above | **A** |
| Delete cell | **DD** (press D twice) |
| Convert to Markdown | **M** |
| Convert to Code | **Y** |
| Save notebook | **Ctrl + S** |

---

## Google Colab Specific Tips

### Mounting Google Drive (to save work):

```python
from google.colab import drive
drive.mount('/content/drive')
```

### Uploading data files:

```python
from google.colab import files
uploaded = files.upload()
```

### Downloading results:

```python
from google.colab import files
files.download('results.txt')
```

---

## Before Quiz Day Checklist

- [ ] Python + scipy + numpy installed (or Google Colab ready)
- [ ] Jupyter Notebook working
- [ ] `my-ttest-quiz.ipynb` opened and tested
- [ ] Run setup cell successfully
- [ ] Test Question 1 to verify output
- [ ] Understand how to update data arrays
- [ ] Know how to run cells (Shift+Enter)
- [ ] Comfortable copying/pasting output

**Estimated setup time:** 5-10 minutes
**Quiz completion time:** 15-20 minutes (all 5 questions)

---

## Quiz Day Strategy

### Recommended Approach:

**Use Python (Jupyter Notebook)** ⭐
- Fast, professional, auto-formatted
- Use `my-ttest-quiz.ipynb`
- 3 minutes per question
- Reproducible and accurate

**Best Practice:**
- Test notebook before Saturday
- Have Google Colab ready as backup (no installation needed)
- Practice with Question 1 to verify setup

---

## Quick Reference Card (Print This!)

```python
# Import
from scipy import stats
import numpy as np

# Data
g1 = [your, data]
g2 = [your, data]

# Calculate
m1, sd1, n1 = np.mean(g1), np.std(g1, ddof=1), len(g1)
m2, sd2, n2 = np.mean(g2), np.std(g2, ddof=1), len(g2)
t, p = stats.ttest_ind(g1, g2)
df = n1 + n2 - 2

# Write-up
An independent samples t-test revealed [significant/no significant]
difference in program outcomes between students with one concentration
(M = m1, SD = sd1) and students with no concentration
(M = m2, SD = sd2), t(df) = t, p = p.
```

**Remember:**
- ✅ Use `ddof=1` for sample SD
- ✅ Two-tailed test (default)
- ✅ Significant if p < 0.05
- ✅ Always report: M, SD, n, t, df, p

---

**You've got this! Python makes it easy! 🐍🎓**
