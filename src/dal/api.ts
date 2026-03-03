export const getTask =
    (boardId: string, selectedTaskId: string): Promise<GetTaskOutput> =>
        fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`,
            {
                headers: {
                    'api-key': '9810f007-057c-46e1-9b68-66fe6cbf1316'
                }
            }).then(res => res.json())

export const getTasks =
    (): Promise<GlobalTaskListResponse> =>
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': '9810f007-057c-46e1-9b68-66fe6cbf1316'
            }
        }).then(res => res.json())

export type GetTaskOutput = {
    data: TaskDetailsData
}

export type TaskDetailsData = {
    id: string
    type: 'tasks'
    attributes: {
        id: string
        title: string
        description: string
        boardId: string
        boardTitle: string
        order: number
        status: number
        priority: number
        startDate: string
        deadline: string
        addedAt: string
        updatedAt: string
        attachments: string[]
    }
}

export type GlobalTaskListResponse = {
    data: Task[]
}

export type Task = {
    id: string
    type: 'tasks'
    attributes: {
        title: string
        boardId: string
        status: number
        priority: number
        addedAt: string
        attachmentsCount: number
    }
}