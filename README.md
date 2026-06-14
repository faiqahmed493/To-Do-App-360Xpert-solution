# 📝 To-Do App

A simple and interactive To-Do Application built using **HTML, CSS, and Vanilla JavaScript**. The application allows users to manage their daily tasks efficiently with features such as adding, updating, deleting, searching, sorting, and paginating tasks.

---

## 🚀 Features

* ➕ Add new tasks
* 🔍 Search tasks
* ✏️ Update existing tasks
* 🗑️ Delete tasks
* ✅ Mark tasks as completed
* 🔄 Sort tasks alphabetically
* 📄 Pagination (4 tasks per page)
* 🎨 Modern and responsive UI

---

## 📸 Preview

Add screenshots of your project here.

```md
![Home Page](./screenshots/home.png)
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📂 Project Structure

```text
ToDo-App/
│
├── index.html
├── style.css
├── searchingTask.js
└── README.md
```

---

## ⚙️ How It Works

### Add Task

Users can add new tasks using the input field.

```javascript
tasksArr = [...tasksArr, inputText];
```

---

### Search Task

Tasks can be searched using the search bar.

```javascript
const searchresult =
tasksArr.filter(task => task === searchinput);
```

---

### Delete Task

Tasks can be removed from both the UI and the array.

```javascript
tasksArr.splice(index, 1);
```

---

### Update Task

Users can modify existing tasks.

```javascript
text.innerText = updatedText;
```

---

### Mark as Done

Tasks can be marked as completed.

```javascript
text.style.textDecoration = "line-through";
```

---

## 📄 Pagination

The application implements client-side pagination.

### Configuration

```javascript
let currentPage = 1;
const cardsPerPage = 4;
```

### Total Pages Calculation

```javascript
const totalPages =
Math.ceil(tasksArr.length / cardsPerPage);
```

### Get Tasks for Current Page

```javascript
const startIndex =
(currentPage - 1) * cardsPerPage;

const endIndex =
startIndex + cardsPerPage;

const pageTasks =
tasksArr.slice(startIndex, endIndex);
```

### Benefits

* Better user experience
* Improved performance
* Cleaner interface
* Easier navigation through tasks

---

## 🧠 JavaScript Concepts Used

* DOM Manipulation
* Event Listeners
* Dynamic Element Creation
* Arrays
* Spread Operator
* Filter Method
* Sort Method
* Slice Method
* Splice Method
* Conditional Rendering
* Pagination
* CRUD Operations

---

## 🔮 Future Improvements

* Store tasks in Local Storage
* Dark Mode
* Task Categories
* Due Dates
* Priority Levels
* Drag and Drop Task Reordering
* Backend Integration

---

## 📚 Learning Outcomes

This project helped me understand:

* JavaScript DOM Manipulation
* Event Handling
* Dynamic UI Rendering
* CRUD Operations
* Array Methods
* Pagination Logic
* Responsive Design

---

## 👨‍💻 Author

**Faiq Ahmed**

* GitHub: https://github.com/faiqahmed493
* LinkedIn: https://www.linkedin.com/in/faiq-ahmed-65b2782a3/
* Project Live Link : https://faiqahmed493.github.io/To-Do-App-360Xpert-solution/

---

⭐ If you found this project helpful, consider giving it a star!
