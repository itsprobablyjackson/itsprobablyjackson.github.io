const preloadedHeader = document.querySelector('.mainheader')

async function loadHeader() {
    console.log('no header')
    
    const r = await fetch('/assets/preloadhtml/header.html')

    const header = await r.text()

    const newHeader = document.createElement('header')
    newHeader.className = 'mainheader'
    newHeader.innerHTML = header

    document.querySelector('body').prepend(newHeader)

}

if (!preloadedHeader) loadHeader()