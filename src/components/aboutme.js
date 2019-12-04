import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class About extends Component {
  render(){
    return (
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className="aboutme-page">
          <Cell col={12}>
            <img
              src={ require("./img/perfil2.png")}
              alt="avatar"
              className="about-img"
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Sou formado em Engenharia de Controle e Automação e estou fazendo pós-graduação em Inteligência Artificial e Aprendizado de Máquina. Apesar de ter formado em engenharia, tive um background na área de TI como estagiário em desenvolvedor Frontend. Já participei de uma incubadora de ideias do IPUC e fiquei em 1º lugar dentre os projetos apresentados. Atualmente, estou me empenhando 100% na pós-graduação, nos cursos paralelos (Cursos voltados à Machine Learning, Data Science e Deep Learning no Coursera e na Udemy), no aceleraDev Data Science (organizado pela Codenation e patrocinado pelo Banco Inter) e buscando oportunidades para ingressar no mercado de trabalho como Cientista de Dados Junior. Meu objetivo profissional é entrar na área de Data Science/Machine Learning e com o tempo me tornar uma referência. Ajudar empresas a conseguirem tirar insights através dos dados coletados e também predizer resultados utilizando machine learning. </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;