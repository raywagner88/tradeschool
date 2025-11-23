# Epic 1: Product Admin Portal (Platform Console)

## Overview

This is the internal control center for the SaaS itself—not used by schools but by your team. It allows platform operators to create organizations, manage subscriptions, adjust billing, set feature flags, impersonate users, view system health, monitor queues/events, and audit all activity. It is the heart of support, onboarding, debugging, and operational oversight.

This epic is mandatory to build first as it provides the foundation for managing the entire platform.

## Key Features

- Organization creation and management
- Subscription and billing management
- Feature flag configuration
- User impersonation for support
- System health monitoring
- Queue and event monitoring
- Comprehensive audit logging
- Support tools and debugging utilities

## Data Models

- `PlatformAdmin` - Internal admin users
- `Organization` - School organizations (managed here)
- `Subscription` - Billing subscriptions
- `FeatureFlag` - Feature toggle configuration
- `AuditLog` - System-wide activity logs
- `SystemHealth` - Health check metrics
- `QueueStatus` - Job queue monitoring

## User Roles

- **Platform Admin** - Full access to all platform operations
- **Support Agent** - Limited access for customer support
- **Operations Manager** - Access to monitoring and health checks

## Dependencies

- None (this is the first epic to build)

## Integration Points

- **Multi-Tenancy (Epic 2)**: Creates and manages organizations
- **Billing (Epic 13)**: Adjusts billing, manages subscriptions
- **All Epics**: Feature flags control access to features across all epics
- **All Epics**: Audit logs capture activity from all system components

## Status

**Mandatory - Build First**

## Technical Notes

- Separate authentication system from school-facing auth
- Use Inertia.js with Nuxt UI for admin interface
- Real-time monitoring via Solid Cable for queue/health status
- Feature flags stored in database with caching layer
- Audit logs should be immutable and searchable

## Stories

### Feature Area: Organization Management

#### Story #1: Create New Organization

**Description:**
As a platform admin, I want to create new school organizations through the admin portal, so that I can onboard new customers and configure their initial settings.

**User Story:**
As a platform admin, I want to create a new organization with basic information (name, subdomain, contact details), so that the school can begin using the system.

**Acceptance Criteria:**
- Admin can access organization creation form
- Form includes: organization name, subdomain (with validation), primary contact email, phone, address
- Subdomain must be unique and URL-safe
- System validates subdomain availability
- Upon creation, organization is created in "pending" state
- Admin receives confirmation of organization creation
- Organization record includes creation timestamp and admin who created it

**Dependencies:**
None

---

#### Story #2: View Organization List

**Description:**
As a platform admin, I want to view a list of all organizations with filtering and search capabilities, so that I can quickly find and manage specific schools.

**User Story:**
As a platform admin, I want to see a paginated list of all organizations with search and filter options, so that I can efficiently manage multiple customers.

**Acceptance Criteria:**
- List displays: organization name, subdomain, status, created date, last activity
- Search by organization name or subdomain
- Filter by status (active, suspended, pending, terminated)
- Filter by subscription plan
- Sortable columns (name, created date, last activity)
- Pagination with configurable page size
- Clicking organization name navigates to organization detail page

**Dependencies:**
Depends on: #1

---

#### Story #3: View Organization Details

**Description:**
As a platform admin, I want to view detailed information about a specific organization, so that I can understand their configuration and troubleshoot issues.

**User Story:**
As a platform admin, I want to see comprehensive details about an organization including settings, subscription, usage metrics, and activity history, so that I can provide effective support.

**Acceptance Criteria:**
- Detail page shows: basic info, subscription details, billing information, feature flags, usage statistics
- Display organization status and lifecycle state
- Show recent activity and audit logs
- Display user count, student count, MAU metrics
- Show subscription start/end dates and renewal information
- Links to related records (users, students, etc.)

**Dependencies:**
Depends on: #1, #2

---

#### Story #4: Update Organization Settings

