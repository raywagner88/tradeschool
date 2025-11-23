# Epic 30: Advising & Counseling Services

## Overview

Comprehensive academic advising and counseling services management. Handles advising appointments, counseling sessions, student success plans, early alert system, advising notes, and student support tracking.

This epic supports student success through proactive advising and counseling services.

## Key Features

- Advising appointment scheduling
- Counseling session management
- Student success plans
- Early alert system
- Advising notes and documentation
- Student support tracking
- Appointment reminders
- Advising analytics

## Data Models

- `AdvisingAppointment` - Advising appointment records
- `CounselingSession` - Counseling session records
- `StudentSuccessPlan` - Success plan records
- `EarlyAlert` - Early alert records
- `AdvisingNote` - Advising notes
- `SupportReferral` - Support referrals

## User Roles

- **Academic Advisor** - Manage advising appointments
- **Counselor** - Manage counseling sessions
- **Student** - Schedule appointments
- **Instructor** - Create early alerts
- **Organization Admin** - Configure advising settings

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 7 (Scheduling)**: Appointment scheduling
- **Epic 9 (Academics)**: Academic performance data

## Integration Points

- **Directory (Epic 4)**: Student records
- **Academics (Epic 9)**: Academic performance for advising
- **SAP (Epic 10)**: SAP status for early alerts
- **Scheduling (Epic 7)**: Appointment scheduling
- **Student Portal (Epic 14)**: Student appointment access
- **Communications (Epic 23)**: Appointment reminders

## Status

**Upcoming**

## Technical Notes

- Appointment scheduling system
- Calendar integration
- FERPA compliance for counseling notes
- Secure document storage
- Early alert automation

## Stories

### Feature Area: Advising Appointments

#### Story #1: Schedule Advising Appointment

**Description:**
As a student, I want to schedule an advising appointment, so that I can meet with my advisor.

**User Story:**
As a student, I want to book an appointment with my advisor, so that I can get academic guidance.

**Acceptance Criteria:**
- Appointment scheduling interface in student portal
- Appointment includes: advisor, date, time, reason, location (in-person or virtual)
- Available time slots displayed
- Appointment confirmation sent
- Appointment displayed in calendar
- Appointment creation logged

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 4, Epic 14

---

#### Story #2: View Advising Appointments

**Description:**
As an advisor or student, I want to view advising appointments, so that I can see scheduled meetings.

**User Story:**
As an advisor, I want to see all my appointments with students, so that I can prepare for meetings.

**Acceptance Criteria:**
- Appointment list: student, date, time, reason, status
- Filter by: date range, status, student
- Calendar view available
- Appointment details accessible
- Appointments exportable

**Dependencies:**
Depends on: #1

---

#### Story #3: Cancel or Reschedule Appointment

**Description:**
As a student or advisor, I want to cancel or reschedule appointments, so that meetings can be adjusted.

**User Story:**
As a student, I want to cancel or reschedule an appointment if I can't make it, so that I can find a better time.

**Acceptance Criteria:**
- Appointment cancellation/rescheduling interface
- Cancellation requires reason
- Cancellation notification sent
- Rescheduling shows available time slots
- Appointment status updated
- Cancellation/rescheduling logged

**Dependencies:**
Depends on: #1

---

### Feature Area: Advising Notes

#### Story #4: Create Advising Notes

**Description:**
As an advisor, I want to create advising notes, so that I can document advising sessions.

**User Story:**
As an advisor, I want to record notes from an advising appointment including topics discussed and action items, so that I have a record of the meeting.

**Acceptance Criteria:**
- Advising note creation interface
- Notes include: appointment, topics discussed, action items, follow-up items
- Notes can be private or shared (with student permission)
- Notes stored securely
- Notes searchable
- Note creation logged

**Dependencies:**
Depends on: #1

---

#### Story #5: View Advising History

**Description:**
As an advisor or student, I want to view advising history, so that past interactions are accessible.

**User Story:**
As an advisor, I want to see all past appointments and notes for a student, so that I can provide continuity in advising.

**Acceptance Criteria:**
- Advising history view
- History shows: appointments, notes, action items, outcomes
- History filterable by date range
- History searchable
- History exportable

**Dependencies:**
Depends on: #4

---

### Feature Area: Student Success Plans

#### Story #6: Create Student Success Plan

**Description:**
As an advisor, I want to create student success plans, so that students have structured support.

**User Story:**
As an advisor, I want to create a success plan with goals, milestones, and support resources, so that students have a roadmap for success.

**Acceptance Criteria:**
- Success plan creation interface
- Plan includes: goals, milestones, timeline, support resources, action items
- Plan linked to student
- Plan can be shared with student
- Plan can be updated
- Plan creation logged

**Dependencies:**
Depends on: Epic 4

---

#### Story #7: Track Success Plan Progress

**Description:**
As an advisor or student, I want to track success plan progress, so that goals are monitored.

**User Story:**
As a student, I want to see my success plan progress including completed milestones, so that I can track my goals.

**Acceptance Criteria:**
- Success plan progress view
- Progress shows: goals, milestones, completion status, timeline
- Progress updated when milestones completed
- Progress displayed in student portal
- Progress exportable

**Dependencies:**
Depends on: #6, Epic 14

---

### Feature Area: Early Alert System

#### Story #8: Create Early Alert

