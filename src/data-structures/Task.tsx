export interface ITask {
    TaskInfo: {
        id: number,
        orderId: number,
        name: string,
    },
    predecesors: IDependency[],
    assignedResources: IResource[]
}

export interface IDependency {
    dependencyId: number,
    predecessorId: number
}

export interface IResource {
    id: number,
    name: string,
    hourlyRate: number,
    currency: string
}