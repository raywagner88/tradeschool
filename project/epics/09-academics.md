# Epic 9: Academics — Grades, Competencies & Assessments

## Overview

Instructor workflows for recording grades, signing off skills/competencies, tracking assessments, managing retakes, and providing remediation.

Students can view progress, and later transcripts/certificates can be generated. Academics integrates tightly with SAP (academic performance side).

## Key Features

- Grade entry and management
- Competency sign-off
- Assessment tracking
- Retake management
- Remediation workflows
- Grade book for instructors
- Student progress views
- Transcript generation (future)
- Certificate generation (future)

## Data Models

- `Grade` - Individual grades
- `Gradebook` - Grade book for cohort/session
- `CompetencyAssessment` - Competency evaluations
- `Assessment` - Tests, quizzes, assignments
- `Retake` - Retake requests and records
- `Remediation` - Remediation plans and tracking
- `GradeCategory` - Grade categories (tests, homework, etc.)
- `Transcript` - Student transcripts (future)

## User Roles

- **Instructor** - Enter grades, assess competencies
- **Registrar** - View and manage grades
- **Student** - View own grades and progress
- **Organization Admin** - Configure grading policies

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 6 (Programs)**: Competencies and modules
- **Epic 7 (Scheduling)**: Sessions for grade entry

## Integration Points

- **SAP (Epic 10)**: Grades used for SAP calculation
- **Programs (Epic 6)**: Competencies from curriculum
- **Scheduling (Epic 7)**: Sessions linked to grades
- **Reporting (Epic 22)**: Grade reports and analytics

## Status

**Mandatory - Academic Tracking**

## Technical Notes

- Support multiple grading scales (percentage, letter, pass/fail)
- Weighted grade categories
- Grade calculation engine
- Competency-based assessment tracking
- Grade import/export capabilities
- Grade history and audit trail

## Stories

### Feature Area: Grade Entry

#### Story #1: Enter Grades for Session

**Description:**
As an instructor, I want to enter grades for students in my session, so that I can record student performance.

**User Story:**
As an instructor, I want to enter grades for an assessment or assignment, so that student progress is tracked.

**Acceptance Criteria:**
- Grade entry interface in session detail
- Select assessment or create new
- Enter grade for each student
- Grade can be: numeric, letter, or pass/fail
- Grade validated (within acceptable range)
- Grade can be saved as draft
- Grade submission date recorded
- Grade entry logged

**Dependencies:**
Depends on: Epic 7

---

#### Story #2: Create Assessment

**Description:**
As an instructor, I want to create assessments, so that I can track different types of evaluations.

**User Story:**
As an instructor, I want to create an assessment with name, type, and due date, so that I can organize grades by assessment type.

**Acceptance Criteria:**
- Assessment creation form: name, type (test, quiz, assignment, project), due date, points possible
- Assessment linked to session or module
- Assessment can have category (homework, test, etc.)
- Assessment can be weighted
- Assessment created in "draft" status
- Assessment can be published when ready
- Creation logged

**Dependencies:**
Depends on: Epic 7

---

#### Story #3: Configure Grade Categories

**Description:**
As an organization admin, I want to configure grade categories, so that grades can be weighted and organized.

**User Story:**
As an organization admin, I want to define grade categories like tests, homework, and projects with weights, so that final grades are calculated correctly.

**Acceptance Criteria:**
- Grade category form: name, weight (percentage), description
- Categories can be: organization-wide or program-specific
- Category weights must sum to 100% (if used)
- Categories displayed in grade entry
- Categories used for grade calculation
- Categories can be updated

**Dependencies:**
Depends on: Epic 2

---

#### Story #4: Calculate Final Grades

**Description:**
As a system, I want to calculate final grades from individual assessments, so that student performance is accurately reflected.

**User Story:**
As a system, I want to calculate final grades using weighted categories and individual grades, so that students receive accurate final scores.

**Acceptance Criteria:**
- Grade calculation engine
- Calculates: category averages, weighted final grade
- Supports: percentage, letter grade, GPA
- Calculation runs automatically when grades updated
- Calculation can be manual override (if instructor)
- Calculation history tracked
- Final grade displayed in grade book

**Dependencies:**
Depends on: #1, #2, #3

---

### Feature Area: Grade Book

#### Story #5: View Grade Book

**Description:**
As an instructor, I want to view my grade book, so that I can see all grades for my sessions.

