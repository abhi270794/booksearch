import React, {useState} from 'react'
import {Card,CardTitle,CardImg,CardBody,Button,Modal} from "reactstrap"

const BookCard=({thumbnail,
title,
pageCount,
language,
description,
author,
publisher,




})=>{
    
    const[modal,setModal] = useState(false);
    const toggle=()=> setModal(!modal);
    
    
    return(
        <Card style={{width:"233px"}} className="m-auto">
           <CardImg top style={{width:"100%",height:"233px"}}  src={thumbnail} slt="card image"/>
           <CardBody>
             <CardTitle className='card-title'>{title}</CardTitle>
           </CardBody>
        <Modal isOpen={modal} toggle={toggle}>
        <h5>{title}</h5>
        <button onClick={toggle}>
        
        <span aria-hidden={true}>x</span>
        </button>
        <div className="d">
        <img src={thumbnail} alt={title} style={{height:"233px"}}/>
        <div>
           <p>Page Count:{pageCount}</p>
          <p>Language:{language}</p>
        <p> Publisher:{publisher}</p>
        </div>
           
        
        </div>
        
        </Modal>
        </Card>
        
        
        
        
    )
}
export default BookCard