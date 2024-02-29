
async function allApiLoad() {
    let data = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    let datas = await data.json()
    displayFun(datas)
}




function displayFun(json) {
    let apiall = json.data.tools
    // console.log(apiall)
    let totalProduct = apiall.length

    
    apiall.forEach(api => {
        console.log(api)
        let { name, description, image, features, published_in } = api;
        const alldatashow = document.getElementById("alldatashow")


        let blank = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhmTe4FGFtGAgbIwVBxoD3FmED3E5EE99UGPItI0xnQ&s"
        alldatashow.innerHTML += `
        <div class="card  bg-base-100 shadow-xl border-2">
        <figure><img src="${image ? image : blank}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
            Features
            </h2>
            <ul id="allFeatures" class="list-decimal pb-4">
                ${features}
            </ul>
            <hr class="">
            <div class="card-actions justify-between">
                <div>
                    <h1 class="font-bold">${name}</h1>
                    <h1>${published_in}</h1>
                </div>
                <div>
                <i class="fa-solid fa-arrow-right bg-red-200 p-5 rounded-full"></i>
                </div>
            </div>
        </div>
    </div>
        `
        // const allFeatures = document.getElementById("allFeatures");
        // features.forEach(val => {
        //     let li = document.createElement("li")
        //     li.innerText = val;
        //     allFeatures.appendChild(li)
        // })
    })

}

allApiLoad()