# Urban Mart

Urban Mart is a responsive grocery ordering web application built using React and Tailwind CSS.  
The application allows users to browse grocery products, search items, manage cart quantities, and place orders with a modern ecommerce-style UI.

---

# Features

## Product Listing
- Display grocery products with:
  - Product image
  - Product name
  - Category
  - Unit
  - MRP & Selling Price
- Responsive product grid
- Out-of-stock products disabled
- Search products by:
  - Product name
  - Product category

---

## Cart Functionality
- Add products to cart
- Increase/decrease quantity
- Remove products from cart
- Live cart item count in navbar
- Prevent duplicate cart entries
- Cart persists after refresh using `localStorage`

---

## Billing & Checkout
- Billing summary page
- Displays:
  - Subtotal
  - Total discount
  - Delivery charge
  - Final total
- Free delivery above ₹300
- Per-product savings display
- Responsive ecommerce checkout layout
- Place order button clears cart

---

# Tech Stack

- React.js
- Tailwind CSS
- React Router DOM
- Lucide React Icons

---

# Responsive Design

The application is fully responsive and optimized for:
- Mobile Devices
- Tablets
- Desktop Screens

---

# Folder Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── ProductCard.jsx
│   ├── ProductDisplay.jsx
│   ├── Cart.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── BillPage.jsx
│
├── assets
│   ├── product.json
│
├── App.jsx
├── index.js

```

# Installation & Setup

Follow these steps to run the project locally on your machine.

---

## 1️. Clone the Repository

```bash
git clone <your-github-repository-link>
```

---

## 2️. Navigate to Project Folder

```bash
cd urban-mart
```

---

## 3️. Install Dependencies

```bash
npm install
```

---

## 4️. Start Development Server

```bash
npm start
```

---

## 5️. Open in Browser

Visit:

```bash
http://localhost:3000
```

---

# Required Packages

The project uses the following main packages:

```bash
npm install react-router-dom
npm install lucide-react
npm install tailwindcss
```

---

# Build for Production

```bash
npm run build
```

This creates an optimized production build inside the `build` folder.

# Vercal link 
  < https://urban-mart-three.vercel.app/ >

