import {createRoot} from 'react-dom/client'
import {MainPage} from "./ui/mainPage/MainPage.tsx"

import './index.css'

createRoot(document.getElementById("root")!).render(<MainPage/>)