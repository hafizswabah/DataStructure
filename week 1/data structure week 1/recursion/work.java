 class work {
    public static int check(int n){
        if (n<=1){
            return 1;
        }
        check(n-1);
        System.err.print(n);
        check(n-1);

        return n;
    }


    public static void main(String[] args) {
        check(5);

    }
}
