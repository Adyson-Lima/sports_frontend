import { Link, useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
// import api from '../../services/api';

export default function Sports(){

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Sports Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        

      </div>
    </div>

  );

}