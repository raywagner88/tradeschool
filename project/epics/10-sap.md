# Epic 10: SAP — Satisfactory Academic Progress

## Overview

Calculates SAP status combining attendance pace and academic mastery. Includes rules configuration (per org), automated notifications, staff review queues, reporting, and packet exports for accreditation.

This epic integrates data from Attendance and Academics to ensure students meet both pace and performance requirements for financial aid and program completion.

## Key Features

- SAP calculation engine
- Configurable SAP rules
- Pace calculation (attendance hours)
- Academic performance calculation (grades)
- SAP status tracking
- Automated notifications
- Staff review queues
- SAP reporting and exports
- Warning and probation workflows

## Data Models

- `SAPRule` - SAP rule configurations
- `SAPCalculation` - SAP status calculations
- `SAPStatus` - Student SAP status
- `SAPWarning` - Warning notifications
- `SAPReview` - Staff review records
- `SAPReport` - SAP reports
- `SAPExport` - Accreditation exports

## User Roles

- **Registrar** - Review and manage SAP status
- **Financial Officer** - View SAP for financial aid
- **Organization Admin** - Configure SAP rules
- **Student** - View own SAP status

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 6 (Programs)**: Hour requirements
- **Epic 8 (Attendance)**: Attendance hours
- **Epic 9 (Academics)**: Grades and competencies

## Integration Points

- **Attendance (Epic 8)**: Hours for pace calculation
- **Academics (Epic 9)**: Grades for performance calculation
- **Finance (Epic 11)**: SAP affects financial aid eligibility
- **Reporting (Epic 22)**: SAP reports and analytics
- **Communications (Epic 23)**: SAP notifications

## Status

**Mandatory - Compliance Critical**

## Technical Notes

- Real-time SAP calculation
- Configurable calculation frequency
- Support for multiple SAP policies
- Historical SAP tracking
- Automated calculation triggers
- High-performance for batch calculations

## Stories

### Feature Area: SAP Rules Configuration

#### Story #1: Configure SAP Rules

**Description:**
As an organization admin, I want to configure SAP rules, so that our school's SAP policy is enforced.

**User Story:**
As an organization admin, I want to set SAP rules including pace requirements, GPA requirements, and evaluation periods, so that students are evaluated consistently.

**Acceptance Criteria:**
- SAP rule configuration interface
- Rules include: minimum pace percentage, minimum GPA, evaluation frequency, warning thresholds
- Rules can be: organization-wide or program-specific
- Rules can have multiple evaluation periods
- Rule changes logged
- Rule versioning (track changes over time)
- Rule preview shows how calculations work

**Dependencies:**
Depends on: Epic 2

---

#### Story #2: Set Pace Requirements

**Description:**
As an organization admin, I want to set pace requirements, so that students must maintain attendance pace.

**User Story:**
As an organization admin, I want to define minimum pace percentage (e.g., 67% of required hours), so that students maintain attendance pace.

**Acceptance Criteria:**
- Pace requirement field in SAP rules
- Minimum pace percentage (e.g., 67%)
- Pace calculated: (hours completed / hours required) * 100
- Pace requirement can vary by program
- Pace requirement displayed in SAP calculation
- Pace requirement used for SAP status

**Dependencies:**
Depends on: #1

---

#### Story #3: Set Academic Performance Requirements

**Description:**
As an organization admin, I want to set academic performance requirements, so that students must maintain grades.

**User Story:**
As an organization admin, I want to define minimum GPA requirements, so that students maintain academic performance.

**Acceptance Criteria:**
- GPA requirement field in SAP rules
- Minimum GPA (e.g., 2.0 on 4.0 scale)
- GPA calculated from student grades
- GPA requirement can vary by program
- GPA requirement displayed in SAP calculation
- GPA requirement used for SAP status

**Dependencies:**
Depends on: #1

---

#### Story #4: Configure Evaluation Periods

**Description:**
As an organization admin, I want to configure SAP evaluation periods, so that students are evaluated at appropriate intervals.

**User Story:**
As an organization admin, I want to set when SAP is calculated (e.g., monthly, quarterly, at milestones), so that students are evaluated regularly.

**Acceptance Criteria:**
- Evaluation period configuration
- Periods can be: time-based (monthly) or milestone-based (25%, 50%, 75% of program)
- Evaluation frequency configurable
- Evaluation dates calculated automatically
- Evaluation periods displayed in SAP calendar
- Evaluation periods can be customized per program

