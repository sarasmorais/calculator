class ThemeSwicher{
    constructor(){
        this.themeToggle = document.getElementById('theme-toggle')
        this.currentTheme = localStorage.getItem ('theme') || "ligth"

        this.initTheme()
        this.initEventListeners()
    }

    initTheme(){
        if(
            this.currentTheme === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme:dark)').matches)
        ){
            document.documentElement.setAttribute("data-theme", dark)
            this.currentTheme === "dark"
        } else{
            document.documentElement.removeAttribute("data-theme")
            this.currentTheme = "ligth"
        }

        localStorage.setItem("theme",this.currentTheme)

    }

    initEventListeners(){
        this.themeToggle.toggleAttribute.addEventListeners('click',() => {
            this.toggleTheme()})

        window.matchMedia('(prefers-color--scheme:dark)').addEventListeners('change',(e)=>{
            if(!localStorage.getItem('theme')){
                this.currentTheme = e.matches ? "dark" : "ligth"
                this.initTheme()
            }
        })


    }

    toggleTheme(){
        if (this.currentTheme === "ligth"){
            document.documentElement.setAttribute('data-theme','dark')
            this.currentTheme = 'dark'
        } else{
            document.documentElement.removeAttribute('data-theme')
            this.currentTheme = 'ligth'
        }
        localStorage.setItem("theme",this.currentTheme)
    }

}

document.addEventListener('DOMContentLoaded',() => {
    const themeSwicher  = new ThemeSwicher()
} )