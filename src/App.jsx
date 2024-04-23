const App = () => {
    const name = 'John Doe'

    //fragemet or array with variables
    const heading2 = <h2>This is heading 2</h2>
    return (
        <>
            <h1>React component</h1>
            {heading2}
            <p>This is a JSX component</p>
            {name}
        </>
    )
}

export default App
