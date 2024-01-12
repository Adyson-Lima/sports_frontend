import { Link, useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const[name, setName] = useState('');
  const[description, setDescription] = useState('');
  const navigate = useNavigate();

  // identificados sport_id é o definido na rota
  const{sport_id} = useParams();

  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, description};

    if (sport_id === '0') {
      try {
        await api.post('api/v1/sports', data, {});
        navigate('/');        
      } catch (error) {
        alert("Erro ao salvar!");        
      }      
    } else {
      try {
        await api.patch(`api/v1/sports/${sport_id}`, data, {});
        navigate('/');        
      } catch (error) {
        alert("Erro ao atualizar!");        
      }      
    }
  }

  // Carrega registro específico na api e seta dados para atualização
  async function loadSport(){
    try {
      const response = await api.get(`api/v1/sports/${sport_id}`,{});
      setName(response.data.name);
      setDescription(response.data.description);      
    } catch (error) {
      alert("Erro ao buscar registro na api!");
      navigate('/');      
    }
  }

  // Chama loadSport para preencher form
  useEffect(() => {
    if (sport_id === '0') {
      return;      
    } else {
      loadSport();      
    }
  }, [sport_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Sports Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input data-testid="input2" id="description" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Descrição" value={description}
            onChange={e => setDescription(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}