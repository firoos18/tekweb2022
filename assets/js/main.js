let apiPoints = "https://myapi.veerouze.my.id/index.php/"

let app = Vue.createApp({
  data() {
    return {
      articles: {},
      biodata : {},
      social : {},
      markdown: null
    }
  },
  methods: {
    getArticleData() {
      axios
        .get(apiPoints + "article")
        .then((res) => {
          this.articles = res.data;
          // console.log(this.articles);
        })
        .catch((error) => {
          console.log(error);
        });
      },
      getBiodata() {
        axios
          .get(apiPoints + "biodata/1")
          .then((res) => {
            this.biodata = res.data;
            // console.log(this.biodata);
          })
      },
      getSocial() {
        axios
          .get(apiPoints + "social/1")
          .then((res) => {
            this.social = res.data;
            console.log(this.social);
          })
      }
  },
  beforeMount() {
    this.getArticleData(),
    this.getBiodata(),
    this.getSocial()
  }
})
app.mount('#app');