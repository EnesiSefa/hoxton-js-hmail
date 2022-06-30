import './style.css'


type State ={
  emails : Email[]// or Array<Email>
  filter : string
}

type Email = {
   
    from: string,
    header: string,
    content: string,
    emailAddress: string,
    img: string,
    read: boolean,
}


const state : State = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    // feel free to add more emails here
  ],
  filter: ''
}

function render(){
  renderEmails()
  getFilteredEmails()
  
  
}
render()


function renderEmails(){

  let ulEl = document.createElement("ul")
  ulEl.className = "emails-list"
let h1El = document.createElement("h1")
h1El.textContent = "Inbox"
let mainEl = document.querySelector("main")
mainEl.append(h1El,ulEl)

for(let email of state.emails){

  let liEl = document.createElement("li")
  liEl.className = "emails-list__item"
  liEl.addEventListener("click" , ()=>{
    mainEl.textContent = ""
    renderSingleEmail(email)
    
  })

  let spanEl = document.createElement("span")
  spanEl.className="emails-list__item__read-icon material-symbols-outlined"
  spanEl.textContent = "mark_email_unread"
   let imgEl = document.createElement("img")
   imgEl.className = "emails-list__item__image"
   imgEl.src = email.img

   let pEl = document.createElement("p")
   pEl.className = "emails-list__item__from"
   pEl.textContent = email.from

   let pEl2  = document.createElement("p")
   pEl2.className = "emails-list__item__content"
   pEl2.textContent = email.content

   

   
   ulEl.append(liEl)
   liEl.append(spanEl,imgEl,pEl,pEl2)
}}





function renderSingleEmail(email: Email){


  let sectionEl = document.createElement("section")
  sectionEl.className = "single-email"

  let btnEl = document.createElement("button")
  btnEl.className = "single-email__button"
  btnEl.textContent = "⬅Back"
  btnEl.addEventListener("click", ()=>{
    sectionEl.textContent =""
    render()
  })

  let mainEl = document.querySelector("main")
  mainEl.append(sectionEl)
  sectionEl.append(btnEl)

 
  let divEl = document.createElement("div")
  divEl.className = "single-email__sender-section"
  
   
  let imgEl = document.createElement("img")
  imgEl.className = "single-email__image"
  imgEl.src = email.img

  let spanEl = document.createElement("span")
  spanEl.className = "single-email__sender"
  spanEl.textContent = email.emailAddress

  let h1El = document.createElement("h1")
  h1El.className = "single-email__header"
  h1El.textContent = email.header

  let pEl = document.createElement("p")
  pEl.className = "single-email__content"
  pEl.textContent= email.content


 
  sectionEl.append(divEl,h1El,pEl)
  divEl.append(imgEl,spanEl)
}





function getFilteredEmails() {
  return state.emails.filter(
    email =>
      email.content.toLowerCase().includes(state.filter.toLowerCase()) ||
      email.from.toLowerCase().includes(state.filter.toLowerCase())
  )
}

  
    
 
let inputEl = document.querySelector<HTMLInputElement>('.filter-input')
if (inputEl) {
  inputEl.addEventListener('keydown', function (event) {
    if (inputEl == null) return
    if (event.key !== 'Enter') return

    state.filter = inputEl.value
  })
}




// Instructions
// Using the provided emails and template files:
// - Create all the state data you need to make your app work
// - When the app loads, render a list of emails
// - When a user clicks the email - render the page for that single email
// - Once the email has been opened at least once - mark it as read
// - See that search bar? Make it so when a user types something, you only display the emails who's sender's name contains that. (E.g. "nic" should only show Nico's email. "e" should show both Ed's and Government's emails. Take letter case into consideration, too)
// - Try to make it work when inside the single email view as well! i.e. entering a new search term and hitting enter should take you back to the email list view and show only the emails that match the filter. 

