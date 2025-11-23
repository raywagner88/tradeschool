# Epic 3: RBAC — Roles, Permissions & Employment Model

## Overview

Defines users, positions, and granular permissions within an organization. Every school staff member gets permissions through Employment relationships, and roles can be blended from base permissions, position-based rules, and overrides. This epic ensures the system is secure, flexible, and supports future modules.

This epic provides the security foundation for all school-facing features, ensuring users can only access and modify data they're authorized to see.

## Key Features

- User account management
- Role definitions and inheritance
- Position-based permissions
- Employment relationships
- Granular permission system
- Permission overrides
- Role blending and composition
- Permission caching for performance

## Data Models

- `User` - System users (staff, admins, instructors)
- `Role` - Named role definitions (Admin, Instructor, Registrar, etc.)
- `Permission` - Granular permission definitions
- `RolePermission` - Many-to-many between roles and permissions
- `Position` - Job positions within organization
- `Employment` - User employment relationship with position
- `PermissionOverride` - User-specific permission overrides
- `UserSession` - Active user sessions

## User Roles

- **Organization Admin** - Full access to organization
- **Registrar** - Student enrollment and records management
- **Instructor** - Class management and grading
- **Financial Officer** - Finance and billing access
- **Admissions Officer** - Admissions workflow access
- **Support Staff** - Limited access based on position
- **System** - Automated permission checks

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Users are scoped to organizations

## Integration Points

- **All School-Facing Epics**: Every feature checks permissions
- **Directory (Epic 4)**: User records and employment data
- **Multi-Tenancy (Epic 2)**: Organization context for all permissions

## Status

**Mandatory - Security Foundation**

## Technical Notes

- Use Pundit or CanCanCan for authorization
- Cache permissions for performance (Redis or memory cache)
- Permission checks at controller and view levels
- Support for permission inheritance and composition
- Audit all permission changes
- Support for temporary permission grants (time-limited)

## Stories

### Feature Area: User Management

#### Story #1: Create User Account

**Description:**
As an organization admin, I want to create user accounts for staff members, so that they can access the system with appropriate permissions.

**User Story:**
As an organization admin, I want to create a user account with email, name, and initial role assignment, so that new staff can begin using the system.

**Acceptance Criteria:**
- User creation form with: email, first name, last name, phone (optional)
- Email must be unique within organization
- Email validation (format and domain if restricted)
- Password generation or user sets password
- User created in "pending" state until email verified
- Welcome email sent with login instructions
- User record includes creation timestamp and creator
- User scoped to current organization

**Dependencies:**
Depends on: Epic 2 (organization context)

---

#### Story #2: Invite User via Email

**Description:**
As an organization admin, I want to invite users via email, so that they can set up their own accounts.

**User Story:**
As an organization admin, I want to send an invitation email to a new user, so that they can create their account and set their password.

**Acceptance Criteria:**
- Invitation form with email and role selection
- Invitation token generated and stored
- Invitation email sent with secure link
- Link expires after 7 days (configurable)
- User can set password via invitation link
- Invitation can be resent if expired
- Invitation status tracked (pending, accepted, expired)
- User account created upon invitation acceptance

**Dependencies:**
Depends on: #1

---

#### Story #3: User Authentication

**Description:**
As a user, I want to log in to the system with my email and password, so that I can access the platform.

**User Story:**
As a user, I want to authenticate with my email and password, so that I can securely access my organization's data.

**Acceptance Criteria:**
- Login form with email and password fields
- Email case-insensitive lookup
- Password hashed with bcrypt
- Failed login attempts tracked (rate limiting)
- Account locked after 5 failed attempts
- Session created upon successful login
- Session timeout after inactivity (configurable, default 8 hours)
- "Remember me" option extends session
- Login attempts logged for security

**Dependencies:**
Depends on: #1

---

#### Story #4: User Password Management

**Description:**
As a user, I want to manage my password, so that I can maintain account security.

**User Story:**
As a user, I want to change my password, reset a forgotten password, and set password requirements, so that my account remains secure.

**Acceptance Criteria:**
- User can change password from profile settings
- Current password required for change
- Password reset via email with secure token
- Reset token expires after 1 hour
- Password requirements enforced (min length, complexity)
- Password history prevents reuse of last 5 passwords
- Password change logged in audit trail
- Password reset email sent immediately

**Dependencies:**
Depends on: #3

---

#### Story #5: View User List

**Description:**
As an organization admin, I want to view a list of all users in my organization, so that I can manage staff access.

**User Story:**
As an organization admin, I want to see all users with their roles, employment status, and last login, so that I can monitor system access.

**Acceptance Criteria:**
- List displays: name, email, role(s), employment status, last login
- Search by name or email
- Filter by role or employment status
- Sortable columns
- Pagination for large lists
- Click user to view details
- Export user list to CSV

