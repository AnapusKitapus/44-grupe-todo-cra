import style from './Main.module.css';
import {BsThreeDots} from 'react-icons/bs';

export function Column({title, tasks}) {
    const taskList = [];
    for (const id of tasks) {
        taskList.push(<div className={style.card}>TASK {id}</div>);
    }
    
    return (
        <div className={style.column}>
            <div className={style.columnHeader}>
                <p>{title} ({tasks.length})</p>
                <BsThreeDots />
                <div className={style.cardList}>
                    {tasks.map(id => <div className={style.card}>TASK {id}</div>)}
                </div>
                <div className={style.addTask}>
                    ADD TASK
                </div>
            </div>
        </div>
    );
}