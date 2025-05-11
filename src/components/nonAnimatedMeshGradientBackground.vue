<script setup>

</script>


<template>
    <div class="main-body">
        <div class="absolute-self">
            <!-- absolute inset-0 justify-center -->
            <div class="absolute-self inset-0--self justify-center--self">
                <div class="bg-shape1 bg-teal opacity-50 bg-blur"></div>
                <div class="bg-shape2 bg-primary opacity-50 bg-blur"></div>
                <div class="bg-shape3 bg-purple opacity-50 bg-blur"></div>
            </div>
            <div><h1 class="my-class-h1-newComponent">Hello World</h1></div>
        </div>
    </div>
</template>


<style scoped>
.main-body {
    height: 400px;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid black;
    overflow: hidden;
    margin-bottom: 13px;
}
.absolute-self {
    position: relative;
    top: 50px;
    justify-content: center;
    display: inline-flex;
    flex-direction: row;
}
.width-self-100 {
    width: 100%;
}
.inset-0--self {
    inset: 0;
}
.justify-center--self {
    justify-content: center;
}
.bg-shape1 {
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    background-color: black;
    position: relative;
    animation: one 10s infinite;
}
.bg-shape2 {
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    background-color: aliceblue;
    position: relative;
    animation: two 10s infinite;    
}
.bg-shape3 {
    width: 400px;
    height: 400px;
    border-radius: 9999px;
    background-color: burlywood;
    position: relative;
    /* animation: three 10s infinite; */
}


@keyframes one {
    0%{left: 0px; top: 0px;}
    25%{left: -100px; top: 70px;}
    50%{left: 20px; top: 150px;}
    75%{left: 50px; top: 100px;}
    100%{left: 0px; top: 0px;}
}

/* @keyframes two {
    0%{left: 0px; top: 0px;}
    25%{left: 50px; top: 10px;}
    50%{left: 100px; top: 50px;}
    75%{left: 50px; top: 100px;}
    100%{left: 0px; top: 0px;}
} */

.opacity-50 {
    opacity: .5;
}
.bg-blur {
    filter: blur(10px);
}
.my-class-h1-newComponent {
    margin: 0 auto;
    top: 100px;
    text-align: center;
    position: relative;
}


</style>

