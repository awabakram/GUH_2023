import { navTab } from "../common/Utils"
import styles from "../styles/Dashboard.module.css"
import common from "../styles/Common.module.css"

export default function Dashboard() {
    return(
        <>
        <h1 className={common.title}>Website Name</h1>
        {navTab("/dashboard")}
        </>
    );
}