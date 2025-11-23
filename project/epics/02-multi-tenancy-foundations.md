# Epic 2: Multi-Tenancy & Organization Foundations

## Overview

Defines how multiple schools exist independently within the system. Includes org creation, subdomain routing, tenant isolation, asset separation, branding, org-level settings, and lifecycle states (active, suspended, termination countdown). It also includes audit logs and service boundaries.

All school-facing features depend on this foundation. This epic ensures complete data isolation between organizations while providing flexible configuration options.

## Key Features

- Organization creation and lifecycle management
- Subdomain-based routing and tenant resolution
- Complete data isolation between tenants
- Organization branding and customization
- Organization-level settings and configuration
- Audit logging for all organization changes
- Service boundaries and API isolation

## Data Models

- `Organization` - Core organization entity
- `OrganizationSetting` - Key-value settings per organization
- `OrganizationBranding` - Logo, colors, custom CSS
- `OrganizationLifecycle` - State machine for org status
- `Subdomain` - Subdomain routing configuration
- `TenantIsolation` - Data scoping rules
- `OrganizationAuditLog` - Organization-specific audit trail

## User Roles

- **Platform Admin** - Creates and manages organizations (from Epic 1)
- **Organization Admin** - Manages their own organization settings
- **System** - Automatic tenant resolution and isolation

## Dependencies

- **Epic 1 (Product Admin Portal)**: Organization creation initiated from admin portal

## Integration Points

- **All School-Facing Epics**: Every feature must respect tenant boundaries
- **RBAC (Epic 3)**: Organization context for all permissions
- **Billing (Epic 13)**: Organization billing and subscription management
- **Product Admin Portal (Epic 1)**: Organization management interface

## Status

**Mandatory - Foundation Epic**

## Technical Notes

- Use subdomain-based tenant resolution (e.g., `schoolname.platform.com`)
- Implement row-level security or scoped queries for all models
- Cache tenant resolution for performance
- Support custom domains in future (CNAME configuration)
- All database queries must include organization scope
- Use middleware to inject organization context into requests

## Stories

### Feature Area: Organization Creation & Lifecycle

#### Story #1: Create Organization Record

**Description:**
As a platform admin, I want to create an organization record with basic information, so that a new school can be onboarded into the system.

**User Story:**
As a platform admin, I want to create an organization with name, subdomain, and contact information, so that the school can begin configuration.

**Acceptance Criteria:**
- Organization record created with: name, subdomain, primary contact email, phone, address
- Subdomain validated for uniqueness and URL safety
- Organization created in "pending" state
- Default settings initialized
- Organization ID generated (UUID)
- Creation timestamp and creator tracked
- Organization record persisted to database

**Dependencies:**
Depends on: Epic 1, Story #1

---

#### Story #2: Validate Subdomain Availability

**Description:**
As a platform admin, I want to check if a subdomain is available before creating an organization, so that I can ensure unique subdomain assignment.

**User Story:**
As a platform admin, I want to validate subdomain availability in real-time, so that I can provide immediate feedback during organization creation.

**Acceptance Criteria:**
- Subdomain validation API endpoint
- Checks for uniqueness against existing organizations
- Validates subdomain format (alphanumeric, hyphens, lowercase)
- Validates length (3-63 characters)
- Reserved subdomain list (admin, api, www, etc.)
- Returns availability status immediately
- Suggests alternatives if unavailable

**Dependencies:**
None

---

#### Story #3: Initialize Default Organization Settings

**Description:**
As a system, I want to initialize default settings when an organization is created, so that new organizations have sensible defaults.

**User Story:**
As a system, I want to create default organization settings including timezone, date format, and feature preferences, so that organizations can start using the system immediately.

**Acceptance Criteria:**
- Default settings created for: timezone (UTC), date format, currency, language
- Default feature flags set based on subscription plan
- Default branding (system logo, default colors)
- Default notification preferences
- Settings can be overridden by organization admin
- Default settings documented in system configuration

**Dependencies:**
Depends on: #1

---

#### Story #4: Manage Organization Lifecycle States

**Description:**
As a platform admin, I want to manage organization lifecycle states, so that I can control organization access and track status transitions.

**User Story:**
As a platform admin, I want to transition organizations between states (pending, active, suspended, terminated), so that I can manage customer lifecycle.

**Acceptance Criteria:**
- State machine with states: pending, active, suspended, terminated
- Valid state transitions enforced
- State changes logged in audit trail
- State affects organization access (suspended = no login, terminated = no access)
- State displayed in organization detail
- Automatic state transitions supported (e.g., auto-suspend on payment failure)

**Dependencies:**
Depends on: #1

---

#### Story #5: Set Organization Termination Countdown

**Description:**
As a platform admin, I want to set a termination countdown for organizations, so that I can provide notice before permanent account closure.

