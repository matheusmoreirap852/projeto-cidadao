import React, { Component} from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import logo from './drawble_bemvindo/Logo.png';
import icon from './drawble_bemvindo/icon.png';
import { Button } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import './css_bemvindo/estilo_bemvindo.css'
import MenuIcon from '@material-ui/icons/Menu';
import layout from './drawble_bemvindo/welcome2.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class bemvindo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }






    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (

            <div style={{ backgroundImage: `url(${layout})` }} id="container_adm" className=" col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 container" >
                <Navbar className="space-between nav_all" expand="lg" >
                    <NavbarBrand className="my-0 mr-md-auto ">

                        <img style={{ width: "120px" }} id="logo_adm" src={logo}/>

                    </NavbarBrand>
                    <NavbarToggler id="tol_adm" onClick={this.handleclick} className="mr-2" ><MenuIcon /></NavbarToggler>
                    <Collapse isOpen={this.state.clicked} navbar className="navlink_all" >
                        <Nav navbar >
                            <NavItem >
                                <NavLink  className=" sap flex-center">Sou um Administrador</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className=" sap flex-center" >Acessar</NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
                <Grid container>
                    <Grid className="flex-center" item xs={12} md={6} ><img src={icon} id="icon_bemvindo"></img></Grid>
                    <Grid item xs={12} md={6} className="re ">
                        <div className="mm">
                            <h1 style={{ fontSize: "30px", color: "white" }}><b>BEM VINDO À CENTRAL CIDADÃ</b></h1>

                            <p style={{ fontSize: "16px", color: "white" }}><b>Nesta plataforma,você usuário terá o direito de fazer reclamações sobre problemas em seu bairro,envolvendo infraestrura,buracos na rua,entre outros problemas urbanos.</b></p>

                            <p style={{ fontSize: "16px", color: "white" }} ><b>Para iniciar basta clicar na opção abaixo:</b></p>

                           <Grid>
                                <Grid item xs={12}>
                                <Button className="btn_acessar">Acessar o Sistema </Button>
                                </Grid>
                                <Grid item xs={12} >
                                <Button className="btn_cadastre">Cadastre-se </Button>
                                </Grid>

                           </Grid>
                           
                            

                        </div>
                    </Grid>
                </Grid>


                <div className="space-between RODAPE" >
                    <nav >
                        <div className="container">
                            <p></p>
                            <p style={{ fontSize: "16px" }} className=""><CopyrightIcon />2020-2021-Central Cidadã |Todos os Direitos Reservados <br></br> É proibido a reprodução total ou parcil de qualquer conteúdo deste site.</p>
                            <p></p>
                        </div >
                    </nav>
                </div>

            </div>


        );
    }
}

export default bemvindo;