**Description:**
As a platform admin, I want to update organization settings and configuration, so that I can adjust customer configurations as needed.

**User Story:**
As a platform admin, I want to modify organization settings including name, contact information, and operational parameters, so that I can keep customer information current.

**Acceptance Criteria:**
- Admin can edit organization name, contact email, phone, address
- Changes are logged in audit trail
- Subdomain changes require special permission and validation
- Changes take effect immediately
- Confirmation message displayed on successful update

**Dependencies:**
Depends on: #3

---

#### Story #5: Suspend Organization

**Description:**
As a platform admin, I want to suspend an organization's access to the platform, so that I can enforce billing compliance or address security concerns.

**User Story:**
As a platform admin, I want to suspend an organization with an optional reason and notification, so that I can temporarily restrict access while resolving issues.

**Acceptance Criteria:**
- Admin can suspend organization from detail page
- Suspension requires confirmation dialog
- Optional reason field for suspension
- Organization users cannot log in when suspended
- Suspension is logged in audit trail
- Admin can set suspension end date or leave indefinite
- Notification email sent to organization contact (optional)

**Dependencies:**
Depends on: #3

---

#### Story #6: Terminate Organization

**Description:**
As a platform admin, I want to terminate an organization's account, so that I can permanently remove customers who have cancelled or violated terms.

**User Story:**
As a platform admin, I want to terminate an organization with a countdown period and data retention options, so that I can properly close accounts while preserving necessary records.

**Acceptance Criteria:**
- Termination requires confirmation and reason
- Admin can set termination date (countdown period)
- Option to export organization data before termination
- Termination countdown displayed in organization detail
- All organization access disabled on termination date
- Data retention policy applied (e.g., 90 days)
- Termination logged in audit trail

**Dependencies:**
Depends on: #3

---

### Feature Area: Subscription & Billing Management

#### Story #7: View Organization Subscriptions

**Description:**
As a platform admin, I want to view an organization's subscription details, so that I can understand their billing status and plan.

**User Story:**
As a platform admin, I want to see subscription information including plan, billing cycle, payment status, and usage metrics, so that I can assist with billing inquiries.

**Acceptance Criteria:**
- Display current subscription plan name and features
- Show billing cycle (monthly, annual)
- Display next billing date and amount
- Show payment status (current, past due, etc.)
- Display MAU (Monthly Active Users) count
- Show usage-based billing metrics if applicable
- Link to billing history and invoices

**Dependencies:**
Depends on: #3

---

#### Story #8: Change Subscription Plan

**Description:**
As a platform admin, I want to change an organization's subscription plan, so that I can upgrade, downgrade, or adjust customer plans.

**User Story:**
As a platform admin, I want to change an organization's subscription plan with prorated billing adjustments, so that I can accommodate customer needs while maintaining accurate billing.

**Acceptance Criteria:**
- Admin can select new plan from available options
- System calculates prorated charges/credits
- Preview of billing impact before confirmation
- Plan change takes effect immediately or on next billing cycle (configurable)
- Change logged in audit trail
- Notification sent to organization (optional)
- Feature access updated based on new plan

**Dependencies:**
Depends on: #7

---

#### Story #9: Adjust Billing Manually

**Description:**
As a platform admin, I want to manually adjust billing charges, credits, or overrides, so that I can resolve billing disputes and apply special pricing.

**User Story:**
As a platform admin, I want to add credits, apply discounts, or adjust charges with notes, so that I can provide exceptional customer service and resolve billing issues.

**Acceptance Criteria:**
- Admin can add credit to organization account
- Admin can apply percentage or fixed discount
- Admin can adjust individual charges
- All adjustments require reason/notes field
- Adjustments logged in audit trail
- Adjustments reflected in next invoice
- Preview of adjustment impact before confirmation

**Dependencies:**
Depends on: #7

---

#### Story #10: View Billing History

**Description:**
As a platform admin, I want to view an organization's complete billing history, so that I can review past transactions and resolve disputes.

