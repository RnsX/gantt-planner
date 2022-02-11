import { ILocation, IResource, ITask } from '../Task';
import { IProject } from '../Project';

export interface IProjectGrph {
    info: {
        id: number,
        name: string,
        description: string
    },
    tasksRoot: Node[];
}

export interface ITaskGrph {
    taskInfo: {
        id: number,
        orderId: number,
        name: string,
        color: string
    },
    location: ILocation,
    assignedResources: IResource[],
    childTasks: Node[]
}

export interface Node {
    object: ITask;
    childNodes: Node[]
}