import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cadastro_Membro from "./cadastro/cadastro_Membro/Cadastro_Membro";
import Cadastro_Adiministrador from "./cadastro/cadastro_ADM/Cadastro_Adiministrador";
import Bem_Vindo from './bemvindo/bemvindo';
import Acesso_M from'./login/login_membro/login_membro';
import Acesso_A from './login/login_adm/login_adm';
import RecuperarSenha from './recuperar_senha/recuperar_senha';
import Inicio_Dashboard from './Dashboard/DashboardMembro/Layout_Inicio_Membro/InicioMembro'
import React from "react";
const AppRouter = () => {
    return (
    
            <Router>
               

                    <Switch>
                        <Route path="/" exact component={Bem_Vindo} />
                        <Route path="/Cadastro_Membro" exact component={Cadastro_Membro} />
                        <Route path="/Cadastro_Administrador" exact component={Cadastro_Adiministrador} />
                        <Route path="/Acesso_M" exact component={Acesso_M} />
                        <Route path="/Acesso_A" isPrivate  exact component={Acesso_A}/>
                        <Route path="/RecuperarSenha" exact component={RecuperarSenha}/>
			 <Route path="/Acesso_Membro/Dashboard/InicioMembro" exact component={Inicio_Dashboard}/>
			
                    </Switch>
                
            </Router>
    
    )
}

export default AppRouter;