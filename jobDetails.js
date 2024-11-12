let whopCardsContainer = document.getElementById('whop-cards-container');

let whopCardsData = [
'Customer Reliability',
'Senior Accessibility Program Manager',
'Senior Customer Success Manager',
'Program Manager',
'Digital Marketing Manager',
];
whopCardsData.map((cardsHeading)=>{
    whopCardsContainer.innerHTML+=`  <div class="whop-bottom-card">
                                    <img src="images/Fly Chat Logo.jfif" alt="">
                                    <div class="bottom-left">
                                        <div class="customer-header">
                                            <h1>${cardsHeading}</h1>
                                        </div>
                                        <div class="left-bottom-header">
                                            <div class="relevant-Detail">
                                                <i class="fa-solid fa-briefcase"></i>
                                                <span>Freelance</span>
                                            </div>
                                            <div  class="relevant-Detail">
                                                <i class="fa-regular fa-clock"></i>
                                                <span>1 month ago</span>
                                            </div>
                                            <div  class="relevant-Detail">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <span>France, FRA</span>
                                            </div>
                                        </div>
                                        <div class="sign-bottom-headeing">
                                            <h1><img src="images/coin.png" alt="" style="width: 24px; height: 24px;
                                            "> Sign in to view Salary</h1>
                                        </div>
                                    </div>

                                </div>`
})