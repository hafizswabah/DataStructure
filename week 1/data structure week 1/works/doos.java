import javax.swing.plaf.basic.BasicBorders.RadioButtonBorder;

public class doos{

   
    public static int linearSearch(int[] array,int element){
        for(int i=0;i<array.length;i++){
            if(array[i]==element){
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] array={22,33,44,55,666};
        int element=33;
        int result=linearSearch(array, element)+1;
        if(result==0){
            System.out.println("no element found");
            return;
        }
        System.out.println(result);
        
    }

}