function timeConversion(s) {
    // Write your code here
    let militaryHour = '';
    
   if (s.includes('AM')) {
       if (s.substring(0,2) === '12'){
           militaryHour = '00'; 
       } else {
           militaryHour = s.substring(0,2);
       }
   } else {
       if (s.substring(0,2) === '12'){
           militaryHour = s.substring(0,2);
       } else {
           militaryHour = parseInt(s.substring(0,2), 10) + 12;
       }
   }
   
   return militaryHour + s.substring(2,8);
}

    // 12AM => 00:00
    // 01AM - 12PM = Same
    // 01PM - 11PM = Same + 12