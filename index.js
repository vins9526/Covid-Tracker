
        let submit = document.querySelector(".button")
        let inputBox = document.querySelector(".input")
        let countryh2 = document.querySelector(".countrybox") 

        let globalbox2=document.querySelector("#disp1")
        let globalbox3=document.querySelector("#disp2")
        let globalbox4=document.querySelector("#disp3")
        let globalbox5=document.querySelector("#disp4")
        let globalbox6=document.querySelector("#disp5")

        

        window.onload=function(){

            submit.onclick = function(){
            countryName = inputBox.value
            countryh2.innerText = countryName
        
            fetch("https://api.covid19api.com/summary")
            .then(d=>d.json())
            .then(d=>{
                let {Countries}=d

                const[countries]=Countries.filter(c=>c.Country==countryName)

                globalbox2.innerText=countries.NewConfirmed
                globalbox3.innerText=countries.TotalConfirmed
                globalbox4.innerText=countries.NewDeaths
                globalbox5.innerText=countries.TotalDeaths
                globalbox6.innerText=countries.TotalRecovered
        })
    }
}