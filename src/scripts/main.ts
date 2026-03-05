// TODO: FONT FONT FONT FONT FONT FONT FONT

type Content = {
    date: string,
    concept: string,
    impact: string,
    description: string,
    icon: string,
    ideology_meter?: number,
    ideology_explanation?: string
}

let content : Content[] = [
    {
        date: "sometime between 1400 and 1600",
        concept: "Haudenosaunee Confederacy and The Great Law of Peace",
        impact: "strengthened classical liberalism",
        description: `The Haudenosaunee Confederacy is often regarded as one of the first representative democracies in the world.
                      Its six nations all have their own council and chief; chiefs of the councils make up the Grand Council, which deals
                      with issues that affect the confederacy as a whole. The Great Law of Peace serves as their constitution, outlining
                      aspects of governance and ensuring the equal rights of its members. Its ideas are commonly said to have directly
                      influenced the creation of the American Constitution.`,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bow-arrow-icon lucide-bow-arrow"><path d="M17 3h4v4"/><path d="M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17"/><path d="M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05"/><path d="M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"/><path d="M9.707 14.293 21 3"/></svg>',
        ideology_meter: 5,
        ideology_explanation: `The ideals of The Great Law of Peace are very much in line with that of democratic socialism, and the balance
                               between individualism and collectivism.`
    },
    {
        date: "1776",
        concept: "Adam Smith and The Wealth Of Nations",
        impact: "strengthened classical liberalism",
        description: `Adam Smith challenges the ideals of the mercantalist system. He believes that the state-sponsorship of economies creates
                      monopolies, which leads to a poorer product as businesses are not motivated to improve. He proposed the creation of the
                      "free market," where businesses are motivated to create the best product at the lowest price point. An "invisible hand" shall
                      then guide the economy as individuals make decisions based on their own self-interest. This is known as <i>laissez-faire</i>
                      capitalism, where the market is completely free of government intervention.`,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>',
        ideology_meter: 1,
        ideology_explanation: `Adam Smith's idea that society functions best when individuals act in their self-interest aligns with that
                               of individualism.`
    },
    {
        date: "1859",
        concept: "John Stuart Mill and On Liberty",
        impact: "strengthened classical liberalism",
        description: `In <i>On Liberty</i>, John Stuart Mill argues that a government exists only to allow individuals as many rights as 
                      possible. Individual rights and freedoms should only be limited when they may cause harm to another individual. He 
                      states that it is dangerous to silence a controvertial opinion, as said opinion may indicate the need for societal
                      change.`,
        // TODO: add more
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>',
        ideology_meter: 0,
        ideology_explanation: `John Stuart Mill is commonly regarded as the forefather of individualism, and therefore is best aligned
                               with individualist ideals.`
    },
    {
        date: "late 1700s through 1800s",
        concept: "Mercantilism versus Capitalism",
        impact: "strengthened classical liberalism",
        description: `Before the Industrial Revolution, most European countries employed the economic system of mercantilism, where one
                      would export more than one imports. A large number of labourers work to generate profit, but almost all earnings
                      are kept by the government, which commonly implied royalty. Capitalism, however, challenges mercantilism by 
                      declaring that it does not distribute wealth evenly throughout society, and that government intervention is likely
                      to result in a worse product as businesses are not motivated to compete. Capitalism is based on the idea that if 
                      individuals can act freely in their own self-interest, the economy would improve and everyone would benefit. `,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pyramid-icon lucide-pyramid"><path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"/><path d="M12 2v20"/></svg>'
    },   
    {
        date: "late 1700s through 1800",
        concept: "The Industrial Revolution",
        impact: "exposed weaknesses in classical liberalism",
        description: `The Industrial Revolution, while providing benefits like sewage, and electricity, also resulted in a time where
                      `, // TODO
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-train-track-icon lucide-train-track"><path d="M2 17 17 2"/><path d="m2 14 8 8"/><path d="m5 11 8 8"/><path d="m8 8 8 8"/><path d="m11 5 8 8"/><path d="m14 2 8 8"/><path d="M7 22 22 7"/></svg>',
        // ideology_meter: 0
    },   
    {
        date: "1800s through early 1900s",
        concept: "The Factory Acts",
        impact: "pushed liberalism to adapt",
        description: `As the issues of child labour became increasingly visible and problematic in society, many people began to call
                      for change. Liberal governments then began to impose some restrictions on <i>laissez-faire</i> capitalism. The Factory
                      Acts were a series of laws passed by the British government to allow for fairer working conditions in factories, 
                      especially for children. Mandatory schooling was slowly integrated as one of its policies, as well as restrictions on
                      the working hours of employees. `,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory-icon lucide-factory"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></svg>',
        ideology_meter: 3,
        ideology_explanation: `Although some elements of collectivism and equality are implemented with this law, the British government's
                               policies in this era remain minimal, and thus are still aligned with the classical liberal values.`
    },
    {
        date: "mid-1800s through mid-1900s",
        concept: "Early Feminism",
        impact: "pushed liberalism to adapt",
        description: `As the workforce migrated from the country to the city, many women found themselves playing their traditional role as
                      an employee in a factory. The idea of feminism developed during this era; that which would allow women equality in terms
                      of rights and freedoms. The womens' suffrage movement also found its footing during this time, where women fought for the
                      right to vote.`,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-biceps-flexed-icon lucide-biceps-flexed"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/></svg>',
        ideology_meter: 5,
        ideology_explanation: `The idea of gender equality—or more broadly, the extension of equality to minority groups—is rooted in modern
                               liberalism and can best be thought of as the intersection between individualism and collectivism.`
    },
    {
        date: "",
        concept: "Labour Unions",
        impact: "challenged classical liberalism",
        description: "",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>',
        ideology_meter: 8
    },
    {
        date: "",
        concept: "Robert Owen and Utopian Socialism",
        impact: "supported collectivism",
        description: "",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-heart-icon lucide-hand-heart"><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"/><path d="m2 15 6 6"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"/></svg>',
        ideology_meter: 8
    },
    {
        date: "",
        concept: "Karl Marx and The Communist Manifesto",
        impact: "supported collectivism",
        description: "",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer-icon lucide-hammer"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>',
        ideology_meter: 10
    },
    {
        date: "",
        concept: "The Great Depression and the CCF",
        impact: "pushed liberalism to adapt",
        description: "",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wheat-icon lucide-wheat"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"/></svg>',
        ideology_meter: 8
    },
    {
        date: "",
        concept: "Tommy Douglas and universal healthcare",
        impact: "supported collectivism",
        description: "",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-medical-icon lucide-briefcase-medical"><path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
        ideology_meter: 8
    }
]

