let app = Vue.createApp({
    data() {
      return {
        markdown: null
      }
    },
    methods: {
        getMarkdownFile(){
            var converter = new showdown.Converter();
            var url = window.location.href
            let fileName = url.slice(61,73)
            console.log(url.length);
            console.log(fileName);
            axios
                .get(
                    "https://raw.githubusercontent.com/firoos18/tekweb2022/main/assets/markdown/" + fileName
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);           
                    this.markdown = html;
                    // console.log(html);
                })
        }
    },
    beforeMount() {
      this.getMarkdownFile()
    }
  })
  app.mount('#app');