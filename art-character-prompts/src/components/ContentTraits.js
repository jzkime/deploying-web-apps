const ContentTraits = ({ moreTraits }) => {
    const { emotion, element, additional } = moreTraits;
    return(
    <div className='additional-right'>
        <p>emotion: <strong>{emotion}</strong></p>
        <p>element: <strong>{element}</strong></p>
        <p>additional: <strong>{additional}</strong></p> 
    </div>
    )
}

export default ContentTraits;
