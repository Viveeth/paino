const WHITE_KEYS=  ['a','s','d','f','g','h','j']
const BLACK_KEYS=  ['q','w','e','r','t']

const keys = Document.queryselectorAll('.key')
const whitekeys=document.queryselectorAll('.key.white')
const blackkeys=document.queryselectorAll('.key.black')


keys.forEach(key => {
    key.addEventListener('click',()=>playNote(key))
    
});

document.addEventListener('keydown',e=>{
    if(e.repeat) return 
    const key =e.key
    const whitekeyindex = WHITE_KEYS.indexOf(key)
    const blackkeyindex = BLACK_KEYS.indexOf(key)


    if (whitekeyindex>-1) playNote(whitekeys[whitekeyindex])
    if (blackkeyindex>-1) playNote(blackkeys[blackkeyindex])
})

function playNote(key){
    const noteAudio= document.getElementById(key.dataset.note)
    noteAudio.currenttime = 0
    noteAudio.play()
    key.classlist.add('active')
    noteAudio.addEventListener('ended',()=>{
        key.classlist.remove('active')
    })
}