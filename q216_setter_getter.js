var user = {
    firstName: "John",
    lastName : "Abraham",
    language : "en",
    get lang() {
        console.log("getting the value ... ")
      return this.language;
    },
    set lang(lang) {
        console.log("setting the value to",lang)
    this.language = lang;
    }
  };
  console.log(user.lang); // getter access lang as en
  user.lang = 'fr';
  console.log(user.lang); 