import { Link, useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import api from '../../services/api';
import { Alert } from "bootstrap";

export default function Sports(){

  const[my_sports, setSports] = useState([]);
  const navigate = useNavigate();

  // Read, busca todos os dados na api
  useEffect(() => {
    api.get('api/v1/sports',{})
    .then(response => {setSports(response.data)})
  }, []);

  // Update, navega para tela de atualização
  async function updateSport(id){
    try {
      navigate(`/newupdate/${id}`);      
    } catch (error) {
      alert("Erro ao navegar");      
    }
  }

  // Delete, exclui registro na api
  async function deleteSport(id){
    try {
      await api.delete(`api/v1/sports/${id}`,{});
      setSports(my_sports.filter(sport => sport.id !== id));      
    } catch (error) {
      alert("Erro ao excluir registro!");      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Sports Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_sports.map(sport => (
              <tr key={sport.id}>
                <th scope="row">{sport.id}</th>
                  <td>{sport.name}</td>
                  <td>{sport.description}</td>
                  <td>

                    <button data-testid="mybtn1" type="button"
                    className="btn btn-outline-info" style={{margin: '2px'}}
                    onClick={() => updateSport(sport.id)}>Editar</button>

                    <button data-testid="mybtn2" type="button"
                    className="btn btn-outline-danger" style={{margin: '2px'}}
                    onClick={() => deleteSport(sport.id)}>Excluir</button>

                  </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}