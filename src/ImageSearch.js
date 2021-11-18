const ImageSearch = () => {

    fetch('https://pixabay.com/api/?')
        .then(data => {
            console.log(data);
        })
    return (
        <div>
            <h2>Hello World</h2>
        </div>
    )
}

export default ImageSearch;