# Epic 28: Veteran Services

## Overview

Comprehensive veteran services management for schools serving military veterans. Handles VA benefits processing, VA certification, federal reporting (VA Once, WEAMS), GI Bill tracking, veteran status management, and compliance with VA regulations.

This epic is critical for schools that participate in VA education benefits programs and must comply with federal veteran education regulations.

## Key Features

- VA benefits processing
- VA certification management
- VA reporting (VA Once, WEAMS)
- GI Bill tracking
- Veteran status management
- VA compliance tracking
- Certification letter generation
- Enrollment certification

## Data Models

- `VeteranRecord` - Veteran student records
- `VABenefit` - VA benefit records
- `VACertification` - VA certification records
- `EnrollmentCertification` - Enrollment certifications
- `VAReport` - VA reporting records
- `GIBillTracking` - GI Bill usage tracking
- `VADocument` - VA-related documents

## User Roles

- **Veteran Services Coordinator** - Manage veteran services
- **Registrar** - View veteran status
- **Student** - View own veteran benefits
- **Organization Admin** - Configure VA settings

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 6 (Programs)**: Program certification
- **Epic 7 (Scheduling)**: Enrollment certification
- **Epic 12 (Financial Aid)**: VA benefits integration

## Integration Points

- **Directory (Epic 4)**: Veteran student information
- **Financial Aid (Epic 12)**: VA benefits as financial aid
- **Scheduling (Epic 7)**: Enrollment for certification
- **Reporting (Epic 22)**: VA compliance reports
- **Integration Hub (Epic 19)**: VA system integrations

## Status

**Mandatory - Compliance Critical**

## Technical Notes

- Integration with VA systems (VA Once, WEAMS)
- Secure handling of veteran data
- Automated certification processing
- VA reporting automation
- Compliance with VA regulations
- Document management for VA records

## Stories

### Feature Area: Veteran Status Management

#### Story #1: Record Veteran Status

**Description:**
As a registrar, I want to record veteran status, so that veteran students are identified.

**User Story:**
As a registrar, I want to mark a student as a veteran and record their service information, so that we can provide veteran services.

**Acceptance Criteria:**
- Veteran status interface in student record
- Status includes: veteran status (yes/no), service branch, discharge type, service dates
- Veteran status linked to student
- Status can be updated
- Status changes logged
- Status displayed in student detail

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 4

---

#### Story #2: View Veteran Students

**Description:**
As a veteran services coordinator, I want to view veteran students, so that I can manage veteran services.

**User Story:**
As a veteran services coordinator, I want to see all veteran students with their status and benefits, so that I can provide support.

**Acceptance Criteria:**
- Veteran student list: name, student ID, veteran status, benefit type, certification status
- Search by name or student ID
- Filter by: benefit type, certification status, program
- Sortable columns
- Click student to view details
- List exportable

**Dependencies:**
Depends on: #1

---

### Feature Area: VA Benefits

#### Story #3: Record VA Benefit

**Description:**
As a veteran services coordinator, I want to record VA benefits, so that student benefits are tracked.

**User Story:**
As a veteran services coordinator, I want to create a benefit record with benefit type and eligibility, so that we can process VA benefits.

**Acceptance Criteria:**
- VA benefit creation interface
- Benefit types: Post-9/11 GI Bill, Montgomery GI Bill, Vocational Rehabilitation, Dependents' Education
- Benefit includes: benefit type, eligibility percentage, start date, end date
- Benefit linked to student
- Benefit creation logged

**Dependencies:**
Depends on: #1

---

#### Story #4: View VA Benefits

**Description:**
As a veteran services coordinator or student, I want to view VA benefits, so that benefit information is accessible.

**User Story:**
As a student, I want to see my VA benefits including type and remaining eligibility, so that I know my benefit status.

**Acceptance Criteria:**
- VA benefit view
- Shows: benefit type, eligibility, remaining months, usage
- Benefits organized by type
- Benefits exportable
- Benefits displayed in student portal

**Dependencies:**
Depends on: #3, Epic 14

---

#### Story #5: Track GI Bill Usage

**Description:**
As a system, I want to track GI Bill usage, so that remaining eligibility is known.

**User Story:**
As a system, I want to calculate how many months of GI Bill benefits a student has used, so that remaining eligibility is tracked.

**Acceptance Criteria:**
- GI Bill usage tracking
- Usage calculated: months used, months remaining, percentage used
- Usage updated when enrollment certified
- Usage displayed in benefit view
- Usage warnings when approaching limits
- Usage tracking logged

