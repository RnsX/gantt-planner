import { ITask } from "./Task";

export interface IProject {
    Info: {
        id: number,
        name: string,
        description: string
    },
    Tasks: ITask[]
}