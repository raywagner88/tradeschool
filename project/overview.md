# Trade School Management System — Project Overview

## System Description

Your platform is a modern, cloud-based, multi-tenant SIS + operational management system specifically built for trade schools, vocational schools, and certificate programs.

Unlike K-12 and university SIS platforms, trade schools require:

- **Clock-hour attendance** - Precise tracking of instructional hours for compliance
- **Competency-based academics** - Skills and mastery tracking beyond traditional grades
- **High instructor involvement** - Direct instructor verification and assessment workflows
- **Flexible programs with rolling admissions** - Continuous enrollment cycles, not semester-based
- **Fast-paced cohort scheduling** - Rapid cohort creation and session management
- **SAP (Satisfactory Academic Progress) rules** - Combined attendance pace and academic performance monitoring
- **Tight integration with finance, billing, and job placement** - End-to-end operational workflows

This system is designed to provide an all-in-one operational layer for schools while also supporting your SaaS business model with full multi-tenancy, usage-based billing, and internal platform administration controls.

## Technology Stack

- **Backend**: Ruby on Rails 8.1+
- **Frontend**: Inertia.js with Nuxt UI
- **Database**: PostgreSQL
- **Job Processing**: Solid Queue
- **Caching**: Solid Cache
- **Real-time**: Solid Cable

## Epic Summaries

The platform is made up of modular epics, each representing a large, cohesive subsystem:

### 0. Application Foundation
**Status**: Mandatory - Build First

This epic establishes the foundational infrastructure for the entire application. It sets up Rails with Inertia.js, Vue.js, and Nuxt UI, installs and configures essential gems (Devise, Pundit, Audited, Jbuilder), sets up js-routes, and creates the initial application layout structure using the Nuxt UI dashboard template.

This epic is mandatory to build first as it provides the technical foundation that all other epics depend upon.

[View Epic Details →](./epics/00-application-foundation.md)

### 1. Product Admin Portal (Platform Console)
**Status**: Mandatory - Build First

This is the internal control center for the SaaS itself—not used by schools but by your team. It allows platform operators to create organizations, manage subscriptions, adjust billing, set feature flags, impersonate users, view system health, monitor queues/events, and audit all activity. It is the heart of support, onboarding, debugging, and operational oversight.

[View Epic Details →](./epics/01-product-admin-portal.md)

### 2. Multi-Tenancy & Organization Foundations
**Status**: Mandatory - Foundation Epic

Defines how multiple schools exist independently within the system. Includes org creation, subdomain routing, tenant isolation, asset separation, branding, org-level settings, and lifecycle states (active, suspended, termination countdown). It also includes audit logs and service boundaries.

All school-facing features depend on this foundation.

[View Epic Details →](./epics/02-multi-tenancy-foundations.md)

### 3. RBAC — Roles, Permissions & Employment Model
**Status**: Mandatory - Security Foundation

Defines users, positions, and granular permissions within an organization. Every school staff member gets permissions through Employment relationships, and roles can be blended from base permissions, position-based rules, and overrides. This epic ensures the system is secure, flexible, and supports future modules.

[View Epic Details →](./epics/03-rbac.md)

### 4. Directory — Students, Staff & Contacts
**Status**: Mandatory - Core Data

Core database of people. Students include demographics, documents, education history, contacts, and status. Staff include certifications, employment positions, and permission sources. Guardians / emergency contacts also live here.

Provides the lookup foundation for Admissions, Scheduling, Attendance, Academics, and Finance.

[View Epic Details →](./epics/04-directory.md)

### 5. Admissions & Enrollment
**Status**: Mandatory - Revenue Engine

Handles inquiries, applications, workflows, electronic signatures, acceptance packets, deposit collection, and transition into active students. This epic covers configurable stages and forms, staff review processes, document collection, and final enrollment.

This is the revenue engine for schools.

[View Epic Details →](./epics/05-admissions-enrollment.md)

### 6. Programs, Courses/Modules & Curriculum
**Status**: Mandatory - Academic Structure

