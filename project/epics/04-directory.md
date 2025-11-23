# Epic 4: Directory — Students, Staff & Contacts

## Overview

Core database of people. Students include demographics, documents, education history, contacts, and status. Staff include certifications, employment positions, and permission sources. Guardians / emergency contacts also live here.

Provides the lookup foundation for Admissions, Scheduling, Attendance, Academics, and Finance. This epic is the central repository for all person records in the system.

## Key Features

- Student record management
- Staff record management
- Contact/guardian management
- Document storage and management
- Demographics and personal information
- Education history tracking
- Status management
- Search and lookup capabilities

## Data Models

- `Student` - Student records
- `Staff` - Staff member records (extends User from Epic 3)
- `Contact` - Emergency contacts and guardians
- `StudentContact` - Relationship between students and contacts
- `Document` - Attached documents (transcripts, IDs, etc.)
- `Demographic` - Demographics information
- `EducationHistory` - Prior education records
- `StudentStatus` - Status tracking (active, graduated, withdrawn, etc.)

## User Roles

- **Registrar** - Full student record access
- **Admissions Officer** - Create and view student records
- **Instructor** - View student records for their classes
- **Financial Officer** - View student records for billing
- **Organization Admin** - Full access to all records
- **Student** - View own record (future)

## Dependencies

- **Epic 2 (Multi-Tenancy)**: All records scoped to organization
- **Epic 3 (RBAC)**: Permission checks for record access

## Integration Points

- **Admissions (Epic 5)**: Creates student records
- **Scheduling (Epic 7)**: Student enrollment in cohorts
- **Attendance (Epic 8)**: Student check-in/out
- **Academics (Epic 9)**: Student grades and competencies
- **Finance (Epic 11)**: Student billing and charges
- **RBAC (Epic 3)**: Staff records and employment

## Status

**Mandatory - Core Data**

## Technical Notes

- Use Active Storage for document attachments
- Full-text search on names and identifiers
- Soft deletes for historical records
- Audit all record changes
- Support for bulk imports
- Data export for compliance

## Stories

### Feature Area: Student Management

#### Story #1: Create Student Record

**Description:**
As a registrar or admissions officer, I want to create a new student record, so that I can begin tracking a student in the system.

**User Story:**
As a registrar, I want to create a student record with basic information including name, date of birth, and contact details, so that the student can be enrolled in programs.

**Acceptance Criteria:**
- Student creation form with: first name, last name, middle name (optional), date of birth, gender, email, phone, address
- Student ID auto-generated (unique within organization)
- Email validation (format)
- Date of birth validation (must be valid date, reasonable age range)
- Student created in "prospective" or "inquiry" status
- Student record scoped to organization
- Creation logged in audit trail
- Confirmation message displayed

**Dependencies:**
Depends on: Epic 2 (organization context), Epic 3 (permissions)

---

#### Story #2: View Student List

**Description:**
As a registrar or staff member, I want to view a list of students, so that I can find and manage student records.

**User Story:**
As a registrar, I want to see a searchable, filterable list of all students, so that I can quickly find specific students.

**Acceptance Criteria:**
- List displays: student ID, name, email, status, program, enrollment date
- Search by: name, student ID, email, phone
- Filter by: status, program, cohort, enrollment date range
- Sortable columns
- Pagination for large lists
- Click student to view details
- Export student list to CSV

**Dependencies:**
Depends on: #1

---

#### Story #3: View Student Details

**Description:**
As a staff member, I want to view comprehensive student information, so that I can access all relevant student data in one place.

**User Story:**
As a registrar, I want to see a student's complete profile including demographics, contacts, documents, enrollment history, and status, so that I can provide comprehensive support.

**Acceptance Criteria:**
- Detail page shows: basic info, demographics, contacts, documents, education history, enrollment history, status history
- Tabs or sections for different data categories
- Display current program and cohort
- Show financial summary (balance, payment history)
- Show academic summary (grades, attendance, SAP status)
- Links to related records (enrollments, attendance, grades)
- Edit student button (if user has permission)

**Dependencies:**
Depends on: #2

---

#### Story #4: Update Student Information

**Description:**
As a registrar, I want to update student information, so that records remain current and accurate.

**User Story:**
As a registrar, I want to edit student demographics, contact information, and other details, so that I can keep student records up to date.

**Acceptance Criteria:**
- Edit form for: name, date of birth, contact info, address, demographics
- Email changes require verification (future)
- Changes logged in audit trail
- Changes take effect immediately
- Confirmation message on save
- Validation for all fields
- Permission check before allowing edit

**Dependencies:**
Depends on: #3

---

#### Story #5: Manage Student Status

**Description:**
As a registrar, I want to manage student status transitions, so that I can track student lifecycle (prospective, active, graduated, withdrawn).