**Dependencies:**
Depends on: #1

---

### Feature Area: SAP Calculation

#### Story #5: Calculate Student SAP Status

**Description:**
As a system, I want to calculate student SAP status, so that compliance is automatically tracked.

**User Story:**
As a system, I want to calculate SAP status by combining pace and academic performance, so that students are evaluated against requirements.

**Acceptance Criteria:**
- SAP calculation engine
- Calculates: pace percentage, GPA, SAP status
- Status options: satisfactory, warning, probation, unsatisfactory
- Calculation uses current attendance hours and grades
- Calculation runs automatically at evaluation periods
- Calculation can be triggered manually
- Calculation results stored in SAP status record

**Dependencies:**
Depends on: #1, Epic 8, Epic 9

---

#### Story #6: Calculate Pace Percentage

**Description:**
As a system, I want to calculate pace percentage, so that attendance progress is measured.

**User Story:**
As a system, I want to calculate how many hours a student has completed versus required, so that pace can be determined.

**Acceptance Criteria:**
- Pace calculation: (hours completed / hours required) * 100
- Hours completed from attendance records
- Hours required from program requirements
- Pace percentage calculated for current evaluation period
- Pace percentage displayed in SAP status
- Pace percentage used for SAP determination

**Dependencies:**
Depends on: #5, Epic 8

---

#### Story #7: Calculate Academic Performance

**Description:**
As a system, I want to calculate academic performance, so that grades are factored into SAP.

**User Story:**
As a system, I want to calculate GPA from student grades, so that academic performance is measured.

**Acceptance Criteria:**
- GPA calculation from grade records
- GPA calculated for current evaluation period
- GPA displayed in SAP status
- GPA used for SAP determination
- GPA can be program-specific or overall
- GPA calculation method configurable

**Dependencies:**
Depends on: #5, Epic 9

---

#### Story #8: Determine SAP Status

**Description:**
As a system, I want to determine SAP status based on pace and performance, so that students are classified correctly.

**User Story:**
As a system, I want to determine if a student is satisfactory, in warning, on probation, or unsatisfactory, so that appropriate actions can be taken.

**Acceptance Criteria:**
- Status determination logic
- Satisfactory: meets both pace and GPA requirements
- Warning: below threshold but above minimum
- Probation: below minimum but in appeal period
- Unsatisfactory: below minimum and appeal denied/expired
- Status determination logged
- Status changes trigger notifications

**Dependencies:**
Depends on: #6, #7

---

### Feature Area: SAP Status Management

#### Story #9: View Student SAP Status

**Description:**
As a staff member or student, I want to view student SAP status, so that progress is visible.

**User Story:**
As a student, I want to see my SAP status including pace, GPA, and overall status, so that I know if I'm meeting requirements.

**Acceptance Criteria:**
- SAP status view
- Shows: current status, pace percentage, GPA, evaluation date, next evaluation date
- Status history displayed
- Visual indicators (green, yellow, red)
- Status details and requirements explained
- Status exportable

**Dependencies:**
Depends on: #8

---

#### Story #10: View SAP Review Queue

**Description:**
As a registrar, I want to view a queue of students needing SAP review, so that I can address issues promptly.

**User Story:**
As a registrar, I want to see students in warning, probation, or unsatisfactory status, so that I can review their cases and take action.

**Acceptance Criteria:**
- SAP review queue interface
- Queue shows: student, status, pace, GPA, evaluation date
- Filter by status, program, date range
- Sortable columns
- Click student to view details
- Queue prioritized by urgency
- Queue can be assigned to staff members

**Dependencies:**
Depends on: #9

---

#### Story #11: Review SAP Status

**Description:**
As a registrar, I want to review and update SAP status, so that I can make decisions and take actions.

**User Story:**
As a registrar, I want to review a student's SAP status and add notes or change status, so that I can manage student progress.

**Acceptance Criteria:**
- SAP review interface
- Shows: current status, calculation details, history
- Can add review notes
- Can change status (with reason)
- Can approve appeals
- Review logged in audit trail
- Review can trigger notifications

**Dependencies:**
Depends on: #10

---

### Feature Area: SAP Warnings and Notifications

#### Story #12: Generate SAP Warnings

**Description:**
As a system, I want to generate SAP warnings, so that students are notified when they're at risk.

**User Story:**
As a system, I want to automatically create warnings when students fall below thresholds, so that they can take corrective action.

