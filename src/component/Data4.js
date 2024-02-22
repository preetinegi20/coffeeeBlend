let list4 = [
  {
    id: 17,
    img: require("../images/CoffeeBestSeller/pexels-polina-kovaleva-5430755.jpg"),
    pName: "COFFEE CAPECCINO",
    disc: "Even the all-powerful Pointing has no control about ",
    price: 20,
    quant: 1,
    ttrwpp: 20,
  },
  {
    id: 18,
    img: require("../images/CoffeeBestSeller/pexels-gül-işık-2615323 (1).jpg"),
    pName: "COFFEE CAPECCINO",
    disc: "Even the all-powerful Pointing has no control about ",
    price: 20,
    quant: 1,
    ttrwpp: 20,
  },
  {
    id: 19,
    img: require("../images/CoffeeBestSeller/pexels-feyza-yıldırım-12252713.jpg"),
    pName: "COFFEE CAPECCINO",
    disc: "Even the all-powerful Pointing has no control about ",
    price: 20,
    quant: 1,
    ttrwpp: 20,
  },
  {
    id: 20,
    img: require("../images/CoffeeBestSeller/pexels-polina-kovaleva-5430755.jpg"),
    pName: "COFFEE CAPECCINO",
    disc: "Even the all-powerful Pointing has no control about ",
    price: 20,
    quant: 1,
    ttrwpp: 20,
  },
  {
    id: 21,
    img: require("../images/CoffeeBestSeller/pexels-gül-işık-2615323 (1).jpg"),
    pName: "COFFEE CAPECCINO",
    disc: "Even the all-powerful Pointing has no control about ",
    price: 20,
    quant: 1,
    ttrwpp: 20,
  },
  {
    id: 22,
    img: require("../images/CoffeeBestSeller/pexels-feyza-yıldırım-12252713.jpg"),
    pName: "COFFEE CAPECCINO",
    disc: "Even the all-powerful Pointing has no control about ",
    price: 20,
    quant: 1,
    ttrwpp: 20,
  },
  {
    id: 23,
    img: require("../images/items/cup-hot-latte-art-with-latte-art-wooden-backgroundcup-coffee-with-latte-art-table-c_1016228-7350.avif"),
    pName: "CREAMY LATTE COFFEE",
    disc: "Even the all-powerful Pointing has no control about ",
    price: 24.32,
    quant: 1,
    ttrwpp: function () {
      this.ttrwpp = this.price;
    },
    dropDsize: function (setPpValue) {
      // let val;
      // this.ttrwpp = this.price;
      let dropDofSingleProd =
        document.getElementById("dropDofSingleProd").value;
      //  = val;
      // console.log(dropDofSingleProd);
      if (dropDofSingleProd == "Small") {
        this.price = 24.32;
        setPpValue(this.price);
      } else if (dropDofSingleProd == "Medium") {
        this.price = 34.32;
        setPpValue(this.price);
      } else if (dropDofSingleProd == "Large") {
        this.price = 44.32;
        setPpValue(this.price);
      }
    },
    qntChange: function (i, setCount) {
      this.quant = this.quant + i;
      if (this.quant === 0) this.quant = 1;
      setCount(this.quant);
      // let ppValue = document.getElementsByClassName("pp")[0].innerText;
      this.ttrwpp = this.quant * this.price;
    },
  },
];
export default list4;
