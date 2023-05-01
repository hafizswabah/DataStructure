public class linerSearch {
    public  static int findElement(char value,char[]array){
        for(int i=0;i<array.length;i++){
            if(array[i]==value){
               return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        char [] array={'d','a','p','a','t','t','i'};
        char value='s';

        int result=findElement(value, array)+1;
        if(result==0){
            System.out.println("No elements found");
        }else{

            System.out.println("element is founded a "   +result+ " positon");
        }
    }
}
