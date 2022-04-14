Vue.createApp({
    data() {
      return {       
        markdownArticle : null,
        jsondata : {}
      };
    },
    methods: {
        getJsonData(){
        axios
          .get(
            "https://raw.githubusercontent.com/firoos18/tekweb2022/main/assets/json/article.json"
          )
          .then((res) => {
            console.log(res.data);
            this.jsondata = res.data;

          })
          .catch((error) => {
            console.log(error);
          })
        },
        toTheMarkdown(){
                // const queryString = window.location.search;
                // const urlParams = new URLSearchParams(queryString);
                // const article = urlParams.get('DummyArticle');      
                var converter = new showdown.Converter();
                axios
                    .get(
                        "https://raw.githubusercontent.com/firoos18/tekweb2022/main/assets/markdown/DummyArticle.md"
                    )
                    .then((res) => {
                        var html = converter.makeHtml(res.data);
                        this.markdownArticle = html;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        
    },
    beforeMount() {
      this.toTheMarkdown()
      this.getJsonData()
    },
  }).mount("#app");