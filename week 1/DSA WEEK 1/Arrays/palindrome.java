class palindrome{
    public static boolean checkPalindrome(String s){
        int left=0;
        int right=s.length()-1;
        while(left<right){
            if(s.charAt(left)!=s.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

   public static void main(String[] args) {
    String s="racecar";
    System.out.println(s);

 if(checkPalindrome(s)){
    System.out.println("palindrome");
 }else{
    System.out.println("not  palindrome");
 }

 String str="shijas";
 System.out.println(str);
 if(checkPalindrome(str)){
    System.out.println("palindrome");
 }
 else{
    System.out.println("not palindrome");
 }
   }

}