import { GETTINGPROJECTS_GRAPH, GOTPROJECTS_GRAPH, initialGraphProjectState, OPENPROJECT_GRAPH } from "./GraphProjects";
import { GraphProjectsActions } from "./GraphProjectsActions";

export const graphProjectsReducer = (
    state = initialGraphProjectState,
    action: GraphProjectsActions
) => {
    switch (action.type) {
        case GOTPROJECTS_GRAPH: {
            return {
                ...state,
                graphLoading: false,
                graphProjects: action.grphProjects
            }
        }
        
        case OPENPROJECT_GRAPH: {
            return {
                ...state,
                graphViewing: action.grahProject
            }
        }

        case GETTINGPROJECTS_GRAPH: {
            return {
                ...state,
                graphLoading: !state.graphLoading
            }
        }
    }
    return state;
}