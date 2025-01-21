function AlertButton({message, children}) {
    return ( 
        <>
            <button onClick={()=> alert(message)}>
                {children}
            </button>
        </>
    )
}

export default function Events() {
    const styles = {
        border: '2px solid green',
        borderRadius: '10px',
        margin: '15px',
        marginBottom: '10px'
    }
    return ( 
        <>
        <div style={styles}>
        <div className="mb-4">
            <AlertButton message="Playing">Play Movie</AlertButton>
        </div>
        <div>
            <AlertButton message="Uploading">Upload Image</AlertButton>
        </div>
        </div>
        </>
    )
}