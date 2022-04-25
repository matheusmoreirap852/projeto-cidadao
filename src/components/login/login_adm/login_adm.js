import { Container, Icon, Grid, TextField } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import React, { Component, useState } from 'react';
import IconCpf from '@material-ui/icons/PermIdentity';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import logoAdm from "./desenho/Logo.png"
import iconAdm from "./desenho/IconAdmLogin.png"
import './login_adm_css/login_adm.css'
import IconeConSenha from '@material-ui/icons/Lock';


class AddFuncionario extends Component {

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

        < div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12" id="hz1" >
          {/*Essa div faz a resposividade */}
          <div className="container col-11 col-md-8 col-sm-11 col-lg-6 col-xl-6" id="cadastro_adm" >
            {/*Essa div faz com que todos os elementos dela fique em linha  */}
            <div className="row">
              {/*****************  Formulario *******************************************************/}
              <Form className="form-login">

                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                  {/****************************** Imagem adm  ***************************************/}
                  <img src={iconAdm} id="icon_loginAdm"></img>
                </div>
                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                  {/************************** Texto  ***********************************************/}
                  <Label className="Label_login"><b>Login Adiminstrador</b></Label>
                </div>
                {/**********************************  TEXT FIELD CPF ***************************************/}
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

                {/**********************************  TEXT FIELD SENHA ***************************************/}

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
      </div>

    );
  }
}
export default AddFuncionario