Defines what schools teach: programs, required modules, competencies/skills, and hour requirements. Supports versions and time-based changes. Sets the academic structure which Scheduling, Academics, SAP, and Financial Aid depend on.

[View Epic Details →](./epics/06-programs-curriculum.md)

### 7. Cohorts & Scheduling
**Status**: Mandatory - Scheduling System

Creates cohorts, assigns instructors, defines start/end patterns, generates class sessions, tracks capacity, and manages calendars. Includes automated session generation (daily, weekly, block-format) and resource assignment.

This epic feeds Attendance, Academics, and SAP.

[View Epic Details →](./epics/07-cohorts-scheduling.md)

### 8. Attendance & Timeclock (Clock-Hour Tracking)
**Status**: Mandatory - Mission Critical

Mission-critical for trade schools. Provides kiosk mode (QR/PIN/badge), check-in/out flows, policy engines (grace periods, daily max), make-up hours workflow, fraud detection, instructor verification, and detailed analytics.

Attendance feeds SAP, Reporting, and some Billing scenarios.

[View Epic Details →](./epics/08-attendance-timeclock.md)

### 9. Academics — Grades, Competencies & Assessments
**Status**: Mandatory - Academic Tracking

Instructor workflows for recording grades, signing off skills/competencies, tracking assessments, managing retakes, and providing remediation.

Students can view progress, and later transcripts/certificates can be generated.

Academics integrates tightly with SAP (academic performance side).

[View Epic Details →](./epics/09-academics.md)

### 10. SAP — Satisfactory Academic Progress
**Status**: Mandatory - Compliance Critical

Calculates SAP status combining attendance pace and academic mastery. Includes rules configuration (per org), automated notifications, staff review queues, reporting, and packet exports for accreditation.

This epic integrates data from Attendance and Academics.

[View Epic Details →](./epics/10-sap.md)

### 11. Finance — Ledgers, Payments, Charges & Deposits
**Status**: Mandatory - Financial Operations

Handles application fees, enrollment deposits, tuition charges, ledger entries, refunds, adjustments, receipts, and Stripe payment integration. Provides exports for QuickBooks and finance reports.

Supports Admissions (deposits) and Financial Aid.

[View Epic Details →](./epics/11-finance.md)

### 12. Financial Aid Management
**Status**: Mandatory - Compliance Critical

Comprehensive financial aid management for trade schools participating in Title IV programs. Handles FAFSA processing, Pell Grants, federal loans, financial aid packaging, award letters, disbursements, Return to Title IV (R2T4) calculations, and federal reporting requirements.

[View Epic Details →](./epics/12-financial-aid.md)

### 13. Billing — SaaS Subscription, MAU Usage & Invoicing
**Status**: Mandatory - SaaS Operations

Manages billing for your company. Includes plans, base fees, MAU measurement, Stripe subscription sync, invoice management, overage calculations, suspensions, pauses, and admin overrides.

Feeds into Product Admin Portal and multi-tenant org lifecycle.

[View Epic Details →](./epics/13-billing.md)

### 14. Student Portal
**Status**: Mandatory - Student Experience

Comprehensive student-facing portal providing unified access to all student information, services, and self-service capabilities. Students can view grades, attendance, schedules, financial information, submit documents, make payments, and access resources.

[View Epic Details →](./epics/14-student-portal.md)

### 15. Instructor Portal
**Status**: Mandatory - Instructor Experience

Comprehensive instructor-facing portal providing unified access to all instructor tools and information. Instructors can manage classes, enter grades, verify attendance, assess competencies, communicate with students, and view performance analytics.

[View Epic Details →](./epics/15-instructor-portal.md)

### 16. Learning Resources Management
**Status**: Upcoming

Manages digital learning resources including course materials, documents, videos, links, and other educational content. Resources can be assigned to programs, modules, or sessions, and access is tracked for students and instructors.

[View Epic Details →](./epics/16-learning-resources.md)

### 17. Transcript & Certificate Generation
**Status**: Mandatory - Documentation

