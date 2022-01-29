import { gettingProjectsAction, gotProjectsAction, openProjectAction, toggleEditProjectModalAction, toggleEditTaskModalAction, toggleNewProjectModalAction, toggleNewTaskModalAction, updateLocationAction } from "./Projects";

export type ProjectsActions = 
    | ReturnType<typeof gettingProjectsAction>
    | ReturnType<typeof gotProjectsAction>
    | ReturnType<typeof openProjectAction>
    | ReturnType<typeof toggleEditProjectModalAction>
    | ReturnType<typeof toggleNewProjectModalAction>
    | ReturnType<typeof updateLocationAction>
    | ReturnType<typeof toggleEditTaskModalAction>
    | ReturnType<typeof toggleNewTaskModalAction>
;