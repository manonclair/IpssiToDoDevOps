# IpssiToDoDevOps

# ToDo API

A simple Node.js API for managing tasks using MySQL and Sequelize.

# Kanban Link

https://github.com/users/manonclair/projects/2/

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/manonclair/IpssiToDoDevOps.git
cd IpssiToDoDevOps
```

### 2. Create a .env file at the root with the following content:
```bash
DB_NAME=todo_db
DB_USER=root
DB_PASSWORD=example
DB_HOST=db
DB_PORT=3306
PORT=3000
```

### 3.Start the project with Docker Compose

```bash
docker-compose up --build
```