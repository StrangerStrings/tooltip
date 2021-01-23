const thmb = document.querySelector('.thumbnail')
const tStyle = getComputedStyle(thmb);
const tSize = parseInt(tStyle.inlineSize)
const tMarg = parseInt(tStyle.marginLeft)
const tTotal = tSize + 2*tMarg

let debounce = false

const onResize = new ResizeObserver(entries => {
    if (debounce) {
        return;
    }
    debounce = true
    setTimeout(()=> {
        const cntr = document.querySelector('.container')
        const cStyle = getComputedStyle(cntr);
        const cSize = parseInt(cStyle.inlineSize) 
        const cPadd = parseInt(cStyle.paddingLeft)
        const cTotal = cSize - 2*cPadd
         
        const itemsPerRow = Math.floor(cTotal / tTotal);
    
        const thumbnails = document.querySelectorAll('.thumbnail')
        for (let i = 0; i < thumbnails.length; i++) {
            const thumb = thumbnails[i]
            const lastOnRow = (i+1)%itemsPerRow == 0
            if (lastOnRow) {
                thumb.classList.add('edge')
            } else {
                thumb.classList.remove('edge')
            }
        }
        debounce = false
    }, 1000)
})

const container = document.querySelector('.container')
onResize.observe(container)

//add content 
const tooltips = document.querySelectorAll('.info')
for (let i = 0; i < tooltips.length; i++) {
    const tip = tooltips[i];
    const rand = Math.ceil(Math.random()*15.8)
    tip.innerHTML = '<p>qwertyuiop:123456789</p>'.repeat(rand)
}
