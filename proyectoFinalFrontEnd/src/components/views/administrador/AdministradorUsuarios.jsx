import { Table, Container, Button, Row, Col } from "react-bootstrap";

const AdministradorUsuarios = () => {
    return (
        <Container>
      <h1 className="display-5">Lista de usuarios</h1>
      <div className="my-2">
      <Button variant="primary">Agregar</Button>
      </div>
      <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Emanuel</td>
            <td>Perez</td>
            <td>
              emanuelp@gmail.com
            </td>
            <td>Administrador</td>
            <td>
              <Row>
                <Col md={6}><Button variant="warning">Editar</Button></Col>
                <Col md={6}><Button variant="danger">Eliminar</Button></Col>
              </Row>
            </td>
          </tr>
          
        </tbody>
      </Table>
    </Container>
    );
};

export default AdministradorUsuarios;