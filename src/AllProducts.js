 const allProductsList = () => {
  return {
  products : [
//fruits
  {name: 'Apple', price: 250, image: require('./images/apple.jpg'), currency: 'INR',category:'fruits'},
  {name: 'Grapes - Red', price: 150, image: require('./images/grapes.jpg'), currency: 'INR',category:'fruits'},
  {name: 'Kiwi', price: 95, image: require('./images/kiwi.jpg'), currency: 'INR',category:'fruits'},
  {name: 'Pomengranate', price: 125, image: require('./images/pomengranate.jpg'), currency: 'INR',category:'fruits'},
  {name: 'Pear', price:64, image: require('./images/pear.jpg'), currency: 'INR',category:'fruits'},
  {name: 'Water Melon', price:225, image: require('./images/watermelon.jpg'), currency: 'INR',category:'fruits'},
//vegetables
  {name: 'Tomato', price: 125, image: require('./images/tomato.jpg'), currency: 'INR',category:'vegetables'},
  {name: 'Potato', price: 30, image: require('./images/potato.jpg'), currency: 'INR',category:'vegetables'},
  {name: 'LadiesFinger', price: 45, image: require('./images/ladiesfinger.jpg'), currency: 'INR',category:'vegetables'},
  {name: 'Turmeric', price: 22, image: require('./images/turmeric.jpg'), currency: 'INR',category:'vegetables'},
  {name: 'Maida', price: 75, image: require('./images/maida.jpg'), currency: 'INR',category:'vegetables'},
  {name: 'Chilli Powder', price:85, image: require('./images/chilli.jpg'), currency: 'INR',category:'vegetables'},
//coffee
  {name: 'Classic Cofee ', price: 250, image: require('./images/coffeeclassic.jpg'),category:'coffee'},
  {name: 'Sunrise Coffee', price: 150, image: require('./images/coffeesunrise.jpg'),category:'coffee'},
  {name: 'Filter Coffee', price: 125, image: require('./images/filtercoffee.jpg'),category:'coffee'},
//meat
  {name: 'Eggs ', price: 250, image: require('./images/eggsmeat.jpg'),category:'meat'},
  {name: 'Fish', price: 150, image: require('./images/fishmeat.jpg'),category:'meat'},
  {name: 'Mutton', price: 125, image: require('./images/muttonmeat.jpg'),category:'meat'},
  {name: 'Chicken', price: 95, image: require('./images/chickenskinless.jpg'),category:'meat'},
//milk
  {name: 'Almond Milk ', price: 250, image: require('./images/almondmilk.jpg'),category:'milk'},
  {name: 'LowFat Milk', price: 150, image: require('./images/lowfatmilk.jpg'),category:'milk'},
  {name: 'Slim n Trim', price: 125, image: require('./images/slimtrimmilk.jpg'),category:'milk'},
  {name: 'Toned Milk', price: 95, image: require('./images/tonedmilk.jpg'),category:'milk'},
//tea
  {name: 'Red Label ', price: 250, image: require('./images/redlabeltea.jpg'),category:'tea'},
  {name: 'Society', price: 150, image: require('./images/societytea.jpg'),category:'tea'},
  {name: 'Tajmahal', price: 125, image: require('./images/tajmahaltea.jpg'),category:'tea'},
  {name: 'Tata Gold', price: 95, image: require('./images/tatagoldtea.jpg'),category:'tea'},
    ]}
}

export default allProductsList
