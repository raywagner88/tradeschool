# Epic 8: Attendance & Timeclock (Clock-Hour Tracking)

## Overview

Mission-critical for trade schools. Provides kiosk mode (QR/PIN/badge), check-in/out flows, policy engines (grace periods, daily max), make-up hours workflow, fraud detection, instructor verification, and detailed analytics.

Attendance feeds SAP, Reporting, and some Billing scenarios. This epic is essential for compliance with clock-hour requirements for trade school accreditation.

## Key Features

- Kiosk mode for check-in/out
- Multiple authentication methods (QR, PIN, badge)
- Clock-hour tracking and calculation
- Attendance policy engine
- Make-up hours workflow
- Fraud detection and prevention
- Instructor verification
- Real-time attendance monitoring
- Detailed attendance analytics

## Data Models

- `AttendanceRecord` - Individual check-in/out records
- `AttendanceSession` - Attendance for a class session
- `AttendancePolicy` - Policy rules and configurations
- `MakeupHours` - Make-up hour requests and approvals
- `TimeclockKiosk` - Kiosk device configuration
- `AttendanceException` - Manual adjustments and exceptions
- `FraudAlert` - Fraud detection alerts
- `AttendanceReport` - Aggregated attendance data

## User Roles

- **Student** - Check in/out via kiosk
- **Instructor** - Verify attendance, approve make-ups
- **Registrar** - View attendance, manage exceptions
- **Organization Admin** - Configure policies and kiosks

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 7 (Scheduling)**: Sessions to attend

## Integration Points

- **SAP (Epic 10)**: Attendance hours for SAP calculation
- **Academics (Epic 9)**: Attendance linked to grades
- **Reporting (Epic 22)**: Attendance analytics and reports
- **Scheduling (Epic 7)**: Sessions for attendance tracking

## Status

**Mandatory - Mission Critical**

## Technical Notes

- Real-time clock-hour calculation
- Support for multiple kiosk devices
- Offline capability for kiosks (sync when online)
- Biometric integration (future)
- GPS/location verification (future)
- Automated fraud detection algorithms
- High-performance for concurrent check-ins

## Stories

### Feature Area: Kiosk Check-In/Out

#### Story #1: Configure Timeclock Kiosk

**Description:**
As an organization admin, I want to configure timeclock kiosks, so that students can check in at physical locations.

**User Story:**
As an organization admin, I want to set up a kiosk with name, location, and authentication method, so that students can use it for attendance.

**Acceptance Criteria:**
- Kiosk creation form: name, location, authentication method (QR, PIN, badge), device ID
- Kiosk assigned unique identifier
- Kiosk can be active or inactive
- Kiosk scoped to organization
- Kiosk can be assigned to specific locations or cohorts
- Kiosk configuration saved

**Dependencies:**
Depends on: Epic 2

---

#### Story #2: Student Check-In via QR Code

**Description:**
As a student, I want to check in by scanning a QR code, so that I can quickly record my attendance.

**User Story:**
As a student, I want to scan my student ID QR code at a kiosk, so that I can check in for class.

**Acceptance Criteria:**
- QR code scanner interface on kiosk
- Student QR code contains student ID
- System validates student is enrolled in current session
- Check-in time recorded
- Check-in confirmation displayed
- Check-in logged in attendance record
- Duplicate check-in prevented (if already checked in)

**Dependencies:**
Depends on: #1, Epic 4, Epic 7

---

#### Story #3: Student Check-In via PIN

**Description:**
As a student, I want to check in using my PIN, so that I can attend class if I don't have my ID.

**User Story:**
As a student, I want to enter my student ID and PIN at a kiosk, so that I can check in without my physical ID.

**Acceptance Criteria:**
- PIN entry interface on kiosk
- Student enters student ID and PIN
- System validates credentials
- PIN must be secure (not easily guessable)
- Check-in time recorded
- Check-in confirmation displayed
- Failed attempts logged (security)

**Dependencies:**
Depends on: #1, Epic 4

---

#### Story #4: Student Check-In via Badge

**Description:**
As a student, I want to check in by tapping my badge, so that I can use RFID/NFC technology for attendance.

**User Story:**
As a student, I want to tap my student badge at a kiosk, so that I can quickly check in using contactless technology.

**Acceptance Criteria:**
- Badge reader interface on kiosk
- Badge contains student ID (RFID/NFC)
- System validates student and session
- Check-in time recorded
- Check-in confirmation displayed
- Badge can be replaced if lost

**Dependencies:**
Depends on: #1, Epic 4

---

#### Story #5: Student Check-Out

**Description:**
As a student, I want to check out when leaving class, so that my attendance hours are accurately recorded.

**User Story:**
As a student, I want to check out using the same method I checked in, so that my total attendance time is calculated.

**Acceptance Criteria:**
- Check-out interface on kiosk (same methods as check-in)
- System validates student has active check-in
- Check-out time recorded
- Total hours calculated (check-out - check-in)
- Check-out confirmation displayed
- Hours logged in attendance record
- Cannot check out if not checked in

