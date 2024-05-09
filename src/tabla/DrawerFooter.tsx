import {Button, Row, Col} from "antd"

const DrawerFooter = () => {
    return(
        <>
        <Row justify="space-between">
        <Col>
        <Button type= "primary">Guardar</Button> 
        </Col>
        <Col>
        <Button type= "default">Cancelar</Button> 
        </Col>
        </Row>

        </>
    )
}
export default DrawerFooter;