Generates official and unofficial transcripts, certificates, diplomas, and digital credentials. Supports multiple formats, digital signatures, verification services, and compliance with accreditation standards.

[View Epic Details →](./epics/17-transcript-certificate.md)

### 18. Compliance & Regulatory Management
**Status**: Upcoming

Comprehensive compliance and regulatory management system for trade schools. Tracks state licensing requirements, accreditation standards, regulatory reporting, audit trails, document retention policies, and compliance calendars.

[View Epic Details →](./epics/18-compliance-regulatory.md)

### 19. Integration Hub
**Status**: Upcoming

Centralized integration platform for connecting with third-party systems including LMS platforms, accounting software, government systems, background check services, testing platforms, and other external systems.

[View Epic Details →](./epics/19-integration-hub.md)

### 20. Advanced Workflow Automation
**Status**: Upcoming

Advanced workflow automation system for creating multi-step approval workflows, conditional logic, branching workflows, and automated business processes. Supports workflow templates, analytics, and integration with all system features.

[View Epic Details →](./epics/20-workflow-automation.md)

### 21. Data Migration & Import Tools
**Status**: Upcoming

Comprehensive data migration and import tools for onboarding schools from legacy systems, bulk data imports, data validation, error handling, and migration reporting. Supports migration from other SIS platforms, spreadsheets, and various data formats.

[View Epic Details →](./epics/21-data-migration.md)

### 22. Reporting & Analytics
**Status**: Upcoming

Cross-epic reporting of attendance, SAP, academics, enrollment funnel, financial metrics, and compliance exports. Includes dashboards, CSV downloads, and scheduled reports.

[View Epic Details →](./epics/22-reporting-analytics.md)

### 23. Communications — Email, SMS & Notifications
**Status**: Upcoming

Unified system for sending emails, SMS, in-app notifications, alerts, triggers, and logs. Integrates with Attendance (alerts), SAP (warnings), Admissions (updates), and Finance (payment confirmations).

[View Epic Details →](./epics/23-communications.md)

### 24. Externships / Job Placement
**Status**: Future

Tracks student job placements, site agreements, hours verification, employer contacts, evaluations, and outcomes for accreditation reporting.

[View Epic Details →](./epics/24-externships.md)

### 25. Career Services
**Status**: Future

Helps students with resume uploads, interview tracking, job leads, coaching interactions, and long-term outcomes.

[View Epic Details →](./epics/25-career-services.md)

### 26. Testing & Assessment Platform
**Status**: Upcoming

Comprehensive online testing and assessment platform for creating, delivering, and grading exams. Supports question banks, automated grading, proctoring integration, test security, scheduling, and detailed analytics.

[View Epic Details →](./epics/26-testing-assessment.md)

### 27. Disability Services
**Status**: Mandatory - Compliance Critical

Comprehensive disability services management for students with disabilities. Handles accommodation requests, accommodation tracking, ADA compliance reporting, testing accommodations, accessibility features, and documentation management.

[View Epic Details →](./epics/27-disability-services.md)

### 28. Veteran Services
**Status**: Mandatory - Compliance Critical

Comprehensive veteran services management for schools serving military veterans. Handles VA benefits processing, VA certification, federal reporting (VA Once, WEAMS), GI Bill tracking, veteran status management, and compliance with VA regulations.

[View Epic Details →](./epics/28-veteran-services.md)

### 29. Library Management
**Status**: Upcoming

Comprehensive library management system for physical and digital library resources. Handles book checkouts, returns, fines, catalog search, reserve materials, inventory management, and library analytics.

[View Epic Details →](./epics/29-library-management.md)

### 30. Advising & Counseling Services
**Status**: Upcoming

Comprehensive academic advising and counseling services management. Handles advising appointments, counseling sessions, student success plans, early alert system, advising notes, and student support tracking.

[View Epic Details →](./epics/30-advising-counseling.md)

### 31. Help Desk & Ticketing System
**Status**: Upcoming

