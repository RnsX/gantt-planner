import { gettingProjectsGraphAction, gotProjectsGraphAction, openProjectGraphAction, updateLocationGraphAction } from "./GraphProjects";

export type GraphProjectsActions = 
    | ReturnType<typeof gotProjectsGraphAction>
    | ReturnType<typeof openProjectGraphAction>
    | ReturnType<typeof updateLocationGraphAction>
    | ReturnType<typeof gettingProjectsGraphAction>
;
