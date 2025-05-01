<script setup>
import {ref, reactive} from 'vue'


// Variables 
const templateText = ref("const_templateText")
const templateText2 = ref("")
// end-Of--Variables

// Variables 5 - 1
const isactiveComponent = ref(false)
// end-Of--Variables- 5- 1

// Buttons-script
async function clickHere() {
    console.log("This button was clicked")
    const response = await fetch("http://127.0.0.1:5000/Get/API", {
        "method": "GET",
        "headers": {"Content-type": "application/json"}
    })
    const responseJson = await response.json()
    console.log(responseJson)
    templateText.value = responseJson.link
    console.log("test--console")
}

async function clickHere2() {
  console.log("2nd-button is clicked")
  const response = await fetch("http://127.0.0.1:5000/Get/API/Data", {
      "method": "GET",
      "headers": {"Content-type": "application/json"}
  })
  const responseJson = await response.json()
  console.log(responseJson)
  templateText.value = responseJson 
  console.log("test--console")
}

async function clickHere3() {
  console.log("3rd-button is clicked")
  const response = await fetch("http://127.0.0.1:5000/Get/API/3rdButton", {
      "method": "GET",
      "headers": {"Content-type": "application/json"}
  })
  const responseJson = await response.json()
  console.log(responseJson)
  templateText2.value = responseJson['restaurants']
  console.log("test--console")
  console.log(typeof responseJson['restaurants'][1]['image'])
}
// end-Of--Buttons-script

// Buttons-script-- 5 - 1
function clickHere4() {
  console.log("4th-button clicked")
  if (isactiveComponent.value == false) {
    isactiveComponent.value = true
  } else {
    isactiveComponent.value = false
  }
}
// end-Of--Buttons-script-- 5- 1




</script>

<template>
    <!-- Buttons -->
    <p>
        <a href="" target="" v-on:click.prevent = "clickHere">
            <i>First Button</i>
        </a>
        <a href="" class="middle-button"></a>
        <a href="" target="" v-on:click.prevent = "clickHere2">
            <i>Second Button</i>
        </a>
        <a href="" class="middle-button"></a>
        <a href="" target="" v-on:click.prevent = "clickHere3">
            <i>Third Button</i>
        </a>
        <!-- add: 5 - 1 -->
        <a href="" class="middle-button"></a>
        <a href="" target="" v-on:click.prevent = "clickHere4">
            <i>Fourth Button</i>
        </a>
        <!-- end-of-Add: 5 - 1 -->
    </p>
    <!-- end-Of--Buttons -->
    <!--  -->

    <!--  -->
    <!-- end-Of--Template-refs -->
    <div>
        {{ templateText }}
    </div>
    <div class="romel-show-none">
        {{ templateText2 }}
    </div>
    <!-- end-Of--Template-refs -->
    <!--  -->

    <!--  -->
    <!-- Title -->
    <h2>New Fetch Component Mounted</h2>
    <!-- end-Of--Title -->
    <!--  -->

    <!-- New-Component -->
    <!-- this: requires if clause -->
    <section v-bind:class="{'NewFetchComponentMounted-Section' : isactiveComponent}"> 
        <aside v-for="item in templateText2">
            <div class="romel">
                <img v-bind:src="item['image']" alt="computers" height="150">
            </div>
            <!-- ToDo .. add 
                            business hours,
                            location,
                            contact-info
                            optional: social-media--links/ or pages
                                -->
            <h3>{{ item ? item['name'] : "" }}</h3>
            <p>
                The contact-number is:
                {{ item ? item['contact-number'] : "" }}
            </p>
        </aside>
    </section>

    
    <!-- end-Of--New-Component -->

</template>

<style scoped>
.middle-button {
  margin-left: 10px;
}
.romel {
    display: flex;
    justify-content: center;
}
.romel-show-none {
    display: none;
}
.NewFetchComponentMounted-Section {
    display: none;   
}
</style>
