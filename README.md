# MP9 DAW - UF2 Project - Multimedia resources in WebApps

## Project Goals

- Add the multimedia resources to a web project (images, videos, etc.).
- Optimize the multimedia resources to improve the performance of the web.
- Use different tools and techniques for optimizing multimedia resources.
- Learn about image-related and integrated tools in web development environments.

## Background

This last days we've been seeing different tools and techniques for optimizing multimedia resources. We've seen how to change the format of an image, how to reduce its size previous to its use in a web.

Let's see some of the core concepts on image optimization:

- **Prefer Vector Formats:**

  - Vector images are resolution and scale independent, suitable for multi-device and high-resolution environments.

- **Minify and Compress SVG Assets:**

  - Remove unnecessary metadata from XML markup in SVG assets.
  - Ensure servers are configured for GZIP compression for SVG assets.

- **Prefer WebP or AVIF Over Older Raster Formats:**

  - WebP and AVIF images are usually smaller than older formats.

- **Pick Best Raster Image Format:**

  - Determine functional requirements and select the format that suits each asset.

- **Experiment with Optimal Quality Settings for Raster Formats:**

  - Don't hesitate to reduce "quality" settings; the results are often good with significant byte savings.

- **Serve Scaled Images:**

  - Resize images to ensure the "display" size is close to the "natural" size.
  - Pay attention to large images as they contribute to significant overhead when resized.

- **Automate, Automate, Automate:**
  - Invest in automated tools and infrastructure to ensure continuous optimization of all image assets.

Images are very important for the responsiveness of our website. But also it is very important the size of these images as we grow our website.

In this project we're goint to work with the same website we worked in our first project but we're going to incorporate some key-points that will be very helpful for your future projects. Let's see what are we going to be working with:

### Background key-points

Here you have some information that you'll need throughout the project:

1. **Responsive Images**

   - **Resources:**
     - [MDN Web Docs - Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
     - [W3Schools - Responsive Images](https://www.w3schools.com/html/html_responsive_images.asp)
     - [CSS-Tricks - Responsive Images](https://css-tricks.com/responsive-images-css/)
     - [Web.DEv - Optimize your images](https://web.dev/articles/choose-the-right-image-format/)

2. **SVG and Cli-Path:**

   - **Resources:**
     - [W3Schools - SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp)
     - [CSS-Tricks - A Comprehensive Guide to SVG](https://css-tricks.com/svg-guide/)

3. **Imagemin and Sharp:**

   - **Resources:**
     - [Imagemin - GitHub Repository](https://github.com/imagemin/imagemin)
     - [Sharp - GitHub Repository](https://github.com/lovell/sharp)
     - [Parcel - Image Optimization](https://parceljs.org/recipes/image/)

4. **CSS Animations (Keyframes):**

   - **Resources:**
     - [MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
     - [CSS-Tricks - A Guide to CSS Animation](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)

5. **Comparison with PageSpeed Insights and Lighthouse:**
   - **Resources:**
     - [PageSpeed Insights - Google Developers](https://developers.google.com/speed/pagespeed/insights/)
     - [Lighthouse - Google Developers](https://developers.google.com/web/tools/lighthouse)

## Project Goals - WHAT I NEED TO DO.

Starting from your website from the first project, you'll need to ensure the following requirements. This is, you've to make the necessary changes, if not yet implemented, to ensure that your website meets the following requirements:

1. **Header and Footer:**

   - Design a simple header with a title and a basic logo created by you.
   - Create a footer with links to all pages.

2. **Responsive Design:**

   - Ensure the WHOLE website is responsive for various devices.
   - Incorporate the use of different images (resolution/size) for different devices.
   - Incorporate at least one different crop of an image for different devices.

3. **Image Optimization:**

   - Make a decision about the format that you want to use for your images and explain why you've chosen that format.
   - MANUALLY (as you have done with the tasks in this UF) optimize at least two images on the website.
   - Investigate and show how to optimize an image using Imagemin or Sharp.
   - Use Parcel to AUTOMATE the optimization of images of your website.

> **IMPORTANT** You'll have to create a video-tutorial of **no more than 2min** explaining how to optimize an image using Imagemin or Sharp + how to use Parcel to automate the optimization of images of your website. Finally you'll have to add it to your documentation (you can upload it or embed it as a youtube video).

4. **CSS Clip-Path & Animations:**

   - Add a CSS animation to an element on the homepage.
   - Add also a CSS clip-path to an element on the homepage.

5. **Documentation:**
   - Document the development process with a focus on image optimization decisions.
   - Embed the short video tutorial demonstrating manual image optimization. You can add it on the links site of your documentation.

### Structure Reminder

You need to follow the structure of the first project. Ther're some changes but the general structure keeps the same.

#### Homepage

- Include at least one graphic resource edited with clip-path. Get creative! Cut an image and create a shape that integrates well into the page.

#### Detail Page

- Add a representative featured image that explains the page's content.
- Ensure the image is well-integrated into the design for both mobile and larger screens.
- Include at least two additional images (excluding header and footer), preferably in various formats (properly justified in the practice documentation).

#### Category Page

- Display the chosen featured image from the detail page, similar to platforms like Amazon, where a small image is visible during a search, and it enlarges when you enter the product page.

#### Presentation Page

- Include at least one graphic resource made with SVG on this page.
- The SVG should have a small animation using CSS.

#### Links Page

- Add your video tutorial to the links page.
- It's very important to be sure about the use of copyrighted material.
- Ensure compliance with limits and exceptions when using copyrighted materials.
- All resources requiring acknowledgment of rights must be correctly recognized and linked on this page.

## Evaluation Criteria:

**Development (70%):**

- Creation and/or modification to use of the appropriate format of images (20%).
- Adaptation of the resources to a responsive design (20%).
- Clip-Path and Animation (15%).
- Use of image-optimization tools (15%).

**Documentation (30%):**

- Documentation of the development process (10%).
- Brief justification for image optimization choices (10%).
- Embedded video tutorial for manual image optimization (10%).

**Important Note:**
Ensure that the documentation includes links to the code repository and the public URL of the

### Intellectual Property and Plagiarism

When creating multimedia works, it is often unavoidable to use resources created by third parties. It is understandable to do so within the framework of a practice in the studies of this Master's program, as long as it is clearly documented and does not constitute plagiarism in practice.

Therefore, when submitting a practice that uses third-party resources, it should be accompanied by a document detailing the resources used. This document should specify the name of each resource, its author, where it was obtained, and its legal status — whether the work is protected by copyright or falls under another usage license (Creative Commons, GNU, GPL, etc.). The student must ensure that the chosen license does not explicitly prohibit its use within the scope of the practice. If the corresponding information cannot be found, it should be assumed that the work is protected by copyright.

Additionally, when digital works are used, the original files must be attached, and their source code, if applicable.
