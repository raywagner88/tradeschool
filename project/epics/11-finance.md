# Epic 11: Finance — Ledgers, Payments, Charges & Deposits

## Overview

Handles application fees, enrollment deposits, tuition charges, ledger entries, refunds, adjustments, receipts, and Stripe payment integration. Provides exports for QuickBooks and finance reports.

Supports Admissions (deposits) and later Financial Aid. This epic manages all financial transactions for students and the organization.

## Key Features

- Financial ledger system
- Charge creation and management
- Payment processing (Stripe)
- Deposit collection
- Refund processing
- Receipt generation
- QuickBooks export
- Financial reporting
- Payment plans

## Data Models

- `Ledger` - Financial ledger entries
- `Charge` - Charges (tuition, fees, etc.)
- `Payment` - Payment records
- `Deposit` - Enrollment deposits
- `Refund` - Refund records
- `Receipt` - Payment receipts
- `PaymentPlan` - Payment plan configurations
- `FinancialTransaction` - All financial transactions

## User Roles

- **Financial Officer** - Manage charges and payments
- **Registrar** - View student financial records
- **Student** - View own charges and make payments
- **Organization Admin** - Configure financial settings

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Organization context
- **Epic 3 (RBAC)**: Permission checks
- **Epic 4 (Directory)**: Student records
- **Epic 5 (Admissions)**: Deposit collection

## Integration Points

- **Admissions (Epic 5)**: Application fees and deposits
- **Billing (Epic 13)**: Organization billing (separate from student finance)
- **SAP (Epic 10)**: Financial aid eligibility
- **Financial Aid (Epic 12)**: Aid disbursements applied to student accounts
- **Reporting (Epic 22)**: Financial reports
- **Reporting (Epic 22)**: Financial reports

## Status

**Mandatory - Financial Operations**

## Technical Notes

- Stripe integration for payment processing
- Double-entry accounting principles
- Support for payment plans and installments
- Automated charge generation
- Receipt PDF generation
- QuickBooks export format compliance
- PCI compliance for payment data

## Stories

### Feature Area: Charge Management

#### Story #1: Create Charge

**Description:**
As a financial officer, I want to create charges for students, so that tuition and fees are billed.

**User Story:**
As a financial officer, I want to create a charge with amount, description, and due date, so that students are billed for services.

**Acceptance Criteria:**
- Charge creation form: student, amount, description, charge type, due date
- Charge types: tuition, fees, materials, other
- Charge can be one-time or recurring
- Charge linked to student and program (if applicable)
- Charge created in "pending" status
- Charge logged in ledger
- Charge creation logged in audit trail

**Dependencies:**
Depends on: Epic 2, Epic 3, Epic 4

---

#### Story #2: View Student Charges

**Description:**
As a financial officer or student, I want to view student charges, so that financial obligations are visible.

**User Story:**
As a student, I want to see all my charges including amounts and due dates, so that I know what I owe.

**Acceptance Criteria:**
- Charge list: description, amount, due date, status, balance
- Filter by: status, charge type, date range
- Search by description
- Sortable columns
- Total balance calculated and displayed
- Charges grouped by status (pending, paid, overdue)
- Charges exportable

**Dependencies:**
Depends on: #1

---

#### Story #3: Automate Charge Generation

**Description:**
As a system, I want to automatically generate charges, so that tuition and fees are billed without manual entry.

**User Story:**
As a system, I want to generate tuition charges when students enroll, so that billing is automated.

**Acceptance Criteria:**
- Automated charge generation rules
- Rules trigger on: enrollment, program start, milestones
- Charges generated based on program pricing
- Charge generation logged
- Charge generation can be reviewed before posting
- Charge generation can be scheduled

**Dependencies:**
Depends on: #1, Epic 5, Epic 6

---

#### Story #4: Update Charge

**Description:**
As a financial officer, I want to update charges, so that I can correct errors or adjust amounts.

**User Story:**
As a financial officer, I want to edit a charge amount or due date, so that I can fix mistakes or accommodate special circumstances.

**Acceptance Criteria:**
- Charge edit interface
- Can update: amount, description, due date
- Changes require reason/notes
- Changes logged in audit trail
- Changes can require approval (if policy)
- Original charge preserved in history
- Changes reflected in ledger

**Dependencies:**
Depends on: #1

---

#### Story #5: Delete Charge

**Description:**
As a financial officer, I want to delete charges, so that I can remove incorrect entries.

**User Story:**
As a financial officer, I want to delete a charge that was created incorrectly, so that it doesn't affect student accounts.

**Acceptance Criteria:**
- Charge delete interface
- Delete requires confirmation
- Delete requires reason/notes
- Delete logged in audit trail
- Delete can require approval (if policy)
- Deleted charge preserved in history (soft delete)
- Ledger updated to reflect deletion

**Dependencies:**
Depends on: #1

---

