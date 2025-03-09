const preloadedHeader = document.querySelector('.mainheader')

async function loadHeader() {
    console.log('no header')
    
    const r = await fetch('./assets/preloadhtml/header.html')

    const header = await r.text()


    document.querySelector('body').prepend(header)

}

if (!preloadedHeader) loadHeader()