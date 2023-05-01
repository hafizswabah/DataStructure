

class copy {
 public static int[] twoNuberSum(int[] array,int target){
    for(int i=0;i<array.length-1;i++){
        for(int j=i+1;j<array.length;j++){
            if(array[i]+array[j]==target){
                return new int[]{array[i],array[j]};
            }
        }
    }
    return new int[0];
 }

 public static void main(String[] args) {
    int [] array={1,2,3,4,5,7};
    int element=10;

    int[] result=twoNuberSum(array, element);
    for(int i=0;i<result.length;i++){
        System.out.println(result[i]);
    }
 }

}
