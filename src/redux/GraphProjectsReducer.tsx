import { GOTPROJECTS_GRAPH, initialGraphProjectState, OPENPROJECT_GRAPH } from "./GraphProjects";
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
    }
}