# Epic 5: Admissions & Enrollment

## Overview

Handles inquiries, applications, workflows, electronic signatures, acceptance packets, deposit collection, and transition into active students. This epic covers configurable stages and forms, staff review processes, document collection, and final enrollment.

This is the revenue engine for schools, converting prospects into enrolled students. The epic supports flexible workflows that can be customized per organization.

## Key Features

- Inquiry and lead management
- Application forms and submission
- Configurable workflow stages
- Electronic signature collection
- Document collection and verification
- Staff review and decision-making
- Acceptance packet generation
- Deposit collection and tracking
- Enrollment completion

## Data Models

- `Inquiry` - Initial prospect inquiries
- `Application` - Student applications
- `ApplicationStage` - Workflow stage definitions
- `ApplicationWorkflow` - Application progression tracking
- `ApplicationForm` - Dynamic form definitions
- `ApplicationDocument` - Required documents
- `ElectronicSignature` - Signature records
- `AcceptancePacket` - Acceptance documents
- `Deposit` - Enrollment deposits
- `Enrollment` - Final enrollment record

## User Roles

- **Admissions Officer** - Manage inquiries and applications
- **Registrar** - Review and approve applications
- **Organization Admin** - Configure workflows and forms
- **Prospective Student** - Submit applications (future public portal)

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Creates student records
- **Epic 11 (Finance)**: Deposit collection

## Integration Points

- **Directory (Epic 4)**: Creates student records upon enrollment
- **Finance (Epic 11)**: Application fees and deposits
- **Programs (Epic 6)**: Program selection during application
- **Communications (Epic 23)**: Application status notifications

## Status

**Mandatory - Revenue Engine**

## Technical Notes

- Use workflow state machine for application stages
- Support for dynamic form builder
- Electronic signature integration (DocuSign or similar)
- PDF generation for acceptance packets
- Payment integration for deposits
- Email notifications at each stage
- Configurable workflows per organization

## Stories

### Feature Area: Inquiry Management

#### Story #1: Create Inquiry

**Description:**
As an admissions officer, I want to create an inquiry record for a prospective student, so that I can track initial interest and follow up.

**User Story:**
As an admissions officer, I want to record an inquiry with contact information and program interest, so that I can begin the admissions process.

**Acceptance Criteria:**
- Inquiry form: first name, last name, email, phone, program interest, source (how they heard about us)
- Inquiry assigned unique ID
- Inquiry created in "new" status
- Inquiry assigned to admissions officer (optional)
- Inquiry date and time recorded
- Inquiry can be converted to application
- Inquiry scoped to organization

**Dependencies:**
Depends on: Epic 2, Epic 3

---

#### Story #2: View Inquiry List

**Description:**
As an admissions officer, I want to view a list of inquiries, so that I can manage prospects and track follow-up activities.

**User Story:**
As an admissions officer, I want to see all inquiries with their status and assigned officer, so that I can prioritize follow-up activities.

**Acceptance Criteria:**
- List displays: name, email, phone, program interest, status, assigned officer, inquiry date
- Search by name, email, phone
- Filter by: status, program interest, assigned officer, date range
- Sortable columns
- Pagination
- Click inquiry to view details
- Convert to application button

**Dependencies:**
Depends on: #1

---

#### Story #3: Convert Inquiry to Application

**Description:**
As an admissions officer, I want to convert an inquiry to an application, so that I can move prospects through the admissions process.

**User Story:**
As an admissions officer, I want to convert an inquiry to an application with one click, so that I can efficiently progress prospects.

**Acceptance Criteria:**
- Convert button in inquiry detail page
- Application pre-populated with inquiry data
- Inquiry linked to application
- Inquiry status updated to "converted"
- Application created in first workflow stage
- Confirmation message displayed

**Dependencies:**
Depends on: #2, Story #4

---

### Feature Area: Application Management

#### Story #4: Create Application

**Description:**
As an admissions officer or prospective student, I want to create an application, so that a student can apply to a program.

**User Story:**
As a prospective student, I want to start an application by providing basic information and selecting a program, so that I can apply to the school.

