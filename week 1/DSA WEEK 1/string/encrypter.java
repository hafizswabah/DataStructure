public class encrypter {
    public static String change(String msg,int key){
        int newKey=key%26;
        char[] charArray=new char[msg.length()];
        for(int i=0;i<msg.length();i++){
            int letterPosition=msg.charAt(i)+newKey;
            if(letterPosition<=122){
                charArray[i]=(char)letterPosition;
            }else{
                charArray[i]=(char) (96+letterPosition%122);
            }

        }
        return new String(charArray);
    }

    public static void main(String[] args) {
        String value="hai";
        System.out.println(change(value, 2));
    }
}
