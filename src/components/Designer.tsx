import LeftSideBar from './LeftSideBar'
import Canvas from './Canvas'
import StylePanel from './StylePanel'
import type {elementData} from "../data";
import './designer.css'

type DesignerProps = {
    data: elementData[]
}
export function Designer ({data}: DesignerProps) {
    // I will do things with the data props
    return (
        <div className="designer">
            <LeftSideBar />
            <Canvas />
            <StylePanel />
        </div>
    )
}
