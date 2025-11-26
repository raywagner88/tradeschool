# Epic 0: Application Foundation

## Overview

This epic establishes the foundational infrastructure for the entire application. It sets up Rails with Inertia.js, Vue.js, and Nuxt UI, installs and configures essential gems (Devise, Pundit, Audited, Jbuilder), sets up js-routes, and creates the initial application layout structure using the Nuxt UI dashboard template.

This epic is mandatory to build first as it provides the technical foundation that all other epics depend upon.

## Key Features

- Rails 8.1+ application initialization
- Inertia.js integration with Vue adapter
- Vue 3 setup with Vite
- Nuxt UI component library integration
- Devise authentication setup
- Pundit authorization setup
- Audited audit logging
- Jbuilder JSON API responses
- js-routes for JavaScript route helpers
- Active Storage for file uploads (local storage)
- Bullet for N+1 query detection
- Letter Opener for email preview in development
- Annotate for model schema annotations
- Initial application layout with dashboard template

## Data Models

- `User` - Base user model with Devise authentication
- `ApplicationRecord` - Base model class with Audited

## User Roles

- **Developer** - Sets up and configures the application
- **System** - Automated setup processes

## Dependencies

- None (this is the foundational epic)

## Integration Points

- **All Future Epics**: All epics will build upon this foundation
- **Epic 1 (Product Admin Portal)**: Will use this layout and infrastructure
- **Epic 3 (RBAC)**: Will extend Devise/Pundit setup from this epic

## Status

**Mandatory - Build First (Before Epic 1)**

## Technical Notes

- Rails 8.1+ with PostgreSQL
- Inertia.js for seamless Rails-Vue integration
- Vue 3 with Composition API
- Nuxt UI for consistent component library
- Vite for fast development and building
- Devise for authentication
- Pundit for authorization policies
- Audited for comprehensive audit trails
- js-routes for type-safe route helpers in JavaScript
- Active Storage for file uploads and attachments (local disk storage initially)
- Bullet gem for detecting N+1 queries in development
- Letter Opener for previewing emails in development without sending
- Annotate gem for auto-generating schema comments in model files
- Minitest included by default with Rails (no additional setup needed)
- Dashboard template from: https://github.com/nuxt-ui-templates/dashboard-vue

## Stories

### Feature Area: Rails Application Setup

#### Story #1: Initialize Rails Application

**Description:**
As a developer, I want to initialize a new Rails 8.1+ application, so that I have the foundation for the trade school management system.

**User Story:**
As a developer, I want to create a new Rails application with PostgreSQL, Solid Queue, Solid Cache, and Solid Cable, so that the application has the necessary infrastructure.

**Acceptance Criteria:**
- Rails 8.1+ application created
- PostgreSQL configured as database
- Solid Queue configured for job processing
- Solid Cache configured for caching
- Solid Cable configured for real-time features
- Database connection tested and working
- Application starts successfully

**Dependencies:**
None

---

#### Story #2: Configure Application Settings

**Description:**
As a developer, I want to configure application settings, so that the application is properly configured for development and production.

**User Story:**
As a developer, I want to set up application configuration including timezone, locale, and asset settings, so that the application behaves correctly.

**Acceptance Criteria:**
- Application timezone configured
- Locale settings configured
- Asset pipeline configured (if needed)
- Environment variables setup
- Configuration files organized
- Settings documented

**Dependencies:**
Depends on: #1

---

### Feature Area: Inertia.js Integration

#### Story #3: Install Inertia.js Rails Gem

**Description:**
As a developer, I want to install the Inertia.js Rails gem, so that I can integrate Inertia.js with Rails.

**User Story:**
As a developer, I want to add the `inertia_rails` gem to the Gemfile and install it, so that Inertia.js is available in the application.

**Acceptance Criteria:**
- `inertia_rails` gem added to Gemfile
- Gem installed successfully
- Gem version compatible with Rails 8.1+
- Installation verified

**Dependencies:**
Depends on: #1

---

#### Story #4: Configure Inertia.js Middleware

**Description:**
As a developer, I want to configure Inertia.js middleware, so that Inertia.js requests are handled properly.

**User Story:**
As a developer, I want to set up Inertia.js middleware with proper configuration, so that server-side Inertia.js requests are processed correctly.

**Acceptance Criteria:**
- Inertia.js middleware configured
- Middleware added to Rails middleware stack
- Inertia.js version specified
- CSRF protection configured
- Middleware tested