**Dependencies:**
Depends on: #1

---

#### Story #6: View User Details

**Description:**
As an organization admin, I want to view detailed information about a user, so that I can understand their permissions and activity.

**User Story:**
As an organization admin, I want to see a user's profile, roles, permissions, employment history, and activity, so that I can manage their access effectively.

**Acceptance Criteria:**
- Detail page shows: profile info, assigned roles, effective permissions, employment history
- Display current employment position
- Show permission overrides
- Display recent activity and login history
- Show active sessions
- Links to related records (students, classes, etc.)
- Edit user button (if admin has permission)

**Dependencies:**
Depends on: #5

---

#### Story #7: Update User Profile

**Description:**
As a user or admin, I want to update user profile information, so that contact details remain current.

**User Story:**
As a user, I want to update my name, phone, and other profile information, so that my account information is accurate.

**Acceptance Criteria:**
- User can edit own profile: name, phone, timezone preferences
- Admin can edit any user's profile
- Email changes require verification
- Profile changes logged in audit trail
- Changes take effect immediately
- Confirmation message on successful update

**Dependencies:**
Depends on: #6

---

#### Story #8: Deactivate User Account

**Description:**
As an organization admin, I want to deactivate user accounts, so that former staff cannot access the system.

**User Story:**
As an organization admin, I want to deactivate a user account, so that access is revoked while preserving historical data.

**Acceptance Criteria:**
- Admin can deactivate user from user detail page
- Deactivation requires confirmation
- Deactivated users cannot log in
- User's historical data preserved
- Deactivation logged in audit trail
- User can be reactivated if needed
- Active sessions terminated on deactivation

**Dependencies:**
Depends on: #6

---

### Feature Area: Roles & Permissions

#### Story #9: Define System Roles

**Description:**
As a system, I want predefined roles with standard permission sets, so that organizations can quickly assign appropriate access.

**User Story:**
As a system, I want standard roles like Organization Admin, Registrar, Instructor, and Financial Officer with appropriate permissions, so that common use cases are supported out of the box.

**Acceptance Criteria:**
- Predefined roles: Organization Admin, Registrar, Instructor, Financial Officer, Admissions Officer, Support Staff
- Each role has documented permission set
- Roles can be customized per organization (future)
- Role definitions stored in database
- Roles can be enabled/disabled per organization
- Role hierarchy supported (admin > registrar > instructor)

**Dependencies:**
None

---

#### Story #10: Define Granular Permissions

**Description:**
As a developer, I want a granular permission system, so that I can control access to specific features and actions.

**User Story:**
As a developer, I want permissions defined for each major action (view, create, update, delete) on each resource, so that access control is precise.

**Acceptance Criteria:**
- Permission format: `resource:action` (e.g., `students:view`, `students:create`)
- Permissions defined for all major resources
- Permissions documented with descriptions
- Permission checks at controller level
- Permission checks at view level (UI elements)
- Permissions can be combined (AND/OR logic)
- Permission inheritance from roles

**Dependencies:**
None

---

#### Story #11: Assign Roles to Users

**Description:**
As an organization admin, I want to assign roles to users, so that they receive appropriate permissions.

**User Story:**
As an organization admin, I want to assign one or more roles to a user, so that they have the access needed for their job.

**Acceptance Criteria:**
- Admin can assign roles from user detail page
- User can have multiple roles
- Role assignment takes effect immediately
- Role changes logged in audit trail
- Effective permissions calculated from all roles
- Role assignment can be time-limited (future)
- Notification sent to user when role assigned

**Dependencies:**
Depends on: #6, #9

---

#### Story #12: Check User Permissions

**Description:**
As a system, I want to check if a user has a specific permission, so that I can control access to features and actions.

**User Story:**
As a system, I want to efficiently check user permissions, so that I can enforce access control throughout the application.

**Acceptance Criteria:**
- Permission check method: `user.can?(:students, :view)`
- Checks role-based permissions
- Checks permission overrides
- Checks employment-based permissions
- Permission results cached for performance
- Cache invalidated on role/permission changes
- Permission checks logged for security audit (optional)

**Dependencies:**
Depends on: #10, #11

---

#### Story #13: Cache User Permissions

**Description:**
As a system, I want to cache user permissions, so that permission checks are fast and don't impact performance.

**User Story:**
As a system, I want to cache calculated permissions for each user, so that authorization checks are efficient.

**Acceptance Criteria:**
- User permissions cached in Redis or memory
- Cache key includes user ID and organization ID
- Cache invalidated when: roles change, permissions change, employment changes
- Cache TTL configurable (default: 1 hour)
- Cache warming on user login
- Cache statistics tracked
- Fallback to database if cache unavailable

**Dependencies:**
Depends on: #12