**User Story:**
As a platform admin, I want to see all invoices, payments, credits, and adjustments for an organization, so that I can provide accurate billing support.

**Acceptance Criteria:**
- List of all invoices with status (paid, pending, overdue)
- Display payment history with dates and amounts
- Show credit history and adjustments
- Filter by date range
- Download invoice PDFs
- View invoice details including line items
- Export billing data to CSV

**Dependencies:**
Depends on: #7

---

### Feature Area: Feature Flags

#### Story #11: View Feature Flags

**Description:**
As a platform admin, I want to view all feature flags and their current state, so that I can understand which features are enabled across the platform.

**User Story:**
As a platform admin, I want to see a list of all feature flags with their global and per-organization settings, so that I can manage feature rollouts.

**Acceptance Criteria:**
- List displays: feature name, description, global status, organization overrides count
- Search and filter capabilities
- Group flags by epic or category
- Show which organizations have overrides
- Display flag creation and last modified dates

**Dependencies:**
None

---

#### Story #12: Configure Global Feature Flags

**Description:**
As a platform admin, I want to enable or disable features globally, so that I can control feature availability across all organizations.

**User Story:**
As a platform admin, I want to toggle global feature flags, so that I can roll out new features gradually or disable problematic features.

**Acceptance Criteria:**
- Admin can enable/disable feature flags globally
- Toggle requires confirmation for major features
- Change logged in audit trail
- Change takes effect immediately
- Display impact (number of organizations affected)
- Option to set percentage rollout (e.g., 10% of orgs)

**Dependencies:**
Depends on: #11

---

#### Story #13: Set Organization-Specific Feature Flags

**Description:**
As a platform admin, I want to override feature flags for specific organizations, so that I can enable beta features for select customers or disable features for troubleshooting.

**User Story:**
As a platform admin, I want to set feature flag overrides per organization, so that I can provide customized feature access to specific customers.

**Acceptance Criteria:**
- Admin can set feature flag override from organization detail page
- Override can enable or disable feature regardless of global setting
- Override can be removed to fall back to global setting
- Override changes logged in audit trail
- Override takes effect immediately
- Display current override status in feature flag list

**Dependencies:**
Depends on: #3, #11

---

### Feature Area: User Impersonation

#### Story #14: Impersonate Organization User

**Description:**
As a platform admin, I want to impersonate any user in an organization, so that I can troubleshoot issues from the user's perspective.

**User Story:**
As a platform admin, I want to log in as any organization user, so that I can see exactly what they see and resolve support tickets more effectively.

**Acceptance Criteria:**
- Admin can search for users by name or email
- Admin can initiate impersonation from user list or organization detail
- Impersonation requires confirmation
- Clear banner displayed indicating impersonation mode
- All actions performed while impersonating are logged
- Admin can end impersonation at any time
- Session timeout applies to impersonation sessions
- Impersonation logged in audit trail with start/end times

**Dependencies:**
Depends on: #3

---

#### Story #15: View Impersonation History

**Description:**
As a platform admin, I want to view a history of impersonation sessions, so that I can audit support activities and ensure proper use.

**User Story:**
As a platform admin, I want to see who impersonated which users and when, so that I can maintain accountability for support actions.

**Acceptance Criteria:**
- List of all impersonation sessions
- Display: admin who impersonated, target user, organization, start time, end time, duration
- Filter by admin, organization, or date range
- Show actions performed during impersonation (if tracked)
- Export impersonation log to CSV

**Dependencies:**
Depends on: #14

---

### Feature Area: System Health & Monitoring

#### Story #16: View System Health Dashboard

**Description:**
As a platform admin, I want to view a system health dashboard, so that I can monitor platform performance and identify issues proactively.

**User Story:**
As a platform admin, I want to see real-time system health metrics including response times, error rates, and resource usage, so that I can ensure the platform is operating smoothly.

