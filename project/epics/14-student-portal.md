# Epic 14: Student Portal

## Overview

Comprehensive student-facing portal providing unified access to all student information, services, and self-service capabilities. Students can view grades, attendance, schedules, financial information, submit documents, make payments, and access resources.

This epic provides the primary interface for students to interact with the system and manage their educational journey.

## Key Features

- Student dashboard
- Academic information (grades, attendance, SAP)
- Schedule and calendar access
- Financial information and payments
- Document submission
- Profile management
- Notifications and communications
- Resource access

## Data Models

- `StudentDashboard` - Dashboard configuration
- `StudentView` - Student-accessible views
- `StudentPreference` - Student preferences
- `StudentNotification` - Student notifications (extends Epic 23)

## User Roles

- **Student** - Full access to own portal
- **System** - Automated portal updates

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Student role and permissions
- **Epic 4 (Directory)**: Student records
- **All Data Epics**: Portal displays data from all features

## Integration Points

- **Directory (Epic 4)**: Student profile and information
- **Academics (Epic 9)**: Grades and competencies
- **Attendance (Epic 8)**: Attendance records
- **SAP (Epic 10)**: SAP status
- **Finance (Epic 11)**: Financial information and payments
- **Financial Aid (Epic 12)**: Financial aid information
- **Scheduling (Epic 7)**: Class schedules
- **Communications (Epic 23)**: Notifications
- **Learning Resources (Epic 16)**: Resource access
- **Transcript & Certificates (Epic 17)**: Transcript requests
- **Career Services (Epic 25)**: Career services access

## Status

**Mandatory - Student Experience**

## Technical Notes

- Responsive design for mobile access
- Real-time updates via WebSockets
- Secure student data access
- Self-service capabilities
- Integration with all data epics

## Stories

### Feature Area: Student Dashboard

#### Story #1: View Student Dashboard

**Description:**
As a student, I want to view my dashboard, so that I can see an overview of my academic and financial status.

**User Story:**
As a student, I want to see a dashboard with my grades, attendance, schedule, and financial balance, so that I have a complete picture of my status.

**Acceptance Criteria:**
- Dashboard displays: current GPA, attendance rate, SAP status, financial balance, upcoming classes
- Dashboard includes quick links to key areas
- Dashboard updates in real-time
- Dashboard customizable (widgets can be shown/hidden)
- Dashboard responsive for mobile devices

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 4

---

#### Story #2: Customize Dashboard

**Description:**
As a student, I want to customize my dashboard, so that I can see the information most relevant to me.

**User Story:**
As a student, I want to choose which widgets appear on my dashboard, so that I can personalize my view.

**Acceptance Criteria:**
- Dashboard customization interface
- Widgets can be added, removed, or reordered
- Customization saved per student
- Default widgets provided
- Customization changes take effect immediately

**Dependencies:**
Depends on: #1

---

### Feature Area: Academic Information

#### Story #3: View Grades

**Description:**
As a student, I want to view my grades, so that I can track my academic performance.

**User Story:**
As a student, I want to see all my grades organized by session and assessment, so that I know how I'm performing.

**Acceptance Criteria:**
- Grades view shows: assessments, grades, category averages, final grade
- Grades organized by session or module
- Grade history displayed
- Missing grades highlighted
- Grades exportable
- Grade trends visible (if available)

**Dependencies:**
Depends on: Epic 9

---

#### Story #4: View Competency Progress

**Description:**
As a student, I want to view my competency progress, so that I can see which skills I've mastered.

**User Story:**
As a student, I want to see which competencies I've passed and which I still need to complete, so that I know my progress.

**Acceptance Criteria:**
- Competency progress view
- Shows: competency name, status, assessment date
- Competencies grouped by module
- Progress percentage calculated
- Competencies filterable by status
- Progress exportable

**Dependencies:**
Depends on: Epic 9

---

#### Story #5: View Attendance Records

**Description:**
As a student, I want to view my attendance records, so that I can track my attendance hours.

**User Story:**
As a student, I want to see my attendance history including check-in/out times and hours, so that I can monitor my progress.

**Acceptance Criteria:**
- Attendance list: date, session, check-in time, check-out time, hours, status
- Filter by: date range, cohort, session
- Total hours calculated and displayed
- Attendance percentage calculated
- Attendance exportable

**Dependencies:**
Depends on: Epic 8

---

#### Story #6: View SAP Status

**Description:**
As a student, I want to view my SAP status, so that I know if I'm meeting requirements.