---

### Feature Area: Employment Model

#### Story #14: Create Position

**Description:**
As an organization admin, I want to create job positions, so that I can define roles and permissions for different staff types.

**User Story:**
As an organization admin, I want to create positions like "Lead Instructor" or "Assistant Registrar" with associated permissions, so that I can model our organizational structure.

**Acceptance Criteria:**
- Position creation form with: title, description, default roles
- Position can have multiple default roles
- Position can have position-specific permissions
- Position scoped to organization
- Position can be active or inactive
- Position changes logged in audit trail

**Dependencies:**
Depends on: #9

---

#### Story #15: Create Employment Relationship

**Description:**
As an organization admin, I want to create employment relationships between users and positions, so that users get permissions through their job.

**User Story:**
As an organization admin, I want to assign a user to a position with start/end dates, so that their permissions match their employment.

**Acceptance Criteria:**
- Employment creation form: user, position, start date, end date (optional)
- Employment validates user and position belong to same organization
- Employment can be active or historical
- Employment grants position's roles and permissions
- Employment changes logged in audit trail
- User can have multiple employments (concurrent or sequential)
- Employment end date automatically revokes permissions

**Dependencies:**
Depends on: #6, #14

---

#### Story #16: View Employment History

**Description:**
As an organization admin, I want to view a user's employment history, so that I can understand their role changes over time.

**User Story:**
As an organization admin, I want to see all past and current employments for a user, so that I can track their career progression.

**Acceptance Criteria:**
- Employment history displayed in user detail page
- Shows: position, start date, end date, status
- Chronological list (most recent first)
- Current employment highlighted
- Historical employments preserved
- Employment history exportable

**Dependencies:**
Depends on: #15

---

### Feature Area: Permission Overrides

#### Story #17: Grant Permission Override

**Description:**
As an organization admin, I want to grant specific permission overrides to users, so that I can provide temporary or exceptional access.

**User Story:**
As an organization admin, I want to grant a user a specific permission they don't normally have, so that they can complete a special task.

**Acceptance Criteria:**
- Admin can grant permission override from user detail page
- Override can be: grant (add permission) or deny (remove permission)
- Override can be time-limited (expiration date)
- Override takes precedence over role permissions
- Override logged in audit trail
- Override can be revoked
- Override displayed in user permissions view

**Dependencies:**
Depends on: #6, #10

---

#### Story #18: View Effective Permissions

**Description:**
As an organization admin or user, I want to view a user's effective permissions, so that I can understand what access they have.

**User Story:**
As an organization admin, I want to see all permissions a user has, including from roles, employment, and overrides, so that I can verify their access level.

**Acceptance Criteria:**
- Effective permissions displayed in user detail page
- Shows permissions from: roles, employment position, overrides
- Indicates source of each permission
- Highlights overrides (granted or denied)
- Permissions grouped by resource
- Search/filter permissions
- Export permissions list

**Dependencies:**
Depends on: #12, #17

---

### Feature Area: Authorization Enforcement

#### Story #19: Enforce Permissions in Controllers

**Description:**
As a developer, I want to enforce permissions in controllers, so that unauthorized access is prevented at the API level.

**User Story:**
As a developer, I want to use authorization helpers in controllers, so that I can easily protect actions with permission checks.

**Acceptance Criteria:**
- Authorization helper: `authorize!(:students, :view)`
- Helper raises exception if permission denied
- Exception returns 403 Forbidden
- Authorization checks logged for audit
- Authorization checks cached for performance
- Before_action filters for common patterns
- Documentation and examples provided

**Dependencies:**
Depends on: #12

---

#### Story #20: Enforce Permissions in Views

**Description:**
As a developer, I want to conditionally show UI elements based on permissions, so that users only see features they can access.

**User Story:**
As a developer, I want view helpers to check permissions, so that I can show/hide buttons and links based on user access.

**Acceptance Criteria:**
- View helper: `can?(:students, :create)` returns boolean
- Helper used to conditionally render UI elements
- Helper works with Inertia.js components
- Helper cached for performance within request
- Helper respects permission overrides
- Documentation and examples provided

**Dependencies:**
Depends on: #12

---

#### Story #21: Audit Permission Changes

**Description:**
As a system, I want to audit all permission changes, so that we can track access modifications for security and compliance.

**User Story:**
As a system, I want to log all role assignments, permission grants, and employment changes, so that we maintain a security audit trail.

**Acceptance Criteria:**
- All permission changes logged: role assignment, permission override, employment creation/update
- Log includes: user affected, change type, changed by, timestamp, old value, new value
- Log entries immutable
- Log searchable and filterable
- Log exportable for compliance
- Log retention policy configurable
- Security alerts for sensitive permission changes

**Dependencies:**
Depends on: #11, #15, #17

---

