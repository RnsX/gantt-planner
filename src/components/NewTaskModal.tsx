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
                    name: '',
                    color: 'white'
                },
                location: defaultLocationState,
                predecesors: [],
                assignedResources: []
            };
            
            // get values from useState form-state
            newTask.TaskInfo = taskInfo;

            // assign new task id
            let task = projectList.filter(x=>x.Info.id == viewing.Info.id)[0].Tasks;
            let newTaskId = task.length+1;
            newTask.TaskInfo.id = newTaskId;

            // assign new order id
            let newOrderId = 0;
            newTaskList.forEach(task => {
                task.TaskInfo.orderId > newOrderId
                ? newOrderId = task.TaskInfo.orderId
                : newOrderId = newOrderId;
            });
            newOrderId = newOrderId+1;
            newTask.TaskInfo.orderId = newOrderId;

            // create new task list
            newTaskList.push(newTask);

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
        name: '',
        color: 'white'
    });
    const updateTaskInfo = (input:string, value: string) => {
        setTaskInfo({...taskInfo, [input]:value});
    }

  return (
      <div>
        <div style={{
            width: '300px',
            maxHeight: 'fit-content',
            border: '1px solid lightgray',
            position: 'absolute',
            zIndex: 999,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '1em',
            padding: '1.5em',
            marginTop: '1em',
            WebkitBoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.34)',
            boxShadow: '0px 0px 19px 0px rgba(0,0,0,0.34)'
        }}>
            <button onClick={closeModal} className='btn btn-danger btn-sm' style={{width: 'fit-content', position: 'absolute', right: '0', marginRight: '1.7em'}}>X</button>
            <label className='form-label' style={{marginTop: '1em'}}>Name</label>
            <input name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>) => updateTaskInfo(e.target.name, e.target.value)} className='form-control' value={taskInfo.name}></input>
            <label className='form-label' style={{marginTop: '1em'}}>Color</label>
            <select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => updateTaskInfo(e.target.name, e.target.value)} name="color" className="form-select" aria-label="Choose color">
                <option selected value="white">White</option>
                <option value="#5264ff">Blue</option>
                <option value="#161616">Black</option>
                <option value="#f07f7f">Red</option>
                <option value="#fff47a">Yellow</option>
            </select>
            
            {/* Add new resource (with rendered resource list) */}
            {/* Add new dependency (with rendered dependency list) */}
            <button onClick={newTask} className='btn btn-outline-success btn-sm' style={{width: '100%', marginTop: '1em'}}>Create</button>
        </div>
      </div>
    
  )
};

export default NewTaskModal;
