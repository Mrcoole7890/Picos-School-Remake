
const PATH_TO_REASOURCE_JSON = "Resources//specs.json";

fetch(PATH_TO_REASOURCE_JSON)
                .then(responce => responce.json())
                .then(data => {init(data)});


function init(ResourcesJSON) 
{
    let rendererWidth = ResourcesJSON.renderer.width;
    let rendererHeight= ResourcesJSON.renderer.height;

    let app = new PIXI.Application({ width: rendererWidth, height: rendererHeight });
    document.body.appendChild(app.view);
}

function loadTextures(textureArr, folderPath, fileExtention, numOfFrames)
{
    for (let i=0; i < numOfFrames; i++)
    {
        let texture = PIXI.Texture.from(folderPath + i + fileExtention);
        textureArr.push(texture);
    };
}