**Acceptance Criteria:**
- Warning generation triggered by SAP calculation
- Warning created when: pace below threshold, GPA below threshold, or both
- Warning includes: issue description, requirements, action items
- Warning stored in SAP warning record
- Warning can trigger notifications
- Warning displayed in student SAP status

**Dependencies:**
Depends on: #8

---

#### Story #13: Send SAP Notifications

**Description:**
As a system, I want to send SAP notifications, so that students and staff are informed of status changes.

**User Story:**
As a system, I want to send email notifications when SAP status changes, so that students know their status and can take action.

**Acceptance Criteria:**
- Notification triggered by SAP status change
- Notification sent to: student, registrar, financial officer (if applicable)
- Notification includes: status, pace, GPA, requirements, next steps
- Notification templates customizable
- Notification preferences configurable
- Notification delivery logged

**Dependencies:**
Depends on: #12, Epic 23

---

#### Story #14: Manage SAP Appeals

**Description:**
As a student or registrar, I want to manage SAP appeals, so that students can contest unsatisfactory status.

**User Story:**
As a student, I want to submit an appeal if I'm marked unsatisfactory, so that I can explain extenuating circumstances.

**Acceptance Criteria:**
- Appeal submission interface
- Appeal form: reason, supporting documentation, proposed plan
- Appeal submitted for review
- Appeal status tracked (pending, approved, denied)
- Appeal review interface for registrar
- Appeal decision logged
- Appeal can trigger status change if approved

**Dependencies:**
Depends on: #11

---

### Feature Area: SAP Reporting

#### Story #15: Generate SAP Reports

**Description:**
As a staff member, I want to generate SAP reports, so that I can analyze student progress and meet reporting requirements.

**User Story:**
As a registrar, I want to generate reports showing SAP status for all students, so that I can identify at-risk students and track trends.

**Acceptance Criteria:**
- SAP report generation interface
- Report types: student SAP, program SAP, overall SAP statistics
- Filter by: status, program, date range
- Reports include: student, status, pace, GPA, evaluation date
- Reports exportable to CSV or PDF
- Reports can be scheduled (future)
- Reports include summary statistics

**Dependencies:**
Depends on: #9

---

#### Story #16: Export SAP Data for Accreditation

**Description:**
As a registrar, I want to export SAP data for accreditation, so that we can provide required documentation.

**User Story:**
As a registrar, I want to export SAP data in the format required by accrediting bodies, so that we can maintain accreditation.

**Acceptance Criteria:**
- SAP export interface
- Export formats: CSV, Excel, PDF
- Export includes: student SAP status, calculation details, history
- Export can be filtered by program or date range
- Export formatted for accreditation requirements
- Export can be scheduled (future)
- Export logged

**Dependencies:**
Depends on: #15

---

#### Story #17: View SAP Analytics

**Description:**
As a staff member, I want to view SAP analytics, so that I can understand trends and identify issues.

**User Story:**
As a registrar, I want to see SAP statistics and trends, so that I can identify patterns and improve student success.

**Acceptance Criteria:**
- SAP analytics dashboard
- Shows: overall SAP rates, trends over time, program comparisons
- Charts showing SAP distribution
- Key metrics: satisfactory rate, warning rate, probation rate, unsatisfactory rate
- Analytics filterable by program or date range
- Analytics exportable

**Dependencies:**
Depends on: #15

---

### Feature Area: SAP History

#### Story #18: Track SAP History

**Description:**
As a system, I want to track SAP history, so that student progress over time is recorded.

**User Story:**
As a system, I want to store all SAP calculations and status changes, so that we have a complete history of student progress.

**Acceptance Criteria:**
- SAP history stored for each student
- History includes: evaluation date, status, pace, GPA, calculation details
- History preserved when status changes
- History searchable and filterable
- History displayed in student SAP view
- History exportable

**Dependencies:**
Depends on: #5

---

#### Story #19: View SAP Timeline

**Description:**
As a staff member or student, I want to view SAP timeline, so that progress over time is visible.

**User Story:**
As a student, I want to see my SAP status history in a timeline, so that I can see how my progress has changed.

**Acceptance Criteria:**
- SAP timeline view
- Timeline shows: evaluation dates, status changes, pace, GPA
- Timeline visual (chronological)
- Timeline filterable by date range
- Timeline exportable
- Timeline highlights significant changes

**Dependencies:**
Depends on: #18

---

