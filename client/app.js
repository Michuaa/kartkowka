async function add(){
    const l1 = document.querySelector('#l1').value
    const l2 = document.querySelector('#l2').value

    const url = `http://localhost:3000/add/${l1}/${l2}`
    const data = await fetch(url)
    const response = await data.json()
    document.querySelector('#p1').innerHTML = response
}
