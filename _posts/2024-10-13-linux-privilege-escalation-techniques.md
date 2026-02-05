---
layout: post
title: Linux Privilege Escalation Techniques
date: 2024-10-13 11:15:00
description: Methods for gaining elevated access on Linux systems during security assessments
tags: linux privilege-escalation penetration-testing
categories: security
---

Privilege escalation is a critical phase in penetration testing, where attackers move from initial access to administrative control over Linux systems.

### Information Gathering

Initial reconnaissance should identify:

- **Kernel Version** - Potential for local exploits
- **Running Services** - Misconfigured or vulnerable services
- **User Accounts** - Available accounts and their privileges
- **Scheduled Tasks** - Cron jobs and systemd timers
- **Sudo Configuration** - Allowed commands and restrictions
- **File Permissions** - Writable system files and directories

### Common Vectors

Privilege escalation often exploits:

1. **Kernel Exploits** - Local privilege escalation vulnerabilities
2. **Sudo Misconfigurations** - Improper sudoers file settings
3. **SUID/SGID Binaries** - Programs running with elevated privileges
4. **Writable System Files** - Configuration files or scripts
5. **Cron Jobs** - Scheduled tasks running as root
6. **Capabilities** - Linux capabilities granting specific privileges
7. **Container Escape** - Breaking out of container isolation

### Methodology

Systematic approach includes:

- Enumerating system information comprehensively
- Identifying potential vulnerabilities and misconfigurations
- Prioritizing exploitation attempts based on likelihood of success
- Maintaining access and covering tracks (in authorized assessments)
- Documenting findings for remediation

### Useful Tools

Common enumeration scripts:

- **LinEnum** - Linux enumeration script
- **Linux Smart Enumeration** - Detailed system analysis
- **PEASS-ng** - Privilege escalation automated scripts
- **GTFOBins** - Database of Unix binaries for privilege escalation

### Prevention Strategies

System administrators should:

- Apply security patches promptly
- Follow principle of least privilege
- Audit sudo configurations regularly
- Monitor for suspicious activity
- Use security modules like SELinux or AppArmor
- Implement file integrity monitoring

Understanding privilege escalation techniques is essential for both offensive security testing and defensive hardening of Linux systems.
