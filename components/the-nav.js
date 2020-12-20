const TheNav = {

    date(){
        return {
            navul: [
                {
                    id:1,
                    htmlId: 'nav-1',
                    ahref: '/', 
                }
            ]
        }
    },

    template:
        `<nav class="navbar">
    <a href="./" class="nav-logo navbar-brand">
        <img class="got-logo" alt="Game of Thrones" src="./assets/got-logo-200x88.png" />
    </a>

    <ul class="nav justify-content-end">
        <li class="nav-item" id="nav-1">
            <a class="nav-link" href="./">Characters</a>
        </li>
        <li v-for="nav in navul" class="navitem" id="nav.htmlId">
            <a class="nav-link" :href="nav.ahref">Characteres</a>
        </li>
    </ul>
</nav>`
};