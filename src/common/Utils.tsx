import { Nav } from "react-bootstrap";
import styles from "../styles/Utils.module.css"

export function navTab(currentTab: string) {
    return(
    <Nav className={styles.nav} variant="pills" defaultActiveKey={currentTab}>
        <Nav.Item>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/stats">Statistics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/account">Account</Nav.Link>
        </Nav.Item>
    </Nav>
    );
}