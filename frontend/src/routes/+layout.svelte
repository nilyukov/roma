<script>
	import '../app.pcss';
    import {Fa} from "svelte-fa";
    import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
    import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";

    let isMobileMenuOpen = true
    function setShowMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<header class="header">
    <div class="container mx-auto">
        <nav class="nav padding">
            <a href="/">
                <img src={'/images/logo.svg'} alt="logo" width="242" height="73"/>
            </a>

            <ul class="nav-list">
                <li><a href="#" class="py-4">Свидетели геноцида</a></li>
                <li><a href="#" class="py-4">Карта</a></li>
                <li><a href="#" class="py-4">Материалы</a></li>
                <li><a href="#" class="py-4">Новости</a></li>
            </ul>

            <div class="fixed top-0 {isMobileMenuOpen ? '-right-full' : 'right-0'} bottom-0 z-30 w-full sm:w-[300px] h-screen transition-all duration-200">
                <div class="w-full h-full bg-secondary p-8">
                    <button type="button"
                            on:click={setShowMobileMenu}
                            class="flex justify-end mb-8 cursor-pointer">
                        <Fa icon={faXmark}/>
                    </button>
                    <ul class="nav-list-mobile">
                        <li><a href="#" class="py-4">Свидетели геноцида</a></li>
                        <li><a href="#" class="py-4">Карта</a></li>
                        <li><a href="#" class="py-4">Материалы</a></li>
                        <li><a href="#" class="py-4">Новости</a></li>
                    </ul>
                </div>
            </div>

            <button type="button"
                    on:click={setShowMobileMenu}
                    class="text-3xl md:hidden cursor-pointer">
                <Fa icon={faBars}/>
            </button>
        </nav>
    </div>
</header>

<slot />

<footer class="footer">
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-end gap-6 padding">
            <div class="w-72">
                <h4 class="text-2xl">Правовая информация</h4>
                <ul class="mt-1 list-none ">
                    <li class="py-2.5">
                        <a href="#">Выходные данные</a>
                    </li>
                    <li class="py-2.5">
                        <a href="#" >Соглашение о конфиденциальности</a>
                    </li>
                </ul>
            </div>
            <div class="w-72 flex flex-nowrap gap-2">
                <span>©</span>
                <span>Общественное объединение “Ромская диаспора”, 2024</span>
            </div>
        </div>
    </div>
</footer>
