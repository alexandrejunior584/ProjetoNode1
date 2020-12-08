const produtos = [];

module.exports = class Produto{
	construct(t){
        this.titulo = t;
	}

	save(){
		produtos.push(this);
	}

	static fetchAll(){
		return produtos;
	}
}