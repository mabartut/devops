import {useEffect, useState} from "react";
import {getTasks, type Task} from "../dal/api.ts";

export const useTasks = () => {

    const [tasks, setTasks] = useState<Task[] | null>(null)

    useEffect(() => {
        getTasks()
            .then(json => {
                setTasks(json.data)
            })
    }, [])

    return {tasks}
}