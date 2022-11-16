/* Login Page User */



var objPeople = [
	{
		firstName:'George',
		lastName:'Bluth',
		id:'1',
		gmail:'george.bluth@reqres.in'
	},
	{
		firstName:'Janet',
		lastName:'Weaver',
		id:'2',
		gmail:'janet.weaver@reqres.in'
	},
	{
		firstName:'Emma',
		lastName:'Wong',
		id:'3',
		gmail:'emma.wong@reqres.in'
	},
	{
		firstName:'Eve',
		lastName:'Holt',
		id:'4',
		gmail:'eve.holt@reqres.in'
	},
	{
		firstName:'Charles',
		lastName:'Morris',
		id:'5',
		gmail:'charles.morris@reqres.in'
	},
	{
		firstName:'Tracey',
		lastName:'Ramos',
		id:'6',
		gmail:'tracey.ramos@reqres.in'
	}

]

const btn = document.querySelector('#btn');
btn.addEventListener('click',function getInfo() {
	var firstName = document.getElementById('firstName').value
	var lastName = document.getElementById('lastName').value
	var id = document.getElementById('id').value
	var gmail = document.getElementById('gmail').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches firstName and lastName and id and gmail  of a current index of the objPeople array
		if(firstName == objPeople[i].firstName && lastName == objPeople[i].lastName && id == objPeople[i].id && gmail == objPeople[i].gmail) {
			alert('Welcome '+ firstName);
			
			document.querySelector('.container').classList.add('container-p')
			document.querySelector('.users').classList.add('users-p')
			// stop the function if this is found to be true
			return
		};

		

		
	};
})



/* End Login Page User */


/* Make ToDo List to delete or Edit  */
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector(".newList");
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const task = input.value;
		
		const task_el = document.createElement('div');
		task_el.classList.add('task');
		
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);
		
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');
		task_input_el.style.color='#fff';
		task_input_el.style.fontSize='1.8rem';
		task_content_el.appendChild(task_input_el);
		
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
		
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';
		
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		
		task_el.appendChild(task_actions_el);
		
		list_el.appendChild(task_el);
		
		input.value = '';
		
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
		
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});

/* End Make ToDo List to delete or Edit  */


/* Api User List From  https://reqres.in/api/users */

fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    console.log(json.data);
    const markup = json.data.map(el => {
        return `<div class='user'>
            <img src="${el.avatar}" alt="photo">
            <h1>${el.first_name}</h1>
			</div>
			`
    });
    document.querySelector('.listUser').innerHTML = markup.join('');

})



/* Api ToDo List From  https://jsonplaceholder.typicode.com/todos */


fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => {
    console.log(json);

    const markup = json.map(el => {
        
        return`
		<div class="task">
			<div class="content">
        		<p>${el.id}</p>
				<span>${el.title}</span>
				<span class='completed'>${el.completed}</span>		
			</div>
		</div>
		
        `	
    })
	
    document.querySelector('#tasks').innerHTML = markup.join('');	
});