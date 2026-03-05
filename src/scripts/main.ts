type Content = {
    date: string,
    concept: string,
    impact: string,
    description: string,
    path_to_visual: string,
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
        path_to_visual: "/img/chillhop_daydreams2_gengwenyi.png",
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
        path_to_visual: "",
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
        path_to_visual: "",
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
        path_to_visual: ""
    },   
    {
        date: "late 1700s through 1800",
        concept: "The Industrial Revolution",
        impact: "exposed weaknesses in classical liberalism",
        description: `The Industrial Revolution, while providing benefits like sewage, and electricity, also resulted in a time where
                      `, // TODO
        path_to_visual: "",
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
        path_to_visual: "",
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
        path_to_visual: "",
        ideology_meter: 5,
        ideology_explanation: `The idea of gender equality—or more broadly, the extension of equality to minority groups—is rooted in modern
                               liberalism and can best be thought of as the intersection between individualism and collectivism.`
    },
    {
        date: "",
        concept: "Labour Unions",
        impact: "challenged classical liberalism",
        description: "",
        path_to_visual: "",
        ideology_meter: 8
    },
    {
        date: "",
        concept: "Robert Owen and Utopian Socialism",
        impact: "supported collectivism",
        description: "",
        path_to_visual: "",
        ideology_meter: 8
    },
    {
        date: "",
        concept: "Karl Marx and The Communist Manifesto",
        impact: "supported collectivism",
        description: "",
        path_to_visual: "",
        ideology_meter: 10
    },
    {
        date: "",
        concept: "The Great Depression and the CCF",
        impact: "pushed liberalism to adapt",
        description: "",
        path_to_visual: "",
        ideology_meter: 8
    },
    {
        date: "",
        concept: "Tommy Douglas and universal healthcare",
        impact: "supported collectivism",
        description: "",
        path_to_visual: "",
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
            <h1>${content[index].concept}</h1>
            <span class="date">[ ${content[index].date} ]</span>
            <span class="impact-tag">[ ${content[index].impact} ]</span>
            <div class="ideology-meter">
                <div class="ideology-filled" style="width: ${content[index].ideology_meter * 10}%; background-color: var(--${colour}); border-color: var(--${colour})"></div>
            </div>
            
            <p class="ideology-explanation">[ ${content[index].ideology_meter} / 10 ]: ${content[index].ideology_explanation}</p>
            <p class="description">${content[index].description}</p>

            <img src=${content[index].path_to_visual} />
        `
    } else if (content[index].ideology_meter == 0) {
        modal.innerHTML += `
            <h1>${content[index].concept}</h1>
            <span class="date">[ ${content[index].date} ]</span>
            <span class="impact-tag">[ ${content[index].impact} ]</span>
            <div class="ideology-meter">
                <div class="ideology-filled" style="width: ${content[index].ideology_meter * 10}%; border: none;" ></div>
            </div>
            
            <p class="ideology-explanation">[ ${content[index].ideology_meter} / 10 ]: ${content[index].ideology_explanation}</p>
            <p class="description">${content[index].description}</p>

            <img src=${content[index].path_to_visual} />
        `
    } else {
        modal.innerHTML += `
            <h1>${content[index].concept}</h1>
            <span class="date">[ ${content[index].date} ]</span>
            <span class="impact-tag">[ ${content[index].impact} ]</span>
            <p class="description">${content[index].description}</p>

            <img src=${content[index].path_to_visual} />
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