

const Navbar = () =>{
    return (
        <>
            <nav className="navbar " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                    {/* images for the logo */}
                    <p className="is-size-4 has-text-weight-bold has-icon-right">Ducks
                        <span>
                            <i className="bi bi-feather2" />
                        </span>
                    </p>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item" href="#">Home</a>
                    <a className="navbar-item" href="#">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable" id="dropdownwalatab">
                        <a className="navbar-link">More</a>
                        <div className="navbar-dropdown">
                        <a className="navbar-item" href="#">About</a>
                        <a className="navbar-item" href="#">Jobs</a>
                        <a className="navbar-item" href="#">Contact</a>
                        <a className="navbar-item" href="#">Report an issue</a>
                        </div>
                    </div>
                    </div>
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <input className="input" type="text" placeholder="Search" />
                        <button className="button has-icon-left has-icon is-text button-navbar">
                            <span>
                                <i className="bi bi-search" />
                            </span>
                        </button>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

document.addEventListener("DOMContentLoaded", ()=>{
    
    const toggeBtn = document.querySelector(".navbar-burger");
    const menuDrop = document.querySelector(".navbar-menu");
    const dropdownTrigger = document.querySelector(".navbar-link");
    const dropdownMenu = document.querySelector(".navbar-dropdown");
 
    console.log(toggeBtn);
    console.log(menuDrop);
    console.log(dropdownTrigger);
    console.log(dropdownMenu);
    
    // Navbar toggle
    if (toggeBtn && menuDrop) {
        toggeBtn.addEventListener("click", () => {
            menuDrop.classList.toggle("is-active");
        });
    }
    // Dropdown toggle
    // if (dropdownTrigger && dropdownMenu) {
    //     dropdownMenu.style.display = "none";
    //     dropdownTrigger.addEventListener("click", (event) => {
    //         event.stopPropagation();
    //         dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
    //     });
    //     document.addEventListener("click", (event) => {
    //         if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
    //             dropdownMenu.style.display = "none";
    //         }
    //     });
    // } else {
    //     console.error("Dropdown elements not found!");
    // }
})


export default Navbar;