---
title: r/place Analysis
desc: Data analysis of Reddit’s r/place database.
tags: [Python, Data Analysis, Visualization, Large Datasets, Statistics]
---

### Overview
This project is an exploratory and quantitative analysis of Reddit’s **r/place** dataset, a large-scale collaborative canvas where millions of users placed colored pixels over time. The dataset captures both individual user behavior and emergent large-scale coordination patterns.

Using Python, I analyzed the full event history to uncover structural patterns, persistence, and anomalies within the canvas.

---

### Dataset
The r/place dataset consists of timestamped pixel placements, including:
- Pixel coordinates
- Color values
- Temporal ordering of changes

The scale of the data required careful preprocessing to efficiently reconstruct the canvas state over time and analyze long-running behaviors.

---

### Persistent Pixels
One analysis focused on identifying pixels that were **never changed** throughout the entire event.

![Pixels that remained unchanged for the entire event](/r-place-untouched.png)

Only **3,966 pixels** remained untouched from start to finish. These pixels tend to cluster in areas of strong coordination or low visual salience, revealing how stability emerges in an otherwise highly adversarial environment.

---

### Hidden Patterns
By visualizing pixel activity density, subtle patterns become visible that are almost impossible to notice during live participation.

![Hidden low-activity patterns in the canvas](/r-place-crewmates.png)

This analysis revealed numerous small figures—most notably **hidden Among Us crewmates**—embedded across the canvas, preserved through coordinated low-frequency edits.

---

### Temporal Averaging
To study long-term structure, I computed **time-averaged pixel values**, effectively showing what the canvas looks like when short-lived conflicts are smoothed out.

![Time-averaged r/place canvas](/r-place-statistics.png)

This highlights dominant regions, persistent color blocks, and areas of repeated contention.

---

### Case Study: Canada
A focused analysis on the Canadian flag demonstrated how averaging pixel values over time reveals the *intended* structure of the artwork despite constant edits and vandalism.

![Canada flag averaged over time](/r-place-canada.png)

This visualization gained significant traction on Reddit, receiving **over 45,000 upvotes**, and served as a clear demonstration of how statistical aggregation can recover signal from noisy, adversarial data.

---

### Results and Insights
- Identified thousands of pixels that were never modified
- Revealed hidden low-activity patterns embedded in the canvas
- Demonstrated how temporal averaging exposes persistent structure
- Showed how large-scale coordination emerges from simple local rules

---

### What This Shows
- Working with large, real-world datasets
- Designing custom preprocessing pipelines
- Extracting structure from noisy, adversarial data
- Creating visualizations that reveal non-obvious patterns
- Communicating technical results to a broad audience