**Dependencies:**
Depends on: #3

---

#### Story #5: Create Base Inertia Layout

**Description:**
As a developer, I want to create a base Inertia layout, so that Inertia.js pages have a consistent structure.

**User Story:**
As a developer, I want to create a base layout file that Inertia.js will use, so that all Inertia.js pages share common structure.

**Acceptance Criteria:**
- Base Inertia layout created
- Layout includes Inertia.js page component
- Layout configured in Inertia.js
- Layout tested with sample page

**Dependencies:**
Depends on: #4

---

### Feature Area: Vue.js Setup

#### Story #6: Install Vue 3

**Description:**
As a developer, I want to install Vue 3, so that I can build the frontend with Vue.

**User Story:**
As a developer, I want to add Vue 3 to the frontend dependencies, so that Vue is available for building components.

**Acceptance Criteria:**
- Vue 3 added to package.json
- Vue 3 installed via npm/pnpm/yarn
- Vue 3 version compatible with Inertia.js
- Installation verified

**Dependencies:**
Depends on: #3

---

#### Story #7: Configure Vite for Rails

**Description:**
As a developer, I want to configure Vite for Rails, so that frontend assets are built and served efficiently.

**User Story:**
As a developer, I want to set up Vite with Rails integration, so that I can use Vite for fast development and building.

**Acceptance Criteria:**
- Vite Rails gem installed
- Vite configuration file created
- Vite entry points configured
- Hot module replacement working
- Build process tested

**Dependencies:**
Depends on: #6

---

#### Story #8: Create Vue App Entry Point

**Description:**
As a developer, I want to create a Vue app entry point, so that the Vue application initializes properly.

**User Story:**
As a developer, I want to create the main Vue app file that initializes Vue and Inertia.js, so that the frontend application starts correctly.

**Acceptance Criteria:**
- Vue app entry point created (app.js or main.js)
- Inertia.js plugin registered
- Vue app mounted to DOM
- Entry point configured in Vite
- Application starts successfully

**Dependencies:**
Depends on: #7

---

#### Story #9: Set Up Hot Module Replacement

**Description:**
As a developer, I want to set up hot module replacement, so that frontend changes are reflected immediately during development.

**User Story:**
As a developer, I want to configure HMR so that when I change Vue components, the changes appear instantly without page refresh.

**Acceptance Criteria:**
- HMR configured in Vite
- HMR working for Vue components
- HMR working for CSS changes
- HMR tested and verified
- Development server restarts on config changes

**Dependencies:**
Depends on: #8

---

### Feature Area: Nuxt UI Integration

#### Story #10: Install Nuxt UI

**Description:**
As a developer, I want to install Nuxt UI, so that I can use Nuxt UI components in the application.

**User Story:**
As a developer, I want to add Nuxt UI to the frontend dependencies, so that I have access to the Nuxt UI component library.

**Acceptance Criteria:**
- Nuxt UI added to package.json
- Nuxt UI installed successfully
- Nuxt UI version compatible with Vue 3
- Installation verified

**Dependencies:**
Depends on: #6

---

#### Story #11: Integrate Dashboard Template

**Description:**
As a developer, I want to integrate the Nuxt UI dashboard template, so that I have a starting point for the application layout.

**User Story:**
As a developer, I want to copy and adapt the dashboard template from https://github.com/nuxt-ui-templates/dashboard-vue, so that I have a professional layout structure.

**Acceptance Criteria:**
- Dashboard template components copied
- Template adapted for Inertia.js
- Template structure organized in app/frontend
- Template components working
- Template styling applied

**Dependencies:**
Depends on: #10

---

#### Story #12: Configure Nuxt UI Theme

**Description:**
As a developer, I want to configure the Nuxt UI theme, so that the application has consistent styling.

**User Story:**
As a developer, I want to set up Nuxt UI theme configuration including colors, typography, and spacing, so that components look consistent.

**Acceptance Criteria:**
- Nuxt UI theme configuration created
- Theme colors configured
- Typography settings configured
- Spacing system configured
- Theme applied to components

**Dependencies:**
Depends on: #11

---

#### Story #13: Set Up Component Imports

**Description:**
As a developer, I want to set up component imports, so that Nuxt UI components are easily accessible.

**User Story:**
As a developer, I want to configure auto-imports or manual imports for Nuxt UI components, so that I can use components throughout the application.

