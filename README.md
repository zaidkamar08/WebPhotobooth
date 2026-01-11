Web PhotoBooth 

This is a simple web-based PhotoBooth app where users can take pictures using their webcam, apply live filters, and generate a vertical photo strip just like real photobooths in malls or events.

Everything runs directly in the browser — no backend or uploads required.

What it does

Shows live camera feed

Lets you apply different visual filters

Capture up to 4 photos

Displays them in a vertical layout

Combines them into one tall image

Allows you to download the final photo strip

Start again without refreshing the page

How it works

The camera is accessed using the browser’s WebRTC API.
When you press Capture, the current frame is drawn onto a canvas with the selected filter.
After 4 photos are taken, they are merged into a single vertical image which you can download as a PNG.

Tech stack

HTML

CSS

JavaScript

WebRTC (for camera access)

Canvas API (for image processing)

Running the project

Because browsers block camera access for local files, this project needs to be run on a local server.

The easiest way: Link https://snapstripz.netlify.app/

Why I built this

I wanted to build something more than a basic frontend project — something that interacts with real hardware (the camera) and produces something useful and shareable. This project helped me understand how browsers handle media, canvas, and real-time UI updates.

Future ideas

Add frames and stickers

Allow different strip sizes (Instagram, A4, etc.)

Improve mobile layout

Add a simple gallery

Author

Md Jaaid Kamar
Computer Science Engineering student

