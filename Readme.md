## Task Tacker

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge for [roadmap.sh](https://roadmap.sh/projects)

### How to run

Clone the repository and run the following command:

```
    git clone https://github.com/GuidoDevJ/task-cli-node.git
    cd task-cli-node
```

Run the following command to build and run the project:

```
npm i -g
```

## List of Commands

```
# To add a task
task add "Buy groceries"

# To update a task
task update 1 "Buy groceries and cook dinner"

# To delete a task
task delete 1

# To mark a task as in progress/done/todo
task mark-in-progress 1
task mark-done 1
task mark-todo 1

# To list all tasks
task list
task list done
task list todo
task list in-progress
```
