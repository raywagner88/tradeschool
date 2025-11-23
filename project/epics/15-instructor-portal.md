# Epic 15: Instructor Portal

## Overview

Comprehensive instructor-facing portal providing unified access to all instructor tools and information. Instructors can manage classes, enter grades, verify attendance, assess competencies, communicate with students, and view performance analytics.

This epic provides the primary interface for instructors to manage their teaching responsibilities efficiently.

## Key Features

- Instructor dashboard
- Class roster management
- Grade entry and gradebook
- Attendance verification
- Competency assessment
- Session management
- Student communication
- Performance analytics

## Data Models

- `InstructorDashboard` - Dashboard configuration
- `InstructorView` - Instructor-accessible views
- `InstructorPreference` - Instructor preferences
- `ClassRoster` - Class roster views

## User Roles

- **Instructor** - Full access to assigned classes
- **System** - Automated portal updates

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Instructor role and permissions
- **Epic 4 (Directory)**: Student and instructor records
- **Epic 7 (Scheduling)**: Assigned sessions and cohorts
- **Epic 8 (Attendance)**: Attendance verification
- **Epic 9 (Academics)**: Grade entry and competencies

## Integration Points

- **Scheduling (Epic 7)**: Assigned sessions and cohorts
- **Attendance (Epic 8)**: Attendance verification
- **Academics (Epic 9)**: Grade entry and competency assessment
- **Directory (Epic 4)**: Student information
- **Communications (Epic 23)**: Student communication
- **Learning Resources (Epic 16)**: Teaching resources

## Status

**Mandatory - Instructor Experience**

## Technical Notes

- Responsive design for mobile access
- Real-time updates for attendance and grades
- Bulk operations for efficiency
- Offline capability (future)
- Integration with all academic epics

## Stories

### Feature Area: Instructor Dashboard

#### Story #1: View Instructor Dashboard

**Description:**
As an instructor, I want to view my dashboard, so that I can see an overview of my classes and responsibilities.

**User Story:**
As an instructor, I want to see a dashboard with my assigned classes, upcoming sessions, pending tasks, and student alerts, so that I can prioritize my work.

**Acceptance Criteria:**
- Dashboard displays: assigned cohorts, upcoming sessions, pending grades, attendance verifications, student alerts
- Dashboard includes quick links to key areas
- Dashboard updates in real-time
- Dashboard customizable (widgets can be shown/hidden)
- Dashboard responsive for mobile devices

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 7

---

#### Story #2: Customize Dashboard

**Description:**
As an instructor, I want to customize my dashboard, so that I can see the information most relevant to me.

**User Story:**
As an instructor, I want to choose which widgets appear on my dashboard, so that I can personalize my view.

**Acceptance Criteria:**
- Dashboard customization interface
- Widgets can be added, removed, or reordered
- Customization saved per instructor
- Default widgets provided
- Customization changes take effect immediately

**Dependencies:**
Depends on: #1

---

### Feature Area: Class Management

#### Story #3: View Assigned Classes

**Description:**
As an instructor, I want to view my assigned classes, so that I can see all my teaching responsibilities.

**User Story:**
As an instructor, I want to see all cohorts and sessions I'm assigned to, so that I know what I'm teaching.

**Acceptance Criteria:**
- Class list: cohort name, program, schedule, student count, status
- Classes organized by status (active, upcoming, completed)
- Click class to view details
- Classes filterable by program or date
- Classes exportable

**Dependencies:**
Depends on: Epic 7

---

#### Story #4: View Class Roster

**Description:**
As an instructor, I want to view class rosters, so that I can see who's in my classes.

**User Story:**
As an instructor, I want to see all students in my class with their contact information and status, so that I can manage my classes effectively.

**Acceptance Criteria:**
- Roster view: student name, email, phone, enrollment date, status
- Roster searchable by student name
- Roster filterable by status
- Roster exportable to CSV
- Roster printable
- Student details accessible from roster

**Dependencies:**
Depends on: #3, Epic 4

---

#### Story #5: View Student Details

**Description:**
As an instructor, I want to view student details, so that I can understand student backgrounds and needs.

**User Story:**
As an instructor, I want to see student information including contact info, program, and academic status, so that I can provide appropriate support.

**Acceptance Criteria:**
- Student detail view accessible from roster
- Shows: contact info, program, enrollment date, academic status, SAP status
- Student grades and attendance accessible
- Student documents accessible (if permitted)
- Student communication accessible