**Dependencies:**
Depends on: #2, #3, #4

---

### Feature Area: Attendance Policies

#### Story #6: Configure Attendance Policies

**Description:**
As an organization admin, I want to configure attendance policies, so that the system enforces our school's attendance rules.

**User Story:**
As an organization admin, I want to set policies including grace periods, daily maximums, and late policies, so that attendance is tracked consistently.

**Acceptance Criteria:**
- Policy configuration interface
- Policies include: grace period (minutes), daily max hours, late threshold, absence policy
- Policies can be: organization-wide, program-specific, or cohort-specific
- Policy changes logged
- Policy versioning (track changes over time)
- Policy preview shows how rules apply

**Dependencies:**
Depends on: Epic 2

---

#### Story #7: Enforce Grace Period

**Description:**
As a system, I want to enforce grace periods for check-ins, so that students aren't penalized for minor lateness.

**User Story:**
As a system, I want to allow check-ins within a grace period after session start, so that students have flexibility for minor delays.

**Acceptance Criteria:**
- Grace period configured per policy
- Check-in allowed within grace period (e.g., 15 minutes after start)
- Check-in marked as "on-time" if within grace period
- Check-in marked as "late" if after grace period
- Grace period displayed to students
- Grace period logged in attendance record

**Dependencies:**
Depends on: #6, #2

---

#### Story #8: Enforce Daily Maximum Hours

**Description:**
As a system, I want to enforce daily maximum hours, so that students don't exceed reasonable daily limits.

**User Story:**
As a system, I want to prevent students from checking in if they've already reached the daily maximum hours, so that attendance policies are enforced.

**Acceptance Criteria:**
- Daily maximum configured per policy
- System calculates hours already logged today
- Check-in blocked if daily max would be exceeded
- Warning displayed if approaching daily max
- Exception can be granted by instructor/admin
- Daily max logged in attendance record

**Dependencies:**
Depends on: #6, #2

---

#### Story #9: Handle Late Check-Ins

**Description:**
As a system, I want to handle late check-ins according to policy, so that attendance rules are consistently applied.

**User Story:**
As a system, I want to mark check-ins as late if they're after the grace period, so that attendance records accurately reflect timeliness.

**Acceptance Criteria:**
- Late check-in detected if after grace period
- Attendance record marked as "late"
- Late check-in can trigger notifications
- Late check-in can require instructor approval (if policy)
- Late check-in hours may be reduced (if policy)
- Late check-in logged with reason

**Dependencies:**
Depends on: #7

---

### Feature Area: Attendance Records

#### Story #10: View Student Attendance

**Description:**
As a student or staff member, I want to view student attendance records, so that I can track attendance history.

**User Story:**
As a student, I want to see my attendance history including check-in/out times and hours, so that I can monitor my progress.

**Acceptance Criteria:**
- Attendance list: date, session, check-in time, check-out time, hours, status
- Filter by: date range, cohort, session
- Search by session name
- Sortable columns
- Total hours calculated and displayed
- Attendance percentage calculated
- Export attendance to CSV

**Dependencies:**
Depends on: #5

---

#### Story #11: View Session Attendance

**Description:**
As an instructor, I want to view attendance for a session, so that I can see who attended class.

**User Story:**
As an instructor, I want to see all students who checked in for my session, so that I know who was present.

**Acceptance Criteria:**
- Session attendance list: student name, check-in time, check-out time, hours, status
- Shows enrolled students with attendance status
- Absent students highlighted
- Late students marked
- Total attendance count displayed
- Attendance percentage calculated
- Export session attendance

**Dependencies:**
Depends on: #5, Epic 7

---

#### Story #12: Calculate Attendance Hours

**Description:**
As a system, I want to calculate attendance hours from check-in/out times, so that total hours are accurately tracked.

**User Story:**
As a system, I want to calculate hours for each attendance record and aggregate totals, so that students' progress is accurately measured.

**Acceptance Criteria:**
- Hours calculated: check-out time - check-in time
- Hours rounded according to policy (e.g., to nearest 0.25 hours)
- Daily hours aggregated
- Weekly hours aggregated
- Program hours aggregated (total for program)
- Hours used for SAP calculation
- Hours displayed in reports

**Dependencies:**
Depends on: #5

---

### Feature Area: Make-Up Hours

#### Story #13: Request Make-Up Hours

**Description:**
As a student, I want to request make-up hours, so that I can make up missed attendance.

**User Story:**
As a student, I want to submit a make-up hours request with reason and proposed make-up session, so that I can recover missed hours.

**Acceptance Criteria:**
- Make-up request form: missed session, reason, proposed make-up session, notes
- Request submitted for instructor approval
- Request status tracked (pending, approved, rejected)
- Request linked to original absence
- Request can be edited before approval
- Request notification sent to instructor

**Dependencies:**
Depends on: #10, Epic 7

