# Epic 6: Programs, Courses/Modules & Curriculum

## Overview

Defines what schools teach: programs, required modules, competencies/skills, and hour requirements. Supports versions and time-based changes. Sets the academic structure which Scheduling, Academics, SAP, and Financial Aid depend on.

This epic establishes the academic foundation of the system, defining what students learn and how progress is measured.

## Key Features

- Program definition and management
- Module/course structure
- Competency and skill definitions
- Clock-hour requirements
- Curriculum versioning
- Prerequisites and dependencies
- Learning objectives
- Program catalog management

## Data Models

- `Program` - Academic programs
- `ProgramVersion` - Versioned program definitions
- `Module` - Course modules within programs
- `Competency` - Skills and competencies
- `ModuleCompetency` - Competencies required per module
- `ProgramRequirement` - Hour requirements and prerequisites
- `LearningObjective` - Learning outcomes
- `ProgramCatalog` - Published program information

## User Roles

- **Organization Admin** - Create and manage programs
- **Registrar** - View and assign programs to students
- **Instructor** - View program curriculum for teaching
- **Student** - View program requirements (future)

## Dependencies

- **Epic 2 (Multi-Tenancy)**: Programs scoped to organization
- **Epic 3 (RBAC)**: Permission checks

## Integration Points

- **Admissions (Epic 5)**: Program selection during application
- **Scheduling (Epic 7)**: Modules scheduled as classes
- **Academics (Epic 9)**: Competencies assessed and tracked
- **SAP (Epic 10)**: Hour requirements for SAP calculation
- **Finance (Epic 11)**: Program-based tuition charges

## Status

**Mandatory - Academic Structure**

## Technical Notes

- Support program versioning for curriculum changes over time
- Competencies can be shared across modules
- Hour requirements tracked at program and module levels
- Curriculum changes must maintain backward compatibility
- Program catalog for public viewing (future)

## Stories

### Feature Area: Program Management

#### Story #1: Create Program

**Description:**
As an organization admin, I want to create a new program, so that we can define what we teach.

**User Story:**
As an organization admin, I want to create a program with name, description, duration, and hour requirements, so that students can enroll in structured programs.

**Acceptance Criteria:**
- Program creation form: name, description, program code, duration (weeks/months), total clock hours, credential type
- Program assigned unique code within organization
- Program created in "draft" status
- Program scoped to organization
- Program can be published when complete
- Creation logged in audit trail

**Dependencies:**
Depends on: Epic 2, Epic 3

---

#### Story #2: View Program List

**Description:**
As a staff member, I want to view a list of programs, so that I can see what programs are available.

**User Story:**
As a registrar, I want to see all programs with their status and requirements, so that I can help students select programs.

**Acceptance Criteria:**
- List displays: name, code, status, duration, total hours, credential type
- Search by name or code
- Filter by: status, credential type, duration
- Sortable columns
- Pagination
- Click program to view details
- Only active/published programs shown (unless admin)

**Dependencies:**
Depends on: #1

---

#### Story #3: View Program Details

**Description:**
As a staff member, I want to view comprehensive program information, so that I can understand program requirements and structure.

**User Story:**
As an instructor, I want to see program details including modules, competencies, and hour requirements, so that I can understand what I'm teaching.

**Acceptance Criteria:**
- Detail page shows: basic info, modules, competencies, hour requirements, prerequisites, learning objectives
- Display current version and version history
- Show enrollment statistics (if available)
- Display program catalog information
- Links to related records (cohorts, students, schedules)
- Edit program button (if user has permission)

**Dependencies:**
Depends on: #2

---

#### Story #4: Update Program Information

**Description:**
As an organization admin, I want to update program information, so that program details remain current.

**User Story:**
As an organization admin, I want to edit program name, description, and requirements, so that program information is accurate.

**Acceptance Criteria:**
- Edit form for: name, description, duration, hour requirements
- Changes logged in audit trail
- Changes create new version if program is published
- Version history maintained
- Changes take effect based on versioning rules
- Confirmation message on save

**Dependencies:**
Depends on: #3

---

#### Story #5: Publish Program

**Description:**
As an organization admin, I want to publish programs, so that they become available for enrollment.

**User Story:**
As an organization admin, I want to publish a program when it's complete, so that students can enroll and staff can schedule classes.

