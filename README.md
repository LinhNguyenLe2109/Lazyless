# Lazyless - Personal Management app
![Static Badge](https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular)
![Static Badge](https://img.shields.io/badge/MongoDB-brightgreen?style=for-the-badge&logo=MongoDB)
![Static Badge](https://img.shields.io/badge/Express.js-green?style=for-the-badge&logo=Express.js)
![Static Badge](https://img.shields.io/badge/TailwindCSS-blue?style=for-the-badge&logo=tailwindcss)

Lazyless was designed to help individuals improve their time management and scheduling. It aids in prioritizing tasks and reviewing daily progress to identify areas for improved efficiency.

![Home page](images/image.png)

# Usage
All of the use cases below require an account creation. You can create a new account by going to "Login" --> "Sign up" which is below the login form --> Use the credentials to log into your account.
## Working with a table
### Step 1: Click "Create" on the top right
The website will create a record of a table for the current for you. Note that you can only create one table per day. The record shows you the date you created it and the percentage of work that you finished compared to what you planned. 
 ![Result of step 1](images/step1.png)
### Step 2: Click "View" on the record
You should see an empty table with the id for that table and the date that it was created.
 ![When enter step 2](images/step2.1.png)

### Step 3: Working with a table
The table has 4 categories for you to split up your tasks. Simply write the task in the input field then click add, the tasks will be saved in the table.
 ![Step 3.1](images/step3.1.png)
 When you finish a task, click the <b>check icon</b>. This will highlight the completed task with green. On the other hand, if you want to remove a task, click the <b>garbage icon</b>. This will delete the task.
 ![Step 3.2](images/step3.2.png)
## Working with a schedule tracker
Follow step 1 and 2 in the "Working with a table" section. You should see this after you click "View"
 ![Step 4.1](images/step4.1.png)
 Here you have a stop watch to keep track of the efficiency of your work (Currently, it only works when you keep the web as the primary tab. This maybe a future feature). <br/>
 To add a task, click the button below the stop watch. This will pop up a form for you to fill in the task's detail. All fields but the note field are required. After you add a task, the table should be updated. You can click the summary to view how much time in total you have spent for a specific category.
 ![Step 4.2](images/step4.2.png)