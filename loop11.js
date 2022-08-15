// prime or not
 var num=17
  for(i=2;i<=num;i++) //let koduthal for loop nte ullil vare maathre value kitu
  {
      if(num%i=0){
          break;
      }
  }
  if(num==i){
      console.log("prime");
  } else{
      console.log("not prime");
  }
