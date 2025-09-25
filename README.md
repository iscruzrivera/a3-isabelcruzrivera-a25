# Assignment 3 - Persistence: Two-tier Web Application with Database, Express server, and CSS template - Isabel Cruz Rivera
Render link: https://a3-isabelcruzrivera-a25.onrender.com/
Railway link: https://a3-isabelcruzrivera-a25-production.up.railway.app/

## To-Do List Functionalities
For my project, I built upon the to-do list I first created in Assignment 2. Users can add, delete, or modify tasks.

Some challenges I faced came in the form of implementing the CSS framework. I spent a lot of time looking through the Tailwind docs in hopes to find what I needed. Additionally, since Tailwinds is through the HTML, it took be a bit to implement it within my client file as well.

To authenticate, I decided to implement a simple database that would keep usernames and passwords. I went with this system, as it seemed the most intuitive and simple to me - it was easy to add users into the database and check if the passwords were correct.

I used the Tailwind framework because a friend of mine mentioned people liked it and I wanted to give it a try. I ran the command using my previously made CSS file, but other than that, I simply continued to make changes within the HTML file through the use of tags.

### Middleware
I used two middleware packages. The first was json so I could parse jsons, which I was using as payloads. I also used static to access the public folder.

# Technical Achievements
The alternative server site I used to host my app was Railway. I thought it was a bit more confusing to set up than Render. Additionally, I didn't have to whitelist 0.0.0.0 on my database with Render - they havea a series of static IPs that they use. However, with Railway, I had to whitelist all IPs. However, I thought the deploys were much faster, and I was able to access my website immediately, unlike Render.

I was able to achive 100% on all Lighthouse tests (see screenshot in repo).
# Design Achievements
I followed the following 12 tips to improve the accessibility of my website:
1. **Use headings to convey meaning and structure:** On the task page, I added a heading to indicate the inputting task section and another to indicate the existing tasks section.
2. **Don't use color to convey information:** For my submit and log off buttons, I am using both color and text to indicate the action.
3. **Ensure that form elements include clearly associated labels:** All form elements I have include clearly associated labels.
4. **Provide easily identifiable feedback:** When a user enters the wrong password or creates a new account, a large alert comes across the screen, obviously signaling to the user that either an account has been created or that their password is wrong.
5. **Use headings and spacing to group related content:** The input section versus the tasks section are each in their own distinct sections.
6. **Create designs for different viewport sizes:** Elements are based on device widths and the inputting tasks/viewing tasks features still work as expected on mobile.
7. **Provide sufficient contrast between foreground and background:** My app passes the accessibility portion of the Lighthouse test with a 100%, which includes tests for contrast. W3 uses the same standards as Lighthouse to determine appropriate contrast: at least 4.5:1.
8. **Associate a label for every control:** Every for entry has a label/description associated with it.
9. **Reflect the reading order in the code order:** In the code, the headings are appropiately ordered.
10. **Ensure all interactive elements are keyboard accessible:** All controls on my page are accessible through tabbing.
11. **Write code that adapts to user's technology:** The code adjust to the user's viewport and changes certain elemenets depending on screen size.
12. **Identify page language and language changes:** The primary language of the page is indicated.

# AI Statement
I used AI to help me debug some things and to help me understand Tailwind better.