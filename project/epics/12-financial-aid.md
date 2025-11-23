# Epic 12: Financial Aid Management

## Overview

Comprehensive financial aid management for trade schools participating in Title IV programs. Handles FAFSA processing, Pell Grants, federal loans, financial aid packaging, award letters, disbursements, Return to Title IV (R2T4) calculations, and federal reporting requirements.

This epic is critical for schools that participate in federal financial aid programs and must comply with Title IV regulations.

## Key Features

- FAFSA data import and processing
- Financial aid application management
- Need analysis and packaging
- Award letter generation
- Disbursement tracking and processing
- Return to Title IV (R2T4) calculations
- Federal reporting (NSLDS, COD, etc.)
- Financial aid compliance tracking
- Verification workflows

## Data Models

- `FinancialAidApplication` - Student financial aid applications
- `FAFSAData` - Imported FAFSA information
- `NeedAnalysis` - Financial need calculations
- `AidPackage` - Financial aid award packages
- `AidAward` - Individual aid awards (Pell, loans, etc.)
- `Disbursement` - Aid disbursement records
- `R2T4Calculation` - Return to Title IV calculations
- `Verification` - Verification documents and status
- `FederalReport` - Federal reporting records

## User Roles

- **Financial Aid Officer** - Full financial aid management
- **Registrar** - View financial aid status
- **Student** - View own financial aid information
- **Organization Admin** - Configure financial aid settings

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 6 (Programs)**: Program costs for packaging
- **Epic 10 (SAP)**: SAP status affects aid eligibility
- **Epic 11 (Finance)**: Integration with student accounts

## Integration Points

- **Finance (Epic 11)**: Aid disbursements applied to student accounts
- **SAP (Epic 10)**: SAP status determines aid eligibility
- **Directory (Epic 4)**: Student demographic data
- **Programs (Epic 6)**: Program costs for need analysis
- **Reporting (Epic 22)**: Financial aid reports
- **Communications (Epic 23)**: Aid notifications
- **Reporting (Epic 22)**: Financial aid reports
- **Communications (Epic 23)**: Aid notifications

## Status

**Mandatory - Compliance Critical**

## Technical Notes

- Integration with federal systems (NSLDS, COD, etc.)
- Secure handling of sensitive financial data (FERPA compliance)
- Automated calculation engines for need analysis and R2T4
- Support for multiple aid years
- Document management for verification
- Audit trail for all aid transactions

## Stories

### Feature Area: FAFSA Processing

#### Story #1: Import FAFSA Data

**Description:**
As a financial aid officer, I want to import FAFSA data, so that student financial aid information is available in the system.

**User Story:**
As a financial aid officer, I want to import FAFSA data files from the Department of Education, so that I can process financial aid applications.

**Acceptance Criteria:**
- FAFSA import interface
- Accepts standard FAFSA file formats (ISIR, SAR)
- File validation before import
- Import preview shows records to be processed
- Import creates or updates FAFSA data records
- Import errors logged and reported
- Import results summary provided

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 4

---

#### Story #2: Process FAFSA Records

**Description:**
As a system, I want to process imported FAFSA records, so that financial aid data is available for packaging.

**User Story:**
As a system, I want to parse FAFSA data and create financial aid application records, so that aid officers can review and package aid.

**Acceptance Criteria:**
- FAFSA data parsed and stored
- Student matched to FAFSA record (by SSN, name, DOB)
- EFC (Expected Family Contribution) extracted
- Dependency status determined
- Verification flags identified
- Processing date recorded
- Processing errors handled

**Dependencies:**
Depends on: #1

---

#### Story #3: View FAFSA Data

**Description:**
As a financial aid officer, I want to view FAFSA data for students, so that I can review financial information.

**User Story:**
As a financial aid officer, I want to see FAFSA data including EFC, dependency status, and verification requirements, so that I can make packaging decisions.

**Acceptance Criteria:**
- FAFSA data displayed in student financial aid view
- Shows: EFC, dependency status, verification flags, income data
- FAFSA data can be updated manually (if needed)
- FAFSA history tracked (multiple years)
- FAFSA data exportable

**Dependencies:**
Depends on: #2

---

### Feature Area: Financial Aid Applications

#### Story #4: Create Financial Aid Application

**Description:**
As a financial aid officer, I want to create financial aid applications, so that students can apply for aid.