**Acceptance Criteria:**
- Application creation form: personal info, program selection, start date preference
- Application assigned unique application number
- Application created in first workflow stage
- Application can be saved as draft
- Application linked to inquiry (if converted)
- Application scoped to organization

**Dependencies:**
Depends on: Epic 4 (student record creation), Epic 6 (program selection)

---

#### Story #5: Configure Application Workflow Stages

**Description:**
As an organization admin, I want to configure application workflow stages, so that our admissions process matches our school's requirements.

**User Story:**
As an organization admin, I want to define custom workflow stages with required actions and transitions, so that applications follow our specific process.

**Acceptance Criteria:**
- Workflow stage configuration interface
- Default stages: submitted, under review, interview scheduled, decision pending, accepted, rejected, waitlisted
- Custom stages can be added
- Stage transitions defined (which stages can move to which)
- Required actions per stage (e.g., document collection, interview)
- Stages can be reordered
- Workflow changes logged

**Dependencies:**
Depends on: Epic 2

---

#### Story #6: View Application List

**Description:**
As an admissions officer, I want to view a list of applications, so that I can manage the admissions pipeline.

**User Story:**
As an admissions officer, I want to see all applications with their current stage and status, so that I can track progress and prioritize work.

**Acceptance Criteria:**
- List displays: applicant name, application number, program, current stage, status, submitted date, assigned officer
- Search by name, application number, email
- Filter by: stage, status, program, assigned officer, date range
- Sortable columns
- Pagination
- Click application to view details
- Bulk actions (assign officer, change stage)

**Dependencies:**
Depends on: #4

---

#### Story #7: View Application Details

**Description:**
As an admissions officer, I want to view comprehensive application information, so that I can review and make decisions.

**User Story:**
As an admissions officer, I want to see all application data including forms, documents, and workflow history, so that I can make informed admission decisions.

**Acceptance Criteria:**
- Detail page shows: applicant info, program, workflow stage, forms submitted, documents, signatures, notes, history
- Tabs or sections for different data categories
- Display current stage and next possible stages
- Show required actions for current stage
- Display deposit status and payment history
- Links to related records (inquiry, student record if enrolled)
- Edit application button (if permitted)

**Dependencies:**
Depends on: #6

---

#### Story #8: Update Application Stage

**Description:**
As an admissions officer, I want to move applications between workflow stages, so that I can progress applications through the admissions process.

**User Story:**
As an admissions officer, I want to change an application's stage with notes, so that I can track progress and communicate status changes.

**Acceptance Criteria:**
- Stage change interface shows current stage and available next stages
- Stage change requires notes/comment
- Stage change validates required actions completed
- Stage change logged in workflow history
- Stage change can trigger notifications
- Stage change date and officer recorded
- Automatic stage transitions supported (e.g., auto-advance on document completion)

**Dependencies:**
Depends on: #5, #7

---

### Feature Area: Application Forms

#### Story #9: Configure Application Forms

**Description:**
As an organization admin, I want to configure application forms, so that we collect the information we need from applicants.

**User Story:**
As an organization admin, I want to create custom application forms with different field types, so that we can gather program-specific information.

**Acceptance Criteria:**
- Form builder interface with drag-and-drop fields
- Field types: text, textarea, select, checkbox, radio, date, file upload
- Fields can be required or optional
- Fields can have validation rules
- Forms can have multiple sections/pages
- Forms can be program-specific or general
- Form changes versioned (track changes over time)
- Form preview before publishing

**Dependencies:**
Depends on: Epic 2

---

#### Story #10: Submit Application Form

**Description:**
As a prospective student, I want to fill out and submit application forms, so that I can provide the information needed for admission.

**User Story:**
As a prospective student, I want to complete application forms online, so that I can apply to the school conveniently.

**Acceptance Criteria:**
- Form display matches configured form definition
- Required fields validated before submission
- Form can be saved as draft
- Form submission creates form response record
- Form responses linked to application
- Form can be edited after submission (if allowed)
- Form submission logged

**Dependencies:**
Depends on: #9, #4

---

#### Story #11: Review Application Form Responses

**Description:**
As an admissions officer, I want to view application form responses, so that I can review the information provided by applicants.

