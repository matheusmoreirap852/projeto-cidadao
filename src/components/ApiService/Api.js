 import axios from 'axios';

const USER_TOKEN =window.localStorage.getItem('token');

const config = {
    headers: { Authorization: ` ${USER_TOKEN}` }
};
    
const USER_API_BASE_URL = 'http://127.0.0.1:8000/api';

class ApiService{
    /**
     *Busca os usuarios
     *@returns {Promise<AxiosResponse<any>>}
     */
    listarUsuarios(){
        return axios.get(USER_API_BASE_URL+'/api/Membro/index', config);
    }
    
    VerificarToken(){
        return axios.get(USER_API_BASE_URL='/VerificarToken',config);
    }
    
    teste(){
        return axios.get(USER_API_BASE_URL+ '/api/teste');
    }

    loginMembro(parametro){
        return axios.post(USER_API_BASE_URL+ '/loginMembro', parametro);
    }


    /**
     *Consulta um usuario por id
     *@param usuarioid
     *@returns {Promise<AxiosResponse<any>>}
     */

    consultaUsuariosByid(usuarioid){
        return axios.get(USER_API_BASE_URL+'/consultar/'+usuarioid);
    }


    /**
     *Salva um usuario
     *@param usuario
     *@returns {Promise<AxiosResponse<any>>}
     */

    salvarUsuario(usuario){
        return axios.post(USER_API_BASE_URL+'/salvar-usuario',usuario);
    }


    excluirUsuarioById(usuarioid){
        return axios.delete(USER_API_BASE_URL+'/excluir-usuario/'+usuarioid);
    }

}
export default new ApiService();