**Acceptance Criteria:**
- Publish button in program detail (if draft)
- Validation: all required modules defined, hour requirements set
- Program status changes to "published"
- Published programs visible to staff and students
- Published programs can be enrolled
- Program version locked when published
- Publish date recorded

**Dependencies:**
Depends on: #3, Story #6

---

### Feature Area: Module Management

#### Story #6: Create Module

**Description:**
As an organization admin, I want to create modules within programs, so that I can structure the curriculum.

**User Story:**
As an organization admin, I want to create a module with name, description, and hour requirements, so that programs have structured learning units.

**Acceptance Criteria:**
- Module creation form: name, code, description, clock hours, sequence number
- Module assigned to program
- Module code unique within program
- Sequence number determines order
- Module created in "draft" status
- Module can have prerequisites (other modules)
- Creation logged

**Dependencies:**
Depends on: #1

---

#### Story #7: View Module List

**Description:**
As a staff member, I want to view modules for a program, so that I can see the curriculum structure.

**User Story:**
As an instructor, I want to see all modules in a program with their sequence and requirements, so that I understand the curriculum flow.

**Acceptance Criteria:**
- Module list in program detail page
- Modules displayed in sequence order
- Shows: name, code, hours, prerequisites
- Modules can be reordered (if admin)
- Click module to view details
- Filter by status (if admin)

**Dependencies:**
Depends on: #6

---

#### Story #8: Update Module

**Description:**
As an organization admin, I want to update module information, so that curriculum remains current.

**User Story:**
As an organization admin, I want to edit module details including hours and prerequisites, so that curriculum is accurate.

**Acceptance Criteria:**
- Edit form for: name, description, hours, prerequisites, sequence
- Prerequisites validated (cannot create circular dependencies)
- Changes logged
- Changes create new version if program is published
- Sequence changes update module order
- Confirmation message on save

**Dependencies:**
Depends on: #7

---

#### Story #9: Define Module Prerequisites

**Description:**
As an organization admin, I want to define module prerequisites, so that students complete modules in the correct order.

**User Story:**
As an organization admin, I want to set which modules must be completed before a module can be started, so that learning progression is enforced.

**Acceptance Criteria:**
- Prerequisite selection interface
- Select one or more modules as prerequisites
- Prerequisites validated (no circular dependencies)
- Prerequisites displayed in module detail
- Prerequisites enforced during enrollment/scheduling
- Prerequisites can be updated

**Dependencies:**
Depends on: #8

---

### Feature Area: Competency Management

#### Story #10: Create Competency

**Description:**
As an organization admin, I want to create competencies, so that I can define the skills students must master.

**User Story:**
As an organization admin, I want to create a competency with name, description, and assessment criteria, so that we can track skill mastery.

**Acceptance Criteria:**
- Competency creation form: name, code, description, assessment criteria, category
- Competency code unique within organization
- Competency can be shared across modules
- Competency can have levels (beginner, intermediate, advanced)
- Competency created in "draft" status
- Creation logged

**Dependencies:**
Depends on: Epic 2

---

#### Story #11: Assign Competencies to Modules

**Description:**
As an organization admin, I want to assign competencies to modules, so that I can track which skills are taught in each module.

**User Story:**
As an organization admin, I want to link competencies to modules, so that we can assess skill mastery as students progress.

**Acceptance Criteria:**
- Competency assignment interface in module detail
- Select competencies from library or create new
- Competency can be required or optional
- Competency can have minimum passing level
- Competencies displayed in module detail
- Competencies can be removed from module
- Assignment logged

**Dependencies:**
Depends on: #6, #10

---

#### Story #12: View Competency Library

**Description:**
As an organization admin, I want to view all competencies, so that I can manage the competency catalog.

**User Story:**
As an organization admin, I want to see all competencies with their usage across modules, so that I can maintain a consistent competency framework.

**Acceptance Criteria:**
- Competency library list: name, code, category, used in modules count
- Search by name or code
- Filter by category
- Sortable columns
- Click competency to view details
- Shows which modules use the competency
- Competencies can be archived

**Dependencies:**
Depends on: #10

---

### Feature Area: Hour Requirements

#### Story #13: Set Program Hour Requirements

**Description:**
As an organization admin, I want to set total clock-hour requirements for programs, so that we can track student progress.

**User Story:**
As an organization admin, I want to define total clock hours required for program completion, so that students know how many hours they need.

