const FahrplanView = (props : {
    backToContentManagement: () => void
}) => {
    return(
        <div onClick={() => props.backToContentManagement()} className="">
            <span className="">FahrplanView</span>
        </div>
    )
}


export default FahrplanView;