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
    <img src="https://img.shields.io/badge/Mailtrap-SMTP-blue?style=for-the-badge&logo=mail" alt="Mailtrap" />
  </p>
</div>

---

## 🏥 Overview

**Medically** is a premium, highly responsive Health and Medical application. Built originally on legacy Bootstrap design principles, it has been completely rewritten and optimized into a robust **Next.js** environment.

The platform provides a modern healthcare web experience for patients and clinics, featuring a fully functional secure **OTP-based backend appointment booking system**, blog capabilities, a shop, and professional medical content.

## ✨ Key Features

- **Advanced Appointment System:** A 3-step secure booking flow allowing patients to select departments, doctors, dates, and times.
- **Direct Mail Routing (Nodemailer):** Automatically generates and emails a 6-digit OTP to verify user ownership before confirming an appointment. Natively routes verification directly to users inbox.
- **MongoDB Integration:** Persists new patients, stores appointments, and temporarily secures OTPs using MongoDB Atlas TTL indexes.
- **New Patient Incentives:** Automatically tracks patient history and issues a **$100 Store Credit** grant to new users upon verified appointment creation.
- **Redux Global State:** Utilizes Redux and `redux-persist` to seamlessly manage patient/cart data across the server and client.
- **Next.js App Routing:** Fast, pre-rendered static generation for standard pages (`/home`, `/about`, `/faq`, `/team`) with optimized routing architecture.

## 🚀 Getting Started

### 1. Requirements
Ensure you have **Node.js 18+** installed on your machine.

### 2. Installation
Clone the repository and install all strict dependencies:
```bash
git clone https://github.com/professionaldev527/NextJs-Medically.git
cd NextJs-Medically
npm install
```

### 3. Environment Variables
To run local DB clustering and the email service smoothly, you must configure a local environment variable file. Create a `.env.local` file in the root directory:

```env
# MongoDB Database
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster.mongodb.net/medically?retryWrites=true&w=majority

# Local Environment
DOMAIN=http://localhost:3000

# Mailtrap SMTP Credentials (For internal email generation)
MAILTRAP_SMTP_USER=your_mailtrap_user_key
MAILTRAP_SMTP_PASS=your_mailtrap_pass_key
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📂 Project Structure

- `/components` - Modular React components (Headers, Footers, Appointment Forms, Layouts).
- `/pages` - Next.js routing directory (`/api` contains backend routes and MongoDB handlers).
- `/public` - Static image assets and JSON files. 
- `/store` - Redux state management configuration including SSR fallback structures.
- `/styles` - Global generic CSS styles and component-based CSS Modules payload.

## 🛠 Tech Stack Details

- **Framework:** Next.js (React)
- **Styling:** Custom CSS, Bootstrap 4 grid
- **Backend APIs:** Next.js API Routes (`/api/appointment/send-otp`)
- **Database:** MongoDB & Mongoose
- **Email Service:** Nodemailer over direct MX routing + Mailtrap
- **State:** Redux & Redux Persist

## 📝 License
This project is proprietary and intended as a premium template showcase.