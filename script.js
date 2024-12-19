const preloader = document.createElement('img')
preloader.classList.add('preloader')
preloader.src = 'img/hp-blog-spinner-example.png'


const preloaderWrapper = document.createElement('div')
preloaderWrapper.classList.add('preloader-wrapper')
preloaderWrapper.appendChild(preloader)


document.body.appendChild(preloaderWrapper)