**User Story:**
As an admissions officer, I want to see all form responses for an application, so that I can evaluate the applicant.

**Acceptance Criteria:**
- Form responses displayed in application detail page
- Responses organized by form/section
- Responses can be exported
- Responses can be printed
- Form version displayed (which version of form was used)
- Responses searchable

**Dependencies:**
Depends on: #10

---

### Feature Area: Document Collection

#### Story #12: Configure Required Documents

**Description:**
As an organization admin, I want to configure required documents for applications, so that we can ensure applicants provide necessary paperwork.

**User Story:**
As an organization admin, I want to define which documents are required for each program or application stage, so that we collect all necessary documentation.

**Acceptance Criteria:**
- Required document configuration interface
- Document types: transcript, ID, resume, recommendation letter, other
- Documents can be required by: program, application stage, or always
- Documents can be marked as optional
- Document requirements can be updated
- Document requirements versioned

**Dependencies:**
Depends on: Epic 2

---

#### Story #13: Upload Application Documents

**Description:**
As a prospective student or admissions officer, I want to upload documents for an application, so that required documents are collected.

**User Story:**
As a prospective student, I want to upload required documents through the application portal, so that I can complete my application.

**Acceptance Criteria:**
- Document upload interface in application detail
- Accepts common file types: PDF, images, Word docs
- File size limit enforced
- Documents categorized by type
- Documents linked to application
- Document upload date and uploaded by tracked
- Documents can be replaced or deleted (with permission)
- Documents stored securely

**Dependencies:**
Depends on: #12, #7

---

#### Story #14: Verify Application Documents

**Description:**
As an admissions officer, I want to verify application documents, so that I can confirm all required documents are received and valid.

**User Story:**
As an admissions officer, I want to mark documents as verified or request replacements, so that I can ensure application completeness.

**Acceptance Criteria:**
- Document verification interface
- Mark document as: verified, needs replacement, rejected
- Verification notes/comments field
- Verification date and verified by tracked
- Verification status displayed in application
- Missing documents highlighted
- Document verification can trigger stage advancement

**Dependencies:**
Depends on: #13

---

### Feature Area: Electronic Signatures

#### Story #15: Request Electronic Signature

**Description:**
As an admissions officer, I want to request electronic signatures for application documents, so that we can collect legally binding signatures.

**User Story:**
As an admissions officer, I want to send signature requests for acceptance letters or enrollment agreements, so that students can sign documents electronically.

**Acceptance Criteria:**
- Signature request interface: document, signer email, message
- Signature request sent via email with secure link
- Signature link expires after configurable period (default 7 days)
- Signature request can be resent
- Signature status tracked (pending, signed, expired)
- Signature request logged

**Dependencies:**
Depends on: #7

---

#### Story #16: Collect Electronic Signature

**Description:**
As a prospective student, I want to sign documents electronically, so that I can complete required paperwork without printing and mailing.

**User Story:**
As a prospective student, I want to sign documents through a secure link, so that I can complete my application or enrollment.

**Acceptance Criteria:**
- Signature page displays document to be signed
- Signature can be: typed, drawn, or uploaded image
- Signature date and IP address recorded
- Signed document stored with signature
- Signature confirmation email sent
- Signature cannot be modified after signing
- Signature legally binding (compliance with e-signature laws)

**Dependencies:**
Depends on: #15

---

#### Story #17: View Signature Status

**Description:**
As an admissions officer, I want to view signature status for applications, so that I can track which documents have been signed.

**User Story:**
As an admissions officer, I want to see which documents have been signed and which are pending, so that I can follow up on missing signatures.

**Acceptance Criteria:**
- Signature status displayed in application detail
- Shows: document name, signer, status, signed date
- Pending signatures highlighted
- Expired signatures flagged
- Signature reminders can be sent
- Signed documents downloadable

**Dependencies:**
Depends on: #16

---

### Feature Area: Decision Making

#### Story #18: Make Admission Decision

**Description:**
As an admissions officer or registrar, I want to make admission decisions, so that I can accept or reject applicants.

**User Story:**
As an admissions officer, I want to make an admission decision (accept, reject, waitlist) with notes, so that applicants receive decisions.

