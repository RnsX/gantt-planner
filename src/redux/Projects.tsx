import { IProject } from "../data-structures/Project";

export interface IProjectState {
    readonly loading: boolean;
    readonly projects: IProject[];
    readonly viewing: IProject | null;
    readonly showNewProjectModal: boolean;
    readonly showEditProjectModal: boolean;
};

export const initialProjectState: IProjectState = {
    loading: false,
    projects: [],
    viewing: null,
    showNewProjectModal: false,
    showEditProjectModal: false
};

export const GETTINGPROJECTS = 'GettingProjects';
export const gettingProjectsAction = () => ({
    type: GETTINGPROJECTS,
} as const);

export const GOTPROJECTS = 'GotProjects';
export const gotProjectsAction = (projects: IProject[]) => ({
    type: GOTPROJECTS,
    projects: projects
} as const);

export const OPENPROJECT = 'OpenProject';
export const openProjectAction = (project: IProject) => ({
    type: OPENPROJECT,
    project: project
} as const);

export const TOGGLENEWPROJECTMODAL = 'ToggleNewProjectModal';
export const toggleNewProjectModalAction = () => ({
    type: TOGGLENEWPROJECTMODAL
} as const);

export const TOGGLEEDITPROJECTMODAL = 'ToggleEditProjectModal';
export const toggleEditProjectModalAction = () => ({
    type: TOGGLEEDITPROJECTMODAL
} as const);
