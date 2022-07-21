import "./styles.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HELP R.O.K</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Main</Nav.Link>
              <Nav.Link href="#memo">Memo</Nav.Link>
              <Nav.Link href="#wish">Wish</Nav.Link>
              <Nav.Link href="#qa">Q & A</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 메인 페이지 */}
      {/* 메모 페이지 */}
      {/* 위로의 명언 모음 페이지 */}
      {/* 질문(커뮤니케이션) 페아지 */}
      {/* 신고와 상담 연결 페이지 */}
    </div>
  );
}