**User Story:**
As a registrar, I want to change a student's status and record the reason, so that I can accurately track student progress and outcomes.

**Acceptance Criteria:**
- Status options: prospective, inquiry, applied, accepted, enrolled, active, on-leave, graduated, withdrawn, dismissed
- Status change form with reason field
- Status change date recorded
- Status history preserved
- Status changes logged in audit trail
- Status affects student access and visibility
- Automatic status transitions supported (e.g., enrolled → active on program start)

**Dependencies:**
Depends on: #3

---

#### Story #6: Search Students

**Description:**
As a staff member, I want to search for students across multiple criteria, so that I can quickly find student records.

**User Story:**
As an instructor, I want to search for students by name, ID, email, or phone, so that I can look up student information during class.

**Acceptance Criteria:**
- Global search bar in application header
- Search by: name (partial match), student ID, email, phone
- Search results show: name, ID, status, program
- Results ranked by relevance
- Click result to navigate to student detail
- Search respects permission boundaries (only see authorized students)
- Recent searches saved (optional)

**Dependencies:**
Depends on: #2

---

### Feature Area: Demographics & Personal Information

#### Story #7: Record Student Demographics

**Description:**
As a registrar, I want to record student demographics, so that we can maintain compliance and reporting requirements.

**User Story:**
As a registrar, I want to record demographics including race/ethnicity, disability status, and other required information, so that we can meet reporting obligations.

**Acceptance Criteria:**
- Demographics form with: race/ethnicity, disability status, veteran status, first-generation student
- Fields marked as required or optional based on organization settings
- Demographics stored securely
- Demographics can be updated
- Demographics changes logged
- Demographics exportable for reporting
- Privacy controls (who can view demographics)

**Dependencies:**
Depends on: #3

---

#### Story #8: Record Education History

**Description:**
As a registrar, I want to record a student's prior education history, so that we can track educational background and prerequisites.

**User Story:**
As a registrar, I want to add education history entries including school name, dates, degree/certificate, and GPA, so that we have complete student records.

**Acceptance Criteria:**
- Education history form: school name, type (high school, college, etc.), start date, end date, degree/certificate, GPA
- Multiple education entries per student
- Education entries can be added, edited, deleted
- Education entries ordered chronologically
- Education history displayed in student detail
- Education history exportable

**Dependencies:**
Depends on: #3

---

### Feature Area: Contacts & Guardians

#### Story #9: Add Emergency Contact

**Description:**
As a registrar, I want to add emergency contacts for students, so that we can reach someone in case of emergency.

**User Story:**
As a registrar, I want to add emergency contact information including name, relationship, phone, and email, so that we have emergency contact details on file.

**Acceptance Criteria:**
- Contact creation form: first name, last name, relationship, phone, email, address
- Relationship options: parent, guardian, spouse, other
- Multiple contacts per student
- Contact marked as primary or secondary
- Contact can be emergency contact, billing contact, or both
- Contact information can be updated
- Contact can be removed

**Dependencies:**
Depends on: #3

---

#### Story #10: Manage Guardian Relationships

**Description:**
As a registrar, I want to manage guardian relationships for students, so that we can track who has authority to make decisions for the student.

**User Story:**
As a registrar, I want to link guardians to students with relationship type and authorization level, so that we know who can access student information and make decisions.

**Acceptance Criteria:**
- Guardian relationship form: contact, relationship type, authorization level
- Relationship types: parent, legal guardian, emergency contact
- Authorization levels: full access, limited access, emergency only
- Multiple guardians per student
- Guardian relationships can be updated
- Guardian can be removed
- Guardian access to student portal (future)

**Dependencies:**
Depends on: #9

---

### Feature Area: Document Management

#### Story #11: Upload Student Documents

**Description:**
As a registrar, I want to upload documents for students, so that we can store important records like transcripts, IDs, and certificates.

**User Story:**
As a registrar, I want to upload documents and categorize them, so that we can maintain organized student files.

**Acceptance Criteria:**
- Document upload interface in student detail page
- Accepts common file types: PDF, images, Word docs
- Document categories: transcript, ID, certificate, medical, other
- File size limit enforced (e.g., 10MB)
- Document name and description fields
- Upload date and uploaded by tracked
- Documents stored securely (organization-scoped)
- Documents can be deleted (with permission)

**Dependencies:**
Depends on: #3

---

#### Story #12: View and Download Documents

**Description:**
As a staff member, I want to view and download student documents, so that I can access student records when needed.

**User Story:**
As a registrar, I want to see all documents for a student and download them, so that I can review student files.

**Acceptance Criteria:**
- Documents list in student detail page
- Documents grouped by category
- Document preview for images and PDFs
- Download button for each document
- Download logged in audit trail
- Permission check before allowing download
- Documents searchable by name or category

**Dependencies:**
Depends on: #11

