import { Container, Icon, TextField, Grid } from '@material-ui/core';
import React, { Component, useState } from 'react';
import logoLogin from "./desenho/Logo.png"
import iconLogin from "./desenho/iconMembroLogin.png"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import IconCpf from '@material-ui/icons/PermIdentity';


class Recuperar_Senha extends Component {


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
                            {/* *********************  Formulario  ********************** */}


                            <Form className="form-login">
                                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                                    <Label className="Label_login"><b className="center">Recuperar Senha</b></Label>
                                </div>
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

                                <div className="flex-center col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 ">
                                    <Button id="button_login" outline color="primary">Recuperar Senha</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default Recuperar_Senha;