# Epic 7: Cohorts & Scheduling

## Overview

Creates cohorts, assigns instructors, defines start/end patterns, generates class sessions, tracks capacity, and manages calendars. Includes automated session generation (daily, weekly, block-format) and resource assignment.

This epic feeds Attendance, Academics, and SAP by providing the class structure and schedule that students attend and instructors teach.

## Key Features

- Cohort creation and management
- Instructor assignment
- Session generation (daily, weekly, block)
- Calendar management
- Capacity tracking
- Resource assignment (rooms, equipment)
- Schedule templates
- Recurring pattern configuration

## Data Models

- `Cohort` - Student cohorts/groups
- `CohortEnrollment` - Students enrolled in cohorts
- `Session` - Individual class sessions
- `SessionPattern` - Recurring schedule patterns
- `InstructorAssignment` - Instructors assigned to cohorts/sessions
- `Resource` - Rooms, equipment, materials
- `ResourceAssignment` - Resources assigned to sessions
- `Calendar` - Organization calendars
- `ScheduleTemplate` - Reusable schedule patterns

## User Roles

- **Registrar** - Create cohorts and manage enrollments
- **Scheduler** - Create schedules and assign instructors
- **Instructor** - View assigned schedules and sessions
- **Organization Admin** - Configure scheduling settings

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Students and instructors
- **Epic 6 (Programs)**: Program and module structure

## Integration Points

- **Attendance (Epic 8)**: Sessions for check-in/out
- **Academics (Epic 9)**: Sessions for grade entry
- **SAP (Epic 10)**: Session attendance for SAP calculation
- **Directory (Epic 4)**: Student and instructor records

## Status

**Mandatory - Scheduling System**

## Technical Notes

- Support multiple schedule patterns (daily, weekly, block)
- Automated session generation with recurrence rules
- Calendar integration (iCal export)
- Capacity management with waitlists
- Conflict detection for instructors and resources
- Time zone handling for multi-location schools

## Stories

### Feature Area: Cohort Management

#### Story #1: Create Cohort

**Description:**
As a registrar, I want to create a cohort, so that I can group students together for a program offering.

**User Story:**
As a registrar, I want to create a cohort with program, start date, and capacity, so that students can be enrolled in structured groups.

**Acceptance Criteria:**
- Cohort creation form: name, program, start date, end date, capacity, location
- Cohort assigned unique identifier
- Cohort linked to program version
- Capacity must be positive integer
- Cohort created in "planning" status
- Cohort scoped to organization
- Creation logged

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 6

---

#### Story #2: View Cohort List

**Description:**
As a staff member, I want to view a list of cohorts, so that I can see all active and upcoming cohorts.

**User Story:**
As a registrar, I want to see all cohorts with their program, dates, enrollment count, and status, so that I can manage cohort offerings.

**Acceptance Criteria:**
- List displays: name, program, start date, end date, enrollment count, capacity, status
- Search by name or program
- Filter by: program, status, date range, location
- Sortable columns
- Pagination
- Click cohort to view details
- Status indicators (planning, open, full, in-progress, completed)

**Dependencies:**
Depends on: #1

---

#### Story #3: View Cohort Details

**Description:**
As a staff member, I want to view comprehensive cohort information, so that I can see enrollment, schedule, and capacity details.

**User Story:**
As a registrar, I want to see cohort details including enrolled students, schedule, instructors, and capacity, so that I can manage the cohort effectively.

**Acceptance Criteria:**
- Detail page shows: basic info, enrolled students, schedule, instructors, resources, capacity utilization
- Display enrollment statistics
- Show schedule calendar view
- Links to related records (students, sessions, instructors)
- Edit cohort button (if user has permission)

**Dependencies:**
Depends on: #2

---

#### Story #4: Enroll Students in Cohort

**Description:**
As a registrar, I want to enroll students in cohorts, so that students are assigned to class groups.

**User Story:**
As a registrar, I want to add students to a cohort, so that they can attend scheduled classes.

**Acceptance Criteria:**
- Student enrollment interface in cohort detail
- Search and select students
- Validate student is enrolled in program
- Check capacity before enrollment
- Enrollment date recorded
- Student added to cohort enrollment list
- Enrollment confirmation message
- Waitlist option if cohort is full

**Dependencies:**
Depends on: #3, Epic 4

---

#### Story #5: Manage Cohort Capacity

**Description:**
As a registrar, I want to manage cohort capacity, so that I can control enrollment numbers and maintain class sizes.

**User Story:**
As a registrar, I want to set and adjust cohort capacity, so that classes aren't overcrowded or under-enrolled.