**Acceptance Criteria:**
- Component import strategy decided (auto-import or manual)
- Import configuration set up
- Components accessible in Vue files
- Import system tested
- Documentation created

**Dependencies:**
Depends on: #12

---

### Feature Area: Devise Authentication

#### Story #14: Install Devise Gem

**Description:**
As a developer, I want to install the Devise gem, so that I can add authentication to the application.

**User Story:**
As a developer, I want to add the Devise gem to the Gemfile and install it, so that authentication functionality is available.

**Acceptance Criteria:**
- Devise gem added to Gemfile
- Gem installed successfully
- Gem version compatible with Rails 8.1+
- Installation verified

**Dependencies:**
Depends on: #1

---

#### Story #15: Generate User Model with Devise

**Description:**
As a developer, I want to generate a User model with Devise, so that users can authenticate.

**User Story:**
As a developer, I want to run Devise generators to create the User model with authentication features, so that users can sign up and sign in.

**Acceptance Criteria:**
- User model generated with Devise
- Devise modules configured (database_authenticatable, registerable, etc.)
- User migration created
- Migration run successfully
- User model tested

**Dependencies:**
Depends on: #14

---

#### Story #16: Configure Devise

**Description:**
As a developer, I want to configure Devise, so that authentication works correctly for the application.

**User Story:**
As a developer, I want to set up Devise configuration including routes, views, and mailer settings, so that authentication is properly configured.

**Acceptance Criteria:**
- Devise initializer configured
- Devise routes added
- Mailer configuration set up
- Password requirements configured
- Configuration tested

**Dependencies:**
Depends on: #15

---

#### Story #17: Create Authentication Views

**Description:**
As a developer, I want to create authentication views, so that users can sign in and sign up.

**User Story:**
As a developer, I want to create Inertia.js pages for login and registration using Nuxt UI components, so that users have a modern authentication interface.

**Acceptance Criteria:**
- Login page created with Inertia.js and Nuxt UI
- Registration page created
- Forms styled with Nuxt UI components
- Form validation implemented
- Authentication flow tested

**Dependencies:**
Depends on: #16, #13

---

### Feature Area: Pundit Authorization

#### Story #18: Install Pundit Gem

**Description:**
As a developer, I want to install the Pundit gem, so that I can add authorization to the application.

**User Story:**
As a developer, I want to add the Pundit gem to the Gemfile and install it, so that authorization functionality is available.

**Acceptance Criteria:**
- Pundit gem added to Gemfile
- Gem installed successfully
- Gem version compatible with Rails 8.1+
- Installation verified

**Dependencies:**
Depends on: #1

---

#### Story #19: Set Up Base Policy Class

**Description:**
As a developer, I want to set up a base policy class, so that authorization policies have a consistent structure.

**User Story:**
As a developer, I want to create an ApplicationPolicy class that other policies will inherit from, so that authorization logic is organized.

**Acceptance Criteria:**
- ApplicationPolicy class created
- Base policy methods defined
- Policy structure documented
- Policy class tested

**Dependencies:**
Depends on: #18

---

#### Story #20: Integrate Pundit with Controllers

**Description:**
As a developer, I want to integrate Pundit with controllers, so that authorization is enforced.

**User Story:**
As a developer, I want to add Pundit authorization to the ApplicationController, so that all controllers can use authorization.

**Acceptance Criteria:**
- Pundit included in ApplicationController
- Authorization helpers available
- Error handling configured
- Authorization tested in sample controller

**Dependencies:**
Depends on: #19

---

### Feature Area: Audited Audit Logging

#### Story #21: Install Audited Gem

**Description:**
As a developer, I want to install the Audited gem, so that I can track changes to models.

**User Story:**
As a developer, I want to add the Audited gem to the Gemfile and install it, so that audit logging functionality is available.

**Acceptance Criteria:**
- Audited gem added to Gemfile
- Gem installed successfully
- Gem version compatible with Rails 8.1+
- Installation verified

**Dependencies:**
Depends on: #1

---

#### Story #22: Configure Audited

**Description:**
As a developer, I want to configure Audited, so that audit logging works correctly.

**User Story:**
As a developer, I want to set up Audited configuration including audit table and settings, so that model changes are tracked.

**Acceptance Criteria:**
- Audited initializer configured
- Audit table migration created
- Migration run successfully
- Audited configured in ApplicationRecord
- Audit logging tested

**Dependencies:**
Depends on: #21

---

