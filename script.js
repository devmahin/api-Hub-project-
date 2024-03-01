
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
        // console.log(api)
        let { name, description, image, features, published_in, id } = api;
        const alldatashow = document.getElementById("alldatashow")
        // let blank = "";
        console.log(id)
        alldatashow.innerHTML += `
        <div class="card  bg-base-100 shadow-xl border-2">
        <figure><img src=${image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhmTe4FGFtGAgbIwVBxoD3FmED3E5EE99UGPItI0xnQ&s'} alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
            Features
            </h2>
            <ul class="feature-list list-decimal">
                  ${features.map((feature) => `<li>${feature}</li>`).join("")}
                </ul>
       
            <hr class="">
            <div class="card-actions justify-between">
                <div>
                    <h1 class="font-bold">${name}</h1>
                    <h1>${published_in}</h1>
                </div>
                <div id="showModal" onclick="showModal(${id})">
                <i class="fa-solid fa-arrow-right bg-red-200 p-5 rounded-full"></i>
                </div>
            </div>
        </div>
    </div>
        `
    })

}

allApiLoad()
const loading = document.getElementById("loading");

async function showModal(id) {
    loading.classList.remove("hidden");
    my_modal_5.showModal()


    let idNum = id <= 9 ? `0${id}` : id;

    // modal fetch 
    let clickData = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${idNum}`)
    let dataConvat = await clickData.json()
    modalShowData(dataConvat)
    // console.log(dataConvat)
}
// showModal()
function modalShowData(data) {
    console.log(data.data)
    let { description, pricing, features, integrations, image_link, input_output_examples } = data.data;
    const modal = document.getElementById("modal")
    modal.innerHTML = `
    <div class="flex-1 space-y-4">
                            <h1 class="text-2xl">${description}</h1>
                            <div class="flex justify-between gap-4">
                                <div class="w-4/12  bg-red-400 p-3 rounded text-center text-base flex justify-center flex-col font-bold">
                                <h1 class="text-wrap">${pricing[0]?.price }
                                </h1>
                                    <h1 class="text-wrap">${pricing[0]?.plan}
                                    </h1>
                                </div>
                                <div class="w-4/12  bg-red-400 p-3 rounded text-center text-base flex justify-center flex-col font-bold">
                                
                                <h1 class="text-wrap">${pricing[1]?.price}
                                </h1>
                                    <h1 class="text-wrap">${pricing[1]?.plan}
                                    </h1>
                                </div>
                                <div class="w-4/12  bg-red-400 p-3 rounded text-center text-base flex justify-center flex-col font-bold">
                                <h1 class="text-wrap">${pricing[2]?.price}
                                </h1>
                                    <h1 class="text-wrap">${pricing[2]?.plan}
                                    </h1>
                                </div>
                                
                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <h1 class="text-3xl">Features</h1>
                                    <ul class="list-disc list-inside">
                                        <li>${features[1]?.feature_name}</li>
                                        <li>${features[2]?.feature_name}</li>
                                        <li>${features[3]?.feature_name}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 class="text-3xl">Integrations</h1>
                                   <ul class="list-disc list-inside">
                                ${integrations.map(val => `<li>${val}</li>`).join("")}
                                   </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex justify-center items-center">
                           <div>
                            <img src="${image_link[0]}" class="w-full h-72 rounded-lg object-cover" alt="">
                            <div class="text-center space-y-2 mt-2">
                                <h1 class="text-2xl">Hi, how are you doing today?</h1>
                                <p class="text-xl">I'm doing well, thank you for asking. How can I assist you today?</p>
                            </div>
                           </div>
                        </div>
    `
    loading.classList.add("hidden");

}
