
# Animated Card Website

This is a simple, animated card website built with HTML, CSS, and Font Awesome for icons. The website showcases a visually engaging layout with animated sections that change colors and move when hovered over. It's designed to display a header, interactive content, and a footer with social media links.

## Features
- **Interactive Animated Cards:** The main content area features three animated cards (Top, Middle, Bottom) that move in different directions when hovered.
- **Color Transition Animation:** The background colors of the cards transition smoothly in a gradient animation.
- **Fixed Navigation Bar:** The header features a logo and a "Contact Us" link.
- **Footer with Social Media Links:** The footer contains links to various social media platforms (Facebook, Twitter, LinkedIn, Instagram).
- **Responsive Design:** The layout is designed to adjust based on screen size, making it user-friendly on both desktop and mobile devices.

## Technologies Used
- **HTML5**: Structure and content of the webpage.
- **CSS3**: Styling, animations, and layout of the website.
- **Font Awesome**: For adding social media icons.

## Installation Instructions

1. Clone or download the repository to your local machine.
    ```bash
    git clone https://github.com/samahali/DKH2_SWD2_G1_samah.git
    cd samah_assignment_12
    ```

2. Open the `index.html` file in your browser to view the website.

3. The assets such as images and CSS files are located in the `assets` folder. Make sure the folder structure is maintained if you decide to modify or update any files.

## File Structure

```
/animated-card-website
  ├── /assets
      ├── /css
          └── style.css        # Main stylesheet for the website
      ├── /images
          └── freepik__a-simple-animated-card-with-the-text-animated-card__35815.jpeg  # Logo image
  ├── index.html               # Main HTML file
  └── README.md                # This file
```

## How to Customize

- **Change the Logo**: Replace the image in the `/assets/images/` folder with a new logo image. Ensure the new image has the same filename or update the `src` path in the HTML.
  
- **Modify the Colors**: To customize the background colors or gradient transitions, update the `background` property in the `.card-top`, `.card-middle`, and `.card-bottom` classes in `style.css`.

- **Update Footer Links**: Replace the `href="#"` in the footer’s social media icons with the actual URLs for your social media profiles.

## Acknowledgments

- The animations were inspired by modern CSS animation techniques.
- Icons are provided by [Font Awesome](https://fontawesome.com/).
- Image used in the header was sourced from Freepik.

---