**Dependencies:**
Depends on: #3

---

### Feature Area: VA Certification

#### Story #6: Create Enrollment Certification

**Description:**
As a veteran services coordinator, I want to create enrollment certifications, so that VA benefits are certified.

**User Story:**
As a veteran services coordinator, I want to certify a student's enrollment for VA benefits, so that they receive their benefits.

**Acceptance Criteria:**
- Enrollment certification interface
- Certification includes: student, program, enrollment dates, credit/clock hours, tuition, fees
- Certification validates: enrollment status, program eligibility, benefit eligibility
- Certification created in "pending" status
- Certification creation logged

**Dependencies:**
Depends on: #3, Epic 7

---

#### Story #7: Submit Certification to VA

**Description:**
As a system, I want to submit certifications to the VA, so that benefits are processed.

**User Story:**
As a system, I want to send enrollment certifications to the VA through VA Once, so that students receive their benefits.

**Acceptance Criteria:**
- VA certification submission
- Submission via VA Once integration
- Submission validates data before sending
- Submission status tracked (pending, submitted, accepted, rejected)
- Submission errors handled
- Submission logged

**Dependencies:**
Depends on: #6, Epic 19

---

#### Story #8: Track Certification Status

**Description:**
As a veteran services coordinator, I want to track certification status, so that I know if certifications are processed.

**User Story:**
As a veteran services coordinator, I want to see the status of all certifications including which are pending or accepted, so that I can follow up on issues.

**Acceptance Criteria:**
- Certification status view
- Status shows: certification date, submission date, VA status, response date
- Status filterable by: student, date range, status
- Status updates in real-time
- Status exportable

**Dependencies:**
Depends on: #7

---

### Feature Area: VA Reporting

#### Story #9: Generate VA Once Reports

**Description:**
As a veteran services coordinator, I want to generate VA Once reports, so that enrollment data is reported to the VA.

**User Story:**
As a veteran services coordinator, I want to generate reports for VA Once including enrollment and certification data, so that we comply with reporting requirements.

**Acceptance Criteria:**
- VA Once report generation interface
- Report includes: enrollment data, certification data, changes
- Report formatted for VA Once submission
- Report validated before submission
- Report submission tracked
- Report exportable

**Dependencies:**
Depends on: #6, Epic 19

---

#### Story #10: Generate WEAMS Reports

**Description:**
As a veteran services coordinator, I want to generate WEAMS reports, so that program information is reported to the VA.

**User Story:**
As a veteran services coordinator, I want to generate reports for WEAMS including program and facility information, so that programs are listed with the VA.

**Acceptance Criteria:**
- WEAMS report generation interface
- Report includes: program information, facility information, contact information
- Report formatted for WEAMS submission
- Report validated before submission
- Report submission tracked
- Report exportable

**Dependencies:**
Depends on: Epic 6, Epic 19

---

#### Story #11: Track VA Reporting

**Description:**
As a veteran services coordinator, I want to track VA reporting, so that compliance is maintained.

**User Story:**
As a veteran services coordinator, I want to see a history of all VA reports submitted, so that I can ensure timely reporting.

**Acceptance Criteria:**
- VA reporting history view
- History shows: report type, submission date, status, response
- History filterable by report type or date range
- Reporting deadlines tracked
- Reporting alerts for upcoming deadlines
- History exportable

**Dependencies:**
Depends on: #9, #10

---

### Feature Area: Certification Letters

#### Story #12: Generate Certification Letter

**Description:**
As a system, I want to generate certification letters, so that students receive official certification documentation.

**User Story:**
As a system, I want to automatically generate certification letters when enrollments are certified, so that students have proof of certification.

**Acceptance Criteria:**
- Certification letter generation
- Letter includes: student information, program, enrollment dates, certification date
- Letter formatted as PDF
- Letter sent to student via email
- Letter stored in student record
- Letter downloadable

**Dependencies:**
Depends on: #6, Epic 23

---

#### Story #13: Customize Certification Letter Template

**Description:**
As an organization admin, I want to customize certification letter templates, so that letters match our school's format.

**User Story:**
As an organization admin, I want to edit certification letter templates with our logo and information, so that letters are branded.

**Acceptance Criteria:**
- Certification letter template editor
- Template includes: header, body, footer, variables
- Variables: {{student_name}}, {{program}}, {{dates}}, etc.
- Template preview available
- Template saved and versioned
- Template changes logged

**Dependencies:**
Depends on: Epic 2

---

