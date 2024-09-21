import LeftSideBar from './LeftSideBar'
import Canvas from './Canvas'
import StylePanel from './StylePanel'
import {InitialElementData} from "../data";

type DesignerProps = {
    data: InitialElementData[]
}
export function Designer ({data}: DesignerProps) {
    // I will do things with the data props
    return (
        <>
            <LeftSideBar />
            <Canvas />
            <StylePanel />
        </>
    )
}
