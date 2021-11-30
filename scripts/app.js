//Unless your editing a string in html use single quotes
//Enlcosing javascript itself use single quotes!

//Boolean for if the button is clicked
let btnClicked = true;

//Connections to the button on html
let btnColor = document.getElementById('btnColor');
let boldTitle = document.getElementById('boldTitle');
let btnTxt = document.getElementById('btnTxt');
let imgAppear = document.getElementById('imgAppear');
let txtAnimation = document.getElementById('txtAnimation');
let bgBlue = document.getElementById('bgBlue');
let colorTxt = document.getElementById('colorTxt');
let sizeTxt = document.getElementById('sizeTxt');
let TextStyle = document.getElementById('TextStyle');
let VidAppear = document.getElementById('VidAppear');
let pulseTxtAnimation = document.getElementById('pulseTxtAnimation');


//Btn that changes the color of the button.
btnColor.addEventListener('click',function(e)
{
    if(btnClicked){
        btnColor.classList.add("btn", "btn-danger");
        // btnColor.className ="btn btn-danger";
        // e.target.className = "btn btn-danger";
    }else{
        btnColor.classList.remove("btn-danger");
        btnColor.classList.add("btn-primary");

        // e.target.className = "btn btn-primary";
        // btnColor.className="btn btn-primary";
    }
    btnClicked = !btnClicked;
});

//Btn that adds text.
btnTxt.addEventListener('click',function(e)
{
    if(btnClicked){
        pTxt.textContent="This text appears";
    }else{
        pTxt.textContent="";
    }
    btnClicked = !btnClicked;
});

//Btn that makes the title bold.
boldTitle.addEventListener('click', function(e)
{
    if(btnClicked)
    {
        Title.innerHTML = "<strong>This Is The Title!</strong>";
    }else{
        Title.textContent = "This Is The Title!";
    }
    btnClicked = !btnClicked;
});

//Btn that makes an image appear on the button itself!!!
// imgAppear.addEventListener('click',function(e)
// {
//     if(btnClicked)
//     {
//         //Once my image appears make the btn text disappear
//         e.target.className = "appearImg fadeIn";
//         imgAppear.textContent="";

//     }else{
//         //Once the button is pressed again make the btn txt reappear!
//         e.target.className = "btn btn-dark";
//         imgAppear.textContent="Image Appears";

//     }
//     btnClicked = !btnClicked;
// });

//Btn that makes an image appear!
imgAppear.addEventListener('click',function(e)
{
    if(btnClicked)
    {
        // ShowImg.className = "appearImg fadeIn";
        ShowImg.classList.add("appearImg");
        ShowImg.classList.add("fadeIn");
    }else{
        //ShowImg.className = "";
        ShowImg.classList.remove("appearImg");
        ShowImg.classList.remove("fadeIn");
    }
    btnClicked = !btnClicked;
});



//Btn that activated the pulse animation that affects the text below it
txtAnimation.addEventListener('click',function(e)
{
    if(btnClicked)
    {
        // e.target.className="btn btn-danger pulse";
        pulseTxtAnimation.classList.add("pulse");
        
     }else{
        // e.target.className="btn btn-danger";
        pulseTxtAnimation.classList.remove("pulse");
    }
    btnClicked = !btnClicked;
});

//Btn that changes the background color of the page!
bgBlue.addEventListener('click',function(e)
{
    //I used the id to target the element then added the className afterwards!
    if(btnClicked)
    {
        //Target the body tag class and add bgBlue
        //backgroundColor.className = "bgBlue";
        backgroundColor.classList.add("bgBlue");
    }else{
        //Remove bgBlue from the body class
        //backgroundColor.className = "";
        backgroundColor.classList.remove("bgBlue");
    }
    btnClicked = !btnClicked;
});

//Btn that changes the color of the text
colorTxt.addEventListener('click',function(e)
{
    if(btnClicked)
    {
        //textColor.className = "GreenTxt";
        textColor.classList.add("GreenTxt");
    }else{
        // textColor.className = "";
        textColor.classList.remove("GreenTxt");
    }
    btnClicked = !btnClicked;
});

//Btn that makes the text larger
sizeTxt.addEventListener('click',function(e)
{
    if(btnClicked)
    {
        // TextSize.className = "LargerSizeTxt";
        TextSize.classList.add("LargerSizeTxt");
    }else{
        // TextSize.className = "";
        TextSize.classList.remove("LargerSizeTxt");
    }
    btnClicked = !btnClicked;
});

//Btn that adds style to text
TextStyle.addEventListener('click', function(e)
{
    if(btnClicked)
    {
        // StyleTxt.className = "FontStyle rollerRight";
        StyleTxt.classList.add("FontStyle");
        StyleTxt.classList.add("floater");
    }else{
        // StyleTxt.className = "rollerLeft";
        StyleTxt.classList.remove("FontStyle");
        StyleTxt.classList.remove("floater");
    }
    btnClicked = !btnClicked;
});

//Btn adds a video
VidAppear.addEventListener('click', function(e)
{
    if(btnClicked)
    {
        //I used the backslash so the other quotations would be included.
        // AppearVid.className = "rotateIn";
        AppearVid.classList.add("rotateIn");
        AppearVid.innerHTML="<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/sCxv2daOwjQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    }else{
        // AppearVid.className = "zoomerOut";
        AppearVid.classList.add("zoomerOut");
        AppearVid.classList.remove("rotateIn");
        AppearVid.innerHTML="";
    }
    btnClicked = !btnClicked;
});