**User Story:**
As a financial aid officer, I want to create an application record for a student, so that we can track their financial aid request.

**Acceptance Criteria:**
- Application creation interface
- Application linked to student
- Application includes: aid year, program, enrollment status
- Application status tracked (new, in review, packaged, awarded)
- Application creation logged

**Dependencies:**
Depends on: Epic 4

---

#### Story #5: View Application List

**Description:**
As a financial aid officer, I want to view financial aid applications, so that I can manage the application process.

**User Story:**
As a financial aid officer, I want to see all applications with their status and priority, so that I can prioritize work.

**Acceptance Criteria:**
- Application list: student, aid year, status, priority, submission date
- Search by student name or ID
- Filter by: status, aid year, program, priority
- Sortable columns
- Click application to view details
- Applications exportable

**Dependencies:**
Depends on: #4

---

#### Story #6: Update Application Status

**Description:**
As a financial aid officer, I want to update application status, so that application progress is tracked.

**User Story:**
As a financial aid officer, I want to change application status as I process it, so that workflow is clear.

**Acceptance Criteria:**
- Status update interface
- Status options: new, in review, verification needed, packaged, awarded, denied
- Status change requires notes
- Status change logged
- Status change can trigger notifications
- Status history tracked

**Dependencies:**
Depends on: #5

---

### Feature Area: Need Analysis

#### Story #7: Calculate Financial Need

**Description:**
As a system, I want to calculate financial need, so that aid can be packaged appropriately.

**User Story:**
As a system, I want to calculate need as cost of attendance minus EFC, so that aid officers know how much aid students need.

**Acceptance Criteria:**
- Need calculation: COA - EFC = Need
- Cost of attendance from program configuration
- EFC from FAFSA data
- Need calculated automatically
- Need displayed in application
- Need can be manually adjusted (with reason)

**Dependencies:**
Depends on: #3, Epic 6

---

#### Story #8: Configure Cost of Attendance

**Description:**
As an organization admin, I want to configure cost of attendance, so that need analysis is accurate.

**User Story:**
As an organization admin, I want to set cost of attendance components including tuition, fees, books, and living expenses, so that financial need is calculated correctly.

**Acceptance Criteria:**
- COA configuration interface
- COA components: tuition, fees, books, supplies, room/board, transportation, personal expenses
- COA can be program-specific or organization-wide
- COA can vary by enrollment status (full-time, part-time)
- COA changes logged
- COA versioned by aid year

**Dependencies:**
Depends on: Epic 2, Epic 6

---

### Feature Area: Aid Packaging

#### Story #9: Create Aid Package

**Description:**
As a financial aid officer, I want to create aid packages, so that students receive appropriate financial aid.

**User Story:**
As a financial aid officer, I want to package financial aid including grants, loans, and work-study, so that students' financial needs are met.

**Acceptance Criteria:**
- Aid packaging interface
- Package includes: grants (Pell, state, institutional), loans (subsidized, unsubsidized), work-study
- Package amounts validated against need and limits
- Package can be auto-generated or manual
- Package saved as draft or finalized
- Package creation logged

**Dependencies:**
Depends on: #7

---

#### Story #10: Auto-Package Financial Aid

**Description:**
As a system, I want to automatically package financial aid, so that packaging is efficient.

**User Story:**
As a system, I want to automatically create aid packages based on need and eligibility, so that aid officers can review and approve rather than create from scratch.

**Acceptance Criteria:**
- Auto-packaging rules configured
- Rules consider: need, eligibility, SAP status, enrollment status
- Package created with standard aid types
- Package can be customized after auto-generation
- Auto-packaging logged
- Auto-packaging can be disabled per application

**Dependencies:**
Depends on: #9, Epic 10

---

#### Story #11: View Aid Package

**Description:**
As a financial aid officer or student, I want to view aid packages, so that aid awards are visible.

**User Story:**
As a student, I want to see my financial aid package including grants and loans, so that I know what aid I'm receiving.

**Acceptance Criteria:**
- Aid package view
- Shows: aid types, amounts, terms, conditions
- Package organized by aid type
- Package totals calculated
- Package can be accepted or declined (by student)
- Package exportable

**Dependencies:**
Depends on: #9

---

### Feature Area: Award Letters

#### Story #12: Generate Award Letter

**Description:**
As a system, I want to generate award letters, so that students receive official aid notifications.

**User Story:**
As a system, I want to automatically generate award letters when packages are finalized, so that students are notified of their aid.

