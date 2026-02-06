---
title: Steam Scraper & Analysis
desc: Web scraping and analysis of over 150,000 games on Steam.
tags: [Python, Web Scraping, Data Analysis, Modeling, Large Datasets, Statistics]
---

## Steam Scraper & Analysis — Large-Scale Game Performance Modeling

**Tech:** Python  
**Focus:** Web scraping, data cleaning, statistical analysis, modeling

### Overview
This project is a large-scale data collection and analysis effort focused on understanding **game performance on Steam**. Using Python, I scraped and analyzed data for **over 150,000 games**, built derived metrics to estimate sales and revenue, and developed a model to evaluate whether games performed better or worse than expected.

Steam does not provide a public, comprehensive dataset for this information, so the entire pipeline—from data acquisition to modeling—was built manually.

---

### Data Acquisition
Steam exposes several undocumented or partially documented APIs, which required experimentation and reverse engineering to use effectively.

Key endpoints included:
- The Steam app list API to enumerate all games
- The Steam store API for per-game metadata
- The Steam reviews API for aggregate review statistics

Because the APIs are **rate-limited** and do not support high concurrency, data collection had to be throttled carefully. Scraping the full dataset took **multiple days of continuous execution**, and several runs had to be restarted due to corrupted or incomplete responses.

---

### Data Cleaning and Feature Engineering
Raw API responses varied significantly in structure and quality. Extensive post-processing was required to normalize the data and remove invalid entries.

Derived metrics included:
- `years_since_release` to normalize time-based effects
- `positivity`, defined as the percentage of positive reviews
- Total review counts aggregated across all games

To estimate the size of Steam’s user base, I probed sequential Steam account IDs using external tooling and determined that there were approximately **1.49 billion accounts** at the time of data collection.

From this, I inferred that roughly **4.55% of users leave reviews**, enabling estimation of total sales per game based on review counts.

---

### Revenue Estimation
Using estimated sales, pricing data, and Steam’s known revenue cut structure:
- Approximate game revenue was computed
- Steam’s total revenue from its 30% cut was estimated at **$3.69 billion**
- Average spending per Steam account was estimated at **$20.89**

These calculations required combining scraped data with known platform policies and statistical assumptions.

---

### Performance Modeling
The goal of the analysis was to determine **relative performance**—whether a game earned more or less revenue than expected given its characteristics.

Several approaches were tested:
- **Review positivity alone**, which proved insufficient
- **Category- and genre-based averaging**, which resulted in extremely high error
- A **trained model** using multiple features, including:
  - Price
  - Review positivity
  - Years since release
  - Genres and categories
  - Game type
  - Supported platforms

The final model produced a ranked list of games by relative performance, identifying titles that dramatically overperformed or underperformed expectations.

---

### Results
- Successfully collected and processed data for over **150,000 games**
- Built a multi-stage pipeline for scraping, cleaning, and modeling
- Identified performance outliers across the Steam ecosystem
- Produced a full ranked dataset of relative game performance

---

### What This Shows
- Designing resilient web scraping pipelines under real-world constraints
- Cleaning and normalizing large, inconsistent datasets
- Creating derived metrics from incomplete information
- Applying statistical reasoning and modeling to messy real data
- Persisting through long-running, failure-prone data collection tasks
