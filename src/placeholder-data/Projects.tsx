import { useState } from "react";
import { IProject } from "../data-structures/Project"
import { ITask } from "../data-structures/Task";

// UTILITIES

export interface IAPI_Response{
    statusOK: boolean,
    JSON_response: string,
};

const simulateLoad = async () => {
    setTimeout(()=> console.log('fetching'),400);
}

// INITIALIZED CACHE (replace with redis cache?)

let API_projectList:IProject[] = [
{
    Info: {
    id: 1,
    name: 'Sample project',
    description: 'Auto generated project used as ilustrative sample!'
    },
    Tasks: []
},
{
    Info: {
    id: 2,
    name: 'Another project ',
    description: 'Auto generated project used as ilustrative sample!'
    },
    Tasks: [{
        TaskInfo: {id: 1, orderId: 1, name: 'placeholder task'},
        predecesors: [],
        assignedResources: []
    }]
},
{
    Info: {
    id: 3,
    name: 'And one more ',
    description: 'Auto generated project used as ilustrative sample!'
    },
    Tasks: []
}
];

// ENDPOINTS

export const API_GetProjects = async () : Promise<IAPI_Response> => {
    await simulateLoad();

    var list = API_projectList;
    var response: IAPI_Response = {
        statusOK: true,
        JSON_response: JSON.stringify(list),
    };

    return response;
}

export const API_NewProject = async (project: IProject) : Promise<IAPI_Response> => {
    await simulateLoad();

    var currentList = API_projectList;
    var lastId = currentList[currentList.length-1].Info.id;
    var newId = lastId++;
    project.Info.id = newId;

    currentList.push(project);

    let response: IAPI_Response = {
        statusOK: true,
        JSON_response: JSON.stringify(currentList)
    };
    return response;
}

export const API_UpdateProject = async (project: IProject) : Promise<IAPI_Response> => {
    await simulateLoad();

    var currentList = API_projectList;
    var findingProject = currentList.filter(x=>x.Info.id == project.Info.id);

    if(findingProject.length != 0)
    {
        findingProject[0] = project;
        API_projectList = findingProject;

        let response: IAPI_Response = {
            statusOK: true,
            JSON_response: ""
        };
        return response;
    }

    let response: IAPI_Response = {
        statusOK: false,
        JSON_response: ""
    };
    return response;
}

export const API_NewTask = async (task: ITask, projectId: number) : Promise<IAPI_Response> => {
    await simulateLoad();
    let list = API_projectList;
    list.find(x=>x.Info.id == projectId)?.Tasks.push(task);
    API_projectList = list;
    var response: IAPI_Response = {
        statusOK: true,
        JSON_response: ""
    };
    return response;
};

export const API_Updatetask = async (task: ITask, projectId: number) : Promise<IAPI_Response> => {
    await simulateLoad();
    let list = API_projectList;
    list.find(x=>x.Info.id == projectId)?.Tasks.forEach(loopyTask => {
        if(task.TaskInfo.id == task.TaskInfo.id)
        {
            loopyTask = task;
        };
    })

    API_projectList = list;
    var response: IAPI_Response = {
        statusOK: true,
        JSON_response: ""
    }
    return response;
}
