# Epic 24: Externships / Job Placement

## Overview

Tracks student job placements, site agreements, hours verification, employer contacts, evaluations, and outcomes for accreditation reporting.

This epic supports trade schools' requirement to track student externships and job placements for accreditation and outcomes reporting.

## Key Features

- Externship site management
- Job placement tracking
- Site agreement management
- Hours verification
- Employer contact management
- Student evaluations
- Placement outcomes tracking
- Accreditation reporting

## Data Models

- `ExternshipSite` - Externship site/employer
- `SiteAgreement` - Agreements with externship sites
- `JobPlacement` - Student job placements
- `PlacementHours` - Hours worked at placement
- `EmployerContact` - Employer contact information
- `PlacementEvaluation` - Student and employer evaluations
- `PlacementOutcome` - Placement outcomes and results

## User Roles

- **Career Services** - Manage placements and sites
- **Registrar** - View placement data
- **Student** - View own placement information
- **Organization Admin** - Configure placement settings

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records

## Integration Points

- **Reporting (Epic 22)**: Placement outcomes reports
- **Academics (Epic 9)**: Placement hours may count toward program requirements
- **Directory (Epic 4)**: Employer contacts

## Status

**Future**

## Technical Notes

- Support for multiple placement types (externship, job placement, clinical)
- Hours tracking similar to attendance system
- Document management for agreements
- Evaluation forms and workflows
- Outcomes tracking for accreditation

## Stories

### Feature Area: Externship Site Management

#### Story #1: Create Externship Site

**Description:**
As a career services staff member, I want to create externship sites, so that placement locations are tracked.

**User Story:**
As a career services staff member, I want to create a site record with name, address, and contact information, so that we can track placement locations.

**Acceptance Criteria:**
- Site creation form: name, address, phone, email, site type
- Site assigned unique identifier
- Site scoped to organization
- Site can be active or inactive
- Site creation logged

**Dependencies:**
Depends on: Epic 2, Epic 3

---

#### Story #2: View Externship Site List

**Description:**
As a career services staff member, I want to view a list of externship sites, so that I can manage placement locations.

**User Story:**
As a career services staff member, I want to see all externship sites with their contact information and status, so that I can find placement opportunities.

**Acceptance Criteria:**
- Site list: name, address, contact, status, active placements count
- Search by name or address
- Filter by: status, site type
- Sortable columns
- Click site to view details
- Sites exportable

**Dependencies:**
Depends on: #1

---

#### Story #3: Manage Site Agreements

**Description:**
As a career services staff member, I want to manage site agreements, so that legal agreements are tracked.

**User Story:**
As a career services staff member, I want to upload and track site agreements, so that we have documentation of partnerships.

**Acceptance Criteria:**
- Agreement management interface
- Upload agreement documents
- Agreement includes: start date, end date, terms, contact
- Agreement status tracked (active, expired, terminated)
- Agreement expiration alerts
- Agreement documents downloadable

**Dependencies:**
Depends on: #1

---

### Feature Area: Job Placement Tracking

#### Story #4: Create Job Placement

**Description:**
As a career services staff member, I want to create job placements, so that student placements are tracked.

**User Story:**
As a career services staff member, I want to create a placement record linking a student to an externship site, so that we can track student placements.

**Acceptance Criteria:**
- Placement creation form: student, site, start date, end date, placement type
- Placement types: externship, job placement, clinical
- Placement assigned unique identifier
- Placement linked to student and site
- Placement status tracked (planned, active, completed, terminated)
- Placement creation logged

**Dependencies:**
Depends on: #1, Epic 4

---

#### Story #5: View Placement List

**Description:**
As a career services staff member, I want to view a list of placements, so that I can manage student placements.

**User Story:**
As a career services staff member, I want to see all placements with student, site, dates, and status, so that I can track placement activity.

**Acceptance Criteria:**
- Placement list: student, site, start date, end date, status, hours
- Search by student name or site
- Filter by: status, site, date range, placement type
- Sortable columns
- Click placement to view details
- Placements exportable

**Dependencies:**
Depends on: #4

---

#### Story #6: Update Placement Information

**Description:**
As a career services staff member, I want to update placement information, so that records remain current.

**User Story:**
As a career services staff member, I want to edit placement details including dates and status, so that placement records are accurate.

**Acceptance Criteria:**
- Placement edit interface
- Can update: dates, status, notes
- Changes logged in audit trail
- Changes take effect immediately
- Confirmation message on save

**Dependencies:**
Depends on: #5

---

### Feature Area: Hours Verification

#### Story #7: Record Placement Hours

**Description:**
As a career services staff member or student, I want to record placement hours, so that hours worked are tracked.

**User Story:**
As a student, I want to log hours worked at my placement, so that my externship hours are recorded.

**Acceptance Criteria:**
- Hours entry interface
- Hours form: date, hours worked, description (optional)
- Hours validated (reasonable limits)
- Hours linked to placement
- Hours can be edited or deleted (with permission)
- Hours entry logged

**Dependencies:**
Depends on: #4

---

#### Story #8: Verify Placement Hours

**Description:**
As a career services staff member, I want to verify placement hours, so that hours are confirmed accurate.

**User Story:**
As a career services staff member, I want to review and verify hours logged by students, so that hours are validated.

