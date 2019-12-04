import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Imageback from './img/projetoia.png';
import Imageback1 from './img/robo.png';
import Imageback2 from './img/ds.png';
class Projects extends Component {
constructor(props){
  super(props);
  this.state = { activeTab: 0};
}

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Imageback}) center /cover`}}>Projeto IA</CardTitle>
            <CardText>
              Projeto realizado utilizando React, Node.js, Express.js, PostgresSQL e diversas bibliotecas como Bcrypt para criptografar senhas. É um site onde possui login e a possibilidade de registrar. Nele foi utilizado uma API que utiliza machine learning para fazer reconhecimento de imagem (encontrado no site clarifai.com), onde detecta o rosto de uma pessoa em uma foto. É um site totalmente responsivo e possui algumas animações. Após o reconhecimento ele conta quantas vezes você utilizou a verificação. 
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/luizomatias/projeto-ia" target="_blank" rel="noopener noreferrer">GitHub Front-end</Button>
              <Button colored href="https://github.com/luizomatias/projeto-ia-api" target="_blank" rel="noopener noreferrer">GitHub Back-end</Button>
              <Button colored href="https://projeto-ai.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demonstração</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1){
      return (
        <div className="projects-grid">
          <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Imageback1}) center /cover`}}>Projeto Busca Robô</CardTitle>
            <CardText>
              Projeto realizado utilizando React, e uma API para mostrar vários robôs. Esse projeto contém Progressive Web App (PWA). O intuito é mostrar um website otimizado e com uma ótima performance de busca.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/luizomatias/robotfriends-pwa" target="_blank" rel="noopener noreferrer">GitHub</Button>
              <Button colored href="https://luizomatias.github.io/robotfriends-pwa/" target="_blank" rel="noopener noreferrer">Demonstração</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2){
      return (
        <div className="projects-grid">
          <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Imageback2}) center /cover`}}>Data Science Projects</CardTitle>
            <CardText>
            Projects developed through the course "Python for Data Science and Machine Learning Bootcamp".
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/luizomatias/Data_Science_Projects" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3){
      return (
        <div className="projects-grid">
          <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Imageback2}) center /cover`}}>ChatBot</CardTitle>
            <CardText>
            Demonstração de um chatbot utilizando o framework TensorFlow.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/luizomatias/chatbot" target="_blank" rel="noopener noreferrer">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    }
  }
  
  render(){
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React/Node.js/PostgresSQL</Tab>
          <Tab>React</Tab>
          <Tab>Data Science Projects</Tab>
          <Tab>Chatbot/Python</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default Projects;