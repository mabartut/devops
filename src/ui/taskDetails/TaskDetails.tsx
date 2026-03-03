import {useTaskDetails} from "../../bll/useTaskDetails.ts";

type Props = {
    boardId: string | null
    selectedTaskId: string | null
}

export const TaskDetails = (props: Props) => {
    const {boardId, selectedTaskId} = props

    const {taskDetails} = useTaskDetails(boardId, selectedTaskId)

    return (
        <div>
            <h2>Task details</h2>
            {taskDetails
                ?
                <div>
                    <p>
                        {taskDetails.attributes.title}
                    </p>
                    <p>
                        {taskDetails.attributes.boardTitle}
                    </p>
                    <p>
                        {taskDetails.attributes.description}
                    </p>
                </div>
                :
                <p>{selectedTaskId ? 'Loading...' : 'Task is not selected'}</p>
            }
        </div>
    );
};