**Acceptance Criteria:**
- Hour requirement field in program form
- Total hours required for completion
- Hours can be broken down by module
- Hour requirements validated (sum of module hours = total)
- Hour requirements displayed in program detail
- Hour requirements used for SAP calculation
- Hour requirements can be updated

**Dependencies:**
Depends on: #1

---

#### Story #14: Set Module Hour Requirements

**Description:**
As an organization admin, I want to set clock-hour requirements for modules, so that we can track time spent on each module.

**User Story:**
As an organization admin, I want to define clock hours for each module, so that scheduling and attendance tracking are accurate.

**Acceptance Criteria:**
- Hour requirement field in module form
- Clock hours required for module completion
- Hours can be: lecture, lab, clinical, total
- Hour breakdowns displayed in module detail
- Hour requirements used for scheduling
- Hour requirements used for attendance tracking
- Hour requirements can be updated

**Dependencies:**
Depends on: #6

---

#### Story #15: Validate Hour Requirements

**Description:**
As a system, I want to validate that module hours sum to program total, so that hour requirements are consistent.

**User Story:**
As a system, I want to check that the sum of module hours equals the program total hours, so that there are no discrepancies.

**Acceptance Criteria:**
- Validation runs when: program saved, module hours updated
- Validation calculates sum of module hours
- Validation compares to program total hours
- Warning displayed if mismatch
- Validation can be overridden (with reason)
- Validation logged

**Dependencies:**
Depends on: #13, #14

---

### Feature Area: Program Versioning

#### Story #16: Create Program Version

**Description:**
As a system, I want to create new program versions when curriculum changes, so that historical data is preserved.

**User Story:**
As an organization admin, I want to create a new version of a program when making curriculum changes, so that students already enrolled aren't affected.

**Acceptance Criteria:**
- Version creation triggered when published program is edited
- New version created with incremented version number
- Old version preserved and locked
- Students enrolled in old version continue with that version
- New enrollments can use new version
- Version history displayed in program detail
- Version comparison view (future)

**Dependencies:**
Depends on: #4

---

#### Story #17: Manage Program Versions

**Description:**
As an organization admin, I want to manage program versions, so that I can control which version is active for new enrollments.

**User Story:**
As an organization admin, I want to set which program version is active for new enrollments, so that new students get the updated curriculum.

**Acceptance Criteria:**
- Version management interface
- Set active version for new enrollments
- Multiple versions can be active (for different cohorts)
- Version status displayed: active, archived, deprecated
- Version can be archived when no longer used
- Version statistics (enrollment count per version)

**Dependencies:**
Depends on: #16

---

#### Story #18: View Version History

**Description:**
As a staff member, I want to view program version history, so that I can see how curriculum has changed over time.

**User Story:**
As a registrar, I want to see all versions of a program and what changed between versions, so that I can understand curriculum evolution.

**Acceptance Criteria:**
- Version history displayed in program detail
- Shows: version number, created date, changes summary, active status
- Click version to view details
- Version comparison (what changed)
- Version history exportable

**Dependencies:**
Depends on: #17

---

### Feature Area: Learning Objectives

#### Story #19: Define Learning Objectives

**Description:**
As an organization admin, I want to define learning objectives for programs and modules, so that we can measure educational outcomes.

**User Story:**
As an organization admin, I want to create learning objectives that describe what students will learn, so that we can assess program effectiveness.

**Acceptance Criteria:**
- Learning objective form: description, category, level (program or module)
- Objectives can be program-level or module-level
- Objectives can be linked to competencies
- Objectives displayed in program/module detail
- Objectives can be updated or removed
- Objectives used for assessment (future)

**Dependencies:**
Depends on: #1, #6

---

### Feature Area: Program Catalog

#### Story #20: Publish Program to Catalog

**Description:**
As an organization admin, I want to publish programs to a public catalog, so that prospective students can view program information.

**User Story:**
As an organization admin, I want to make program information publicly visible, so that prospective students can learn about our programs.

**Acceptance Criteria:**
- Publish to catalog option in program settings
- Catalog information: name, description, duration, credential, cost, requirements
- Catalog programs visible on public website (future)
- Catalog information can be customized
- Catalog programs can be unpublished
- Catalog version separate from internal program version

**Dependencies:**
Depends on: #5

---

