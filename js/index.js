const html = document.querySelector('html')
const checkbox = document.getElementById('switch')
let darkMode = localStorage.getItem('dark-mode')

const enableDarkMode = () => 
{
    html.classList.toggle('dark-mode')
    checkbox.classList.remove('dark-mode')
    localStorage.setItem('dark-mode', 'enable')
    checkbox.checked = true
}

const disableDarkMode = () => 
{
    html.classList.toggle('dark-mode')
    checkbox.classList.remove('dark-mode')
    localStorage.setItem('dark-mode', 'disable')
    checkbox.checked = false
}

if (darkMode === 'enable')
{
    enableDarkMode()
}

checkbox.addEventListener('change', function() 
{
    darkMode = localStorage.getItem('dark-mode')
    if (darkMode === 'disable')
    {
        enableDarkMode()
       
    }
    else
    {
        disableDarkMode()
       
    }

})

function clickMenu()
{
    if(itens.style.display == 'block')
    {
        itens.style.display = 'none'
    } 
    else
    {
        itens.style.display = 'block'
    }
}

function screenSize()
{
    if (window.innerWidth >= 768)
    {
        itens.style.display = 'block'
    }
    else
    {
        itens.style.display = 'none'
    }
}