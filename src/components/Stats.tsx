import { navTab } from "../common/Utils"
import styles from "../styles/Stats.module.css"
import common from "../styles/Common.module.css"

export default function Stats() {
    return(
        <>
        <h1 className={common.title}>Website Name</h1>
        {navTab("/stats")}
        </>
    );
}