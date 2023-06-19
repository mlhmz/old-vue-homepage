<script setup lang="ts">
import { reactive } from "vue";

const viewLSKey = new Date().toDateString() + " Views";

const contact = reactive({
  open: false,
});

const toggleContact = () => {
  contact.open = !contact.open;
};

const increaseLSViewCount = () => {
  if (localStorage.getItem(viewLSKey) == null) {
    localStorage.setItem(viewLSKey, "1");
  } else {
    localStorage.setItem(
      viewLSKey,
      getAndIncreaseViewFromLS().toString()
    );
  }
};

const getAndIncreaseViewFromLS = (): number => {
  return Number.parseInt(localStorage.getItem(viewLSKey) ?? "0") + 1;
}

const getViewCountFromLSAndIncrease = () => {
  increaseLSViewCount();
  localStorage.getItem(viewLSKey);
};

getViewCountFromLSAndIncrease();
</script>

<template>
  <Navbar @toggle-contact="toggleContact" />
  <Contact @toggle-contact="toggleContact" :contact-open="contact.open" />
  <RouterView />
  <Footer />
</template>
