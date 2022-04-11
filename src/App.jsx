import React,{useState} from 'react'
import './App.css';
import {FormGroup, Label,Input,Button} from "reactstrap"
import axios from "axios"
import BookCard from "./BookCard"
function App() {
  const [maxResults,setMaxResults] = useState(10)
  const [startIndex, setStartIndex] = useState(1)
  const [query,setQuery ] = useState("");
  const[loading,setLoading] = useState(false)
  const[cards,setCards] = useState([])
const handleSubmit=()=>{
setLoading(true);
axios.get( `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`)
.then(res => {
  if(res.data.items.length>0)
  {
    setCards(res.data.items)
     setLoading(false)
     console.log(cards)
  }
 
}).catch(err=>{
  console.log(err)
});
}
  const MainHeader = ()=>{
    return (
      <>
    
    <h1>

    Books
    </h1>
    <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Books</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" 
  value={query} 
  onChange={e=> setQuery(e.target.value)}/>
    </div>
    <Button onClick={handleSubmit}>submit</Button>
    <div className="d-flex text-white <justify-content-center">
    <FormGroup className='ml-5'>
    <Label for="maxResults">Max Results</Label>
  <Input type="number" id="maxResults" placeholder="maxResults"
  value={maxResults} 
  onChange={e=> setMaxResults(e.target.value)}/>
  </FormGroup>
  
  
    <FormGroup className='ml-5'>
     <Label for="startIndex">Start index</Label>
   <Input type="number" id="startIndex" placeholder="Start Index"
   value={startIndex} 
   onChange={e=> setStartIndex(e.target.value)}/>
   </FormGroup>
   </div>
    </>
    )
    }
    const handleCards=()=>{
      console.log(cards);
      const items = cards.map((item,i)=>{
        let thumbnail="";
        if(item.volumeInfo.imageLinks.thumbnail){
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }
        return(<>
          <div className="col -lg-4" key={item.id}>
          <BookCard thumbnail = {thumbnail} title={item.volumeInfo.title}
          pageCount = {item.volumeInfo.pageCount}
          language={item.volumeInfo.language}
          authors = {item.volumeInfo.authors}
          publisher={item.volumeInfo.publisher}
          description={item.volumeInfo.description}
          

          />
          
          </div>
          </> 
        )
      })
      if(loading){
        return(
          <div className="d"></div>
        );
      }else{
        return (
          <>
          <div className="container">
          <div className="row">{items}</div>
          
          </div>
          
          </>
        )
      }
    }
  return (
    <div >
     {MainHeader()}
     {handleCards()}
    </div>
  );
}

export default App;
