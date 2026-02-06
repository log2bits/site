---
title: FRC Swerve Drive
desc: Odometry, kinematics, and simulation for an FRC swerve drive.
tags: [Java, Robotics, Control Theory, Kinematics, Odometry, Simulation, State Estimation]
---

## FRC Swerve Drive - Odometry, Kinematics, and Simulation

**Role:** Lead Programmer & Student Mentor  
**Focus:** Robotics control, state estimation, simulation, systems engineering

### Overview
This project is a complete, from-scratch implementation of a **coaxial swerve drive system** for an FRC robot. It spans kinematics, odometry, control theory, autonomous motion planning, and full physics simulation.

I led the design and implementation of both the hardware integration and the software stack, enabling precise omnidirectional movement, robust autonomous driving, and realistic simulation without requiring access to the physical robot.

---

### Swerve Drive Motion Model
Unlike tank or mecanum drive systems, swerve drive allows a robot to translate and rotate simultaneously by independently controlling the direction and velocity of each wheel module.

![Swerve translation, rotation, and combined motion](/diagram.png)

This motion model requires converting chassis-level commands into per-module steering angles and wheel velocities using vector algebra and kinematics.

---

### Coaxial Swerve Module
Each module uses a coaxial design where steering and drive are mechanically coupled but independently controlled.

![Internal coaxial swerve gearbox](/gearbox.png)

![Assembled swerve module](/swerve-module.png)

This design enables compact packaging, a low center of gravity, and precise control over both wheel direction and speed.

---

### Mechanical Design
The swerve modules were designed and analyzed as full mechanical systems rather than treated as black boxes.

![Swerve module CAD blueprint](/swerve-module-blueprint.png)

This required accounting for gear ratios, backlash, structural rigidity, and sensor placement to ensure accurate and repeatable control.

---

### Robot Architecture
The full robot integrates four swerve modules with onboard computation, sensing, and power distribution.

![Labeled robot chassis with electronics and modules](/labeled-robot-chassis.png)

Encoders, motor controllers, a gyroscope, and vision sensors feed into the control system to support real-time odometry and closed-loop control.

---

### State Estimation and Odometry
Robot pose is estimated by fusing:
- Wheel encoder data
- Gyroscope measurements
- Vision-based localization

Filtering techniques are used to reduce noise and drift, allowing the robot to maintain accurate position estimates even under collisions or wheel slip.

---

### Autonomous Motion and Path Planning
The robot supports fully autonomous driving using preplanned and dynamic trajectories.

![Real-time autonomous pathfinding simulation](/pathfinding.gif)

The simulation shows a virtual field where the robot plans paths in real time and actively reroutes around **moving obstacles**, allowing autonomous logic to be tested and tuned without physical hardware.

---

### Full Physics Simulation
A complete physics simulation models:
- Motor dynamics and torque curves
- Wheel inertia and friction
- Battery voltage and current draw
- Chassis motion and field interaction

The same control code runs identically in simulation and on the real robot, enabling safe development, debugging, and tuning entirely in software.

---

### What This Shows
- Applying kinematics and control theory to real hardware
- Designing reliable state estimation systems
- Building accurate simulations for complex physical systems
- Translating abstract math into robust, real-world behavior
- Leading and delivering a large, multidisciplinary engineering project
