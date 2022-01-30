

const  Sort=(nums)=>
{ 

	let n = nums.length;
    
	for (let a = 0; a < (n-1); a++)
    {
		for (let j = 0; j < (n-1-a); j++)
        {
				if (nums[j+1] < nums[j])
                {
						let t = nums[j+1]; 
						nums[j+1] = nums[j]; 
						nums[j] = t; 
				}
	   }
	 }
		return nums;
}



const SumInput=()=>
{

    let sum = 0;  
    let nums=[];

    for(;;)
        {

        let value = +prompt("Введите число", '');

            if (!value) break;
                {
                    sum += value;
                    nums.push(value);
                    console.log(nums);

                }

        }

        Sort(nums);
        alert( `Введеные числа ${nums} Сумма:  ${sum}` );

}

btn.onclick=SumInput;