**User Story:**
As a platform admin, I want to schedule organization termination with a countdown period, so that customers have time to export data and resolve issues.

**Acceptance Criteria:**
- Admin can set termination date (minimum 7 days in future)
- Countdown displayed in organization dashboard
- Daily countdown updates
- Email notifications sent at 7 days, 3 days, 1 day before termination
- Organization access restricted as termination approaches
- Termination automatically executed on scheduled date
- Data retention period begins after termination

**Dependencies:**
Depends on: #4

---

### Feature Area: Subdomain Routing & Tenant Resolution

#### Story #6: Implement Subdomain-Based Routing

**Description:**
As a system, I want to route requests to the correct organization based on subdomain, so that each school accesses only their data.

**User Story:**
As a system, I want to resolve the organization from the request subdomain, so that all subsequent operations are scoped to that organization.

**Acceptance Criteria:**
- Middleware extracts subdomain from request
- Subdomain mapped to organization ID
- Organization context injected into request
- Invalid subdomain returns 404
- Subdomain resolution cached for performance
- Support for custom domains (future: CNAME resolution)
- Fallback to default organization for admin routes

**Dependencies:**
Depends on: #1

---

#### Story #7: Cache Tenant Resolution

**Description:**
As a system, I want to cache subdomain-to-organization mappings, so that tenant resolution is fast and doesn't hit the database on every request.

**User Story:**
As a system, I want to cache tenant resolution results, so that I can improve response times and reduce database load.

**Acceptance Criteria:**
- Subdomain-to-organization mapping cached
- Cache invalidated when organization subdomain changes
- Cache invalidated when organization is deleted
- Cache TTL configurable (default: 1 hour)
- Cache warming on organization creation
- Cache statistics tracked

**Dependencies:**
Depends on: #6

---

#### Story #8: Handle Invalid Subdomain Requests

**Description:**
As a system, I want to handle requests with invalid or non-existent subdomains gracefully, so that users receive helpful error messages.

**User Story:**
As a system, I want to return appropriate error pages for invalid subdomains, so that users understand why they cannot access the system.

**Acceptance Criteria:**
- Invalid subdomain returns 404 page
- Non-existent subdomain shows helpful error message
- Suspended organization shows suspension notice
- Terminated organization shows termination notice
- Error pages can be customized per organization (future)
- Log invalid subdomain attempts for security

**Dependencies:**
Depends on: #6

---

### Feature Area: Data Isolation

#### Story #9: Implement Organization Scoping for All Models

**Description:**
As a developer, I want all models to be automatically scoped to the current organization, so that data isolation is enforced at the database level.

**User Story:**
As a developer, I want a consistent pattern for organization scoping, so that I can ensure no data leaks between organizations.

**Acceptance Criteria:**
- Base model concern for organization scoping
- All tenant-scoped models include organization_id
- Default scope filters by current organization
- Unscoped queries require explicit override
- Organization context available in all models
- Scoping works with associations
- Database indexes on organization_id for performance

**Dependencies:**
Depends on: #6

---

#### Story #10: Enforce Tenant Isolation in Queries

**Description:**
As a system, I want to ensure all database queries are scoped to the current organization, so that data cannot leak between tenants.

**User Story:**
As a system, I want to automatically inject organization scope into all queries, so that developers cannot accidentally query across organizations.

**Acceptance Criteria:**
- All ActiveRecord queries include organization scope
- Unscoped queries raise exception in development
- Association queries respect organization scope
- Join queries properly scope all tables
- Raw SQL queries validated for organization scoping
- Test coverage for isolation enforcement
- Documentation for developers on scoping patterns

**Dependencies:**
Depends on: #9

---

#### Story #11: Isolate File Storage by Organization

**Description:**
As a system, I want to store files in organization-specific directories, so that file access is isolated between tenants.

**User Story:**
As a system, I want to organize file storage by organization ID, so that files from different organizations are completely separated.

**Acceptance Criteria:**
- Active Storage paths include organization ID
- Files stored in organization-specific buckets/directories
- File access validates organization ownership
- File URLs include organization context
- File deletion respects organization boundaries
- Storage quotas tracked per organization

**Dependencies:**
Depends on: #9

---

### Feature Area: Organization Settings

#### Story #12: Manage Organization Settings

**Description:**
As an organization admin, I want to manage organization-level settings, so that I can configure the system for our school's needs.

**User Story:**
As an organization admin, I want to update settings like timezone, date format, and operational preferences, so that the system matches our school's requirements.

**Acceptance Criteria:**
- Settings interface accessible to organization admins
- Settings include: timezone, date format, time format, currency, language
- Settings validated before saving
- Settings changes logged in audit trail
- Settings take effect immediately
- Settings can be reset to defaults
- Settings exported/imported (future)

**Dependencies:**
Depends on: #3, Epic 3 (RBAC for admin access)

