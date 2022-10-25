<script setup>
import { reactive } from "vue";

const viewLSKey = new Date().toDateString() + " Views"

const contact = reactive({
    open: false
})

function toggleContact() {
    contact.open = !contact.open;
}

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
  <Navbar @toggle-contact="toggleContact" />
  <Contact  @toggle-contact="toggleContact" :contact-open=contact.open />
  <RouterView />
  <Footer/>
</template>
