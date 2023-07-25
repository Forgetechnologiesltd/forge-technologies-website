<template>
    <div>
      <!--  <youtube :video-id=""></youtube> -->
        
      <iframe 
        title="Youtube Preview"
        width="560" 
        height="315" 
        :src="'https://www.youtube.com/embed/' + videoId"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    />
    
    </div>
</template>

<script>
    import getId from 'get-youtube-id'
    import youtube from 'vue-youtube'
    export default { 
        data(){
            return {
                videoId: getId(this.url)
            }
        },
        props:{
            url:{
                type: String,
                default: () => ""
            }
        }
    }
</script> 