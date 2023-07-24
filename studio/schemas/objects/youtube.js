import React from "react";
import getYoutubeId from 'get-youtube-id';

const YoutubePreview = ({ value }) => {
    const id = getYoutubeId(value.url)
    const url = `https://www.youtube.com/embed/${id}`
    if(!id){
        return <div>Missing Youtube URL</div>;
    }
    return (
    <iframe 
    title="Youtube Preview"
    width="560" 
    height="315" 
    src={url}
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    />
    
)};

export default {
    name: 'youtube',
    type: 'object',
    title: 'Youtube Embed',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL',
        },
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: YoutubePreview,
    }
};