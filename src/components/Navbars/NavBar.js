import React from "react";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

const dataServices = [{
  name: 'Analytics',
  id: 'data-analytics'
}, {
  name: 'Governance',
  id: 'data-governance'
}, {
  name: 'Integration',
  id: 'data-integration'
}, {
  name: 'Science',
  id: 'data-science'
}];

const uiServices = [{
  name: 'Web Design and Development'
}, {
  name: 'Mobile Development'
}]

const services = [...dataServices, ...uiServices];

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <div style={{ color: 'white' }}>
              OREOCHIP
            </div>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <UncontrolledDropdown className="button-dropdown">
                  <DropdownToggle
                      caret
                      data-toggle="dropdown"
                      href="#pablo"
                      id="navbarDropdown"
                      tag="a"
                      onClick={e => e.preventDefault()}
                  >
                    <NavLink
                        target="_blank"
                        id="twitter-tooltip"
                    >
                      <i className="fab fa-servicestack"/>
                      <p>Services</p>
                    </NavLink>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="navbarDropdown">
                    <DropdownItem header tag="a">
                      Data Services
                    </DropdownItem>
                    {dataServices.map(({ name, id }, index) =>
                        <DropdownItem key={id} onClick={e => e.preventDefault()}>
                          {name}
                        </DropdownItem>
                    )}
                    <DropdownItem divider />
                    <DropdownItem header tag="a">
                      Dashboard Services
                    </DropdownItem>
                    {uiServices.map(({ name, id }, index) =>
                        <DropdownItem key={id} onClick={e => e.preventDefault()}>
                          {name}
                        </DropdownItem>
                    )}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fas fa-hands-helping" style={{fontSize: '12px', paddingRight: 5}} />
                  <p>About Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="far fa-id-card" style={{fontSize: '12px', paddingRight: 5}} />
                  <p>Contact Us</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