### Feature Area: Jbuilder JSON API

#### Story #23: Install Jbuilder Gem

**Description:**
As a developer, I want to install the Jbuilder gem, so that I can create JSON API responses.

**User Story:**
As a developer, I want to add the Jbuilder gem to the Gemfile and install it, so that JSON view templates are available.

**Acceptance Criteria:**
- Jbuilder gem added to Gemfile
- Gem installed successfully
- Gem version compatible with Rails 8.1+
- Installation verified

**Dependencies:**
Depends on: #1

---

#### Story #24: Set Up Jbuilder Structure

**Description:**
As a developer, I want to set up Jbuilder structure, so that JSON views are organized.

**User Story:**
As a developer, I want to create the Jbuilder views directory structure and a sample JSON view, so that JSON API responses can be created.

**Acceptance Criteria:**
- Jbuilder views directory created
- Sample JSON view created
- JSON view structure documented
- JSON response tested

**Dependencies:**
Depends on: #23

---

### Feature Area: js-routes Setup

#### Story #25: Install js-routes Gem

**Description:**
As a developer, I want to install the js-routes gem, so that I can use Rails routes in JavaScript.

**User Story:**
As a developer, I want to add the js-routes gem to the Gemfile and install it, so that JavaScript route helpers are available.

**Acceptance Criteria:**
- js-routes gem added to Gemfile
- Gem installed successfully
- Gem version compatible with Rails 8.1+
- Installation verified

**Dependencies:**
Depends on: #1

---

#### Story #26: Configure js-routes

**Description:**
As a developer, I want to configure js-routes, so that Rails routes are available in JavaScript.

**User Story:**
As a developer, I want to set up js-routes configuration and generate route helpers, so that I can use routes in Vue components.

**Acceptance Criteria:**
- js-routes initializer configured
- Route generation configured
- Routes generated successfully
- Routes accessible in JavaScript
- Route helpers tested

**Dependencies:**
Depends on: #25

---

#### Story #27: Integrate js-routes with Inertia.js

**Description:**
As a developer, I want to integrate js-routes with Inertia.js, so that route helpers work with Inertia.js navigation.

**User Story:**
As a developer, I want to set up js-routes to work with Inertia.js router, so that I can use route helpers for Inertia.js page navigation.

**Acceptance Criteria:**
- js-routes integrated with Inertia.js
- Route helpers work with Inertia.visit()
- Route helpers work with Inertia.link()
- Integration tested
- Documentation created

**Dependencies:**
Depends on: #26, #4

---

### Feature Area: Application Layout

#### Story #28: Create Base Layout Component

**Description:**
As a developer, I want to create a base layout component, so that all pages share a consistent structure.

**User Story:**
As a developer, I want to create a layout component using Nuxt UI dashboard template structure, so that pages have a consistent sidebar, header, and content area.

**Acceptance Criteria:**
- Base layout component created
- Layout includes sidebar navigation
- Layout includes header
- Layout includes main content area
- Layout responsive
- Layout tested

**Dependencies:**
Depends on: #11, #13

---

#### Story #29: Create Sidebar Navigation

**Description:**
As a developer, I want to create sidebar navigation, so that users can navigate the application.

**User Story:**
As a developer, I want to create a sidebar component with navigation items using Nuxt UI components, so that navigation is consistent and accessible.

**Acceptance Criteria:**
- Sidebar component created
- Navigation items configured
- Active route highlighting
- Collapsible sidebar (mobile)
- Navigation tested

**Dependencies:**
Depends on: #28, #27

---

#### Story #30: Create Header Component

**Description:**
As a developer, I want to create a header component, so that users have access to common actions.

**User Story:**
As a developer, I want to create a header component with user menu, notifications, and search using Nuxt UI components, so that users have quick access to features.

**Acceptance Criteria:**
- Header component created
- User menu dropdown
- Notifications area (placeholder)
- Search functionality (placeholder)
- Header responsive
- Header tested

**Dependencies:**
Depends on: #28, #13

---

### Feature Area: Active Storage

#### Story #31: Install Active Storage

**Description:**
As a developer, I want to install Active Storage, so that the application can handle file uploads.

**User Story:**
As a developer, I want to set up Active Storage for file uploads and attachments, so that documents, images, and other files can be stored.

**Acceptance Criteria:**
- Active Storage installed (included with Rails)
- Active Storage migrations run
- Active Storage tables created (active_storage_blobs, active_storage_attachments)
- Active Storage configured for local disk storage
- Storage configuration tested

