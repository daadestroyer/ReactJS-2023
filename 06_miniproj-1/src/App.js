/* eslint-disable jsx-a11y/anchor-is-valid */
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import AddCourses from "./Components/AddCourses";
import AllCourses from "./Components/AllCourses";
import Contacts from "./Components/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Row className="mt-5" > 
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8} >
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/add-courses" element={<AddCourses />} />
                <Route exact path="/all-courses" element={<AllCourses />} />
                <Route exact path="/contacts-us" element={<Contacts />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
