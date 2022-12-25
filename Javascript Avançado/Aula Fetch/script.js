let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
/*O Fetch trabalha junto com um promise e é usado para pegar dados de APIs, ou seja, dados que mudam constantemente */


    function converter(){
        let input = document.getElementById("valor");
        let valor = input.value;
        /*O fetch vai pegar uma url no formato para ser convertido em JSON */
        fetch(url)
            .then((res)=>{
                /*O JSON transforma em ojeto */
                return res.json();
            })
            /*Depois você pego o resultado do JSON e usa como se fosse um objeto */
            .then((data)=>{
                let rate = data.USDBRL.ask;
                /*toFixed coloca limita o float a duas casas decimais */
                let resultado = ` ${valor} dolares = ${(rate* valor).toFixed(2)} reais`
                document.getElementById("resultado").innerHTML = resultado;
            })
        
    }