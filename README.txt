MDB 5 React

Version: FREE 7.2.0

Documentation:
https://mdbootstrap.com/docs/b5/react/

Installation:
https://mdbootstrap.com/docs/b5/react/getting-started/installation/

CLI & hosting:
https://mdbootstrap.com/docs/standard/cli/

Support:
https://mdbootstrap.com/support/cat/react/
/* <MDBContainer fluid>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='text-center'>
          <img
            className='mb-4'
            src='https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'
            style={{ width: 250, height: 90 }}
          />
          <h5 className='mb-3'>
            Thank you for using our product. We're glad you're with us.
          </h5>
          <p className='mb-3'>MDB Team</p>
          <MDBBtn
            tag='a'
            href='https://mdbootstrap.com/docs/standard/getting-started/'
            target='_blank'
            role='button'
          >
            Start MDB tutorial
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>*/

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <NavLink to="/"><img src="public\img\logo\logo.png" alt="" /></NavLink>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navlinks justify-content-end">
            <HashLink to="/#Home">Home</HashLink>
            <HashLink to="/#About">About</HashLink>
            
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated              </NavDropdown.Item>
            </NavDropdown>
            <HashLink to="/#Privacy">Privacy</HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <img src="/img/logo/logo.png" alt="bassant" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navlinks justify-content-end">
                            <HashLink to="/#latest">Latest Builds</HashLink>
                            <HashLink to="/#process">Process</HashLink>
                            <HashLink to="/#service">Services</HashLink>
                            <HashLink to="/#contact">Contact Us</HashLink>
                            <NavLink to="/Projects">Projects</NavLink>
                        </Nav>
                    </Navbar.Collapse>


                    