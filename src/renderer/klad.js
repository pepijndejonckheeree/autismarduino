require('./css/reset.css');
require('./style.css');


{
  const init = () => {
    
    pageChenge();
    johnyFive();
    
  };

  

  const pageChenge = () => {
    // console.log(`start`)

    const $kleurLink = document.querySelectorAll(`.nav_list_item`);
    // console.log($kleurLink);

    $kleurLink.forEach(link => {
      // console.log(link);
      link.addEventListener(`click`, handleClickChangePage)
    });
  };

  const handleClickChangePage = e => {
    // console.log(`handleClickChangePage`);

    const $linkId = e.target.id
    // console.log($linkId);
    ChangePage($linkId);
  };

  const ChangePage = linkId => {
    // console.log(`ChangePage`, linkId);

    const $page = `page_${linkId}`;
    console.log($page);

    const $activePage = document.querySelector(`.active`);
    console.log(`currentpage`, $activePage);
    $activePage.classList.remove('active');
    $activePage.classList.add('hidden');

    const $pageContainer = document.getElementById($page);
    console.log(`newpage`, $pageContainer);
    $pageContainer.classList.remove('hidden');
    $pageContainer.classList.add('active');
  };


  const johnyFive = () => {
    var five = require("johnny-five"),
    board, photoresistor;
  
    board = new five.Board({
      repl: false
    });
  
    board.on("ready", function() {
    console.log(`werkt`)
  
    // Create a new `photoresistor` hardware instance.
    photoresistor = new five.Sensor({
      pin: "A2",
      freq: 500
    });
  
   
    // Inject the `sensor` hardware into
    // the Repl instance's context;
    // allows direct command line access
    // board.repl.inject({
    //   pot: photoresistor
    // });
  
    // "data" get the current reading from the photoresistor
    photoresistor.on("data", function() {
      // console.log(`waarde`, this.value);
  
      showValue(this.value);
      setBackgroundcolor(this.value);
    });
  
    const showValue = value =>{
      console.log(`value`,value);
      setBackgroundcolor(value);
      (value);
    }
  
    })
  }
  

  const changeLayOut = value => {


    if( value > 900){
      console.log(`> 900`);
      $container.classList.add(`container--layoutOne`);
      $container.classList.remove(`container--layoutTree`, `container--layoutTwo`);
  
    }else if( 900 > value && value> 800){
      console.log(`900 - 800`);
      $container.classList.remove(`container--layoutOne`, `container--layoutTree`);
      $container.classList.add(`container--layoutTwo`);

    }else if( 800 > value && value> 700){
      console.log(`800 - 700`);
      $container.classList.remove(`container--layoutOne`, `container--layoutTree`);
      $container.classList.add(`container--layoutTwo`);

    }else if( 700 > value && value> 600){
      console.log(`700 - 600`);
      $container.classList.remove(`container--layoutOne`, `container--layoutTree`);
      $container.classList.add(`container--layoutTwo`);
  
    }else if( 600 > value){
      console.log(`< 600`);
      $container.classList.remove(`container--layoutOne`, `container--layoutTwo`);
      $container.classList.add(`container--layoutTree`);
  
    // add or remove multiple classes
    // div.classList.add("foo", "bar", "baz");
    // div.classList.remove("foo", "bar", "baz");
  
    }

  }







  const setBackgroundcolor = value => {
    const $tekstDiv = document.querySelector(`.tekst`);
    const $container = document.querySelector(`.container`);
    $tekstDiv.textContent = value;

  if( value > 900){
    console.log(`> 900`);
    $container.classList.add(`container--layoutOne`);
    $container.classList.remove(`container--layoutTree`, `container--layoutTwo`);

  }else if( 900 > value && value> 700){
    console.log(`900 - 700`);
    $container.classList.remove(`container--layoutOne`, `container--layoutTree`);
    $container.classList.add(`container--layoutTwo`);

  }else if( 700 > value){
    console.log(`< 700`);
    $container.classList.remove(`container--layoutOne`, `container--layoutTwo`);
    $container.classList.add(`container--layoutTree`);

  // add or remove multiple classes
  // div.classList.add("foo", "bar", "baz");
  // div.classList.remove("foo", "bar", "baz");

  }

  }

  init();
}
  
  