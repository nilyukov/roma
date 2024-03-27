<script>
    import emblaCarouselSvelte from 'embla-carousel-svelte'
    import Autoplay from 'embla-carousel-autoplay'

    let options = {loop: false}
    let plugins = [Autoplay()]

    const persons = [
        {
            name: 'Нина Янковская',
            text: '“Мы выжили благодаря партизанам. От них была защита, приют и еда”',
            img: './images/persons/nina-yankovskaya.png'
        },
        {
            name: 'Виктор Мурачковский',
            text: '“Спел песню, и остался живым”',
            img: './images/persons/viktor-murachkovskij.png'
        },
        {
            name: 'Николай Лукьяненко',
            text: '“Фашисты хотели стереть с лица земли нашу гордую и свободолюбивую нацию...”',
            img: './images/persons/nikolaj-lukyanenko.png'
        },
        {
            name: 'Любовь Мурадинская',
            text: '“Я родилась в лагере Освенцим”',
            img: './images/persons/lyubov-muradinskaya.png'
        },
        {
            name: 'Галина Александрович',
            text: '“Стреляли в грудь, в плечи, и только потом в голову, чтобы видеть страх на лицах людей...”',
            img: './images/persons/galina-alexandrovich.png'
        },
        {
            name: 'Мария Иванова',
            text: '“Смотрели на цвет кожи: если светлая, значит не ромка...”',
            img: './images/persons/mariya-ivanova.png'
        },
        {
            name: 'Василий Евдокимов',
            text: '“Он плакал и просил: запишите меня в поминальную...”',
            img: './images/persons/vasiliy-evdokimov.png'
        }
    ];
    const news = [
        {
            title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
            date: '03 АВГУСТА 2021, 10:51',
            img: './images/news.png'
        },
        {
            title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
            date: '03 АВГУСТА 2021, 10:51',
            img: './images/news.png'
        },
        {
            title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
            date: '03 АВГУСТА 2021, 10:51',
            img: './images/news.png'
        },
        {
            title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
            date: '03 АВГУСТА 2021, 10:51',
            img: './images/news.png'
        }
    ];
</script>

<div class="content">
    <div class="w-full h-full fixed left-0 top-0 z-10 pointer-events-none">
        <div class="container mx-auto h-full">
            <div class="w-full h-full flex flex-row justify-between">
                <div class="w-[1px] h-full border-l border-current opacity-10"></div>
                <div class="w-[1px] h-full border-l border-current opacity-10"></div>
                <div class="hidden md:block w-[1px] h-full border-l border-current opacity-10"></div>
                <div class="hidden lg:block w-[1px] h-full border-l border-current opacity-10"></div>
                <div class="hidden lg:block w-[1px] h-full border-l border-current opacity-10"></div>
            </div>
        </div>
    </div>

    <main class="overflow-hidden">
        <section class="main-screen">
            <div class="container mx-auto h-full">
                <div class="flex flex-col justify-center items-start gap-10 lg:gap40 h-full py-10 sm:py-0">
                    <h1 class="flex flex-col gap-1 padding">
                        <span class="text-fill-transparent bg-clip-text bg-gradient-to-b from-peat to-transparent">ГЕНОЦИД РОМА ВО ВРЕМЯ</span>
                        <span class="text-fill-transparent bg-clip-text bg-gradient-to-b from-peat to-transparent">ВТОРОЙ МИРОВОЙ ВОЙНЫ</span>
                        <span class="text-fill-transparent bg-clip-text bg-gradient-to-b from-peat to-transparent">В БЕЛАРУСИ</span>
                    </h1>
                    <div class="w-full md:w-3/4 lg:w-1/2 lg:ml-auto border-l-2 border-white  md:pl-2">
                        <p class="text-white text-xs md:text-sm font-noto-sans font-normal mb-4">Геноцид в отношении народа рома долгое время оставался неизвестной
                            страницей нашей истории. Благодаря инициативе Белорусской ромской диаспоры данная тема стала
                            известна широкой аудитории. С помощью архивных материалов и интервью со свидетелями мы получили
                            представления о масштабах и форме геноцида.</p>
                        <p class="text-white text-xs sm:text-sm font-noto-sans font-normal">Данный сайт содержит наиболее полную информацию о геноциде рома во
                            время Второй мировой войны в Беларуси 1941-1944 гг., включая интервью со свидетелями событий,
                            архивные документы, научную литературу.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="container mx-auto">
                <div class="flex flex-col-reverse md:flex-row justify-between gap-y-6">
                    <div class="padding">
                        <h2 class="mb-6">Забытый геноцид</h2>
                        <p class="text-xl font-light mb-10">
                            При помощи новых архивных материалов и воспоминаний очевидцев Белорусская ромская диаспора заново открыла историю неизвестного геноцида рома
                        </p>
                        <a href="#" class="link">Читать материал</a>

                    </div>
                    <div class="w-full md:w-[var(--grid-col-width)] lg:w-[calc(var(--grid-col-width)_*_2)] shrink-0 padding">
                        <img src="./images/history.png" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="container mx-auto">
                <div class="flex justify-between items-center gap-2 mb-6">
                    <h2 class="padding">Интервью со свидетелями</h2>
                    <a href="#" class="link-btn">Смотреть все</a>
                </div>

                <div class="embla" use:emblaCarouselSvelte="{{options, plugins}}">
                    <div class="embla__container">
                        {#each persons as person}
                            <div class="embla__slide padding">
                                <article class=" lg:h-[482px] bg-dark-charcoal flex flex-col-reverse md:flex-row justify-between items-stretch gap-4 p-12">
                                    <div class="flex-1 flex flex-col justify-between gap-4">
                                        <blockquote>
                                            <p class="text-2xl font-noto-sans font-normal mb-8">{person.text}</p>
                                            <cite class="text-xl font-noto-sans font-thin not-italic">{person.name}</cite>
                                        </blockquote>
                                        <a href="#" class="link">Смотреть интервью</a>
                                    </div>
                                    <div class="w-[290px]">
                                        <img src={person.img} alt={person.name} class="w-full h-full object-cover">
                                    </div>
                                </article>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="container mx-auto">
                <div class="flex flex-col gap-10">
                    <h2 class="padding mb-6">Карта мест уничтожения рома</h2>
                    <a href="#" class="link-btn">Изучать</a>
                </div>
                <div class="flex justify-center">
                    <img src="./images/Belarus.svg" alt="Belarus">
                </div>
            </div>
        </section>

        <section>
            <div class="container mx-auto">
                <div class="flex flex-col">

                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="container mx-auto h-full relative">
                <h2 class="padding mb-6">Новости</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
                    {#each news as item}
                        <article class="w-full md:w-[calc(var(--grid-col-width)_-_24px)] h-[511px] mx-auto overflow-hidden rounded-lg">
                            <div class="h-full flex flex-col items-stretch bg-white">
                                <div class="w-full h-[203px] rounded-lg">
                                    <img src={item.img} alt={item.title} class="w-full h-full object-cover">
                                </div>
                                <div class="flex flex-col justify-between items-stretch text-black h-full">
                                    <div class="p-4">
                                        <span>{item.date}</span>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <a href="#" class="p-4 flex justify-between items-center border-t border-black after:w-[34px] after:h-[34px] after:bg-[url('./icons/black-arrow-right.svg')] after:bg-no-repeat after:bg-center after:bg-cover after:shrink-0">
                                        Читать далее
                                    </a>
                                </div>
                            </div>
                        </article>
                    {/each}
                </div>
            </div>
        </section>
    </main>
</div>
