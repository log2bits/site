---
title: FRC Computer Vision
desc: OpenCV-based vision system to detect game objects and estimate 3D pose using AprilTags.
tags: [Python, Java, Computer Vision, OpenCV, Robotics, Pose Estimation, AprilTags]
kinds: [project, leadership]
resume: true
---

### Overview
This project implements a real-time computer vision system for an FRC robot, used both to detect game objects and to estimate the robot’s position on the field. The system combines classical image processing techniques with AprilTag-based pose estimation to support autonomous decision making and closed-loop control.

The vision pipeline was designed to run reliably during competition conditions, balancing accuracy, latency, and robustness.

---

### Game Object Detection
To detect game pieces such as cones and cubes, the system uses OpenCV-based color modeling and histogram backprojection.

The process involves:
- Collecting reference images of each object class
- Converting frames into HSV color space
- Computing normalized color histograms for each object type
- Using histogram backprojection to highlight candidate regions
- Applying thresholding and morphological operations to reduce noise

This approach allows the robot to reliably segment objects under varying lighting conditions without requiring machine learning models or large datasets.

---

### AprilTag Detection and Pose Estimation
For global localization, the system detects AprilTags placed around the field and estimates the camera’s 3D pose relative to them.

Key steps include:
- Detecting AprilTags using OpenCV’s ArUco/AprilTag modules
- Refining detected corners for subpixel accuracy
- Solving the Perspective-n-Point (PnP) problem to recover rotation and translation vectors
- Converting camera pose into field-relative position estimates

The pipeline supports both single-tag localization and multi-tag board configurations for improved stability and accuracy.

---

### Camera Calibration
Accurate pose estimation requires precise camera calibration. The system uses:
- A calibrated intrinsic camera matrix
- Radial and tangential distortion coefficients
- Optional undistortion for improved geometric consistency

This ensures that pose estimates remain reliable across the camera’s field of view.

---

### Real-Time Constraints
The vision system is designed to run continuously during matches, with:
- Low-latency frame processing
- Graceful handling of dropped frames
- Live visualization for debugging and tuning
- Clean separation between perception and control logic

The same core algorithms were implemented in both Python and Java to support rapid prototyping and deployment on the competition robot.

---

### What This Shows
- Applying classical computer vision techniques to real-world robotics problems
- Designing robust perception pipelines without machine learning dependencies
- Solving 3D pose estimation problems using geometric methods
- Building real-time systems under hardware and competition constraints
- Integrating perception outputs into larger autonomous robotics systems
