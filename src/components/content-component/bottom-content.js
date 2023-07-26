import {Nav} from "react-bootstrap";

function BottomContent() {
    return(
        <div>
            <div className="row">
                <div className="col">

                </div>
                <div className="col">
                    <Nav className=""
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>

        </div>
    )
}

export default BottomContent;