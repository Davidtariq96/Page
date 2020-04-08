let Data = [
  {principal :2500, Time:1.80},
  {principal :1000, Time:5},
  {principal:3000, Time:1},
  {principal:2000, Time:3}
];
let interestCalculator = arr =>{
  arr.forEach(i =>{
      
      if(i.principal >= 2500 && i.Time > 1 && i.Time < 3){
          rate = 3;
      } if(i.principal >=2500 && i.Time >= 3){
          rate = 4;
      } if(i.principal < 2500 || i.Time <= 1){
          rate= 2;
      } else{
          rate = 1;
      }
      let interest = (i.principal* i.Time * rate)/100;
      let interestData = [{
          principal : i.principal,
          Time : i.Time,
          rate : rate,
          interest : interest
      }];
      console.log(interestData);
      return interestData;
  });
};
interestCalculator(Data);