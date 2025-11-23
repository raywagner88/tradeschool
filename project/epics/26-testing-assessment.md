# Epic 26: Testing & Assessment Platform

## Overview

Comprehensive online testing and assessment platform for creating, delivering, and grading exams. Supports question banks, automated grading, proctoring integration, test security, scheduling, and detailed analytics.

This epic enables schools to conduct secure online assessments and track student performance through standardized testing.

## Key Features

- Online exam creation and management
- Question bank management
- Automated grading
- Proctoring integration
- Test security and anti-cheating measures
- Test scheduling and delivery
- Assessment analytics
- Question randomization

## Data Models

- `Assessment` - Test/exam definitions
- `Question` - Question records
- `QuestionBank` - Question bank collections
- `TestSession` - Student test sessions
- `TestResponse` - Student answers
- `TestResult` - Graded test results
- `ProctoringSession` - Proctoring records
- `TestSchedule` - Scheduled test sessions

## User Roles

- **Instructor** - Create and grade assessments
- **Student** - Take assessments
- **Organization Admin** - Configure testing settings
- **Proctor** - Monitor test sessions (if applicable)

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 6 (Programs)**: Assessment assignment to modules
- **Epic 9 (Academics)**: Grades integration

## Integration Points

- **Academics (Epic 9)**: Test grades integrated into gradebook
- **Programs (Epic 6)**: Assessments assigned to modules
- **Scheduling (Epic 7)**: Test sessions scheduled
- **Student Portal (Epic 14)**: Students take tests
- **Instructor Portal (Epic 15)**: Instructors create tests

## Status

**Upcoming**

## Technical Notes

- Secure test delivery with anti-cheating measures
- Real-time proctoring integration
- Question randomization and versioning
- Automated grading engine
- Test session recording (if proctored)
- High-performance for concurrent test takers

## Stories

### Feature Area: Assessment Creation

#### Story #1: Create Assessment

**Description:**
As an instructor, I want to create assessments, so that I can test student knowledge.

**User Story:**
As an instructor, I want to create an assessment with name, description, time limit, and question types, so that I can evaluate student learning.

**Acceptance Criteria:**
- Assessment creation form: name, description, time limit, passing score, question types
- Assessment types: exam, quiz, practice test, competency assessment
- Assessment can be: timed or untimed, proctored or unproctored
- Assessment linked to module or program
- Assessment created in "draft" status
- Assessment can be published when ready

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 6

---

#### Story #2: Configure Assessment Settings

**Description:**
As an instructor, I want to configure assessment settings, so that tests are delivered according to my requirements.

**User Story:**
As an instructor, I want to set time limits, attempt limits, and security settings, so that assessments are properly controlled.

**Acceptance Criteria:**
- Assessment settings interface
- Settings include: time limit, attempt limit, shuffle questions, shuffle answers, show results, allow review
- Security settings: require proctoring, disable copy/paste, full-screen mode
- Settings can be updated
- Settings saved with assessment

**Dependencies:**
Depends on: #1

---

#### Story #3: View Assessment List

**Description:**
As an instructor, I want to view my assessments, so that I can manage tests.

**User Story:**
As an instructor, I want to see all my assessments with their status and usage, so that I can track test activity.

**Acceptance Criteria:**
- Assessment list: name, type, module, status, attempts count, average score
- Search by name or module
- Filter by: status, type, module
- Sortable columns
- Click assessment to view details
- Assessments exportable

**Dependencies:**
Depends on: #1

---

### Feature Area: Question Bank Management

#### Story #4: Create Question

**Description:**
As an instructor, I want to create questions, so that I can build question banks.

**User Story:**
As an instructor, I want to create questions with different types including multiple choice, true/false, and essay, so that I can assess various skills.

**Acceptance Criteria:**
- Question creation form: type, question text, answers, correct answer, points, difficulty
- Question types: multiple choice, true/false, short answer, essay, matching, fill-in-the-blank
- Questions can include images or media
- Questions can have explanations
- Questions saved to question bank
- Question creation logged

**Dependencies:**
Depends on: Epic 2, Epic 3

---

#### Story #5: Manage Question Bank

**Description:**
As an instructor, I want to manage question banks, so that I can organize questions.

**User Story:**
As an instructor, I want to create question banks and organize questions by topic, so that I can reuse questions across assessments.

**Acceptance Criteria:**
- Question bank creation interface
- Banks can be organized by: topic, module, difficulty, type
- Questions can be moved between banks
- Banks can be shared (if permitted)
- Banks searchable
- Banks exportable

**Dependencies:**
Depends on: #4

---

#### Story #6: Import Questions

**Description:**
As an instructor, I want to import questions, so that I can bulk add questions.

**User Story:**
As an instructor, I want to import questions from a CSV or QTI file, so that I can quickly build question banks.