**Dependencies:**
Depends on: #4

---

### Feature Area: Schedule Management

#### Story #6: View Teaching Schedule

**Description:**
As an instructor, I want to view my teaching schedule, so that I know when and where I'm teaching.

**User Story:**
As an instructor, I want to see my schedule with dates, times, locations, and classes, so that I can plan my teaching.

**Acceptance Criteria:**
- Schedule view: date, time, session, cohort, module, location
- Calendar view (month, week, day)
- List view option
- Upcoming sessions highlighted
- Schedule exportable (iCal format)
- Schedule updates in real-time

**Dependencies:**
Depends on: Epic 7

---

#### Story #7: View Session Details

**Description:**
As an instructor, I want to view session details, so that I can prepare for classes.

**User Story:**
As an instructor, I want to see session information including module, students, resources, and notes, so that I can teach effectively.

**Acceptance Criteria:**
- Session detail view
- Shows: module, students, resources, location, notes
- Session attendance accessible
- Session grades accessible
- Session can be cancelled or updated (if permitted)
- Session history accessible

**Dependencies:**
Depends on: #6, Epic 7

---

### Feature Area: Grade Entry

#### Story #8: Enter Grades

**Description:**
As an instructor, I want to enter grades, so that student performance is recorded.

**User Story:**
As an instructor, I want to enter grades for assessments in my classes, so that students receive feedback on their work.

**Acceptance Criteria:**
- Grade entry interface in session or assessment detail
- Enter grade for each student
- Grade can be: numeric, letter, or pass/fail
- Grade validated (within acceptable range)
- Grade can be saved as draft
- Grade submission date recorded

**Dependencies:**
Depends on: Epic 9

---

#### Story #9: View Gradebook

**Description:**
As an instructor, I want to view my gradebook, so that I can see all grades for my classes.

**User Story:**
As an instructor, I want to see a gradebook with all students and assessments, so that I can track student performance.

**Acceptance Criteria:**
- Gradebook view: students in rows, assessments in columns
- Shows: individual grades, category averages, final grade
- Filter by: session, cohort, module
- Sortable by student name or grade
- Gradebook exportable to CSV
- Gradebook printable

**Dependencies:**
Depends on: #8

---

#### Story #10: Bulk Grade Entry

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

**Dependencies:**
Depends on: #9

---

#### Story #11: Import Grades

**Description:**
As an instructor, I want to import grades from a CSV file, so that I can upload grades from external systems.

**User Story:**
As an instructor, I want to upload a CSV file with student grades, so that I can import grades from spreadsheets.

**Acceptance Criteria:**
- CSV import interface
- CSV template provided
- Required columns: student ID, assessment, grade
- Import preview shows records to be imported
- Validation errors displayed before import
- Import creates or updates grades
- Import results email sent when complete

**Dependencies:**
Depends on: #9

---

### Feature Area: Attendance Verification

#### Story #12: Verify Attendance

**Description:**
As an instructor, I want to verify attendance, so that attendance records are accurate.

**User Story:**
As an instructor, I want to review and verify attendance for my sessions, so that attendance records are correct.

**Acceptance Criteria:**
- Attendance verification interface in session detail
- Shows: student, check-in time, check-out time, hours
- Instructor can: verify all, verify individual, or mark absent
- Verification status: verified, needs review, disputed
- Verification date and instructor recorded
- Verification can add notes/comments

**Dependencies:**
Depends on: Epic 8

---

#### Story #13: View Attendance Summary

**Description:**
As an instructor, I want to view attendance summaries, so that I can see attendance patterns.

**User Story:**
As an instructor, I want to see attendance statistics for my classes, so that I can identify students who need support.

**Acceptance Criteria:**
- Attendance summary view
- Shows: attendance rate, absent students, late students, trends
- Summary filterable by date range or cohort
- Summary exportable
- Summary includes charts and visualizations

**Dependencies:**
Depends on: #12

---

#### Story #14: Manual Attendance Adjustment

**Description:**
As an instructor, I want to manually adjust attendance, so that I can correct errors or add missed records.

**User Story:**
As an instructor, I want to add or modify attendance records manually, so that I can correct mistakes.

**Acceptance Criteria:**
- Manual adjustment interface
- Can add: check-in time, check-out time, hours
- Adjustment requires reason/notes
- Adjustment logged in audit trail
- Adjustment can require approval (if policy)
- Adjustment displayed in attendance history

