import logo from './logo.svg';
import './App.css';


function Header(props){
  console.log("props",props)
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header> 
}
function Nav(props){
  return  <nav>
  <ol>
    {props.topics.map( t =>(
        <li key={t.id}>
          <a href={'/read/'+t.id}> {t.title}</a>
        </li>
    ))}
  </ol>
</nav>
}
function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function App() {
  const topics = [
    {id:1,title:'html',body:'html is ...'},
    {id:2,title:'css',body:'js is ...'},
    {id:3,title:'js',body:'js is ...'},
  ]
  return (
    <div>
      <Header title="React"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      
    </div>
  );
}

export default App;
