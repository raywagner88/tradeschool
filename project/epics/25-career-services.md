# Epic 25: Career Services

## Overview

Helps students with resume uploads, interview tracking, job leads, coaching interactions, and long-term outcomes.

This epic supports career services departments in helping students prepare for and find employment after graduation.

## Key Features

- Resume management
- Interview tracking
- Job lead management
- Career coaching
- Job application tracking
- Long-term outcomes tracking
- Career services reporting

## Data Models

- `Resume` - Student resumes
- `Interview` - Interview records
- `JobLead` - Job opportunity listings
- `CoachingSession` - Career coaching interactions
- `JobApplication` - Job application tracking
- `CareerOutcome` - Long-term employment outcomes
- `CareerGoal` - Student career goals

## User Roles

- **Career Services Staff** - Manage job leads and coaching
- **Student** - Upload resumes and track applications
- **Organization Admin** - Configure career services settings

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records

## Integration Points

- **Externships (Epic 24)**: Job placements and outcomes
- **Reporting (Epic 22)**: Career services reports
- **Directory (Epic 4)**: Student records

## Status

**Future**

## Technical Notes

- Resume file storage and parsing
- Job lead integration with job boards (future)
- Interview scheduling integration (future)
- Long-term outcome tracking and surveys
- Career services analytics

## Stories

### Feature Area: Resume Management

#### Story #1: Upload Resume

**Description:**
As a student, I want to upload my resume, so that career services can review it and help me improve it.

**User Story:**
As a student, I want to upload a resume file, so that I can get feedback and use it for job applications.

**Acceptance Criteria:**
- Resume upload interface
- Accepts common file formats: PDF, Word, text
- File size limit enforced
- Resume linked to student
- Resume can be replaced or updated
- Resume can be marked as primary
- Resume stored securely

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 4

---

#### Story #2: View Student Resumes

**Description:**
As a career services staff member, I want to view student resumes, so that I can provide feedback and assistance.

**User Story:**
As a career services staff member, I want to see all resumes for a student, so that I can review and provide feedback.

**Acceptance Criteria:**
- Resume list in student detail
- Resumes show: upload date, file name, primary status
- Resume preview available
- Resume downloadable
- Resume can be deleted (with permission)
- Resume feedback can be added

**Dependencies:**
Depends on: #1

---

#### Story #3: Provide Resume Feedback

**Description:**
As a career services staff member, I want to provide resume feedback, so that students can improve their resumes.

**User Story:**
As a career services staff member, I want to add comments and suggestions to a student's resume, so that they can make improvements.

**Acceptance Criteria:**
- Resume feedback interface
- Feedback form: comments, suggestions, rating
- Feedback linked to resume
- Feedback visible to student
- Feedback can be updated
- Feedback date and reviewer tracked

**Dependencies:**
Depends on: #2

---

### Feature Area: Interview Tracking

#### Story #4: Schedule Interview

**Description:**
As a career services staff member or student, I want to schedule interviews, so that interview appointments are tracked.

**User Story:**
As a student, I want to schedule an interview with an employer, so that I can track my interview schedule.

**Acceptance Criteria:**
- Interview scheduling interface
- Interview form: date, time, employer, position, location, type (phone, video, in-person)
- Interview linked to student and job lead (if applicable)
- Interview status tracked (scheduled, completed, cancelled, no-show)
- Interview reminders can be sent
- Interview creation logged

**Dependencies:**
Depends on: Epic 4

---

#### Story #5: View Interview List

**Description:**
As a career services staff member or student, I want to view interviews, so that interview schedules are visible.

**User Story:**
As a student, I want to see all my scheduled interviews, so that I can prepare and track my interview activity.

**Acceptance Criteria:**
- Interview list: date, time, employer, position, status
- Filter by: status, date range, employer
- Sortable by date
- Upcoming interviews highlighted
- Interview details accessible
- Interviews exportable

**Dependencies:**
Depends on: #4

---

#### Story #6: Record Interview Outcome

**Description:**
As a student or career services staff member, I want to record interview outcomes, so that interview results are tracked.

**User Story:**
As a student, I want to record the outcome of an interview, so that I can track my job search progress.

**Acceptance Criteria:**
- Interview outcome interface
- Outcome options: offer received, rejected, no response, callback scheduled
- Outcome can include notes
- Outcome date recorded
- Outcome linked to interview
- Outcome used for job application tracking

**Dependencies:**
Depends on: #5

---

### Feature Area: Job Lead Management

#### Story #7: Create Job Lead

**Description:**
As a career services staff member, I want to create job leads, so that students can see available opportunities.

**User Story:**
As a career services staff member, I want to create a job lead with employer, position, and requirements, so that students can find job opportunities.

**Acceptance Criteria:**
- Job lead creation form: employer, position, description, requirements, salary range, location, contact
- Job lead assigned unique identifier
- Job lead status tracked (active, filled, expired)
- Job lead linked to employer contact (if exists)
- Job lead creation logged

**Dependencies:**
Depends on: Epic 2, Epic 3

---

#### Story #8: View Job Lead List

**Description:**
As a student or career services staff member, I want to view job leads, so that available opportunities are visible.

**User Story:**
As a student, I want to see all active job leads, so that I can find job opportunities.

**Acceptance Criteria:**
- Job lead list: employer, position, location, posted date, status
- Search by employer, position, location
- Filter by: status, date range, program relevance
- Sortable columns
- Click job lead to view details
- Job leads exportable

