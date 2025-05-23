# Donation Platform Project

## Project Overview
This project is a donation platform where users can donate money, view transaction history, and interact with various sections such as donation cards and the blog page. The website is designed with a clean, professional, and visually appealing user interface.

### Key Features
- **Donation Cards:** Users can donate money using cards. Each card includes an image, donation title, current donation amount, and an input field for the donation amount.
- **History Section:** A history section displays notifications of completed transactions, including the date, amount, and donation name.
- **Navbar:** A sticky navigation bar containing links to the Blog, Donation, and History sections, along with the account balance displayed with a coin icon.

### Technologies Used
- HTML
- CSS
- Vanilla JavaScript 
- TailwindCSS
- DaisyUI

---

## Features & Functionalities

### 1. Navbar
The navbar is designed to be visually appealing and sticky, remaining at the top of the page as the user scrolls. It contains:
- **Logo:** Positioned in the center.
- **"Blog" button:** Positioned on the left side.
- **Account balance:** Displayed on the right side, with a coin icon to signify the balance.
- **"Donation" and "History" buttons:** Positioned in the center of the navbar, toggling between the donation and history sections.

### 2. Donation Section
The donation section includes three donation cards with the following functionality:
- **Donation Cards:** Each card has:
  - An image on the left.
  - A donation title.
  - Donation info.
  - The current donation amount.
  - An input field for the donation amount.
  - A button for submitting the donation.

### 3. History Section
The history section is initially hidden and becomes visible once the user clicks the "History" button. It displays the following transaction information:
- Date and time of the transaction.
- Donation amount.
- Donation name.

### 4. Donation and History Button Functionality
- **Donation Button:** Clicking this button will show the donation cards and hide the history section.
- **History Button:** Clicking this button will show the transaction history and hide the donation section.

### 5. Donation Functionality for Each Card
When the **"Donate Now"** button is clicked:
- The donation amount entered will be deducted from the total account balance.
- The card’s current donation amount will be updated.
- A meaningful notification will be added to the history section indicating the donation transaction.
- Input validation ensures that the donation amount is valid and does not exceed the available balance.

### 6. Input Validation
Before processing a donation:
- If the amount entered is greater than the account balance, a notification will be shown.
- If the input contains an invalid number (non-numeric input), an alert will notify the user.
- If the input field is empty, the user will be prompted to enter a valid amount.

### 7. Modal on Successful Donation
A static modal is displayed when a donation is successful, confirming the transaction instead of using a browser alert.

### 8. Toggle Active Status
The "Donation" and "History" buttons toggle between active and inactive states, changing color to indicate the current active section.

### 9. Responsive Design
The application is fully responsive and adjusts seamlessly to different screen sizes, ensuring a smooth experience on mobile and desktop devices.

---


---

## Blog Page

The **blog.html** page contains the following questions and answers:

1. **What is the Document Object Model (DOM)?**
2. **How do you select an element from the DOM?**
3. **What is event delegation in the context of the DOM, and why is it useful?**
4. **How do you manipulate an element's attributes and styles using the DOM?**

These questions and their answers provide an understanding of the core concepts related to the DOM.

---

## Live Demo
You can view the live version of the project here:  
[Live Demo Link](https://humayun1318.github.io/B10A5-reset9/)

---

## How to Run the Project

1. Clone this repository to your local machine:

```
  git clone https://github.com/Humayun1318/donation-platform.git

```


2. Open the project folder in your preferred code editor.

3. Open the `index.html` file in your browser to view the application.

---

## Future Improvements

- Integrate a backend to store donation transactions and account balance permanently.
- Add user authentication and profiles for personalized donation histories.

---

## 📬 Contact

**Project Maintainer:** Humayun Kabir          
📧 Email: humayunkabir6267@gmail.com  
🐙 GitHub: [@Humayun1318](https://github.com/Humayun1318)

Thank you for exploring Donation platform — contributions, feedback, and ideas are always welcome! 🚀
