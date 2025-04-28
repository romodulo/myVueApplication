<script setup>
import {ref} from 'vue'

const templateText = ref("const_templateText")
const templateText2 = ref("templateText2")


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
  templateText2.value = responseJson
  console.log("test--console")

}

</script>

<template>
  <!-- button -->
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
  </p>
  <!-- template-ref -->
  <div>
      {{ templateText }}
  </div>
  <div>
      {{ templateText2 }}
  </div>
  <!-- Title -->
  <h2>New Fetch Component Mounted</h2>

  <section>

  </section>

</template>

<style scoped>
.middle-button {
  margin-left: 10px;
}

</style>
