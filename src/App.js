import './app.css'
let style = {
    color: 'red',
    fontSize: '30px'
}
function App () {
    return (
        <div className="App">
            <span style={style}>test</span>
            <p className="active">P</p>
        </div>
    );
}

export default App;
