function Error({error}){
    return (
        <div >{ error && error.message}</div>
    )
}

export default Error;