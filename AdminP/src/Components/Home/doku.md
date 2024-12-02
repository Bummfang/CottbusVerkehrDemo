# Home Component Documentation

## Overview:
The `Home` component is a wrapper for dynamically displaying one of three pages: **Login**, **Registration**, and **Database Access**. It uses React's `useState` hook to manage which page is currently active based on the `pageSelector` state.

- **Login Page** (index `0`): Displays the Login component.
- **Registration Page** (index `1`): Displays the Registration component.
- **Database Access Page** (index `2`): Displays the Database Access component.

The component dynamically renders the appropriate page by evaluating the value of `pageSelector`. 

Additionally, the component includes a header and footer:
- The **header** displays the app name and a logo.
- The **footer** includes a status indicator that visually represents the current page by changing color.

## Key Features:
- **Dynamic Page Rendering:** The page that is displayed changes based on the `pageSelector` value. 
  - `0`: Renders the Login component.
  - `1`: Renders the Registration component.
  - `2`: Renders the Database Access component.
  
- **State Management:** The `pageSelector` state controls which page is shown. This state is updated using `setPageSelector`, which is passed to child components as functions (`toRegistration`, `login`, `backToLogin`).

- **Status Indicator:** The footer includes a visual indicator that changes color depending on the current page:
  - **Green**: Indicates that the current page is either the Login or Database Access page.
  - **Yellow**: Indicates that the current page is the Registration page.
  
- **Responsive Design:** The component uses Tailwind CSS to ensure the layout is responsive and adjusts to different screen sizes.
