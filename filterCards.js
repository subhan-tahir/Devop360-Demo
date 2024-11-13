let filterCardsContainer = document.getElementById('filter-container');
let filterRightCardsContainer = document.getElementById('filter-cards-containers');
let filterSidebar = document.getElementById('filter-sidebar');
let closedFilterSidebar = document.getElementById('closedFilterSidebar');
let filterBgOverlay = document.getElementById('filterSidebarBgOverlay');

let cursorPointer = document.querySelector('.cursor-circle');
let mainContainer = document.querySelector('.main-container');
mainContainer.addEventListener('mousemove',(e)=>{
gsap.to(cursorPointer,{
    x:e.x,
    y:e.y,
    duration:1,
    ease:"back.out",
})
})
gsap.from('.hero-title h1',{
    opacity:0,
    duration:2,
    delay:1,
    y:300,
})

gsap.from(".scroll-to-top", {
    y: -20,
    repeat: -1,
    yoyo: true, 
    duration: 1,
    ease: "power1.inOut"
});
function filterBtnToggle() {
    filterSidebar.classList.toggle('activeFilterSidebar');
    body.classList.add('overflow-hidden');
    body.classList.add('body-overlay');
    filterBgOverlay.classList.add('filter-bg-overlay');
}
function closedfilterSidebar(){
    filterSidebar.classList.remove('activeFilterSidebar');
    body.classList.remove('overflow-hidden');
    body.classList.remove('body-overlay');
    filterBgOverlay.classList.remove('filter-bg-overlay');
}


// document.addEventListener('click',()=>{
//    if(!filterSidebar.contains(e.target)){
//     filterSidebar.classList.remove('activeFilterSidebar')
//    }
// })


// let filterCard = document.querySelector('.filter-options-wrapper');
let filterCardsData = [

    {
        item: 'Industry',
        subItems: [
            { subOption: 'Content Writer', filterCounter: 1 },
            { subOption: 'Customer Help', filterCounter: 2 },
            { subOption: 'Market Research', filterCounter: 3 },
            { subOption: 'Market Research', filterCounter: 3 },
            { subOption: 'Market Research', filterCounter: 3 },
            { subOption: 'Market Research', filterCounter: 3 },
            { subOption: 'Market Research', filterCounter: 3 },
            { subOption: 'Market Research', filterCounter: 3 },
            { subOption: 'Market Research', filterCounter: 3 },
        ]
    },

    {
        item: 'Experience Level',
        subItems: [
            { subOption: 'Fresh', filterCounter: 4 },
            { subOption: 'Less Than 1 year', filterCounter: 5 },
            { subOption: '1 Year', filterCounter: 6 },
        ]
    },


    {
        item: 'Job Posted',
        subItems: [
            { subOption: 'Last hour', filterCounter: 7 },
            { subOption: 'Last 24 hours', filterCounter: 8 },
            { subOption: 'Last 7 days', filterCounter: 9 },



        ]
    },

    {
        item: 'Job type',
        subItems: [
            { subOption: 'Freelance', filterCounter: 10 },
            { subOption: 'Contract', filterCounter: 11 },
            { subOption: 'Full TI', filterCounter: 12 },



        ]
    },

    {
        item: 'Skill',
        subItems: [
            { subOption: 'Laravel', filterCounter: 12 },
            { subOption: 'PHP', filterCounter: 12 },
            { subOption: 'Javascript', filterCounter: 12 },
        ]
    },

];

let rightCardsData = [
    {
        topTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident.',
        bottomTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.123',
        timePeriod: 'Full Time',
        duration: '2 days ago',
        para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente perspiciatis modi.',
        cardDetailLink: 'JobDetails.html'
    },
    {
        topTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident.',
        bottomTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.456',
        timePeriod: 'Full Time',
        duration: '3 days ago',
        para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente perspiciatis modi.',
        cardDetailLink: 'JobDetails.html'
    },
    {
        topTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident.',
        bottomTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.789',
        timePeriod: 'Full Time',
        duration: '4 days ago',
        para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente perspiciatis modi.',
        cardDetailLink: 'JobDetails.html'
    },
    {
        topTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident.',
        bottomTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        timePeriod: 'Full Time',
        duration: '4 days ago',
        para: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente perspiciatis modi.',
        cardDetailLink: 'JobDetails.html',
    },
]
filterCardsData.map((filterItem, filterItemIndex) => {
    // let filterCard = document.createElement('div');
    // filterCard.classList.add('filter-options-wrapper')
    // filterCardsContainer.innerHTML = filterCardsContainer.innerHTML + `
    filterCardsContainer.innerHTML += `
        <div class="filter-options-wrapper">
                            <div class="filter-title">
                                  <h1>${filterItem.item}</h1> 
                            </div>
                        <div class="filter-option">
                                ${filterItem.subItems.map((subItem, subIndex) =>
        `
                                    <div class="filter-option-inner">
                                        <div class="filter-item">
                                            <input type="checkbox" id="" value="${subItem}">
                                            <label for="">${subItem.subOption}</label>
                                        </div>
                                        <div class="filter-counter">${subItem.filterCounter}</div>
                                        
                                    </div>`).join('')}
                        </div>
        </div>
    
    
    `
    // filterCardsContainer.appendChild(filterCard)
})

let filterItems = document.querySelectorAll('.filter-item');
filterItems.forEach((filterItem,i)=>{
    filterItem.querySelectorAll('label')[0].addEventListener('click',function(){
        let check = this.previousElementSibling;
        check.checked = !check.checked;
    })
})

    rightCardsData.map((cardItem, cardIndex) => {
    filterRightCardsContainer.innerHTML += `
    <a  href=${cardItem.cardDetailLink} > <div class="filter-card">
                            <div class="card-inner">
                                <div class="top-inner-card">
                                    <div class="top-logo">
                                        <img src="images/Group.png" alt="card-pic" style="filter: invert(1);">
                                        <span>Devop360 Demo</span>
                                    </div>
                                    <div class="top-header">
                                        <h1>${cardItem.topTitle}</h1>
                                    </div>
                                </div>
                                <div class="bottom-inner-card">
                                    <div class="bottom-box1"><h1>${cardItem.bottomTitle}</h1></div>
                                    <div  class="bottom-box2">
                                        <div class="left-box2">
                                            <i class="fa-solid fa-briefcase"></i>
                                            <span>${cardItem.timePeriod}</span>
                                        </div>
                                        <div class="right-box2">
                                            <i class="fa-regular fa-clock"></i>
                                            <span>${cardItem.duration}</span>
                                        </div>
                                    </div>
                                    <div  class="bottom-box3">
                                        <p>${cardItem.para}</p>
                                    </div>
                                    <div class="bottom-box4">
                                        <h1>Attractive</h1>
                                        <button>Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
    </a>
    
    `
});

