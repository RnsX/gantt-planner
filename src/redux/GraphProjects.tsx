import { IProjectGrph } from '../data-structures/Graphs/GraphInterfaces';

export interface IGraphProjectState {
    readonly graphLoading: boolean;
    readonly graphProjects: IProjectGrph[];
    readonly graphViewing: IProjectGrph | null;
    readonly newGraphProjModal: boolean;
    readonly editGraphProjModal: boolean;
    readonly newGraphTaskModal: boolean;
    readonly editGraphTaskModal: boolean;
};

export const initialGraphProjectState: IGraphProjectState = {
    graphLoading: false,
    graphProjects: [],
    graphViewing: null,
    newGraphProjModal: false,
    editGraphProjModal: false,
    newGraphTaskModal: false,
    editGraphTaskModal: false
};

export const GOTPROJECTS_GRAPH = 'GotProjectsGraph';
export const gotProjectsGraphAction = (projects: IProjectGrph[]) => ({
    type: GOTPROJECTS_GRAPH,
    grphProjects: projects,
} as const);


export const OPENPROJECT_GRAPH = 'OpenProjectGraph';
export const openProjectGraphAction = (project: IProjectGrph) => ({
    type: OPENPROJECT_GRAPH,
    grahProject: project
} as const);


export const UPDATELOCATION_GRAPH = 'UpdateLocationGraph';
export const updateLocationGraphAction = (projects: IProjectGrph[]) => ({
    type: UPDATELOCATION_GRAPH,
    graphProject: projects
}as const);