---

#### Story #14: Approve Make-Up Hours

**Description:**
As an instructor, I want to approve or reject make-up hour requests, so that students can recover missed attendance.

**User Story:**
As an instructor, I want to review make-up requests and approve them if valid, so that students can make up missed hours.

**Acceptance Criteria:**
- Make-up request list in instructor dashboard
- Request details: student, missed session, reason, proposed make-up
- Approve or reject with comments
- Approved make-up creates attendance record
- Make-up hours count toward total hours
- Make-up approval logged
- Student notified of decision

**Dependencies:**
Depends on: #13

---

### Feature Area: Fraud Detection

#### Story #15: Detect Duplicate Check-Ins

**Description:**
As a system, I want to detect duplicate check-ins, so that fraud is prevented.

**User Story:**
As a system, I want to flag if a student checks in multiple times for the same session, so that attendance fraud is detected.

**Acceptance Criteria:**
- Duplicate check-in detection on check-in attempt
- Alert generated if duplicate detected
- Duplicate logged in fraud alert
- Instructor/admin notified of duplicate
- Duplicate can be reviewed and resolved
- Fraud patterns tracked

**Dependencies:**
Depends on: #2

---

#### Story #16: Detect Suspicious Patterns

**Description:**
As a system, I want to detect suspicious attendance patterns, so that fraud can be identified.

**User Story:**
As a system, I want to flag suspicious patterns like rapid check-in/out, impossible hours, or unusual timing, so that fraud is detected.

**Acceptance Criteria:**
- Pattern detection algorithms run on attendance data
- Flags: rapid check-in/out (< 1 minute), excessive daily hours, impossible timing
- Suspicious patterns generate alerts
- Alerts reviewed by admin/instructor
- Alerts can be dismissed or investigated
- Pattern detection configurable (sensitivity)

**Dependencies:**
Depends on: #5

---

#### Story #17: Review Fraud Alerts

**Description:**
As an admin or instructor, I want to review fraud alerts, so that I can investigate and resolve suspicious activity.

**User Story:**
As an admin, I want to see fraud alerts and investigate them, so that attendance integrity is maintained.

**Acceptance Criteria:**
- Fraud alert list: student, type, date, details
- Alert details show evidence
- Alert can be: dismissed, investigated, or escalated
- Alert resolution logged
- Alert statistics tracked
- Alert can trigger student notification (if policy)

**Dependencies:**
Depends on: #15, #16

---

### Feature Area: Instructor Verification

#### Story #18: Instructor Verify Attendance

**Description:**
As an instructor, I want to verify attendance records, so that I can confirm accuracy and make corrections.

**User Story:**
As an instructor, I want to review and verify attendance for my sessions, so that attendance records are accurate.

**Acceptance Criteria:**
- Attendance verification interface in session detail
- Instructor can: verify all, verify individual, or mark absent
- Verification status: verified, needs review, disputed
- Verification date and instructor recorded
- Verification can add notes/comments
- Unverified attendance highlighted

**Dependencies:**
Depends on: #11

---

#### Story #19: Manual Attendance Adjustment

**Description:**
As an instructor or admin, I want to manually adjust attendance, so that I can correct errors or add missed records.

**User Story:**
As an instructor, I want to add or modify attendance records manually, so that I can correct mistakes or add missed check-ins.

**Acceptance Criteria:**
- Manual adjustment interface
- Can add: check-in time, check-out time, hours
- Adjustment requires reason/notes
- Adjustment logged in audit trail
- Adjustment can require approval (if policy)
- Adjustment displayed in attendance history
- Adjustment can be reversed

**Dependencies:**
Depends on: #18

---

### Feature Area: Attendance Analytics

#### Story #20: View Attendance Dashboard

**Description:**
As a staff member, I want to view an attendance dashboard, so that I can see attendance trends and statistics.

**User Story:**
As a registrar, I want to see attendance statistics including daily attendance, trends, and alerts, so that I can monitor attendance health.

**Acceptance Criteria:**
- Dashboard shows: daily attendance rate, trends, recent check-ins, alerts
- Charts showing attendance over time
- Filter by: date range, cohort, program
- Key metrics: total hours, attendance rate, absences
- Real-time updates
- Dashboard exportable

**Dependencies:**
Depends on: #10

---

#### Story #21: Generate Attendance Reports

**Description:**
As a staff member, I want to generate attendance reports, so that I can analyze attendance data and meet reporting requirements.

**User Story:**
As a registrar, I want to generate reports showing student attendance, hours, and compliance, so that I can track progress and meet accreditation requirements.

**Acceptance Criteria:**
- Report generation interface
- Report types: student attendance, session attendance, program attendance, compliance
- Filter by: student, cohort, program, date range
- Reports include: hours, attendance rate, absences, make-ups
- Reports exportable to CSV or PDF
- Reports can be scheduled (future)
- Reports include summary statistics

**Dependencies:**
Depends on: #20

---

