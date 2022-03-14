/* 
  COMPONENTTS AND PROPS

   - Components let you split the UI into independent, reusable pieces, and think
   about each piece in isolation
 
*/

function Welcome(props) {
  return <h1>Hola, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Angel" />
      <Welcome name="Angel 2" />
      <Welcome name="Angel 3" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


/*

    Props are Read-Only

    - Whether you declare a component as a function or a class, it must never 
    modify its own props.
 
 */