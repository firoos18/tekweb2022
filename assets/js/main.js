let app = Vue.createApp({
  data() {
    return {
      articles: {},
      markdown: null
    }
  },
  methods: {
    getArticleData() {
      axios
        .get(
          "https://raw.githubusercontent.com/firoos18/tekweb2022/main/assets/json/article.json"
        )
        .then((res) => {
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getArticleData()
  }
})
app.mount('#app');