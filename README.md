Project title: Mia Fitz Photography Website
Creator: Jacob Mangold
GitHub username: Arizona7924
Location: Virginia Beach Virginia, USA
Date: 10/27/2024
Video Demo: https://www.youtube.com/watch?v=T-eUAfQtsnk

Description:
    This is a website with four pages, Home, gallery, sessions, and contact.
    Each page has a nav bar that can navigate to each other page.
    Each page is comprised of the header, body, and footer.
    I created a seperate html file for each page. Each page also has a seperate css style sheet as
    well as a standard style sheet that applies to each page.
    The contact, gallery, and sessions page also have their own javascript file.

    Home:
        On the home page, I created an introduction into the photographer with a picture. This is by far the simplest
        page.
    Gallery:
        On the gallery page, I created a memories portfolio with a mason grid layout. Each picture is the same width, 
        allowing for three columns. If clicked on, the pictures will expand into an image set where you can
        flip through pictures in that set. Each picture contains a different set of images.
        To store these images, I have an image folder, inside this image folder, I have an images.json file
        containing an object with multiple arrays of paths to each image.
        At the bottom of the body their is a link to the contact page.
    Sessions:
        On the sessions page, I list off each session available. Senior, Family, and graduation. I displayed the
        picture and text next to each other in a flex box. If clicked on, the title of each session will lead you to
        the contact page with it's session's field filled out with the given session.
    Contact:
        On the contact page, I created a form with text and dropdown inputs.
        Some fields such as name or number are required and will give you an error message is you don't
        fill them out. Other's are optional. There is also a submit button at the bottom with a little animation.
        If correctly submitted, (the form checks to make sure each field is ok), then you will get a message that informs you that the submission went through, the message will fade out after a couple seconds.
    Each page has a nav bar at the top and bottom, as well as links to facebook and instagram in the footer. 
    I used Google fonts, Italiano cursive and Open-sans.