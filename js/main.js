
(()=>{

  const vm = new Vue({
      el: '#app',

      data: {
          mainmessage : "Kids page",
         aboutme:[],
          descriptionmovies: "",
          
          
      },

      created : function() {
        console.log("hg");
          this.fetchData();
  },

      methods : {
          fetchData() {
              let targetURL = './includes/connect.php'; // this will be a number (id)

       
              fetch(targetURL) // pass in the one or many query
              .then(res => res.json())
              .then(data => {
                      //this.textData(data[0]);
                      console.log(data);
                      this.aboutme =  data;
                  })
                      .catch(function(error) {
                      console.error(error);
                    
              });
            }
        
            }
  });

})();