let cards = Array.from(document.getElementsByClassName("timeline-entry"))

for (let i = 0; i < content.length; i++) {
    let title = document.createElement("p")
    title.appendChild(document.createTextNode(content[i].concept))
    cards[i].appendChild(title)
}

cards.forEach(card => {
    card.addEventListener("click", (e) => {
        var node = e.target as Element
        if (node.tagName.toLowerCase() != "div") {
            showModal(cards.indexOf(node.parentElement as Element))
        } else {
            showModal(cards.indexOf(e.target as Element))
        }
    })
})



let backdrop = document.querySelector(".modal") as HTMLElement
backdrop.addEventListener("click", (e) => {
    if ((e.target as Element).id == "close-modal") {
        hideModal()
    }
})

window.addEventListener("click", (e) => {
    if (e.target == backdrop) {
        hideModal()
    }
})

async function showModal(index: number) {
    console.log(content[index].ideology_meter)

    var modal = document.querySelector(".modal-popup") as HTMLElement
    Array.from(modal.children).forEach((element) => {
        if (element.id != "close-modal") {
            element.remove() // Scary!
        }
    })

    var colour

    if (index <= 4) {
        colour = "sky"
    } else if (index >= 5 && index <= 8) {
        colour = "green"
    } else if (index >= 9) {
        colour = "maroon"
    }

    backdrop.style.display = "block"


    if (content[index].ideology_meter != undefined && content[index].ideology_meter != 0) {
        modal.innerHTML += `
            <div class="heading">
                ${content[index].icon}
                <h1>${content[index].concept}</h1>
            </div>
            <span class="date">[ ${content[index].date} ]</span>
            <span class="impact-tag">[ ${content[index].impact} ]</span>
            <div class="ideology-meter">
                <div class="ideology-filled" style="width: ${content[index].ideology_meter * 10}%; background-color: var(--${colour}); border-color: var(--${colour})"></div>
            </div>
            
            <p class="ideology-explanation">[ ${content[index].ideology_meter} / 10 ]: ${content[index].ideology_explanation}</p>
            <p class="description">${content[index].description}</p>
        `
    } else if (content[index].ideology_meter == 0) {
        modal.innerHTML += `
            <div class="heading">
                ${content[index].icon}
                <h1>${content[index].concept}</h1>
            </div>
            <span class="date">[ ${content[index].date} ]</span>
            <span class="impact-tag">[ ${content[index].impact} ]</span>
            <div class="ideology-meter">
                <div class="ideology-filled" style="width: ${content[index].ideology_meter * 10}%; border: none;" ></div>
            </div>

            <p class="ideology-explanation">[ ${content[index].ideology_meter} / 10 ]: ${content[index].ideology_explanation}</p>
            <p class="description">${content[index].description}</p>
        `
    } else {
        modal.innerHTML += `
            <div class="heading">
                ${content[index].icon}
                <h1>${content[index].concept}</h1>
            </div>
            <span class="date">[ ${content[index].date} ]</span>
            <span class="impact-tag">[ ${content[index].impact} ]</span>
            <p class="description">${content[index].description}</p>
        `
    }



    // <span class="cause-effect">influenced -> the American Constitution</span>
    // <span class="cause-effect">influenced -> modern-day rights and freedoms in Canada</span>

    await new Promise(e => setTimeout(e, 40))
    backdrop.classList.add("visible")
}

async function hideModal() {
    backdrop.classList.remove("visible")
    await new Promise(e => setTimeout(e, 40))
    backdrop.style.display = "none"
}