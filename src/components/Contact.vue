<script setup>
import { inject } from "vue";

const emits = defineEmits(["toggle-contact"]);

const props = defineProps({
  contactOpen: Boolean,
});

const $pb = inject("pb");

const contactMessage = {
  name: "",
  email: "",
  content: "",
};

const clearInput = () => {
  contactMessage.name = "";
  contactMessage.email = "";
  contactMessage.content = "";
};

const createContactMessage = async () => {
  await $pb.collection("homepage_messages").create({
    name: contactMessage.name,
    email: contactMessage.email,
    content: contactMessage.content,
  });
  clearInput();
};
</script>

<template>
  <div
    v-show="props.contactOpen"
    id="popup"
    class="fixed w-11/12 md:w-2/4 lg:w-2/6 2xl:w-3/12 bg-secondary border-solid border-primary border-2 rounded-3xl inset-x-0 mx-auto backdrop-blur-lg bg-opacity-95 text-center p-5"
  >
    <div id="close-btn-container" class="grid place-items-end">
      <font-awesome-icon
        class="text-2xl align-right cursor-pointer"
        @click="$emit('toggle-contact')"
        icon="fa-solid fa-xmark"
      />
    </div>
    <h1 class="text-xl font-bold m-5">Contact</h1>
    <form class="m-auto">
      <h2 class="font-semibold">Form</h2>
      <input
        class="primary-input w-full"
        placeholder="Name"
        v-model="contactMessage.name"
      />
      <input
        class="primary-input w-full"
        placeholder="Email"
        v-model="contactMessage.email"
      />
      <textarea
        class="my-2 bg-transparent rounded-xl border-solid border-primary border-2 p-2 resize-none focus:outline-none w-full h-28"
        placeholder="Message"
        v-model="contactMessage.content"
      />
      <button
        class="primary-button m-auto"
        v-on:click="createContactMessage"
        @click="$emit('toggle-contact')"
      >
        Send
      </button>
    </form>
    <h2 class="font-semibold my-3">Other contact options</h2>
    <ul>
      <li>
        <a class="text-primary" href="mailto:malek.hamza@tuta.io"
          >malek.hamza@tuta.io</a
        >
      </li>
    </ul>
  </div>
</template>
