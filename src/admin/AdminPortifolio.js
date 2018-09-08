import React, { Component } from 'react'
import config, { storage } from './../firebaseconfig'

export default class AdminPortifolio extends Component {
  constructor(props) {
    super(props)

    this.gravarPortifolio = this.gravarPortifolio.bind(this)
  }

  gravarPortifolio(e) {
    // console.log('teste submit')
    // console.log(this.titulo.value)
    // console.log(this.desc.value)
    // console.log(this.img.value)


    const arquivo = this.img.files[0]
    const { name, size, type } = arquivo

    console.log(arquivo)

    const ref = storage.ref(name)
    ref.put(arquivo).then(img => {
      img.ref.getDownloadURL().then(downloadURL => {
        // console.log(downloadURL)

        const novoPortifolio={
          titulo: this.titulo.value,
          descricao: this.desc.value,
          imagem: downloadURL
        }

        // console.log(novoPortifolio)

        config.push('portifolio', {data: novoPortifolio})
      })
    })

    e.preventDefault();

  }


  render() {
    return (
      <div style={{ padding: '120px' }}>
        <h2>Portifólio Administrativo</h2>

        <form onSubmit={this.gravarPortifolio}>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input type="text" className="form-control" id="titulo" placeholder="titulo" ref={(ref) => this.titulo = ref} />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Descrição</label>
            <textarea className="form-control" id="desc" rows="3" ref={(ref) => this.desc = ref}></textarea>
          </div>
          <label htmlFor="img">input Imagem</label>
          <input type="file" className="form-control-file" id="img" ref={(ref) => this.img = ref} />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}