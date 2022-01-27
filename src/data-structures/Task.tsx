import { Dispatch, SetStateAction } from "react";

export interface ITask {
    TaskInfo: {
        id: number,
        orderId: number,
        name: string,
    },
    location: ILocation,
    predecesors: IDependency[],
    assignedResources: IResource[]
}

export const defaultLocationState:ILocation = {
    isMoving: false,
    lastLocation: 0,
    diff: 0,
    lastDiff: 0,

    isChangingWidth: false,
    lastWidth: 100,
    deltaWidth: 100
};

export interface ISliderActions {
    slider: ILocation,
    setSlider: (action: React.SetStateAction<ILocation>) => void,
};

export interface ILocation {
    isMoving: boolean,
    lastLocation: number
    diff: number,
    lastDiff: number,

    isChangingWidth: boolean,
    lastWidth: number,
    deltaWidth: number
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