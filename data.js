

    // document.getElementById('button1').addEventListner('click',loaddata);

    // function loaddata() {
        
    //     const xhr = new XMLHTTPRequest();

    //     xhr.open('GET','https://api.covid19api.com/summary',true);

    //     xhr.onload = function()
    //     {
    //         if(this.status === 200)
    //         {
    //             const covid = JSON.parse(this.responseText);
    //             Console.log(covid);
    //         }
    //     }

    //     xhr.send();
    // }


    // document.getElementById('button1').addEventListener('click',loadData);




    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.covid19api.com/summary',true);

    xhr.onload = function()
    {
        if(this.status === 200)
        {
            // console.log(this.responseText);
            const covid = JSON.parse(this.responseText);
            // console.log(covid);

            const global_data = covid.Global;
            const output1 = `
                                <a class="count">${global_data.TotalConfirmed} </a>
                                
                           `

            const op1 = `

            <a>${global_data.NewConfirmed} </a>

                        `


            const output2 = `
                               <a>${global_data.TotalDeaths} </a>
                            `
            const op2 = `

                            <a>${global_data.NewDeaths} </a>
 
                         `

                         
            const output3 = `
                                <a>${global_data.TotalRecovered} </a>
                             `
              const op3 = `

                             <a>${global_data.NewRecovered} </a>
  
                          `

            
            
            document.getElementById('confirmed').innerHTML = output1;
            document.getElementById('tdyconfirmed').innerHTML = op1;
            document.getElementById('deaths').innerHTML = output2;
            document.getElementById('tdydeaths').innerHTML = op2;
            document.getElementById('recovered').innerHTML = output3;
            document.getElementById('tdyrecovered').innerHTML = op3;

        

            // india

            const country_name = covid.Countries[76];
            // console.log(covid.Countries[76]);
            
            const inoutput1 = `
                                <a> ${country_name.TotalConfirmed}</a>
                            `
            
            const Iop1 = `
                                <a>${country_name.NewConfirmed}</a>
                        `
            
            const inoutput2 = `
                                <a> ${country_name.TotalDeaths}</a>
                            `
                            
            const Iop2 = `
                            <a>${country_name.NewDeaths}</a>
                        `
            const inoutput3 = `
                                <a> ${country_name.TotalRecovered}</a>
                            `
                        
            const Iop3 = `
                            <a>${country_name.NewRecovered}</a>
                        `

            document.getElementById('indconfirmed').innerHTML = inoutput1;
            document.getElementById('indtdyconfirmed').innerHTML = Iop1
            document.getElementById('inddeaths').innerHTML = inoutput2;
            document.getElementById('indtdydeaths').innerHTML = Iop2
            document.getElementById('indrecovered').innerHTML = inoutput3;
            document.getElementById('indtdyrecovered').innerHTML = Iop3

        }

        else
        {
            console.log("server error");
        }
    }

    xhr.send();



 ///////////////////////////////////////////////////////////////////////