### Feature Area: Payment Processing

#### Story #6: Process Payment via Stripe

**Description:**
As a student or financial officer, I want to process payments through Stripe, so that students can pay online.

**User Story:**
As a student, I want to pay my charges online using a credit card, so that I can settle my account conveniently.

**Acceptance Criteria:**
- Payment interface with Stripe integration
- Payment form: amount, payment method, description
- Stripe payment processing
- Payment confirmation and receipt
- Payment logged in ledger
- Payment applied to charges
- Payment status tracked (pending, completed, failed)
- Payment failure handling

**Dependencies:**
Depends on: #1

---

#### Story #7: Record Manual Payment

**Description:**
As a financial officer, I want to record manual payments, so that cash, check, and other payment methods are tracked.

**User Story:**
As a financial officer, I want to record a payment received by check or cash, so that all payments are accounted for.

**Acceptance Criteria:**
- Manual payment entry form: amount, payment method, reference number, date
- Payment methods: cash, check, wire transfer, other
- Payment linked to student
- Payment applied to charges
- Payment logged in ledger
- Payment receipt can be generated
- Payment entry logged in audit trail

**Dependencies:**
Depends on: #1

---

#### Story #8: Apply Payment to Charges

**Description:**
As a system, I want to apply payments to charges, so that student accounts are updated correctly.

**User Story:**
As a system, I want to automatically apply payments to outstanding charges, so that balances are accurate.

**Acceptance Criteria:**
- Payment application logic
- Payments applied to oldest charges first (FIFO)
- Payments can be applied to specific charges (if specified)
- Partial payments supported
- Payment application logged in ledger
- Charge status updated when paid
- Balance calculations updated

**Dependencies:**
Depends on: #6, #7

---

#### Story #9: View Payment History

**Description:**
As a financial officer or student, I want to view payment history, so that payment records are accessible.

**User Story:**
As a student, I want to see all my payments including dates and amounts, so that I can track my payment history.

**Acceptance Criteria:**
- Payment history list: date, amount, method, status, receipt
- Filter by: date range, payment method, status
- Search by reference number
- Sortable columns
- Total paid calculated
- Payments exportable
- Receipt download for each payment

**Dependencies:**
Depends on: #6, #7

---

### Feature Area: Deposits

#### Story #10: Collect Enrollment Deposit

**Description:**
As a financial officer, I want to collect enrollment deposits, so that students secure their spot in programs.

**User Story:**
As a financial officer, I want to process enrollment deposits through Stripe or manual entry, so that deposits are collected and tracked.

**Acceptance Criteria:**
- Deposit collection interface
- Deposit linked to application or enrollment
- Deposit amount from program configuration
- Deposit processed via Stripe or manual entry
- Deposit logged in ledger
- Deposit receipt generated
- Deposit status tracked (pending, paid, refunded)

**Dependencies:**
Depends on: #6, Epic 5

---

#### Story #11: Apply Deposit to Tuition

**Description:**
As a system, I want to apply deposits to tuition charges, so that deposits count toward program costs.

**User Story:**
As a system, I want to automatically apply enrollment deposits to tuition charges when generated, so that student accounts are credited.

**Acceptance Criteria:**
- Deposit application logic
- Deposits applied to first tuition charge
- Deposit application logged in ledger
- Deposit balance tracked
- Deposit can be partially applied
- Deposit application displayed in student account

**Dependencies:**
Depends on: #10, #1

---

#### Story #12: Refund Deposit

**Description:**
As a financial officer, I want to refund deposits, so that students who don't enroll can receive refunds.

**User Story:**
As a financial officer, I want to process deposit refunds with reason, so that students receive refunds when appropriate.

**Acceptance Criteria:**
- Deposit refund interface
- Refund form: amount, reason, refund method
- Refund processed via Stripe or manual
- Refund logged in ledger
- Refund receipt generated
- Refund status tracked
- Refund logged in audit trail

**Dependencies:**
Depends on: #10

---

### Feature Area: Refunds

#### Story #13: Process Refund

**Description:**
As a financial officer, I want to process refunds, so that students can receive refunds for overpayments or cancellations.

**User Story:**
As a financial officer, I want to create a refund with amount and reason, so that students receive appropriate refunds.

**Acceptance Criteria:**
- Refund creation form: student, amount, reason, refund method
- Refund methods: original payment method, check, other
- Refund processed via Stripe (if original payment) or manual
- Refund logged in ledger
- Refund receipt generated
- Refund status tracked (pending, processed, failed)
- Refund logged in audit trail

**Dependencies:**
Depends on: #6, #7

---

#### Story #14: View Refund History

**Description:**
As a financial officer, I want to view refund history, so that refund records are accessible.

**User Story:**
As a financial officer, I want to see all refunds including dates, amounts, and reasons, so that I can track refund activity.