**Acceptance Criteria:**
- Hours verification interface
- Hours can be: verified, needs correction, rejected
- Verification includes notes/comments
- Verification date and verified by tracked
- Verified hours count toward requirements
- Hours verification logged

**Dependencies:**
Depends on: #7

---

#### Story #9: View Placement Hours Summary

**Description:**
As a career services staff member or student, I want to view placement hours summary, so that total hours are visible.

**User Story:**
As a student, I want to see my total placement hours and hours remaining, so that I know my progress.

**Acceptance Criteria:**
- Hours summary view
- Shows: total hours, verified hours, hours remaining, hours by date
- Summary filterable by date range
- Summary exportable
- Summary displayed in placement detail

**Dependencies:**
Depends on: #7, #8

---

### Feature Area: Employer Contacts

#### Story #10: Manage Employer Contacts

**Description:**
As a career services staff member, I want to manage employer contacts, so that site contacts are tracked.

**User Story:**
As a career services staff member, I want to add contacts for externship sites, so that we can communicate with employers.

**Acceptance Criteria:**
- Contact management interface
- Contact form: name, title, email, phone, site
- Multiple contacts per site
- Contact can be primary or secondary
- Contact information can be updated
- Contact can be removed

**Dependencies:**
Depends on: #1

---

### Feature Area: Evaluations

#### Story #11: Create Placement Evaluation

**Description:**
As a career services staff member, I want to create placement evaluations, so that student and employer feedback is collected.

**User Story:**
As a career services staff member, I want to create evaluation forms for students and employers, so that placement quality is assessed.

**Acceptance Criteria:**
- Evaluation creation interface
- Evaluation types: student self-evaluation, employer evaluation, supervisor evaluation
- Evaluation includes: questions, rating scales, comments
- Evaluation linked to placement
- Evaluation can be sent to evaluator
- Evaluation responses tracked

**Dependencies:**
Depends on: #4

---

#### Story #12: Complete Student Evaluation

**Description:**
As a student, I want to complete placement evaluations, so that I can provide feedback on my placement.

**User Story:**
As a student, I want to fill out an evaluation form about my placement experience, so that the school can improve placements.

**Acceptance Criteria:**
- Student evaluation interface
- Evaluation form displayed with questions
- Evaluation can be saved as draft
- Evaluation submitted when complete
- Evaluation responses stored
- Evaluation completion tracked

**Dependencies:**
Depends on: #11

---

#### Story #13: Complete Employer Evaluation

**Description:**
As an employer, I want to complete placement evaluations, so that I can provide feedback on student performance.

**User Story:**
As an employer, I want to fill out an evaluation form about the student's performance, so that the school can assess student readiness.

**Acceptance Criteria:**
- Employer evaluation interface (external link)
- Evaluation form displayed with questions
- Evaluation can be saved as draft
- Evaluation submitted when complete
- Evaluation responses stored
- Evaluation completion tracked

**Dependencies:**
Depends on: #11

---

#### Story #14: View Evaluation Results

**Description:**
As a career services staff member, I want to view evaluation results, so that placement quality is assessed.

**User Story:**
As a career services staff member, I want to see evaluation responses from students and employers, so that I can identify successful placements and areas for improvement.

**Acceptance Criteria:**
- Evaluation results view
- Results show: student evaluation, employer evaluation, summary
- Results filterable by placement, date range
- Results exportable
- Results used for placement quality metrics

**Dependencies:**
Depends on: #12, #13

---

### Feature Area: Placement Outcomes

#### Story #15: Track Placement Outcomes

**Description:**
As a career services staff member, I want to track placement outcomes, so that job placement success is measured.

**User Story:**
As a career services staff member, I want to record placement outcomes including job offers and employment status, so that we can measure success.

**Acceptance Criteria:**
- Outcome tracking interface
- Outcomes include: job offer, employment status, salary, start date
- Outcomes linked to placement
- Outcomes can be updated over time
- Outcomes used for reporting
- Outcomes tracked in placement record

**Dependencies:**
Depends on: #4

---

#### Story #16: Generate Placement Outcomes Report

**Description:**
As a career services staff member, I want to generate placement outcomes reports, so that accreditation requirements are met.

**User Story:**
As a career services staff member, I want to generate reports showing placement rates and outcomes, so that we can provide data for accreditation.

**Acceptance Criteria:**
- Outcomes report generation interface
- Report includes: placement rate, employment rate, outcomes by program
- Report filterable by date range, program
- Report formatted for accreditation
- Report exportable to CSV or PDF
- Report includes summary statistics

**Dependencies:**
Depends on: #15, Epic 22

---

### Feature Area: Accreditation Reporting

#### Story #17: Export Placement Data for Accreditation

**Description:**
As a career services staff member, I want to export placement data for accreditation, so that required documentation is provided.

**User Story:**
As a career services staff member, I want to export placement and outcomes data in the format required by accrediting bodies, so that we maintain accreditation.

**Acceptance Criteria:**
- Accreditation export interface
- Export includes: placements, hours, evaluations, outcomes
- Export format matches accreditation requirements
- Export can be filtered by program or date range
- Export validated before download
- Export logged

**Dependencies:**
Depends on: #16

---

