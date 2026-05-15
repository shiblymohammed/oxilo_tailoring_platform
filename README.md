# 🧵 Oxilo — Tailor Shop Management Platform

> **Production-ready monorepo** built with Next.js 14 · NestJS 10 · PostgreSQL 16 · Prisma ORM

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 14 (App Router) · TailwindCSS · TanStack Query · Zustand |
| Backend | NestJS 10 · Passport JWT · Swagger |
| Database | PostgreSQL 16 · Prisma ORM |
| Cache/Queue | Redis · Bull |
| File Storage | Cloudflare R2 (S3-compatible) |
| Notifications | WhatsApp Meta Cloud API |

---

## Quick Start

### Prerequisites

- Node.js >= 20
- pnpm >= 9 (`npm install -g pnpm`)
- Docker Desktop (for PostgreSQL + Redis)

### 1. Start the database

```bash
docker compose -f docker/docker-compose.yml up -d
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Generate Prisma client

```bash
pnpm db:generate
```

### 4. Run migrations & seed

```bash
pnpm --filter @oxilo/database db:migrate
pnpm --filter @oxilo/database db:seed
```

### 5. Configure API environment

```bash
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your values
```

### 6. Start development servers

```bash
pnpm dev
```

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001/api
- **Swagger Docs:** http://localhost:3001/api/docs

### Demo Login

```
Email:    owner@oxilo.in
Password: admin123
```

---

## Project Structure

```
oxilo/
├── apps/
│   ├── web/          # Next.js 14 frontend
│   └── api/          # NestJS backend
├── packages/
│   └── database/     # Prisma schema + migrations + seed
└── docker/           # Docker Compose configs
```

---

## API Modules

| Module | Endpoints |
|---|---|
| Auth | POST /auth/login, /auth/refresh, /auth/logout, GET /auth/me |
| Customers | CRUD + order history + measurement listing |
| Measurements | CRUD with automatic version snapshots |
| Orders | Full lifecycle + status updates + QR + duplication |
| Payments | Record payments, pending dues |
| Analytics | Dashboard KPIs, revenue, top customers |
| Settings | Garment types, pricing add-ons |
| Uploads | Order photo uploads (S3/R2) |
| Print | Order data for frontend print rendering |
| Expenses | Shop expense tracking |
