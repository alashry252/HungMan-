//letter
let letters="abcdefghijklmnopqrstuvwxyz"

let arrayletter=Array.from(letters)
let theLetterContener=document.querySelector(".letters")
arrayletter.forEach((letter)=>{
    let span=document.createElement("span")
    span.className="letter-box"
    let letterCreate=document.createTextNode(letter)
    span.appendChild(letterCreate)
    theLetterContener.appendChild(span)
});

let artical={
    langPrograming:["Html","Css","Php","Javescript","Mysql","Fortran","Go","Scala","Python"],
    move:["Presting","Incaption","Parasite","The Misson Impossble","Coco","Up","Whiplash","Memento"],
    pepole:["Albert Einstain","Hitchcock","Alexander","Cleopatra","Mahatma Ghandi"],
    countries:["Syria","Egypt","Yemen","Qatar","Bahrain","Palestine"]
} 
//Get Random Property
let allArtical=Object.keys(artical)

//Random Number Depend On Kyes
let theRanderOfKeys=Math.floor(Math.random() * allArtical.length)

//Categoury
let theNameOfKeys=allArtical[theRanderOfKeys]

//Categoury Word
let theValueOfKeys=artical[theNameOfKeys]

//Random Number Depend On Catagoury World
let theValueOfValue=Math.floor(Math.random() * theValueOfKeys.length)

//The Choosen Word
let theValueName=theValueOfKeys[theValueOfValue]

//Set Categoury Info
document.querySelector(".game-info span").innerHTML=theNameOfKeys

//Convers Chossen Word To Array
let letterGase=document.querySelector(".letter-gase")
//The Value Name Chang To Array
let letterAndSpace=Array.from(theValueName)
// Letter ANd Space To Loop
letterAndSpace.forEach(letter=>{
    //Create Empy Span
    let emptyspan=document.createElement("span")
    // If Letter Equle Empty
    if(letter === ' '){
        emptyspan.className="with-space"
    }
    // Add Empty Span To Letter Gase
    letterGase.appendChild(emptyspan)
})
//Choose Span To Loop
let geseSpan=document.querySelectorAll(".letter-gase span")
//Wrong Selected
let wrong=0
let theThis=0
//Set HangManDrow
let drow=document.querySelector(".hangman-drow")

//Clicked The Element
document.addEventListener("click",(e) => {

    //Set Status
let theStatus=false

    // If Elemnt Equle Class Name Letter-box
    if(e.target.className==="letter-box"){
        e.target.classList.add("clicked")

        //Get Cliced Letter
        let letterClicked=e.target.innerHTML.toLowerCase()

        //The Choosen Word
        let theChooseWord=Array.from(theValueName.toLowerCase())
        theChooseWord.forEach((wordchoose,index)=>{

            //If the Clicked letter Equle To One Of The Chossen Word Letter 

            if(letterClicked===wordchoose){

                //Set Status To Correct
                theStatus=true
            theThis++

                //Loop On All Guess Span
                geseSpan.forEach((span,spanIndex)=>{

                    if(index===spanIndex){

                        span.innerHTML=letterClicked
                    }
                })
            }
        })
        if(theStatus!==true){
            wrong++
            drow.classList.add(`wrong-${wrong}`)
            document.getElementById("wroung").play()


            if(wrong===8){
                theLetterContener.classList.add("game-over")
                document.getElementById("game-over").play()
                let overMes=document.querySelector(".game-end")
                overMes.style.opacity="1"
                
            let end=document.querySelector(".game-end h4 span")
            end.innerHTML=theValueName            

            }
        }else{
            document.getElementById("success").play()
            drow.classList.add(`true-${theThis}`)
            if(theChooseWord.length===theThis){
                document.getElementById("finsh-success").play()
                let success=document.createElement("div")
                success.className="theTure"
                success.innerHTML="Congratulaition"
                document.body.appendChild(success)
                theLetterContener.style.pointerEvents="none";
                
            }


        }
        
    }
 })
