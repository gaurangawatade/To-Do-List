# To-Do-List
A Simple Web App created using HTML, CSS and JavaScript. A To Do List App to add and remove items to and from a table.

--------- How To Run this App ------------------
To run this app, user needs just 2 files uploaded in this repository namely index2.js and index2.html.
Make sure both these files are in the same folder.
Open the index2.html file in a browser and your app is ready. No extra packages or modules are needed to run this app.

--------- Features ------------------
User should enter Task name and Task description before clicking on Save button. On doing this a single entry will be appended at the end of the table.
User is provided a delete button to remove the unnecessary entries from the table.
The Clear All button deletes all entries from the table and releases the memory utilized by the entries. Hence this button should be used with caution.
The Generate button will auto type a random decription in the Description box. This feature was added to ease the testing of the app.

--------- Limitations ------------------
This app uses localStorage to store array of objects. Due to the storage limit of 5MB, this app can hold a maximum of approximately 5000 entries.
After 5000 entries, this app will cease to work.
