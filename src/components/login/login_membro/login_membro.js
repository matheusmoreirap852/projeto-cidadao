import { Container, Icon, Button, Grid, TextField } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import React, { Component, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconCpf from '@material-ui/icons/PermIdentity';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import logo from "./desenho/Logo.png"
import iconLogin from "./desenho/iconMembroLogin.png"
import './login_membro_css/membro.css';
import IconeConSenha from '@material-ui/icons/Lock';
import ApiService from "../../ApiService/Api";

class Login_membro extends Component {

  acendericone(i, inb) {
    document.getElementById(i).style.color = "#061C99";
    document.getElementById(inb).style.borderColor = "#061C99";

  }

  apagaricone(i, inb) {
    document.getElementById(i).style.color = "#aaa";
    document.getElementById(inb).style.borderColor = "#aaa";
  }

  async componentDidMount(){

  }

  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      senha: ''
    }
  }


  loginM = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    let user = { cpf: document.getElementById("loginCPF").value, senha: document.getElementById("loginSenha").value };
    ApiService.loginMembro(user).then(res => {
      window.localStorage.setItem('token', res.data);
      alert("Pai ta on");
    })
      .catch(err => {
        alert('Não foi possível salvar o produto');
      });

  }



  // loginMembro() {
  //   let membro = {email: document.getElementById("cpf_login").value, senha:document.getElementById("senha_login").value }
  //   ApiService.loginMembro(membro)
  //
  // }

  

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

        < div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 hz1"  >
          {/*Essa div faz a resposividade */}
          <div className="container  col-md-6 col-sm-12 col-lg-4 col-xl-4 login_layout"  >
            {/*Essa div faz com que todos os elementos dela fique em linha  */}
            <div className="row">
              {/* *********************  Formulario  ********************** */}

              <Form className="form-login">
                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                  <img src={iconLogin} id="icon_login"></img>
                </div>
                <div className=" flex-center">
                  <Label className="Label_login"><b>Login Membro</b></Label>
                </div>
                {/*********************** Text Field CPF  *******************************/}
                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >
                  <Grid container >
                    <TextField
                      id="loginCPF"
                      placeholder="Digite Seu CPF"
                      fullWidth={true}
                      InputProps={{
                        startAdornment: (

                          <IconCpf id="IconCpf" />

                        ),
                      }}
                      onFocus={() => this.acendericone("IconCpf", "loginCPF")}
                      onBlur={() => this.apagaricone("IconCpf", "loginCPF")}
                    />
                  </Grid>
                </FormGroup>
                {/***********************************  PASSAWORD ****************************/}
                <FormGroup className=" form-group col-xs-12 col-md-12 col-sm-12" >
                  <Grid container >
                    <TextField
                      id="loginSenha"
                      type="password"

                      placeholder="Digite Sua Senha"
                      fullWidth={true}
                      InputProps={{
                        startAdornment: (
                          <IconeConSenha id="IconeConSenha" />
                        ),
                      }}
                      onFocus={() => this.acendericone("IconeConSenha", "loginSenha")}
                      onBlur={() => this.apagaricone("IconeConSenha", "loginSenha")}
                    />
                  </Grid>
                </FormGroup>

                <div className="flex-end col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                  <a href="http://localhost:3000/RecuperarSenha" className="login_recuperar_senha mt-1"><i>Esqueceu sua senha</i></a>
                </div>

                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                  <Button id="button_login" outline color="primary">Acessar</Button>
                </div>
                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                  <p id="p_login_ou">OU</p>
                </div>
                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                  <Button id="button_login" className="Button-Criar-Conta" outline color="primary">Cria conta </Button>
                </div>
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
export default Login_membro;