**Dependencies:**
Depends on: #7

---

#### Story #9: Apply to Job Lead

**Description:**
As a student, I want to apply to job leads, so that my applications are tracked.

**User Story:**
As a student, I want to mark that I've applied to a job lead, so that career services can track my applications.

**Acceptance Criteria:**
- Job application interface
- Application form: job lead, application date, resume used, cover letter (optional), status
- Application linked to student and job lead
- Application status tracked (applied, interview scheduled, offer, rejected)
- Application can be updated
- Application creation logged

**Dependencies:**
Depends on: #7, #1

---

#### Story #10: Track Job Applications

**Description:**
As a student or career services staff member, I want to track job applications, so that application status is visible.

**User Story:**
As a student, I want to see all my job applications with their status, so that I can track my job search progress.

**Acceptance Criteria:**
- Job application list: job lead, application date, status, outcome
- Filter by: status, date range
- Sortable by date or status
- Application details accessible
- Applications exportable
- Application statistics displayed

**Dependencies:**
Depends on: #9

---

### Feature Area: Career Coaching

#### Story #11: Schedule Coaching Session

**Description:**
As a student or career services staff member, I want to schedule coaching sessions, so that career guidance is provided.

**User Story:**
As a student, I want to schedule a coaching session with career services, so that I can get help with my job search.

**Acceptance Criteria:**
- Coaching session scheduling interface
- Session form: date, time, student, staff member, topic, type (in-person, phone, video)
- Session status tracked (scheduled, completed, cancelled)
- Session reminders can be sent
- Session creation logged

**Dependencies:**
Depends on: Epic 4

---

#### Story #12: Record Coaching Session Notes

**Description:**
As a career services staff member, I want to record coaching session notes, so that session outcomes are documented.

**User Story:**
As a career services staff member, I want to add notes about what was discussed in a coaching session, so that we can track student progress.

**Acceptance Criteria:**
- Coaching session notes interface
- Notes form: topics discussed, action items, follow-up needed
- Notes linked to session
- Notes visible to staff (student access optional)
- Notes can be updated
- Notes date and author tracked

**Dependencies:**
Depends on: #11

---

#### Story #13: View Coaching History

**Description:**
As a career services staff member or student, I want to view coaching history, so that session records are accessible.

**User Story:**
As a student, I want to see my coaching session history, so that I can review past guidance and action items.

**Acceptance Criteria:**
- Coaching history list: date, staff member, topic, notes summary
- Filter by: date range, staff member, topic
- Sortable by date
- Session details accessible
- History exportable

**Dependencies:**
Depends on: #12

---

### Feature Area: Career Goals

#### Story #14: Set Career Goals

**Description:**
As a student, I want to set career goals, so that I can track my career objectives.

**User Story:**
As a student, I want to define my career goals including desired position, industry, and timeline, so that career services can help me achieve them.

**Acceptance Criteria:**
- Career goal interface
- Goal form: goal description, target position, industry, target date, status
- Multiple goals per student
- Goals can be updated or completed
- Goals displayed in student profile
- Goals used for coaching and job matching

**Dependencies:**
Depends on: Epic 4

---

#### Story #15: Track Goal Progress

**Description:**
As a student or career services staff member, I want to track goal progress, so that goal achievement is monitored.

**User Story:**
As a student, I want to update my goal progress, so that I can see how I'm progressing toward my career objectives.

**Acceptance Criteria:**
- Goal progress interface
- Progress can be updated with notes
- Goals can be marked as achieved
- Progress history tracked
- Progress displayed in goal detail
- Progress used for reporting

**Dependencies:**
Depends on: #14

---

### Feature Area: Long-Term Outcomes

#### Story #16: Track Employment Outcomes

**Description:**
As a career services staff member, I want to track long-term employment outcomes, so that graduate success is measured.

**User Story:**
As a career services staff member, I want to record employment outcomes for graduates, so that we can measure program success.

**Acceptance Criteria:**
- Outcome tracking interface
- Outcomes include: employment status, job title, employer, salary, start date, satisfaction
- Outcomes linked to student
- Outcomes can be updated over time
- Outcomes tracked at: graduation, 6 months, 1 year, 2 years
- Outcomes used for reporting

**Dependencies:**
Depends on: Epic 4

---

#### Story #17: Survey Graduates

**Description:**
As a system, I want to send outcome surveys to graduates, so that employment data is collected.

**User Story:**
As a system, I want to automatically send surveys to graduates at intervals, so that we can track long-term outcomes.

**Acceptance Criteria:**
- Survey scheduling interface
- Surveys sent at: graduation, 6 months, 1 year, 2 years
- Survey includes: employment questions, satisfaction questions
- Survey responses stored
- Survey completion tracked
- Survey reminders sent if not completed

**Dependencies:**
Depends on: #16, Epic 23

---

#### Story #18: Generate Career Services Reports

**Description:**
As a career services staff member, I want to generate career services reports, so that outcomes and services are measured.

**User Story:**
As a career services staff member, I want to generate reports showing job placement rates, coaching sessions, and outcomes, so that I can measure department effectiveness.

**Acceptance Criteria:**
- Career services report generation interface
- Report types: placement rate, employment outcomes, coaching statistics, job lead statistics
- Reports filterable by date range, program
- Reports include summary statistics
- Reports exportable to CSV or PDF
- Reports formatted for accreditation (if needed)

**Dependencies:**
Depends on: #16, Epic 22

---

