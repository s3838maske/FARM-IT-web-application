//Btn Function Code

const Loginform = document.querySelector('.Loginform')

const Registerform = document.querySelector('.Registerform')

const forgotform = document.querySelector('.forgotform')

const adminLoginform = document.querySelector('.adminLoginform')

const mainlog = () => {
    Loginform.classList.add('Loginform-box')

}

const mainreg = () => {
    Registerform.classList.add('Registerform-box')
}

const forgotbtn = () => {
    forgotform.classList.add('forgotform-box')

}

const mainadmin = () => {
    forgotform.classList.add('adminLoginform-box')

}


//nav-bar hover add remove function
const currentlocation = location.href;
const menuitem = document.querySelectorAll('a');
const menulength = menuitem.length
for (let i = 0; i < menulength; i++) {
    if (menuitem[i].href === currentlocation) {
        menuitem[i].className = "active"
    }
} 

 