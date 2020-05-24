

import java.util.*;

public class RainWaterHarvesting {

    public static int findTrappedWater(int arr[]) {
        if(arr.length ==0 || arr.length == 1)
            return 0;
        int total = 0;
        int subTotal = 0 ;
        int left_max = arr[0];
        int left_max_index = 0;
        int prev = arr[0];
        for(int i=1 ;i<arr.length;i++){
            if(arr[i] >= left_max){
                total += left_max * (i - left_max_index);
                subTotal = 0;
                left_max = arr[i];
                left_max_index = i;
                prev = arr[i];
            }else{
                if(arr[i] <= prev) {
                    subTotal += arr[i];
                    prev = arr[i];
                }else{
                    subTotal = arr[i] * (i - left_max_index);
                    prev = arr[i];
                }
            }
        }
        return total + subTotal;
    }
    public static void main(String[] args) {
        int arr[] = { 1, 1000, 2000, 1 };
        System.out.println("Water trapped :"  + findTrappedWater(arr));
    }
}

