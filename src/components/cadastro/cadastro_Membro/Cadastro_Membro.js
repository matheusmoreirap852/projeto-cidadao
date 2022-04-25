import React, { Component } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import './css_Membro/estilo_membro.css';
import MenuIcon from '@material-ui/icons/Menu';
import CopyrightIcon from '@material-ui/icons/Copyright';
import IconCpf from '@material-ui/icons/PermIdentity';
import IconeName from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import IconeEmail from '@material-ui/icons/Email';
import IconePhone from '@material-ui/icons/PhoneAndroid';
import IconeSenha from '@material-ui/icons/LockOpen';
import IconeConSenha from '@material-ui/icons/Lock';
import logo from './drawble_membro/Logo.png'
import logo_cadastro_MEM from './drawble_membro/icone_cad_membro.png'
import TermoUso from './termodeuso/central-cidada-termos-de-uso.pdf';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Cadastro_Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            nome_MEM : '',
            email_MEM: '',
            senha_MEM: '',
            fone_MEM : '',
            consenha_MEM: '',
            cep_MEM: '',
            bairro_MEM: '',
            logradouro_MEM: '',
            complemento_MEM: '',
            clicked: false

        }

        

    }



    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value }
        );

    inicio() {
        this.props.history.push('/');
    }

    acendericone(i, inb) {
        document.getElementById(i).style.color = "#061C99";
        document.getElementById(inb).style.borderColor = "#061C99";

    }

    apagaricone(i, inb) {
        document.getElementById(i).style.color = "#aaa";
        document.getElementById(inb).style.borderColor = "#aaa";

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
                                <NavLink onClick={(e) => { this.inicio() }}  className=" sap flex-center">Inicio</NavLink>
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

                            <Form className="col-xs-12 col-md-12 col-sm-12 formdp">


                                <FormGroup className="  col-xs-12 col-md-12 col-sm-12 col-lg-12" >

                                    {/* ICONE DO FORMULARIO DE CADASTRO */}
                                    <div className="container flex-center col-xs-12 col-md-12 col-sm-12 col-lg-12"  >

                                        <img src={logo_cadastro_MEM} id="icone_MEM"></img>


                                    </div>

                                    <Label><b>Dados Pessoais-Membro</b></Label>

                                </FormGroup>


                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >

                                        {/* CAMPO DE TEXTO NOME_MEMBRO */}
                                        <TextField
                                            required
                                            id="nome_MEM"
                                            name="nome_MEM"
                                            value={this.state.nome_MEM}
                                            onChange={this.onChange}
                                            placeholder="Digite seu Nome"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeName id="iconenome" />
                                                    </InputAdornment>
                                                ),
                                            }}

                                            onFocus={() => this.acendericone("iconenome", "nome_MEM")}
                                            onBlur={() => this.apagaricone("iconenome", "nome_MEM")}
                                        />
                                    </Grid>
                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >

                                        {/* CAMPO DE TEXTO EMAIL_MEMBRO */}
                                        <TextField
                                            required
                                            id="email_MEM"
                                            type="email"
                                            name="email_MEM"
                                            value={this.state.email_MEM}
                                            onChange={this.onChange}
                                            placeholder="Digite seu E-mail"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeEmail id="iconeemail" />
                                                    </InputAdornment>
                                                ),
                                            }}

                                            onFocus={() => this.acendericone("iconeemail", "email_MEM")}
                                            onBlur={() => this.apagaricone("iconeemail", "email_MEM")}
                                        />
                                    </Grid>
                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >
                                        <Grid item className=" form-group3" xs={12} md={5} lg={5}>
                                            {/* CAMPO DE TEXTO CPF */}
                                            <TextField
                                                required
                                                id="cpf_MEM"
                                                name="cpf"
                                                value={this.state.cpf}
                                                onChange={this.onChange}
                                                placeholder="Digite seu CPF"
                                                className="wid"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <IconCpf id="iconecpf" />
                                                        </InputAdornment>
                                                    ),
                                                }}

                                                onFocus={() => this.acendericone("iconecpf", "cpf_MEM")}
                                                onBlur={() => this.apagaricone("iconecpf", "cpf_MEM")}
                                            />
                                        </Grid>
                                        <Grid item xs={0} md={1} lg={1}></Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            {/* CAMPO DE TEXTO CPF */}
                                            <TextField
                                                required
                                                id="fone_membro"
                                                name="fone_MEM"
                                                value={this.state.fone_MEM}
                                                onChange={this.onChange}
                                                placeholder="Numero de Contato"
                                                className="wid"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <IconePhone id="iconeFONE" />
                                                        </InputAdornment>
                                                    ),
                                                }}

                                                onFocus={() => this.acendericone("iconeFONE", "fone_membro")}
                                                onBlur={() => this.apagaricone("iconeFONE", "fone_membro")}
                                            />
                                        </Grid>
                                    </Grid>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >

                                        {/* CAMPO DE TEXTO Senha_MEMBRO */}
                                        <TextField
                                            required
                                            id="senha_MEM"
                                            type="password"
                                            name="senha_MEM"
                                            value={this.state.senha_MEM}
                                            onChange={this.onChange}
                                            placeholder="Digite sua senha"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeSenha id="iconesenha" />
                                                    </InputAdornment>
                                                ),
                                            }}

                                            onFocus={() => this.acendericone("iconesenha", "senha_MEM")}
                                            onBlur={() => this.apagaricone("iconesenha", "senha_MEM")}
                                        />
                                    </Grid>
                                </FormGroup>


                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >

                                        {/* CAMPO DE TEXTO Confirma Senha_MEMBRO */}
                                        <TextField
                                            required
                                            id="consenha_MEM"
                                            type="password"
                                            name="consenha_MEM"
                                            value={this.state.consenha_MEM}
                                            onChange={this.onChange}
                                            placeholder="Confirme sua senha"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconeConSenha id="iconeconsenha" />
                                                    </InputAdornment>
                                                ),
                                            }}

                                            onFocus={() => this.acendericone("iconeconsenha", "consenha_MEM")}
                                            onBlur={() => this.apagaricone("iconeconsenha", "consenha_MEM")}
                                        />
                                    </Grid>
                                </FormGroup>




                                <FormGroup className="  col-xs-12 col-md-12 col-sm-12 col-lg-12" >

                                    <Label><b>Dados De Endereço-Membro</b></Label>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >
                                        <Grid className=" form-group3" item xs={12} md={5} lg={5}>
                                            {/* CAMPO DE TEXTO Cep */}
                                            <TextField
                                                required
                                                id="cep_MEM"
                                                name="cep_MEM"
                                                value={this.state.cep_MEM}
                                                onChange={this.onChange}
                                                placeholder="Digite O CEP"
                                                className="wid"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            < HomeIcon id="iconeCEP" />
                                                        </InputAdornment>
                                                    ),
                                                }}

                                                onFocus={() => this.acendericone("iconeCEP", "cep_MEM")}
                                                onBlur={() => this.apagaricone("iconeCEP", "cep_MEM")}
                                            />
                                        </Grid>
                                        <Grid item xs={0} md={1} lg={1}></Grid>
                                        <Grid item xs={12} md={6} lg={6}>
                                            {/* CAMPO DE TEXTO BAIRRO */}
                                            <TextField
                                                required
                                                id="bairro_membro"
                                                name="bairro_MEM"
                                                value={this.state.bairro_MEM}
                                                onChange={this.onChange}
                                                placeholder="Digite seu Bairro"
                                                className="wid"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <HomeWorkIcon id="iconeBAIRRO" />
                                                        </InputAdornment>
                                                    ),
                                                }}

                                                onFocus={() => this.acendericone("iconeBAIRRO", "bairro_membro")}
                                                onBlur={() => this.apagaricone("iconeBAIRRO", "bairro_membro")}
                                            />
                                        </Grid>
                                    </Grid>

                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >

                                        {/* CAMPO DE TEXTO Lougradouro_MEMBRO */}
                                        <TextField
                                            required
                                            id="logradouro_MEM"
                                            name="logradouro_MEM"
                                            value={this.state.logradouro_MEM}
                                            onChange={this.onChange}
                                            placeholder="Digite o logradouro"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmojiTransportationIcon id="iconelogrdouro" />
                                                    </InputAdornment>
                                                ),
                                            }}

                                            onFocus={() => this.acendericone("iconelogrdouro", "logradouro_MEM")}
                                            onBlur={() => this.apagaricone("iconelogrdouro", "logradouro_MEM")}
                                        />
                                    </Grid>
                                </FormGroup>

                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Grid container >

                                        {/* CAMPO DE TEXTO Lougradouro_MEMBRO */}
                                        <TextField
                                            required
                                            id="complemento_MEM"
                                            name="complemento_MEM"
                                            value={this.state.complemento_MEM}
                                            onChange={this.onChange}
                                            placeholder="Digite o complemento"
                                            className="wid"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LocationCityIcon id="iconecomplemnto" />
                                                    </InputAdornment>
                                                ),
                                            }}

                                            onFocus={() => this.acendericone("iconecomplemnto", "complemento_MEM")}
                                            onBlur={() => this.apagaricone("iconecomplemnto", "complemento_MEM")}
                                        />
                                    </Grid>
                                </FormGroup>


                                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >

                                    <Label>  <Input type="checkbox" /> LI E CONCORDO COM <a href={TermoUso} download="Termo De Uso Central Cidadã">TERMO DE USO</a></Label>


                                </FormGroup>



                                <FormGroup className="col-xs-12 col-md-12 col-sm-12 col-lg-12 col-xl-12" >

                                    <Button

                                        className="btn"
                                    >
                                        Cadastrar
                                </Button>

                                </FormGroup>

                            </Form>
                        </div>
                    </div>
                </div>
                <div className="space-between RODAPE">
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
export default Cadastro_Membro;