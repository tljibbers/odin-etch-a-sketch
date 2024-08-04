const mainBody = document.querySelector("body");
const container = document.createElement("div");
const gridButton = document.createElement("button");
const gridText = document.createTextNode("Press to change grid size");

gridButton.style.width = '90px';
gridButton.style.height = '50px';
gridButton.style.backgroundColor = 'green';
gridButton.style.textDecoration = 'none';
gridButton.style.border = 'none';
gridButton.style.borderRadius = '15px';
gridButton.style.margin = '25px';
gridButton.appendChild(gridText);
mainBody.appendChild(gridButton);

mainBody.appendChild(container);
container.style.display = 'flex'
container.style.flexWrap = 'wrap'


function createInitialGrid()
{
    for(i = 0; i < 16; i++)
    {
        for(j = 0; j < 16; j++)
        {
            const gridCol = document.createElement("div");
            gridCol.className = "InitialGrid";
            gridCol.style.textAlign = 'center';
            gridCol.style.border = "solid";
            gridCol.style.width = "110px";
            gridCol.style.height = "110px";
            gridCol.addEventListener("mouseover" , function hover()
            {
                gridCol.style.backgroundColor = 'blue';
            });
            container.appendChild(gridCol);
            
        }
    }
}

function updateGrid(number)
{
    for(i = 0; i < number; i++)
    {
        for(j = 0; j < number; j++)
        {
            const gridCol = document.createElement("div");
            gridCol.className = "NewGrid";
            gridCol.style.textAlign = 'center';
            gridCol.style.border = "solid";
            gridCol.style.width = "300px";
            gridCol.style.height = "300px";
            gridCol.addEventListener("mouseover" , function hover()
            {
                gridCol.style.backgroundColor = 'blue';
            });
            container.appendChild(gridCol);
            
        }
    }
}

createInitialGrid()

gridButton.addEventListener("click", function runUpdateGrid(){
    let number = parseInt(prompt("Enter a value to create the grid"));
    let removeGrid = document.getElementsByClassName("InitialGrid");
    removeGrid.remove();
    updateGrid(number);
})

