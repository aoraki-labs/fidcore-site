# FidCore Website

Official website for FidCore, built with Next.js as a modern responsive web application.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Using Claude Code to Modify the Project](#using-claude-code-to-modify-the-project)
- [Project Structure](#project-structure)
- [Available Commands](#available-commands)
- [Deployment](#deployment)
- [FAQ](#faq)

---

## Project Overview

This is the official website for FidCore, featuring a landing page with sections including hero, team introduction, solutions, tech stack showcase, and more.

## Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| Next.js | 14.1.0 | React full-stack framework |
| React | 18.2.0 | UI library |
| TypeScript | 5.3.3 | Type-safe JavaScript |
| Tailwind CSS | 3.4.1 | Utility-first CSS framework |
| Framer Motion | 11.0.0 | Animation library |

---

## Prerequisites

Before you begin, make sure you have the following software installed on your computer:

### 1. Install Node.js

1. Visit the [Node.js official website](https://nodejs.org/)
2. Download the **LTS version** (recommended 18.x or higher)
3. Run the installer and follow the prompts
4. Open your terminal and verify the installation:
   ```bash
   node --version   # Should display v18.x.x or higher
   npm --version    # Should display 9.x.x or higher
   ```

### 2. Install Git

1. Visit the [Git official website](https://git-scm.com/)
2. Download and install
3. Verify the installation:
   ```bash
   git --version    # Should display git version 2.x.x
   ```

### 3. Install Claude Code (Optional, for AI-assisted development)

```bash
npm install -g @anthropic-ai/claude-code
```

After installation, run `claude` in the project directory to start AI-assisted development.

---

## Getting Started

### Step 1: Clone the Repository

```bash
# Clone the repository to your local machine
git clone <your-repository-url>

# Navigate to the project directory
cd fidcore-site
```

### Step 2: Install Dependencies

```bash
npm install
```

> This command installs all required dependencies based on the `package.json` file. It may take a few minutes.

### Step 3: Start the Development Server

```bash
npm run dev
```

Once started successfully, open your browser and visit http://localhost:3000 to see the website.

> In development mode, the page will automatically refresh when you modify the code.

---

## Development Workflow

> **IMPORTANT: Never make changes directly on the production server. Always develop and test locally first, then deploy to production.**

### Environment Overview

| Environment | Purpose | URL | When to Use |
|-------------|---------|-----|-------------|
| **Development** | Local development and coding | http://localhost:3000 | Writing and modifying code |
| **Production** | Live website for end users | Your production server | After testing is complete |

### Recommended Workflow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Development   │────>│     Testing     │────>│   Production    │
│   (localhost)   │     │   (localhost)   │     │    (server)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

#### Step 1: Develop Locally

1. Make sure you are working on your **local machine**, not the production server
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Make your code changes
4. Preview changes at http://localhost:3000

#### Step 2: Test Your Changes

Before deploying to production, always verify:

1. **Build test** - Ensure the project builds without errors:
   ```bash
   npm run build
   ```

2. **Production preview** - Test the production build locally:
   ```bash
   npm run build && npm run start
   ```
   Visit http://localhost:3000 to verify everything works correctly.

3. **Code quality check**:
   ```bash
   npm run lint
   ```

#### Step 3: Commit Your Changes

Once testing is complete:

```bash
git add <files>
git commit -m "Your commit message"
git push origin main
```

#### Step 4: Deploy to Production

See the [Deployment](#deployment) section below.

### Best Practices

- **Never edit code directly on the production server**
- **Always test locally before deploying**
- **Create a backup before major updates on production**
- **Use Git branches for new features** (e.g., `git checkout -b feature/new-feature`)

---

## Using Claude Code to Modify the Project

Claude Code is an AI programming assistant that helps you quickly modify code.

### Starting Claude Code

Open a terminal in the project root directory and run:

```bash
claude
```

### Example Prompts

Here are some prompts you can use directly:

#### Modify Text Content
```
Change the homepage title to "Welcome to FidCore"
```

#### Modify Styles
```
Change the navbar background color to dark blue
```

#### Add New Features
```
Add a "Back to Top" button at the bottom of the page
```

#### Modify Components
```
Update the Hero component to add a subtitle
```

#### View Files
```
Show the contents of src/components/Hero.tsx
```

### Recommended Workflow with Claude Code

1. **Describe what you want to change** - Clearly explain your requirements
2. **Review the proposed changes** - Claude will explain what it plans to do
3. **Preview the results** - Check the changes in your browser (localhost:3000)
4. **Test the build** - Run `npm run build` to ensure no errors
5. **Commit your code** - Once satisfied, ask Claude to commit

Example for committing code:
```
Commit these changes with the message "Update homepage title"
```

---

## Project Structure

```
fidcore-site/
├── public/                 # Static assets directory
│   └── images/            # Image files
├── src/                   # Source code directory
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Global layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Solutions.tsx # Solutions section
│   │   ├── Team.tsx      # Team introduction
│   │   ├── TechStack.tsx # Tech stack showcase
│   │   ├── SocialProof.tsx # Customer testimonials
│   │   └── Footer.tsx    # Footer
│   └── lib/              # Utility functions
│       └── utils.ts      # Common utilities
├── package.json          # Project configuration and dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation (this file)
```

### Key Files Explained

| File | Purpose | When to Modify |
|------|---------|----------------|
| `src/app/page.tsx` | Homepage entry | Adjust component order on the page |
| `src/components/*.tsx` | Page components | Modify specific content or styles |
| `public/images/` | Image assets | Replace or add images |
| `tailwind.config.ts` | Theme configuration | Modify colors, fonts, and global styles |

---

## Available Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm run dev` | Start development server | During development |
| `npm run build` | Build for production | Before deployment |
| `npm run start` | Start production server | On production server |
| `npm run lint` | Run code linting | Before committing |

---

## Deployment

### Option 1: Deploy to Production Server (Recommended)

This is the primary deployment method. Deploy to your production server after local testing is complete.

#### Prerequisites

- SSH access to the production server
- Node.js installed on the production server
- PM2 installed for process management

#### Deployment Steps

##### First-time Setup on Production Server

1. **SSH into the production server**:
   ```bash
   ssh user@your-production-server
   ```

2. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd fidcore-site
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Build the project**:
   ```bash
   npm run build
   ```

5. **Start with PM2**:
   ```bash
   # Install PM2 if not already installed
   npm install -g pm2

   # Start the application
   pm2 start npm --name "fidcore-site" -- start

   # Save PM2 configuration
   pm2 save

   # Set up auto-start on server reboot
   pm2 startup
   ```

##### Subsequent Deployments

1. **SSH into the production server**:
   ```bash
   ssh user@your-production-server
   ```

2. **Navigate to project directory**:
   ```bash
   cd fidcore-site
   ```

3. **Pull the latest code**:
   ```bash
   git pull origin main
   ```

4. **Install any new dependencies**:
   ```bash
   npm install
   ```

5. **Rebuild the project**:
   ```bash
   npm run build
   ```

6. **Restart the application**:
   ```bash
   pm2 restart fidcore-site
   ```

##### Quick Deploy Script (Optional)

You can create a deploy script on the production server:

```bash
# Create deploy.sh in the project root on production server
#!/bin/bash
echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Restarting application..."
pm2 restart fidcore-site

echo "Deployment complete!"
```

Make it executable and run:
```bash
chmod +x deploy.sh
./deploy.sh
```

##### Useful PM2 Commands

| Command | Description |
|---------|-------------|
| `pm2 status` | Check application status |
| `pm2 logs fidcore-site` | View application logs |
| `pm2 restart fidcore-site` | Restart the application |
| `pm2 stop fidcore-site` | Stop the application |
| `pm2 delete fidcore-site` | Remove from PM2 |

### Option 2: Vercel Deployment (Alternative)

Use this option if you prefer automated deployments or don't have a dedicated production server.

1. Visit [Vercel](https://vercel.com/) and create an account
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Wait for deployment to complete and get your live URL

> Vercel automatically monitors your GitHub repository and redeploys whenever you push new code.

---

## FAQ

### Q: What should I do if `npm install` fails?

**A:** Try the following steps:
```bash
# Clear cache
npm cache clean --force

# Delete installed dependencies
rm -rf node_modules
rm package-lock.json

# Reinstall
npm install
```

### Q: What if port 3000 is already in use?

**A:** Start with a different port:
```bash
npm run dev -- -p 3001
```

### Q: How do I change the website's color theme?

**A:** Edit the `theme.extend.colors` section in the `tailwind.config.ts` file.

### Q: Where should I put images?

**A:** Place them in the `public/images/` directory, then reference them in code using `/images/xxx.png`.

### Q: How do I add a new page?

**A:** Create a new folder in the `src/app/` directory, for example `src/app/about/page.tsx`, and it will be accessible at `/about`.

### Q: How do I check if my changes broke anything?

**A:** Always run these commands before deploying:
```bash
npm run lint    # Check for code issues
npm run build   # Verify production build works
```

### Q: What if the production server shows an old version?

**A:** Make sure you:
1. Pushed your changes to GitHub (`git push`)
2. Pulled the changes on production server (`git pull`)
3. Rebuilt the project (`npm run build`)
4. Restarted PM2 (`pm2 restart fidcore-site`)

---

## Contributing

1. Create a new branch for development
2. Develop and test locally
3. Ensure `npm run lint` and `npm run build` pass
4. Write clear commit messages
5. Push and create a Pull Request for code review
6. After approval, merge and deploy to production

---

## Contact

If you have any questions, please contact the technical team.

---

*Last updated: January 2025*