**Acceptance Criteria:**
- Capacity field in cohort form
- Current enrollment count displayed
- Available spots calculated (capacity - enrolled)
- Warning if enrollment exceeds capacity
- Capacity can be increased
- Capacity decrease requires confirmation if students enrolled
- Capacity utilization displayed (percentage)

**Dependencies:**
Depends on: #3

---

### Feature Area: Schedule Generation

#### Story #6: Configure Schedule Pattern

**Description:**
As a scheduler, I want to configure schedule patterns, so that I can define when classes meet.

**User Story:**
As a scheduler, I want to set up a schedule pattern with days, times, and frequency, so that class sessions can be automatically generated.

**Acceptance Criteria:**
- Schedule pattern form: days of week, start time, end time, frequency (daily, weekly), start date, end date
- Pattern can be: daily, weekly, block format
- Pattern validates time ranges
- Pattern can have breaks (holidays, no-class days)
- Pattern saved as template (optional)
- Pattern preview shows generated sessions

**Dependencies:**
Depends on: #1

---

#### Story #7: Generate Class Sessions

**Description:**
As a system, I want to automatically generate class sessions from schedule patterns, so that individual class meetings are created.

**User Story:**
As a scheduler, I want to generate all class sessions for a cohort based on the schedule pattern, so that I don't have to create each session manually.

**Acceptance Criteria:**
- Session generation triggered from cohort schedule pattern
- Sessions created for each occurrence in date range
- Sessions include: date, start time, end time, module (if assigned)
- Sessions linked to cohort
- Session generation can be: all at once, or incremental (weekly)
- Generated sessions displayed in calendar
- Generation logged

**Dependencies:**
Depends on: #6

---

#### Story #8: Create Individual Session

**Description:**
As a scheduler, I want to create individual class sessions, so that I can add special classes or make-up sessions.

**User Story:**
As a scheduler, I want to manually create a class session with date, time, and module, so that I can schedule special classes outside the regular pattern.

**Acceptance Criteria:**
- Session creation form: date, start time, end time, module, instructor, location
- Session linked to cohort
- Session validates no conflicts with existing sessions
- Session can be one-time or recurring
- Session created in "scheduled" status
- Session displayed in calendar

**Dependencies:**
Depends on: #3

---

#### Story #9: Update Session

**Description:**
As a scheduler, I want to update session details, so that I can adjust schedules as needed.

**User Story:**
As a scheduler, I want to change session time, location, or instructor, so that I can accommodate schedule changes.

**Acceptance Criteria:**
- Edit form for: date, time, instructor, location, module
- Changes validated (no conflicts)
- Changes logged in audit trail
- Changes can trigger notifications to students/instructors
- Changes take effect immediately
- Confirmation message on save

**Dependencies:**
Depends on: #8

---

#### Story #10: Cancel Session

**Description:**
As a scheduler, I want to cancel class sessions, so that I can handle cancellations and make-ups.

**User Story:**
As a scheduler, I want to cancel a session with reason, so that students and instructors are notified and make-up sessions can be scheduled.

**Acceptance Criteria:**
- Cancel button in session detail
- Cancel requires reason/notes
- Session status changes to "cancelled"
- Cancellation logged
- Cancellation can trigger notifications
- Cancelled sessions don't count toward attendance requirements
- Make-up session can be linked to cancelled session

**Dependencies:**
Depends on: #8

---

### Feature Area: Instructor Assignment

#### Story #11: Assign Instructor to Cohort

**Description:**
As a scheduler, I want to assign instructors to cohorts, so that instructors know which classes they're teaching.

**User Story:**
As a scheduler, I want to assign a primary instructor to a cohort, so that the instructor is responsible for all sessions in that cohort.

**Acceptance Criteria:**
- Instructor assignment interface in cohort detail
- Select instructor from staff directory
- Validate instructor has appropriate permissions/qualifications
- Instructor assigned as primary or assistant
- Assignment date recorded
- Assignment displayed in cohort detail
- Assignment can be updated or removed

**Dependencies:**
Depends on: #3, Epic 4

---

#### Story #12: Assign Instructor to Session

**Description:**
As a scheduler, I want to assign instructors to individual sessions, so that substitute instructors can cover specific classes.

**User Story:**
As a scheduler, I want to assign an instructor to a specific session, so that substitute instructors can be scheduled when needed.

**Acceptance Criteria:**
- Instructor assignment in session detail
- Select instructor from staff directory
- Check instructor availability (no conflicts)
- Instructor can be primary or substitute
- Assignment displayed in session detail
- Assignment can be updated or removed
- Assignment can trigger notification to instructor

