import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render(){
    return (
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={ require("./img/perfil.png")}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Data Scientist</h1>
              <hr/>
              <p>Artificial Intelligence and Machine Learning Postgraduate Student | Data Science | Control and Automation Engineer </p>
              <div className="social-links">

                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/luizotaviomatiasdaluz/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/* GitHub */}
                <a href="https://github.com/luizomatias" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                {/* Stack */}
                <a href="https://pt.stackoverflow.com/users/149189/luiz-matias" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-stack-overflow" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;