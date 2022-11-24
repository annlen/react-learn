
let tag = false
function App () {
    return (
        <div className="App">
            {
                tag ? <span>span</span> : null
            }
            {
                true && <span>new </span>
            }
        </div>
    );
}

export default App;
