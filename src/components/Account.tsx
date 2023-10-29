import { navTab } from "../common/Utils"
import styles from "../styles/Account.module.css"
import common from "../styles/Common.module.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Account() {
    return(
        <>
        <h1 className={common.title}>Website Name</h1>
        {navTab("/account")}
        <div className={styles.mainArea}>
        <Form>
            <Form.Group>
                <Form.Label>Parent username</Form.Label>
                <Form.Control type="input" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Children</Form.Label>
                <Form.Select>
                    <option>No children currently added</option>
                </Form.Select>
            </Form.Group>
            <Button>Add Child</Button>
            <Button>Remove Child</Button>
        </Form>
        </div>
        </>
    );
}