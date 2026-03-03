import {useTaskSelection} from "../../bll/useTaskSelection.ts";
import {PageTitle} from "../PageTitle.tsx";
import {TasksList} from "../tasksList/TasksList.tsx";
import {TaskDetails} from "../taskDetails/TaskDetails.tsx";

import styles from './MainPage.module.css'

export function MainPage() {

    const {selectedTaskId, setSelectedTaskId, boardId, setBoardId} = useTaskSelection();

    const onTaskSelected = (taskId: string | null, id: string | null) => {
        setSelectedTaskId(taskId)
        setBoardId(id)
    }

    const handleClearButton: () => void = () => {
        onTaskSelected(null, null)
    }

    return (
        <div>
            <PageTitle/>
            <button onClick={handleClearButton}>Сбросить выделение</button>
            <br/>
            <br/>
            <div className={styles.wrapper}>
                <TasksList selectedTaskId={selectedTaskId} onTaskSelected={onTaskSelected}/>
                <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId}/>
            </div>
        </div>
    )
}