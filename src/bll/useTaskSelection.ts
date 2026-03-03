import {useState} from "react";

export const useTaskSelection = () => {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [boardId, setBoardId] = useState<string | null>(null);

    return {selectedTaskId, setSelectedTaskId, boardId, setBoardId}
}