import './Card.css';

function Card (props){
    return(
        <div className='root'>
            <header className='header' style={props.headColor}>
                <h1>{props.servicio}</h1>
            </header>

            <main className='main' style={props.mainColor}> 

            </main>

            <footer className='footer'>

            </footer>
        </div>
    );
}

export {Card};