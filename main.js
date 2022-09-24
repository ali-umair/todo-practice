const client = supabase.createClient('https://vhspscomjwkvdtqgpsqd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc3BzY29tandrdmR0cWdwc3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0NDg3MjUsImV4cCI6MTk3NzAyNDcyNX0.7SbUAet6KDNJCO4ygiUdHj5XHNBLZ0aV7MrX9bmdDkI')
const submitButton = document.querySelector('#submit');             //
const tasksContainer = document.querySelector('.tasks-container');  //  Selecting elements from the DOM
const inputTask = document.querySelector('#add-task');              //



// Supabase

// console.log(Supabase-js);

// const { createClient } = supabase
// const _supabase = createClient(
//     'https://vhspscomjwkvdtqgpsqd.supabase.co', 
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc3BzY29tandrdmR0cWdwc3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0NDg3MjUsImV4cCI6MTk3NzAyNDcyNX0.7SbUAet6KDNJCO4ygiUdHj5XHNBLZ0aV7MrX9bmdDkI'
//     )

// Both of the above method of initiating supabase are correct.

//   console.log('Supabase Instance: ', client)

//   console.log(supabase);

// console.log(client);
// Authorization token: sbp_62b85233c90b9dac211d5f27fd239ce5dc93e7fe