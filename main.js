const _supabase = supabase.createClient('https://vhspscomjwkvdtqgpsqd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc3BzY29tandrdmR0cWdwc3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0NDg3MjUsImV4cCI6MTk3NzAyNDcyNX0.7SbUAet6KDNJCO4ygiUdHj5XHNBLZ0aV7MrX9bmdDkI')
const submitButton = document.querySelector('#submit');             //
const tasksContainer = document.querySelector('#container');  //  Selecting elements from the DOM
const inputTask = document.querySelector('#add-task');              //
const userInfo = {
    "id": null,
    "tasks": []
}


function add(target) {
        tasksContainer.innerHTML += `<div id="task" class="p-3 border-b-2 flex justify-between w-96">
    <p class="w-4/5">${target}</p>
    <div class="flex space-x-2 h-8 w-1/5">
        <button class="bg-green-500 p-2 rounded-xl hover:bg-green-700"><img class="h-4" src="./edit.svg" alt="edit"></button>
        <button onclick="remove(this)" class="bg-red-500 p-2 rounded-xl hover:bg-red-700"><img class="h-4" src="./trash.svg" alt="delete"></button>
    </div>
</div>`;
}

function remove (target) {
    // console.log(target.parentNode.parentNode);
    target.parentNode.parentNode.remove();
}


function login() {
    const modal = document.querySelector('#login');
    modal.showModal();
}

function register() {
    const modal = document.querySelector('#register');
    modal.showModal();
}

function closeModal(target) {
    // const modal = document.querySelector('#login');
    target.parentNode.close();
}

let user;
async function signin() {
    const { user, session, error } = await _supabase.auth.signIn({
        email: 'bagej20428@pelung.com',
        password: '123456',
      })

      console.log(user);
      console.log(session);
      console.log(error);

      userInfo.id = user.id;

    //   getData();
}
// signin();

async function signOut() {
    const { error } = await _supabase.auth.signOut();
    console.log(error);
    console.log(user);
    localStorage.removeItem('supabase.auth.token'); //Supabase wasn't removing from localStorage so I had to do it manually.
}
// signOut();

const session = _supabase.auth.session()
// console.log(session);
// console.log(session.user.id);
userInfo.id = session.user.id;


const postData = async () => {
    const { data, error } = await _supabase
    .from('Todos')
    .insert([{ task: 'clean room', user_id: userInfo.id}])

  console.log(data);
  console.log(error);
}
// postData();

const getData = async () => {
    let { data: items, error } = await _supabase
    .from('Todos')
    .select('task')
    .match({user_id: userInfo.id});

    // console.log(items);
  
    //   console.log(items[0].name);
    //   console.log(error);
    items.forEach(item => {
        // console.log(item.task);
        userInfo.tasks.push(item.task);
        add(item.task);
    });

}
getData();
// console.log(userInfo);

// const deleteData = async (value) => {
//     const { data, error } = await client
//     .from('Todos')
//     .delete()
//     .match({ task: value })

//     console.log(data);
// }


// Supabase

// console.log(Supabase-js);



// const { createClient } = supabase
// const _supabase = createClient(
//     'https://vhspscomjwkvdtqgpsqd.supabase.co', 
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc3BzY29tandrdmR0cWdwc3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0NDg3MjUsImV4cCI6MTk3NzAyNDcyNX0.7SbUAet6KDNJCO4ygiUdHj5XHNBLZ0aV7MrX9bmdDkI'
//     )

// const client = supabase.createClient('https://vhspscomjwkvdtqgpsqd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc3BzY29tandrdmR0cWdwc3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0NDg3MjUsImV4cCI6MTk3NzAyNDcyNX0.7SbUAet6KDNJCO4ygiUdHj5XHNBLZ0aV7MrX9bmdDkI')

// Both of the above method of initiating supabase are correct.

//   console.log('Supabase Instance: ', client)

//   console.log(supabase);

// const getData = async () => {
//     let { data: items, error } = await client
//     .from('items')
//     .select('name')

//     console.log(items);
  
// //   console.log(items[0].name);
// //   console.log(error);

// }
// const postData = async () => {
//     const { data, error } = await client
//     .from('items')
//     .insert([{ name: 'Item four'}])

//   console.log(data);
// //   console.log(error);
// }

// const updateData = async () => {
//     const { data, error } = await client
//     .from('items')
//     .update({ name: 'Fourth item' })
//     .match({ name: 'Item 4' })

//     console.log(data);
//     // console.log(error);
// }

// getData();
// // postData();
// updateData();
// getData();

// console.log(client);
// Authorization token: sbp_62b85233c90b9dac211d5f27fd239ce5dc93e7fe