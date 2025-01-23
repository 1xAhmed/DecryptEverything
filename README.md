# DecryptEverything


# Decryption Guide


## Prerequisites

### Software Requirements
- Node.js (version 12 or higher)
- npm (Node Package Manager, usually comes with Node.js)

### Installation Steps
1. **Download Node.js**
   ```bash
   # Check Node.js version
   node --version
   
   # If not installed, download from https://nodejs.org
   # Choose LTS (Long Term Support) version
   ```

2. **Install Required Packages**
   ```bash
   # Open terminal/command prompt
   npm install crypto-js zlib
   ```

## Decryption Script Setup

### Prepare the Script
- Save the provided script as `decrypt.js`
- Replace the placeholder password with your actual password

### Running the Decryption
```bash
node decrypt.js
```

## Common Errors and Solutions

### 1. Package Not Found Errors
- **Error**: `Cannot find module 'crypto-js'`
- **Solution**: 
  ```bash
  npm install crypto-js
  npm install zlib
  ```

### 2. Incorrect Password
- **Symptom**: Empty or garbled output
- **Solution**: 
  - Verify password exactly as provided
  - Check for hidden spaces or typos
  - Confirm password case sensitivity

### 3. Node.js Not Recognized
- **Solution**:
  - Reinstall Node.js
  - Add Node.js to system PATH
  - Restart computer after installation

### 4. Decryption Failure
- Check:
  - Correct script version
  - Unaltered encrypted data
  - Matching encryption method

## Security Notes
- Delete script after use
- Never share decryption password
- Securely store decrypted data

## Troubleshooting
- If persistent issues occur, contact original file provider
- Provide exact error message when seeking help

# Windows Decryption Guide

## Prerequisites

### 1. Download Node.js
- Visit [nodejs.org](https://nodejs.org)
- Download Windows Installer (.msi)
- Run installer
- **Important Checkboxes:**
  - ✅ Automatically install necessary tools
  - ✅ Add to PATH

### 2. Verify Installation
- Open Command Prompt
- Run:
  ```cmd
  node --version
  npm --version
  ```

## Decryption Setup

### Prepare Environment
1. Create Project Folder
   ```cmd
   mkdir DecryptionProject
   cd DecryptionProject
   ```

2. Initialize Project
   ```cmd
   npm init -y
   npm install crypto-js
   ```

3. Create Decrypt Script
   - Open Notepad
   - Paste provided decryption script
   - Save as `decrypt.js` in project folder
   - **Ensure password is correct**

### Run Decryption
```cmd
node decrypt.js
```

## Troubleshooting

### Common Windows Issues
- **Path Not Working:**
  ```cmd
  # Manually add Node.js to PATH
  set PATH=%PATH%;C:\Program Files\nodejs\
  ```

- **Permission Errors:**
  - Run Command Prompt as Administrator
  - Right-click Command Prompt
  - Select "Run as Administrator"

### Error Handling
- **No Module Error:**
  ```cmd
  npm install crypto-js
  npm install zlib
  ```

## Security Reminders
- Delete script after use
- Protect decrypted data
- Use strong, unique passwords

## Quick Troubleshoot Checklist
✓ Node.js installed
✓ Packages installed
✓ Correct password
✓ No extra spaces
✓ Script in correct folder
