import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './educacao';
import Experience from './experiencia';
import Skills from './skills';
import { Certificate } from 'crypto';

class Resume extends Component {
  render(){
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={ require("./img/perfil.png")}
                alt="avatar"
                style={{height: '250px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Luiz Otávio Matias da Luz</h2>
            <h4 style={{color: 'grey'}}>Cientista de Dados</h4>
            <hr style={{borderTop: '3px solid blue', width:'90%'}}/>
            <p>Sou formado em Engenharia de Controle e Automação e estou fazendo pós-graduação em Inteligência Artificial e Aprendizado de Máquina. Apesar de ter formado em engenharia, tive um background na área de TI como estagiário em desenvolvedor Frontend. Já participei de uma incubadora de ideias do IPUC e fiquei em 1º lugar dentre os projetos apresentados. Atualmente, estou me empenhando 100% na pós-graduação, nos cursos paralelos (Cursos voltados à Machine Learning, Data Science e Deep Learning no Coursera e na Udemy), no aceleraDev Data Science (organizado pela Codenation e patrocinado pelo Banco Inter) e buscando oportunidades para ingressar no mercado de trabalho como Cientista de Dados Junior. Meu objetivo profissional é entrar na área de Data Science/Machine Learning e com o tempo me tornar uma referência. Ajudar empresas a conseguirem tirar insights através dos dados coletados e também predizer resultados utilizando machine learning.</p>
            <hr style={{borderTop: '3px solid blue', width:'90%'}}/>
            <h5>Endereço</h5>
            <p>Rua Vênus, 170</p>
            <h5>Telefone</h5>
            <p>(31) 98679-5223</p>
            <h5>E-mail</h5>
            <p>luizomatias2@gmail.com</p>
            <hr style={{borderTop: '3px solid blue', width:'90%'}}/>
            <h4>Conhecimento em Softwares</h4>
            <h5>Frameworks e bibliotecas (no geral):</h5><p>Node.js, React, Bootstrap </p>
            <h5>SQL/NoSQL: </h5><p>MongoDB, PostgresSQL, MySQL</p>
            <h5>Bibliotecas e Frameworks Data Science/Machine Learning:</h5><p>Numpy, Pandas, Seaborn, Matplotlib, scikit-learn, Tensorflow, Keras.</p>
            <h5>Conhecimentos básicos:</h5><p> AWS, Spark, Hadoop, Django, Flask, Flutter, Ionic. </p>
            <h5>Outros:</h5><p>Pacote Office, CorelDraw, MATLAB, Git</p>
            <hr style={{borderTop: '3px solid blue', width:'90%'}}/>
            <h4>Certificados</h4>
            <h5>Coursera:</h5><p> Machine Learning By Andrew Ng, Neural Networks and Deep Learning, Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization, Convolutional Neural Networks (CNN), Sequence Models (RNNs, NLP, LSTM), Deep Learning Specialization. </p>
            <h5>Udemy:</h5><p> Desenvolvimento Web com PHP e Banco de Dados MySQL, Python & MySQL, The Complete Web Developer in 2019: Zero to Mastery, Python for Data Science and Machine Learning Bootcamp, Formação Engenheiro de Dados</p>
            <h5>Certificate of Achievement English Course: </h5><p> Belo Horizonte – Brasil, Março/01 - julho/08. Completou o Curso de Inglês Fisk prescrito para a graduação nesta escola. </p>
            <hr style={{borderTop: '3px solid blue', width:'90%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Educação</h2>

            <Education
              startYear={2013}
              endYear={2018}
              schoolName="Pontifícia Univerdade Católica de Minas Gerais"
              schoolDescription="Bacharel em Engenharia de Controle e Automação"
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Pontifícia Univerdade Católica de Minas Gerais"
              schoolDescription="Pós-Graduação em Inteligência Artificial e Aprendizado de Máquinas "
            />

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Codenation"
              schoolDescription="AceleraDev Data Science  – Aceleração na área de Data Science durante 10 semanas, com exercícios práticos de programação focados na realidade do mercado. Assuntos explorados: Pré-processamento de dados em Python, análise de dados exploratória, pensamento estatístico em Python, engenharia de features, regressão e classificação."
            />
            <hr style={{borderTop: '3px solid blue'}}/>

            <h2>Experiência</h2>

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Estagiário na Coordenação de Engenharia de Controle e Automação"
              jobDescription="Participação no desenvolvimento do site de Engenharia de Controle e Automação utilizando HTML5, CSS3 e JavaScript. Houve também participação na criação de artes como logo e panfleto utilizando CorelDraw; "
            />

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Incubadora de Ideias"
              jobDescription="Participação na incubadoras de idéias do IPUC com o projeto intitulado FROD. Foi conqusitado o primeiro lugar dentre os projetos apresentados na Incubadora de Ideias do IPUC 2º/2018. Skills desenvolvidas: Como criar um modelo de negócio; Como identificar uma persona do seu cliente; Como desenvolver um MVP"
            />
            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Monitor Engenharia na Escola "
              jobDescription="Projeto realizado pela PUC Minas de levar um pouco da engenharia nas escolas de ensino superior e fundamental. Foram levados alguns projetos envolvendo arduino para despertar o interesse dos alunos. Resultados principais: Aumento no número de pessoas que querem saber programação; Incentivar as pessoas a fazer cursos de engenharia; Habilidades em programação e softwares;"
              
            />
            
            <hr style={{borderTop: '3px solid blue'}}/>
            <h2>Skills Principais</h2>
            <Skills
              skill="Python"
              progress={80}
            />
            <Skills
              skill="Data Science/ML"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="Deep Learning"
              progress={70}
            />
            <Skills
              skill="SQL"
              progress={60}
            />
                <Skills
              skill="JavaScript"
              progress={60}
            />
            <Skills
              skill="NoSQL"
              progress={50}
            />
        
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;