**User Story:**
As an instructor, I want to see a grade book with all students and assessments, so that I can track student performance.

**Acceptance Criteria:**
- Grade book view: students in rows, assessments in columns
- Shows: individual grades, category averages, final grade
- Filter by: session, cohort, module
- Sortable by student name or grade
- Grade book exportable to CSV
- Grade book printable
- Real-time updates when grades entered

**Dependencies:**
Depends on: #1

---

#### Story #6: Bulk Grade Entry

**Description:**
As an instructor, I want to enter grades for multiple students at once, so that I can efficiently record grades.

**User Story:**
As an instructor, I want to enter grades for all students in a session at once, so that I can quickly complete grade entry.

**Acceptance Criteria:**
- Bulk grade entry interface
- Grid view: students in rows, enter grades in cells
- Grade validation for each entry
- Bulk save all grades at once
- Bulk entry can be saved as draft
- Bulk entry confirmation message
- Individual grades can still be edited

**Dependencies:**
Depends on: #5

---

#### Story #7: Import Grades from CSV

**Description:**
As an instructor, I want to import grades from a CSV file, so that I can upload grades from external systems.

**User Story:**
As an instructor, I want to upload a CSV file with student grades, so that I can import grades from spreadsheets or other systems.

**Acceptance Criteria:**
- CSV import interface
- CSV template provided
- Required columns: student ID, assessment, grade
- Import preview shows records to be imported
- Validation errors displayed before import
- Import creates or updates grades
- Import results email sent when complete
- Import log shows successes and errors

**Dependencies:**
Depends on: #5

---

### Feature Area: Competency Assessment

#### Story #8: Assess Student Competency

**Description:**
As an instructor, I want to assess student competencies, so that I can track skill mastery.

**User Story:**
As an instructor, I want to sign off on competencies for students, so that we can track which skills students have mastered.

**Acceptance Criteria:**
- Competency assessment interface
- Select competency from module curriculum
- Assess competency: passed, needs improvement, not attempted
- Assessment can include notes/comments
- Assessment date recorded
- Assessment linked to student and module
- Assessment displayed in student progress

**Dependencies:**
Depends on: Epic 6, Epic 7

---

#### Story #9: View Student Competency Progress

**Description:**
As an instructor or student, I want to view student competency progress, so that I can see which skills have been mastered.

**User Story:**
As a student, I want to see which competencies I've passed and which I still need to complete, so that I know my progress.

**Acceptance Criteria:**
- Competency progress view
- Shows: competency name, status, assessment date, assessor
- Competencies grouped by module
- Progress percentage calculated
- Competencies can be filtered by status
- Progress exportable
- Visual progress indicators

**Dependencies:**
Depends on: #8

---

#### Story #10: Bulk Competency Assessment

**Description:**
As an instructor, I want to assess competencies for multiple students at once, so that I can efficiently sign off on skills.

**User Story:**
As an instructor, I want to mark competencies as passed for all students who demonstrated mastery, so that I can quickly complete assessments.

**Acceptance Criteria:**
- Bulk assessment interface
- Select competency and students
- Apply assessment to all selected students
- Individual assessments can still be customized
- Bulk assessment logged
- Bulk assessment confirmation message

**Dependencies:**
Depends on: #8

---

### Feature Area: Retakes

#### Story #11: Request Retake

**Description:**
As a student, I want to request a retake for a failed assessment, so that I can improve my grade.

**User Story:**
As a student, I want to submit a retake request with reason, so that I can retake an assessment I failed.

**Acceptance Criteria:**
- Retake request form: assessment, reason, proposed retake date
- Request submitted for instructor approval
- Request status tracked (pending, approved, rejected)
- Request linked to original assessment
- Request notification sent to instructor
- Request can be edited before approval

**Dependencies:**
Depends on: #1

---

#### Story #12: Approve Retake Request

**Description:**
As an instructor, I want to approve or reject retake requests, so that students can retake assessments when appropriate.

**User Story:**
As an instructor, I want to review retake requests and approve them if valid, so that students have opportunities to improve.

**Acceptance Criteria:**
- Retake request list in instructor dashboard
- Request details: student, assessment, reason, proposed date
- Approve or reject with comments
- Approved retake creates new assessment entry
- Retake grade can replace or average with original
- Retake approval logged
- Student notified of decision

**Dependencies:**
Depends on: #11

---

#### Story #13: Record Retake Grade

