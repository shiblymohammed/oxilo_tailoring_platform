# OXILO Tailoring Platform — Deployment Guide 🚀

This guide covers the professional, production-grade deployment strategy for the OXILO platform. It uses a split architecture to guarantee maximum performance and reliability.

## 🏗️ Architecture Overview
*   **Frontend (PWA):** Deployed on Vercel for global Edge CDN performance, instant PWA installations, and zero-maintenance scaling.
*   **Backend (NestJS API & Postgres):** Dockerized and deployed on a Linux VPS (Hostinger) for complete data ownership, raw processing power, and free file storage.

---

## Part 1: Deploying the Frontend (Vercel)

Vercel will handle the UI, PWA configuration, and image proxying automatically.

1.  Push this entire repository to your GitHub account.
2.  Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3.  Import the `oxilo_tailoring_platform` repository.
4.  **Important Configurations:**
    *   **Framework Preset:** Next.js
    *   **Root Directory:** `apps/web`
5.  **Environment Variables:**
    *   Add a new variable: `NEXT_PUBLIC_API_URL`
    *   Set the value to: `https://oxiloserver.yourdomain.com/api` *(replace with your actual backend domain)*
6.  Click **Deploy**.
7.  Once deployed, go to the project's **Settings > Domains** and add your custom frontend domain (e.g., `oxilo.yourdomain.com`).

---

## Part 2: Deploying the Backend (VPS / Hostinger)

Your VPS will run PostgreSQL, Redis, and the NestJS API in isolated Docker containers, ensuring they never conflict with other projects (like Django) running on the same server.

### 1. Initial Server Setup
SSH into your VPS and pull the code:
```bash
git clone https://github.com/shiblymohammed/oxilo_tailoring_platform.git
cd oxilo_tailoring_platform
```

### 2. Configure Environment Variables
Copy the example environment file and secure it:
```bash
cp apps/api/.env.example apps/api/.env
nano apps/api/.env
```

Make sure you update the following inside `.env`:
*   `FRONTEND_URL`: Set this to your live Vercel URL (e.g., `https://oxilo.yourdomain.com`). This is critical for CORS!
*   `JWT_SECRET`: Change to a long random string.
*   *(Optional)* `STORAGE_*`: If left blank, uploads are saved to your VPS disk. If you add Cloudflare R2/S3 keys, uploads go to the cloud.

### 3. Spin up the Docker Engines
Start the Database, Redis, and NestJS API in the background:
```bash
cd docker
docker-compose up -d --build
```
*Note: The first run takes a few minutes as it downloads Node, builds the NestJS app, and runs the Prisma database migrations.*

### 4. Configure Nginx Reverse Proxy
Route your custom backend domain to the Docker container.
```bash
sudo nano /etc/nginx/sites-available/oxilo
```

Paste the following configuration:
```nginx
server {
    listen 80;
    server_name oxiloserver.yourdomain.com; # Replace with your domain

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
        
        # Allows you to upload large voice notes and images!
        client_max_body_size 50M; 
    }
}
```

Enable the site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/oxilo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. Secure with SSL (HTTPS)
Your API must run on HTTPS so the Vercel frontend can securely talk to it. Run Certbot to generate a free SSL certificate:
```bash
sudo certbot --nginx -d oxiloserver.yourdomain.com
```

---

## 🎉 You're Live!
Open your frontend domain (`https://oxilo.yourdomain.com`) on your mobile device. You will be prompted to "Add to Home Screen". The app is now fully operational, permanently cached via IndexedDB, and connected to your private server database!

### Updating the Platform in the Future
When you push new changes to GitHub:
1.  **Frontend:** Vercel will automatically detect the changes and redeploy.
2.  **Backend:** SSH into your VPS and run:
    ```bash
    cd oxilo_tailoring_platform
    git pull
    cd docker
    docker-compose up -d --build
    ```
