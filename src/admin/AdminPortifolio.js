import React, { Component } from 'react'
import config, { storage } from './../firebaseconfig'

export default class AdminPortifolio extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div style={{padding: '120px'}}>
        <h2>Portifólio Administrativo</h2>

        <form>
          <div classname="form-group">
            <label for="titulo">Titulo</label>
            <input type="text" classname="form-control" id="titulo" placeholder="titulo" />
          </div>
          <div classname="form-group">
            <label for="desc">Descrição</label>
            <textarea class="form-control" id="desc" rows="3"></textarea>
          </div>
          <label for="arqimg">input Imagem</label>
          <input type="file" class="form-control-file" id="arqimg" />

          <button type="submit" classname="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}