**Acceptance Criteria:**
- Decision interface: decision type (accept, reject, waitlist), decision date, notes
- Decision requires confirmation
- Decision logged in application history
- Decision triggers notification to applicant
- Decision can trigger automatic stage change
- Decision can be reversed (with permission)
- Decision statistics tracked

**Dependencies:**
Depends on: #7

---

#### Story #19: Generate Acceptance Packet

**Description:**
As a system, I want to generate acceptance packets for accepted applicants, so that they receive official acceptance documentation.

**User Story:**
As a system, I want to automatically generate acceptance packets including acceptance letter and enrollment information, so that accepted students receive complete information.

**Acceptance Criteria:**
- Acceptance packet generated upon acceptance decision
- Packet includes: acceptance letter, enrollment agreement, program information, next steps
- Packet generated as PDF
- Packet customizable per organization
- Packet sent via email to applicant
- Packet downloadable from application portal
- Packet version tracked

**Dependencies:**
Depends on: #18

---

### Feature Area: Deposit Collection

#### Story #20: Configure Deposit Requirements

**Description:**
As an organization admin, I want to configure deposit requirements, so that we can set deposit amounts and deadlines.

**User Story:**
As an organization admin, I want to set deposit amounts by program and payment deadlines, so that we can collect enrollment deposits.

**Acceptance Criteria:**
- Deposit configuration: amount, deadline (days after acceptance), refund policy
- Deposits can be program-specific
- Deposit amounts can be updated
- Deposit deadlines can be extended per application
- Deposit configuration versioned

**Dependencies:**
Depends on: Epic 2, Epic 11 (Finance)

---

#### Story #21: Collect Enrollment Deposit

**Description:**
As a prospective student or finance officer, I want to collect enrollment deposits, so that students can secure their spot in a program.

**User Story:**
As a prospective student, I want to pay my enrollment deposit online, so that I can complete my enrollment.

**Acceptance Criteria:**
- Deposit payment interface in application portal
- Deposit amount displayed with deadline
- Payment integration (Stripe) for online payment
- Payment confirmation and receipt
- Deposit linked to application
- Deposit status updated in application
- Deposit can be paid in installments (if configured)
- Deposit payment triggers enrollment completion (if all requirements met)

**Dependencies:**
Depends on: #20, Epic 11 (Finance)

---

#### Story #22: Track Deposit Status

**Description:**
As an admissions officer, I want to track deposit status for applications, so that I can follow up on missing deposits.

**User Story:**
As an admissions officer, I want to see which applicants have paid deposits and which are pending, so that I can ensure enrollment completion.

**Acceptance Criteria:**
- Deposit status displayed in application detail
- Shows: amount required, amount paid, deadline, status
- Overdue deposits highlighted
- Deposit reminders can be sent
- Deposit history tracked
- Deposit refunds handled (if applicable)

**Dependencies:**
Depends on: #21

---

### Feature Area: Enrollment Completion

#### Story #23: Complete Enrollment

**Description:**
As a system, I want to complete enrollment when all requirements are met, so that accepted students become active students.

**User Story:**
As a system, I want to automatically complete enrollment when deposit is paid and all documents are signed, so that students can begin their program.

**Acceptance Criteria:**
- Enrollment completion checks: deposit paid, documents signed, forms complete
- Enrollment completion creates student record (if not exists)
- Student status set to "enrolled"
- Enrollment date recorded
- Enrollment triggers notifications
- Enrollment completion logged
- Enrollment can be manually completed by staff

**Dependencies:**
Depends on: #21, #16, Epic 4 (Student creation)

---

#### Story #24: View Enrollment Status

**Description:**
As an admissions officer or student, I want to view enrollment status, so that I can see what steps remain to complete enrollment.

**User Story:**
As a prospective student, I want to see my enrollment checklist showing completed and pending items, so that I know what I need to do.

**Acceptance Criteria:**
- Enrollment checklist displayed: documents, signatures, deposit, forms
- Each item shows: status (complete, pending, overdue), due date
- Completed items checked off
- Pending items highlighted
- Checklist updates in real-time
- Checklist accessible from application portal

**Dependencies:**
Depends on: #23

---