**Acceptance Criteria:**
- Question import interface
- Supports: CSV, QTI format
- Import template provided
- Import preview shows questions to be imported
- Validation errors displayed
- Import creates questions in question bank
- Import results provided

**Dependencies:**
Depends on: #4

---

### Feature Area: Assessment Assembly

#### Story #7: Add Questions to Assessment

**Description:**
As an instructor, I want to add questions to assessments, so that tests are complete.

**User Story:**
As an instructor, I want to select questions from question banks and add them to an assessment, so that I can build comprehensive tests.

**Acceptance Criteria:**
- Question selection interface in assessment editor
- Select questions from question banks
- Questions can be: required or randomly selected from pool
- Questions can be reordered
- Question points configurable per assessment
- Questions displayed in assessment preview

**Dependencies:**
Depends on: #1, #4

---

#### Story #8: Randomize Questions

**Description:**
As an instructor, I want to randomize questions, so that each student gets a different version of the test.

**User Story:**
As an instructor, I want to set questions to be randomly selected from pools, so that test security is improved.

**Acceptance Criteria:**
- Question randomization configuration
- Questions can be randomly selected from pools
- Number of questions per pool configurable
- Randomization can be: all questions or specific sections
- Randomization settings saved
- Randomization preview available

**Dependencies:**
Depends on: #7

---

#### Story #9: Preview Assessment

**Description:**
As an instructor, I want to preview assessments, so that I can verify tests before publishing.

**User Story:**
As an instructor, I want to see how an assessment will appear to students, so that I can ensure it's correct.

**Acceptance Criteria:**
- Assessment preview interface
- Preview shows: questions, time limit, settings
- Preview can be taken as student would see it
- Preview results shown
- Preview can be saved as draft

**Dependencies:**
Depends on: #7

---

### Feature Area: Test Delivery

#### Story #10: Schedule Test Session

**Description:**
As an instructor, I want to schedule test sessions, so that students know when to take tests.

**User Story:**
As an instructor, I want to schedule a test session with start and end times, so that students can take the test during the scheduled window.

**Acceptance Criteria:**
- Test session scheduling interface
- Session includes: assessment, start time, end time, duration, students
- Session can be: open window or specific time
- Session notifications sent to students
- Session displayed in student portal
- Session can be cancelled or rescheduled

**Dependencies:**
Depends on: #1, Epic 7

---

#### Story #11: Take Assessment

**Description:**
As a student, I want to take assessments, so that I can demonstrate my knowledge.

**User Story:**
As a student, I want to access and complete an assessment online, so that I can take tests conveniently.

**Acceptance Criteria:**
- Assessment interface in student portal
- Assessment displays: questions, timer, progress
- Questions can be answered and saved
- Assessment can be paused (if allowed)
- Assessment submitted when complete or time expires
- Assessment submission confirmed

**Dependencies:**
Depends on: #10, Epic 14

---

#### Story #12: Enforce Test Security

**Description:**
As a system, I want to enforce test security, so that cheating is prevented.

**User Story:**
As a system, I want to prevent students from copying, pasting, or leaving the test page, so that test integrity is maintained.

**Acceptance Criteria:**
- Security measures: disable copy/paste, full-screen mode, prevent tab switching
- Security violations logged
- Security violations can trigger test termination
- Security settings configurable per assessment
- Security warnings displayed to students

**Dependencies:**
Depends on: #11

---

### Feature Area: Proctoring

#### Story #13: Integrate Proctoring Service

**Description:**
As an organization admin, I want to integrate a proctoring service, so that tests can be monitored.

**User Story:**
As an organization admin, I want to connect to a proctoring service like ProctorU or Examity, so that high-stakes tests are proctored.

**Acceptance Criteria:**
- Proctoring service configuration
- Service integration: API connection, authentication
- Proctoring can be: required or optional per assessment
- Proctoring session created automatically
- Proctoring results received and stored
- Proctoring integration logged

**Dependencies:**
Depends on: Epic 2, Epic 19

---

#### Story #14: Monitor Proctored Session

**Description:**
As a proctor, I want to monitor proctored sessions, so that test integrity is maintained.

**User Story:**
As a proctor, I want to view live proctoring feeds and flag suspicious activity, so that cheating is detected.

**Acceptance Criteria:**
- Proctoring monitoring interface
- Live session feeds displayed
- Suspicious activity can be flagged
- Flags logged with details
- Flags can trigger test termination
- Proctoring session recorded

**Dependencies:**
Depends on: #13

---

#### Story #15: Review Proctoring Results

**Description:**
As an instructor, I want to review proctoring results, so that I can verify test integrity.

**User Story:**
As an instructor, I want to see proctoring reports including flags and recordings, so that I can investigate suspicious activity.