**Acceptance Criteria:**
- Refund history list: date, amount, reason, status, method
- Filter by: date range, status, student
- Search by reference number
- Sortable columns
- Total refunded calculated
- Refunds exportable

**Dependencies:**
Depends on: #13

---

### Feature Area: Financial Ledger

#### Story #15: View Student Ledger

**Description:**
As a financial officer or student, I want to view the student ledger, so that all financial transactions are visible.

**User Story:**
As a student, I want to see my complete financial ledger including charges, payments, and adjustments, so that I have a clear picture of my account.

**Acceptance Criteria:**
- Ledger view: date, description, debit, credit, balance
- Transactions in chronological order
- Running balance calculated
- Filter by: date range, transaction type
- Search by description
- Ledger exportable to CSV or PDF
- Ledger printable

**Dependencies:**
Depends on: #1, #6, #7

---

#### Story #16: Create Ledger Adjustment

**Description:**
As a financial officer, I want to create ledger adjustments, so that I can correct errors or apply credits.

**User Story:**
As a financial officer, I want to add an adjustment to a student's ledger, so that I can correct mistakes or apply special credits.

**Acceptance Criteria:**
- Adjustment creation form: student, amount, description, type (debit/credit)
- Adjustment requires reason/notes
- Adjustment logged in ledger
- Adjustment logged in audit trail
- Adjustment can require approval (if policy)
- Adjustment displayed in ledger view

**Dependencies:**
Depends on: #15

---

### Feature Area: Receipts

#### Story #17: Generate Payment Receipt

**Description:**
As a system, I want to generate payment receipts, so that students receive proof of payment.

**User Story:**
As a system, I want to automatically generate receipts when payments are processed, so that students have documentation.

**Acceptance Criteria:**
- Receipt generated automatically on payment
- Receipt includes: payment date, amount, method, reference number, student info
- Receipt formatted as PDF
- Receipt emailed to student (optional)
- Receipt downloadable from payment history
- Receipt can be regenerated if needed
- Receipt template customizable

**Dependencies:**
Depends on: #6, #7

---

#### Story #18: View Receipts

**Description:**
As a student or financial officer, I want to view receipts, so that payment documentation is accessible.

**User Story:**
As a student, I want to download receipts for all my payments, so that I have records for tax or other purposes.

**Acceptance Criteria:**
- Receipt list in payment history
- Receipt download button for each payment
- Receipts searchable by date or amount
- Receipts exportable in bulk
- Receipt preview available
- Receipts stored securely

**Dependencies:**
Depends on: #17

---

### Feature Area: Payment Plans

#### Story #19: Create Payment Plan

**Description:**
As a financial officer, I want to create payment plans, so that students can pay in installments.

**User Story:**
As a financial officer, I want to set up a payment plan with installments and due dates, so that students can pay tuition over time.

**Acceptance Criteria:**
- Payment plan creation form: student, total amount, number of installments, start date
- Installments calculated automatically
- Installment due dates set
- Payment plan linked to charges
- Payment plan status tracked (active, completed, defaulted)
- Payment plan displayed in student account

**Dependencies:**
Depends on: #1

---

#### Story #20: Track Payment Plan Progress

**Description:**
As a financial officer or student, I want to track payment plan progress, so that installment status is visible.

**User Story:**
As a student, I want to see my payment plan progress including paid and upcoming installments, so that I know my payment schedule.

**Acceptance Criteria:**
- Payment plan progress view
- Shows: total amount, paid amount, remaining amount, installments
- Installments show: due date, amount, status
- Progress percentage calculated
- Upcoming installments highlighted
- Payment plan exportable

**Dependencies:**
Depends on: #19

---

### Feature Area: QuickBooks Export

#### Story #21: Export to QuickBooks

**Description:**
As a financial officer, I want to export financial data to QuickBooks, so that accounting records are synchronized.

**User Story:**
As a financial officer, I want to export charges, payments, and transactions to QuickBooks format, so that our accounting system is up to date.

**Acceptance Criteria:**
- QuickBooks export interface
- Export includes: charges, payments, adjustments, deposits, refunds
- Export format: CSV or IIF (Intuit Interchange Format)
- Export can be filtered by date range
- Export mapped to QuickBooks accounts
- Export can be scheduled (future)
- Export logged

**Dependencies:**
Depends on: #15

---

### Feature Area: Financial Reporting

#### Story #22: Generate Financial Reports

**Description:**
As a financial officer, I want to generate financial reports, so that I can analyze revenue and track finances.

**User Story:**
As a financial officer, I want to generate reports showing revenue, outstanding balances, and payment trends, so that I can manage finances effectively.

**Acceptance Criteria:**
- Financial report generation interface
- Report types: revenue, outstanding balances, payment history, deposit summary
- Filter by: date range, program, student
- Reports include summary statistics
- Reports exportable to CSV or PDF
- Reports can be scheduled (future)

**Dependencies:**
Depends on: #15

---

