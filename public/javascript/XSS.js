function handlechange(){
    console.log("clicky");
      localStorage.setItem(pageKey, 'Finished');
 }
 
 //  create a unique key for this page
   const pageKey = 3;
 
   // Check if the status is already stored in localStorage for this page
   const status = localStorage.getItem(pageKey) || 'Not Started';
 
   // Update the status to 'In Progress' when the page is loaded
   localStorage.setItem(pageKey, 'In Progress');
    
     // console.log(`Page Status for ${pageKey}: ${status}`);
 