**Acceptance Criteria:**
- Proctoring results view
- Results show: flags, recordings, session details
- Recordings viewable
- Flags can be reviewed and resolved
- Results exportable
- Results linked to test session

**Dependencies:**
Depends on: #14

---

### Feature Area: Grading

#### Story #16: Auto-Grade Assessment

**Description:**
As a system, I want to automatically grade assessments, so that results are available immediately.

**User Story:**
As a system, I want to grade multiple choice and true/false questions automatically, so that students receive instant feedback.

**Acceptance Criteria:**
- Auto-grading engine
- Grades: multiple choice, true/false, matching automatically
- Grades calculated based on points
- Grades stored in test result
- Grades can be reviewed before release
- Auto-grading logged

**Dependencies:**
Depends on: #11

---

#### Story #17: Grade Essay Questions

**Description:**
As an instructor, I want to grade essay questions, so that subjective answers are evaluated.

**User Story:**
As an instructor, I want to review and grade essay responses, so that students receive feedback on written work.

**Acceptance Criteria:**
- Essay grading interface
- Essay responses displayed
- Grades entered with comments
- Rubrics can be used for grading
- Grades saved and linked to test result
- Grading completion tracked

**Dependencies:**
Depends on: #11

---

#### Story #18: Release Test Results

**Description:**
As an instructor, I want to release test results, so that students can see their scores.

**User Story:**
As an instructor, I want to release test results with or without showing correct answers, so that students can review their performance.

**Acceptance Criteria:**
- Test result release interface
- Results can be: released immediately, released after grading, released on date
- Release options: score only, score with answers, score with explanations
- Results displayed in student portal
- Results notification sent
- Release date recorded

**Dependencies:**
Depends on: #16, #17

---

### Feature Area: Test Analytics

#### Story #19: View Test Analytics

**Description:**
As an instructor, I want to view test analytics, so that I can understand student performance.

**User Story:**
As an instructor, I want to see statistics on test performance including average scores and question analysis, so that I can improve assessments.

**Acceptance Criteria:**
- Test analytics dashboard
- Analytics include: average score, pass rate, question difficulty, time analysis
- Analytics filterable by date range or student group
- Analytics include charts and visualizations
- Analytics exportable

**Dependencies:**
Depends on: #16

---

#### Story #20: Analyze Question Performance

**Description:**
As an instructor, I want to analyze question performance, so that I can identify problematic questions.

**User Story:**
As an instructor, I want to see how many students answered each question correctly, so that I can improve question quality.

**Acceptance Criteria:**
- Question performance analysis
- Shows: correct answer rate, answer distribution, difficulty index
- Questions with low correct rates highlighted
- Question analysis exportable
- Question analysis used to improve questions

**Dependencies:**
Depends on: #19

---

### Feature Area: Retakes and Remediation

#### Story #21: Allow Test Retakes

**Description:**
As an instructor, I want to allow test retakes, so that students can improve their scores.

**User Story:**
As an instructor, I want to configure retake settings including attempt limits and score replacement, so that students have opportunities to improve.

**Acceptance Criteria:**
- Retake configuration interface
- Settings include: max attempts, score replacement (highest, average, latest)
- Retakes can be scheduled automatically or manually
- Retake history tracked
- Retake settings saved

**Dependencies:**
Depends on: #1

---

#### Story #22: Require Remediation Before Retake

**Description:**
As an instructor, I want to require remediation before retakes, so that students review material.

**User Story:**
As an instructor, I want to require students to complete remediation activities before retaking a test, so that they learn from mistakes.

**Acceptance Criteria:**
- Remediation requirement configuration
- Remediation activities: review materials, complete assignments, meet with instructor
- Remediation completion tracked
- Retake blocked until remediation complete
- Remediation requirements displayed to students

**Dependencies:**
Depends on: #21, Epic 9

---

### Feature Area: Test Integration

#### Story #23: Integrate Test Grades with Gradebook

**Description:**
As a system, I want to integrate test grades with the gradebook, so that test scores are included in overall grades.

**User Story:**
As a system, I want to automatically add test grades to the gradebook, so that instructors don't have to enter them manually.

**Acceptance Criteria:**
- Test grade integration with gradebook
- Grades automatically added when test completed
- Grades can be: auto-added or require approval
- Grades displayed in gradebook
- Grade integration logged

**Dependencies:**
Depends on: #16, Epic 9

---

#### Story #24: Export Test Results

**Description:**
As an instructor, I want to export test results, so that I can analyze data externally.

**User Story:**
As an instructor, I want to export test results to CSV or Excel, so that I can perform additional analysis.

**Acceptance Criteria:**
- Test result export interface
- Export includes: student, score, answers, time taken
- Export formats: CSV, Excel
- Export filterable by date range or student group
- Export processed in background job
- Export download link provided

**Dependencies:**
Depends on: #16

---

