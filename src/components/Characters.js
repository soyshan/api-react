import React from 'react'

const Characters = ({characters =[]}) => {
  return (
    <div className="row">
        {characters.map((item, index)=> (
             <div key={index} className="col mb-5">
                <div className="card" style={{minWidth:"200px"}}>
                    <img src ={item.image} alt=""/>
                    <div className ="card-body">
                        <h5 className="card-tittle">
                            {item.name}
                        </h5>
                        <hr/>
                        <p>Status:{item.status}</p>
                        <p>Gender:{item.gender}</p>
                        <p>Species:{item.species}</p>
                        <p>Location:{item.location.name}</p>
                    </div>
                </div>
             </div>   
        ))}
       
    </div>
  )
}

export default Characters