**Acceptance Criteria:**
- Award letter generation triggered by package finalization
- Letter includes: aid types, amounts, terms, conditions, next steps
- Letter formatted as PDF
- Letter customizable per organization
- Letter sent to student via email
- Letter stored in student record

**Dependencies:**
Depends on: #9, Epic 23

---

#### Story #13: Customize Award Letter Template

**Description:**
As an organization admin, I want to customize award letter templates, so that letters match our school's branding.

**User Story:**
As an organization admin, I want to edit award letter templates with our logo and messaging, so that letters are branded.

**Acceptance Criteria:**
- Award letter template editor
- Template includes: header, body, footer, variables
- Variables: {{student_name}}, {{aid_amount}}, etc.
- Template preview available
- Template saved and versioned
- Template changes logged

**Dependencies:**
Depends on: Epic 2

---

### Feature Area: Disbursements

#### Story #14: Schedule Disbursements

**Description:**
As a financial aid officer, I want to schedule aid disbursements, so that aid is paid to students at the right time.

**User Story:**
As a financial aid officer, I want to schedule disbursements based on enrollment status and program start dates, so that aid is disbursed correctly.

**Acceptance Criteria:**
- Disbursement scheduling interface
- Disbursements scheduled based on: enrollment date, program start, attendance requirements
- Disbursement dates calculated automatically
- Disbursements can be scheduled manually
- Disbursement schedule displayed in package
- Disbursement schedule can be updated

**Dependencies:**
Depends on: #9, Epic 7

---

#### Story #15: Process Disbursement

**Description:**
As a financial aid officer, I want to process aid disbursements, so that students receive their aid.

**User Story:**
As a financial aid officer, I want to process disbursements and apply them to student accounts, so that aid is paid out.

**Acceptance Criteria:**
- Disbursement processing interface
- Disbursement validated: enrollment confirmed, attendance requirements met, SAP status verified
- Disbursement applied to student account in Finance epic
- Disbursement recorded in financial aid system
- Disbursement notification sent to student
- Disbursement logged

**Dependencies:**
Depends on: #14, Epic 11

---

#### Story #16: View Disbursement History

**Description:**
As a financial aid officer or student, I want to view disbursement history, so that aid payments are tracked.

**User Story:**
As a student, I want to see when my aid was disbursed and how much, so that I can track my financial aid payments.

**Acceptance Criteria:**
- Disbursement history view
- Shows: date, amount, aid type, status, applied to account
- Filter by: aid type, date range
- Disbursement details accessible
- History exportable

**Dependencies:**
Depends on: #15

---

### Feature Area: Return to Title IV (R2T4)

#### Story #17: Calculate R2T4

**Description:**
As a system, I want to calculate Return to Title IV, so that schools comply with federal regulations when students withdraw.

**User Story:**
As a system, I want to automatically calculate R2T4 when a student withdraws, so that aid is returned according to federal rules.

**Acceptance Criteria:**
- R2T4 calculation triggered by student withdrawal
- Calculation uses: withdrawal date, enrollment period, aid disbursed, percentage of period completed
- R2T4 amount calculated for each aid type
- Calculation results stored
- Calculation can be reviewed and adjusted
- Calculation logged

**Dependencies:**
Depends on: #15, Epic 4

---

#### Story #18: Process R2T4

**Description:**
As a financial aid officer, I want to process R2T4, so that aid is returned to federal programs.

**User Story:**
As a financial aid officer, I want to process R2T4 calculations and return aid, so that we comply with federal regulations.

**Acceptance Criteria:**
- R2T4 processing interface
- R2T4 amounts returned to appropriate programs
- Student account adjusted
- R2T4 notification sent to student
- R2T4 reported to federal systems
- R2T4 processing logged

**Dependencies:**
Depends on: #17, Epic 11

---

### Feature Area: Verification

#### Story #19: Identify Verification Requirements

**Description:**
As a system, I want to identify verification requirements, so that students know what documents to submit.

**User Story:**
As a system, I want to flag applications that require verification based on FAFSA data, so that verification can be completed.

**Acceptance Criteria:**
- Verification requirements identified from FAFSA
- Requirements displayed in application
- Verification checklist generated
- Verification status tracked
- Verification requirements can be customized

**Dependencies:**
Depends on: #2

---

#### Story #20: Collect Verification Documents

