import {TaskItem} from "../taskItem/TaskItem.tsx";
import {useTasks} from "../../bll/useTasks.ts";

import s from './TasksList.module.css'

type Props = {
    selectedTaskId: string | null
    onTaskSelected: (taskId: string | null, id: string | null) => void
}

export const TasksList = (props: Props) => {
    const {selectedTaskId, onTaskSelected} = props

    const {tasks} = useTasks()

    if (tasks == null) {
        return <p>Загрузка...</p>
    }

    if (tasks?.length === 0) {
        return <p>Задачи отсутствуют...</p>
    }

    return (
        <ul className={s.tasksList}>
            {tasks?.map(task => <TaskItem isTaskSelected={selectedTaskId === task.id}
                                          onTaskSelected={onTaskSelected} task={task}
                                          key={task.id}/>)}
        </ul>
    );
};