**Dependencies:**
Depends on: #1

---

#### Story #32: Configure Active Storage for Local Storage

**Description:**
As a developer, I want to configure Active Storage to use local disk storage, so that files are stored locally during development.

**User Story:**
As a developer, I want to configure Active Storage to store files on the local filesystem, so that file uploads work without external services.

**Acceptance Criteria:**
- Active Storage configured for local disk storage
- Storage paths configured (development, test, production)
- File size limits configured
- Allowed file types configured
- Storage configuration documented
- File upload tested

**Dependencies:**
Depends on: #29

---

### Feature Area: Development Environment

#### Story #33: Install Bullet Gem

**Description:**
As a developer, I want to install the Bullet gem, so that I can detect N+1 queries during development.

**User Story:**
As a developer, I want to add the Bullet gem to detect N+1 query problems, so that I can optimize database queries early.

**Acceptance Criteria:**
- Bullet gem added to Gemfile (development/test group)
- Gem installed successfully
- Bullet configured in development environment
- Bullet alerts displayed in browser or console
- Bullet tested with sample N+1 query

**Dependencies:**
Depends on: #1

---

#### Story #34: Install Letter Opener

**Description:**
As a developer, I want to install Letter Opener, so that I can preview emails during development.

**User Story:**
As a developer, I want to use Letter Opener to preview emails in the browser, so that I can test email functionality without sending actual emails.

**Acceptance Criteria:**
- Letter Opener gem added to Gemfile (development group)
- Gem installed successfully
- Letter Opener configured in development environment
- Emails open in browser automatically
- Email preview tested

**Dependencies:**
Depends on: #1

---

#### Story #35: Install Annotate Gem

**Description:**
As a developer, I want to install the Annotate gem, so that model files include schema information.

**User Story:**
As a developer, I want to use Annotate to automatically add schema comments to model files, so that I can see table structure in models.

**Acceptance Criteria:**
- Annotate gem added to Gemfile (development group)
- Gem installed successfully
- Annotate configured
- Schema annotations added to models
- Annotate task runs after migrations
- Annotations tested

**Dependencies:**
Depends on: #1

---

#### Story #36: Configure Development Tools

**Description:**
As a developer, I want to configure development tools, so that development is efficient.

**User Story:**
As a developer, I want to set up development tools including linters, formatters, and debugging tools, so that code quality is maintained.

**Acceptance Criteria:**
- ESLint configured for JavaScript/Vue
- Prettier configured (if used)
- RuboCop configured for Ruby
- Debugging tools set up
- Development tools documented

**Dependencies:**
Depends on: #1

---

#### Story #37: Set Up Environment Variables

**Description:**
As a developer, I want to set up environment variables, so that configuration is managed properly.

**User Story:**
As a developer, I want to configure environment variables for different environments, so that sensitive data and configuration are managed securely.

**Acceptance Criteria:**
- Environment variable management set up (dotenv or similar)
- Example .env file created
- Environment variables documented
- .env.example file created
- Environment variables tested

**Dependencies:**
Depends on: #1

---

### Feature Area: Initial Pages

#### Story #38: Create Home Page

**Description:**
As a developer, I want to create a home page, so that the application has a landing page.

**User Story:**
As a developer, I want to create a home page using Inertia.js and Nuxt UI components, so that I can verify the setup is working correctly.

**Acceptance Criteria:**
- Home controller created
- Home route configured
- Home page Vue component created
- Page uses Nuxt UI components
- Page displays correctly
- Page tested

**Dependencies:**
Depends on: #28, #13

---

#### Story #39: Verify Complete Setup

**Description:**
As a developer, I want to verify the complete setup, so that all components are working together.

**User Story:**
As a developer, I want to test that Rails, Inertia.js, Vue, Nuxt UI, Devise, Pundit, Audited, Jbuilder, js-routes, Active Storage, Bullet, Letter Opener, and Annotate are all working together, so that the foundation is solid.

**Acceptance Criteria:**
- All components tested
- Integration points verified
- No errors in console
- Application starts successfully
- Basic functionality works
- File upload tested (Active Storage)
- N+1 detection tested (Bullet)
- Email preview tested (Letter Opener)
- Model annotations verified (Annotate)
- Setup documented

**Dependencies:**
Depends on: #38, #17, #20, #22, #24, #27, #32, #33, #34, #35

---