**Acceptance Criteria:**
- Dashboard displays: API response times, error rates, database performance, cache hit rates
- Real-time updates (every 30 seconds)
- Color-coded status indicators (green, yellow, red)
- Historical charts showing trends
- Alert indicators for degraded performance
- Links to detailed metrics for each component

**Dependencies:**
None

---

#### Story #17: Monitor Job Queues

**Description:**
As a platform admin, I want to monitor job queue status, so that I can identify bottlenecks and ensure background jobs are processing correctly.

**User Story:**
As a platform admin, I want to see queue depth, processing rates, failed jobs, and retry counts, so that I can maintain system performance.

**Acceptance Criteria:**
- Display queue names and current depth
- Show processing rate (jobs/second)
- Display failed jobs count with error messages
- Show retry counts for failed jobs
- Filter by queue name or job type
- View job details including payload and error stack traces
- Option to retry failed jobs manually
- Alert when queue depth exceeds threshold

**Dependencies:**
Depends on: #16

---

#### Story #18: View System Events

**Description:**
As a platform admin, I want to view system events and logs, so that I can debug issues and understand system activity.

**User Story:**
As a platform admin, I want to see real-time system events including errors, warnings, and important state changes, so that I can quickly identify and resolve problems.

**Acceptance Criteria:**
- Stream of system events with timestamps
- Filter by event type (error, warning, info)
- Filter by component or service
- Search by message content
- View event details including stack traces for errors
- Export event log to file
- Real-time updates for recent events

**Dependencies:**
Depends on: #16

---

### Feature Area: Audit Logging

#### Story #19: View Audit Logs

**Description:**
As a platform admin, I want to view comprehensive audit logs, so that I can track all system activity and maintain compliance.

**User Story:**
As a platform admin, I want to see a searchable log of all significant actions across the platform, so that I can audit system usage and investigate issues.

**Acceptance Criteria:**
- List of audit log entries with: timestamp, user, action, resource, organization
- Search by user, organization, action type, or date range
- Filter by action type (create, update, delete, login, etc.)
- Filter by organization
- View detailed log entry including before/after values
- Export audit logs to CSV
- Pagination for large result sets

**Dependencies:**
None

---

#### Story #20: Export Audit Logs

**Description:**
As a platform admin, I want to export audit logs for compliance and analysis, so that I can maintain records and perform security audits.

**User Story:**
As a platform admin, I want to export filtered audit logs to CSV or JSON format, so that I can analyze activity patterns and maintain compliance records.

**Acceptance Criteria:**
- Export filtered audit logs to CSV
- Export filtered audit logs to JSON
- Include all relevant fields in export
- Large exports processed as background job with download link
- Export includes metadata (export date, filters applied)
- Exports stored for 30 days for re-download

**Dependencies:**
Depends on: #19

---

### Feature Area: Support Tools

#### Story #21: Search Across Organizations

**Description:**
As a platform admin, I want to search across all organizations for users, students, or records, so that I can quickly find information during support calls.

**User Story:**
As a platform admin, I want to search for any user, student, or record across the entire platform, so that I can provide fast support without navigating multiple organizations.

**Acceptance Criteria:**
- Global search bar in admin portal
- Search by user email, name, or ID
- Search by student name, ID, or email
- Search by organization name or subdomain
- Results grouped by organization
- Click result to navigate to detail page
- Search respects organization access permissions

**Dependencies:**
Depends on: #2

---

#### Story #22: View Platform Statistics

**Description:**
As a platform admin, I want to view platform-wide statistics, so that I can understand business metrics and growth.

**User Story:**
As a platform admin, I want to see aggregate statistics including total organizations, users, students, revenue, and usage trends, so that I can make data-driven decisions.

**Acceptance Criteria:**
- Dashboard showing: total organizations (by status), total users, total students, total revenue, MAU trends
- Charts showing growth over time
- Filter by date range
- Compare periods (month-over-month, year-over-year)
- Export statistics to CSV
- Real-time updates for current period metrics

**Dependencies:**
Depends on: #2

---

