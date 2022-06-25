const ContentTraits = ({ moreTraits }) => {
    const { emotion, element } = moreTraits;
    return(
    <>
        <p>emotion: <strong>{emotion}</strong></p>
        <p>element: <strong>{element}</strong></p>
    </>
    )
}

export default ContentTraits;