---

#### Story #13: Configure Organization Preferences

**Description:**
As an organization admin, I want to configure operational preferences, so that workflows match our school's processes.

**User Story:**
As an organization admin, I want to set preferences for notifications, workflows, and feature defaults, so that the system aligns with our operational model.

**Acceptance Criteria:**
- Preferences interface for: notification defaults, workflow settings, feature preferences
- Preferences saved per organization
- Preferences can be set at organization or user level
- Organization-level preferences override system defaults
- Preferences changes logged
- Preferences exported for backup

**Dependencies:**
Depends on: #12

---

### Feature Area: Branding & Customization

#### Story #14: Upload Organization Logo

**Description:**
As an organization admin, I want to upload our school logo, so that the platform displays our branding.

**User Story:**
As an organization admin, I want to upload a logo image that appears in the header and emails, so that the system reflects our school's brand.

**Acceptance Criteria:**
- Logo upload interface in organization settings
- Accepts common image formats (PNG, JPG, SVG)
- Logo resized to standard dimensions
- Logo displayed in application header
- Logo included in email templates
- Logo can be removed/replaced
- Logo file size limited (e.g., 2MB max)

**Dependencies:**
Depends on: #12

---

#### Story #15: Customize Organization Colors

**Description:**
As an organization admin, I want to customize the platform's color scheme, so that it matches our school's brand colors.

**User Story:**
As an organization admin, I want to set primary and secondary brand colors, so that the UI reflects our school's visual identity.

**Acceptance Criteria:**
- Color picker for primary and secondary colors
- Colors validated for accessibility (contrast ratios)
- Colors applied to UI components (buttons, headers, links)
- Colors included in email templates
- Preview of color changes before saving
- Colors can be reset to defaults
- Color changes take effect immediately

**Dependencies:**
Depends on: #12

---

#### Story #16: Apply Organization Branding to UI

**Description:**
As a system, I want to apply organization branding (logo, colors) to the user interface, so that each school sees their customized platform.

**User Story:**
As a system, I want to inject organization branding into all UI components, so that the platform feels customized for each school.

**Acceptance Criteria:**
- Logo displayed in application header
- Brand colors applied to primary UI elements
- Branding included in email templates
- Branding cached for performance
- Branding fallback to defaults if not set
- Branding works with Inertia.js and Nuxt UI components
- Branding applied consistently across all pages

**Dependencies:**
Depends on: #14, #15

---

### Feature Area: Audit Logging

#### Story #17: Log Organization Changes

**Description:**
As a system, I want to log all changes to organization records, so that we can audit configuration changes and troubleshoot issues.

**User Story:**
As a system, I want to record who changed what organization settings and when, so that we can maintain an audit trail.

**Acceptance Criteria:**
- All organization field changes logged
- Log includes: field name, old value, new value, changed by, timestamp
- Log entries immutable (cannot be deleted)
- Log entries searchable and filterable
- Log entries exportable
- Log retention policy configurable
- Log displayed in organization detail page

**Dependencies:**
Depends on: #1

---

#### Story #18: View Organization Audit Log

**Description:**
As an organization admin or platform admin, I want to view the audit log for an organization, so that I can see what changes have been made.

**User Story:**
As an organization admin, I want to see a history of all changes to our organization settings, so that I can track configuration updates.

**Acceptance Criteria:**
- Audit log displayed in organization settings
- Log entries show: date, user, action, field, old value, new value
- Filter by date range, user, or field
- Search log entries
- Export audit log to CSV
- Pagination for large logs
- Real-time updates for recent changes

**Dependencies:**
Depends on: #17

---

### Feature Area: Service Boundaries

#### Story #19: Define Organization Service Boundaries

**Description:**
As a developer, I want clear service boundaries for organization-scoped operations, so that I can build features that respect tenant isolation.

**User Story:**
As a developer, I want documented patterns and helpers for organization-scoped operations, so that I can implement features correctly.

**Acceptance Criteria:**
- Documentation for organization scoping patterns
- Helper methods for current organization access
- Service objects for organization-scoped operations
- Test helpers for organization context
- Code review checklist for tenant isolation
- Examples of correct and incorrect patterns

**Dependencies:**
Depends on: #9

---

#### Story #20: Validate Cross-Organization Access Prevention

**Description:**
As a system, I want to prevent any cross-organization data access, so that tenant isolation is never violated.

**User Story:**
As a system, I want to validate that all data access is scoped to the current organization, so that security is maintained.

**Acceptance Criteria:**
- Automated tests for cross-organization access prevention
- Development mode warnings for unscoped queries
- Security audit logging for suspicious access attempts
- Rate limiting per organization
- API endpoints validate organization context
- Background jobs scoped to organization
- File access validates organization ownership

**Dependencies:**
Depends on: #9, #10

---