**Description:**
As a financial aid officer, I want to collect verification documents, so that FAFSA data can be verified.

**User Story:**
As a financial aid officer, I want to track verification documents submitted by students, so that verification can be completed.

**Acceptance Criteria:**
- Verification document collection interface
- Documents uploaded by student or officer
- Document types: tax returns, W-2s, verification worksheets
- Documents linked to application
- Document status tracked (received, reviewed, accepted, rejected)
- Documents stored securely

**Dependencies:**
Depends on: #19

---

#### Story #21: Complete Verification

**Description:**
As a financial aid officer, I want to complete verification, so that aid can be packaged.

**User Story:**
As a financial aid officer, I want to review verification documents and complete verification, so that aid processing can continue.

**Acceptance Criteria:**
- Verification completion interface
- Documents reviewed and compared to FAFSA data
- Corrections made if needed
- Verification marked as complete
- Verification completion logged
- Updated FAFSA data submitted if corrections made

**Dependencies:**
Depends on: #20

---

### Feature Area: Federal Reporting

#### Story #22: Generate NSLDS Reports

**Description:**
As a financial aid officer, I want to generate NSLDS reports, so that loan data is reported to the federal government.

**User Story:**
As a financial aid officer, I want to generate reports for the National Student Loan Data System, so that student loan information is current.

**Acceptance Criteria:**
- NSLDS report generation interface
- Report includes: student loan data, enrollment status, disbursements
- Report formatted for NSLDS submission
- Report validated before submission
- Report submission tracked
- Report exportable

**Dependencies:**
Depends on: #15

---

#### Story #23: Generate COD Reports

**Description:**
As a financial aid officer, I want to generate COD reports, so that aid data is reported to the Common Origination and Disbursement system.

**User Story:**
As a financial aid officer, I want to generate reports for COD, so that Pell Grant and loan data is reported.

**Acceptance Criteria:**
- COD report generation interface
- Report includes: Pell Grant data, loan data, disbursements
- Report formatted for COD submission
- Report validated before submission
- Report submission tracked
- Report exportable

**Dependencies:**
Depends on: #15

---

#### Story #24: Track Federal Reporting

**Description:**
As a financial aid officer, I want to track federal reporting, so that compliance is maintained.

**User Story:**
As a financial aid officer, I want to see a history of all federal reports submitted, so that I can ensure timely reporting.

**Acceptance Criteria:**
- Federal reporting history view
- Shows: report type, submission date, status, response
- Filter by: report type, date range, status
- Reporting deadlines tracked
- Reporting alerts for upcoming deadlines
- History exportable

**Dependencies:**
Depends on: #22, #23

---

### Feature Area: Aid Compliance

#### Story #25: Track Aid Eligibility

**Description:**
As a system, I want to track aid eligibility, so that only eligible students receive aid.

**User Story:**
As a system, I want to check eligibility requirements including SAP status, enrollment status, and citizenship, so that aid is only awarded to eligible students.

**Acceptance Criteria:**
- Eligibility checks: SAP status, enrollment status, citizenship, default status
- Eligibility checked before packaging
- Eligibility checked before disbursement
- Eligibility status displayed in application
- Eligibility changes tracked
- Eligibility alerts generated

**Dependencies:**
Depends on: #4, Epic 10

---

#### Story #26: Monitor Aid Limits

**Description:**
As a system, I want to monitor aid limits, so that students don't exceed federal limits.

**User Story:**
As a system, I want to check that aid amounts don't exceed federal limits for Pell Grants and loans, so that compliance is maintained.

**Acceptance Criteria:**
- Aid limits checked during packaging
- Pell Grant lifetime limit tracked
- Loan aggregate limits tracked
- Annual limits checked
- Limit warnings displayed
- Limit violations prevented

**Dependencies:**
Depends on: #9

---

#### Story #27: Generate Financial Aid Reports

**Description:**
As a financial aid officer, I want to generate financial aid reports, so that aid activity is tracked and analyzed.

**User Story:**
As a financial aid officer, I want to generate reports showing aid packaging, disbursements, and compliance, so that I can manage the aid office effectively.

**Acceptance Criteria:**
- Financial aid report generation interface
- Report types: packaging summary, disbursement report, compliance report, federal report status
- Reports filterable by aid year, program, date range
- Reports include summary statistics
- Reports exportable to CSV or PDF

**Dependencies:**
Depends on: Epic 22

---

