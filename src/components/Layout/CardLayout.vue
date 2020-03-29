<template>
    <div>
       <b-card 
        img-alt="Image" 
        style="max-width: 15rem;" 
        img-top
        bg-variant="dark"
        text-variant="white"
        :header="img_title"
        border-variant="light"
        >
        <b-col>
            <div class="thumbnail">
            <b-card-img :src="img"></b-card-img>
            </div>
        </b-col>
    </b-card>
    </div>
</template>

<script>
//creating property to be accessed
export default {
    props: ["img_title", "img", "desc"]
};
</script>

<style scoped>
.thumbnail img {
    object-fit: cover;
    height:100px;
    width:100%;
}
</style>