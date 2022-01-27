import { combineReducers, createStore, Store } from "redux";
import { IProjectState } from "./Projects";
import { projectsReducer } from "./ProjectsReducer";

export interface IAppState {
    readonly projects: IProjectState;
};

const rootReducer = combineReducers<IAppState>({
    projects: projectsReducer,
});

export function configureStore() : Store<IAppState> {
    const store = createStore(
        rootReducer,
        undefined
    );
    return store;
}