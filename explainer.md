# Server Infrastructure Explainer

## Overview
This document explains how the server infrastructure works, from Node.js to Express, and how PM2 manages our server processes.

## Core Technologies

### Node.js
- JavaScript runtime environment that executes code outside a web browser
- Allows us to run JavaScript on the server side
- Handles asynchronous operations efficiently
- Manages file system operations and network requests

### NPM (Node Package Manager)
- Package manager for Node.js
- Manages project dependencies
- Handles version control of packages
- Provides scripts for running applications
- Key files:
  - package.json: Project configuration and dependencies
  - package-lock.json: Exact versions of dependencies

### Express.js
- Web application framework for Node.js
- Handles routing
- Manages HTTP requests
- Serves static files
- Middleware support for:
  - Request processing
  - Response handling
  - Error management

### CORS (Cross-Origin Resource Sharing)
- Security feature that controls how web pages access resources from different domains
- Prevents unauthorized cross-origin access
- Configurable through middleware in Express
- Essential for APIs and modern web applications

### PM2 (Process Manager)
- Advanced process manager for Node.js applications
- Features:
  - Process management (start, stop, restart)
  - Load balancing
  - Log management
  - Process monitoring
  - Auto-restart on crashes
  - Startup script generation

#### How PM2 Works
1. Creates and manages server instances
2. Each project can have its own server.js file
3. Multiple servers can run simultaneously on different ports
4. Example:
   ```bash
   # Project 1 on port 3000
   pm2 start project1/server.js --name "project1"
   
   # Project 2 on port 3001
   pm2 start project2/server.js --name "project2"
   ```

## Server Flow
1. Node.js provides the runtime environment
2. Express creates the web server framework
3. PM2 manages the server process
4. Server.js defines:
   - Port number
   - Static file serving
   - Routes
   - Middleware
   - Error handling

## Common Commands
```bash
# Start a server
pm2 start server.js --name "project-name"

# View running servers
pm2 list

# Monitor server status
pm2 monit

# View logs
pm2 logs project-name

# Restart server
pm2 restart project-name
```

## Security Considerations
- CORS configuration
- Rate limiting
- Helmet.js for HTTP headers
- Environment variables for sensitive data
- SSL/TLS for HTTPS

## Best Practices
1. Use environment variables for configuration
2. Implement proper error handling
3. Set up logging
4. Use middleware for common tasks
5. Implement security measures
6. Monitor server health
7. Regular backups of data
8. Version control for server code

## Common Issues and Solutions
1. Port conflicts
   - Check running processes
   - Use different ports for different projects
   - Kill conflicting processes

2. Memory leaks
   - Monitor with PM2
   - Implement proper cleanup
   - Use memory monitoring tools

3. Process crashes
   - PM2 auto-restart
   - Proper error handling
   - Logging for debugging

## Development vs Production
### Development
- Nodemon for auto-reload
- Detailed error messages
- Development-specific middleware
- Local environment variables

### Production
- PM2 for process management
- Error logging only
- Production-optimized middleware
- Secure environment variables 