**Dependencies:**
Depends on: #12

---

### Feature Area: Competency Assessment

#### Story #15: Assess Competencies

**Description:**
As an instructor, I want to assess student competencies, so that skill mastery is tracked.

**User Story:**
As an instructor, I want to sign off on competencies for students, so that we can track which skills students have mastered.

**Acceptance Criteria:**
- Competency assessment interface
- Select competency from module curriculum
- Assess competency: passed, needs improvement, not attempted
- Assessment can include notes/comments
- Assessment date recorded
- Assessment linked to student and module

**Dependencies:**
Depends on: Epic 9

---

#### Story #16: Bulk Competency Assessment

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
Depends on: #15

---

#### Story #17: View Competency Progress

**Description:**
As an instructor, I want to view competency progress, so that I can see which skills students have mastered.

**User Story:**
As an instructor, I want to see competency progress for my students, so that I can identify who needs additional support.

**Acceptance Criteria:**
- Competency progress view
- Shows: student, competencies, status, assessment date
- Competencies grouped by module
- Progress percentage calculated
- Competencies filterable by status
- Progress exportable

**Dependencies:**
Depends on: #15

---

### Feature Area: Student Communication

#### Story #18: Communicate with Students

**Description:**
As an instructor, I want to communicate with students, so that I can provide support and feedback.

**User Story:**
As an instructor, I want to send messages to individual students or the whole class, so that I can communicate important information.

**Acceptance Criteria:**
- Student communication interface
- Can send messages to: individual student, all students in class, specific group
- Message types: email, in-app notification
- Message can include attachments
- Message delivery tracked
- Message history accessible

**Dependencies:**
Depends on: Epic 23

---

#### Story #19: View Student Alerts

**Description:**
As an instructor, I want to view student alerts, so that I can identify students who need attention.

**User Story:**
As an instructor, I want to see alerts for students with low attendance, failing grades, or SAP issues, so that I can provide support.

**Acceptance Criteria:**
- Student alerts displayed in dashboard
- Alerts include: type, student, issue, severity
- Alerts filterable by type or severity
- Alerts clickable to view student details
- Alerts can be dismissed or resolved
- Alert statistics tracked

**Dependencies:**
Depends on: #1, Epic 8, Epic 9, Epic 10

---

### Feature Area: Performance Analytics

#### Story #20: View Class Performance

**Description:**
As an instructor, I want to view class performance analytics, so that I can understand how my classes are performing.

**User Story:**
As an instructor, I want to see performance statistics for my classes including average grades and attendance, so that I can identify areas for improvement.

**Acceptance Criteria:**
- Class performance view
- Shows: average grade, attendance rate, competency completion, trends
- Performance compared across classes (if multiple)
- Performance charts and visualizations
- Performance filterable by date range
- Performance exportable

**Dependencies:**
Depends on: #9, #13, #17

---

#### Story #21: View Student Performance Trends

**Description:**
As an instructor, I want to view student performance trends, so that I can track student progress over time.

**User Story:**
As an instructor, I want to see how individual students are performing over time, so that I can provide targeted support.

**Acceptance Criteria:**
- Student performance trend view
- Shows: grade trends, attendance trends, competency progress
- Trends displayed as charts
- Trends filterable by date range
- Trends exportable
- Trends accessible from student detail

**Dependencies:**
Depends on: #20

---

### Feature Area: Resource Access

#### Story #22: Access Teaching Resources

**Description:**
As an instructor, I want to access teaching resources, so that I can use materials for my classes.

**User Story:**
As an instructor, I want to view learning resources assigned to my modules, so that I can use them in teaching.

**Acceptance Criteria:**
- Teaching resources view
- Resources organized by module or program
- Resources downloadable or viewable online
- Resource access tracked
- Resources searchable
- Resources filterable by type

**Dependencies:**
Depends on: Epic 16 (Learning Resources)

---

#### Story #23: Manage Session Notes

**Description:**
As an instructor, I want to manage session notes, so that I can record class activities and observations.

**User Story:**
As an instructor, I want to add notes to sessions about what was covered and student participation, so that I have a record of class activities.

**Acceptance Criteria:**
- Session notes interface
- Notes can be added, edited, or deleted
- Notes can include: topics covered, student participation, issues, follow-up items
- Notes date and author tracked
- Notes accessible from session detail
- Notes exportable

**Dependencies:**
Depends on: #7

---

