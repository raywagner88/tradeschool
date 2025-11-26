# Configuration Documentation

This directory contains all application configuration files. This document explains the purpose and structure of each configuration file.

## Application Configuration

### `application.rb`
Main application configuration file. Contains:
- **Timezone**: Configured via `TIME_ZONE` environment variable (defaults to UTC)
- **Locale**: Default locale is English (`:en`), with support for additional locales
- **Autoload paths**: Configured for Rails 8.1 defaults
- **Asset pipeline**: Uses Propshaft (Rails 8.1 default)

### Environment-Specific Configuration

#### `environments/development.rb`
Development environment settings:
- Hot reloading enabled
- Verbose query logs
- Solid Cache and Solid Queue configured
- Active Storage uses local disk storage
- Letter Opener for email preview (when configured)

#### `environments/production.rb`
Production environment settings:
- Eager loading enabled
- Solid Cache and Solid Queue configured
- Logging to STDOUT
- SSL configuration options
- Performance optimizations

#### `environments/test.rb`
Test environment settings:
- Test-specific configurations
- Fast test execution settings

## Database Configuration

### `database.yml`
PostgreSQL database configuration:
- **Development**: `program_management_development`
- **Test**: `program_management_test`
- **Production**: Multi-database setup with separate databases for:
  - Primary database
  - Cache database (`program_management_production_cache`)
  - Queue database (`program_management_production_queue`)
  - Cable database (`program_management_production_cable`)

## Caching & Queues

### `cache.yml`
Solid Cache configuration:
- Development: In-memory cache with size limits
- Production: Database-backed cache

### `queue.yml`
Solid Queue configuration:
- Worker threads and processes
- Queue polling intervals
- Batch sizes

### `cable.yml`
Action Cable / Solid Cable configuration:
- Development: Async adapter
- Test: Test adapter
- Production: Solid Cable with database backend

## Storage

### `storage.yml`
Active Storage configuration:
- **Local**: File system storage (development/test)
- **Production**: Can be configured for cloud storage (S3, etc.)

## Internationalization

### `locales/en.yml`
English locale file. Add additional locale files as needed:
- `locales/es.yml` for Spanish
- `locales/fr.yml` for French
- etc.

## Environment Variables

### `.env` (not in version control)
Local environment variables. Copy from `.env.example` and customize.

### `.env.example`
Template for environment variables. Includes:
- `TIME_ZONE`: Application timezone
- `RAILS_ENV`: Rails environment
- `DATABASE_URL`: Database connection string (optional)
- Mailer configuration (for production)

## Routes

### `routes.rb`
Application routes configuration. Defines all HTTP endpoints.

## Initializers

### `initializers/`
Directory containing initialization scripts that run on application boot:
- `assets.rb`: Asset pipeline configuration
- `content_security_policy.rb`: CSP headers
- `filter_parameter_logging.rb`: Filter sensitive parameters from logs
- `inflections.rb`: Custom pluralization rules

## Best Practices

1. **Never commit sensitive data**: Use environment variables or Rails credentials
2. **Use `.env.example`**: Document all required environment variables
3. **Environment-specific configs**: Keep environment-specific settings in their respective files
4. **Documentation**: Update this README when adding new configuration

## Configuration Loading Order

1. `config/application.rb` - Base configuration
2. `config/environments/[environment].rb` - Environment-specific overrides
3. `config/initializers/*.rb` - Initialization scripts
4. `.env` file - Environment variables (development/test only)

