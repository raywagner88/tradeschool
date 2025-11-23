# Epic 13: Billing — SaaS Subscription, MAU Usage & Invoicing

## Overview

Manages billing for your company. Includes plans, base fees, MAU measurement, Stripe subscription sync, invoice management, overage calculations, suspensions, pauses, and admin overrides.

Feeds into Product Admin Portal and multi-tenant org lifecycle. This epic handles the SaaS business model billing for organizations using the platform.

## Key Features

- Subscription plan management
- Monthly Active User (MAU) measurement
- Stripe subscription integration
- Invoice generation and management
- Overage calculation and billing
- Subscription lifecycle management
- Usage-based pricing
- Billing analytics

## Data Models

- `SubscriptionPlan` - Billing plan definitions
- `Subscription` - Organization subscriptions
- `Invoice` - Billing invoices
- `MAUMetric` - Monthly Active User measurements
- `Overage` - Usage overage charges
- `BillingCycle` - Billing period tracking
- `PaymentMethod` - Payment methods on file
- `BillingEvent` - Billing event log

## User Roles

- **Platform Admin** - Manage subscriptions and billing (from Epic 1)
- **Organization Admin** - View billing and manage payment methods
- **System** - Automated billing and MAU measurement

## Dependencies

- **Epic 1 (Product Admin Portal)**: Subscription management interface
- **Epic 2 (Multi-Tenancy)**: Organization context

## Integration Points

- **Product Admin Portal (Epic 1)**: Subscription management
- **Multi-Tenancy (Epic 2)**: Organization lifecycle (suspension, termination)
- **Directory (Epic 4)**: User count for MAU calculation

## Status

**Mandatory - SaaS Operations**

## Technical Notes

- Stripe subscription API integration
- Real-time MAU calculation
- Automated invoice generation
- Usage tracking and aggregation
- Billing webhook handling
- Proration calculations
- Tax calculation support (future)

## Stories

### Feature Area: Subscription Plans

#### Story #1: Create Subscription Plan

**Description:**
As a platform admin, I want to create subscription plans, so that organizations can subscribe to different service tiers.

**User Story:**
As a platform admin, I want to create a plan with base fee, MAU pricing, and feature limits, so that we can offer different pricing tiers.

**Acceptance Criteria:**
- Plan creation form: name, base fee, MAU price per user, included MAU, feature limits
- Plan assigned unique identifier
- Plan can be active or inactive
- Plan can have trial period
- Plan features/configurations defined
- Plan creation logged

**Dependencies:**
Depends on: Epic 1

---

#### Story #2: View Subscription Plans

**Description:**
As a platform admin, I want to view all subscription plans, so that I can manage pricing and offerings.

**User Story:**
As a platform admin, I want to see all plans with their pricing and features, so that I can understand our product offerings.

**Acceptance Criteria:**
- Plan list: name, base fee, MAU pricing, status, subscriber count
- Search by name
- Filter by status
- Sortable columns
- Click plan to view details
- Plan can be edited or archived

**Dependencies:**
Depends on: #1

---

#### Story #3: Update Subscription Plan

**Description:**
As a platform admin, I want to update subscription plans, so that pricing and features can be adjusted.

**User Story:**
As a platform admin, I want to edit plan pricing or features, so that we can respond to market changes.

**Acceptance Criteria:**
- Plan edit interface
- Can update: pricing, features, limits
- Plan changes logged
- Plan changes can affect existing subscriptions (with notice)
- Plan versioning (track changes)
- Plan changes require confirmation

**Dependencies:**
Depends on: #2

---

### Feature Area: Subscription Management

#### Story #4: Assign Subscription to Organization

**Description:**
As a platform admin, I want to assign a subscription to an organization, so that they can use the platform.

**User Story:**
As a platform admin, I want to assign a subscription plan to an organization with start date, so that they begin billing.

**Acceptance Criteria:**
- Subscription assignment interface
- Select organization and plan
- Set start date and billing cycle
- Subscription created and activated
- Stripe subscription created (if using Stripe)
- Subscription linked to organization
- Subscription assignment logged

**Dependencies:**
Depends on: #1, Epic 1, Epic 2

---

#### Story #5: View Organization Subscription

**Description:**
As a platform admin or organization admin, I want to view organization subscription details, so that billing information is accessible.

**User Story:**
As an organization admin, I want to see my subscription plan, billing cycle, and usage, so that I understand my billing.

