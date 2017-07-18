	//Classe
    Autenticacao =function(){}
    
    //Método da Classe Autenticação
    Autenticacao.prototype.validarCampos =function(){

        elementoUsuario = document.getElementById("txtUsuario");
        usuarioDigitado = elementoUsuario.value;
        
        
        elementoSenha = document.getElementById("txtSenha");
        senhaDigitada = elementoSenha.value;
        
        if(usuarioDigitado == "" || senhaDigitada == ""){
            window.alert("#Os Campos nao podem ficar VAZIOS!#");
            return false;
        }
        
        return true;
    }  
    aut = new Autenticacao();
		