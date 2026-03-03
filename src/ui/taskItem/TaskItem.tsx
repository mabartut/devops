import clsx from "clsx";
import type {Task} from "../../dal/api.ts";

import s from './TaskItem.module.css'

type Props = {
    task: Task
    isTaskSelected: boolean
    onTaskSelected: (taskId: string | null, id: string | null) => void
}

export const TaskItem = (props: Props) => {
    const {isTaskSelected, task, onTaskSelected} = props

    const taskItem = clsx({
        [s.taskItem]: true,
        [s.isTaskSelected]: isTaskSelected,
        [s.backgroundColor0]: task.attributes.priority === 0,
        [s.backgroundColor1]: task.attributes.priority === 1,
        [s.backgroundColor2]: task.attributes.priority === 2,
        [s.backgroundColor3]: task.attributes.priority === 3,
        [s.backgroundColor4]: task.attributes.priority === 4,
    })

    const title = clsx({
        [s.title]: task.attributes.status === 2
    })

    const handleTaskClick: () => void = () => {
        onTaskSelected(task.id, task.attributes.boardId)
    }

    return (
        <li onClick={handleTaskClick}
            className={taskItem}
            key={task.id}>
            <p>
                <b>Заголовок: </b>
                <span className={title}>
                    {task.attributes.title}
                </span>
            </p>
            <p>
                <b>Статус: </b>
                <input type="checkbox" checked={task.attributes.status === 2}/>
            </p>
            <p>
                <b>Дата создания задачи: </b> {new Date(task.attributes.addedAt).toLocaleString()}
            </p>
        </li>
    )
}