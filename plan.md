# 🧵 Tailor Shop Management Platform

> **Complete Product Planning Document — Feature & Workflow Plan**

---

## 1. Vision

Build a simple but powerful tailoring business management platform designed for:

- Local tailoring shops
- Boutique tailors
- Uniform stitching centers
- Ladies tailoring units
- Small garment workshops

### Core Principles

| Principle              | Description                                         |
| ---------------------- | --------------------------------------------------- |
| **Easy**               | Minimal learning curve for non-tech users            |
| **Fast**               | Instant actions, zero bloat                          |
| **Mobile-friendly**    | Works perfectly on phones and tablets                |
| **Local-business first** | Designed for real-world tailor workflows, not ERP  |

### The System Should

- ✅ Reduce manual confusion
- ✅ Manage orders efficiently
- ✅ Improve customer retention
- ✅ Professionalize operations
- ✅ Support future expansion

---

## 2. Main Objectives

### Operational Goals

- [ ] Track every order properly
- [ ] Never lose measurements
- [ ] Avoid delivery confusion
- [ ] Reduce customer calls
- [ ] Track payments accurately
- [ ] Organize workflow

### Business Goals

- [ ] Increase repeat customers
- [ ] Improve professionalism
- [ ] Enable analytics
- [ ] Support scaling
- [ ] Build digital customer records

---

## 3. User Roles & Permissions

| Role                      | Access Level | Capabilities                                                  |
| ------------------------- | ------------ | ------------------------------------------------------------- |
| **👑 Owner**              | Full         | Orders, customers, payments, reports, workers, settings        |
| **✂️ Staff / Tailor**     | Limited      | Assigned orders, stitching status updates, delivery updates    |
| **🧾 Reception / Billing** | Moderate     | Create orders, print receipts, manage customers, collect payments |

---

## 4. Core Modules

### MODULE 1 — Customer Management

#### Customer Profiles

Store the following for each customer:

| Field            | Type     |
| ---------------- | -------- |
| Name             | Text     |
| Mobile number    | Phone    |
| WhatsApp number  | Phone    |
| Address          | Text     |
| Gender           | Select   |
| Birthday         | Date     |
| Anniversary      | Date     |
| Notes            | Textarea |

#### Customer History

- Previous orders
- Past measurements
- Payment history
- Preferences

#### Customer Preferences

> Examples: slim fit, loose fit, extra margin, hidden pocket, preferred collar, preferred tailor

#### Customer Search

Search by: **phone** · **order ID** · **customer name**

#### Repeat Customer Detection

- 🟢 Frequent customer
- ⭐ VIP customer
- 🔴 Inactive customer

---

### MODULE 2 — Measurement Management

#### Multiple Measurement Profiles

One customer can have multiple profiles:

- Shirt · Pant · Blazer · Uniform · Wedding

#### Measurement Templates

| Category   | Templates                              |
| ---------- | -------------------------------------- |
| **Men**    | Shirt, Pant, Sherwani, Suit            |
| **Women**  | Blouse, Churidar, Frock, Gown          |
| **Kids**   | School Uniform, Casual                 |

#### Editable Measurement Fields

> Chest · Waist · Hip · Shoulder · Sleeve · Inseam · Collar · Thigh

#### Visual Body Diagram

Tap body areas to input measurements interactively.

#### Measurement Version History

Track: old measurements → updated measurements → weight changes

#### Printable Measurement Cards

- Pocket-size slips
- A4 sheets
- Tailor work cards
- Can include: **QR code**, **customer ID**, **order ID**

---

### MODULE 3 — Order Management

#### Create New Order

Each order includes:

- Customer selection
- Clothing type
- Cloth details
- Measurement profile
- Delivery date
- Assigned tailor

#### Multiple Items Per Order

> **Example — Order #1032:** 2 Shirts + 1 Pant + 1 Blazer

#### Order Status Workflow

```
Order Received → Measurement Taken → Cutting → Stitching → Trial → Alteration → Ready → Delivered
```

#### Priority Orders

Tags: `🔴 Urgent` · `💒 Wedding` · `🎉 Festival` · `⭐ VIP`

#### Trial Management

Track: trial dates · correction notes · alteration requests

#### Delivery Tracking

- Today's deliveries
- Delayed orders
- Pending pickup

#### Order Notes

> Examples: deep neck, embroidery, zipper type, custom style

#### Reference Photo Attachment

- Attach customer reference images directly to an order
- Upload design inspirations, fabric samples, or style references
- Multiple photos per order item supported
- Photos visible to assigned tailor on their work screen
- Helps reduce miscommunication between customer and tailor

#### Alteration-Only Orders

- Quick order type specifically for alterations (shortening, fitting, repairs)
- No measurement profile required — just pick the garment and describe the fix
- Simplified flow: skip measurement step, go straight to assignment
- Common revenue stream that shouldn't require full order creation overhead

#### Order Duplication

- **"Repeat Last Order"** button on returning customer profiles
- Copies clothing type, measurements, preferences, and tailor assignment
- Staff only needs to update delivery date and cloth details
- Saves significant time for regular customers

---

### MODULE 4 — Billing & Payments

#### Invoice Generation

- Digital invoice
- Thermal receipt
- Printable bill

#### Payment Tracking

| Field            | Details                                 |
| ---------------- | --------------------------------------- |
| Advance payment  | Amount collected upfront                |
| Pending balance  | Remaining amount due                    |
| Full payment     | Total order cost                        |
| Payment method   | Cash · UPI · Card · Bank Transfer       |

#### Due Payment Alerts

- Pending payments
- Overdue balances

#### Expense Tracking

Track: thread purchase · electricity · tailor salary · fabric purchases

#### Custom Pricing Rules

- Set **base price per garment type** (e.g., Shirt ₹500, Pant ₹400, Blazer ₹2000)
- Define **add-on pricing** for extras:

| Add-On         | Extra Cost  |
| -------------- | ----------- |
| Embroidery     | +₹200       |
| Lining         | +₹150       |
| Hidden pocket  | +₹50        |
| Rush delivery  | +₹300       |

- Auto-calculates total order price based on items + add-ons
- Owner can update pricing anytime from settings

---

### MODULE 5 — Printer Integration

#### Thermal Printer Support

Print: order receipt · delivery slip · measurement card · worker slip

#### QR Printing

- Each order receives a **QR code** + **unique ID**
- Scan to open order instantly

#### In-App QR Scanner

- **📷 Scan button** in the dashboard / navigation bar
- Opens the device camera directly within the platform
- Reads the QR code and navigates instantly to the order detail page
- Works on mobile browsers (Android / iOS) using the device camera API
- No external app required — fully integrated scanning experience

#### Barcode Support

- Generate barcodes alongside QR codes for each order
- Scannable via in-app scanner or external barcode reader
- Useful for shops with existing barcode hardware
- Printed on order tags, receipts, and garment labels

---

### MODULE 6 — WhatsApp & Notifications

#### Customer Notifications (Automatic)

| Trigger            | Message Type        |
| ------------------ | ------------------- |
| Order placed       | Order received      |
| Trial scheduled    | Trial reminder      |
| Order complete     | Ready for pickup    |
| Payment pending    | Payment due         |
 
#### Owner Notifications

- Delayed orders
- Urgent tasks
- Pending deliveries

#### Festival Messaging

Send: Eid offers · Onam wishes · Discount campaigns

#### Google Review Prompt

- Auto-send a **Google Review link** after order delivery
- Sent via WhatsApp or SMS aft