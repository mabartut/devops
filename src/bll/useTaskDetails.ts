import {useEffect, useState} from "react";
import {getTask, type TaskDetailsData} from "../dal/api.ts";

export const useTaskDetails = (boardId: string | null, selectedTaskId: string | null) => {

    const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null)

    useEffect(() => {
        setTaskDetails(null)
        if (boardId && selectedTaskId) {
            getTask(boardId, selectedTaskId)
                .then(json => {
                    setTaskDetails(json.data)
                })
        }
    }, [boardId, selectedTaskId])

    return {taskDetails}
}