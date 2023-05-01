 class third {
   public static void moveElement(int[] array,int element)
    {
   int l=array.length;
   int i=0;

   while(i<l &&array[i]!=element){
      i++;
   }
   for(int j=i+1;j<l;j++){
      if(array[j]!=element){
         array[i++]=array[j];
         array[j]=element;
      }
    
   }
 
   }

   public static void main(String[] args) {
      int []array={1,2,3,1,4,1,5,1};
      for (int i=0;i<array.length;i++){
         System.out.println(array[i]);
      }
      int element=1;

      System.out.println("new Array");
    moveElement(array, element);
      for(int i=0;i<array.length;i++){
         System.out.println(array[i]);
      }
   }

}
