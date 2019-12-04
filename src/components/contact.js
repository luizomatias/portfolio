import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
  render(){
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Luiz Otávio Matias da Luz</h2>
            <img
              src={ require("./img/perfil.png")}
              alt="avatar"
              style={{height: '280px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Engenheiro de Controle e Automação, Pós-graduando em Inteligência Artificial e Aprendizado de Máquina</p>
          </Cell>
          <Cell col={6}>
            <h2>Meus Contatos</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (31) 98679-5223</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    luizomatias2@gmail.com</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    Luiz Otávio Matias da Luz</ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;