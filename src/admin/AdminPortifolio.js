import React, { Component } from 'react'
import config, { storage } from './../firebaseconfig'

export default class AdminPortifolio extends Component {
  constructor(props) {
    super(props)

    this.gravarPortifolio - this.gravarPortifolio.bind(this)
  }

  gravarPortifolio(e){
    console.log('teste submit');
    console.log(this.titulo.value);
    console.log(this.desc.value);
    console.log(this.img.value);
    

    e.preventDefault();

  }


  render() {
    return (
      <div style={{padding: '120px'}}>
        <h2>Portifólio Administrativo</h2>

        <form onSubmit={this.gravarPortifolio}>
          <div classname="form-group">
            <label htmlfor="titulo">Titulo</label>
            <input type="text" classname="form-control" id="titulo" placeholder="titulo" ref={(ref) => this.titulo = ref}/>
          </div>
          <div classname="form-group">
            <label htmlFor="desc">Descrição</label>
            <textarea classname="form-control" id="desc" rows="3" ref={(ref) => this.desc = ref}></textarea>
          </div>
          <label htmlFor="arqimg">input Imagem</label>
          <input type="file" classname="form-control-file" id="arqimg" ref={(ref) => this.img = ref}/>

          <button type="submit" classname="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}