### Feature Area: VA Compliance

#### Story #14: Track VA Compliance

**Description:**
As a system, I want to track VA compliance, so that regulatory requirements are met.

**User Story:**
As a system, I want to monitor compliance with VA regulations including timely reporting and accurate certifications, so that schools maintain VA approval.

**Acceptance Criteria:**
- VA compliance tracking
- Tracks: certification timeliness, reporting deadlines, data accuracy
- Compliance status calculated
- Compliance issues flagged
- Compliance reports generated
- Compliance tracking logged

**Dependencies:**
Depends on: #6, #9

---

#### Story #15: Generate VA Compliance Reports

**Description:**
As a veteran services coordinator, I want to generate VA compliance reports, so that compliance status is documented.

**User Story:**
As a veteran services coordinator, I want to generate reports showing compliance with VA regulations, so that we can demonstrate compliance.

**Acceptance Criteria:**
- VA compliance report generation
- Report includes: certification statistics, reporting status, compliance metrics
- Report filterable by date range
- Report formatted for compliance
- Report exportable
- Report includes compliance summary

**Dependencies:**
Depends on: #14, Epic 22

---

### Feature Area: Benefit Changes

#### Story #16: Handle Enrollment Changes

**Description:**
As a veteran services coordinator, I want to handle enrollment changes, so that VA is notified of changes.

**User Story:**
As a veteran services coordinator, I want to update certifications when students change enrollment, so that VA benefits are adjusted correctly.

**Acceptance Criteria:**
- Enrollment change handling
- Changes detected: enrollment status, credit/clock hours, program
- Changes trigger certification update
- Updated certification submitted to VA
- Change notification sent to student
- Change processing logged

**Dependencies:**
Depends on: #6, Epic 7

---

#### Story #17: Handle Withdrawals

**Description:**
As a veteran services coordinator, I want to handle student withdrawals, so that VA is notified and benefits are adjusted.

**User Story:**
As a veteran services coordinator, I want to process withdrawals for veteran students and notify the VA, so that benefits are stopped appropriately.

**Acceptance Criteria:**
- Withdrawal processing interface
- Withdrawal date recorded
- Withdrawal reason captured
- Certification updated to reflect withdrawal
- Updated certification submitted to VA
- Withdrawal processing logged

**Dependencies:**
Depends on: #6, Epic 4

---

### Feature Area: VA Integration

#### Story #18: Integrate with VA Once

**Description:**
As a system, I want to integrate with VA Once, so that certifications are submitted automatically.

**User Story:**
As a system, I want to connect to VA Once and submit enrollment certifications, so that the certification process is automated.

**Acceptance Criteria:**
- VA Once integration configuration
- Secure authentication
- Certification submission via API
- Submission status received and stored
- Integration errors handled
- Integration logged

**Dependencies:**
Depends on: Epic 19

---

#### Story #19: Integrate with WEAMS

**Description:**
As a system, I want to integrate with WEAMS, so that program information is synchronized.

**User Story:**
As a system, I want to connect to WEAMS and submit program information, so that programs are listed with the VA.

**Acceptance Criteria:**
- WEAMS integration configuration
- Secure authentication
- Program information submission via API
- Submission status received and stored
- Integration errors handled
- Integration logged

**Dependencies:**
Depends on: Epic 19

---

### Feature Area: Veteran Services Reporting

#### Story #20: Generate Veteran Services Reports

**Description:**
As a veteran services coordinator, I want to generate veteran services reports, so that veteran services are tracked.

**User Story:**
As a veteran services coordinator, I want to generate reports showing veteran enrollment, benefits, and certifications, so that I can manage veteran services effectively.

**Acceptance Criteria:**
- Veteran services report generation
- Report types: enrollment summary, benefit usage, certification status, compliance
- Reports filterable by date range or program
- Reports include summary statistics
- Reports exportable to CSV or PDF

**Dependencies:**
Depends on: Epic 22

---

#### Story #21: View Veteran Services Dashboard

**Description:**
As a veteran services coordinator, I want to view a veteran services dashboard, so that I can see key metrics at a glance.

**User Story:**
As a veteran services coordinator, I want to see a dashboard with veteran enrollment, certification status, and compliance metrics, so that I can monitor veteran services.

**Acceptance Criteria:**
- Veteran services dashboard
- Dashboard shows: veteran count, active certifications, pending certifications, compliance status
- Dashboard includes charts and visualizations
- Dashboard filterable by date range
- Dashboard exportable

**Dependencies:**
Depends on: #20

---

