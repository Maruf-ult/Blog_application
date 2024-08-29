# MERN BLOG APPLICATION

This is a simple MERN (MongoDB, Express, React, Node.js) blog application that allows users to create, read and delete blog posts. Users can input a title, description (about), and an image for each blog post.



## Features

 - Create a New Blog Post
  
     -  Users can create a new blog post by providing a title, description, and uploading an image.

    - The data is stored in a MongoDB database.

- View All Blog Posts:
   
   - Users can view a list of all blog posts.

   - Each post displays the title, description, and a thumbnail of the image.

- Delete a Blog Post:

   - Users can delete a blog post by clicking a delete button associated with each post.

  - The post is removed from the database.




## Technologies Used

- **Frontend:**
 
  - React.js: A JavaScript library for building user interfaces.
  - React Hot Toast: Customizable styling and configuration options.

  
- **Backend:**
  - Node.js: JavaScript runtime environment.
  - Express: Web application framework for Node.js.
  - Multer: For handling image uploads
  - MongoDB: NoSQL database for storing data.


## Installation

1. Clone this repository:

   ```
    https://github.com/Maruf-ult/Blog_application.git
     ```

3. Open the terminal in the repository folder:
 
   ```
   cd folder-name
    ```

5. Install backend dependencies:

   ```
   npm install
    ```

7. Install frontend dependencies:
   
   ```
   cd client
   npm install
     ```

9. Configure MongoDB:
- Create an account on MongoDB Compass.
- Create a database and obtain your MongoDB URI.
- Create a `.env` file in the root directory and add your MongoDB URI:

  ```  MONGO_URI=your_mongodb_uri  ```

6. Run the application:
   
   ```
   npm start
   ```

Feel free to adapt this template to your project's specific requirements. Happy coding! 🚀

: GitHub - Maruf-ult/Blog_application
