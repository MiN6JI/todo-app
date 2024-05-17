<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-img">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      </q-toolbar>
      <q-toolbar class="q-py-md">
        <q-toolbar-title>
          <h5 class="q-ma-none q-py-md text-h3 text-weight-bold">Todo</h5>
          <div class="text-caption">{{ currentDate }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area class="q-py-md" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple exact to="/">
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Todo
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple exact to="/task-pinia">
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Todo Pinia
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple exact to="/help">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>


          </q-list>
        </q-scroll-area>

        <!-- <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 168px"> -->
          <div class="absolute-top bg-primary flex column flex-center text-white" style="height: 168px">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">{{ name }}</div>
            <div>{{ email }}</div>
          </div>
        <!-- </q-img> -->
      </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// Current Date

const currentDate = ref("")

const updateDate = () => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

onMounted(() => {
  updateDate()
})

const name = ref("Shruti Deorukhkar");
const email = ref("deorukhkarshruti232@gmail.com");

</script>

<style>
.bg-img {
  background-image: linear-gradient(0deg, rgba(42, 134, 255, 0.548), rgba(42, 134, 255, 0.548)), url("src/assets/sky.jpg");
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: bottom center;

}
</style>
