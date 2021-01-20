<template>
  <div>
    <Loader v-if="loading" />

    <div v-else class="app-main-layout">

      <Navbar @click='hideSidebar()' />

      <Sidebar v-model="isOpen" :key="locale" />

      <main class="app-content" v-bind:class="{ full: !isOpen }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link 
          class="btn-floating btn-large blue" 
          data-position="left" 
          to="/record"
          :key='locale' 
          v-tooltip="'Tooltip_CreateNewRecord'"
        >
          <i class="large material-icons">add</i>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import messages from '@/utils/messages'

export default {
  name: 'main-layout',
    data: function () {
    return {
      isOpen: true,
      loading: true
    }
  },
  methods: {
    hideSidebar: function () {
      this.isOpen = !this.isOpen;
    },
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }

    this.loading = false;
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    locale() {
      return this.$store.getters.info.locale;
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Произошла ошибка');
    }
  },
  components: {
    Navbar, Sidebar
  }
}
</script>