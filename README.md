<div align="center">
  <img src="public/images/logo.svg" alt="Medically Logo" height="80">
  <br/>
  <h1>Medically — Health & Medical Next.js App</h1>
  <p>
    <strong>A modern, full-stack appointment booking template built with Next.js, Redux, and MongoDB.</strong><br/>
    <a href="https://github.com/professionaldev527/NextJs-Medically">View Repository</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Redux-Persist-764ABC?style=for-the-badge&logo=redux" alt="Redux" />
    <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Resend-Email-blue?style=for-the-badge&logo=resend" alt="Resend" />
  </p>
</div>

---

## 🏥 Overview

**Medically** is a premium, high-performance Health and Medical application. Built on **Next.js**, it features a state-of-the-art design aesthetic with **Glassmorphism** UI components, automated medical workflows, and a robust backend.

The platform provides a modern healthcare web experience including a secure **OTP-based appointment booking system**, automated **Free Consultation** offers, and professional medical content—completely free of placeholder text.

## ✨ Key Features

- **Advanced Appointment System:** A 3-step secure booking flow allowing patients to select departments, doctors, and real-time scheduling.
- **Automated Consultation Offers:** A dedicated "Free Consultation" system that automatically emails patients with personalized hospital vouchers and care instructions.
- **Resend High-Performance Emailing:** Integrated with the **Resend SDK** for ultra-fast, reliable delivery of OTPs and consultation confirmations.
- **Premium Design System:** A modern UI/UX overhaul featuring **bold typography**, **glassmorphism** (backdrop-blur) inputs, and smooth **CSS animations**.
- **MongoDB Integration:** Persists patient profiles, tracks appointments, and handles secure OTP expiration using TTL indexes.
- **New Patient Incentives:** Automatically grants a **$100 Store Credit** to new users upon their first verified appointment.
- **Next.js Optimized:** Fully audited imports for **Case-Sensitivity** and production ready for **Vercel** deployment.

## 🚀 Getting Started

### 1. Requirements
Ensure you have **Node.js 18+** installed.

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/professionaldev527/NextJs-Medically.git
cd NextJs-Medically
npm install
```

### 3. Environment Variables
To run the database and email service, you must configure a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://<USER>:<PASS>@cluster.mongodb.net/medically

# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_FROM_EMAIL=support.medically@theprofdev.com

# Domain (Local)
DOMAIN=http://localhost:3000
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📂 Project Structure

- `/components` - Modular React components (optimized CtaForm, Header, Layouts).
- `/pages/api` - Full-stack API routes for appointments and consultations.
- `/lib` - Core server-side logic and the Resend-powered **mailer.js**.
- `/mock-api` - Professional medical data Repository (no lorem ipsum).
- `/styles` - Global SCSS and component-level Glassmorphism design tokens.

## 🛠 Tech Stack Details

- **Framework:** Next.js 13.0.7 (React)
- **Email Service:** Resend SDK (High Performance)
- **Database:** MongoDB Atlas & Mongoose
- **State Management:** Redux (Thunk & Persist)
- **Styling:** Sass (SCSS) & Bootstrap 5 Grid

## 📝 License
This project is proprietary and intended as a premium template showcase.