---

#### Story #13: Manage Document Categories

**Description:**
As an organization admin, I want to configure document categories, so that we can organize documents according to our needs.

**User Story:**
As an organization admin, I want to define custom document categories, so that document organization matches our processes.

**Acceptance Criteria:**
- Document category management interface
- Default categories: transcript, ID, certificate, medical, other
- Custom categories can be added
- Categories can be renamed or deleted (if no documents use them)
- Categories scoped to organization
- Categories displayed in upload form

**Dependencies:**
Depends on: #11

---

### Feature Area: Staff Management

#### Story #14: View Staff Directory

**Description:**
As a staff member, I want to view a directory of all staff members, so that I can find contact information for colleagues.

**User Story:**
As an instructor, I want to see a list of all staff with their positions and contact information, so that I can reach out to colleagues when needed.

**Acceptance Criteria:**
- Staff directory list: name, position, email, phone, department
- Search by name or position
- Filter by department or position
- Click staff member to view details
- Staff directory respects privacy settings
- Only active staff shown (unless admin)

**Dependencies:**
Depends on: Epic 3 (User/Employment model)

---

#### Story #15: View Staff Details

**Description:**
As a staff member, I want to view staff member details, so that I can see their contact information and role.

**User Story:**
As an instructor, I want to see a staff member's profile including position, contact info, and department, so that I know how to reach them.

**Acceptance Criteria:**
- Staff detail page: name, position, email, phone, department, office location
- Display current employment information
- Show certifications and qualifications
- Display bio or notes (if available)
- Contact information can be hidden based on privacy settings
- Edit button (if user has permission or viewing own profile)

**Dependencies:**
Depends on: #14

---

#### Story #16: Record Staff Certifications

**Description:**
As an organization admin, I want to record staff certifications and qualifications, so that we can track instructor qualifications.

**User Story:**
As an organization admin, I want to add certifications for staff members including certification name, issuing organization, and expiration date, so that we can ensure instructors are properly qualified.

**Acceptance Criteria:**
- Certification form: name, issuing organization, issue date, expiration date, certificate number
- Multiple certifications per staff member
- Expiration date triggers notification (future)
- Certifications displayed in staff detail
- Certifications can be updated or removed
- Certifications exportable for reporting

**Dependencies:**
Depends on: #15

---

### Feature Area: Bulk Operations

#### Story #17: Import Students from CSV

**Description:**
As a registrar, I want to import multiple students from a CSV file, so that I can quickly add many students at once.

**User Story:**
As a registrar, I want to upload a CSV file with student information and have students created automatically, so that I can efficiently onboard large groups of students.

**Acceptance Criteria:**
- CSV import interface with file upload
- CSV template provided for download
- Required columns: first name, last name, email, date of birth
- Optional columns: phone, address, demographics
- Import preview shows records to be created
- Validation errors displayed before import
- Import creates students in background job
- Import results email sent when complete
- Import log shows successes and errors

**Dependencies:**
Depends on: #1

---

#### Story #18: Export Student Data

**Description:**
As a registrar, I want to export student data to CSV, so that I can use the data in other systems or for reporting.

**User Story:**
As a registrar, I want to export filtered student data including demographics and enrollment information, so that I can generate reports or share data with external systems.

**Acceptance Criteria:**
- Export interface with field selection
- Filter students before export (same filters as list view)
- Select which fields to include in export
- Export to CSV format
- Large exports processed as background job
- Download link provided when export ready
- Export includes metadata (export date, filters applied)

**Dependencies:**
Depends on: #2

---

### Feature Area: Data Integrity

#### Story #19: Merge Duplicate Student Records

**Description:**
As a registrar, I want to merge duplicate student records, so that we maintain data integrity and avoid confusion.

**User Story:**
As a registrar, I want to identify and merge duplicate student records, so that each student has only one record in the system.

**Acceptance Criteria:**
- Duplicate detection based on: name, email, phone, date of birth
- Duplicate candidates displayed with similarity score
- Merge interface shows records to be merged
- User selects which record to keep as primary
- Data from secondary record merged into primary
- Related records (enrollments, attendance, etc.) updated to point to primary
- Secondary record marked as merged (soft delete)
- Merge logged in audit trail

**Dependencies:**
Depends on: #2

---

#### Story #20: Audit Student Record Changes

**Description:**
As a system, I want to audit all changes to student records, so that we can track modifications and maintain data integrity.

**User Story:**
As a system, I want to log all student record changes including who changed what and when, so that we have a complete audit trail.

**Acceptance Criteria:**
- All student field changes logged
- Log includes: field name, old value, new value, changed by, timestamp
- Log entries immutable
- Log searchable and filterable
- Log displayed in student detail page
- Log exportable for compliance
- Log retention policy configurable

**Dependencies:**
Depends on: #3

---

