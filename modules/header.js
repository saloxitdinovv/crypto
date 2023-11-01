let header = document.querySelector('header')

let headBox1 = document.createElement('div')
let searchBox = document.createElement('div')
let input = document.createElement('input')
let img = document.createElement('img')

headBox1.classList.add('head_box')
searchBox.classList.add('search')

input.setAttribute('type', 'text')
input.setAttribute('name', 'search')
img.src = '/public/search.svg'


let headBox2 = document.createElement('div')
let postButton = document.createElement('button')
let postImg = document.createElement('img')
let messageButton = document.createElement('button')
let messageImg = document.createElement('img')


headBox2.classList.add('head_box')
postButton.classList.add('post')
postImg.src = '/public/post.svg'
messageButton.classList.add('message')
messageImg.src = '/public/message.svg'

header.append(headBox1, headBox2)

headBox1.append(searchBox)
headBox2.append(postButton, messageButton)

searchBox.append(input,img)
postButton.append(postImg)
messageButton.append(messageImg)