export default function DisplayNb({add, bool}: {add: number, bool: boolean}) {
console.log('enfant')    
    return (
        <div style={{width:'100px', padding: '2px', border:'1px solid grey'}}>{add} / {String(bool)}</div>
    )
}