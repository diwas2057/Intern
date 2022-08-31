//App.js
import React from 'react'
import Dibu from './Components/Dibu'
const App = () => {
  return (
    <Dibu
               listView =
                   {
                      [
                          {
                              Name:"person1",
                              Email:"person1@gmail.com",
                              phoneNumber : "124678"
                          },
                          {
                              Name:"person2",
                              Email:"person2@gmail.com",
                              phoneNumber : "12768"
                          },
                          {
                              Name:"person3",
                              Email:"person3@gmail.com",
                              phoneNumber : "264212"
                          }

                      ]

                   }
           />

  )
}

export default App





//Dibu.js	
import React from "react";
const Dibu = (props)=>{
    return(
        <>

            {
                    props.listView.map(item=>{
                    return(
                        <>
                            <p> Name : {item.Name}</p>
                            <p> Email :  {item.Email}</p>
                            <p> PhoneNumber: {item.phoneNumber}</p>
                            <br/>
                        </>


                    )
                })

            }

        </>
    )
}

export default Dibu;

