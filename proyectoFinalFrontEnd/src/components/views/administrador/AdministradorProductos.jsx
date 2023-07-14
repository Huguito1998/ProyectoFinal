import { Table, Container, Button, Row, Col } from "react-bootstrap";

const AdministradorProductos = () => {
  return (
    <Container>
      <h1 className="display-4">Productos del menú</h1>
      <div className="my-2">
      <Button variant="primary">Agregar</Button>
      </div>
      <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>URL de Imagen</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Empanadas de carne</td>
            <td>Sabrosas y calentitas, no te las podés perder. Son una excelente elección como entrada para que abra el apetito mientras esperamos lo que viene.</td>
            <td>
              https://images.pexels.com/photos/8280002/pexels-photo-8280002.jpeg
            </td>
            <td>$2500</td>
            <td>Entrada</td>
            <td>
              <Row>
                <Col><Button variant="warning">Editar</Button></Col>
                <Col className="my-2"><Button variant="danger">Eliminar</Button></Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Flan casero</td>
            <td>Con una textura suave y para acompañar con dulce de leche o crema.</td>
            <td> https://images.pexels.com/photos/8280002/pexels-photo-8280002.jpeg</td>
            <td>$2000</td>
            <td>Postre</td>
            <td>
              <Row>
                <Col><Button variant="warning">Editar</Button></Col>
                <Col className="my-2"><Button variant="danger">Eliminar</Button></Col>
              </Row>
            </td>
          </tr>
          
        </tbody>
      </Table>
    </Container>
  );
};

export default AdministradorProductos;
