---
title: Flickr Internship
desc: Optimized AWS Lambda cloud compute, reducing cost by 92% while increasing performance by 39%.
tags: [Python, AWS, Cloud Computing, Performance Optimization, Distributed Systems, Cost Modeling, Production Systems]
kinds: [work]
org: Flickr
role: Software Engineer
start: Summer 2023
resume: true
---

### Overview
During my internship at Flickr, I optimized a production AWS Lambda workflow used to repair and reprocess corrupted user photos. By tuning memory and concurrency settings using real performance data, I significantly reduced cloud compute costs while improving throughput.

### Impact
- **91.79% reduction** in Lambda compute cost  
- **38.5% performance increase**  
- Improved efficiency of a **production-critical pipeline** operating on billions of photos

### The Problem
AWS Lambda pricing is based on **allocated memory × execution time (GB-seconds)**.  
However, memory allocation also implicitly controls:
- Available vCPUs
- Maximum effective concurrency
- Job parallelism and throughput

This creates non-obvious tradeoffs:
- Increasing memory raises cost but can reduce runtime
- Increasing threads improves throughput but requires more memory

The optimal configuration cannot be inferred directly from AWS documentation.

### My Approach
- Benchmarked real production workloads using controlled Lambda invocations
- Collected performance data via Splunk, including:
  - Median job time
  - Worst-case job time
  - Total batch runtime
- Built a cost and throughput model in Google Sheets to evaluate:
  - Jobs per second
  - Jobs per second per thread
  - Jobs per second per vCPU
  - Cost per job
- Used linear regression to empirically derive the relationship between Lambda memory allocation and available vCPUs (not publicly documented)


<div class="sheet-embed">
  <iframe
    src="https://docs.google.com/spreadsheets/u/1/d/19H1BDZkCQqz7b8ipQNAje68PYwAAiDyk0z8sUmZMxCk/htmlembed?gid=225999173&rm=minimal"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

### Key Metrics
```text
Worst Jobs / Sec    = Threads / Longest Job Time
Median Jobs / Sec   = Threads / Median Job Time
Avg Jobs / Sec      = Batch Size / Total Elapsed Time
Jobs / Sec / Thread = Batch Size / Total Time / Threads
Jobs / Sec / CPU    = Batch Size / Total Time / vCPUs
Cost / Job          = (RAM_GB × Total Time) / Batch Size
```

### Result
After testing dozens of configurations, the optimal production setting was:
- 4 threads
- 480 MB RAM
This configuration minimized cost per job while maintaining high throughput and stable tail latency.

### What This Shows
- Real-world cloud performance optimization
- Data-driven decision making under cost constraints
- Understanding of how cloud abstractions map to physical compute
- Experience working on live production systems