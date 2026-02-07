---
title: Wordle Solver
desc: Heavily optimized Wordle solver written in Python.
tags: [Python, Algorithms, Search, Optimization, Probability, Game Solving]
kinds: [project]
resume: true
---

### Overview
This project implements a near-optimal Wordle solver by modeling the game as a constrained search problem. Rather than relying on heuristics or letter-frequency tricks, the solver evaluates guesses by how much information they are expected to reveal about the secret word.

In practice, the solver averages **3.428 guesses per game**, compared to **3.421 guesses** for a theoretically perfect algorithm that is over **100× more expensive to compute**. This makes the solver effectively optimal while remaining fast enough for interactive use.

### Core Approach
At each step, the solver:
1. Simulates a candidate guess against every remaining possible solution
2. Records the resulting color feedback patterns
3. Groups solutions by identical feedback
4. Scores the guess by the expected size of the remaining solution set

The best guess is the one that most evenly partitions the search space, minimizing uncertainty after the guess.

### Correct Guess Simulation
A key challenge in Wordle solvers is handling **duplicate letters** correctly.  
Naïve implementations often overcount yellow matches, leading to invalid solution elimination.

This solver explicitly tracks how many instances of each letter can legally be marked as yellow or green based on prior matches, ensuring that simulated feedback exactly matches Wordle’s rules.

### Efficient Scoring
Rather than explicitly simulating every possible follow-up guess, the solver computes expected remaining solutions by:
- Counting how many solutions produce each feedback pattern
- Computing the weighted average of the resulting partition sizes

This produces the same expected value as a full brute-force search, but at a fraction of the computational cost.

### Adversarial Variant: Evil Wordle
The project also includes `evil_wordle.py`, an adversarial version of the game where:
- The secret word is not fixed in advance
- The game dynamically chooses feedback patterns
- Feedback is selected to **minimize information gain** while remaining valid

This variant stress-tests the solver and demonstrates how the same modeling framework applies to adversarial problem settings.

### What This Shows
- Modeling games as formal search and optimization problems
- Using expected-value reasoning to guide decisions
- Designing algorithms that balance optimality with runtime constraints
- Careful handling of edge cases in simulation-heavy code
