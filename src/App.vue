<script setup>
import Contact from "./components/Contact.vue";
const viewLSKey = new Date().toDateString() + " Views"

function increaseLSViewCount() {
    if (localStorage.getItem(viewLSKey) == null) {
        localStorage.setItem(viewLSKey, "1")
    } else {
        localStorage.setItem(viewLSKey, parseInt(localStorage.getItem(viewLSKey)) + 1)
    }
}

function getViewCountFromLSAndIncrease() {
    increaseLSViewCount()
    localStorage.getItem(viewLSKey)
}

getViewCountFromLSAndIncrease();
</script>

<template>
  <Navbar/>
  <Contact/>
  <RouterView />
  <Footer/>
</template>
