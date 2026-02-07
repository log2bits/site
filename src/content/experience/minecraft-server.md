---
title: Minecraft Server Infrastructure
desc: Custom Minecraft server hosted on AWS EC2 using Docker and Pterodactyl.
tags: [AWS, Linux, Cloud Infrastructure, DNS, Systems Configuration, DevOps]
kinds: [project]
resume: true
---

### Overview
This project is a custom Minecraft server deployed on **AWS EC2**, focused on learning and applying real-world infrastructure concepts such as cloud provisioning, DNS configuration, remote system management, and complex service configuration.

Rather than relying on managed hosting, the server was built and maintained directly on a Linux virtual machine, providing hands-on experience with cloud environments and production-style system setup.

---

### Cloud Infrastructure
The server runs on an AWS EC2 instance configured manually, including:
- Instance provisioning and resource sizing
- Network configuration and firewall rules
- Secure remote access using SSH
- Monitoring uptime and performance

In addition to the game server itself, I configured **DNS records** to support a custom domain, learning how to route traffic correctly and manage public-facing services.

---

### Linux and Remote System Management
The server is administered entirely through the Ubuntu command line. This involved:
- Navigating and managing remote file systems
- Editing configuration files directly on the server
- Inspecting logs to debug startup, runtime, and plugin errors
- Managing processes and ensuring services restart cleanly

This workflow mirrors how real production servers are maintained.

---

### Plugin Configuration and Integration
The server runs **dozens of plugins**, many of which interact with each other in subtle ways. A large portion of the work involved:
- Resolving plugin compatibility issues
- Managing version mismatches across updates
- Tuning configuration parameters for stability and performance
- Iteratively testing changes to avoid regressions

This required careful debugging, documentation, and an understanding of how independent systems interact within a shared runtime.

---

### External Service Integration
The server integrates with external services using multiple APIs, including:
- A Discord plugin that synchronizes in-game chat with Discord channels
- A Discord bot that mirrors messages between platforms
- Role and permission syncing across systems

These integrations required coordinating authentication, message handling, and event flow between the game server and external services.

---

### Results
- Stable long-running server hosted entirely on self-managed infrastructure
- Custom domain routing to cloud-hosted services
- Reliable cross-platform chat synchronization
- Practical experience managing a multi-service system in a cloud environment

---

### What This Shows
- Provisioning and managing cloud infrastructure using AWS
- Working confidently in Linux-based server environments
- Understanding DNS and public-facing service configuration
- Debugging and configuring complex plugin-based systems
- Integrating third-party APIs into a cohesive deployment
