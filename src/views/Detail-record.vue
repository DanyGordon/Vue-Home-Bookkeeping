<template>
  <div>

    <Loader v-if="loading" />

    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">{{ 'Menu_History' | localize }}</router-link>
        <a class="breadcrumb">
          {{ record.typeText }}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card" :class="record.typeClass">
            <div class="card-content white-text">
              <p>{{ 'Description' | localize }}: {{ record.description }}</p>
              <p>{{ 'Amount' | localize }}: {{ record.amount | currency }}</p>
              <p>{{ 'Category' | localize }}: {{ record.categoryName }}</p>

              <small>{{ record.date | date('datetime') }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="center" v-else>{{ 'Detail_Title' | localize }} (id: {{ $route.params.detailId }}) {{ 'NonExist' | localize }}.</p>
  </div>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'

export default {
  metaInfo() { 
    return {
      title: this.$title('Detail_Title')
    }
  },
  name: 'detail',
  data: function() {
    return {
      record: null,
      loading: true
    }
  },
  async mounted() {
    const id = this.$route.params.detailId;
    const record = await this.$store.dispatch('fetchRecordById', id);
    const category = await this.$store.dispatch('fetchCategoryById', record.categoryId);
    category;
    this.record = {
      ...record,
      categoryName: category.title,
      typeClass: record.type === 'income' ? 'green' : 'red',
      typeText: record.type === 'income' ? localizeFilter('Income') : localizeFilter('Outcome'),
    };

    this.loading = false;
  }
}
</script>