**Acceptance Criteria:**
- Subscription detail view
- Shows: plan, start date, billing cycle, next billing date, status
- Display current MAU count
- Display usage vs. included MAU
- Display overage charges
- Links to invoices and payment methods
- Subscription can be updated (if admin has permission)

**Dependencies:**
Depends on: #4

---

#### Story #6: Change Subscription Plan

**Description:**
As a platform admin or organization admin, I want to change an organization's subscription plan, so that they can upgrade or downgrade.

**User Story:**
As an organization admin, I want to upgrade my subscription plan, so that I can access more features.

**Acceptance Criteria:**
- Plan change interface
- Select new plan
- Proration calculated for plan change
- Plan change effective immediately or next billing cycle
- Stripe subscription updated (if using Stripe)
- Plan change logged
- Plan change confirmation sent

**Dependencies:**
Depends on: #5

---

### Feature Area: MAU Measurement

#### Story #7: Calculate Monthly Active Users

**Description:**
As a system, I want to calculate Monthly Active Users (MAU), so that usage-based billing is accurate.

**User Story:**
As a system, I want to count unique users who logged in during a billing period, so that MAU is measured correctly.

**Acceptance Criteria:**
- MAU calculation runs at end of billing period
- Counts unique users who logged in during period
- MAU stored per organization per billing period
- MAU calculation logged
- MAU can be recalculated if needed
- MAU displayed in subscription detail

**Dependencies:**
Depends on: #4, Epic 4

---

#### Story #8: View MAU History

**Description:**
As a platform admin or organization admin, I want to view MAU history, so that usage trends are visible.

**User Story:**
As an organization admin, I want to see my MAU over time, so that I can understand usage patterns.

**Acceptance Criteria:**
- MAU history view
- Shows: billing period, MAU count, included MAU, overage
- Chart showing MAU trends
- Filter by date range
- MAU history exportable
- MAU history used for billing

**Dependencies:**
Depends on: #7

---

#### Story #9: Calculate Overage

**Description:**
As a system, I want to calculate overage charges, so that organizations pay for usage above included MAU.

**User Story:**
As a system, I want to calculate overage when MAU exceeds included amount, so that usage-based billing is applied.

**Acceptance Criteria:**
- Overage calculation: (MAU - included MAU) * overage price
- Overage calculated at end of billing period
- Overage charges added to invoice
- Overage displayed in subscription detail
- Overage can be waived (by admin)
- Overage calculation logged

**Dependencies:**
Depends on: #7, #8

---

### Feature Area: Stripe Integration

#### Story #10: Sync Subscription with Stripe

**Description:**
As a system, I want to sync subscriptions with Stripe, so that billing is managed in Stripe.

**User Story:**
As a system, I want to create and update Stripe subscriptions when plans change, so that billing is synchronized.

**Acceptance Criteria:**
- Stripe subscription created on subscription assignment
- Stripe subscription updated on plan change
- Stripe subscription cancelled on termination
- Stripe webhook handling for subscription events
- Subscription status synced from Stripe
- Sync errors logged and handled

**Dependencies:**
Depends on: #4

---

#### Story #11: Handle Stripe Webhooks

**Description:**
As a system, I want to handle Stripe webhooks, so that subscription events are processed.

**User Story:**
As a system, I want to process Stripe webhook events like payment success, failure, or subscription cancellation, so that billing status is current.

**Acceptance Criteria:**
- Webhook endpoint for Stripe events
- Events handled: payment succeeded, payment failed, subscription updated, subscription cancelled
- Event processing updates subscription status
- Event processing logged
- Failed webhook processing retried
- Webhook security validated

**Dependencies:**
Depends on: #10

---

### Feature Area: Invoice Management

#### Story #12: Generate Invoice

**Description:**
As a system, I want to generate invoices, so that organizations are billed for their subscription.

**User Story:**
As a system, I want to automatically generate invoices at the end of each billing cycle, so that organizations receive bills.

**Acceptance Criteria:**
- Invoice generation at end of billing cycle
- Invoice includes: base fee, MAU charges, overage charges, taxes (if applicable)
- Invoice formatted as PDF
- Invoice sent to organization contact
- Invoice stored in system
- Invoice number assigned
- Invoice generation logged

**Dependencies:**
Depends on: #4, #9

---

#### Story #13: View Invoice List

