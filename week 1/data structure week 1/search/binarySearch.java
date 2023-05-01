public class binarySearch{
    public static int search(int [] array,int element){
       int left=0;
       int right=array.length-1;
       while(left<=right){
        int mid=(left+right)/2;
        if(array[mid]==element){
            return mid;
        }
        else if(array[mid]<element){
            left=mid+1;
        }else{
            right=mid-1;
        }
       }
        return -1;
    }
    public static void main(String[] args) {
        int [] array={1,2,3,4,5,6,7,8,9};
        int element=9;
        int result=search(array, element);
        System.out.println(result+1);
    }
}