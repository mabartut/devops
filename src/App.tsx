import './App.css'
import {useEffect, useState} from "react"

type Task = {
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
type TaskDetails = {
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

export const App = () => {
    const [id, setId] = useState<string | null>(null)
    const [tasks, setTasks] = useState<Task[] | null>(null)
    const [taskDetails, setTaskDetails] = useState<TaskDetails | null>(null)

    useEffect(() => {
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': '9810f007-057c-46e1-9b68-66fe6cbf1316'
            }
        }).then(res => res.json()).then(json => {
            setTasks(json.data)
        })

        // const fetchData = async () => {
        //
        //     try {
        //         const data = await fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        //             headers: {
        //                 'api-key': '9810f007-057c-46e1-9b68-66fe6cbf1316'
        //             }
        //         })
        //         const result = await data.json()
        //         console.log(result)
        //         setTasks(result.data)
        //     } catch (err) {
        //         console.log(err)
        //     }
        // }
        // fetchData()

    }, [])

    if (tasks == null) {
        return <p>Загрузка...</p>
    }

    if (tasks?.length === 0) {
        return <p>Задачи отсутствуют...</p>
    }

    const handleTaskClick = (task: Task) => {
        setId(task.id)
        setTaskDetails(null)
        fetch(`https://trelly.it-incubator.app/api/1.0/boards/${task.attributes.boardId}/tasks/${task.id}`, {
            headers: {
                'api-key': '9810f007-057c-46e1-9b68-66fe6cbf1316'
            }
        }).then(res => res.json()).then(json => {
            setTaskDetails(json.data)
        })
    }

    const handleClearButton = () => {
        setId(null)
        setTaskDetails(null)
    }

    return (
        <>
            <InputTitle/>
            <h1>Список задач</h1>
            <button onClick={handleClearButton}>Сбросить выделение</button>
            <div style={{display: 'flex', gap: 30, paddingTop: 10}}>
                <ul style={{padding: '0', margin: '0'}}>
                    {tasks?.map(el => {
                        let backgroundColor: string

                        switch (el.attributes.priority) {
                            case 0:
                                backgroundColor = '#ffffff' // Низкий
                                break
                            case 1:
                                backgroundColor = '#ffd7b5' // Средний
                                break
                            case 2:
                                backgroundColor = '#ffb38a' // Высокий
                                break
                            case 3:
                                backgroundColor = '#ff9248' // Срочный
                                break
                            case 4:
                                backgroundColor = '#ff6700' // Наивысший
                                break
                            default:
                                backgroundColor = '#cccccc' // Цвет по умолчанию
                        }

                        return (
                            <li key={el.id}
                                onClick={() => handleTaskClick(el)}
                                style={{
                                    listStyle: 'none',
                                    textAlign: 'left',
                                    border: `3px solid ${el.id === id ? 'blue' : 'red'}`,
                                    marginBottom: '5px',
                                    backgroundColor,
                                }}>
                                <p>
                                    <b>Заголовок:</b>
                                    <span
                                        style={{textDecoration: el.attributes.status === 2 ? 'line-through' : ''}}>
                                        {el.attributes.title}
                                    </span>
                                </p>
                                <p>
                                    <b>Статус: </b>
                                    <input type="checkbox" checked={el.attributes.status === 2}/>
                                </p>
                                <p>
                                    <b>Дата создания задачи: </b> {new Date(el.attributes.addedAt).toLocaleString()}
                                </p>
                            </li>
                        )
                    })}
                </ul>

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
                        : <p>{id ? 'Loading...' : 'Task is not selected'}</p>}
                </div>
            </div>
        </>
    )
}


export function InputTitle() {
    const [text, setText] = useState("")
    useEffect(() => {
        document.title = text
    }, [text]);

    console.log(12345)

    return <>
        <input value={text} placeholder="Введите текст" onChange={e => setText(e.target.value)}/>
    </>
}