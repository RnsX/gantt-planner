import { gettingProjectsAction, gotProjectsAction, openProjectAction, toggleEditProjectModalAction, toggleNewProjectModalAction } from "./Projects";

export type ProjectsActions = 
    | ReturnType<typeof gettingProjectsAction>
    | ReturnType<typeof gotProjectsAction>
    | ReturnType<typeof openProjectAction>
    | ReturnType<typeof toggleEditProjectModalAction>
    | ReturnType<typeof toggleNewProjectModalAction>
;