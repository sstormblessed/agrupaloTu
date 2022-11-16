import { data } from 'cypress/types/jquery'
import './style.css'
import { createRandomGroups } from './utils'

document.getElementById('group').addEventListener('group', handlerGroup)

function handlerGroup(){
    const persona = ['Ana', 'Juana', 'Ivana', 'Juliana', 'Mariana']
    createRandomGroups(perosns, 2)
    const groupItems = parseInt(document.getElementById('groupsItems').value)
    const data = createRandomGroups(elements, groupItems)
    const {inGroups, noGroups} = data
    console.log(inGroups, noGroups)
    let msg = ''
    inGroups.forEach(
        (group, i) => (msg += `Grupo ${i}: ${group.join(',')} + '<br/>`)
    )
    if(noGroups.length) msg += 'No están en grupo: ' + noGroups.join(',')
    document.getElementById('finalGroups').innerHTML=msg
}