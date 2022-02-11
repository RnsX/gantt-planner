import { combineReducers, createStore, Store } from "redux";
import { IProjectState } from "./Projects";
import { projectsReducer } from "./ProjectsReducer";
import { IGraphProjectState } from './GraphProjects'
import { graphProjectsReducer } from './GraphProjectsReducer';

export interface IAppState {
    readonly projects: IProjectState;
    readonly graphProjects: IGraphProjectState;
};

const rootReducer = combineReducers<IAppState>({
    projects: projectsReducer,
    graphProjects: graphProjectsReducer
});

export function configureStore() : Store<IAppState> {
    const store = createStore(
        rootReducer,
        undefined
    );
    return store;
}