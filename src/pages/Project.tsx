import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IProject } from '../data-structures/Project';
import { openProjectAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';
import SliderContainer from '../components/SliderContainer';
import NewTaskModal from '../components/NewTaskModal';

const Project = () => {
    const { id } = useParams();
    const projectId:number = parseInt(id == undefined ? "0" : id);
    const dispatch = useDispatch();
    const projectList: IProject[] = useSelector((state:IAppState)=> state.projects.projects);
    const thisProject: IProject | null = useSelector((state:IAppState)=> state.projects.viewing);
    const newTaskModal:boolean = useSelector((state: IAppState) => state.projects.showNewTaskModal);

    const renderTasks = () => {
        let newThisProject = projectList.find(x=>x.Info.id == projectId);
        console.log('this project', newThisProject)
        if(newThisProject != undefined)
        {
            dispatch(openProjectAction(newThisProject));
        } 
    };

    useEffect(() => {
        renderTasks();
        console.log('this project',thisProject)
    }, []);
    
  return (
    <div>
        {
            newTaskModal == true
            ? <NewTaskModal></NewTaskModal>
            : ''
        }
        <div
            style={{
                filter: newTaskModal == true ? 'blur(10px)' : 'blur(0px)',
                pointerEvents: newTaskModal == true ? 'none' : 'all',
                transition: '0.5s ease-in-out'
            }}
        >
            {
                <SliderContainer></SliderContainer>
            }
        </div>
        
    </div>
  );
};


const mapStateToProps = (state: IAppState) =>({
    currentlyViewing: state.projects.viewing
})
export default connect(mapStateToProps)(Project)
