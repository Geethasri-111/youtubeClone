const VideoCard = ({info}) => {
    const {snippet,statistics} = info;

    const {title,channelTitle,thumbnails} = snippet;

    return(
        <div>
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
            <h3 className="font-bold">{title}</h3>
            <p>{channelTitle}</p>
            <p>{statistics.viewCount}</p>
        </div>
    )
}

export default VideoCard;