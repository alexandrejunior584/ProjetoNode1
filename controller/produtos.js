const produto = require('../models/produtos');

exports.getAddProduto = (req,res) => {
	res.render('admin',{ 
		titulo: 'Admin',
        isActiveAdmin: '/admin/add-produto',
        isActiveShop: ''
    });
}

exports.postAddProduto = (req,res) => {
	const produto = new Produto(req.body.produto);
	produtos.save();
	res.redirect('/');
};


exports.getProdutos = (req,res) =>{
    const produtos = produto.fetchAll();
    res.render('shop,'{
       titulo: 'Shop',
       produtos: produtos,
       isActiveShop '/',
       isActiveAdmin ''
    });
};