**User Story:**
As a student, I want to see my SAP status including pace, GPA, and overall status, so that I can take corrective action if needed.

**Acceptance Criteria:**
- SAP status view
- Shows: current status, pace percentage, GPA, evaluation date, next evaluation date
- Status history displayed
- Visual indicators (green, yellow, red)
- Status details and requirements explained
- Status exportable

**Dependencies:**
Depends on: Epic 10

---

### Feature Area: Schedule Access

#### Story #7: View Class Schedule

**Description:**
As a student, I want to view my class schedule, so that I know when and where my classes are.

**User Story:**
As a student, I want to see my schedule with dates, times, locations, and instructors, so that I can plan my attendance.

**Acceptance Criteria:**
- Schedule view: date, time, session, module, instructor, location
- Calendar view (month, week, day)
- List view option
- Upcoming classes highlighted
- Schedule exportable (iCal format)
- Schedule updates in real-time

**Dependencies:**
Depends on: Epic 7

---

#### Story #8: View Cohort Information

**Description:**
As a student, I want to view my cohort information, so that I can see who's in my class.

**User Story:**
As a student, I want to see information about my cohort including classmates and program details, so that I can connect with peers.

**Acceptance Criteria:**
- Cohort information view
- Shows: cohort name, program, start date, classmates (if permitted)
- Cohort schedule accessible
- Cohort resources accessible
- Cohort information exportable

**Dependencies:**
Depends on: Epic 7

---

### Feature Area: Financial Information

#### Story #9: View Financial Balance

**Description:**
As a student, I want to view my financial balance, so that I know what I owe.

**User Story:**
As a student, I want to see my current balance, charges, and payments, so that I understand my financial obligations.

**Acceptance Criteria:**
- Financial balance view
- Shows: current balance, charges, payments, financial aid
- Balance breakdown by category
- Payment history displayed
- Upcoming charges highlighted
- Balance exportable

**Dependencies:**
Depends on: Epic 11

---

#### Story #10: View Financial Aid

**Description:**
As a student, I want to view my financial aid information, so that I know what aid I'm receiving.

**User Story:**
As a student, I want to see my financial aid package including grants and loans, so that I understand my aid.

**Acceptance Criteria:**
- Financial aid view
- Shows: aid package, awards, disbursements, remaining eligibility
- Aid organized by type
- Aid totals calculated
- Aid exportable

**Dependencies:**
Depends on: Epic 12 (Financial Aid)

---

#### Story #11: Make Payment

**Description:**
As a student, I want to make payments online, so that I can settle my account.

**User Story:**
As a student, I want to pay my balance using a credit card, so that I can pay conveniently.

**Acceptance Criteria:**
- Payment interface
- Payment amount can be full balance or partial
- Payment processed via Stripe
- Payment confirmation and receipt
- Payment reflected immediately in balance
- Payment history updated

**Dependencies:**
Depends on: #9, Epic 11

---

#### Story #12: View Payment History

**Description:**
As a student, I want to view my payment history, so that I can track my payments.

**User Story:**
As a student, I want to see all my payments including dates and amounts, so that I have a record of payments.

**Acceptance Criteria:**
- Payment history list: date, amount, method, status, receipt
- Filter by: date range, payment method, status
- Receipts downloadable
- Payment history exportable

**Dependencies:**
Depends on: #11

---

### Feature Area: Document Management

#### Story #13: Upload Documents

**Description:**
As a student, I want to upload documents, so that I can submit required paperwork.

**User Story:**
As a student, I want to upload documents like transcripts or verification documents, so that I can complete requirements.

**Acceptance Criteria:**
- Document upload interface
- Accepts common file types: PDF, images, Word docs
- File size limit enforced
- Documents categorized
- Documents linked to requirements (if applicable)
- Documents stored securely
- Upload confirmation displayed

**Dependencies:**
Depends on: Epic 4

---

#### Story #14: View Documents

**Description:**
As a student, I want to view my documents, so that I can access submitted paperwork.

**User Story:**
As a student, I want to see all documents I've uploaded, so that I can verify what's on file.

**Acceptance Criteria:**
- Document list: name, category, upload date, status
- Documents downloadable
- Document preview available
- Documents filterable by category or date
- Documents exportable

**Dependencies:**
Depends on: #13

---

### Feature Area: Profile Management

#### Story #15: View Profile

**Description:**
As a student, I want to view my profile, so that I can see my personal information.

**User Story:**
As a student, I want to see my profile including contact information and program details, so that I can verify my information is correct.