**Dependencies:**
Depends on: #8, Epic 4

---

#### Story #13: View Instructor Schedule

**Description:**
As an instructor, I want to view my assigned schedule, so that I know when and where I'm teaching.

**User Story:**
As an instructor, I want to see all my assigned sessions in a calendar view, so that I can plan my teaching schedule.

**Acceptance Criteria:**
- Instructor schedule page with calendar view
- Shows all assigned sessions with: date, time, cohort, module, location
- Filter by date range
- Calendar view (month, week, day)
- List view option
- Session details accessible from calendar
- Schedule exportable (iCal format)

**Dependencies:**
Depends on: #11, #12

---

### Feature Area: Resource Management

#### Story #14: Create Resource

**Description:**
As an organization admin, I want to create resources like rooms and equipment, so that they can be assigned to sessions.

**User Story:**
As an organization admin, I want to create a resource with name, type, capacity, and location, so that scheduling can assign resources to classes.

**Acceptance Criteria:**
- Resource creation form: name, type (room, equipment, other), capacity, location, features
- Resource assigned unique identifier
- Resource scoped to organization
- Resource can be active or inactive
- Resource creation logged

**Dependencies:**
Depends on: Epic 2

---

#### Story #15: Assign Resource to Session

**Description:**
As a scheduler, I want to assign resources to sessions, so that classes have the rooms and equipment they need.

**User Story:**
As a scheduler, I want to assign a room or equipment to a session, so that resources are properly allocated.

**Acceptance Criteria:**
- Resource assignment in session detail
- Select resource from available resources
- Check resource availability (no conflicts)
- Resource capacity validated (if room, check student count)
- Assignment displayed in session detail
- Assignment can be updated or removed
- Resource conflicts highlighted

**Dependencies:**
Depends on: #8, #14

---

#### Story #16: Check Resource Availability

**Description:**
As a system, I want to check resource availability, so that conflicts are prevented during scheduling.

**User Story:**
As a system, I want to validate that resources aren't double-booked, so that scheduling conflicts are avoided.

**Acceptance Criteria:**
- Availability check when assigning resource to session
- Check if resource is available at session date/time
- Conflict detection (resource already assigned)
- Warning displayed if conflict detected
- Conflict can be overridden (with reason)
- Availability calendar view for resources

**Dependencies:**
Depends on: #15

---

### Feature Area: Calendar Management

#### Story #17: View Cohort Calendar

**Description:**
As a staff member, I want to view a cohort calendar, so that I can see all scheduled sessions for a cohort.

**User Story:**
As an instructor, I want to see a calendar of all sessions for my cohort, so that I can plan my teaching.

**Acceptance Criteria:**
- Calendar view in cohort detail page
- Shows all sessions with: date, time, module, instructor
- Calendar views: month, week, day
- Sessions clickable to view details
- Cancelled sessions marked differently
- Calendar exportable (iCal)

**Dependencies:**
Depends on: #7

---

#### Story #18: View Organization Calendar

**Description:**
As a staff member, I want to view an organization-wide calendar, so that I can see all scheduled activities.

**User Story:**
As a registrar, I want to see all cohorts and sessions across the organization, so that I can get a high-level view of scheduling.

**Acceptance Criteria:**
- Organization calendar page
- Shows all cohorts and sessions
- Filter by: program, cohort, instructor, location
- Calendar views: month, week, day
- Color coding by program or cohort
- Calendar exportable
- Permission-based filtering (only see authorized sessions)

**Dependencies:**
Depends on: #17

---

### Feature Area: Schedule Templates

#### Story #19: Create Schedule Template

**Description:**
As an organization admin, I want to create schedule templates, so that I can reuse common schedule patterns.

**User Story:**
As an organization admin, I want to save a schedule pattern as a template, so that I can quickly apply it to new cohorts.

**Acceptance Criteria:**
- Template creation from schedule pattern
- Template includes: name, description, days, times, frequency
- Template saved to organization template library
- Template can be edited or deleted
- Template can be applied to new cohorts
- Template preview available

**Dependencies:**
Depends on: #6

---

#### Story #20: Apply Schedule Template

**Description:**
As a scheduler, I want to apply a schedule template to a cohort, so that I can quickly set up schedules.

**User Story:**
As a scheduler, I want to select a template and apply it to a cohort, so that I don't have to recreate common schedule patterns.

**Acceptance Criteria:**
- Template selection interface in cohort creation/edit
- Select template from organization library
- Template applied to cohort schedule pattern
- Template can be customized after application
- Template application logged

**Dependencies:**
Depends on: #19

---

