import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Header(props){
  console.log("props",props)
  return <header>
    <h1><a href="/" onClick={(event)=>{event.preventDefault();props.onChangeMode();}}>{props.title}</a></h1>
  </header> 
}
function Nav(props){
  return  <nav>
  <ol>
    {props.topics.map( t =>(
        <li key={t.id}>
          <a id={t.id} href={'/read/'+t.id} onClick={event=>{event.preventDefault();props.onChangeMode(event.target.id);}}> {t.title}</a>
        </li>
    ))}
  </ol>
</nav>
}
function Article(props){
  return <article>
  <h2>{props.board.title}</h2>
  {props.board.body}
</article>
}
function App() {
  
  //const [board,setBoard] = useState({title :'WELCOME',body:'hello, web'});
  const [id,setId] = useState();
  
  const topics = [
    {id:1,title:'html',body:'html is ...'},
    {id:2,title:'css',body:'js is ...'},
    {id:3,title:'js',body:'js is ...'},
  ]
  
  console.log(topics.filter(t => t.id == id).map(t=><Article board={t}> </Article>))
  // if(board.title === 'WELCOME'){
  //   board.content = <Article title="WELCOME" body="Hello, WEB"></Article>
  // }else if(board.title === 'READ'){
  //   board.content = <Article title="Read" body="Hello, Read"></Article>
  // }
  
  

  return (
    <div>
      <Header title="web" onChangeMode={()=>{
        //setBoard({title :'WELCOME',body:'web'})
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        //setBoard({title :'READ',body:'hello read'})
        setId(_id);
      }}></Nav>
      {
        topics.
        filter(t => t.id == id)
        .map(t=>
          <Article board={t}> </Article>)
      }
      
    </div>
  );
}

export default App;