**Description:**
As an instructor, I want to create early alerts, so that students at risk are identified.

**User Story:**
As an instructor, I want to flag a student who is struggling with attendance or grades, so that they can receive support.

**Acceptance Criteria:**
- Early alert creation interface
- Alert includes: student, concern type, description, severity
- Alert types: academic, attendance, engagement, personal
- Alert routed to appropriate advisor/counselor
- Alert notification sent
- Alert creation logged

**Dependencies:**
Depends on: Epic 4, Epic 9

---

#### Story #9: Process Early Alert

**Description:**
As an advisor, I want to process early alerts, so that students receive timely support.

**User Story:**
As an advisor, I want to see early alerts for my students and take action, so that students get help when needed.

**Acceptance Criteria:**
- Early alert queue interface
- Alerts displayed with priority
- Alerts can be: acknowledged, assigned, resolved
- Alert processing requires notes/action
- Alert status tracked
- Alert processing logged

**Dependencies:**
Depends on: #8

---

#### Story #10: Automate Early Alerts

**Description:**
As a system, I want to automate early alerts, so that at-risk students are identified automatically.

**User Story:**
As a system, I want to automatically create alerts when students have low attendance or failing grades, so that support is proactive.

**Acceptance Criteria:**
- Early alert automation
- Alerts triggered by: low attendance, failing grades, SAP issues, missing assignments
- Alert rules configurable per organization
- Alerts created automatically
- Alert automation logged

**Dependencies:**
Depends on: #8, Epic 8, Epic 9, Epic 10

---

### Feature Area: Counseling Services

#### Story #11: Schedule Counseling Session

**Description:**
As a student, I want to schedule counseling sessions, so that I can access counseling services.

**User Story:**
As a student, I want to book a counseling appointment, so that I can get support for personal or academic issues.

**Acceptance Criteria:**
- Counseling session scheduling interface
- Session includes: counselor, date, time, reason, type
- Session types: academic, personal, career, crisis
- Session confirmation sent
- Session displayed in calendar
- Session creation logged

**Dependencies:**
Depends on: Epic 4, Epic 14

---

#### Story #12: Document Counseling Session

**Description:**
As a counselor, I want to document counseling sessions, so that sessions are recorded.

**User Story:**
As a counselor, I want to record session notes including topics discussed and recommendations, so that I have a record of counseling.

**Acceptance Criteria:**
- Counseling session documentation interface
- Notes include: session date, topics, recommendations, follow-up items
- Notes stored securely (FERPA compliant)
- Notes can be private (not shared with student)
- Notes searchable
- Note creation logged

**Dependencies:**
Depends on: #11

---

#### Story #13: Create Support Referral

**Description:**
As a counselor or advisor, I want to create support referrals, so that students are connected to resources.

**User Story:**
As a counselor, I want to refer a student to external resources like mental health services, so that students get comprehensive support.

**Acceptance Criteria:**
- Support referral creation interface
- Referral includes: student, resource, reason, contact information
- Referral types: mental health, financial, academic, career
- Referral tracked
- Referral follow-up scheduled
- Referral creation logged

**Dependencies:**
Depends on: Epic 4

---

### Feature Area: Appointment Reminders

#### Story #14: Send Appointment Reminders

**Description:**
As a system, I want to send appointment reminders, so that students don't miss appointments.

**User Story:**
As a system, I want to automatically send reminders before appointments, so that attendance is improved.

**Acceptance Criteria:**
- Appointment reminder system
- Reminders sent: 24 hours, 2 hours before appointment
- Reminders via email or SMS
- Reminder preferences configurable
- Reminder delivery logged

**Dependencies:**
Depends on: #1, Epic 23

---

#### Story #15: Track Appointment Attendance

**Description:**
As an advisor, I want to track appointment attendance, so that no-shows are identified.

**User Story:**
As an advisor, I want to mark appointments as attended or no-show, so that I can track student engagement.

**Acceptance Criteria:**
- Appointment attendance tracking
- Attendance status: attended, no-show, cancelled, rescheduled
- No-shows can trigger follow-up
- Attendance statistics tracked
- Attendance exportable

**Dependencies:**
Depends on: #1

---

### Feature Area: Advising Analytics

#### Story #16: View Advising Analytics

**Description:**
As an advisor or administrator, I want to view advising analytics, so that advising services are evaluated.

**User Story:**
As an administrator, I want to see statistics on appointment volume, student engagement, and early alert resolution, so that I can assess advising effectiveness.

**Acceptance Criteria:**
- Advising analytics dashboard
- Analytics include: appointment statistics, student engagement, early alert resolution, success plan outcomes
- Analytics filterable by date range or advisor
- Analytics include charts and visualizations
- Analytics exportable

**Dependencies:**
Depends on: #1, #8

---

#### Story #17: Generate Advising Reports

**Description:**
As an administrator, I want to generate advising reports, so that advising activity is documented.

**User Story:**
As an administrator, I want to generate reports on advising services including appointments and outcomes, so that I can report to leadership.

**Acceptance Criteria:**
- Advising report generation interface
- Report types: appointment report, early alert report, success plan report, student engagement report
- Reports filterable by date range or advisor
- Reports exportable to CSV or PDF
- Reports include summary statistics

**Dependencies:**
Depends on: Epic 22

---

