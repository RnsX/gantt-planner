# Introduction

## My Gantt Planner

My Gantt Planner project was intended for practicing *speed coding - design and delivery of concept in as short time as possible*. Such project format was chosen because there isn't enough time in the world for *outside of work* practice projects.

The aim for the project was to cover basic things such as router-dom and state management (redux, useState hook) as well as some more interesting UI/UX elements such as movable sliders.

## Development length

Total development time for this project (from pencil draft concept idea to final build) was 16 hours

## Software stack

Web application was made using Typescript, ReactJS and Bootstrap

# User manual

Link to webapp - https://wonderful-mud-0541f1703.1.azurestaticapps.net

Manage projects:
- Create a new project in main page of the app
- Open project by pressing "open" or click anywhere on project card

Manage tasks:
- Create new tasks within project by using sidebar
- Move tasks up and down (change order) by right clicking on task slider

Manage task sliders:
- Double click on slider to change width (when changing width mode is enabled, the slider will turn green)
- Click and drag sideways the slider to move it along the timeline

# Design and development

## Implemented functionality

1. Tasks are grouped within projects
2. Each task can have specific color, name, duration as well as location in timeline
3. Tasks can be added
4. Projects can be added and removed

## Excluded / cut functionality

1. Remove task
2. Create task dependencies (links)
3. Assign resources to each task
4. Linked tasks move together if link dependency between them is 'concrete'
5. Separating projects between users
6. Sharing project between users
7. Login functionality

## Design concepts

1. Data domains (started with User/Project/Task/SubTask, final version was simplified greatly)
![Data concept](https://github.com/RnsX/My-Gantt-Planner/blob/master/Screenshot%202022-01-30%20at%2018.41.20.png)

2. Gantt chart design with sidebar
![Chart design](https://github.com/RnsX/My-Gantt-Planner/blob/master/Screenshot%202022-01-30%20at%2018.41.37.png)

3. Gantt chart task slider design
![Chart slider](https://github.com/RnsX/My-Gantt-Planner/blob/master/Screenshot%202022-01-30%20at%2018.41.42.png)

3. Data architecture
![Data architecture](https://github.com/RnsX/My-Gantt-Planner/blob/master/Screenshot%202022-01-30%20at%2018.41.47.png)

4. Initial sketch of data object interface design and contents
![Data object sketch](https://github.com/RnsX/My-Gantt-Planner/blob/master/Screenshot%202022-01-30%20at%2018.42.09.png)