Comprehensive help desk and ticketing system for managing student and staff support requests. Handles ticket creation, routing, assignment, resolution tracking, knowledge base, FAQ management, and support analytics.

[View Epic Details →](./epics/31-help-desk.md)

### 32. Tutoring Services
**Status**: Upcoming

Comprehensive tutoring services management for scheduling, tracking, and managing tutoring sessions. Handles tutor management, session scheduling, payment processing, tutor-student matching, and tutoring analytics.

[View Epic Details →](./epics/32-tutoring-services.md)

### 33. Video Conferencing Integration
**Status**: Upcoming

Integration with video conferencing platforms (Zoom, Microsoft Teams, Google Meet) for online and hybrid classes. Handles virtual classroom creation, session management, attendance tracking, recording management, and meeting links.

[View Epic Details →](./epics/33-video-conferencing.md)

### 34. International Student Services
**Status**: Future Consideration - Placeholder

Placeholder epic for potential international student services including SEVIS integration, I-20 management, F-1 visa tracking, OPT/CPT management, and international student reporting. Most trade schools do not require this feature.

[View Epic Details →](./epics/34-international-students.md)

## High-Level Flow (End-to-End)

1. **Platform Admin creates an org** (Product Admin Portal)
2. **School configures settings & roles** (Multi-Tenancy + RBAC)
3. **School enrolls students** (Admissions)
4. **Students join programs and cohorts** (Directory + Programs + Scheduling)
5. **Students clock hours** (Attendance)
6. **Instructors assess competencies** (Academics)
7. **SAP monitors compliance** (SAP Engine)
8. **Financial aid is packaged and disbursed** (Financial Aid)
9. **Ledger tracks finances** (Finance)
10. **Your company bills the school** (Billing)
11. **Students and instructors access portals** (Student Portal, Instructor Portal)
12. **Reporting & Communications tie everything together**

## Epic Dependencies

```
Application Foundation (0)
    ↓
Product Admin Portal (1)
    ↓
Multi-Tenancy (2) → RBAC (3)
    ↓
Directory (4)
    ↓
Admissions (5) → Programs (6) → Cohorts & Scheduling (7)
    ↓                                    ↓
Finance (11)                    Attendance (8) → Academics (9)
    ↓                                    ↓
Financial Aid (12)                      SAP (10)
    ↓                                    ↓
Billing (13)                    Transcript & Certificates (17)
    ↓
Student Portal (14) ← Instructor Portal (15)
    ↓
Learning Resources (16)
    ↓
Compliance (18) ← Integration Hub (19) ← Workflow Automation (20)
    ↓
Data Migration (21)
    ↓
Reporting (22) ← Communications (23)
    ↓
Externships (24) → Career Services (25)
```

## Development Priorities

### Phase 1: Foundation (Must Build First)
0. Application Foundation
1. Product Admin Portal
2. Multi-Tenancy & Organization Foundations
3. RBAC

### Phase 2: Core Operations
4. Directory
5. Admissions & Enrollment
6. Programs & Curriculum
7. Cohorts & Scheduling

### Phase 3: Academic Operations
8. Attendance & Timeclock
9. Academics
10. SAP

### Phase 4: Financial Operations
11. Finance
12. Financial Aid Management
13. Billing

### Phase 5: User Experience
14. Student Portal
15. Instructor Portal
16. Learning Resources Management
17. Transcript & Certificate Generation

### Phase 6: Integration & Automation
18. Compliance & Regulatory Management
19. Integration Hub
20. Advanced Workflow Automation
21. Data Migration & Import Tools

### Phase 7: Enhancement
22. Reporting & Analytics
23. Communications

### Phase 8: Student Support Services
26. Testing & Assessment Platform
27. Disability Services (Compliance Critical)
28. Veteran Services (Compliance Critical)
29. Library Management
30. Advising & Counseling Services
31. Help Desk & Ticketing System
32. Tutoring Services
33. Video Conferencing Integration

### Phase 9: Future Expansion
24. Externships / Job Placement
25. Career Services
34. International Student Services (Placeholder - Future Consideration)
