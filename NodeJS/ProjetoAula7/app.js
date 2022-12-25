//Packeges Instalados
const sharp =  require('sharp');
const compressImages = require('compress-images');
const fs = require('fs');

let inputPath = process.argv[2];



//Redimensionador da Imagem
/*function resize (inputPath, outputPath, width){
    sharp(inputPath).resize({width: width}).toFile(outputPath, (error)=>{
        if(error){
            throw error
        }else{
            console.log("Imagem redimencionada com sucesso.")
            compress(outputPath, './compressed/')
            
        }

    })
    //coloca o path/imagem na memória
    //o sharp tem um método chamado resize e outro chamado toFile, que mostra onde guardar o arquivo
}*/

//Compressador da imagem
function compress(pathInput, outputPath){

    compressImages(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");

        //após redimensionar, você não precisará do arquivo temporário que será comprimido e redimensionado, logo, ele pode ser apagado
        fs.unlink(pathInput, (error)=>{
            if(error) throw error;
            console.log(inputPath, "Apagado com sucesso")
        })

    })
}

compress(inputPath, './compressed/')
//resize(inputPath,'./temp/output_resize.jpg',width)
