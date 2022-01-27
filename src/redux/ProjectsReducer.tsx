import { GETTINGPROJECTS, GOTPROJECTS, initialProjectState, OPENPROJECT, TOGGLEEDITPROJECTMODAL, TOGGLENEWPROJECTMODAL, UPDATELOCATION } from "./Projects";
import { ProjectsActions } from "./ProjectsActions";

export const projectsReducer = (
    state = initialProjectState,
    action: ProjectsActions
) => {
    switch (action.type) {
        case GETTINGPROJECTS: {
            return {
                ...state,
                loading: true
            }
        }
        
        case GOTPROJECTS: {
            return {
                ...state,
                loading: false,
                projects: action.projects,
            }
        }

        case OPENPROJECT: {
            return {
                ...state,
                viewing: action.project
            }
        }

        case TOGGLEEDITPROJECTMODAL: {
            return {
                ...state,
                showEditProjectModal: !state.showEditProjectModal
            }
        }

        case TOGGLENEWPROJECTMODAL: {
            return {
                ...state,
                showNewProjectModal: !state.showNewProjectModal
            }
        }

        case UPDATELOCATION: {
            return {
                ...state,
                projects: {...action.data}
            }
        }
    }
    return state
}