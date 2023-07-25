<template>
    <div>
        <youtube :video-id="videoId"></youtube> 
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