**Description:**
As an instructor, I want to record retake grades, so that student performance on retakes is tracked.

**User Story:**
As an instructor, I want to enter the grade for a retake assessment, so that the student's grade is updated.

**Acceptance Criteria:**
- Retake grade entry interface
- Enter grade for retake assessment
- Grade can replace original or be averaged
- Grade calculation policy configurable
- Retake grade displayed in grade book
- Retake grade logged
- Original grade preserved for history

**Dependencies:**
Depends on: #12

---

### Feature Area: Remediation

#### Story #14: Create Remediation Plan

**Description:**
As an instructor, I want to create remediation plans for struggling students, so that they can receive additional support.

**User Story:**
As an instructor, I want to create a remediation plan with goals and activities, so that students can improve their performance.

**Acceptance Criteria:**
- Remediation plan form: student, goals, activities, timeline
- Plan linked to specific competencies or assessments
- Plan can have milestones
- Plan status tracked (active, completed, cancelled)
- Plan can be assigned to student or support staff
- Plan creation logged

**Dependencies:**
Depends on: #8

---

#### Story #15: Track Remediation Progress

**Description:**
As an instructor or student, I want to track remediation progress, so that we can monitor improvement.

**User Story:**
As a student, I want to see my remediation plan and track my progress, so that I know what I need to do to improve.

**Acceptance Criteria:**
- Remediation progress view
- Shows: goals, activities, milestones, status
- Progress percentage calculated
- Milestones can be marked complete
- Progress updates logged
- Progress can trigger competency reassessment
- Progress exportable

**Dependencies:**
Depends on: #14

---

### Feature Area: Student Progress

#### Story #16: View Student Grades

**Description:**
As a student, I want to view my grades, so that I can track my academic performance.

**User Story:**
As a student, I want to see all my grades organized by session and assessment, so that I know how I'm performing.

**Acceptance Criteria:**
- Student grade view
- Shows: assessments, grades, category averages, final grade
- Grades organized by session or module
- Grade history displayed
- Missing grades highlighted
- Grades exportable
- Grade trends visible (if available)

**Dependencies:**
Depends on: #1

---

#### Story #17: View Student Progress Summary

**Description:**
As a student or staff member, I want to view a student progress summary, so that overall performance is visible.

**User Story:**
As a student, I want to see my overall progress including grades, competencies, and attendance, so that I have a complete picture of my performance.

**Acceptance Criteria:**
- Progress summary dashboard
- Shows: overall GPA, competency completion, attendance rate, SAP status
- Visual progress indicators
- Progress by module or program
- Progress trends over time
- Progress exportable
- Progress can trigger alerts (if below threshold)

**Dependencies:**
Depends on: #16, #9, Epic 8, Epic 10

---

### Feature Area: Grade Management

#### Story #18: Update Grade

**Description:**
As an instructor, I want to update grades, so that I can correct errors or adjust grades.

**User Story:**
As an instructor, I want to edit a grade I previously entered, so that I can correct mistakes.

**Acceptance Criteria:**
- Grade edit interface
- Can update: grade value, assessment, date
- Grade change requires reason/notes
- Grade change logged in audit trail
- Grade change can require approval (if policy)
- Grade change notification sent to student (optional)
- Original grade preserved in history

**Dependencies:**
Depends on: #1

---

#### Story #19: Delete Grade

**Description:**
As an instructor, I want to delete grades, so that I can remove incorrect entries.

**User Story:**
As an instructor, I want to delete a grade that was entered incorrectly, so that it doesn't affect student records.

**Acceptance Criteria:**
- Grade delete interface
- Delete requires confirmation
- Delete requires reason/notes
- Delete logged in audit trail
- Delete can require approval (if policy)
- Deleted grade preserved in history (soft delete)
- Grade recalculation after delete

**Dependencies:**
Depends on: #1

---

#### Story #20: Audit Grade Changes

**Description:**
As a system, I want to audit all grade changes, so that we can track modifications and maintain data integrity.

**User Story:**
As a system, I want to log all grade changes including who changed what and when, so that we have a complete audit trail.

**Acceptance Criteria:**
- All grade changes logged
- Log includes: grade ID, old value, new value, changed by, timestamp, reason
- Log entries immutable
- Log searchable and filterable
- Log displayed in grade detail
- Log exportable for compliance
- Log retention policy configurable

**Dependencies:**
Depends on: #18, #19

---

