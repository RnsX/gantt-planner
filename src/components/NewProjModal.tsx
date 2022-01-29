import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProject } from '../data-structures/Project';
import { gotProjectsAction, toggleNewProjectModalAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';

const NewProjModal = () => {

    const dispatch = useDispatch();
    const projectList: IProject[] = useSelector((state: IAppState) => state.projects.projects);

    const closeModal = () => {
        dispatch(toggleNewProjectModalAction());
    }
    const createProject = () => {
        let newProjectList = projectList;
        let newProject:IProject = {
            Info: {
                id: 0,
                name: '',
                description: ''
            },
            Tasks: []
        };
        newProject.Info = form;
        newProjectList.push(newProject);
        dispatch(gotProjectsAction(newProjectList));
        dispatch(toggleNewProjectModalAction());
    }

    const [form, setForm] = useState({
        id: 0,
        name: '',
        description: ''
    });

    const updateFormField = (input:string, value: string) => {
        setForm({...form, [input]:value});
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
            <input name="name" onChange={(e:React.ChangeEvent<HTMLInputElement>) => updateFormField(e.target.name, e.target.value)} className='form-control' value={form.name}></input>
            <label className='form-label'>Description</label>
            <textarea name="description" onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => updateFormField(e.target.name, e.target.value)} className='form-control' value={form.description} rows={5}></textarea>
            <button onClick={createProject} className='btn btn-outline-success btn-sm' style={{width: '100%', marginTop: '1em'}}>Create</button>
        </div>
    )
};

export default NewProjModal;
