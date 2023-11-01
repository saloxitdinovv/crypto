// import { user } from '/modules/user'


let aside = document.querySelector('aside')
let title = document.createElement('div')
let h1 = document.createElement('h1')
let hr = document.createElement('hr')
let nav = document.createElement('nav')
let hr_2 = document.createElement('hr')
let profile = document.createElement('div')
let profile_img = document.createElement('img')
let profile_text = document.createElement('p')
let logOut = document.createElement('div')
let logOut_img = document.createElement('img')
let logOut_text = document.createElement('p')



let nav_menus = []
let menu_names = []
let menu_icons = []

for (let i = 0; i < 5; i++) {
    let nav_menu = document.createElement('div')
    let menu_name = document.createElement('a')
    let menu_icon = document.createElement('img')

    nav_menu.classList.add('nav_menus')

    nav_menus.push(nav_menu)
    menu_names.push(menu_name)
    menu_icons.push(menu_icon)
    nav.append(nav_menu)
    nav_menu.append(menu_icon,menu_name)
}

nav_menus.forEach((nav_menu) => {
    nav_menu.onclick = () => {
        nav_menus.forEach((menu) => {
            menu.classList.remove('nav_menu_active')
        })
        nav_menu.classList.add('nav_menu_active')
    }
})


nav_menus[0].classList.add('nav_menu_active')
profile.classList.add('profile')
logOut.classList.add('logout')


h1.innerHTML = 'valuet'
menu_names[0].innerHTML = 'Overview'
menu_names[1].innerHTML = 'Wallets'
menu_names[2].innerHTML = 'Transactions'
menu_names[3].innerHTML = 'Exchange'
menu_names[4].innerHTML = 'Market'
profile_text.innerHTML = 'User'
logOut_text.innerHTML = 'Log Out'


menu_icons[0].src = '/public/overview.svg'
menu_icons[1].src = '/public/wallet.svg'
menu_icons[2].src = '/public/transaction.svg'
menu_icons[3].src = '/public/exchange.svg'
menu_icons[4].src = '/public/market.svg '

profile_img.src = '/public/round.svg'
logOut_img.src = '/public/logout.svg'

menu_names[2].href = '/pages/transactions/'


title.classList.add('title')

aside.append(title,nav,hr_2,profile,logOut)
title.append(h1,hr)
profile.append(profile_img,profile_text)
logOut.append(logOut_img,logOut_text)