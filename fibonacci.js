/ **
 * Retorne uma sequência de fibonacci como um array.
 *
* @param n
* @return { número [] }
 * /
 função padrão de  exportação fibonacci ( n ) {  
  const  fibSequence  =  [ 1 ] ;

  deixe  currentValue  =  1 ;
  deixe  previousValue  =  0 ;

  if  ( n  ===  1 )  {
    return  fibSequence ;
  }

  deixe  iterationsCounter  =  n  -  1 ;

  while  ( iterationsCounter )  {
    currentValue  + =  previousValue ;
    previousValue  =  currentValue  -  previousValue ;

    fibSequence . push ( currentValue ) ;

    iterationsCounter  - =  1 ;
  }

  return  fibSequence ;
}