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

let isGridActive = false;


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
            const gridCol2 = document.createElement("div");
            gridCol2.className = "NewGrid";
            gridCol2.style.textAlign = 'center';
            gridCol2.style.border = "solid";
            gridCol2.style.width = "300px";
            gridCol2.style.height = "300px";
            gridCol2.addEventListener("mouseover" , function hover()
            {
                gridCol2.style.backgroundColor = 'blue';
                
            });
            container.appendChild(gridCol2);
            
        }
    }
}

function resetGrid()
{
    document.querySelectorAll(".InitialGrid").forEach((e) => e.parentNode.removeChild(e));
}

createInitialGrid()

gridButton.addEventListener("click", function runUpdateGrid(){
    resetGrid();
    let number = parseInt(prompt("Enter a value to create the grid"));
    updateGrid(number);
})

