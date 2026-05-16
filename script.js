// 所有E听说答案图片数据 自行增删
const answerData = [
    {
        title: "第11周周末听说套题练习",
        tag: "第11周",
        img: "images/Image 5-16-2026 2012.png"
    }
];

// 渲染列表
function renderList(list) {
    const box = document.getElementById("answerList");
    box.innerHTML = "";
    list.forEach(item => {
        box.innerHTML += `
        <div class="answer-card">
            <img src="${item.img}" alt="${item.title}">
            <div class="card-text">
                <h3>${item.title}</h3>
                <span>${item.tag}</span>
            </div>
        </div>
        `
    })
}

// 初始渲染
renderList(answerData);

// 搜索功能
document.getElementById("search").addEventListener("input", e=>{
    let key = e.target.value.trim().toLowerCase();
    let filter = answerData.filter(v=>
        v.title.includes(key) || v.tag.includes(key)
    )
    renderList(filter);
})
