function Avatar({url}) {
    return <img loading="lazy" 
    className="h-10 rounded-full
    cursor-pointer transtion duration-200
    transform hover:scale-110"
    src={url} 
    alt="profile picture" />;
    
}

export default Avatar;