**Acceptance Criteria:**
- Profile view shows: name, contact info, program, enrollment date, status
- Profile information organized in sections
- Profile exportable

**Dependencies:**
Depends on: Epic 4

---

#### Story #16: Update Profile

**Description:**
As a student, I want to update my profile, so that my information remains current.

**User Story:**
As a student, I want to update my contact information like phone and address, so that the school can reach me.

**Acceptance Criteria:**
- Profile edit interface
- Can update: phone, address, email (with verification)
- Changes require confirmation
- Changes logged
- Changes take effect immediately
- Some fields may require staff approval

**Dependencies:**
Depends on: #15

---

### Feature Area: Notifications

#### Story #17: View Notifications

**Description:**
As a student, I want to view my notifications, so that I stay informed of important events.

**User Story:**
As a student, I want to see all my notifications in a notification center, so that I don't miss important information.

**Acceptance Criteria:**
- Notification center interface
- Notifications listed chronologically
- Filter by: read/unread, type, date
- Mark all as read option
- Notification click navigates to related content
- Real-time updates for new notifications

**Dependencies:**
Depends on: Epic 23

---

#### Story #18: Configure Notification Preferences

**Description:**
As a student, I want to configure notification preferences, so that I control which notifications I receive.

**User Story:**
As a student, I want to set my preferences for emails, SMS, and in-app notifications, so that I receive only the communications I want.

**Acceptance Criteria:**
- Notification preferences interface
- Preferences for: email, SMS, in-app notifications
- Preferences by notification type
- Preferences can be: all, important only, none
- Preferences saved per student
- Preferences respected by system

**Dependencies:**
Depends on: #17, Epic 23

---

### Feature Area: Resources

#### Story #19: Access Learning Resources

**Description:**
As a student, I want to access learning resources, so that I can access course materials.

**User Story:**
As a student, I want to view learning resources assigned to my modules, so that I can study and complete assignments.

**Acceptance Criteria:**
- Learning resources view
- Resources organized by module or program
- Resources downloadable or viewable online
- Resource access tracked
- Resources searchable
- Resources filterable by type

**Dependencies:**
Depends on: Epic 16 (Learning Resources)

---

#### Story #20: View Transcript

**Description:**
As a student, I want to view my transcript, so that I can see my academic record.

**User Story:**
As a student, I want to see my unofficial transcript with grades and competencies, so that I can track my progress.

**Acceptance Criteria:**
- Transcript view
- Shows: courses, grades, competencies, GPA, completion status
- Transcript organized by program or chronologically
- Transcript exportable to PDF
- Transcript printable

**Dependencies:**
Depends on: Epic 17

---

#### Story #21: Request Official Transcript

**Description:**
As a student, I want to request an official transcript, so that I can send it to employers or other schools.

**User Story:**
As a student, I want to request an official transcript with delivery options, so that I can obtain my academic record.

**Acceptance Criteria:**
- Official transcript request interface
- Request includes: delivery method (email, mail), recipient, purpose
- Request may require payment
- Request status tracked
- Transcript generated and delivered
- Request confirmation sent

**Dependencies:**
Depends on: Epic 17

---

### Feature Area: Self-Service

#### Story #22: Update Emergency Contacts

**Description:**
As a student, I want to update emergency contacts, so that the school can reach someone in case of emergency.

**User Story:**
As a student, I want to add or update emergency contact information, so that my contacts are current.

**Acceptance Criteria:**
- Emergency contact management interface
- Can add, edit, or remove contacts
- Contact information validated
- Changes saved immediately
- Changes logged

**Dependencies:**
Depends on: Epic 4

---

#### Story #23: View Program Requirements

**Description:**
As a student, I want to view program requirements, so that I know what I need to complete.

**User Story:**
As a student, I want to see my program requirements including modules, competencies, and hours, so that I can plan my completion.

**Acceptance Criteria:**
- Program requirements view
- Shows: required modules, competencies, clock hours
- Progress toward requirements displayed
- Requirements filterable by status
- Requirements exportable

**Dependencies:**
Depends on: Epic 6

---

#### Story #24: Access Career Services

**Description:**
As a student, I want to access career services, so that I can get help with job searching.

**User Story:**
As a student, I want to access career services resources including job leads and resume help, so that I can find employment.

**Acceptance Criteria:**
- Career services access from portal
- Links to: job leads, resume upload, interview scheduling, coaching
- Career services resources accessible
- Career services integrated into portal navigation

**Dependencies:**
Depends on: Epic 25

---