**Description:**
As a platform admin or organization admin, I want to view invoices, so that billing history is accessible.

**User Story:**
As an organization admin, I want to see all my invoices with status and amounts, so that I can track billing.

**Acceptance Criteria:**
- Invoice list: invoice number, date, amount, status, due date
- Filter by: status, date range
- Search by invoice number
- Sortable columns
- Click invoice to view details
- Invoice download available
- Invoices exportable

**Dependencies:**
Depends on: #12

---

#### Story #14: View Invoice Details

**Description:**
As a platform admin or organization admin, I want to view invoice details, so that line items are visible.

**User Story:**
As an organization admin, I want to see invoice line items including base fee, MAU charges, and overages, so that I understand what I'm being billed for.

**Acceptance Criteria:**
- Invoice detail view
- Shows: line items, amounts, totals, payment status
- Invoice PDF downloadable
- Invoice can be resent (if admin)
- Invoice payment status displayed
- Invoice linked to payment records

**Dependencies:**
Depends on: #13

---

#### Story #15: Mark Invoice as Paid

**Description:**
As a system, I want to mark invoices as paid when payment is received, so that billing status is accurate.

**User Story:**
As a system, I want to automatically mark invoices as paid when Stripe payment succeeds, so that billing records are current.

**Acceptance Criteria:**
- Invoice status updated on payment success
- Payment date recorded
- Payment method recorded
- Invoice marked as paid
- Payment confirmation sent
- Payment logged in billing events

**Dependencies:**
Depends on: #12, #11

---

### Feature Area: Subscription Lifecycle

#### Story #16: Suspend Subscription

**Description:**
As a platform admin, I want to suspend subscriptions, so that organizations can be temporarily disabled.

**User Story:**
As a platform admin, I want to suspend an organization's subscription, so that access is restricted while issues are resolved.

**Acceptance Criteria:**
- Subscription suspension interface
- Suspension requires reason
- Subscription status changes to "suspended"
- Organization access disabled
- Suspension logged
- Suspension can be lifted
- Suspension notification sent

**Dependencies:**
Depends on: #5, Epic 2

---

#### Story #17: Pause Subscription

**Description:**
As a platform admin, I want to pause subscriptions, so that organizations can temporarily stop billing.

**User Story:**
As a platform admin, I want to pause a subscription, so that billing stops while organization is on hold.

**Acceptance Criteria:**
- Subscription pause interface
- Pause requires reason and end date
- Subscription status changes to "paused"
- Billing stops during pause
- Organization access can remain (configurable)
- Pause logged
- Pause can be ended early

**Dependencies:**
Depends on: #5

---

#### Story #18: Cancel Subscription

**Description:**
As a platform admin or organization admin, I want to cancel subscriptions, so that organizations can end their subscription.

**User Story:**
As an organization admin, I want to cancel my subscription, so that I can stop using the platform.

**Acceptance Criteria:**
- Subscription cancellation interface
- Cancellation requires reason
- Cancellation effective date set (immediate or end of period)
- Stripe subscription cancelled (if using Stripe)
- Subscription status changes to "cancelled"
- Cancellation logged
- Cancellation confirmation sent

**Dependencies:**
Depends on: #5, #10

---

### Feature Area: Billing Analytics

#### Story #19: View Billing Dashboard

**Description:**
As a platform admin, I want to view a billing dashboard, so that I can monitor subscription and revenue metrics.

**User Story:**
As a platform admin, I want to see subscription statistics, revenue, and usage trends, so that I can understand business performance.

**Acceptance Criteria:**
- Billing dashboard
- Shows: total subscriptions, revenue, MAU trends, churn rate
- Charts showing trends over time
- Filter by date range
- Key metrics highlighted
- Dashboard exportable

**Dependencies:**
Depends on: #4, #7

---

#### Story #20: Generate Billing Reports

**Description:**
As a platform admin, I want to generate billing reports, so that I can analyze subscription and revenue data.

**User Story:**
As a platform admin, I want to generate reports showing subscription metrics, revenue, and usage, so that I can make data-driven decisions.

**Acceptance Criteria:**
- Billing report generation interface
- Report types: revenue, subscriptions, usage, churn
- Filter by: date range, plan, organization
- Reports include summary statistics
- Reports exportable to CSV or PDF
- Reports can be scheduled (future)

**Dependencies:**
Depends on: #19

---

