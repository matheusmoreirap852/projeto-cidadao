import React, { Component } from 'react';
import { Button, Form, Label } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';
import './css_adm/estilo_adm.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CopyrightIcon from '@material-ui/icons/Copyright';
import IconeM from '@material-ui/icons/VpnKey';
import IconeS from '@material-ui/icons/LockOpen';
import IconeN from '@material-ui/icons/Assignment';
import IconeCon from '@material-ui/icons/Lock';
import IconeEmail from '@material-ui/icons/Email';
import IconeP from '@material-ui/icons/PhoneAndroid';
import logo from './drawble_adm/Logo.png';
import logo_cadastro_ADM from './drawble_adm/icone_cad_adm.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';






class Cadastro_Adiministrador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matricula: '',
            nome_adm: '',
            email_adm: '',
            senha_adm: '',
            consenha_adm: '',
            fone_adm: '',
            clicked: false

        }

        this.alerta = this.alerta.bind(this);



    }


    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    acendericone(i, inb) {
        document.getElementById(i).style.color = "#061C99";
        document.getElementById(inb).style.borderColor = "#061C99";

    }

    apagaricone(i, inb) {
        document.getElementById(i).style.color = "#aaa";
        document.getElementById(inb).style.borderColor = "#aaa";

    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value }
        );

    inicio() {
        this.props.history.push('/');
    }
    alerta(e) {

        alert(this.state.matricula);
    }

    render() {





        return (


            <div style={{ backgroundColor: "#061C99" }} id="container_adm" className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 container" >

                <Navbar className="space-between nav_all" expand="lg" >
                    <NavbarBrand className="my-0 mr-md-auto font-weight-normal">

                        <img style={{ width: "120px" }} id="logo_adm" src={logo}></img>

                    </NavbarBrand>
                    <NavbarToggler id="tol_adm" onClick={this.handleclick} className="mr-2" ><MenuIcon /></NavbarToggler>
                    <Collapse isOpen={this.state.clicked} navbar className="navlink_all" >
                        <Nav navbar >
                            <NavItem >
                                <NavLink onClick={(e) => { this.inicio() }} className=" sap flex-center">Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className=" sap flex-center" >Login</NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
                
                {/*Essa div e responsavel por centralizar o formulario na tela */}
                <div className="space-between col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 hz1"  >

                    {/*Essa div faz a resposividade */}
                    <div className="container col-12 col-md-8 col-sm-11 col-lg- col-xl-6 cadastro_layout"  >

                        {/*Essa div faz com que todos os elementos dela fique em linha  */}
                        <div className="row">

                            {/* Formulario para obter os dados do ADM */}
                            <Form className=" formdp col-xs-12  col-sm-12 ">


                                {/*FORM GROUP PROPRIEDADE DO REACTSTRAP TAMBEM ENCONTRADA NO REACT NORMAL */}
                                <FormGroup className="col-xs-12 col-md-12 col-sm-12 col-lg-12" >

                                    {/* ICONE DO FORMULARIO DE CADASTRO */}
                                    <div className="container flex-center col-xs-12 col-md-12 col-sm-12 col-lg-12"  >

                                        <img src={logo_cadastro_ADM} id="icone_adm"></img>


                                    </div>

                                    <Label  ><b>Dados do Adimisnistrador</b></Label>

                                </FormGroup >


                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >
                                        {/* CAMPO DE TEXTO MATRICULA */}
                                        <TextField
                                            required
                                            id="matricula"
                                            name="matricula"
                                            value={this.state.matricula}
                                            onChange={this.onChange}
                                            placeholder="Digite a Matricula"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeM id="iconem" />
                                                    </InputAdornment>
                                                ),
                                            }}

                                            onFocus={() => this.acendericone("iconem", "matricula")}
                                            onBlur={() => this.apagaricone("iconem", "matricula")}
                                        />

                                    </Grid>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >
                                        {/* CAMPO DE TEXTO NOME */}
                                        <TextField
                                            id="nomeadm"
                                            value={this.state.nome_adm}
                                            onChange={this.onChange}
                                            name="nome_adm"
                                            placeholder="Digite Seu Nome"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeN id="iconeN" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onFocus={() => this.acendericone("iconeN", "nomeadm")}
                                            onBlur={() => this.apagaricone("iconeN", "nomeadm")}
                                        />

                                    </Grid>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container>

                                        {/* CAMPO DE TEXTO TELEFONE/CELULAR*/}
                                        <TextField

                                            id="foneadm"
                                            name="fone_adm"
                                            placeholder="Numero de Contato"
                                            value={this.state.fone_adm}
                                            onChange={this.onChange}
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeP id="iconeP" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onFocus={() => this.acendericone("iconeP", "foneadm")}
                                            onBlur={() => this.apagaricone("iconeP", "foneadm")}
                                        />

                                    </Grid>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >
                                        {/* CAMPO DE EMAIL  DO ADM */}
                                        <TextField


                                            id="emailadm"
                                            name="email_adm"
                                            value={this.state.email_adm}
                                            onChange={this.onChange}
                                            placeholder="Digite o Email"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeEmail id="iconeem" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onFocus={() => this.acendericone("iconeem", "emailadm")}
                                            onBlur={() => this.apagaricone("iconeem", "emailadm")}
                                        />

                                    </Grid>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container item >
                                        {/* CAMPO DE SENHA DO ADM */}
                                        <TextField


                                            id="senhaadm"
                                            name="senha_adm"
                                            value={this.state.senha_adm}
                                            onChange={this.onChange}
                                            placeholder="Digite a Senha"
                                            type="password"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeS id="iconesenha" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onFocus={() => this.acendericone("iconesenha", "senhaadm")}
                                            onBlur={() => this.apagaricone("iconesenha", "senhaadm")}
                                        />

                                    </Grid>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container item >
                                        {/* CAMPO DE CONFIRMAR SENHA ADM*/}
                                        <TextField


                                            type="password"
                                            name="consenha_adm"
                                            id="consenhaadm"
                                            value={this.state.consenha_adm}
                                            onChange={this.onChange}
                                            placeholder="Confirmar Senha"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeCon id="iconeconsenhaadm" />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onFocus={() => this.acendericone("iconeconsenhaadm", "consenhaadm")}
                                            onBlur={() => this.apagaricone("iconeconsenhaadm", "consenhaadm")}
                                        />

                                    </Grid>

                                </FormGroup>



                                <FormGroup className="col-xs-12 col-md-12 col-sm-12 col-lg-12 col-xl-12" >

                                    <Button
                                        className="btn"
                                        onClick={this.alerta}

                                    >
                                        Cadastrar
                                </Button>

                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>




                <div className="space-between RODAPE" >
                    <nav >
                        <div className="container">
                            <p></p>
                            <p style={{ fontSize: "16px" }} className=""><CopyrightIcon />2020-2021-Central Cidadã |Todos os Direitos Reservados <br></br> É proibido a reprodução total ou parcil de qualquer conteúdo deste site.</p>
                            <p></p>
                        </div >
                    </nav>
                </div>



            </div >


        );
    }
}
export default Cadastro_Adiministrador;