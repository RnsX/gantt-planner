import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProject } from '../data-structures/Project';
import { defaultLocationState, ITask } from '../data-structures/Task';
import { gotProjectsAction, toggleNewProjectModalAction, toggleNewTaskModalAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';

const NewTaskModal = () => {

    const dispatch = useDispatch();
    const viewing: IProject | null = useSelector((state: IAppState) => state.projects.viewing);
    const projectList: IProject[] = useSelector((state: IAppState) => state.projects.projects);

    const closeModal = () => {
        dispatch(toggleNewTaskModalAction());
    };

    const newTask = () => {
        if(viewing != null)
        {
            let newTaskList = viewing.Tasks;
            let newTask:ITask = {
                TaskInfo: {
                    id: 0,
                    orderId: 0,
                    name: ''
                },
                location: defaultLocationState,
                predecesors: [],
                assignedResources: []
            };

            // create new task list
            newTask.TaskInfo = taskInfo;
            newTaskList.push(newTask);

            // assign new task id
            let task = projectList.filter(x=>x.Info.id == viewing.Info.id)[0].Tasks;
            let newTaskId = task.length;
            newTask.TaskInfo.id = newTaskId;

            // create new project list
            let newProjectList = projectList;

            newProjectList.filter(x=>x.Info.id == viewing.Info.id)[0].Tasks = newTaskList;

            // update project list with new list which contains new task list
            dispatch(gotProjectsAction(newProjectList));
            dispatch(toggleNewTaskModalAction());
        }
    }
    const [taskInfo, setTaskInfo] = useState({
        id: 0,
        orderId: 0,
        name: ''
    });

    const updateTaskInfo = (input:string, value: string) => {
        setTaskInfo({...taskInfo, [input]:value});
    }

  return (
    <div style={{
        width: '350px',
        minHeight: '300px',
        border: '1px solid lightgray',
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1em',
        padding: '1.5em',
        WebkitBoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.34)',
        boxShadow: '0px 0px 19px 0px rgba(0,0,0,0.34)'
    }}>
        <button onClick={closeModal} className='btn btn-danger btn-sm' style={{width: 'fit-content', position: 'absolute', right: '0', marginRight: '1.7em'}}>X</button>
        <label className='form-label' style={{marginTop: '1em'}}>Name</label>
        <input name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>) => updateTaskInfo(e.target.name, e.target.value)} className='form-control' value={taskInfo.name}></input>
        {/* Add new resource (with rendered resource list) */}
        {/* Add new dependency (with rendered dependency list) */}
        <button onClick={newTask} className='btn btn-outline-success btn-sm' style={{width: '100%', marginTop: '1em'}}>Create</button>
    </div>
  )
};

export default NewTaskModal;
